// Type definitions for warm photography page

export interface PhotoMetadata {
  photographer?: string;
  location?: string;
  date?: string;
}

export interface Photo {
  _id: string;
  _creationTime: number;
  title: string;
  subtitle?: string;
  imageUrl: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  colorTheme: 'warm' | 'cool' | 'neutral';
  category: string;
  order: number;
  featured: boolean;
  metadata?: PhotoMetadata;
}

export type AspectRatio = 'portrait' | 'landscape' | 'square';
export type ColorTheme = 'warm' | 'cool' | 'neutral';

// Utility type for photo card props
export interface PhotoCardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  aspectRatio: AspectRatio;
  colorTheme: ColorTheme;
  metadata?: PhotoMetadata;
  index: number;
}

// Utility type for masonry grid props
export interface MasonryGridProps {
  photos: Photo[];
}
