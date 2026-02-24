'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { allDataWords } from '@/lib/const';
import ScrollTop from './ScrollTop';

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="w-full bg-[#071525] text-gray-300 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 py-24 pb-16">
        {/* CTA Banner */}
        <div
          className={[
            'relative text-center rounded-3xl px-8 py-16 mb-16 overflow-hidden',
            'border border-pink-600/15',
          ].join(' ')}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(219,39,119,0.08) 0%, transparent 70%)',
            }}
          />

          <p className="relative z-10 text-[13px] font-semibold uppercase tracking-[0.12em] text-pink-600 mb-4">
            {allDataWords.titleSix}
          </p>

          <h2
            className={[
              'relative z-10 font-extrabold tracking-tight text-slate-200 leading-[1.05] mb-6',
              'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
            ].join(' ')}
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Let&apos;s Work
            <br />
            Together
          </h2>

          <p className="relative z-10 text-[15px] text-slate-500 max-w-[440px] mx-auto leading-relaxed mb-8">
            Have a project in mind? I&apos;d love to hear about it. Reach out
            and let&apos;s create something amazing.
          </p>

          <a
            href={`mailto:${allDataWords.myEmail || 'hello@example.com'}`}
            className={[
              'relative z-10 inline-flex items-center gap-2.5',
              'px-7 py-3.5 rounded-xl',
              'bg-pink-600 text-white text-sm font-semibold tracking-[0.04em]',
              'transition-all duration-300',
              'shadow-[0_4px_20px_rgba(219,39,119,0.3)]',
              'hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(219,39,119,0.45)]',
            ].join(' ')}
          >
            Say Hello →
          </a>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
          {/* Address */}
          <div className="text-sm text-slate-500 leading-relaxed">
            <p>{allDataWords.myAddress.slice(20, 43)}</p>
            <p>{allDataWords.myAddress.slice(43, 63)}</p>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-700 mb-3">
              Find me on
            </p>
            <ul className="flex gap-2.5 list-none p-0 m-0">
              {[
                {
                  href: allDataWords.urlResume,
                  icon: <BsFillPersonLinesFill size={18} />,
                  label: 'CV',
                  delay: '0',
                  hoverClass:
                    'hover:border-pink-600/35 hover:bg-pink-600/[0.08] hover:text-slate-100',
                },
                {
                  href: allDataWords.urlLinkedin,
                  icon: <FaLinkedin size={18} />,
                  label: 'Linkedin',
                  delay: '80',
                  hoverClass:
                    'hover:border-blue-500/40 hover:bg-blue-500/[0.08] hover:text-blue-300',
                  target: '_blank',
                },
                {
                  href: allDataWords.urlGithub,
                  icon: <FaGithub size={18} />,
                  label: 'Github',
                  delay: '160',
                  hoverClass:
                    'hover:border-white/15 hover:bg-white/[0.05] hover:text-slate-100',
                  target: '_blank',
                },
              ].map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.target}
                    rel={social.target ? 'noopener noreferrer' : undefined}
                    title={social.label}
                    data-aos="fade-up"
                    data-aos-delay={social.delay}
                    className={[
                      'w-12 h-12 rounded-xl flex flex-col items-center justify-center gap-0.5',
                      'text-slate-500 text-[11px] font-medium',
                      'bg-white/[0.02] border border-white/[0.07]',
                      'transition-all duration-200 cursor-pointer',
                      'hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]',
                      social.hoverClass,
                    ].join(' ')}
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.05] my-12" />

        {/* Footer */}
        <p className="text-center text-xs text-slate-800">
          Built with <span className="text-pink-600">♥</span> by{' '}
          {allDataWords.fullName} — {new Date().getFullYear()}
        </p>
      </div>
      <ScrollTop />
      // <ScrollTop />
      {/* Scroll Top */}
      // <div className="flex justify-center">// </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </div>
  );
};

export default Contact;
