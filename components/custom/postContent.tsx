import { Section } from '@/model';
import { CodeBlock } from './codeBlock';

interface PostContentProps {
  sections: Section[];
}

export function PostContent({ sections }: PostContentProps) {
  return (
    <div className="prose-custom">
      {sections.map((section, i) => {
        switch (section.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="text-2xl font-bold text-white mt-12 mb-4 tracking-tight"
              >
                {section.content}
              </h2>
            );

          case 'h3':
            return (
              <h3
                key={i}
                className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mt-8 mb-3"
              >
                {section.content}
              </h3>
            );

          case 'p':
            return (
              <p
                key={i}
                className="text-zinc-400 leading-relaxed mb-5 text-[17px]"
              >
                {section.content}
              </p>
            );

          case 'callout':
            return (
              <div
                key={i}
                className="my-6 rounded-xl bg-white/[0.03] border border-white/[0.08] px-5 py-4 text-zinc-300 text-sm leading-relaxed"
              >
                {section.content}
              </div>
            );

          case 'code':
            return (
              <CodeBlock
                key={i}
                label={section.label}
                language={section.language}
                content={section.content}
              />
            );

          case 'comparison':
            return (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6"
              >
                {section.items.map((item: any, j: any) => (
                  <div
                    key={j}
                    className={`rounded-xl p-4 border ${
                      item.variant === 'old'
                        ? 'bg-red-500/5 border-red-500/15'
                        : 'bg-emerald-500/5 border-emerald-500/15'
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                        item.variant === 'old'
                          ? 'text-red-400'
                          : 'text-emerald-400'
                      }`}
                    >
                      {item.label}
                    </p>
                    <ul className="space-y-1.5">
                      {item.points.map((point: any, k: any) => (
                        <li
                          key={k}
                          className="text-sm text-zinc-400 flex items-start gap-2"
                        >
                          <span className="mt-0.5 opacity-50">→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
