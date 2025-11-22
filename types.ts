export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  period?: string;
  features: string[];
  isFeatured?: boolean;
  type: 'individual' | 'private';
}

export interface NavItem {
  label: string;
  href: string;
}