'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <Image
          src="/assets/scroll-top.png"
          className=""
          alt="scrollTop-logo"
          width={60}
          height={60}
          style={{ width: '60px', height: 'auto' }}
        />
      </button>
    </div>
  );
};

export default ScrollTop;
