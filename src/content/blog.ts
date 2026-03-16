import type { BlogPost, FeaturedPost } from './types'

export const BLOG_FEATURED: FeaturedPost = {
  title:
    "The Return of Brutalism: Why Rough Concrete Is Architecture's Most Honest Material",
  category: 'Theory',
  date: 'March 2026',
  readTime: '12 min read',
  excerpt:
    'Dismissed for decades as cold and inhuman, brutalist architecture is being rediscovered by a generation that values material honesty above all else. Miroslava Kucher argues that concrete — raw, uncompromising concrete — might be the most ethical material of our time.',
  image:
    'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    id: 1,
    title: 'On Silence in Architecture: The Rooms We Need',
    category: 'Essay',
    date: 'Feb 2026',
    readTime: '8 min',
    excerpt:
      'In an era of open-plan everything, we argue for the return of the quiet room — spaces designed for contemplation, rest, and the recovery of attention.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 2,
    title: 'Designing for Climate: Beyond LEED Certification',
    category: 'Sustainability',
    date: 'Jan 2026',
    readTime: '10 min',
    excerpt:
      'Sustainability cannot be a checklist. Genuine climate-responsive architecture requires rethinking orientation, mass, materiality, and the very purpose of a building.',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 3,
    title: 'The Japanese Influence on Our Practice',
    category: 'Process',
    date: 'Dec 2025',
    readTime: '7 min',
    excerpt:
      'After establishing our Tokyo partnership, the studio underwent a quiet transformation. Here is how Japanese spatial thinking changed the way we approach every new commission.',
    image:
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 4,
    title: 'Materiality and Memory: Why Buildings Should Age',
    category: 'Theory',
    date: 'Nov 2025',
    readTime: '9 min',
    excerpt:
      'The patina of use, the weathering of surfaces, the darkening of stone — these are not failures of architecture. They are its biography.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 5,
    title: "What Clients Don't Know They're Asking For",
    category: 'Practice',
    date: 'Oct 2025',
    readTime: '6 min',
    excerpt:
      "A brief is a starting point, not a destination. The architect's task is to hear what is said, interpret what is meant, and imagine what is needed.",
    image:
      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 6,
    title: 'The New Urban Village: Lessons from Vienna',
    category: 'Urban',
    date: 'Sep 2025',
    readTime: '11 min',
    excerpt:
      "Vienna has long been considered the world's most liveable city. We explore the specific architectural and urban decisions behind that reputation.",
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=700&q=75',
  },
] as const

