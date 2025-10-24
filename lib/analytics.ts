// Google Analytics Integration
// To enable Google Analytics:
// 1. Get your GA4 Measurement ID from Google Analytics (format: G-XXXXXXXXXX)
// 2. Add it to your environment variables in .env.local:
//    NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
// 3. Uncomment the code in app/layout.tsx to add the GA script tags

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Send pageview event to Google Analytics
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Send custom event to Google Analytics
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Initialize Google Analytics with user consent
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  }
};

// Revoke Google Analytics consent
export const revokeGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  }
};
