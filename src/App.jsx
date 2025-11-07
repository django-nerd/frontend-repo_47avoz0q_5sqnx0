import React, { useState } from 'react';
import SceneBackground from './components/SceneBackground';
import TitleSlide from './components/TitleSlide';
import StoryEditor from './components/StoryEditor';
import SlideViewer from './components/SlideViewer';
import HeroCharacter from './components/HeroCharacter';

function App() {
  const [slides, setSlides] = useState([
    { kind: 'cover', title: 'Princess of Starlight', subtitle: 'Cerah & Kontras' },
    { kind: 'story', index: 1, text: 'Di bawah aurora, takdir baru mulai berpendar.', mood: 'Neon Bloom' },
    { kind: 'end', title: 'Tamat' },
  ]);

  return (
    <div className="min-h-screen w-full relative text-slate-900 font-[Inter]">
      <SceneBackground />

      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1.5 shadow ring-1 ring-white/50">
          <span className="text-sm font-semibold bg-gradient-to-r from-fuchsia-500 via-amber-400 to-sky-500 bg-clip-text text-transparent">Fantasy PPT Maker</span>
        </div>
        <a
          href="#editor"
          className="rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-sm font-medium shadow hover:bg-white"
        >
          Mulai Tulis Cerita
        </a>
      </header>

      <main className="pb-24">
        <TitleSlide />
        <HeroCharacter />

        <div id="editor" />
        <StoryEditor onGenerateSlides={setSlides} />
        <SlideViewer slides={slides} />
      </main>

      <footer className="relative z-10 py-8 text-center text-white/80">
        Dibuat untuk presentasi fantasi bergerak dengan warna cerah & kontras.
      </footer>
    </div>
  );
}

export default App;
