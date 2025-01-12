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
}

// Type-safe blog post repository
class BlogPostRepository {
  private posts: BlogPost[] = [
    {
      id: "1",
      slug: "apsara",
      title: "Apsara",
      contentFirst: "Apsara is a classical Cambodian dance that draws inspiration from the celestial dancers, or 'Apsaras,' in Hindu mythology, who are believed to be divine and graceful beings. The dance is characterized by slow, fluid movements that emphasize elegance and beauty. Dancers wear intricate costumes, including headdresses and jewelry, and perform to music from the traditional Pinpeat orchestra. The dance embodies divine grace and is often performed to honor the gods or during important cultural ceremonies and celebrations.",
      contentSecond: "The Apsara dance has deep spiritual and cultural significance in Cambodia, often seen as a connection between the human and divine realms. The dancers convey complex emotions and stories through intricate hand gestures and delicate poses, bringing to life the celestial beings they represent. The Apsara dance is considered a symbol of grace and beauty, often performed during royal events, national celebrations, and religious ceremonies. It has become an iconic part of Cambodian culture and heritage, showcasing the country's rich artistic history."
    },
    {
      id: "2",
      slug: "coconut",
      title: "Coconut",
      contentFirst: "The Coconut dance is a lively and joyful performance often seen during festivals and celebrations in Cambodia. It involves dancers using coconuts as props, tapping them together in rhythmic patterns while performing lively, upbeat choreography. The dance is meant to create a fun, festive atmosphere and is often performed in a group, reflecting the spirit of community and togetherness. It may also symbolize the agricultural lifestyle of the Cambodian people, with coconuts being a common natural resource in their environment.",
      contentSecond: "The Coconut dance is typically performed during traditional holidays, weddings, and other community celebrations. The use of coconuts as props enhances the rhythm of the performance, adding an element of fun and playfulness to the dance. It is a lively expression of joy, symbolizing the prosperity and abundance that coconuts represent in Cambodian culture. The dance reinforces the importance of community bonds and the connection to nature, making it a popular and cherished tradition in the country."
    },
    {
      id: "3",
      slug: "love-moon",
      title: "Love Moon",
      contentFirst: "The Love Moon dance reflects themes of romance, longing, and beauty, inspired by the moon's mystical and romantic associations in Cambodian culture. The dance is performed with soft, graceful movements that express the emotions of love, passion, and desire, often symbolized by the moon’s glow. The dancers' fluid motions evoke the mysterious allure of the moon, with costumes and choreography designed to reflect the tranquility and beauty of a romantic evening under the moonlight.",
      contentSecond: "In Cambodian culture, the moon has long been associated with beauty and the ideals of love and longing. The Love Moon dance expresses these feelings through carefully crafted choreography, where the dancers embody the mood of a romantic evening. The performance creates a sense of dreaminess and elegance, using the moon as a metaphor for love’s subtle, enduring power. This dance is often performed during celebrations or events focused on love, romance, and the beauty of nature."
    },
    {
      id: "4",
      slug: "kane",
      title: "Kane",
      contentFirst: "Kane is a traditional Cambodian dance that expresses profound spiritual and emotional themes through graceful and deliberate movements. It is often performed during religious ceremonies or to convey the moral lessons found in Cambodian folklore. The dance highlights the connection between the physical and spiritual worlds, with dancers embodying characters from mythological stories or spiritual beings. Through controlled gestures and footwork, the dance tells stories of divine intervention, human struggles, and the triumph of virtue over adversity.",
      contentSecond: "Kane is a dance that is rich in symbolism and emotion, often performed in temples or sacred spaces to invoke blessings or to honor ancestors and deities. It is one of the more solemn and reflective forms of Cambodian dance, encouraging viewers to contemplate moral and spiritual lessons. The dancers' precise movements and symbolic gestures are meant to convey complex ideas, and the slow pace of the performance enhances the sense of reverence and devotion. Kane serves as both a performance and a form of prayer, linking art with spirituality."
    },
    {
      id: "5",
      slug: "flower",
      title: "Flower",
      contentFirst: "The Flower dance is a symbolic expression of beauty, purity, and the natural world. The movements of the dancers often mimic the growth of flowers, from the budding of a blossom to the full bloom, capturing the delicate and graceful nature of flowers. Performers use gentle, flowing hand gestures to represent the opening petals of a flower and synchronized steps to evoke the rhythm of nature. This dance highlights the deep connection between the people of Cambodia and the natural world, as well as the cultural reverence for growth, beauty, and renewal.",
      contentSecond: "The Flower dance celebrates the cycle of life, from growth to blooming and eventual fading, mirroring the natural processes that shape the world around us. Dancers often wear floral-inspired costumes, adding to the visual effect of the performance. The dance can also symbolize the beauty and fragility of life, inviting the audience to appreciate the delicate and fleeting moments of existence. It is a peaceful, meditative performance that connects viewers with the natural beauty and cycles of life, often performed in cultural or spiritual contexts."
    },
    {
      id: "6",
      slug: "blessing",
      title: "Blessing",
      contentFirst: "The Blessing dance is a ceremonial performance often performed at religious rituals or important life events, such as weddings or ceremonies of goodwill. The dancers’ movements are intended to invoke blessings of good fortune, health, and prosperity for those present. The dance often includes offerings of flowers, incense, or symbolic gestures, and it may be accompanied by prayers and hymns. Through slow, deliberate movements, the dancers create a spiritual atmosphere, reinforcing the cultural belief in the power of positive energy, prayer, and community support to bring blessings and protection from harm.",
      contentSecond: "Performed with grace and solemnity, the Blessing dance is a way to offer thanks, seek guidance, and invoke divine favor. It is an important part of Cambodian spiritual and cultural traditions, seen as a way to connect with ancestors and deities. The choreography is designed to create a peaceful, meditative ambiance, encouraging the audience to reflect on the blessings in their own lives. This dance, often performed during significant life events, reinforces the values of community, respect, and gratitude."
    },
    {
      id: "7",
      slug: "stick",
      title: "Stick",
      contentFirst: "The Stick dance, also known as *Lbokator*, is a dynamic and powerful performance that incorporates bamboo sticks, symbolizing martial arts and the discipline of the human body. The dance blends elements of combat and performance, with dancers using the sticks in synchronized movements to represent strength, agility, and control. These dances are often performed to demonstrate the warriors' skill and endurance, reflecting Cambodia’s rich martial arts tradition. The movements are sharp, precise, and powerful, embodying courage, resilience, and the spirit of defending one’s community and values.",
      contentSecond: "The Stick dance has deep roots in the history and culture of Cambodia, particularly in the context of the Khmer Empire. It is a tribute to the warriors who protected the nation and its traditions. The performance often evokes the image of ancient Cambodian martial artists, showcasing their prowess and discipline. With its fast-paced and energetic choreography, the Stick dance is a thrilling display of agility and strength, captivating audiences with its intensity and precision."
    },
    {
      id: "8",
      slug: "choun-por",
      title: "Choun Por",
      contentFirst: "Choun Por is a festive dance that emphasizes joy, community, and unity. It is typically performed in groups, with dancers engaging in synchronized movements to create a sense of shared celebration. The dance reflects the communal nature of Cambodian society, where people come together to mark important events or holidays. The choreography is lively, with energetic gestures and lively footwork, symbolizing the shared happiness and harmony of the participants.",
      contentSecond: "Choun Por is often performed during festivals, weddings, or national holidays, where the entire community participates in the dance. The rhythmic patterns and synchronized movements create a sense of connection between the dancers and the audience, reinforcing the importance of togetherness and collective joy. This dance is a celebration of Cambodian culture, highlighting the values of unity, cooperation, and the joy of shared experiences."
    },
    {
      id: "9",
      slug: "mon-mekhala",
      title: "Mon Mekhala",
      contentFirst: "The Mon Mekhala dance is a dramatic and elegant performance that tells the story of the goddess Mon Mekhala, who controls the weather, particularly rain, and symbolizes fertility and prosperity. In this dance, the performer embodies the goddess's grace and divine power, with slow, flowing movements that depict the goddess's ability to bring balance to nature. The dance often features intricate hand gestures and elegant poses that convey the goddess’s connection to the forces of nature, such as the rain and the sea.",
      contentSecond: "Mon Mekhala is a revered figure in Cambodian mythology, embodying the qualities of femininity, fertility, and divine protection. The dance represents the power of nature and the connection between humans and the natural world. Dancers performing the Mon Mekhala often wear elaborate costumes and perform with fluid movements that evoke the natural elements, symbolizing the goddess's power over rain, storms, and growth. This performance is a tribute to nature's life-giving forces and a reminder of the interconnectedness of all living things."
    },
    {
      id: "10",
      slug: "plet",
      title: "Plet",
      contentFirst: "Plet is a traditional Cambodian dance performed as an offering of respect and devotion during religious ceremonies or important cultural events. The dancers use graceful, intricate movements to honor deities or ancestors, reflecting the spiritual significance of the occasion. The dance is marked by flowing motions, symbolic gestures, and careful choreography designed to convey reverence and respect. Plet is often performed in temples or sacred spaces and is intended to evoke blessings, bring peace, and show gratitude.",
      contentSecond: "This dance is a way for the performers to express their devotion and seek divine favor. The slow, deliberate pace of the movements emphasizes the solemnity of the ritual and the deep respect for the divine. Plet is often performed in the presence of religious figures or during significant community events, where the dancers’ performances are seen as an offering of peace and blessings to those who witness it. It is a deeply spiritual practice that connects the dancers and the audience to a higher power."
    },
    {
      id: "11",
      slug: "phloy-suoy",
      title: "Phloy Suoy",
      contentFirst: "The Phloy Suoy dance is a celebration of cultural pride, tradition, and unity. Performed with synchronized movements, this dance expresses the spirit of togetherness, where dancers join in harmony to create a unified display of Cambodian heritage. The dance often features complex footwork, hand gestures, and rhythmic steps that symbolize the interconnectedness of the people and their shared cultural identity. Phloy Suoy is usually performed during festivals, national holidays, or community gatherings, reinforcing the importance of cultural preservation, collective spirit, and national pride.",
      contentSecond: "Through its lively and dynamic performance, Phloy Suoy reflects the vibrancy of Cambodian culture and the strength of its people. The intricate choreography and rhythm embody the unity and resilience of the community. This dance celebrates the shared history and traditions of Cambodia, acting as a reminder of the importance of preserving cultural heritage for future generations. The energy and joy conveyed in the performance inspire a sense of pride and connection among the dancers and the audience alike."
    },
    {
      id: "12",
      slug: "nesat",
      title: "Nesat",
      contentFirst: "The Nesat dance is an energetic and powerful performance that reflects the bravery and strength of Khmer warriors. The movements are sharp and strong, embodying the courage, discipline, and resilience of warriors as they engage in symbolic combat or demonstrate martial prowess. The dance often includes symbolic gestures that represent bravery, valor, and the protection of the homeland. The dynamic nature of the Nesat dance emphasizes the strength of the body and the power of the mind, capturing the spirit of the warrior and the Cambodian people's historical commitment to protecting their culture and values.",
      contentSecond: "Performed with vigor and intensity, Nesat evokes the martial traditions of Cambodia and the legacy of the Khmer Empire. The sharp, precise movements reflect the discipline of warriors, while the energetic choreography showcases the physical strength and endurance required to protect the nation. The dance is a tribute to the courage and determination of those who fought to defend Cambodia's independence and sovereignty. Nesat continues to inspire pride in Cambodian heritage, particularly in the context of the nation's military history."
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
                    <Image src="/apsara_lg.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10] " fill></Image>
                  </div>
                </div>
                <div className="pt-5"></div>
                <div className="grid grid-cols-4 gap-5">
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                  <div className="w-full pb-[100%] bg-slate-200"></div>
                </div>
              </div>
              <div className="text-lg">
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
              <div className="group relative h-0 w-[100%] pb-[100%] hover:cursor-pointer overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  APSARA
                </div>
                <div className="">
                  <Image src="/thumbs/apsara.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>


              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  COCONUT
                </div>
                <div className="">
                  <Image src="/thumbs/coconut.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <Link href="/dances">
                <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                  </div>
                  <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                    LOVE MOON
                  </div>
                  <div className="">
                    <Image src="/thumbs/lovemoon.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                  </div>
                </div>
              </Link>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  KANE
                </div>
                <div className="">
                  <Image src="/thumbs/kane.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  FLOWER
                </div>
                <div className="">
                  <Image src="/thumbs/flower.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
              <div className="group hover:cursor-pointer relative h-0 w-[100%] pb-[100%] overflow-hidden rounded-2xl">
                <div className="absolute h-full font-bold w-full z-10 tracking-widest bg-black opacity-25 group-hover:opacity-0 transition-all duration-500 flex text-xl justify-center items-center">
                </div>
                <div className="absolute h-full font-bold w-full z-10 tracking-widest text-white flex text-xl justify-center items-center">
                  BLESSING
                </div>
                <div className="">
                  <Image src="/thumbs/blessing.png" alt="thumb" className="transition-all duration-500 ease-in-out group-hover:scale-[1.10]" fill></Image>
                </div>
              </div>
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