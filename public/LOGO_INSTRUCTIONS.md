# Logo Instructions

## 📍 Where to Place Your Logos

**This website supports TWO logo versions for optimal visibility:**

1. **White Background Version (Navigation Bar):**
   ```
   c:\xampp\htdocs\NewUTS\public\logo-wbg.svg
   ```

2. **Dark Background Version (Footer):**
   ```
   c:\xampp\htdocs\NewUTS\public\logo-dbg.svg
   ```

That's it! The code is already set up to display them appropriately.

## ✅ What's Been Configured

Your logos will appear in **two places with appropriate versions:**

### 1. Navigation Bar (Top of Every Page)
- **Uses:** `logo-wbg.svg` (white background version)
- **Background:** White navigation bar
- Logo on the left side
- Clickable - returns to home page
- Company name next to logo (hidden on mobile)
- Size: 48px height

### 2. Footer (Bottom of Every Page)
- **Uses:** `logo-dbg.svg` (dark background version)
- **Background:** Dark gray footer (bg-gray-900)
- Logo next to company name
- Size: 40px height
- Optimal visibility on dark background

## 📐 Logo Specifications

**Format:** SVG (Scalable Vector Graphics)
- ✅ **Recommended** - Scales perfectly at any size
- ✅ Small file size
- ✅ Sharp on all screens (including Retina)
- ✅ Works with Next.js Image optimization

**Alternative Formats (if you don't have SVG):**
- PNG with transparent background (2x or 3x size for retina)
- Recommended size: 200x200px minimum

## 🎨 Design Considerations

**For Best Results:**
- Use a **square or horizontal** logo
- Ensure good contrast with:
  - White background (navigation)
  - Dark gray background (footer)
- If logo has text, make sure it's readable at small sizes
- Consider providing a simplified version for small screens

## 🔄 If You Have Different Logo Formats

### Option 1: You have both logo-wbg.svg and logo-dbg.svg
✅ Perfect! Just copy them to the `public/` folder:
- `public/logo-wbg.svg` (for white backgrounds)
- `public/logo-dbg.svg` (for dark backgrounds)

### Option 2: You only have one logo version
If you only have one logo file, you can:
1. Use the same logo for both locations
2. Or create two versions optimized for different backgrounds

**To use same logo for both:**
- Copy your logo as both filenames:
  - `logo-wbg.svg` (or .png)
  - `logo-dbg.svg` (or .png)

### Option 3: You have PNG instead of SVG
1. Rename your files:
   - `logo-wbg.svg` → `logo-wbg.png`
   - `logo-dbg.svg` → `logo-dbg.png`
2. Update the code:
   - In `Navigation.tsx`: Change `src="/logo-wbg.svg"` to `src="/logo-wbg.png"`
   - In `Footer.tsx`: Change `src="/logo-dbg.svg"` to `src="/logo-dbg.png"`

### Option 4: Convert PNG to SVG
**Online Tools:**
- https://convertio.co/png-svg/
- https://www.aconvert.com/image/png-to-svg/

**Or keep PNG** - it works fine too!

## 📱 Responsive Behavior

**Mobile (< 640px):**
- Logo shows
- Company name hides (to save space)

**Desktop (≥ 640px):**
- Logo shows
- Company name shows

## 🎯 Logo Placement

```
Navigation:
┌─────────────────────────────────┐
│ [Logo] Unique Tech Solution     │  ← Your logo here
│                    Home About... │
└─────────────────────────────────┘

Footer:
┌─────────────────────────────────┐
│ [Logo] Unique Tech Solution     │  ← Your logo here
│ Empowering innovation...        │
└─────────────────────────────────┘
```

## 🚀 After Adding Logos

1. **Copy both logo files to `public/` folder:**
   - `logo-wbg.svg` (white background version)
   - `logo-dbg.svg` (dark background version)
2. **Refresh your browser** (Ctrl+F5)
3. **Check:**
   - Navigation bar (top) - should show logo-wbg.svg
   - Footer (bottom) - should show logo-dbg.svg
   - Click navigation logo (should go to home page)
   - Test on mobile size (resize browser)
   - Verify logo visibility on both backgrounds

## 🔧 Troubleshooting

### Logo doesn't show?
1. Check file names are exactly: `logo-wbg.svg` and `logo-dbg.svg`
2. Check file locations:
   - `c:\xampp\htdocs\NewUTS\public\logo-wbg.svg`
   - `c:\xampp\htdocs\NewUTS\public\logo-dbg.svg`
3. Hard refresh browser: `Ctrl + F5`
4. Check browser console for 404 errors

### Logo looks wrong?
- Try adjusting the height in the code
- Navigation: `className="h-12 w-auto"` (change h-12 to h-10, h-14, etc.)
- Footer: `className="h-10 w-auto"`

### Logo is blurry?
- Use SVG format (scales perfectly)
- Or use PNG at 2x-3x the display size

## 💡 Current Settings

**Navigation Logo:**
- Source: `/logo-wbg.svg` (white background version)
- Background: White navigation bar
- Height: 48px (h-12 in Tailwind)
- Width: Auto (maintains aspect ratio)
- Priority loading: Yes (loads immediately)

**Footer Logo:**
- Source: `/logo-dbg.svg` (dark background version)
- Background: Dark gray footer (bg-gray-900)
- Height: 40px (h-10 in Tailwind)
- Width: Auto (maintains aspect ratio)

## ✨ Benefits of Using Image Component

Next.js `<Image>` component provides:
- ✅ Automatic optimization
- ✅ Lazy loading (footer logo)
- ✅ Priority loading (navigation logo)
- ✅ Responsive sizing
- ✅ Built-in accessibility

---

**Status:** ✅ Code ready with dual logo support
**Next Step:** Copy your `logo-wbg.svg` and `logo-dbg.svg` to the `public/` folder!

## 🎨 Why Two Logos?

Using different logo versions for different backgrounds ensures:
- ✅ Optimal visibility and contrast
- ✅ Professional appearance on all sections
- ✅ Better brand presentation
- ✅ Accessibility compliance

**White background logo (logo-wbg.svg):**
- Optimized for light backgrounds
- Used in navigation bar

**Dark background logo (logo-dbg.svg):**
- Optimized for dark backgrounds
- Used in footer section
