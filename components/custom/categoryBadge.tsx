import { CategoryColor } from '@/model';

const colorMap: Record<CategoryColor, string> = {
  blue: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  'blue-ts': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

interface CategoryBadgeProps {
  category: string;
  color: CategoryColor;
  className?: string;
}

export function CategoryBadge({
  category,
  color,
  className = '',
}: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorMap[color]} ${className}`}
    >
      {category}
    </span>
  );
}
