import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../Header";
import Footer from "../../Footer";
import ScrollReveal from "../../components/ScrollReveal";
import Link from "next/link";
import { getBlogPostBody } from "../post-registry";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";

const siteUrl = "https://www.oakkhmerangkor.com";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Not found" };
  }
  const ogPath = post.ogImage ?? post.heroImage;
  return {
    title: `${post.title} | Oakland Khmer Angkor Dance Troupe`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: `${siteUrl}${ogPath}` }],
    },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  const PostBody = post ? getBlogPostBody(slug) : undefined;

  if (!post || !PostBody) {
    notFound();
  }

  return (
    <main>
      <Header />

      <div className="bg-white">
        <div className="flex flex-col items-center justify-center w-full p-5 pt-0 mb-10 pb-10 px-5 lg:px-10 bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px] animate-[fade-me-in_1.2s_ease-out]">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">
                Blog
              </div>
              <div className="text-3xl font-bold tracking-wide">{post.title}</div>
              <p className="mt-3 text-sm text-gray-600">
                {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="flex w-full max-w-[1040px] mt-10">
            <div className="relative w-full h-[min(70vw,500px)] min-h-[250px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={post.heroImage}
                alt={post.heroAlt}
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1040px) 1040px, 100vw"
              />
            </div>
          </div>

          <ScrollReveal delay={100}>
            <div className="flex flex-col w-full max-w-[1040px] mt-4">
              <PostBody />
            </div>
          </ScrollReveal>

          <div className="flex justify-center w-full max-w-[1040px] mt-12 mb-4">
            <Link
              href="/blog"
              className="text-[#F28904] hover:text-[#5E489A] font-medium transition-colors"
            >
              ← Back to all stories
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
