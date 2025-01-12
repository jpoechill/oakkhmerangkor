import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from "next/image";
import Header from "../../Header"
import Footer from "../../Footer"
import Link from "next/link"

// Define a strict type for Blog Post
interface BlogPost {
  id: string
  slug: string
  title: string
  contentFirst: string
  contentSecond: string
  thumbnail: string
}

// Type-safe blog post repository
class BlogPostRepository {
  private posts: BlogPost[] = [
    {
      id: "1",
      slug: "apsara",
      title: "Apsara",
      contentFirst: "Apsara is a classical Cambodian dance that draws inspiration from the celestial dancers, or 'Apsaras,' in Hindu mythology, who are believed to be divine and graceful beings. The dance is characterized by slow, fluid movements that emphasize elegance and beauty. Dancers wear intricate costumes, including headdresses and jewelry, and perform to music from the traditional Pinpeat orchestra. The dance embodies divine grace and is often performed to honor the gods or during important cultural ceremonies and celebrations.",
      contentSecond: "The Apsara dance has deep spiritual and cultural significance in Cambodia, often seen as a connection between the human and divine realms. The dancers convey complex emotions and stories through intricate hand gestures and delicate poses, bringing to life the celestial beings they represent. The Apsara dance is considered a symbol of grace and beauty, often performed during royal events, national celebrations, and religious ceremonies. It has become an iconic part of Cambodian culture and heritage, showcasing the country's rich artistic history.",
      thumbnail: "/thumbs/apsara.png"
    },
    {
      id: "2",
      slug: "coconut",
      title: "Coconut",
      contentFirst: "The Coconut dance is a lively and joyful performance often seen during festivals and celebrations in Cambodia. It involves dancers using coconuts as props, tapping them together in rhythmic patterns while performing lively, upbeat choreography. The dance is meant to create a fun, festive atmosphere and is often performed in a group, reflecting the spirit of community and togetherness. It may also symbolize the agricultural lifestyle of the Cambodian people, with coconuts being a common natural resource in their environment.",
      contentSecond: "The Coconut dance is typically performed during traditional holidays, weddings, and other community celebrations. The use of coconuts as props enhances the rhythm of the performance, adding an element of fun and playfulness to the dance. It is a lively expression of joy, symbolizing the prosperity and abundance that coconuts represent in Cambodian culture. The dance reinforces the importance of community bonds and the connection to nature, making it a popular and cherished tradition in the country.",
      thumbnail: "/thumbs/coconut.png"
    },
    {
      id: "3",
      slug: "love-moon",
      title: "Love Moon",
      contentFirst: "The Love Moon dance reflects themes of romance, longing, and beauty, inspired by the moon's mystical and romantic associations in Cambodian culture. The dance is performed with soft, graceful movements that express the emotions of love, passion, and desire, often symbolized by the moon’s glow. The dancers' fluid motions evoke the mysterious allure of the moon, with costumes and choreography designed to reflect the tranquility and beauty of a romantic evening under the moonlight.",
      contentSecond: "In Cambodian culture, the moon has long been associated with beauty and the ideals of love and longing. The Love Moon dance expresses these feelings through carefully crafted choreography, where the dancers embody the mood of a romantic evening. The performance creates a sense of dreaminess and elegance, using the moon as a metaphor for love’s subtle, enduring power. This dance is often performed during celebrations or events focused on love, romance, and the beauty of nature.",
      thumbnail: "/thumbs/lovemoon.png"
    },
    {
      id: "4",
      slug: "kane",
      title: "Kane",
      contentFirst: "Robam Ken is a traditional Cambodian folk dance originating from Stung Treng Province, created in 1967 and typically performed during New Year celebrations. The dance portrays a romantic courtship scene between young men and women, highlighting social interactions through stylized movements.",
      contentSecond: "The performance is characterized by the use of the Ken, a unique wind instrument, and dancers wearing traditional krama scarves. As a cultural expression, Robam Ken represents the rich musical and social traditions of northern Cambodia, showcasing the artistic heritage of the Khmer people through its choreography and musical accompaniment.",
      thumbnail: "/thumbs/kane.png"
    },
    {
      id: "5",
      slug: "flower",
      title: "Flower",
      contentFirst: "The Flower dance is a symbolic expression of beauty, purity, and the natural world. The movements of the dancers often mimic the growth of flowers, from the budding of a blossom to the full bloom, capturing the delicate and graceful nature of flowers. Performers use gentle, flowing hand gestures to represent the opening petals of a flower and synchronized steps to evoke the rhythm of nature. This dance highlights the deep connection between the people of Cambodia and the natural world, as well as the cultural reverence for growth, beauty, and renewal.",
      contentSecond: "The Flower dance celebrates the cycle of life, from growth to blooming and eventual fading, mirroring the natural processes that shape the world around us. Dancers often wear floral-inspired costumes, adding to the visual effect of the performance. The dance can also symbolize the beauty and fragility of life, inviting the audience to appreciate the delicate and fleeting moments of existence. It is a peaceful, meditative performance that connects viewers with the natural beauty and cycles of life, often performed in cultural or spiritual contexts.",
      thumbnail: "/thumbs/flower.png"
    },
    {
      id: "6",
      slug: "blessing",
      title: "Blessing",
      contentFirst: "The Blessing dance is a ceremonial performance performed at religious rituals or significant events like weddings. The dancers’ movements invoke blessings of good fortune, health, and prosperity, often accompanied by offerings of flowers, incense, or symbolic gestures. Slow, deliberate movements create a spiritual atmosphere, emphasizing the cultural belief in the power of positive energy, prayer, and community support to bring blessings and protection.",
      contentSecond: "Performed with grace and solemnity, the Blessing dance offers thanks, seeks guidance, and invokes divine favor. An integral part of Cambodian spiritual and cultural traditions, it connects with ancestors and deities. The choreography creates a peaceful ambiance, encouraging reflection on life's blessings. Often performed at significant events, it reinforces values of community, respect, and gratitude.",
      thumbnail: "/thumbs/blessing.png"
    },
    {
      id: "7",
      slug: "stick",
      title: "Stick",
      contentFirst: "The Cambodian Pestle dance, also known as the 'Lkhon Khruang',  is a traditional performance that mimics the rhythmic motions of pounding rice with a pestle. It is typically performed by women, who use wooden pestles in their hands while executing coordinated and graceful movements. The dance is accompanied by lively music and often tells a story related to agricultural life, emphasizing the hard work and resilience of farmers. The rhythmic sound of the pestles striking the ground adds to the dance&quot;s energetic and vibrant atmosphere.",
      contentSecond: "The Pestle dance holds cultural significance, symbolizing the essential role of agriculture in Cambodian society. It is commonly performed during festivals or harvest celebrations, highlighting the connection between the people and the land. The dance not only reflects the daily tasks of rural life but also reinforces values of cooperation, unity, and the importance of community effort in sustaining life.",
      thumbnail: "/thumbs/stick.png"
    },
    {
      id: "8",
      slug: "choun-por",
      title: "Choun Por",
      contentFirst: "Choun Por is a festive dance that highlights joy, community, and unity. Performed in groups, dancers engage in synchronized movements to celebrate together. The lively choreography, with energetic gestures and footwork, symbolizes the shared happiness and harmony of Cambodian society during important events or holidays.",
      contentSecond: "Choun Por is often performed during festivals, weddings, and national holidays, with the entire community joining in. The rhythmic patterns and synchronized movements foster a sense of connection between dancers and the audience, emphasizing unity, cooperation, and shared joy. This dance celebrates Cambodian culture and the importance of togetherness.",
      thumbnail: "/thumbs/choun.png"
    },
    {
      id: "9",
      slug: "mon-mekhala",
      title: "Mon Mekhala",
      contentFirst: "The Mon Mekhala dance is a dramatic and elegant performance that tells the story of the goddess Mon Mekhala, who controls the weather, particularly rain, and symbolizes fertility and prosperity. In this dance, the performer embodies the goddess's grace and divine power, with slow, flowing movements that depict the goddess's ability to bring balance to nature. The dance often features intricate hand gestures and elegant poses that convey the goddess’s connection to the forces of nature, such as the rain and the sea.",
      contentSecond: "Mon Mekhala is a revered figure in Cambodian mythology, embodying the qualities of femininity, fertility, and divine protection. The dance represents the power of nature and the connection between humans and the natural world. Dancers performing the Mon Mekhala often wear elaborate costumes and perform with fluid movements that evoke the natural elements, symbolizing the goddess's power over rain, storms, and growth. This performance is a tribute to nature's life-giving forces and a reminder of the interconnectedness of all living things.",
      thumbnail: "/thumbs/other_1.png"
    },
    {
      id: "10",
      slug: "plet",
      title: "Plet",
      contentFirst: "Plet is a traditional Cambodian dance performed as an offering of respect and devotion during religious ceremonies or important life events. The dance's movements are intended to honor deities or ancestors, creating an atmosphere of reverence and spirituality. The dancers' slow and deliberate gestures convey respect and humility, and the dance is often accompanied by prayers or hymns. The choreography is designed to reflect the solemnity and sanctity of the occasion, reinforcing the connection between the human and divine realms.",
      contentSecond: "Plet is often performed at religious festivals or ceremonies where respect and gratitude are expressed toward the gods or ancestors. The dance creates a peaceful, meditative ambiance, inviting viewers to reflect on their spiritual lives and the importance of honoring their heritage. Through its graceful movements and symbolic gestures, Plet underscores the values of devotion, respect, and community connection, making it a meaningful part of Cambodian cultural and spiritual life.",
      thumbnail: "/thumbs/plet.png"
    },
    {
      id: "11",
      slug: "phloy-suoy",
      title: "Phloy Suoy",
      contentFirst: "Phloy Suoy is a traditional Cambodian dance known for its playful and energetic movements. Often performed by children or young adults, the dance involves quick, light footwork and fun, repetitive motions, creating an overall joyful atmosphere. It is often accompanied by music that emphasizes rhythm and energy, encouraging the dancers to express happiness and exuberance. This dance is performed in informal settings, often at community gatherings, to celebrate unity and social connections.",
      contentSecond: "Phloy Suoy is particularly popular during festive occasions, such as village fairs or community celebrations, where it is performed to entertain and bring people together. The lively choreography and rhythmic music create a sense of excitement and enthusiasm, embodying the spirit of Cambodian social life. The dance emphasizes the importance of togetherness and the joy found in collective experiences, making it a cherished part of Cambodian folk traditions.",
      thumbnail: "/thumbs/phloy.png"
    },
    {
      id: "12",
      slug: "nesat",
      title: "Nesat",
      contentFirst: "The Nesat dance is one of Cambodia's most graceful and intricate traditional performances. It typically features a single dancer or a small group, and the choreography focuses on slow, elegant movements designed to symbolize the beauty and power of nature. The dance often incorporates symbolic gestures that evoke the cycle of life, growth, and transformation, drawing inspiration from the natural world and the changes that take place in it.",
      contentSecond: "The Nesat dance is commonly performed during important cultural ceremonies, festivals, or at royal events. It is a celebration of the Cambodian people's deep connection with nature, emphasizing themes of balance, growth, and renewal. The dance’s slow movements and delicate gestures create an atmosphere of serenity, inviting viewers to appreciate the beauty of life’s cycles. The performance is often accompanied by traditional music that enhances the graceful and reflective quality of the dance.",
      thumbnail: "/thumbs/nesat.png"
    }
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


  return (
    <main>
      <Header></Header>

      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 mb-10 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px] mb-5">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">
                Dances
              </div>
              <div className="text-3xl font-bold tracking-wide">
                Dance Forms We Celebrate
              </div>
            </div><br /><br />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              <div>

                <div className=" hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="">
                    <Image src={post.thumbnail} alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10] " fill></Image>
                  </div>
                </div>
                <div className="pt-5"></div>
                <div className="grid grid-cols-4 gap-5">
                  {/* <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div> */}
                </div>
              </div>
              <div className="text-md">
                <div className="text-2xl font-medium pt-4 tracking-wide">
                  {/* <br /> */}
                  {post.title}
                </div>
                <br />
                <div className="font-light text-md">
                  {post.contentFirst}
                  <br /><br />
                  {post.contentSecond}
                  {/* The Apsara dance is a traditional Cambodian dance form that originated in the Khmer Empire. Apsara, which means &quot;celestial maiden&quot; or &quot;angel&quot; in Sanskrit, refers to the divine female figures depicted in Hindu and Buddhist mythology. The dance is characterized by graceful, fluid movements, intricate hand gestures, and elaborate costumes.
                  <br /><br />
                  It often depicts stories from Hindu mythology, such as the Reamker, which is the Khmer version of the Indian epic Ramayana. The Apsara dance is considered a cultural treasure of Cambodia and is often performed at classical Khmer dance performances and traditional ceremonies. */}
                </div>
              </div>
            </div>

            <div className="pt-[50px]"></div>

            <div className="text-center">
              <h1>Other Dances</h1>
              <hr className="mt-4" />
              <br />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <Link href="/dances/apsara">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    APSARA
                    <div className="text-2xl font-light">(អប្សរា)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/apsara.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
              </Link>

              <Link href="/dances/coconut">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    COCONUT
                    <div className="text-2xl font-light">(ដូង)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/coconut.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
              </Link>


              <Link href="/dances/love-moon">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    LOVE MOON
                    <div className="text-2xl font-light">(ស្រឡាញ់ព្រះច័ន្ទ)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/lovemoon.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
              </Link>


              <Link href="/dances/kane">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    KANE
                    <div className="text-2xl font-light">(កេន)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/kane.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
              </Link>


              <Link href="/dances/flower">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    FLOWER
                    <div className="text-2xl font-light">(ផ្កា)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/flower.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
              </Link>


              <Link href="/dances/blessing">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="flex-col absolute h-full font-bold w-full text-center z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    BLESSING
                    <div className="text-2xl font-light">(ជូនពរ)</div>
                  </div>
                  <div className="">
                    <Image src="/thumbs/blessing.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
              </Link>

            </div>

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