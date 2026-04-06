 export type LeaderProps = {
  slug: string;
  name: string;
  title: string;
  location?: string;
  image: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string | null;
    twitter?: string | null;
  };
};
