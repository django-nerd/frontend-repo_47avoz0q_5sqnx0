import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

// Simple animated gradient frame that sits on top but doesn't block interaction
function GradientFrame() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,255,255,0.12),rgba(0,0,0,0))]" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-amber-400/10 to-cyan-400/10"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  );
}

export default function ScenePreview({ currentSlideIndex, slides }) {
  const activeText = useMemo(() => slides[currentSlideIndex] || '', [slides, currentSlideIndex]);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-2xl">
      <div className="relative h-[420px] w-full">
        {/* 3D fantasy scene */}
        <Spline scene="https://prod.spline.design/5-1bq3yVVq4PAGzO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <GradientFrame />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Cinematic caption */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-6 left-6 right-6 mx-auto max-w-3xl rounded-xl border border-white/10 bg-black/40 p-4 text-white backdrop-blur"
          >
            <p className="text-sm leading-relaxed text-white/90">
              {activeText || 'Teks slide akan tampil di sini.'}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
