import React from 'react';

export default function HeroCharacter() {
  return (
    <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow">Karakter Utama</h2>
          <p className="mt-2 text-white/90 leading-relaxed">
            Sosok putri elegan bergaya anime dengan gaun kristal, aura bintang, dan rambut berkilau. Kamu bisa menceritakan latar, tujuan, dan konflik yang ia hadapi—semua akan otomatis diubah menjadi slide sinematik.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden ring-1 ring-white/50 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1659535909748-48399d039b3f?q=80&w=1200&auto=format&fit=crop"
              alt="Anime princess style character"
              className="w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-fuchsia-600/40 via-amber-300/20 to-transparent mix-blend-screen" />
          </div>
        </div>
      </div>
    </div>
  );
}
