import { getAllPosts } from '@/utils';
import { PostCard } from './postCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Blog — Frontend Modern',
  description:
    'Catatan tentang React, TypeScript, CSS modern, dan web performance.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="max-w-2xl mx-auto px-6 pt-20 pb-12">
        <div className="flex justify-between items-start">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft size={15} />
            Kembali
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-zinc-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            {posts.length} artikel · Terus diperbarui
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
          Catatan{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
            Frontend
          </span>
        </h1>

        <p className="text-zinc-400 text-lg leading-relaxed">
          Tulisan tentang React, TypeScript, CSS modern, dan performance
          optimization untuk developer frontend.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Post list */}
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-3">
        {posts.map((post: any, i: any) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </main>
  );
}
