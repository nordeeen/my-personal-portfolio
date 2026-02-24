'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  label: string;
  language: string;
  content: string;
}

export function CodeBlock({ label, language, content }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-white/[0.06]">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            {language}
          </span>
          {label && (
            <>
              <span className="text-zinc-700">·</span>
              <span className="text-xs text-zinc-400">{label}</span>
            </>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          {copied ? (
            <>
              <Check size={13} />
              <span>Tersalin</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Salin</span>
            </>
          )}
        </button>
      </div>

      {/* Code area */}
      <div className="bg-[#0d0d14] p-5 overflow-x-auto">
        <pre className="text-sm leading-relaxed">
          <code className="text-[#b4c2f0] font-mono whitespace-pre">
            {content}
          </code>
        </pre>
      </div>
    </div>
  );
}
