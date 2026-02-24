import Image from 'next/image';
import { datasListSkills, allDataWords } from '@/lib/const';

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="w-full bg-[#071525] text-gray-300 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-[3px] bg-pink-600 rounded-full flex-shrink-0" />
            <h2
              className="font-extrabold tracking-tight text-slate-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {allDataWords.titlesThird}
            </h2>
          </div>
          <p className="text-base text-slate-500 leading-relaxed max-w-[560px] mt-4">
            {allDataWords.descTitleThird}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {datasListSkills.map((item, index) => (
            <div
              key={item.id}
              className={[
                'relative flex flex-col items-center gap-3 group',
                'px-4 py-6 rounded-2xl overflow-hidden cursor-default',
                'bg-white/[0.02] border border-white/[0.06]',
                'transition-all duration-300',
                'hover:border-pink-600/25 hover:-translate-y-1.5',
                'hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(219,39,119,0.05)]',
              ].join(' ')}
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay={String(index * 50)}
            >
              {/* Gradient overlay */}
              <div
                className={[
                  'absolute inset-0 rounded-2xl opacity-0 pointer-events-none',
                  'bg-gradient-to-br from-pink-600/[0.08] to-transparent',
                  'transition-opacity duration-300 group-hover:opacity-100',
                ].join(' ')}
              />

              {/* Bottom line */}
              <div
                className={[
                  'absolute bottom-0 left-0 right-0 h-[2px]',
                  'bg-gradient-to-r from-transparent via-pink-600 to-transparent',
                  'scale-x-0 transition-transform duration-300',
                  'group-hover:scale-x-100',
                ].join(' ')}
              />

              {/* Icon */}
              <Image
                src={item.logo}
                alt={`${item.name} icon`}
                width={56}
                height={56}
                className="relative z-10 w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
              />

              {/* Name */}
              <p
                className={[
                  'relative z-10',
                  'text-[11px] font-semibold uppercase tracking-[0.08em]',
                  'text-slate-500 transition-colors duration-200 group-hover:text-slate-400',
                ].join(' ')}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </div>
  );
};

export default Skills;
