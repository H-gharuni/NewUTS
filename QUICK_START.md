# Quick Start Guide

## 🚀 Get Your Website Running in 5 Minutes

### Step 1: View the Website Locally

```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

You should see your Unique Tech Solution website!

### Step 2: Deploy to Vercel (Production)

#### Option A: Using GitHub + Vercel Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Complete Unique Tech Solution website"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live! 🎉

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Step 3: Customize Your Website

#### Add Your Logo
Place your logo in `public/images/logo.png` and update:
- `components/Navigation.tsx` (line 14)

#### Add Leadership Photos
Place headshots in `public/images/` and update:
- `components/Leadership.tsx` (lines 4-6, uncomment Image component)

#### Update Business Unit Links
Edit `components/BusinessUnits.tsx` (lines 4-17) to update:
- Descriptions
- Website URLs

#### Customize Colors
Edit `tailwind.config.ts` to change the color scheme

### Step 4: View Cookie Consent Banner

Your website now includes a GDPR-compliant cookie consent banner!

**To test it:**
1. Open http://localhost:3000 in an incognito/private window
2. After 1 second, the cookie banner appears at the bottom
3. Try clicking "Customize" to see detailed preferences
4. Choose your preferences and save

**Features:**
- ✅ Accept All / Reject All / Customize options
- ✅ Saves user preferences
- ✅ GDPR compliant
- ✅ Ready for Google Analytics

**To reset and see banner again:**
- Clear browser localStorage
- Or open in incognito/private mode

### Step 5: Enable Google Analytics (Optional)

See [GOOGLE_ANALYTICS_SETUP.md](GOOGLE_ANALYTICS_SETUP.md) for complete instructions.

Quick steps:
1. Get Google Analytics 4 Measurement ID
2. Add to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
3. Add Script tags to `app/layout.tsx` (see setup guide)
4. Deploy to Vercel and add environment variable

### Step 6: Enable Contact Form Emails

The contact form currently logs to console. To send actual emails:

1. **Choose an email service:**
   - Resend (easiest): https://resend.com
   - SendGrid: https://sendgrid.com
   - AWS SES: https://aws.amazon.com/ses/

2. **Install the SDK:**
   ```bash
   npm install resend  # or your chosen service
   ```

3. **Update the API route:**
   Edit `app/api/contact/route.ts` to add email sending logic

4. **Add environment variables:**
   In Vercel Dashboard → Settings → Environment Variables
   ```
   RESEND_API_KEY=your_api_key
   ```

### Step 5: Add Custom Domain

1. **In Vercel Dashboard:**
   - Go to your project
   - Settings → Domains
   - Add `uniquetechsolution.uk`

2. **Update DNS:**
   Add these records to your domain registrar:
   ```
   A Record:     @    →  76.76.21.21
   CNAME Record: www  →  cname.vercel-dns.com
   ```

3. **Wait for DNS propagation** (can take up to 48 hours)

## 📝 Common Tasks

### Update Content
- Home page: `app/page.tsx`
- About page: `app/about/page.tsx`
- Contact page: `app/contact/page.tsx`

### Add a New Page
1. Create folder: `app/newpage/`
2. Add file: `app/newpage/page.tsx`
3. Add navigation link in `components/Navigation.tsx`

### Change Colors
Edit `tailwind.config.ts` and component files

### Test Before Deploying
```bash
npm run build
```

If build succeeds, you're good to deploy!

## 🆘 Troubleshooting

### Build fails
- Run `npm run build` locally to see errors
- Check all files are saved
- Ensure no TypeScript errors

### Contact form not working
- Check browser console for errors
- Verify API route at `/api/contact`
- Check Vercel function logs

### Styles not applying
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

## 📚 Resources

- Full README: See `README.md`
- Deployment Guide: See `DEPLOYMENT.md`
- Project Overview: See `PROJECT_SUMMARY.md`
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Vercel Docs: https://vercel.com/docs

## ✅ Deployment Checklist

Before going live:
- [ ] Test all pages locally
- [ ] Add real images (logo, photos)
- [ ] Review all content for accuracy
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Set up email service
- [ ] Configure custom domain
- [ ] Add analytics (optional)

## 🎉 You're All Set!

Your professional corporate website is ready to launch!

**Local Development:** `npm run dev`
**Deploy to Vercel:** Push to GitHub or run `vercel --prod`
**Questions?** Email: info@uniquetechsolution.uk

---

Built with ❤️ using Next.js, React, and Tailwind CSS
