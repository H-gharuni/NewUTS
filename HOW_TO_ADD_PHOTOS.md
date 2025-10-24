# How to Add Leadership Photos to Your Website

This guide explains exactly where to place leadership photos and how to enable them on your website.

## 📁 Where to Place Photos

### Step 1: Prepare Your Photos

**Location on Your Computer:**
```
c:\xampp\htdocs\NewUTS\public\images\
```

**Required Photos:**
1. `ceo.webp` - Dr. Sharzad Madjlesi's photo (or `ceo.jpg`)
2. `cofounder.webp` - Dr. Anand Mandal's photo (or `cofounder.jpg`)
3. `cto.webp` - Mr. Mehran Gharooni's photo (or `cto.jpg`)

### Step 2: Photo Requirements

**Recommended Specifications:**
- **Format:** WebP (recommended) or JPG/PNG
  - **WebP Benefits:**
    - 25-35% smaller file size than JPG
    - Better quality at smaller sizes
    - Faster page loading
    - Supported by all modern browsers
- **Size:** At least 500x500 pixels (square)
- **Aspect Ratio:** 1:1 (square images work best)
- **File Size:** Under 200KB with WebP (under 500KB for JPG)
- **Quality:** High resolution, professional headshots
- **Background:** Consistent background color or style

**Tips for Best Results:**
- Use professional headshots with good lighting
- Crop to focus on the face and upper shoulders
- Ensure all photos have similar lighting and style
- Consider using a plain background
- Square format displays best in circular containers

### Step 3: Add Photos to the Directory

**Using File Explorer:**
1. Navigate to: `c:\xampp\htdocs\NewUTS\public\images\`
2. Copy your three photos into this folder
3. Rename them to:
   - `ceo.webp` (for Dr. Sharzad Madjlesi) - or `ceo.jpg`
   - `cofounder.webp` (for Dr. Anand Mandal) - or `cofounder.jpg`
   - `cto.webp` (for Mr. Mehran Gharooni) - or `cto.jpg`

**Using Command Line:**
```bash
# Navigate to images directory
cd c:\xampp\htdocs\NewUTS\public\images

# Copy your photos (example paths - adjust to your actual file locations)
copy "C:\Users\YourName\Downloads\sharzad-photo.webp" ceo.webp
copy "C:\Users\YourName\Downloads\anand-photo.webp" cofounder.webp
copy "C:\Users\YourName\Downloads\mehran-photo.webp" cto.webp
```

## 🔄 How to Convert to WebP

### Online Tools (Easiest):
1. **Squoosh.app** (Google's free tool)
   - Visit: https://squoosh.app
   - Drag your JPG/PNG photo
   - Select "WebP" in the right panel
   - Adjust quality (80-85% is perfect)
   - Download the WebP file

2. **Convertio.co**
   - Visit: https://convertio.co/jpg-webp/
   - Upload JPG/PNG files
   - Convert to WebP
   - Download

3. **CloudConvert**
   - Visit: https://cloudconvert.com/jpg-to-webp
   - Batch convert multiple images

### Using Software:

**Windows:**
- **Paint.NET** (free) with WebP plugin
- **IrfanView** (free) with WebP plugin
- **GIMP** (free) - File → Export As → .webp

**Mac:**
- **Squoosh.app** (web-based, works on any OS)
- **GIMP** (free)

**Command Line (Advanced):**
```bash
# Install cwebp (Google's WebP encoder)
# Then convert:
cwebp -q 85 input.jpg -o output.webp
```

## 🔧 How to Enable Photos in the Code

Once photos are in place, you need to update the Leadership component to display them.

### Option 1: Update Leadership Component (Home Page)

**File:** `components\Leadership.tsx`

**Current Code (around line 44-50):**
```tsx
<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-5xl font-bold">
  {leader.name.split(' ').map(n => n[0]).join('')}
</div>
{/* When you add actual images, uncomment this:
<Image
  src={leader.image}
  alt={leader.name}
  fill
  className="object-cover"
/>
*/}
```

**Updated Code (replace the above with this):**
```tsx
<Image
  src={leader.image}
  alt={leader.name}
  fill
  className="object-cover"
/>
```

**Don't forget to add the import at the top of the file:**
```tsx
import Image from "next/image";
```

### Option 2: Quick Copy-Paste Solution

I can create an updated version for you. Here's the complete updated `Leadership.tsx`:

```tsx
import Link from "next/link";
import Image from "next/image";

const leaders = [
  {
    name: "Dr Sharzad Madjlesi",
    role: "Co-Founder and CEO",
    image: "/images/ceo.jpg",
    profileLink: "/about#sharzad-madjlesi"
  },
  {
    name: "Dr Anand Mandal",
    role: "Co-Founder and Director",
    image: "/images/cofounder.jpg",
    profileLink: "/about#anand-mandal"
  },
  {
    name: "Mr Mehran Gharooni",
    role: "Chief Technology Officer",
    image: "/images/cto.jpg",
    profileLink: null
  }
];

export default function Leadership() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Driving Force
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary leadership guiding our strategic direction and fostering innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, index) => {
            const content = (
              <>
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden bg-gray-200 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  {leader.role}
                </p>
                {leader.profileLink && (
                  <span className="inline-flex items-center text-blue-900 text-sm font-semibold group-hover:underline">
                    View Full Profile
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                )}
              </>
            );

            if (leader.profileLink) {
              return (
                <Link
                  key={index}
                  href={leader.profileLink}
                  className="text-center group cursor-pointer block hover:scale-105 transition-transform"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div key={index} className="text-center group">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

## 🖼️ Update Profile Photos on About Page

**File:** `app\about\page.tsx`

**Find these sections and update the avatar divs:**

**Dr. Sharzad Madjlesi (around line 107):**

Current:
```tsx
<div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
  SM
</div>
```

Replace with:
```tsx
<div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden bg-gray-200 shadow-lg relative">
  <Image
    src="/images/ceo.jpg"
    alt="Dr. Sharzad Madjlesi"
    fill
    className="object-cover"
  />
</div>
```

**Dr. Anand Mandal (around line 176):**

Current:
```tsx
<div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
  AM
</div>
```

Replace with:
```tsx
<div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden bg-gray-200 shadow-lg relative">
  <Image
    src="/images/cofounder.jpg"
    alt="Dr. Anand Mandal"
    fill
    className="object-cover"
  />
</div>
```

**Don't forget to add the import at the top:**
```tsx
import Image from "next/image";
```

## 🎨 Image Optimization Tips

Next.js automatically optimizes images for you, but here are some tips:

### Before Uploading:
1. **Crop to square** - Use any photo editor
2. **Resize to 800x800 pixels** - Good balance of quality and file size
3. **Compress** - Use tools like TinyPNG or Squoosh
4. **Save as JPG** - Best for photos (or WebP for even smaller size)

### Recommended Tools:
- **Online:** Squoosh.app (Google's image compressor)
- **Windows:** Paint, Photos app
- **Professional:** Adobe Photoshop, GIMP (free)

## ✅ Checklist

Before deploying with photos:

- [ ] All three photos are in `public/images/` folder
- [ ] Photos are named correctly: `ceo.jpg`, `cofounder.jpg`, `cto.jpg`
- [ ] Photos are professional headshots
- [ ] Photos are square (1:1 aspect ratio)
- [ ] File sizes are under 500KB each
- [ ] Updated `Leadership.tsx` to use Image component
- [ ] Updated `about/page.tsx` profile sections (optional)
- [ ] Added `import Image from "next/image";` to both files
- [ ] Tested locally at http://localhost:3000
- [ ] Ready to commit and push to GitHub

## 🚀 After Adding Photos

1. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 and check the leadership section

2. **Commit changes:**
   ```bash
   git add public/images/*.jpg
   git add components/Leadership.tsx
   git add app/about/page.tsx
   git commit -m "Add leadership team photos"
   ```

3. **Push to GitHub:**
   ```bash
   git push origin main
   ```

4. **Vercel auto-deploys** - Your changes will be live in 2-3 minutes!

## 📸 Photo Examples

**Good Photo:**
- Professional headshot
- Clear face, smiling
- Solid or office background
- Good lighting
- Square crop
- High resolution

**Avoid:**
- Blurry or pixelated images
- Casual vacation photos
- Group photos (cropped badly)
- Dark or poorly lit photos
- Non-square crops that will look stretched

## 🆘 Troubleshooting

### Photos Not Showing?

1. **Check file names** - Must be exact: `ceo.jpg`, `cofounder.jpg`, `cto.jpg`
2. **Check file location** - Must be in `public/images/` folder
3. **Clear cache** - Hard refresh browser (Ctrl+F5)
4. **Check console** - Open DevTools (F12) and look for 404 errors
5. **Restart dev server** - Stop and run `npm run dev` again

### Photos Look Stretched?

- Make sure photos are square (1:1 aspect ratio)
- Use `object-cover` class (already included)
- Crop photos before uploading

### Photos Too Large (Slow Loading)?

- Compress images before uploading
- Target: 100-300KB per photo
- Use WebP format for even smaller sizes

## 📞 Need Help?

The photos will display in:
- **Home page** - "The Driving Force" section (circular)
- **About page** - Leadership profiles section (circular)

---

**Current Status:**
- ✅ Photo directory ready: `c:\xampp\htdocs\NewUTS\public\images\`
- ⏳ Waiting for photos: `ceo.jpg`, `cofounder.jpg`, `cto.jpg`
- ⏳ Code ready to be updated to display photos

**Next Step:** Copy your three photos into the `public\images\` folder!
