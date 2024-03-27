export interface Post {
  cover_image: string;
  tag_list: string[];
  title: string;
  description: string;
  published_at: string;
  user: {
    name: string;
    profile_image: string;
  };
}
