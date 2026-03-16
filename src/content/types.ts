export type ProjectType = 'Residential' | 'Commercial' | 'Cultural' | 'Urban'

export type Project = {
  id: number
  title: string
  type: ProjectType
  year?: string
  location?: string
  image: string
}

export type BlogPost = {
  id: number
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  image: string
}

export type FeaturedPost = Omit<BlogPost, 'id'> & {
  title: string
}

