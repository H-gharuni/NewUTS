# Deployment Guide for Vercel

This guide will help you deploy your Unique Tech Solution website to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (free tier is sufficient)
- Git installed on your computer

## Step 1: Prepare Your Repository

1. Make sure all your code is committed to Git:

```bash
git add .
git commit -m "Initial commit: Complete Unique Tech Solution website"
```

2. If you haven't already, create a repository on GitHub and push your code:

```bash
git remote add origin https://github.com/yourusername/uniquetechsolution.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "Add New..." → "Project"
4. Import your GitHub repository (`NewUTS` or whatever you named it)
5. Vercel will automatically detect Next.js and configure the settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** .next
6. Click "Deploy"
7. Wait for the deployment to complete (usually 2-3 minutes)
8. Your site will be live at `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI globally:

```bash
npm install -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. Navigate to your project directory:

```bash
cd c:\xampp\htdocs\NewUTS
```

4. Run the deploy command:

```bash
vercel
```

5. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **uniquetechsolution** (or your preferred name)
   - In which directory is your code located? **./**
   - Want to override settings? **N**

6. For production deployment:

```bash
vercel --prod
```

## Step 3: Configure Custom Domain (Optional)

1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain: `uniquetechsolution.uk`
4. Follow Vercel's instructions to configure your DNS settings
5. Common DNS configurations:
   - **A Record:** Point to Vercel's IP: `76.76.21.21`
   - **CNAME Record:** Point `www` to `cname.vercel-dns.com`

## Step 4: Environment Variables (If Needed)

If you add email functionality later, you'll need to add environment variables:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables (e.g., SMTP credentials, API keys)
4. Redeploy for changes to take effect

## Step 5: Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to the `main` branch (production)
- Create preview deployments for pull requests
- Run builds and tests automatically

## Monitoring and Analytics

1. Visit your Vercel dashboard to monitor:
   - Deployment status
   - Build logs
   - Performance metrics
   - Analytics (if enabled)

## Troubleshooting

### Build Fails

- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify there are no TypeScript errors locally: `npm run build`

### 404 Errors

- Ensure your `vercel.json` is configured correctly
- Check that all routes are properly defined in the `app` directory

### Environment Variables Not Working

- Make sure they're added in Vercel Dashboard under Settings
- Redeploy after adding new variables
- Check variable names match exactly

## Updating Your Site

To update your deployed site:

1. Make changes locally
2. Test locally: `npm run dev`
3. Commit and push to GitHub:

```bash
git add .
git commit -m "Description of changes"
git push
```

4. Vercel will automatically deploy your changes

## Performance Optimization

Your site is already optimized with:
- ✅ Static page generation
- ✅ Automatic code splitting
- ✅ Image optimization (when you add images)
- ✅ CSS minification
- ✅ Responsive design

## Next Steps After Deployment

1. **Add Real Images:**
   - Replace placeholder initials with actual headshots in `public/images/`
   - Update image paths in `components/Leadership.tsx`

2. **Configure Email:**
   - Set up SendGrid, Resend, or another email service
   - Update `app/api/contact/route.ts` with email sending logic
   - Add environment variables in Vercel

3. **SEO:**
   - Submit sitemap to Google Search Console
   - Verify domain ownership
   - Add Google Analytics (if desired)

4. **SSL Certificate:**
   - Vercel automatically provides SSL certificates
   - Ensure all links use HTTPS

5. **Custom Domain:**
   - Purchase and configure `uniquetechsolution.uk`
   - Point DNS to Vercel

## Support

If you encounter issues:
- Check Vercel's documentation: https://vercel.com/docs
- Vercel support: https://vercel.com/support
- Next.js documentation: https://nextjs.org/docs

## Important Notes

- The free Vercel tier includes:
  - Unlimited deployments
  - Automatic HTTPS
  - Global CDN
  - Serverless functions
  - 100GB bandwidth per month

- Your current test file (`index.html.backup`) has been backed up
- All new traffic will be served by the Next.js application

## Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Build successful
- [ ] Site accessible at Vercel URL
- [ ] All pages working correctly
- [ ] Contact form submits (check logs)
- [ ] Navigation works on all pages
- [ ] Mobile responsive design verified
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics configured (if desired)

Congratulations! Your website is now live! 🎉
