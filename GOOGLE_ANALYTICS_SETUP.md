# Google Analytics Setup Guide

This guide will help you set up Google Analytics 4 (GA4) on your Unique Tech Solution website with proper cookie consent integration.

## Prerequisites

- A Google account
- Access to your website (already done!)
- Cookie consent banner (already integrated!)

## Step 1: Create a Google Analytics 4 Property

1. **Go to Google Analytics:**
   - Visit https://analytics.google.com
   - Sign in with your Google account

2. **Create a new property:**
   - Click "Admin" (gear icon in the bottom left)
   - Click "Create Property"
   - Enter property details:
     - Property name: "Unique Tech Solution"
     - Time zone: "United Kingdom"
     - Currency: "British Pound (GBP)"
   - Click "Next"

3. **About your business:**
   - Industry: Select "Technology" or relevant category
   - Business size: Select appropriate size
   - Click "Next"

4. **Business objectives:**
   - Select relevant objectives (e.g., "Generate leads")
   - Click "Create"

5. **Accept Terms of Service**

## Step 2: Set Up Data Stream

1. **Choose platform:**
   - Select "Web"

2. **Set up web stream:**
   - Website URL: `https://uniquetechsolution.uk` (or your Vercel URL)
   - Stream name: "Unique Tech Solution Website"
   - Click "Create stream"

3. **Copy your Measurement ID:**
   - You'll see a Measurement ID like: `G-XXXXXXXXXX`
   - **IMPORTANT:** Copy this ID - you'll need it in the next step

## Step 3: Add Google Analytics to Your Website

### Option A: Add via Environment Variable (Recommended)

1. **Create environment file:**
   Create a file named `.env.local` in your project root:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID

2. **Update app/layout.tsx:**
   Add the following code to include Google Analytics scripts.

   Open `app/layout.tsx` and add this inside the `<head>` section (you'll need to use Next.js Script component):

   ```tsx
   import Script from "next/script";

   // In your RootLayout component, add after <body>:
   {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
     <>
       <Script
         strategy="afterInteractive"
         src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
       />
       <Script
         id="google-analytics"
         strategy="afterInteractive"
         dangerouslySetInnerHTML={{
           __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('consent', 'default', {
               'analytics_storage': 'denied'
             });
             gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
               page_path: window.location.pathname,
             });
           `,
         }}
       />
     </>
   )}
   ```

### Option B: Manual Setup (Without Environment Variable)

Open `app/layout.tsx` and replace the Measurement ID directly in the code above.

## Step 4: Update .gitignore

Make sure `.env.local` is in your `.gitignore` file (already done!):

```
.env*.local
.env
```

## Step 5: Deploy to Vercel

1. **Add environment variable in Vercel:**
   - Go to your project in Vercel Dashboard
   - Settings → Environment Variables
   - Add new variable:
     - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
     - Value: `G-XXXXXXXXXX` (your Measurement ID)
   - Save

2. **Redeploy:**
   - Go to Deployments
   - Click "Redeploy" or push a new commit to trigger deployment

## Step 6: Verify Installation

1. **Test locally:**
   ```bash
   npm run dev
   ```
   - Open http://localhost:3000
   - Open browser DevTools (F12)
   - Go to Console tab
   - Accept analytics cookies in the cookie banner
   - You should see: "Analytics enabled"

2. **Check Google Analytics:**
   - Go back to Google Analytics
   - Click on your property
   - Go to "Reports" → "Realtime"
   - Navigate around your website
   - You should see yourself as an active user

## Step 7: Cookie Consent Integration

✅ **Already configured!** Your website includes:

- Cookie consent banner that appears on first visit
- Users can accept all, reject all, or customize preferences
- Analytics only loads when user consents
- Preferences are saved in browser localStorage
- GDPR compliant implementation

## How It Works

1. **First Visit:**
   - Cookie banner appears
   - Google Analytics is in "denied" mode
   - No data is collected until consent

2. **User Accepts Analytics:**
   - Consent is granted
   - Analytics starts tracking
   - Preference saved for future visits

3. **User Rejects Analytics:**
   - Only necessary cookies are used
   - Analytics remains denied
   - Preference saved

## Common Analytics Events

Track custom events by using the analytics helper:

```typescript
import { event } from '@/lib/analytics';

// Example: Track contact form submission
event({
  action: 'submit_form',
  category: 'Contact',
  label: 'Contact Form',
});

// Example: Track business unit link click
event({
  action: 'click',
  category: 'Business Units',
  label: 'mySmartTeach',
});
```

## Privacy Compliance

✅ Your setup is GDPR/UK GDPR compliant:

- ✅ Cookie consent before tracking
- ✅ Clear cookie policy in Privacy page
- ✅ User can customize preferences
- ✅ Opt-out option available
- ✅ Data processed in accordance with privacy policy

## What Google Analytics Tracks (with consent)

- Page views
- User sessions
- Geographic location (country/city)
- Device type (desktop/mobile/tablet)
- Browser and OS
- Traffic sources (where visitors come from)
- User behavior and navigation patterns

## What It Doesn't Track

- Personal information (names, emails)
- Form data
- Passwords or sensitive data
- Individual user identification (only anonymous data)

## Useful Google Analytics Features

1. **Real-time Reports:**
   - See current visitors
   - Active pages
   - Traffic sources

2. **Audience Reports:**
   - Demographics
   - Interests
   - Devices and browsers

3. **Acquisition Reports:**
   - How users find your site
   - Search keywords (if available)
   - Referral sources

4. **Behavior Reports:**
   - Popular pages
   - User flow
   - Site speed

5. **Conversion Tracking:**
   - Set up goals (e.g., contact form submissions)
   - Track conversions
   - Measure ROI

## Troubleshooting

### Analytics Not Working

1. **Check Measurement ID:**
   - Verify it's correct in `.env.local` or Vercel
   - Should start with `G-`

2. **Check Cookie Consent:**
   - Make sure you accepted analytics cookies
   - Clear browser storage and try again

3. **Check Browser Console:**
   - Look for Google Analytics errors
   - Verify gtag is defined: `typeof gtag` should be "function"

4. **Check Network Tab:**
   - Look for requests to `googletagmanager.com`
   - Look for `collect` or `analytics` requests

### Data Not Appearing in GA

- Allow 24-48 hours for initial data processing
- Use Realtime reports to see immediate activity
- Verify website URL matches exactly in GA settings

## Best Practices

1. **Set up goals:**
   - Contact form submissions
   - Time on page
   - Page scrolls

2. **Create custom reports:**
   - Track specific business metrics
   - Monitor key pages

3. **Regular monitoring:**
   - Check weekly/monthly reports
   - Analyze trends
   - Adjust strategy based on data

4. **Privacy:**
   - Anonymize IP addresses (GA4 does this by default)
   - Don't track personal data
   - Respect user consent choices

## Additional Resources

- Google Analytics Help: https://support.google.com/analytics
- GA4 Setup Guide: https://developers.google.com/analytics/devguides/collection/ga4
- Next.js Analytics: https://nextjs.org/docs/app/building-your-application/optimizing/analytics
- GDPR Compliance: https://gdpr.eu/cookies/

## Support

If you need help setting up Google Analytics:
- Check Google Analytics Help Center
- Review the troubleshooting section above
- Contact Google Analytics support

---

**Your cookie consent and privacy setup is already complete!**
Just follow the steps above to connect Google Analytics.
