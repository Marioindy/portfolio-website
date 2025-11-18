'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LuxuryGoldSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const marbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gold shimmer entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Headline with gold reveal
      tl.fromTo(
        headlineRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.95,
          filter: 'blur(10px)'
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power4.out'
        }
      );

      // Subline with elegant fade
      tl.fromTo(
        sublineRef.current,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8
        },
        '-=0.8'
      );

      // Luxury cards stagger animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.luxury-card');
        tl.fromTo(
          cards,
          {
            y: 80,
            opacity: 0,
            rotateX: 15,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'back.out(1.2)'
          },
          '-=0.4'
        );
      }

      // Marble texture parallax
      if (marbleRef.current) {
        gsap.to(marbleRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
          y: 200,
          opacity: 0.3,
          scale: 1.1
        });
      }

      // Gold accent floating animation
      const goldAccents = containerRef.current?.querySelectorAll('.gold-accent');
      if (goldAccents) {
        goldAccents.forEach((accent, i) => {
          gsap.to(accent, {
            y: '+=20',
            duration: 2 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        });
      }

      // Scroll-triggered luxury reveal sections
      const revealSections = containerRef.current?.querySelectorAll('.luxury-reveal');
      if (revealSections) {
        revealSections.forEach((section) => {
          gsap.fromTo(
            section,
            {
              y: 100,
              opacity: 0,
              scale: 0.95
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Hover effect for luxury cards
  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      y: -10,
      scale: 1.02,
      boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.5)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      y: 0,
      scale: 1,
      boxShadow: '0 10px 30px -10px rgba(212, 175, 55, 0.3)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const luxuryFeatures = [
    {
      title: 'Premium Craftsmanship',
      description: 'Every detail meticulously designed for excellence',
      icon: '✦'
    },
    {
      title: 'Timeless Elegance',
      description: 'Sophisticated aesthetics that transcend trends',
      icon: '◆'
    },
    {
      title: 'Exclusive Quality',
      description: 'Uncompromising standards of luxury and refinement',
      icon: '✧'
    },
    {
      title: 'Exquisite Design',
      description: 'Where artistry meets sophisticated minimalism',
      icon: '❖'
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-neutral-950">
      {/* Marble texture overlay with parallax */}
      <div
        ref={marbleRef}
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%, rgba(255, 215, 0, 0.05) 100%)
          `,
          backgroundSize: '100% 100%, 80% 80%, 100% 100%',
          backgroundPosition: '0% 0%, 100% 100%, 0% 0%'
        }}
      />

      {/* Gold gradient accents */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-amber-500/20 via-yellow-600/10 to-transparent rounded-full blur-3xl gold-accent" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-radial from-yellow-500/15 via-amber-600/10 to-transparent rounded-full blur-3xl gold-accent" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Hero section */}
        <div className="text-center mb-32">
          <h1
            ref={headlineRef}
            className="text-7xl md:text-8xl lg:text-9xl font-serif mb-8 bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              textShadow: '0 0 80px rgba(212, 175, 55, 0.3)'
            }}
          >
            Luxury
            <span className="block text-6xl md:text-7xl lg:text-8xl mt-4 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 bg-clip-text">
              Redefined
            </span>
          </h1>

          <p
            ref={sublineRef}
            className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto font-light tracking-wide"
            style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
          >
            Where sophistication meets innovation in perfect harmony
          </p>
        </div>

        {/* Luxury features grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {luxuryFeatures.map((feature, index) => (
            <div
              key={index}
              className="luxury-card relative group cursor-pointer"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
              style={{
                background: 'linear-gradient(135deg, rgba(23, 23, 23, 0.9) 0%, rgba(38, 38, 38, 0.8) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 10px 30px -10px rgba(212, 175, 55, 0.3)'
              }}
            >
              {/* Gold foil accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/30 to-transparent rounded-bl-full" />

              <div className="text-5xl mb-6 text-amber-400">{feature.icon}</div>

              <h3 className="text-2xl font-serif text-amber-200 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {feature.title}
              </h3>

              <p className="text-neutral-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gold shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Luxury statement section */}
        <div className="luxury-reveal text-center mb-32">
          <div className="inline-block px-8 py-4 border border-amber-500/30 rounded-full mb-8">
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-light">
              Premium Experience
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif text-amber-100 mb-8 max-w-4xl mx-auto leading-tight">
            Crafted for those who appreciate
            <span className="block mt-4 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              the extraordinary
            </span>
          </h2>
        </div>

        {/* Elegant marble pattern showcase */}
        <div className="luxury-reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                background: `linear-gradient(135deg,
                  rgba(38, 38, 38, 0.9) 0%,
                  rgba(23, 23, 23, 0.95) 100%)`,
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}
            >
              {/* Marble texture pattern */}
              <div
                className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at ${20 + item * 20}% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
                    linear-gradient(${45 * item}deg, rgba(255, 215, 0, 0.1) 0%, transparent 70%)
                  `
                }}
              />

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="text-amber-400 text-4xl mb-4">✧</div>
                <h3 className="text-2xl font-serif text-amber-100 mb-2">
                  Collection {item}
                </h3>
                <p className="text-neutral-400 text-sm">
                  Curated with precision and care
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology showcase */}
        <div className="luxury-reveal mt-32 text-center">
          <div className="inline-block px-12 py-8 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(23, 23, 23, 0.9) 0%, rgba(38, 38, 38, 0.8) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 20px 60px -20px rgba(212, 175, 55, 0.4)'
            }}
          >
            <p className="text-amber-300 text-lg font-light">
              Crafted with GSAP, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Final gold accent */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center gap-4 text-amber-400/60 text-sm tracking-[0.4em] uppercase">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400/40" />
            <span>Luxury Gold Foil</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
