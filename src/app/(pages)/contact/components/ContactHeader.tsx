'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const ContactHeader: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate title with split text effect
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );
      }

      // Animate subtitle
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="mb-12 text-center">
      <h1
        ref={titleRef}
        className="mb-4 text-5xl font-bold text-foreground"
      >
        Let's Work Together
      </h1>
      <p
        ref={subtitleRef}
        className="text-lg text-muted-foreground"
      >
        Have a project in mind? I'd love to hear about it.
      </p>
    </div>
  );
};
