'use client';

import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { allDataWords } from '@/lib/const';

const Home: React.FC = () => {
  return (
    <div
      id="home"
      className="relative w-full min-h-svh bg-[#0a192f] overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blobs */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-pink-600 opacity-10 blur-[80px] animate-[blobFloat_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-violet-700 opacity-10 blur-[80px] animate-[blobFloat_8s_ease-in-out_3s_infinite]" />
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-sky-500 opacity-10 blur-[80px] animate-[blobFloat_8s_ease-in-out_6s_infinite]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 min-h-svh flex flex-col justify-center pt-[72px]">
        {/* Eyebrow */}
        <p
          className="flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-pink-600 mb-5
          animate-[fadeSlideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_both]
          before:content-[''] before:block before:w-8 before:h-px before:bg-pink-600"
        >
          Hi, my name is
        </p>

        {/* Full Name */}
        <h1
          className="font-extrabold leading-tight tracking-tight text-slate-200 mb-3
    w-full break-words
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
    animate-[fadeSlideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {allDataWords.fullName}
        </h1>
        {/* Title Job */}
        <h2
          className="font-bold leading-snug tracking-tight text-slate-500 mb-7 w-full break-words
    text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
    animate-[fadeSlideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          I&apos;m a{' '}
          <span
            className="animate-[shimmer_3s_linear_infinite]"
            style={{
              background:
                'linear-gradient(90deg, #db2777 0%, #f472b6 50%, #db2777 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {allDataWords.titleJob}
          </span>
        </h2>
        {/* Description */}
        <p
          className="text-base leading-relaxed text-slate-500 max-w-lg mb-12
            animate-[fadeSlideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.3s_both]"
        >
          {allDataWords.descHome}
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 flex-wrap animate-[fadeSlideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_both]">
          <Link
            to="work"
            smooth
            duration={600}
            className="inline-flex items-center gap-2.5 px-7 py-3.5
              bg-pink-600 text-white text-sm font-semibold tracking-wide
              rounded-xl cursor-pointer transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(219,39,119,0.4)]
              [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:translate-x-1"
          >
            View Work
            <HiArrowNarrowRight size={18} />
          </Link>

          <Link
            to="contact"
            smooth
            duration={600}
            className="inline-flex items-center gap-2 px-7 py-3.5
              bg-transparent text-slate-400 text-sm font-medium
              border border-white/10 rounded-xl cursor-pointer
              transition-all duration-200
              hover:text-slate-100 hover:border-white/20 hover:bg-white/5"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
        animate-[fadeSlideUp_1s_cubic-bezier(0.16,1,0.3,1)_1s_both]"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-pink-600 animate-[scrollPulse_2s_ease-in-out_0.3s_infinite]" />
        <div className="w-px h-12 bg-gradient-to-b from-pink-600/70 to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
        <span className="text-[10px] tracking-[0.15em] uppercase text-slate-600 mt-1">
          Scroll
        </span>
      </div>

      {/* Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.95); }
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Home;
