import Link from 'next/link';
import { getAllPosts } from '@/utils';
import { allDataWords } from '@/lib/const';

const Blogs: React.FC = () => {
  const posts = getAllPosts();

  return (
    <section className="w-full bg-[#0a192f] text-gray-300 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[3px] bg-pink-600 rounded-full flex-shrink-0" />
          <h2
            className="font-extrabold tracking-tight text-slate-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {allDataWords.titleSeven}
          </h2>
        </div>

        {/* Blog List */}
        <div className="flex flex-col gap-3">
          {posts.map((post, index) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className={[
                'relative flex flex-col sm:flex-row group',
                'bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden',
                'text-inherit no-underline',
                'transition-all duration-300',
                'hover:border-pink-600/20 hover:-translate-y-1',
                'hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]',
              ].join(' ')}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={String(index * 80)}
            >
              {/* Gradient overlay on hover */}
              <div
                className={[
                  'absolute inset-0 opacity-0 pointer-events-none',
                  'bg-gradient-to-br from-pink-600/[0.04] to-transparent',
                  'transition-opacity duration-300 group-hover:opacity-100',
                ].join(' ')}
              />

              {/* Number */}
              <div
                className={[
                  'flex items-center justify-center px-5 py-4 min-w-[80px]',
                  'sm:border-r sm:border-white/[0.05]',
                ].join(' ')}
              >
                <span
                  className="text-4xl font-extrabold leading-none text-white/[0.07] transition-colors duration-300 group-hover:text-pink-600/25"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="relative flex-1 flex flex-col gap-1.5 px-6 py-5">
                <span
                  className={[
                    'w-fit px-2.5 py-0.5 mb-0.5 rounded-full',
                    'text-[11px] font-bold uppercase tracking-[0.08em] text-pink-600',
                    'bg-pink-600/[0.08] border border-pink-600/20',
                  ].join(' ')}
                >
                  {post.category}
                </span>

                <h3
                  className="text-[17px] font-bold leading-snug tracking-tight text-slate-300 transition-colors duration-200 group-hover:text-slate-100"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {post.title}
                </h3>

                <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-700">
                  <span>
                    {new Date(post.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="text-pink-600 text-sm">›</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="relative flex items-center pr-6 text-slate-800 text-xl transition-all duration-300 group-hover:text-pink-600 group-hover:translate-x-1">
                ›
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </section>
  );
};

export default Blogs;
