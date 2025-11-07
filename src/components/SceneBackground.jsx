import React from 'react';
import Spline from '@splinetool/react-spline';

// Animated fantasy 3D background using Spline. The scene is interactive by default.
// Note: Avoid negative z-index. Keep overlays pointer-events-none so Spline remains interactive.
export default function SceneBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Replace the URL below with your preferred fantasy Spline scene if desired */}
      <Spline
        scene="https://prod.spline.design/ye2TzfdmGmLx0y8M/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Dreamy gradient overlays to enhance colors without blocking pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-sky-400/10 to-indigo-600/30 mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,0,128,0.15),transparent_35%),radial-gradient(circle_at_30%_80%,rgba(0,200,255,0.15),transparent_40%)]" />
    </div>
  );
}
