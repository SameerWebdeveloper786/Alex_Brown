
export interface Insight {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  imageUrl: string;
  type: 'thread' | 'article';
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface MovementUpdate {
  region: string;
  activityCount: number;
  lastActive: string;
}
