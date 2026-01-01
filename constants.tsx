
import { Project, Skill } from './types';

export const LANGUAGES: Skill[] = [
  { name: 'JavaScript', level: 98, color: '#F7DF1E' },
  { name: 'Python', level: 95, color: '#3776AB' },
  { name: 'Rust', level: 92, color: '#DEA584' },
  { name: 'SQL', level: 90, color: '#4479A1' },
  { name: 'Java', level: 85, color: '#007396' },
  { name: 'C++', level: 82, color: '#00599C' },
  { name: 'Ruby', level: 78, color: '#CC342D' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus E-Commerce',
    description: 'A lightning-fast storefront with server-side rendering and atomic design principles.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'FinStream Dashboard',
    description: 'Real-time financial analytics platform with complex data visualization and multi-currency support.',
    tags: ['React', 'Python', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'RustDocs CMS',
    description: 'A documentation-first headless CMS focused on performance and developer experience.',
    tags: ['Rust', 'Wasm', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Aether Social',
    description: 'A privacy-focused microblogging platform with end-to-end encryption.',
    tags: ['JavaScript', 'Node.js', 'Redis'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
  }
];

export const APEX_BIO = `
Apex is a world-class senior developer with 7 years of professional experience. 
Specializing in systems programming (Rust, C++), backend architecture (Python, Java, Ruby), 
and frontend mastery (JavaScript/TypeScript). 
With a passion for performance and scalability, Apex has built enterprise-grade solutions across various industries.
Contact: Discord (apex.xyz).
`;
