'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { Link } from 'react-scroll';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Project', to: 'work' },
  { label: 'Contact', to: 'contact' },
];

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => setNav(false);
  const toggleNav = () => setNav((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100]
          bg-[rgba(10,25,47,0.85)] backdrop-blur-md
          border-b border-white/5
          transition-all duration-300
          ${scrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-white/10' : ''}
        `}
      >
        {/* Inner container hanya untuk max-width & layout */}
        <div className="w-full max-w-6xl mx-auto h-[72px] flex items-center justify-between px-6">
          {/* Logo */}
          <div className="relative flex items-center">
            <div className="absolute w-14 h-14 bg-pink-600/20 rounded-full blur-xl pointer-events-none" />
            <Image
              src="/assets/mylogo.png"
              alt="Logo"
              width={52}
              height={52}
              style={{ width: '52px', height: 'auto', position: 'relative' }}
            />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-72}
                  className="relative inline-block px-4 py-2 text-sm font-medium text-slate-400
                    rounded-lg cursor-pointer transition-all duration-200
                    hover:text-slate-100 hover:bg-white/5
                    after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px]
                    after:bg-pink-600 after:rounded-full after:scale-x-0
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={toggleNav}
            className="md:hidden flex items-center justify-center w-10 h-10
              bg-white/5 border border-white/10 rounded-xl text-slate-400
              transition-all duration-200 hover:bg-pink-700/20
              hover:border-pink-600/40 hover:text-pink-500"
            aria-label="Toggle menu"
          >
            {nav ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[99] flex flex-col items-center justify-center gap-2
          bg-[rgba(10,25,47,0.98)] backdrop-blur-xl
          transition-all duration-300
          ${nav ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}
        `}
      >
        {navLinks.map((link, i) => (
          <div key={link.to} className="flex flex-col items-center">
            {i > 0 && (
              <div className="w-px h-8 my-1 bg-gradient-to-b from-transparent via-pink-600/40 to-transparent" />
            )}
            <Link
              to={link.to}
              smooth
              duration={600}
              offset={-72}
              onClick={closeNav}
              className="text-2xl font-bold text-slate-500 cursor-pointer
                px-8 py-2 transition-colors duration-200 hover:text-slate-100
                tracking-wide"
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
