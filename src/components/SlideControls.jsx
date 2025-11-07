import { ChevronLeft, ChevronRight, Clipboard } from 'lucide-react';

export default function SlideControls({ index, total, onPrev, onNext, onCopy }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur">
      <div className="text-sm text-white/70">
        Slide {Math.min(index + 1, total)} / {Math.max(total, 1)}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm hover:border-cyan-300/40 hover:bg-cyan-300/10"
        >
          <ChevronLeft className="h-4 w-4" />
          Sebelumnya
        </button>
        <button
          onClick={onNext}
          className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm hover:border-amber-300/40 hover:bg-amber-300/10"
        >
          Berikutnya
          <ChevronRight className="h-4 w-4" />
        </button>
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-amber-400 px-4 py-2 text-sm font-medium text-black shadow hover:brightness-110"
        >
          <Clipboard className="h-4 w-4" />
          Salin Teks Slide
        </button>
      </div>
    </div>
  );
}
