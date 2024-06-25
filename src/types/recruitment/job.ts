import type { BrandText } from '../component/brand-text';

export type JobItem = {
  title: string;
  team: string;
  tag?: 'Hot' | 'New';
  description: string;
};

export type JobDescription = {
  id?: string;
  icon: string;
  title: BrandText;
  descriptionItems: string[];
};
