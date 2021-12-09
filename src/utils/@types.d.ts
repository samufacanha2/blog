declare module "blog" {
  type BlogPost = {
    id: number;
    title: string;
    body: string;
    author: string;
  };
  type Storage = {
    loading: boolean;
    post: BlogPost;
  };
}
