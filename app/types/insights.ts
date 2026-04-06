export type Insight = {
    id: string;
    slug: string;
    title: string;
    category: string;
    description: string;
    publishDate: string;
    coverImage: string;
    priority?: number;
};

export type NetworkPartner = {
  name: string;
  url: string;
};