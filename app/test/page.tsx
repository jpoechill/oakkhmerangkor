import ClientModalWithScroll from './ClientModalWithScroll';

interface Section {
  id: number;
  name: string;
  color: string;
}

export default function ModalWithScroll() {
  // List of modal sections
  const sections: Section[] = [
    { id: 1, name: 'Section 1', color: 'lightblue' },
    { id: 2, name: 'Section 2', color: 'lightgreen' },
    { id: 3, name: 'Section 3', color: 'lightcoral' },
    { id: 4, name: 'Section 4', color: 'lightyellow' },
  ];

  return (
    <div>
      <h1>Open Modal and Jump to Specific Section</h1>

      {/* Navigation Buttons outside the modal */}
      <div style={{ marginTop: '20px' }}>
        {sections.map((section) => (
          <ClientModalWithScroll key={section.id} section={section} sections={sections} />
        ))}
      </div>
    </div>
  );
}
