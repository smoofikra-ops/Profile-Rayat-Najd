import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Copy, Check, X, ShieldCheck, Sparkles, Layers, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { RayatNajdEmblem, RayatNajdLogoFull } from './RayatNajdLogo';

interface LogoBrandModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LogoBrandModal({ isOpen, onClose }: LogoBrandModalProps) {
  const [bgType, setBgType] = useState<'checker' | 'white' | 'dark' | 'cream'>('checker');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-brand-warm/20 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-warm/15 bg-brand-forest text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-gold/20 flex items-center justify-center border border-brand-gold/40">
                <Sparkles className="w-4 h-4 text-brand-gold" />
              </div>
              <div>
                <h2 className="text-base font-bold font-sans">Rayat Najd • Official Brand Identity &amp; Clean Logo Suite</h2>
                <p className="text-[11px] text-brand-gold font-arabic" dir="rtl">
                  الهوية البصرية الرسمية — شعار نقي 100% بدون أي مربعات داخلية وبخلفية شفافة
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Background Preview Switcher Bar */}
          <div className="px-6 py-3 bg-brand-beige/50 border-b border-brand-warm/15 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2 text-xs font-sans text-brand-dark/80 font-medium">
              <Layers className="w-3.5 h-3.5 text-brand-forest" />
              <span>Canvas Preview Mode:</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-brand-warm/20">
              <button
                onClick={() => setBgType('checker')}
                className={`px-2.5 py-1 text-xs rounded font-medium transition-all ${
                  bgType === 'checker' ? 'bg-brand-forest text-white shadow-xs' : 'text-brand-dark/70 hover:text-brand-dark'
                }`}
              >
                🏁 Transparent Grid
              </button>
              <button
                onClick={() => setBgType('white')}
                className={`px-2.5 py-1 text-xs rounded font-medium transition-all ${
                  bgType === 'white' ? 'bg-brand-forest text-white shadow-xs' : 'text-brand-dark/70 hover:text-brand-dark'
                }`}
              >
                ⬜ Solid White
              </button>
              <button
                onClick={() => setBgType('dark')}
                className={`px-2.5 py-1 text-xs rounded font-medium transition-all ${
                  bgType === 'dark' ? 'bg-brand-forest text-white shadow-xs' : 'text-brand-dark/70 hover:text-brand-dark'
                }`}
              >
                🌲 Forest Dark
              </button>
              <button
                onClick={() => setBgType('cream')}
                className={`px-2.5 py-1 text-xs rounded font-medium transition-all ${
                  bgType === 'cream' ? 'bg-brand-forest text-white shadow-xs' : 'text-brand-dark/70 hover:text-brand-dark'
                }`}
              >
                🍂 Warm Ivory
              </button>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            
            {/* Version 1: Main Full Logo Lockups */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold block font-sans">
                    Deliverable 01
                  </span>
                  <h3 className="text-sm font-bold text-brand-forest font-sans">
                    Version 1 — Main Full Logo Lockup
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/brand/rayat-najd-logo-horizontal-transparent.png"
                    download="rayat-najd-logo-horizontal.png"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-forest text-brand-gold text-xs font-semibold hover:bg-brand-forest/90 shadow-sm transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PNG</span>
                  </a>
                  <a
                    href="/brand/rayat-najd-logo-horizontal.svg"
                    download="rayat-najd-logo-horizontal.svg"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-forest text-brand-forest text-xs font-semibold hover:bg-brand-forest/5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download SVG</span>
                  </a>
                </div>
              </div>

              {/* Preview Box */}
              <div 
                className={`p-8 rounded-xl border border-brand-warm/20 flex flex-col md:flex-row items-center justify-around gap-6 transition-all ${
                  bgType === 'checker' ? 'bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%),linear-gradient(-45deg,#f0f0f0_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f0f0f0_75%),linear-gradient(-45deg,transparent_75%,#f0f0f0_75%)] bg-[size:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px] bg-white' :
                  bgType === 'white' ? 'bg-white' :
                  bgType === 'dark' ? 'bg-brand-forest text-white' :
                  'bg-brand-beige'
                }`}
              >
                {/* Horizontal */}
                <div className="flex flex-col items-center gap-2">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${bgType === 'dark' ? 'text-white/60' : 'text-brand-dark/50'}`}>
                    Horizontal Lockup
                  </span>
                  <RayatNajdLogoFull layout="horizontal" variant={bgType === 'dark' ? 'light' : 'dark'} emblemSize={52} />
                </div>

                <div className={`hidden md:block w-px h-24 ${bgType === 'dark' ? 'bg-white/20' : 'bg-brand-warm/20'}`}></div>

                {/* Vertical */}
                <div className="flex flex-col items-center gap-2">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${bgType === 'dark' ? 'text-white/60' : 'text-brand-dark/50'}`}>
                    Vertical Lockup
                  </span>
                  <RayatNajdLogoFull layout="vertical" variant={bgType === 'dark' ? 'light' : 'dark'} emblemSize={42} />
                </div>
              </div>
            </div>

            {/* Version 2: Icon / Emblem Only */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold block font-sans">
                    Deliverable 02
                  </span>
                  <h3 className="text-sm font-bold text-brand-forest font-sans">
                    Version 2 — Clean Circular Emblem Only (No Text, 100% Inside Circle)
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/brand/rayat-najd-emblem-512x512.png"
                    download="rayat-najd-emblem-512.png"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-forest text-brand-gold text-xs font-semibold hover:bg-brand-forest/90 shadow-sm transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Emblem 512px PNG</span>
                  </a>
                  <a
                    href="/brand/rayat-najd-emblem.svg"
                    download="rayat-najd-emblem.svg"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-forest text-brand-forest text-xs font-semibold hover:bg-brand-forest/5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Emblem SVG</span>
                  </a>
                </div>
              </div>

              {/* Preview Box */}
              <div 
                className={`p-6 rounded-xl border border-brand-warm/20 flex items-center justify-center gap-8 transition-all ${
                  bgType === 'checker' ? 'bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%),linear-gradient(-45deg,#f0f0f0_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f0f0f0_75%),linear-gradient(-45deg,transparent_75%,#f0f0f0_75%)] bg-[size:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px] bg-white' :
                  bgType === 'white' ? 'bg-white' :
                  bgType === 'dark' ? 'bg-brand-forest' :
                  'bg-brand-beige'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <RayatNajdEmblem size={130} variant={bgType === 'dark' ? 'light' : 'dark'} />
                  <span className={`text-[10px] font-sans font-medium ${bgType === 'dark' ? 'text-white/70' : 'text-brand-dark/60'}`}>
                    Natural Organic Geometry • Zero Square Artifacts
                  </span>
                </div>
              </div>
            </div>

            {/* Version 3: Multi-Resolution Icons & Favicon Matrix */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold block font-sans">
                    Deliverable 03
                  </span>
                  <h3 className="text-sm font-bold text-brand-forest font-sans">
                    Version 3 — Favicon &amp; Multi-Resolution Export Matrix
                  </h3>
                </div>
                <a
                  href="/favicon.ico"
                  download="favicon.ico"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-gold text-brand-forest text-xs font-bold hover:bg-brand-gold/90 shadow-sm transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download favicon.ico</span>
                </a>
              </div>

              {/* Sizes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { size: 512, label: '512×512 HD', href: '/brand/rayat-najd-emblem-512x512.png', name: 'rayat-najd-512.png' },
                  { size: 256, label: '256×256 App', href: '/brand/rayat-najd-emblem-256x256.png', name: 'rayat-najd-256.png' },
                  { size: 128, label: '128×128 Medium', href: '/brand/rayat-najd-emblem-128x128.png', name: 'rayat-najd-128.png' },
                  { size: 64, label: '64×64 Compact', href: '/brand/rayat-najd-emblem-64x64.png', name: 'rayat-najd-64.png' },
                  { size: 32, label: '32×32 Favicon', href: '/brand/rayat-najd-emblem-32x32.png', name: 'rayat-najd-32.png' },
                ].map((item) => (
                  <div 
                    key={item.size}
                    className="p-3 bg-white rounded-xl border border-brand-warm/15 shadow-xs flex flex-col items-center justify-between text-center gap-2 hover:border-brand-gold/50 transition-all"
                  >
                    <span className="text-[10px] font-bold text-brand-forest font-sans">
                      {item.label}
                    </span>

                    <div className="w-16 h-16 rounded-lg bg-brand-beige/50 flex items-center justify-center p-1 border border-brand-warm/10">
                      <img 
                        src={item.href} 
                        alt={item.label} 
                        className="max-w-full max-h-full object-contain"
                        style={{ width: Math.min(item.size, 48), height: Math.min(item.size, 48) }}
                      />
                    </div>

                    <a
                      href={item.href}
                      download={item.name}
                      className="w-full py-1 px-2 rounded bg-brand-forest/5 hover:bg-brand-forest hover:text-white text-brand-forest text-[10px] font-semibold transition-all flex items-center justify-center gap-1"
                    >
                      <Download className="w-3 h-3" />
                      <span>PNG</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Checklist Summary */}
            <div className="p-4 rounded-xl bg-brand-forest/5 border border-brand-forest/15 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <span className="font-bold text-brand-forest block">Verified Architectural Standards:</span>
                <p className="text-brand-dark/75 leading-relaxed">
                  ✓ Continuous circular perimeter with zero square bounding box.<br />
                  ✓ Mathematical foliage and taproots harmoniously integrated within the medallion radius.<br />
                  ✓ Transparent alpha channel across all PNG and SVG renders.<br />
                  ✓ Optimized for crisp rendering across micro (32px favicon) to ultra-high-resolution print formats.
                </p>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3 bg-brand-beige/40 border-t border-brand-warm/15 flex items-center justify-between shrink-0">
            <span className="text-[11px] text-brand-dark/60 font-sans">
              Rayat Najd Corporate Brand Identity System
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-brand-forest text-brand-gold text-xs font-bold hover:bg-brand-forest/90 transition-all"
            >
              Close Viewer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
