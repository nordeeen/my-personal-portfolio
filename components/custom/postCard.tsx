import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '@/model';
import { CategoryBadge } from './categoryBadge';

interface PostCardProps {
  post: BlogPost;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex items-start gap-5 p-6 rounded-2xl border border-white/[0.06]
       bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-200"
    >
      {/* Number */}
      <span className="text-3xl font-bold text-white/10 tabular-nums leading-none mt-1 select-none w-8 shrink-0">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-3">
          <CategoryBadge category={post.category} color={post.categoryColor} />
        </div>

        <h2 className="text-lg font-semibold text-white leading-snug mb-2 group-hover:text-white transition-colors">
          {post.title}
        </h2>

        <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3 text-xs text-zinc-600">
          <span>{formattedDate}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        size={18}
        className="text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1 shrink-0"
      />
    </Link>
  );
}
