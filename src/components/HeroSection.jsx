import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const FloatingOrb = ({ delay = 0, x = 0, y = 0, color = 'from-pink-400 to-fuchsia-500' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6, x, y }}
    animate={{ opacity: 0.8, scale: 1, y: [y, y - 20, y], x: [x, x + 10, x] }}
    transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
    className={`pointer-events-none absolute h-40 w-40 rounded-full bg-gradient-to-br ${color} blur-2xl mix-blend-screen`} 
  />
);

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-indigo-900 via-purple-900 to-sky-900 p-8 text-white shadow-2xl">
      {/* Animated gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.12),rgba(0,0,0,0))]" />

      {/* Floating orbs */}
      <FloatingOrb delay={0.2} x={-120} y={20} color="from-sky-400 to-cyan-500" />
      <FloatingOrb delay={0.8} x={120} y={60} color="from-pink-400 to-fuchsia-500" />
      <FloatingOrb delay={1.4} x={0} y={-40} color="from-amber-400 to-orange-500" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span>Dunia fantasi bergerak — gaya anime elegan</span>
        </div>

        <h1 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
          Buat presentasi fantasi yang indah
          <span className="block bg-gradient-to-r from-amber-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">penuh aksi, warna cerah, dan kontras</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">
          Tulis ceritamu, atur suasana, dan lihat slide bergaya sinematik dengan visual berkualitas tinggi.
          Kamu bisa ekspor ke PDF untuk dibagikan.
        </p>
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
