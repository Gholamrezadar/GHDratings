import { useState } from "react";

export default function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 mb-1 px-3 py-1 text-sm text-white bg-black/40 backdrop-blur-md border border-white/20 rounded-lg shadow-lg whitespace-nowrap pointer-events-none z-100">
          {text}
        </div>
      )}
    </div>
  );
}
