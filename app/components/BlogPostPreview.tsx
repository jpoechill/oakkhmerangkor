import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";
import ScrollReveal from "./ScrollReveal";

type Props = {
  post: BlogPost;
  /** First home “Recent Events” row: section title + hr */
  showSectionHeading?: boolean;
  /** Second and later cards: extra top spacing to match home layout */
  stackBelow?: boolean;
};

export default function BlogPostPreview({
  post,
  showSectionHeading = false,
  stackBelow = false,
}: Props) {
  const href = `/blog/${post.slug}`;
  const excerptBlocks = post.excerpt.split("\n\n");

  return (
    <ScrollReveal
      className={`flex justify-center w-full p-5 px-10 ${
        showSectionHeading ? "mt-3 mb-0 pb-0 my-5" : "mt-3 my-5"
      }`}
    >
      <div className={`flex flex-col w-full max-w-[1040px] ${stackBelow ? "mt-3" : ""}`}>
        {showSectionHeading && (
          <>
            <h2 className="text-md text-center font-bold">Recent Events</h2>
            <hr className="my-4" />
            <br />
          </>
        )}
        <article className="w-full rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-8 shadow-xl group/card">
          <div className="col-span-5 relative h-full min-h-[250px] w-full overflow-hidden">
            <Link
              href={href}
              className="block h-full min-h-[250px] relative w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28904] focus-visible:ring-offset-2 rounded-l-2xl lg:rounded-l-2xl lg:rounded-r-none"
            >
              <Image
                src={post.heroImage}
                alt={post.heroAlt}
                className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover/card:scale-[1.02]"
                fill
                sizes="(max-width: 1024px) 100vw, 62.5vw"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="col-span-3 font-light p-5 text-md flex flex-col">
            <h3 className="font-bold text-lg">
              <Link href={href} className="text-inherit hover:text-[#F28904] transition-colors">
                {post.title}
              </Link>
            </h3>
            <div className="mt-4 flex-1 text-[#333]">
              {excerptBlocks.map((block, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>
                  {block}
                </p>
              ))}
            </div>
            <p className="mt-4">
              <Link
                href={href}
                className="text-[#F28904] hover:text-[#5E489A] text-sm font-medium transition-colors"
              >
                Read more →
              </Link>
            </p>
          </div>
        </article>
      </div>
    </ScrollReveal>
  );
}
