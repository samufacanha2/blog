declare module "blog" {
  interface Window {
    tronWeb: any;
  }
  type BlogPost = {
    id: number;
    title: string;
    body: string;
    author: string;
    signed: bool;
    address: string;
  };
  type Storage = {
    loading: boolean;
    post: BlogPost;
    wallet: Wallet;
  };
  type Wallet = {
    address: string;
    isLoggedIn: boolean;
    isInstalled: boolean;
  };
}
