import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";

export default function RhythmixPost() {
  return (
    <>
      <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row items-start">
        <div className="lg:w-full">
          <div className="pb-6 font-serif text-2xl font-bold">
            Celebrating Culture at the Rhythmix API Festival 🌸
          </div>
          <div className="font-light text-md">
            On Saturday, April 26, 2025, we had the honor of performing at the Rhythmix Asian & Pacific Islander Arts & Culture Festival at Bohol Circle Immigrant Park in Alameda. This vibrant event, hosted by <Link href="https://www.rhythmix.org/" className="text-[#F28904] hover:text-[#5E489A]" target="_blank" rel="noopener noreferrer">Rhythmix Cultural Works</Link> in partnership with the City of Alameda Recreation and Park Department, brought together communities from across the Bay Area to celebrate the rich diversity of Asian and Pacific Islander cultures through music, dance, food, and art .
            <br /><br />
            We were thrilled to share the beauty of Cambodian classical dance alongside incredible performances by <a href="https://www.halaumakana.com/" className="body-link" target="_blank" rel="noopener noreferrer">Hālau Makana</a>, <a href="https://thesampaguitas.com/" className="body-link" target="_blank" rel="noopener noreferrer">The Sampaguitas</a>, <a href="https://dholrhythms.com/" className="body-link" target="_blank" rel="noopener noreferrer">Dholrhythms Dance Company</a>, <a href="https://urisawe.org/" className="body-link" target="_blank" rel="noopener noreferrer">Urisawe</a>, <a href="https://www.samoansolutions.org/" className="body-link" target="_blank" rel="noopener noreferrer">Samoan Solutions</a>, <a href="https://www.facebook.com/VietStepsCA/" className="body-link" target="_blank" rel="noopener noreferrer">Viet Steps</a>, <a href="https://www.liondanceme.com/" className="body-link" target="_blank" rel="noopener noreferrer">Lion Dance ME</a>, and many more. The festival also featured hands-on art activities, delicious Asian and Pacific-inspired foods, and a variety of community vendors, creating a joyful gathering that brought the community together in appreciation of shared traditions and creativity.
            <br /><br />
            Thank you to <Link href="https://www.rhythmix.org/" className="text-[#F28904] hover:text-[#5E489A]" target="_blank" rel="noopener noreferrer">Rhythmix Cultural Works</Link> for creating space to honor cultural traditions and creativity. And thank you to everyone who came out to support, dance, and celebrate with us!
            <br /><br />
            📸 Check out some photos from the event below!
            <br /><br />
            Photo Credits: Alvaro Batista Photography <Link href="https://www.instagram.com/lafoto17" className="text-[#F28904] hover:text-[#5E489A]" target="_blank" rel="noopener noreferrer">@lafoto17</Link>
          </div>
        </div>
      </div>

      <ScrollReveal delay={150}>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 relative w-full h-[400px]">
            <Image
              src="/blog/051425/Rhythmix-API-2025-2621.jpg"
              alt="Oakland Khmer Angkor Dance Troupe performing"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
          </div>

          <div className="relative w-full h-[400px]">
            <Image
              src="/blog/051425/Rhythmix-API-2025-2718.jpg"
              alt="Oakland Khmer Angkor Dance Troupe performing"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>

          <div className="relative w-full h-[400px]">
            <Image
              src="/blog/051425/Rhythmix-API-2025-2614.jpg"
              alt="Oakland Khmer Angkor Dance Troupe performing"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
          <div className="col-span-2 relative w-full h-[400px]">
            <Image
              src="/blog/051425/Rhythmix-API-2025-2619.jpg"
              alt="Oakland Khmer Angkor Dance Troupe performing"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
          </div>

          <div className="col-span-2 relative w-full h-[400px]">
            <Image
              src="/blog/051425/Rhythmix-API-2025-2825.jpg"
              alt="Oakland Khmer Angkor Dance Troupe performing"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
          </div>

          <div className="relative w-full h-[400px]">
            <Image
              src="/blog/051425/Rhythmix-API-2025-2683.jpg"
              alt="Oakland Khmer Angkor Dance Troupe performing"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
          <div className="relative w-full h-[400px]">
            <Image
              src="/blog/051425/Rhythmix-API-2025-2889.jpg"
              alt="Oakland Khmer Angkor Dance Troupe performing"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>

          <div className="col-span-2 relative w-full h-[400px]">
            <Image
              src="/blog/051425/Rhythmix-API-2025-2993.jpg"
              alt="Oakland Khmer Angkor Dance Troupe performing"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
          </div>

          <div className="col-span-3 relative w-full h-[400px]">
            <Image
              src="/blog/051425/Rhythmix-API-2025-3018.jpg"
              alt="Oakland Khmer Angkor Dance Troupe performing"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
              sizes="(min-width: 1024px) 100vw, 100vw"
            />
          </div>
          <div className="relative w-full h-[400px]">
            <Image
              src="/blog/051425/Rhythmix-API-2025-3084.jpg"
              alt="Oakland Khmer Angkor Dance Troupe performing"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
          <div className="col-span-2 relative w-full h-[400px]">
            <Image
              src="/blog/051425/Rhythmix-API-2025-3052.jpg"
              alt="Oakland Khmer Angkor Dance Troupe performing"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
          </div>
        </div>
      </ScrollReveal>
      <br />
    </>
  );
}
