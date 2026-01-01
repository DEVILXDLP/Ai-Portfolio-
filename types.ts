
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  color: string;
  icon?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
