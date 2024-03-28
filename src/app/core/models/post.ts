export interface Post {
  social_image: string;
  tag_list: string[];
  title: string;
  description: string;
  published_at: string;
  url: string;
  user: {
    name: string;
    profile_image: string;
  };
}
