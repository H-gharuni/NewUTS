# Troubleshooting Guide

Common issues and their solutions for the Unique Tech Solution website.

## Development Server Issues

### "Cannot find module" or Webpack Errors

**Problem:** After making changes, you see module not found errors or webpack-related errors.

**Solution:**
```bash
# Stop the development server (Ctrl+C)
# Clear the Next.js cache
rm -rf .next

# Restart the development server
npm run dev
```

**Why it happens:** Next.js caches compiled modules in the `.next` directory. Sometimes after significant changes, the cache can become corrupted.

### Port 3000 Already in Use

**Problem:** Error: "Port 3000 is in use"

**Solution (Windows):**
```bash
# Find the process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /F /PID <PID>

# Or use a different port
npm run dev -- -p 3001
```

**Solution (Mac/Linux):**
```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Fast Refresh Warnings

**Problem:** "Fast Refresh had to perform a full reload"

**Solution:** This is usually harmless and happens when:
- You clear the `.next` cache
- You make certain types of code changes
- The build cache needs to be regenerated

If it persists:
1. Clear the cache: `rm -rf .next`
2. Restart dev server: `npm run dev`

## Build Issues

### Build Fails with TypeScript Errors

**Problem:** `npm run build` shows TypeScript errors

**Solution:**
```bash
# Check TypeScript errors
npx tsc --noEmit

# Fix errors in the reported files
# Then run build again
npm run build
```

### ESLint Errors During Build

**Problem:** Build fails due to ESLint warnings

**Solution:**
```bash
# Run ESLint to see all issues
npm run lint

# Fix the issues or temporarily disable rules in .eslintrc.json
# Then rebuild
npm run build
```

## Cookie Consent Issues

### Cookie Banner Not Appearing

**Problem:** Cookie banner doesn't show up

**Solutions:**
1. **Check if consent was already saved:**
   - Open browser DevTools (F12)
   - Go to Application → Local Storage
   - Look for `cookieConsent` key
   - Delete it and refresh the page

2. **Use incognito/private mode:**
   - Open the site in a private window
   - Banner should appear after 1 second

3. **Check browser console for errors:**
   - Press F12 to open DevTools
   - Look for JavaScript errors in Console tab

### Cookie Preferences Not Saving

**Problem:** Choices don't persist between sessions

**Solution:**
1. Check if localStorage is enabled in your browser
2. Make sure you're not in private/incognito mode (some browsers don't persist storage)
3. Check browser console for errors

### "Cannot read localStorage" Error

**Problem:** Error accessing localStorage

**Solution:** This can happen with:
- Very old browsers
- Browsers with storage disabled
- Private browsing with strict settings

The component already handles this gracefully - users just need to accept cookies each visit.

## Google Analytics Issues

### Analytics Not Tracking

**Problem:** Google Analytics shows no data

**Solutions:**

1. **Verify Measurement ID:**
   - Check `.env.local` or Vercel environment variables
   - Should start with `G-` (not `UA-`)
   - GA4 only, Universal Analytics (UA-) is deprecated

2. **Check if user accepted cookies:**
   - Analytics only runs after consent
   - Accept analytics cookies in the cookie banner
   - Check console: should see "Analytics enabled"

3. **Verify script is loaded:**
   - Open DevTools → Network tab
   - Look for requests to `googletagmanager.com`
   - Should see `gtag/js` file loaded

4. **Check Realtime reports:**
   - GA4 can take 24-48 hours for full data
   - Use "Realtime" reports in GA to see immediate activity

### Analytics Running Without Consent

**Problem:** Concerned analytics might track without permission

**Solution:**
- The implementation is consent-first
- `analytics_storage` is set to 'denied' by default
- Only changes to 'granted' after user accepts
- This is GDPR compliant

## Deployment Issues (Vercel)

### Build Fails on Vercel

**Problem:** Build succeeds locally but fails on Vercel

**Solutions:**

1. **Check Node version:**
   - Vercel uses Node 18+ by default
   - Match your local version with Vercel

2. **Environment variables:**
   - Make sure all required env vars are set in Vercel
   - Check Settings → Environment Variables

3. **Check build logs:**
   - Click on failed deployment
   - Review detailed logs for specific errors

### Environment Variables Not Working

**Problem:** `.env.local` variables not available in production

**Solution:**
1. Add environment variables in Vercel Dashboard:
   - Go to Settings → Environment Variables
   - Add each variable
   - Redeploy the project

2. Variables must start with `NEXT_PUBLIC_` to be available in browser:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### 404 Errors on Deployed Site

**Problem:** Pages work locally but show 404 on Vercel

**Solutions:**
1. Ensure pages are in the `app` directory
2. Check file naming (should be `page.tsx` not `index.tsx`)
3. Clear Vercel cache and redeploy
4. Check `vercel.json` configuration

## Contact Form Issues

### Form Doesn't Submit

**Problem:** Contact form shows error or doesn't submit

**Solutions:**

1. **Check API route:**
   - Verify `app/api/contact/route.ts` exists
   - Check for errors in route handler

2. **Check browser console:**
   - Look for CORS errors
   - Look for network errors

3. **Check network tab:**
   - DevTools → Network
   - Look for `/api/contact` request
   - Check response status and body

### Email Not Sending

**Problem:** Form submits but no email received

**Solution:**
The current implementation logs to console only. To enable emails:
1. Follow instructions in README.md
2. Integrate an email service (SendGrid, Resend, etc.)
3. Update `app/api/contact/route.ts` with email logic

## Performance Issues

### Slow Page Load

**Solutions:**
1. **Build for production:**
   ```bash
   npm run build
   npm start
   ```
   Production builds are much faster than dev mode

2. **Check image optimization:**
   - Use Next.js Image component
   - Optimize image sizes before uploading

3. **Check bundle size:**
   ```bash
   npm run build
   # Review the output for large bundles
   ```

### High Memory Usage

**Problem:** Development server uses too much memory

**Solutions:**
1. Close other applications
2. Restart the dev server periodically
3. Clear `.next` cache: `rm -rf .next`

## Browser Compatibility Issues

### Site Doesn't Work in Old Browsers

**Problem:** Features broken in IE11 or old browsers

**Solution:**
This site targets modern browsers (Chrome, Firefox, Safari, Edge latest versions). For old browser support:
1. Add polyfills
2. Update `browserslist` in package.json
3. Configure Babel for older targets

Note: IE11 is officially unsupported by Microsoft and most frameworks.

## Common Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run dev -- -p 3001   # Start on different port

# Production
npm run build           # Create production build
npm start              # Start production server

# Maintenance
npm run lint           # Run ESLint
rm -rf .next           # Clear Next.js cache
rm -rf node_modules    # Remove dependencies
npm install            # Reinstall dependencies

# Vercel
vercel                 # Deploy preview
vercel --prod          # Deploy to production
vercel env ls          # List environment variables
```

## Getting Help

If you're stuck:

1. **Check the logs:**
   - Browser console (F12)
   - Terminal output
   - Vercel deployment logs

2. **Review documentation:**
   - Next.js docs: https://nextjs.org/docs
   - Vercel docs: https://vercel.com/docs
   - This project's README.md

3. **Common resources:**
   - Next.js GitHub Issues
   - Stack Overflow
   - Vercel Support

## Preventive Maintenance

To avoid issues:

✅ **Keep dependencies updated:**
```bash
npm outdated           # Check for updates
npm update            # Update dependencies
```

✅ **Regular testing:**
- Test locally before deploying
- Run `npm run build` before pushing
- Test in different browsers

✅ **Clear cache periodically:**
```bash
rm -rf .next
npm run dev
```

✅ **Monitor production:**
- Check Vercel Analytics
- Review Google Analytics
- Monitor error logs

---

**Last Updated:** October 24, 2025

For project-specific help, refer to:
- [README.md](README.md)
- [QUICK_START.md](QUICK_START.md)
- [DEPLOYMENT.md](DEPLOYMENT.md)
