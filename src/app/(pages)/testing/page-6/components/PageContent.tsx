'use client';

import { useEffect, useState } from 'react';
import { GradientBackground } from './GradientBackground';
import { AnimatedBlobBackground } from './MorphingBlob';
import { GlassCard, AsymmetricGlassCard } from './GlassCard';
import { PlayfulText, FloatingElement, BouncyButton } from './PlayfulText';
import { ViewTransitionsProvider, ViewTransitionsStyles } from './ViewTransitions';
import { motion } from 'framer-motion';

export function PageContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ViewTransitionsProvider>
      <ViewTransitionsStyles />
      <div className="min-h-screen overflow-x-hidden">
      {/* Gradient Background */}
      <GradientBackground />

      {/* Animated Blob Background */}
      <AnimatedBlobBackground />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="text-center max-w-4xl mx-auto"
          >
            <PlayfulText
              serif={false}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 text-gray-800"
            >
              Softness
            </PlayfulText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif text-gray-700 mb-8">
                as <span className="italic text-pastel-lavender">strength</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12"
            >
              Exploring the paradox of professional softness: how pastels convey authority,
              organic shapes build trust, and restraint creates personality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <BouncyButton>Explore Design</BouncyButton>
              <BouncyButton className="bg-pastel-lavender/30">
                Read Philosophy
              </BouncyButton>
            </motion.div>
          </motion.div>
        </section>

        {/* Conceptual Cards Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-800 mb-16 text-center"
            >
              Design as <span className="italic text-pastel-peach">Philosophy</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Softness Analysis */}
              <GlassCard delay={0.1}>
                <FloatingElement>
                  <div className="w-16 h-16 bg-pastel-peach rounded-full mb-6 shadow-lg" />
                </FloatingElement>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Professional Softness
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Hard edges shout for attention. Soft gradients whisper with authority. In
                  an attention economy, pastels are revolutionary acts of gentleness.
                </p>
              </GlassCard>

              {/* Card 2: Organic Geometry */}
              <GlassCard delay={0.2} hoverRotate={-1}>
                <FloatingElement>
                  <div className="w-16 h-16 bg-pastel-mint rounded-full mb-6 shadow-lg blur-sm" />
                </FloatingElement>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Organic Geometry</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nature's chaos is deeply structured. Asymmetry isn't disorder—it's
                  intentional imbalance that creates movement and guides the eye.
                </p>
              </GlassCard>

              {/* Card 3: Refined Playfulness */}
              <GlassCard delay={0.3} hoverRotate={2}>
                <FloatingElement>
                  <div className="w-16 h-16 bg-pastel-lavender rounded-full mb-6 shadow-lg" />
                </FloatingElement>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Refined Playfulness
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Typography that dances but doesn't stumble. Motion that delights but
                  doesn't distract. Personality through restraint.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Asymmetric Layout Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 mb-6">
                  The Psychology of{' '}
                  <span className="italic text-pastel-sky">Pastels</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Neons demand: "LOOK AT ME NOW!" They spike cortisol, create urgency,
                  exploit FOMO.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Pastels invite: "Stay a while." They lower heart rate, encourage
                  lingering, build memory.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Pastels are post-maximalist—they've seen the neon wars and chosen peace.
                  They're confidence distilled.
                </p>
              </motion.div>

              {/* Right: Asymmetric Card */}
              <AsymmetricGlassCard delay={0.2}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pastel-rose rounded-2xl flex-shrink-0 shadow-md" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Cognitive Ease
                      </h4>
                      <p className="text-gray-700">
                        Pastels reduce visual strain, creating psychological comfort and
                        trust.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pastel-butter rounded-2xl flex-shrink-0 shadow-md" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Emotional Intelligence
                      </h4>
                      <p className="text-gray-700">
                        Soft design acknowledges the human on the other side of the screen.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pastel-sage rounded-2xl flex-shrink-0 shadow-md" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Sophistication
                      </h4>
                      <p className="text-gray-700">
                        Anyone can go bold; refinement requires restraint and mastery.
                      </p>
                    </div>
                  </div>
                </div>
              </AsymmetricGlassCard>
            </div>
          </div>
        </section>

        {/* Interactive Typography Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-xl sm:text-2xl font-serif text-gray-700 mb-8 italic">
                "Digital spaces tend toward two extremes: sterile minimalism or chaotic
                maximalism."
              </p>
              <PlayfulText
                serif={true}
                className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 mb-8"
              >
                The Third Path
              </PlayfulText>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Refined playfulness is the hardest path. It requires embracing imperfection
                as a feature, organic blobs that morph because living things breathe,
                asymmetry that feels natural because we're asymmetric creatures.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <GlassCard delay={0} hoverScale={1.03} className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Humanness in Digital Design
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We build with softness because digital doesn't have to be cold. We choose
                pastels because confidence doesn't need to shout. We embrace organic shapes
                because perfection is inhuman.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <BouncyButton className="bg-pastel-peach/40">
                  View Portfolio
                </BouncyButton>
                <BouncyButton className="bg-pastel-mint/40">Get in Touch</BouncyButton>
              </div>
            </GlassCard>
          </div>
        </section>
      </div>
      </div>
    </ViewTransitionsProvider>
  );
}
