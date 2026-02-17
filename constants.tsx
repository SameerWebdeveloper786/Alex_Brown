
import { Insight, Stat } from './types';

export const COLORS = {
  GREEN: '#008751',
  GOLD: '#D4AF37',
  CHARCOAL: '#121212',
  WHITE: '#FFFFFF',
};

export const IMPACT_STATS: Stat[] = [
  { label: 'Followers', value: '1,075+', icon: 'Users' },
  { label: 'Movement Updates', value: '100+', icon: 'Activity' },
  { label: 'Lagos Based', value: 'HQ', icon: 'MapPin' },
  { label: 'Active Since', value: '2022', icon: 'Calendar' },
];

export const LATEST_INSIGHTS: Insight[] = [
  {
    id: '1',
    title: 'The Blueprint for Economic Stability in Nigeria',
    category: 'Economics',
    date: 'Oct 12, 2023',
    summary: 'A detailed analysis of structural changes needed for a resilient Naira.',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
    type: 'thread',
  },
  {
    id: '2',
    title: 'Why Credible Leadership is Non-Negotiable',
    category: 'Politics',
    date: 'Oct 15, 2023',
    summary: 'The bedrock of a new administration must be transparency.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
    type: 'article',
  },
  {
    id: '3',
    title: 'Grassroots Engagement: Lagos Chapter',
    category: 'Community',
    date: 'Oct 18, 2023',
    summary: 'Insights from our latest town hall meeting with local activists.',
    imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1000',
    type: 'thread',
  },
];
