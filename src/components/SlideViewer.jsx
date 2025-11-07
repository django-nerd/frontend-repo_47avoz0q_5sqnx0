import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function SlideViewer({ slides }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const current = useMemo(() => slides[index] || null, [slides, index]);

  const next = () => setIndex((i) => Math.min(i + 1, total - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="relative z-10 mt-10 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl ring-1 ring-white/50 overflow-hidden">
        <div className="relative aspect-[16/9] w-full">
          <SlideCanvas slide={current} />
          <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/40 to-transparent text-white">
            <button onClick={prev} className="rounded-full bg-white/20 hover:bg-white/30 p-2">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-sm font-medium">
              {index + 1} / {total}
            </div>
            <button onClick={next} className="rounded-full bg-white/20 hover:bg-white/30 p-2">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideCanvas({ slide }) {
  if (!slide) return null;

  if (slide.kind === 'cover') {
    return (
      <div className="w-full h-full relative">
        <GradientBackdrop mood="cover" />
        <div className="absolute inset-0 grid place-items-center text-center p-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
              {slide.title}
            </h2>
            <p className="mt-3 text-white/90 text-lg">{slide.subtitle}</p>
          </div>
        </div>
      </div>
    );
  }

  if (slide.kind === 'end') {
    return (
      <div className="w-full h-full relative">
        <GradientBackdrop mood="end" />
        <div className="absolute inset-0 grid place-items-center text-center p-8">
          <div>
            <Star className="w-10 h-10 mx-auto text-amber-300 drop-shadow" />
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">{slide.title}</h2>
            <p className="mt-2 text-white/80">Terima kasih telah menonton</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <GradientBackdrop mood={slide.mood} />
      <div className="absolute inset-0 p-8 flex items-end">
        <div className="max-w-3xl">
          <div className="inline-block rounded-lg bg-black/35 backdrop-blur px-4 py-2 ring-1 ring-white/30">
            <span className="text-xs uppercase tracking-widest text-white/90">Adegan {slide.index}</span>
          </div>
          <p className="mt-3 text-white text-2xl md:text-3xl font-semibold drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] leading-snug">
            {slide.text}
          </p>
        </div>
      </div>
    </div>
  );
}

function GradientBackdrop({ mood }) {
  const map = {
    cover: 'from-fuchsia-600 via-amber-400 to-sky-500',
    end: 'from-indigo-700 via-fuchsia-600 to-rose-500',
    'Neon Bloom': 'from-fuchsia-500 via-rose-400 to-amber-300',
    Sunburst: 'from-amber-400 via-yellow-300 to-rose-400',
    'Crystal Sky': 'from-sky-400 via-cyan-300 to-indigo-500',
    Starfall: 'from-indigo-600 via-violet-500 to-fuchsia-400',
    Aurora: 'from-emerald-300 via-sky-300 to-indigo-500',
    Frostlight: 'from-blue-300 via-indigo-300 to-fuchsia-300',
    Moonveil: 'from-violet-400 via-indigo-500 to-fuchsia-500',
    'Cosmic Mist': 'from-sky-400 via-fuchsia-400 to-rose-400',
    'Royal Dawn': 'from-indigo-500 via-violet-400 to-amber-300',
    Cloudforge: 'from-sky-300 via-indigo-400 to-emerald-300',
    'Gilded Wind': 'from-amber-400 via-rose-300 to-indigo-400',
    Skyfire: 'from-rose-400 via-amber-400 to-fuchsia-500',
    Hypernova: 'from-fuchsia-500 via-amber-400 to-sky-500',
    'Ion Trail': 'from-cyan-400 via-sky-400 to-indigo-500',
    'Nebula Rush': 'from-violet-500 via-indigo-500 to-rose-500',
    'Stellar Drift': 'from-indigo-600 via-sky-500 to-amber-400',
  };
  const gradient = map[mood] || map['Neon Bloom'];

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
      <div className="pointer-events-none absolute inset-0 mix-blend-screen bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.2),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2048&auto=format&fit=crop')] bg-cover bg-center" />
    </div>
  );
}
