import { LucideIcon } from 'lucide-react';

export interface ProductFeature {
  text: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  features: string[];
  gradient: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Company {
  name: string;
  style: string;
  url?: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}