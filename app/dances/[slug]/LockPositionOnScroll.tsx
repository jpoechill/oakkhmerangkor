'use client'
import { useEffect, useState } from 'react';

const StickyComponent = () => {
  const [isSticky, setIsSticky] = useState(false);
  const threshold = 150; // Threshold for when to stick (in pixels)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only make sticky if the element has passed the threshold
          if (entry.isIntersecting && entry.boundingClientRect.top <= threshold) {
            setIsSticky(true); // Stick the element when it crosses the threshold
          } else {
            setIsSticky(false); // Revert back when it's before the threshold
          }
        });
      },
      {
        threshold: 0, // When any part of the element is visible
      }
    );

    const target = document.getElementById('sticky-element');
    observer.observe(target);

    return () => {
      observer.disconnect(); // Cleanup the observer on unmount
    };
  }, [threshold]);

  return (
    <div>
      <div
        id="sticky-element"
        className={`sticky-element ${isSticky ? 'sticky' : ''}`}
      >
        I become sticky only after passing the threshold.
      </div>
      <div style={{ height: '2000px' }}>
        Scroll to see the sticky behavior. The element sticks after passing {threshold}px.
      </div>
    </div>
  );
};

export default StickyComponent;
