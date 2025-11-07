import React, { useState } from 'react';
import { Pencil, Play } from 'lucide-react';

export default function StoryEditor({ onGenerateSlides }) {
  const [title, setTitle] = useState('Putri Cahaya Bintang');
  const [story, setStory] = useState(
    'Di bawah langit aurora, seorang putri terbangun dengan kekuatan cahaya. Ia harus menyelamatkan kerajaannya dari bayangan yang mendekat.'
  );
  const [theme, setTheme] = useState('Cerah & Kontras');

  const handleGenerate = () => {
    const slides = createSlides(title, story, theme);
    onGenerateSlides(slides);
  };

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl ring-1 ring-white/50 p-6">
          <div className="flex items-center gap-2 text-indigo-600 font-semibold">
            <Pencil className="w-5 h-5" />
            Editor Cerita
          </div>

          <label className="block text-sm font-medium text-gray-700 mt-4">Judul</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-200 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            placeholder="Judul presentasi"
          />

          <label className="block text-sm font-medium text-gray-700 mt-4">Tema Visual</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-200 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option>Cerah & Kontras</option>
            <option>Fantasi Aurora</option>
            <option>Kerajaan Langit</option>
            <option>Aksi Galaksi</option>
          </select>

          <label className="block text-sm font-medium text-gray-700 mt-4">Ceritamu</label>
          <textarea
            value={story}
            onChange={(e) => setStory(e.target.value)}
            rows={6}
            className="mt-1 w-full rounded-lg border border-gray-200 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Ketik kisahmu di sini"
          />

          <button
            onClick={handleGenerate}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-amber-400 to-sky-500 text-white font-semibold px-4 py-2 shadow hover:brightness-110 active:scale-[0.99]"
          >
            <Play className="w-4 h-4" />
            Buat Slide
          </button>
        </div>

        <TipsPanel />
      </div>
    </section>
  );
}

function TipsPanel() {
  return (
    <div className="bg-gradient-to-br from-indigo-600/70 via-fuchsia-500/70 to-amber-400/70 text-white rounded-2xl shadow-xl p-6 ring-1 ring-white/30">
      <h3 className="text-lg font-semibold">Tips gaya anime elegan</h3>
      <ul className="mt-3 space-y-2 text-sm">
        <li>• Gunakan warna cerah dan kontras tinggi.</li>
        <li>• Deskripsikan aksi dan emosi karakter.</li>
        <li>• Bagi cerita menjadi adegan pendek (1-2 kalimat tiap slide).</li>
        <li>• Tambahkan elemen sinematik: cahaya, partikel, dan sihir.</li>
      </ul>
    </div>
  );
}

function createSlides(title, story, theme) {
  const parts = story
    .split(/[\n\r]+|(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 8);

  const slides = [
    {
      kind: 'cover',
      title,
      subtitle: theme,
    },
    ...parts.map((text, idx) => ({
      kind: 'story',
      index: idx + 1,
      text,
      mood: pickMood(theme, idx),
    })),
    { kind: 'end', title: 'Tamat' },
  ];

  return slides;
}

function pickMood(theme, i) {
  const base = {
    'Cerah & Kontras': ['Neon Bloom', 'Sunburst', 'Crystal Sky', 'Starfall'],
    'Fantasi Aurora': ['Aurora', 'Frostlight', 'Moonveil', 'Cosmic Mist'],
    'Kerajaan Langit': ['Royal Dawn', 'Cloudforge', 'Gilded Wind', 'Skyfire'],
    'Aksi Galaksi': ['Hypernova', 'Ion Trail', 'Nebula Rush', 'Stellar Drift'],
  };
  const arr = base[theme] || base['Cerah & Kontras'];
  return arr[i % arr.length];
}
