import { PROJECTS } from '../content/projects'
import { BLOG_POSTS } from '../content/blog'
import type { Project, BlogPost } from '../content/types'

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function fetchProjects(): Promise<readonly Project[]> {
  await delay(300)
  return PROJECTS
}

export async function fetchBlogPosts(): Promise<readonly BlogPost[]> {
  await delay(300)
  return BLOG_POSTS
}
