'use client'

import { useState, useRef } from 'react';

interface Section {
  id: number;
  name: string;
  color: string;
}

interface ClientModalWithScrollProps {
  sections: Section[];
}

export default function Button({ sections }: ClientModalWithScrollProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentSectionId, setCurrentSectionId] = useState<number | null>(null);

  // Refs for each section
  const sectionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const openModalAndShowSection = (sectionId: number) => {
    setCurrentSectionId(sectionId); // Set the section to highlight
    setIsModalOpen(true); // Open the modal

    // Directly jump to the section without scrolling animation
    setTimeout(() => {
      if (sectionRefs.current[sectionId]) {
        sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }, 10); // Delay to ensure the modal content is rendered before scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setCurrentSectionId(null); // Reset the current section
  };

  return (
    <div>
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
            overflowY: 'auto', // Ensure the modal content is scrollable
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
              position: 'relative', // Set relative positioning to allow absolute positioning of the button
            }}
          >
            {/* Modal Content Sections */}
            {sections.map((section) => (
              <div
                key={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)} // Assign ref to each section
                style={{
                  height: '1000px', // Longer sections
                  backgroundColor: section.color,
                  marginBottom: '20px',
                  border: section.id === currentSectionId ? '3px solid black' : 'none', // Highlight the active section
                  padding: '10px',
                  transition: 'border 0.3s ease-in-out',
                }}
              >
                <h2>{section.name}</h2>
                <p>
                  Content for {section.name}. You can add more details here to demonstrate content inside the modal.
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
            zIndex: 1000, // Ensure it's above the modal
          }}
        >
          Close Modal
        </button>
      )}
    </div>
  );
}
