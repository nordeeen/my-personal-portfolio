import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllSlugs, getPostBySlug, getAdjacentPosts } from '@/utils';
import { PostContent } from './postContent';
import { CategoryBadge } from './categoryBadge';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { use } from 'react';

interface Props {
  slug: string;
}

// Generate static routes untuk semua artikel
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata per artikel
export async function generateMetadata({ slug }: Props): Promise<Metadata> {
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Artikel tidak ditemukan' };

  return {
    title: `${post.title} — Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ slug }: Props) {
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);

  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Top nav */}
      <div className="sticky top-0 z-10 border-b border-white/[0.06] bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft size={15} />
            Semua Artikel
          </Link>
          <CategoryBadge category={post.category} color={post.categoryColor} />
        </div>
      </div>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-6 py-14">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-zinc-600 mb-6">
          <span>{formattedDate}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-6">
          {post.title}
        </h1>

        {/* Lead / Excerpt */}
        <p className="text-lg text-zinc-400 leading-relaxed border-l-2 border-violet-500/50 pl-4 mb-12">
          {post.excerpt}
        </p>

        {/* Content */}
        <PostContent sections={post.sections} />
      </article>

      {/* Navigation antar artikel */}
      {(prev || next) && (
        <div className="max-w-2xl mx-auto px-6 pb-20">
          <div className="h-px bg-white/[0.06] mb-8" />
          <div className="grid grid-cols-2 gap-3">
            {/* Artikel sebelumnya (lebih lama) */}
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex flex-col gap-1 p-4 rounded-xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all"
              >
                <span className="text-xs text-zinc-600 flex items-center gap-1">
                  <ArrowLeft size={12} />
                  Sebelumnya
                </span>
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {/* Artikel berikutnya (lebih baru) */}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex flex-col gap-1 p-4 rounded-xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all text-right"
              >
                <span className="text-xs text-zinc-600 flex items-center justify-end gap-1">
                  Berikutnya
                  <ArrowRight size={12} />
                </span>
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}
    </main>
  );
}
