import { useState } from 'react';
import { Smartphone, X, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PhonePreviewModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(0);

  return (
    <>
      {/* Floating Toggle Button (Visible on medium and larger screens) */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/95 px-4 py-2.5 text-xs font-mono font-bold text-cyan shadow-xl backdrop-blur-md hover:bg-navy transition-all hover:scale-105 active:scale-95 glow-cyan-sm cursor-pointer"
          aria-label="Open Mobile Phone Viewport Simulator"
        >
          <Smartphone className="h-4 w-4 text-cyan" />
          <span>Phone Simulator (390px)</span>
        </button>
      </div>

      {/* Device Frame Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative flex flex-col items-center"
            >
              {/* Controls Header */}
              <div className="mb-3 flex w-full items-center justify-between px-2 text-white">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-cyan" />
                  <span className="font-mono text-xs font-bold text-light-text">
                    Mobile Viewport (390 × 844)
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono">
                  <button
                    onClick={() => setKey((k) => k + 1)}
                    className="flex items-center gap-1 rounded-lg bg-navy border border-border-dark px-2.5 py-1 text-[11px] font-semibold text-cyan hover:border-cyan transition-colors cursor-pointer"
                    title="Reload phone frame"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Reload</span>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg bg-navy border border-border-dark p-1.5 text-secondary-text hover:text-cyan hover:border-cyan transition-colors cursor-pointer"
                    aria-label="Close phone simulator"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Realistic Phone Chassis (390px width) */}
              <div className="relative h-[780px] w-[390px] overflow-hidden rounded-[48px] border-[10px] border-[#07131F] bg-midnight shadow-2xl ring-1 ring-cyan/30 glow-cyan-sm">
                {/* Dynamic Island / Speaker Notch */}
                <div className="absolute top-2.5 left-1/2 z-30 h-5 w-28 -translate-x-1/2 rounded-full bg-[#07131F]" />

                {/* Embedded Responsive Viewport */}
                <iframe
                  key={key}
                  src="/"
                  title="ETIMS 2027 Mobile Responsive Preview"
                  className="h-full w-full bg-midnight"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
