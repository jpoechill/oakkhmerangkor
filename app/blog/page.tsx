import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import ScrollReveal from "../components/ScrollReveal";
import BlogPostPreview from "../components/BlogPostPreview";
import { getAllPostsSorted } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Oakland Khmer Angkor Dance Troupe",
  description:
    "Stories and updates from the Oakland Khmer Angkor Dance Troupe — performances, community events, and practice season highlights.",
};

export default function BlogIndexPage() {
  const posts = getAllPostsSorted();

  return (
    <main>
      <Header />

      <div className="bg-white pb-24 lg:pb-32">
        <div className="animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full pt-[130px]">
            <div className="text-center px-5">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">
                Blog
              </div>
              <div className="text-3xl font-bold tracking-wide">
                Stories That Dance With Us
              </div>
            </div>
          </div>

          <ScrollReveal className="flex justify-center w-full p-5 px-10 mt-8 mb-0">
            <div className="flex flex-col w-full max-w-[1040px] text-center">
              <h2 className="text-md font-bold">Recent Events</h2>
              <hr className="my-4" />
            </div>
          </ScrollReveal>

          {posts.map((post, index) => (
            <BlogPostPreview key={post.slug} post={post} stackBelow={index > 0} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
