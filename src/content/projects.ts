import type { Project, ProjectType } from './types'

export const PROJECT_FILTERS: readonly ['All', ...ProjectType[]] = [
  'All',
  'Residential',
  'Commercial',
  'Cultural',
  'Urban',
]

export const PROJECTS: readonly Project[] = [
  {
    id: 1,
    title: 'Meridian Residences',
    type: 'Residential',
    year: '2024',
    location: 'New York',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 2,
    title: 'Pavilion Cultural Centre',
    type: 'Cultural',
    year: '2023',
    location: 'Vienna',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 3,
    title: 'Helix Tower',
    type: 'Commercial',
    year: '2023',
    location: 'Tokyo',
    image:
      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 4,
    title: 'The Grove Estate',
    type: 'Residential',
    year: '2022',
    location: 'London',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 5,
    title: 'Civic Arts Museum',
    type: 'Cultural',
    year: '2022',
    location: 'Berlin',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 6,
    title: 'Harbor Plaza',
    type: 'Commercial',
    year: '2021',
    location: 'Sydney',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 7,
    title: 'Nordvik Quarter',
    type: 'Urban',
    year: '2021',
    location: 'Oslo',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 8,
    title: 'Villa Solaris',
    type: 'Residential',
    year: '2020',
    location: 'Barcelona',
    image:
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=700&q=75',
  },
  {
    id: 9,
    title: 'The Arch Bridge',
    type: 'Urban',
    year: '2020',
    location: 'Dubai',
    image:
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=700&q=75',
  },
] as const

export const FEATURED_PROJECTS: readonly Pick<
  Project,
  'id' | 'title' | 'type' | 'image'
>[] = [
  {
    id: 1,
    title: 'Meridian Residences',
    type: 'Residential',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Pavilion Cultural Centre',
    type: 'Cultural',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Helix Tower',
    type: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=900&q=80',
  },
] as const

