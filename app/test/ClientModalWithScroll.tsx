'use client'

import { useState, useRef, useEffect } from 'react';

interface Section {
  id: number;
  name: string;
  color: string;
}

interface ClientModalWithScrollProps {
  section: Section;
  sections: Section[];
}

export default function ClientModalWithScroll({ section, sections }: ClientModalWithScrollProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentSectionId, setCurrentSectionId] = useState<number | null>(null);

  const sectionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Open modal and show specific section
  const openModalAndShowSection = () => {
    setCurrentSectionId(section.id); // Set the section to highlight
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setCurrentSectionId(null); // Reset the current section
  };

  // Scroll to the section when modal is open and sectionId changes
  useEffect(() => {
    if (currentSectionId !== null && sectionRefs.current[currentSectionId]) {
      sectionRefs.current[currentSectionId]?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [currentSectionId]);

  return (
    <div>
      {/* Button to open modal with this specific section */}
      <button
        onClick={openModalAndShowSection}
        style={{ margin: '5px' }}
      >
        Open Modal for {section.name}
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
            overflowY: 'auto',
            padding: '0',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: '100vh', // Full page modal
              overflowY: 'auto', // Modal scrolls if content is longer
              padding: '20px',
              boxSizing: 'border-box',
              position: 'relative',
            }}
          >
            {/* Modal Content Sections - All sections displayed in the modal */}
            {sections.map((sec) => (
              <div
                key={sec.id}
                ref={(el) => (sectionRefs.current[sec.id] = el)} // Assign ref to each section
                style={{
                  height: '1000px', // Longer sections
                  backgroundColor: sec.color,
                  marginBottom: '20px',
                  border: sec.id === currentSectionId ? '3px solid black' : 'none', // Highlight the active section
                  padding: '10px',
                  transition: 'border 0.3s ease-in-out',
                }}
              >
                <h2>{sec.name}</h2>
                <p>
                  Content for {sec.name}. You can add more details here to demonstrate content inside the modal.
                  This section is long enough to make the modal scrollable.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fixed Close Button outside the modal */}
      {isModalOpen && (
        <button
          onClick={closeModal}
          style={{
            position: 'fixed', // Fixed position
            top: '20px',
            right: '20px',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
        >
          Close Modal
        </button>
      )}
    </div>
  );
}
