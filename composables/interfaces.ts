export interface Post {
  id?: string;
  title: string;
  desc: string;
  image: string;
  date: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    site: string;
  };
}
