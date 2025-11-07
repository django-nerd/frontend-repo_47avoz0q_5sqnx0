import React from 'react';
import { Sparkles, Film } from 'lucide-react';

export default function TitleSlide() {
  return (
    <section className="relative z-10 pt-24 pb-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 shadow-sm ring-1 ring-white/40">
        <Film className="w-4 h-4 text-indigo-600" />
        <span className="text-xs font-medium text-gray-700">Fantasy Cinematic Presentation</span>
      </div>

      <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-500 via-amber-400 to-sky-500 drop-shadow-sm">
        Princess of Starlight
      </h1>

      <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
        Buat deck presentasi bergaya film fantasi dengan karakter cantik ala anime. Cerah, kontras, dan penuh aksi.
      </p>

      <div className="mt-6 inline-flex items-center gap-2 text-fuchsia-50/90">
        <Sparkles className="w-5 h-5" />
        <span className="text-sm">Interaktif, sinematik, dan siap diisi cerita versimu</span>
      </div>
    </section>
  );
}
