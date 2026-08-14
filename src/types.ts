export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
  badge?: string;
}

export interface ComparisonRow {
  criterion: string;
  traditional: string;
  mobilyaPlan: string;
  advantage: string;
}

export interface CncBrand {
  name: string;
  logoText: string;
  country: string;
  description: string;
}

export interface PresetCommand {
  label: string;
  prompt: string;
  dimensions: { width: number; height: number; depth: number };
  type: string;
  material: string;
  panelsCount: number;
  estimatedGcodeLines: number;
}

export interface CabinetPanel {
  name: string;
  width: number;
  height: number;
  thickness: number;
  quantity: number;
  edgeBanding: string;
}
