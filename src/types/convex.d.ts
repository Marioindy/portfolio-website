import { Id } from '../../convex/_generated/dataModel';

export interface Project {
  _id: Id<'projects'>;
  _creationTime: number;
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
  createdAt: number;
}
