export interface Post {
  id?: string;
  title: string;
  desc: string;
  image: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  cover: string;
  tags: string[];
  links: {
    github: string;
    demo: string;
  };
}

export interface ProjectFull {
  basic: Project;
  images: string[];
  purpose: string[];
  challenges: string[];
  stack: string[];
  lessons: string[];
}
