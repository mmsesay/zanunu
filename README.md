# Zanunu Portrait Studio

A professional photography and printing studio website built with Next.js, showcasing services, gallery, testimonials, and contact information for Zanunu Portrait Studio in Sierra Leone.

## Features

- **Modern Design**: Beautiful, responsive UI with gradient themes and smooth animations
- **SEO Optimized**: Comprehensive metadata, structured data, sitemap, and robots.txt
- **Performance**: Built with Next.js 16 for optimal performance and SEO
- **Services Showcase**: Photography and printing services presentation
- **Gallery**: Portfolio display of photography work
- **Testimonials**: Client reviews and feedback section
- **Contact**: Easy-to-use contact page with business information

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

```
zanunu-portrait-studio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── services/          # Services page
│   ├── testimonials/      # Testimonials page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt configuration
│   └── sitemap.ts         # Sitemap configuration
├── components/            # React components
│   ├── Footer.tsx         # Footer component
│   ├── Navigation.tsx     # Navigation component
│   └── StructuredData.tsx # SEO structured data
└── public/               # Static assets
    ├── icon.svg          # Site icon
    └── zanunu-logo.jpg   # Studio logo
```

## Build & Deploy

Build the production version:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
