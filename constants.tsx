
import React from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  MessageSquare, 
  PieChart, 
  Smartphone, 
  Sparkles, 
  Terminal, 
  Zap,
  Github,
  Linkedin,
  Mail,
  ExternalLink
} from 'lucide-react';
import { Project, SkillCategory, Experience, StudioMetric } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Studio', href: '#ai-studio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nova SaaS Platform',
    description: 'A high-performance enterprise analytics dashboard with real-time data streaming and AI-driven insights.',
    image: 'https://picsum.photos/seed/nova/800/500',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'GenAI Studio',
    description: 'An AI-powered content generation suite using LLMs for multi-modal asset creation and workflow automation.',
    image: 'https://picsum.photos/seed/genai/800/500',
    tags: ['Gemini API', 'Next.js', 'Tailwind', 'Python'],
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Flux Mobile Ecosystem',
    description: 'A cross-platform mobile application focused on high-efficiency team collaboration and resource management.',
    image: 'https://picsum.photos/seed/flux/800/500',
    tags: ['React Native', 'Firebase', 'Redux', 'GraphQL'],
    link: '#',
    github: '#'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'JavaScript', level: 98 },
      { name: 'Python', level: 85 },
      { name: 'Go', level: 75 }
    ]
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React / Next.js', level: 98 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'GraphQL', level: 82 }
    ]
  },
  {
    title: 'AI & Data',
    skills: [
      { name: 'LLM Integration', level: 92 },
      { name: 'TensorFlow', level: 70 },
      { name: 'Data Visualization', level: 88 },
      { name: 'Prompt Eng.', level: 95 }
    ]
  },
  {
    title: 'Tools & DBs',
    skills: [
      { name: 'Docker / K8s', level: 80 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Redis', level: 85 },
      { name: 'AWS / GCP', level: 82 }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Senior Frontend Architect',
    company: 'Innovate AI Labs',
    period: '2022 - Present',
    description: 'Leading the development of high-performance React applications, optimizing for scale and user experience in the AI-SaaS domain.'
  },
  {
    role: 'Full Stack Engineer',
    company: 'Starlight Solutions',
    period: '2020 - 2022',
    description: 'Developed and maintained complex web ecosystems, implemented microservices architecture, and drove adoption of TypeScript.'
  },
  {
    role: 'Software Developer',
    company: 'BlueWave Digital',
    period: '2018 - 2020',
    description: 'Collaborated on various client-facing projects, specializing in responsive web design and performance optimization.'
  }
];

export const STUDIO_METRICS: StudioMetric[] = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 600 },
  { name: 'Wed', value: 500 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 700 },
  { name: 'Sat', value: 900 },
  { name: 'Sun', value: 1100 }
];

export const SOCIALS = [
  { name: 'Github', icon: <Github className="w-5 h-5" />, href: '#' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
  { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:uv@example.com' },
];
