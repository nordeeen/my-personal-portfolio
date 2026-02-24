import BlogPostPage from '@/components/custom/blogPostPage';
import { getAllSlugs, getPostBySlug } from '@/utils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Artikel tidak ditemukan' };
  return { title: `${post.title} — Blog`, description: post.excerpt };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogPostPage slug={slug} />;
}
