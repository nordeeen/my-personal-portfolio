import Image from 'next/image';
import { allDataWords } from '@/lib/const';

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="w-full bg-[#0a192f] text-gray-300 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[3px] bg-pink-600 rounded-full" />
          <h2
            className="font-extrabold tracking-tight text-slate-200
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {allDataWords.titlesOne}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Left: Photos */}
          <div
            className="flex flex-col gap-5"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* Profile Photo */}
            <div className="relative">
              {/* Gradient border */}
              <div
                className="absolute -inset-[2px] rounded-[20px] z-0"
                style={{
                  background:
                    'linear-gradient(135deg, #db2777, transparent 50%, rgba(219,39,119,0.2))',
                }}
              />
              <div className="relative z-10 rounded-[18px] overflow-hidden bg-[#0f2847] group">
                <Image
                  src="/assets/foto-profile-portofolio.jpg"
                  alt="Profile Photo"
                  width={400}
                  height={520}
                  className="w-full h-auto object-cover saturate-[0.85]
                    transition-all duration-500
                    group-hover:scale-[1.04] group-hover:saturate-100"
                />
              </div>
            </div>

            {/* Banner */}
            <div className="rounded-[14px] overflow-hidden border border-white/[0.06] group">
              <Image
                src="/assets/coders-life.jpg"
                alt="Coders Life"
                width={500}
                height={250}
                className="w-full h-auto object-cover opacity-75
                  transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col gap-6">
            {/* Description */}
            <p
              className="text-base leading-[1.85] text-slate-500"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {allDataWords.aboutMe}
            </p>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 mt-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              {[
                { number: '2+', label: 'Years Exp.' },
                { number: '10+', label: 'Projects' },
                { number: '5+', label: 'Tech Stack' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4
                    cursor-default transition-all duration-200
                    hover:border-pink-600/30 hover:bg-pink-600/[0.05] hover:-translate-y-0.5"
                >
                  <div
                    className="text-2xl sm:text-3xl font-extrabold text-pink-600 leading-none mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-[11px] font-medium uppercase tracking-widest text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div
              className="flex flex-wrap gap-2 mt-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Tailwind CSS',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-pink-600/[0.08] border border-pink-600/20
                    rounded-full text-xs font-medium tracking-wide text-pink-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </div>
  );
};

export default About;
