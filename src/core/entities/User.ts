export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  postsCount?: number;
}

export interface Post {
  id?: number;
  title: string;
  content: string | null;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}
