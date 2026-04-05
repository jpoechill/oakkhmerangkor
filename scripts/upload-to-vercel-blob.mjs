#!/usr/bin/env node
/**
 * Upload a local file to Vercel Blob (public URL).
 *
 * Prerequisites:
 * 1. Vercel project → Storage → Blob → create store → copy Read/Write token
 * 2. BLOB_READ_WRITE_TOKEN in shell or .env.local
 *
 * Usage:
 *   npm run blob:upload
 *   npm run blob:upload -- public/hero/stage_2026.mp4 hero/stage_2026.mp4
 */

import { createReadStream, existsSync, readFileSync, statSync } from "fs";
import { basename, resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { put } from "@vercel/blob";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function loadEnvFile(name) {
  const p = resolve(root, name);
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined || process.env[key] === "") {
      process.env[key] = val;
    }
  }
}

loadEnvFile(".env.local");

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error(
    "Missing BLOB_READ_WRITE_TOKEN. Add it to .env.local or export it.\n" +
      "Vercel → Project → Storage → Blob → .env.local snippet (read/write)."
  );
  process.exit(1);
}

const localPath = resolve(root, process.argv[2] || "public/hero/stage_2026.mp4");
const blobPath =
  process.argv[3] || defaultBlobPath(localPath, root);

if (!existsSync(localPath)) {
  console.error("File not found:", localPath);
  process.exit(1);
}

const size = statSync(localPath).size;
const stream = createReadStream(localPath);

const { url } = await put(blobPath, stream, {
  access: "public",
  token,
  addRandomSuffix: false,
  contentType: guessContentType(localPath),
  multipart: size > 4 * 1024 * 1024,
});

console.log("\nUploaded:", url);
console.log("\nAdd to .env.local and Vercel → Environment (Production):\n");
if (/\.mp4$/i.test(localPath)) {
  console.log(`NEXT_PUBLIC_HERO_VIDEO_URL=${url}\n`);
} else {
  console.log(`# Use this URL in your app or as another NEXT_PUBLIC_* var:\n${url}\n`);
}

function defaultBlobPath(absLocal, repoRoot) {
  const rel = absLocal.replace(/\\/g, "/");
  const rootNorm = repoRoot.replace(/\\/g, "/");
  const fromRoot = rel.startsWith(rootNorm) ? rel.slice(rootNorm.length + 1) : rel;
  const pub = "public/";
  if (fromRoot.startsWith(pub)) return fromRoot.slice(pub.length);
  return basename(absLocal);
}

function guessContentType(filePath) {
  const lower = filePath.toLowerCase();
  if (lower.endsWith(".mp4")) return "video/mp4";
  if (lower.endsWith(".webm")) return "video/webm";
  if (lower.endsWith(".pdf")) return "application/pdf";
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  return undefined;
}
