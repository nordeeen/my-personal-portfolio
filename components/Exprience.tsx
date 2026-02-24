import { datasListExp, allDataWords } from '@/lib/const';

const Exprience: React.FC = () => {
  return (
    <section className="w-full bg-[#0a192f] text-gray-300 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-14">
          <div className="w-12 h-[3px] bg-pink-600 rounded-full flex-shrink-0" />
          <h2
            className="font-extrabold tracking-tight text-slate-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {allDataWords.titleFour}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-0 w-px"
            style={{
              background:
                'linear-gradient(to bottom, #db2777, rgba(219,39,119,0.1) 80%, transparent)',
            }}
          />

          <div className="flex flex-col gap-10">
            {datasListExp.map((datas, index) => (
              <div
                key={datas.id}
                className="relative group"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={String(index * 100)}
              >
                {/* Dot */}
                <div
                  className={[
                    'absolute -left-[36px] top-[10px]',
                    'w-2.5 h-2.5 rounded-full bg-pink-600',
                    'shadow-[0_0_0_4px_rgba(219,39,119,0.15)]',
                    'transition-shadow duration-300',
                    'group-hover:shadow-[0_0_0_8px_rgba(219,39,119,0.12),0_0_16px_rgba(219,39,119,0.4)]',
                  ].join(' ')}
                />

                {/* Card */}
                <div
                  className={[
                    'px-7 py-6 rounded-2xl cursor-default',
                    'bg-white/[0.02] border border-white/[0.06]',
                    'transition-all duration-300',
                    'group-hover:bg-white/[0.04] group-hover:border-pink-600/20',
                    'group-hover:translate-x-1.5 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]',
                  ].join(' ')}
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <span className="text-[13px] text-slate-500 tracking-[0.04em]">
                      {datas.date}
                    </span>
                    <span
                      className={[
                        'px-3 py-1 rounded-full',
                        'text-[11px] font-bold uppercase tracking-[0.06em] text-pink-600',
                        'bg-pink-600/10 border border-pink-600/30',
                      ].join(' ')}
                    >
                      {datas.subjects}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold tracking-tight text-slate-200 mb-2.5"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {datas.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-500">
                    {datas.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </section>
  );
};

export default Exprience;
