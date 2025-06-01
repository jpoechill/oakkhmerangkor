
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from "next/image";
import Header from "../../Header"
import Footer from "../../Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Oakland Khmer Angkor Dance Troupe | Meet Our Students",
  description: "Discover the bright young talents of the Oakland Khmer Angkor Dance Troupe. Learn more about each student’s background, passions, and cultural journey.",
  openGraph: {
    images: 'https://www.oakkhmerangkor.com/profiles/sora.jpeg',
  },
};
interface Section {
  id: number;
  name: string;
}

// Define a strict type for Blog Post
interface BlogPost {
  id: string
  slug: string
  title: string
  contentFirst: string
  contentSecond: string
  thumbnail: string
  thumbnails: string[]
  labels: string[]
}

// Type-safe blog post repository
class BlogPostRepository {
  private posts: BlogPost[] = [
    {
      id: "1",
      slug: "sora",
      title: "Sora",
      contentFirst: "Sora is a bright and curious 12-year-old in 7th grade at Cesar Chavez Middle School in Union City. The youngest of four siblings, she brings a thoughtful and creative energy to her family. She enjoys drawing and has a natural interest in math, which she approaches with enthusiasm. With Korean and Cambodian roots, Sora is shaped by a rich blend of cultural traditions and values.",
      contentSecond: "Though she’s still exploring her future path, Sora once dreamed of attending Stanford University. That early ambition reflects her imagination and drive as she continues to discover new interests and learn more about herself each day.",
      thumbnail: "/thumbs/apsara.png",
      thumbnails: ["apsara/Rhythmix-API-2025-3018.jpg", "apsara/Rhythmix-API-2025-3052.jpg", "apsara/Rhythmix-API-2025-3055.jpg", "apsara/Rhythmix-API-2025-3084.jpg", "apsara/apsara.jpg"],
      labels: ["curious", "thoughtful", "creative"]
    },
  ]

  // Type-safe method to get post by slug
  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(post => post.slug === slug)
  }

  // Type-safe method to get all slugs
  getAllSlugs(): string[] {
    return this.posts.map(post => post.slug)
  }
}

// Create repository instance
const blogPostRepository = new BlogPostRepository()


// Type-safe metadata generation
export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = blogPostRepository.getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post does not exist'
    }
  }

  return {
    title: post.title,
    // description: `Blog post by ${post.author.name}`,
    // authors: [{ name: post.author.name }],
    // keywords: post.tags
  }
}

// Generate static params for pre-rendering
export function generateStaticParams(): { slug: string }[] {
  return blogPostRepository.getAllSlugs().map(slug => ({ slug }))
}

// Type-safe page component
export default function BlogPostPage({
  params
}: {
  params: { slug: string }
}) {
  // Fetch post with type checking
  const post = blogPostRepository.getPostBySlug(params.slug)

  // Handle non-existent posts
  if (!post) {
    notFound()
  }

  let handleImgClick = () => {
    alert('Img clicked')
  }

  const sections: Section[] = post.thumbnails.map((post, postId) => {
    return { id: postId, name: post }
  })

  return (
    <main className='relative'>

      <Header></Header>
      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 mb-10 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px] mb-5">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">
                Student Profiles
              </div>
              <div className="text-3xl font-bold tracking-wide">
                Meet Our Dancers
              </div>
            </div><br /><br />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* {post.thumbnail} */}
              <div>
                {/* First Image Button */}
                <div className="z-1 w-full rounded-2xl">
                  <div className="z-1 w-full rounded-2xl">
                    <Image
                      src={'/profiles/sora.jpeg'}
                      alt={`Student Profile`}
                      className="w-full h-auto rounded-2xl shadow-md"
                      width={300}
                      height={300}
                    />
                  </div></div>

                <div className="md:pt-5"></div>

                {/* Other Buttons in Grid Layout */}
                {/* <div className="grid grid-cols-2 gap-5">
                  {sections.slice(1).map((section) => (
                    <ClientModalWithScroll key={section.id} section={section} sections={sections} isFirstButton={false} />
                  ))}
                </div> */}
              </div>
              <div className="text-md">
                <div style={{
                  position: 'sticky',
                  top: '94px',
                }}
                // className='mt-[100px]'
                >

                  <div className="text-2xl  font-serif font-bold md:pt-4 tracking-wide">
                    {/* <br /> */}
                    {post.title}
                  </div>
                  <br />
                  <div className="font-light text-md">
                    {post.contentFirst}
                    <br /><br />
                    {post.contentSecond}

                    <br /><br />
                    {post.labels.map(function (label, idx) {
                      return (
                        <button key={idx} className="bg-[#D42E5E] hover:bg-[#D45A7D] border-none text-white mr-3 opacity-[1] py-1 px-4 cursor-pointer text-sm rounded-2xl">
                          {label}
                        </button>
                      )
                    })}

                  </div>
                </div>

              </div>
            </div>

            <div className="pt-[50px]"></div>

          </div>
        </div>
        <div className="pb-[5px]"></div>
      </div>
      <Footer></Footer>
    </main>
  )
}

// Optional: Type checking for dynamic routes
export const dynamicParams = true