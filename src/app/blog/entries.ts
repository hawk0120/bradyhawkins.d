export interface Post {
  title: string;
  slug?: string;
  date: Date;
}

export const entries: Post[] = [
  {
    title: 'Repatriation and the Rosetta Stone',
    date: new Date('2022-12-22'),
  },
  {
    title: 'dotfiles problems',
    date: new Date('2024-03-01'),
  },
  {
    title: 'Welcome to my Website',
    date: new Date('2024-03-31'),
  },
];
