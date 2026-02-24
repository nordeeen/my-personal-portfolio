import Image from 'next/image';
import { allDataWords, datasListAwards } from '@/lib/const';

const Award: React.FC = () => {
  return (
    <section className="w-full bg-[#071525] text-gray-300 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-[3px] bg-pink-600 rounded-full flex-shrink-0" />
          <h2
            className="font-extrabold tracking-tight text-slate-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {allDataWords.titlesSecond}
          </h2>
        </div>

        {/* Certificate Link */}
        <a
          href={allDataWords.urlCertificate}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            'inline-flex items-center gap-2 mb-10',
            'text-pink-600 text-[13px] font-semibold tracking-[0.05em] uppercase',
            'px-4 py-2 rounded-full',
            'border border-pink-600/25 bg-pink-600/[0.06]',
            'transition-all duration-200',
            'hover:bg-pink-600/[0.12] hover:border-pink-600/50 hover:-translate-y-px',
          ].join(' ')}
        >
          <Image
            src="/assets/link.png"
            alt="link"
            width={14}
            height={14}
            style={{ width: '14px', height: '14px' }}
          />
          View All Certificates
        </a>

        {/* Award List */}
        <div className="flex flex-col gap-4">
          {datasListAwards.map((data, index) => (
            <div
              key={data.id}
              className={[
                'flex flex-col sm:flex-row group',
                'bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden',
                'cursor-default transition-all duration-300',
                'hover:border-pink-600/20 hover:-translate-y-1',
                'hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]',
              ].join(' ')}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={String(index * 100)}
            >
              {/* Image */}
              <div className="sm:w-[180px] flex-shrink-0 overflow-hidden bg-[#0f2847]">
                <img
                  src={data.photo}
                  alt={data.title}
                  className={[
                    'w-full h-[140px] sm:h-full object-cover',
                    'saturate-[0.8] transition-all duration-300',
                    'group-hover:saturate-100 group-hover:scale-[1.04]',
                  ].join(' ')}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center gap-1.5 px-6 py-5">
                <h3
                  className="text-lg font-bold text-pink-600 leading-snug"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {data.title}
                </h3>
                <p className="text-sm font-medium text-slate-400">
                  {data.description}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={[
                      'px-2.5 py-0.5 rounded-full',
                      'text-[11px] font-semibold uppercase tracking-[0.06em] text-pink-600',
                      'bg-pink-600/[0.08] border border-pink-600/20',
                    ].join(' ')}
                  >
                    {data.skill}
                  </span>
                  <span className="text-xs text-slate-500">{data.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </section>
  );
};

export default Award;
