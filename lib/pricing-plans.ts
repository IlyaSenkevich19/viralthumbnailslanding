/**
 * Public pricing copy — must stay aligned with app `apps/frontend/src/config/pricing-plans.ts`
 * and backend credit packs ($29/100, $49/300, $99/700).
 */

import { filterEnabledPricingPlans } from '@/lib/enabled-pricing-plans';

export type LandingPricingPlan = {
  id: string;
  name: string;
  price: string;
  credits: number;
  description: string;
  features: string[];
  ctaText: string;
  ctaVariant: 'outline' | 'primary' | 'secondary';
  popular: boolean;
  badge?: string;
};

const SHARED_STUDIO_FEATURES = [
  'YouTube link, video upload, or text prompt',
  'Preset templates and saved face references',
  'Multiple variants per project',
  'Export and saved projects',
] as const;

export const landingPricingPlans: LandingPricingPlan[] = [
  {
    id: 'trial',
    name: 'Free starter',
    price: '$0',
    credits: 3,
    description: 'Try the full studio with 3 starter credits — enough for a quick prompt run or a shorter batch.',
    features: [
      '3 starter credits on signup',
      ...SHARED_STUDIO_FEATURES,
      'No recurring charge',
    ],
    ctaText: 'Start free',
    ctaVariant: 'outline',
    popular: false,
  },
  {
    id: 'pack_100',
    name: 'Pack 100',
    price: '$29',
    credits: 100,
    description: 'Light top-up after you finish the starter balance.',
    features: [
      '100 one-time credits',
      ...SHARED_STUDIO_FEATURES,
      'No subscription',
    ],
    ctaText: 'Add credits in app',
    ctaVariant: 'primary',
    popular: false,
  },
  {
    id: 'pack_300',
    name: 'Pack 300',
    price: '$49',
    credits: 300,
    description: 'Best value for creators who generate every week.',
    features: [
      '300 one-time credits',
      'Lower cost per credit than Pack 100',
      ...SHARED_STUDIO_FEATURES,
      'No subscription',
    ],
    ctaText: 'Add credits in app',
    ctaVariant: 'secondary',
    popular: true,
    badge: 'Best value',
  },
  {
    id: 'pack_700',
    name: 'Pack 700',
    price: '$99',
    credits: 700,
    description: 'Bulk balance for heavy upload weeks or back-to-back projects.',
    features: [
      '700 one-time credits',
      'Lowest cost per credit in the lineup',
      ...SHARED_STUDIO_FEATURES,
      'No subscription',
    ],
    ctaText: 'Add credits in app',
    ctaVariant: 'primary',
    popular: false,
  },
];

/** Plans shown on landing pricing + JSON-LD (filtered by NEXT_PUBLIC_ENABLED_PRICING_PLAN_IDS). */
export const visibleLandingPricingPlans = filterEnabledPricingPlans(landingPricingPlans);

/** Matches app credit-pricing-notes.ts — keep in sync when billing rules change. */
export const CREDIT_USAGE_FOOTNOTE =
  'A typical full studio run (video analysis plus 3 thumbnail variants) uses 4 credits. Refining one thumbnail uses 1 credit.';

export const PRICING_FOOTNOTES = [
  '3 starter credits on signup — try the studio before you buy a pack (no card required).',
  'Credit packs are one-time top-ups — not a monthly subscription.',
  'Credits stay on your balance until you use them.',
  CREDIT_USAGE_FOOTNOTE,
] as const;
