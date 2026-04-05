This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Hero video missing in production?

The homepage hero uses `public/hero/stage_2026.mp4`, which is tracked with **Git LFS**. If Vercel’s **Git LFS** option is off, the build copies only the **LFS pointer** (a tiny text file), not the real MP4—so the `<video>` has nothing valid to play.

**Do one of the following, then trigger a new deployment:**

1. **Turn on Git LFS for the project** — Dashboard → your project → **Settings** → **Git** → enable **Git Large File Storage (LFS)** → **Redeploy**. (Vercel [documents](https://vercel.com/docs/project-configuration/git-settings) that you must redeploy after enabling LFS.)
2. **Or host the file on Vercel Blob** — Run `npm run blob:upload` locally, then add **`NEXT_PUBLIC_HERO_VIDEO_URL`** = the printed URL under Vercel → **Settings** → **Environment Variables** (Production). **`NEXT_PUBLIC_*` values are baked in at build time**, so you must **redeploy** after changing them.

## Large media (Git LFS + Vercel Blob)

**Git LFS** stores big files (hero `.mp4` / `.webm` under `public/hero/`) outside normal Git blobs. Patterns live in [`.gitattributes`](./.gitattributes).

1. Install [Git LFS](https://git-lfs.com/) (e.g. `brew install git-lfs`).
2. In this repo, run once: `git lfs install`.
3. After clone, fetch binaries: `git lfs pull` (or `npm run lfs:pull`).

**Vercel Blob** serves the hero video (and other uploads) from the edge without putting them in Git.

1. In Vercel: **Storage** → **Blob** → create a store and attach it to this project.
2. Add `BLOB_READ_WRITE_TOKEN` to `.env.local` (use the read/write token from the Blob store).
3. Run `npm run blob:upload` (optional args: `path/to/file blob/pathname`). Copy the printed `NEXT_PUBLIC_HERO_VIDEO_URL` into `.env.local` and into Vercel **Environment Variables** for Production.
4. Redeploy. The hero uses `NEXT_PUBLIC_HERO_VIDEO_URL` when set; otherwise it falls back to `/hero/stage_2026.mp4` for local files.

See [`.env.example`](./.env.example) for variable names.
