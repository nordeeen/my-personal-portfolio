export type CategoryColor = 'blue' | 'blue-ts' | 'pink' | 'green' | 'yellow';

export interface ComparisonItem {
  label: string;
  variant: 'old' | 'new';
  points: string[];
}

export type Section =
  | { type: 'h2'; content: string }
  | { type: 'h3'; content: string }
  | { type: 'p'; content: string }
  | { type: 'callout'; content: string }
  | { type: 'code'; label: string; language: string; content: string }
  | { type: 'comparison'; items: ComparisonItem[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: CategoryColor;
  readTime: string;
  date: string;
  sections: Section[];
}
