# Unique Tech Solution - Corporate Website

A professional corporate website for Unique Tech Solution UK, a semi-holding company with strategic business units including mySmartTeach.com and Tennerpages.com.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Features

- Responsive, mobile-first design
- Modern, professional UI/UX
- Contact form with API integration
- GDPR-compliant cookie consent banner
- SEO optimized
- Fast page loads with Next.js optimization
- Interactive navigation
- Google Maps integration
- Google Analytics ready (setup guide included)

## Pages

- **Home:** Hero section, Business Units showcase, Leadership team, Contact form
- **About Us:** Company history, mission, vision, values, leadership profiles
- **Contact Us:** Full contact information, contact form, embedded map
- **Privacy Policy:** GDPR-compliant privacy policy
- **Terms of Service:** Legal terms and conditions

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

## Project Structure

```
.
├── app/
│   ├── about/          # About Us page
│   ├── api/            # API routes
│   │   └── contact/    # Contact form API
│   ├── contact/        # Contact page
│   ├── privacy/        # Privacy Policy
│   ├── terms/          # Terms of Service
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── BusinessUnits.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Leadership.tsx
│   └── Navigation.tsx
├── public/
│   └── images/         # Image assets
└── package.json
```

## Environment Variables

For email functionality, you may need to add environment variables. Create a `.env.local` file:

```env
# Email Configuration (example)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
CONTACT_EMAIL=info@uniquetechsolution.uk
```

## Customization

### Updating Content

- **Company Information:** Update contact details in `app/contact/page.tsx`
- **Business Units:** Modify the `businessUnits` array in `components/BusinessUnits.tsx`
- **Leadership Team:** Update the `leaders` array in `components/Leadership.tsx`
- **Hero Text:** Edit the headline in `components/Hero.tsx`
- **About Content:** Modify text in `app/about/page.tsx`

### Adding Images

Place your images in the `public/images/` directory and reference them using:

```tsx
<Image src="/images/your-image.jpg" alt="Description" width={500} height={300} />
```

### Styling

The project uses Tailwind CSS. Customize the design by:
- Editing component styles directly
- Modifying `tailwind.config.ts` for theme customization
- Adding custom CSS in `app/globals.css`

## Contact Form Integration

The contact form currently logs submissions. To enable email sending:

1. Choose an email service (SendGrid, AWS SES, Resend, etc.)
2. Install the necessary package
3. Update `app/api/contact/route.ts` with your email logic
4. Add environment variables for your email service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All Rights Reserved - Unique Tech Solution UK

## Support

For issues or questions, contact: info@uniquetechsolution.uk

## Company Information

**Unique Tech Solution UK**
C16, The Ingenuity Centre
Innovation Park
Nottingham, United Kingdom

Phone: +44 74 0531 7234
Email: info@uniquetechsolution.uk
