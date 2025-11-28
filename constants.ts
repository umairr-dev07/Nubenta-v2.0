import { Bot, PhoneCall, Zap, Calendar, TrendingUp, MessageSquare, Globe, Users, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Product, NavItem, Company } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Get in Touch', path: '/contact' },
  { label: 'About Us', path: '/about' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'beeba',
    name: 'Beeba',
    tagline: 'Social Media Dominator',
    description: 'Autonomous social media strategist and content creator. Beeba creates, schedules, and posts while you sleep.',
    price: 200,
    gradient: 'from-purple-600 to-indigo-600',
    icon: Bot,
    features: [
      'Business Niche Analysis',
      'Auto-Generates Content Strategy',
      'Creates & Schedules Posts',
      'Multi-Platform Management',
      'Video & Ad Generation',
      'AI Content Calendar',
    ],
  },
  {
    id: 'jennie',
    name: 'Jennie',
    tagline: 'The Human-Like Closer',
    description: 'A relentless lead generation specialist. Jennie makes cold calls with a natural human voice to book appointments.',
    price: 200,
    gradient: 'from-blue-500 to-cyan-500',
    icon: PhoneCall,
    features: [
      'Natural Human Voice API',
      'Cold Calling Automation',
      'Objection Handling',
      'Appointment Booking',
      'CRM Integration',
      'Real-time Analytics',
    ],
  },
];

export const TRUSTED_COMPANIES: Company[] = [
  { name: 'NSOL', style: 'text-blue-400', url: 'https://nsolbpo.com/' },
  { name: 'YCSolutions', style: 'text-purple-400', url: 'https://www.ycsols.com/' },
  { name: 'Galaxy Realtors', style: 'text-indigo-400', url: 'https://galaxyrealtors.pk/' },
  { name: 'Cloud Rexpo', style: 'text-cyan-400', url: 'https://cloudrexpo.com/' },
];

export const FEATURES_LIST = [
  {
    title: 'Autonomous Growth',
    description: 'Set your goals and let our bots handle the execution 24/7.',
    icon: TrendingUp,
  },
  {
    title: 'Natural Interaction',
    description: 'Advanced NLP ensures clients never know they are talking to AI.',
    icon: MessageSquare,
  },
  {
    title: 'Global Reach',
    description: 'Scale your operations across time zones and languages instantly.',
    icon: Globe,
  },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
];