'use client'

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";

interface Section {
  id: number;
  name: string;
}

interface ClientModalWithScrollProps {
  section: Section;
  sections: Section[];
  isFirstButton: boolean;
}

export default function ClientModalWithScroll({ section, sections, isFirstButton }: ClientModalWithScrollProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentSectionId, setCurrentSectionId] = useState<number | null>(null);

  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const openModalAndShowSection = () => {
    setCurrentSectionId(section.id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentSectionId(null);
  };

  useEffect(() => {
    if (currentSectionId !== null && sectionRefs.current[currentSectionId]) {
      sectionRefs.current[currentSectionId]?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [currentSectionId]);

  return (
    <div>
      {/* First button as an image */}
      {isFirstButton ? (
        <div className="cursor-zoom-in z-1 w-full rounded-2xl">
          <Image
            src={'/images/thumbnails/' + section.name}
            alt={`Open Modal for ${section.name}`}
            onClick={openModalAndShowSection}
            className="w-full h-auto rounded-2xl shadow-md"
            width={300}
            height={300}
          />
        </div>
      ) : (

        <div onClick={openModalAndShowSection} className="cursor-zoom-in w-full rounded-2xl bg-slate-200">
          <img
            src={'/images/thumbnails/' + section.name}
            alt={`Open Modal for ${section.name}`}
            onClick={openModalAndShowSection}
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]">
          <div className="bg-white w-full h-screen overflow-y-auto p-5 relative"
            onClick={closeModal}>
            {sections.map((sec) => (
              <div
                key={sec.id}
                ref={(el) => {
                  sectionRefs.current[sec.id] = el;
                }}
                className='py-2'
              >
                <img src={'/images/originals/' + sec.name} className='cursor-zoom-out w-full' />
                {/* <h2 className="text-2xl font-bold">{sec.name}</h2>
                <p>Content for {sec.name}. This section is long enough to make the modal scrollable.</p> */}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Close Button */}
      {isModalOpen && (
        <div></div>
        // <button
        //   onClick={closeModal}
        //   className="fixed top-5 right-5 px-4 py-2 bg-red-500 text-white z-[1000] rounded-md shadow-md hover:bg-red-600 transition duration-300"
        // >
        //   Close
        // </button>
      )}
    </div>
  );
}
