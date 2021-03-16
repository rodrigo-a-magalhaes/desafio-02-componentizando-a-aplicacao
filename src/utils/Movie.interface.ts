export interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
  Writer?: string;
  Plot?: string;
  Director?: string;
  Awards?: string;
  Genre?: string;
  Released?: string;
  BoxOffice?: string;
  Language?: string;
}

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}