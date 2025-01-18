import Image from "next/image";
import Header from "../Header"
import Footer from "../Footer"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header></Header>

      <div className="bg-white">
        <div className="flex justify-center w-full p-5 pt-0 mb-10 pb-10 px-5 lg:px-10 animate-[fade-me-in_.5s_ease-in-out] bg-white">
          <div className="flex flex-col w-full max-w-[1040px] mt-[130px]">
            <div className="text-center">
              <div className="text-sm uppercase font-bold mb-2 text-[#F28904] tracking-widest">Funding</div>
              <div className="text-3xl font-bold tracking-wide">
                Our Journey and Vision
              </div>
            </div>

            <div className="flex flex-col justify-center w-full p-0 px-0 my-5">
            </div>




            <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row items-start">
              <div className="lg:w-1/2">
                <div id="question1" className="pb-6 font-serif text-2xl font-bold">
                  Why Support Matters
                </div>
                <div id="answer1" className="font-light text-md">
                  Our Cambodian cultural dance troupe is dedicated to preserving and celebrating the rich heritage of Cambodia through traditional dance. These dances are more than performances—they are a vital link to our history, telling stories of resilience, love, and community. However, preserving these traditions in a modern world requires resources, and that’s where your support can make a profound difference.
                  <br /><br />
                  Obtaining financial support is essential to sustain our work, allowing us to host performances, run workshops, and engage with the community. Each dollar contributes to our mission of cultural preservation, inspiring audiences of all backgrounds and passing on the beauty of Cambodian dance to the next generation. Together, we can ensure this art form thrives for years to come.
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
                <br /><br />
                <img src="/funding/youth_group_01.jpg" alt="Grantors and dancers at a partnership event" className="w-full rounded-lg shadow-md" />
              </div>
            </div>

            <div className="border-[#F28904] py-[20px] flex flex-col-reverse lg:flex-row items-start">
              {/* <div className="lg:w-2/5 lg:pr-8 mt-6 lg:mt-0">
                <img src="image-placeholder-2.jpg" alt="Community workshop in progress" className="w-full rounded-lg shadow-md" />
              </div> */}
              <div className="">
                <div id="question2" className="pb-6 font-serif text-2xl font-bold">
                  Mission Alignment
                </div>
                <div id="answer2" className="font-light text-md">
                  Our mission is rooted in the belief that art has the power to bridge communities and preserve cultural identity. By sharing Cambodian dance with broader audiences, we aim to foster a deeper connection between generations and cultural backgrounds. The essence of this mission is not only about keeping traditions alive, but also about evolving these traditions to resonate with the modern world while maintaining their authenticity. Your support enables us to continue expanding our outreach and creating a lasting impact on both the local and global stage.
                  <br /><br />
                  Through your contribution, we are able to strengthen our commitment to cultural education, particularly among youth, who represent the future of the arts. Our programs go beyond teaching dance techniques—they cultivate discipline, creativity, and a strong sense of cultural pride. With your help, we can offer more opportunities for individuals to experience and connect with Cambodian dance, nurturing the next generation of performers, educators, and cultural ambassadors. Your partnership plays a vital role in preserving this invaluable art form for years to come.
                  {/* Our mission is to preserve and promote Cambodian cultural dance, enriching communities through performances, education, and outreach. Your support directly aligns with this mission, helping us maintain the integrity of our traditional dances while ensuring they reach new audiences. By funding our programs, you are helping us provide vital resources for practice, performances, and educational initiatives, all of which foster a deeper understanding of Cambodian culture. Together, we can continue inspiring future generations, ensuring this art form thrives and remains a vibrant part of our community. */}
                </div>
              </div>
            </div>

            <div className="border-[#F28904] py-[20px]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="col-span-2">
                  <div id="question3" className="pb-6 font-serif text-2xl font-bold">
                    Specific Funding Needs
                  </div>
                  <div id="answer3" className="font-light text-md">
                    {/* We rely on funding to support critical aspects of our work. One of our primary needs is funding for traditional costumes, which are a crucial part of Cambodian dance. These costumes are handcrafted with intricate details and vibrant colors that reflect the cultural stories they accompany. Additionally, we need support for venue rentals, travel expenses, and technical production costs to bring our performances to life.
                    <br /><br />
                    Beyond performances, your support would allow us to expand our workshops and outreach programs. These initiatives bring the joy of Cambodian dance to schools, community centers, and underserved populations. We also focus on youth development by offering scholarships and mentorship to aspiring dancers. Funding for these programs ensures that the next generation not only learns the art of dance but also gains a deep connection to their cultural roots. */}
                    {/* Our funding needs are centered around several key areas essential for the smooth operation of our troupe. First, providing food for practice nights is vital to keep our dancers energized and focused during long rehearsals. Additionally, maintaining and acquiring event props and decorations is necessary to ensure our performances reflect the authenticity and beauty of Cambodian culture. These props help bring our cultural stories to life, creating a richer experience for our audience.
                    <br /><br />
                    We also seek funding to compensate our dedicated youth dance teachers, whose commitment and expertise are crucial in mentoring the next generation of dancers. On event days, providing meals and refreshments for our performers and volunteers ensures that everyone remains nourished and motivated throughout the day. Costumes are another important expense, as our traditional garments are intricately designed and must be carefully maintained or replaced over time. Finally, clean-up costs after events are necessary to return the venue to its original state and ensure our troupe’s equipment is stored properly for future use.
                    <br /><br />
                    Beyond performances, your support would allow us to expand our workshops and outreach programs. These initiatives bring the joy of Cambodian dance to schools, community centers, and underserved populations. We also focus on youth development by offering scholarships and mentorship to aspiring dancers. Funding for these programs ensures that the next generation not only learns the art of dance but also gains a deep connection to their cultural roots. */}

                    Our funding needs cover key areas essential to sustaining our work. Food for practice nights keeps our dancers energized during rehearsals, while maintaining and acquiring props and decorations ensures our performances stay authentic. We also seek funding to compensate youth dance teachers, purchase and maintain costumes, and cover clean-up costs after events, ensuring the upkeep of our costumes and equipment.
                    <br /><br />
                    Beyond performances, your support would help expand our workshops and outreach programs, bringing Cambodian dance to schools, community centers, and underserved populations. These initiatives foster a deeper connection to Cambodian culture and offer valuable learning opportunities for young dancers. Expanding our outreach ensures the continued preservation of this important art form for future generations.

                    {/* 
                    Our funding needs cover key areas that are essential for sustaining and growing our troupe’s work. Food for practice nights is crucial to keeping our dancers energized and focused during long rehearsals. This small but necessary expense ensures that everyone is able to give their best performance. Additionally, maintaining and acquiring props and decorations for our performances allows us to stay true to the authenticity of Cambodian dance, creating an immersive and culturally rich experience for our audiences. We also seek funding to compensate youth dance teachers, whose passion and dedication inspire the next generation of dancers. Costumes, integral to our performances, require constant upkeep, and the purchase of new garments from skilled artisans is essential to preserving the traditional look and feel of Cambodian dance. Lastly, clean-up costs after events help us ensure that venues are left in good condition and that our troupe’s equipment is stored safely for future use.
                    <br /><br />
                    Beyond performances, your support would enable us to expand our workshops and outreach programs. These initiatives bring the joy of Cambodian dance to schools, community centers, and underserved populations. By sharing our cultural practices with a wider audience, we hope to foster a greater appreciation for Cambodian heritage and inspire people from all backgrounds. These programs also provide an opportunity for youth development, where aspiring dancers can learn not only the art of dance but also gain a deep connection to their cultural roots. Expanding these outreach efforts ensures that we continue to pass on the beauty of Cambodian dance to future generations, helping preserve this important tradition for years to come. */}
                  </div>
                </div>
                <div>
                  <img src="/funding/umbrella_02.jpg" alt="Handcrafted Cambodian dance costumes" className="w-full rounded-lg shadow-md mb-4" />
                  {/* <img src="/image-placeholder-4.jpg" alt="A vibrant performance on stage" className="w-full rounded-lg shadow-md" /> */}
                </div>
              </div>
            </div>

            <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row items-start">
              <div className="lg:w-1/3 mt-6 lg:mt-0">
                <img src="/funding/neary.jpg" alt="Grantors and dancers at a partnership event" className="w-full rounded-lg shadow-md" />
              </div>
              <div className="lg:w-2/3 pl-8">
                <div id="question5" className="pb-6 font-serif text-2xl font-bold">
                  Impact Stories
                </div>
                <div id="answer5" className="font-light text-md">
                  Our traditional dance performances rely on intricate, hand-sewn costumes that are both beautiful and deeply symbolic, representing centuries-old designs passed down through generations. These costumes are crucial for bringing our cultural stories to life, helping audiences connect with the heritage we share.
                  <br /><br />
                  Neary, one of our dedicated members, has been essential in maintaining our cultural wardrobe for years. She imports clothing, materials, and sacred artifacts from Cambodia, ensuring our costumes’ authenticity. Her commitment, though unasked for, is deeply appreciated by the troupe.
                  <br /><br />
                  With funding, we could create new costumes from skilled artisans and improve storage and care, supporting Neary’s efforts and ensuring future dancers perform in attire that honors our cultural heritage.</div>
              </div>
            </div>


            <div className="border-[#F28904] py-[20px] flex flex-col lg:flex-row items-start">
              {/* <div className="lg:w-1/3 mt-6 lg:mt-0">
                <img src="/funding/umbrella.jpg" alt="Grantors and dancers at a partnership event" className="w-full rounded-lg shadow-md" />
              </div> */}
              <div className="">
                <div id="question5" className="pb-6 font-serif text-2xl font-bold">
                  Opportunities for Collaboration
                </div>
                <div id="answer5" className="font-light text-md">

                  Our Cambodian cultural dance troupe has been a pillar of our community for over 20 years. Throughout this time, our leaders, families, and local organizations have been the backbone of our funding, often contributing out of pocket to ensure the group could thrive. This remarkable dedication has allowed us to carry forward our traditions and bring the joy of Cambodian dance to thousands, even in the face of financial constraints.
                  <br /><br />
                  While we are incredibly proud of what we’ve accomplished through grassroots efforts, we recognize the need for additional resources to expand our reach and sustain our programs. By securing grant funding, we aim to host more community workshops, bring our performances to larger audiences, and offer scholarships to young dancers. These opportunities would allow us to deepen our impact and ensure that Cambodian cultural dance continues to inspire and connect people for generations to come.
                  <br /><br />
                  {/* <br /><br /><br />
                  <hr />
                  <br /><br />
                  Contact our Treasurer (Sineth@gmail.com) or Macy (Macy@gmail.com), our Fundraising Coordinator, for more details. */}
                </div>
              </div>

            </div>




            {/* 
            <div className="border-[#F28904] pt-3  py-[50px]">
              <div id="question1" className="pb-6 font-serif text-2xl font-bold">
                Mission Alignment
              </div>
              <div id="answer1" className="font-light text-md">
                Clearly state your mission and how it aligns with grant funding priorities. For example:
                Cultural Preservation: Highlight efforts to preserve traditional art forms.
                Community Engagement: Show how your work connects with underserved communities.
                Educational Initiatives: Mention workshops, classes, or outreach programs.
                Tailor this to resonate with typical grant goals, like cultural enrichment, diversity, or community development.
              </div>
            </div>



            3. Specific Funding Needs
            Break down exactly how grants will be used, with examples such as:

            <br /><br />
            Costume Creation: Traditional Cambodian dance costumes can be expensive and require intricate detailing.<br />
            Performance Costs: Venue rentals, travel expenses for performances, and technical production needs.
            Workshops and Outreach: Materials, space, and instructor fees for community workshops.
            Youth Development: Supporting programs for young dancers, including scholarships or mentorship.
            Cultural Preservation Projects: Documenting and archiving traditional dances or collaborating with Cambodian cultural experts.
            Including visuals (like infographics, pie charts, or photos) can make this section more engaging.

            <br /><br />
            4. Impact Stories<br />
            Share compelling stories or case studies demonstrating how past funding (if applicable) made a difference.
            Example: “With a grant from XYZ Foundation, we successfully launched a youth workshop series that reached over 200 students in the Bay Area.”
            Include testimonials from participants, partners, or audience members.
            5. Grant Opportunities for Collaboration
            Types of Grants: Specify what kinds of grants you're seeking, such as:
            Operational support.
            Project-specific funding.
            Multi-year partnerships.
            Recognition for Funders: Offer ways to honor contributors, such as acknowledgment in programs, on the website, or during performances.

            <br /><br />
            6. Transparency and Accountability<br />
            Include a brief note on how funds are managed and reported, emphasizing transparency and accountability.
            Example: “We ensure that all funds are utilized effectively, with regular updates provided to our grant partners.”
            Offer to share financial reports or impact assessments upon request.


            <br /><br />
            7. How to Partner<br />
            Provide clear next steps for potential grantors:
            Contact information for your grant liaison.
            A downloadable grant proposal or information packet (PDF).
            A form to express interest or request additional information.
            8. Visuals and Branding
            Use culturally inspired visuals (like traditional motifs or troupe photos) to create a strong emotional connection.
            Ensure the page is professionally designed and easy to navigate. */}

            {/* <br /> */}
            {/* <div className="text-md">
            </div> */}
          </div>
        </div>


        {/* <div className="pb-[20px]"></div> */}
      </div>
      <Footer></Footer>
    </main >
  );
}
