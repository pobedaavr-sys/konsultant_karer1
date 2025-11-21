import type { LucideIcon } from 'lucide-react';

export interface RequestItem {
  id: number;
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  cta: string;
}

export interface CaseItem {
  id: number;
  initial: string;
  name: string;
  before: string;
  after: string;
  tag: string;
}

export interface BenefitItem {
  id: number;
  title: string;
  number: string;
  imageUrl: string;
  description: string;
}

export interface StepItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
}

export interface ServiceItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface TrustItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}