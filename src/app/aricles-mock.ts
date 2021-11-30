interface Author {
  username: string;
  bio: string;
  image: string;
}

export interface Comment {
  author: Author;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  tagList: string[];
  author: Author;
  favoritesCount: number;
  favorited: boolean;
}

export const MockArticles: Article[] = [
  {
    slug: 'Test-Post-1',
    title: 'Test Post 1',
    description: 'Description 1',
    body: 'Body 1',
    createdAt: new Date(),
    updatedAt: new Date(),
    tagList: [],
    author: {
      username: 'User',
      bio: '',
      image: 'http://i.imgur.com/Qr71crq.jpg',
    },
    favoritesCount: 0,
    favorited: false,
  },
  {
    slug: 'Test-Post-2',
    title: 'Test Post 2',
    description: 'Description 2',
    body: 'Body 2',
    createdAt: new Date(),
    updatedAt: new Date(),
    tagList: [],
    author: {
      username: 'User',
      bio: '',
      image: 'http://i.imgur.com/Qr71crq.jpg',
    },
    favoritesCount: 0,
    favorited: false,
  },
];
