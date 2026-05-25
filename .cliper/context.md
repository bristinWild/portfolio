━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLIPER CONTEXT DOCUMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT:       portfolio-bristin
GENERATED:    2026-05-25T09:33:22.948Z
BRANCH:       main
SCOPED TO:    package.json (active), package-lock.json (active), tsconfig.json (active), README.md (active)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## FOLDER STRUCTURE

```
 portfolio-bristin/
├── app/
│   ├── favicon.ico (65d ago)
│   ├── globals.css (65d ago)
│   ├── layout.tsx (65d ago)
│   └── page.tsx (65d ago)
├── components/
│   ├── About.tsx (64d ago)
│   ├── Contact.tsx (64d ago)
│   ├── Experience.tsx (65d ago)
│   ├── Footer.tsx (65d ago)
│   ├── Hero.tsx (0m ago)
│   ├── HeroAnimation.tsx (64d ago)
│   ├── Navbar.tsx (65d ago)
│   ├── ProfileImage.tsx (65d ago)
│   ├── Projects.tsx (64d ago)
│   └── Stack.tsx (65d ago)
├── lib/
│   └── data.ts (64d ago)
├── public/
│   ├── file.svg (65d ago)
│   ├── globe.svg (65d ago)
│   ├── next.svg (65d ago)
│   ├── vercel.svg (65d ago)
│   └── window.svg (65d ago)
├── AGENTS.md (65d ago)
├── eslint.config.mjs (65d ago)
├── next.config.ts (65d ago)
├── package.json ← ACTIVE SCOPE (65d ago)
├── postcss.config.mjs (65d ago)
├── README.md ← ACTIVE SCOPE (65d ago)
└── tsconfig.json ← ACTIVE SCOPE (65d ago)
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## GIT CONTEXT

Branch:        main
Last commit:   73b2b20 — edited hero page (62 days ago)
Author:        bristinWild

Uncommitted changes (3 files):
  - .gitignore
  - components/Hero.tsx
  - package-lock.json

Recent commits:
  37351c7 — Fixed and updated portfolios
  9a6e0b0 — Added tech stack
  dcfc96c — added nodes animation
  a3f97a5 — fixes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## DEPENDENCY MAP

No dependency information available for scoped files.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## KEY FILES

### package.json
```json
{
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.2.0",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.0",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

### package-lock.json
```json
[File too large to include: 223KB]
[... truncated ...]
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```

### README.md
```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## BLOCKED REFERENCES (fetched locally)

#### https://nextjs.org
Source: README.md

Next.js by Vercel - The React Framework Skip to content Search documentation... Search... ⌘K Showcase Docs Blog Templates Enterprise Search documentation... Search... ⌘K Deploy Learn The React Framework for the Web Used by some of the world&#x27;s largest companies, Next.js enables you to create high-quality web applications with the power of React components. Get Started Learn Next.js ▲ ~ npx create-next-app@latest What&#x27;s in Next.js? Everything you need to build great products on the web. Data Fetching Make your React component async and await your data. Next.js supports both server and client data fetching. Server Actions Run server code by calling a function. Skip the API. Then, easily revalidate cached data and update your UI in one network roundtrip. Advanced Routing &amp; Nested Layouts Create routes using the file system, including support for more advanced routing patterns and UI layouts. CSS Support Style your application with your favorite tools, including support for CSS Modules, Tailwind CSS, and popular community libraries. Route Handlers Build API endpoints to securely connect with third-party services for handling auth or listening for webhooks. Middleware Take control of the incoming request. Use code to define routing and access rules for authentication, experimentation, and internationalization. React Server Components Add components without sending additional client-side JavaScript. Built on the latest React features. Client and Server Rendering Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level. React Server Components Add components without sending additional client-side JavaScript. Built on the latest React features. Data Fetching Make your React component async and await your data. Next.js supports both server and client data fetching. Server Actions Run server code by calling a function. Skip the API. Then, easily revalidate cached data and update your UI in one network roundtrip. Advanced Routing &amp; Nested Layouts Create routes using the file system, including support for more advanced routing patterns and UI layouts. CSS Support Style your application with your favorite tools, including support for CSS Modules, Tailwind CSS, and popular community libraries. Route Handlers Build API endpoints to securely connect with third-party services for handling auth or listening for webhooks. Middleware Take control of the incoming request. Use code to define routing and access rules for authentication, experimentation, and internationalization. Client and Server Rendering Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level. React Server Components Add components without sending additional client-side JavaScript. Built on the latest React features. Data Fetching Make your React component async and await your data. Next.js supports both server and client data fetching. Server Actions Run server code by calling a 

#### https://nextjs.org/docs/app/api-reference/cli/create-next-app
Source: README.md

CLI: create-next-app | Next.js Skip to content Search documentation... Search... ⌘K Showcase Docs Blog Templates Enterprise Search documentation... Search... ⌘K Feedback Learn Menu Using App Router Features available in /app Latest Version 16.2.6 Getting Started Installation Project Structure Layouts and Pages Linking and Navigating Server and Client Components Fetching Data Mutating Data Caching Revalidating Error Handling CSS Image Optimization Font Optimization Metadata and OG images Route Handlers Proxy Deploying Upgrading Guides AI Coding Agents Analytics Authentication Backend for Frontend Caching (Previous Model) CDN Caching CI Build Caching Content Security Policy CSS-in-JS Custom Server Data Security Debugging Deploying to Platforms Draft Mode Environment Variables Forms How Revalidation Works ISR Instrumentation Internationalization JSON-LD Lazy Loading Development Environment Next.js MCP Server MDX Memory Usage Migrating App Router Create React App Vite Migrating to Cache Components Multi-tenant Multi-zones OpenTelemetry Package Bundling PPR Platform Guide Prefetching Preserving UI state Preventing Flash Production PWAs Public pages Redirecting Rendering Philosophy Sass Scripts Self-Hosting SPAs Static Exports Streaming Tailwind CSS v3 Testing Cypress Jest Playwright Vitest Third Party Libraries Upgrading Codemods Version 14 Version 15 Version 16 Videos View transitions API Reference Directives use cache use cache: private use cache: remote use client use server Components Font Form Component Image Component Link Component Script Component File-system conventions default.js Dynamic Segments error.js forbidden.js instrumentation.js instrumentation-client.js Intercepting Routes layout.js loading.js mdx-components.js not-found.js page.js Parallel Routes proxy.js public route.js dynamicParams maxDuration preferredRegion runtime Route Groups src template.js unauthorized.js Metadata Files favicon, icon, and apple-icon manifest.json opengraph-image and twitter-image robots.txt sitemap.xml Route Segment Config dynamicParams maxDuration preferredRegion runtime Functions after cacheLife cacheTag unstable_catchError connection cookies draftMode fetch forbidden generateImageMetadata generateMetadata generateSitemaps generateStaticParams generateViewport headers ImageResponse NextRequest NextResponse notFound permanentRedirect redirect refresh revalidatePath revalidateTag unauthorized unstable_cache unstable_noStore unstable_rethrow updateTag useLinkStatus useParams usePathname useReportWebVitals useRouter useSearchParams useSelectedLayoutSegment useSelectedLayoutSegments userAgent Configuration next.config.js adapterPath allowedDevOrigins appDir assetPrefix authInterrupts basePath cacheComponents cacheHandlers cacheLife compress crossOrigin cssChunking deploymentId devIndicators distDir env expireTime exportPathMap generateBuildId generateEtags headers htmlLimitedBots httpAgentOptions images cacheHandler inlineCss logging mdxRs onDemandEntries opt

#### https://nextjs.org/docs/app/building-your-application/optimizing/fonts
Source: README.md

Getting Started: Font Optimization | Next.js Skip to content Search documentation... Search... ⌘K Showcase Docs Blog Templates Enterprise Search documentation... Search... ⌘K Feedback Learn Menu Using App Router Features available in /app Latest Version 16.2.6 Getting Started Installation Project Structure Layouts and Pages Linking and Navigating Server and Client Components Fetching Data Mutating Data Caching Revalidating Error Handling CSS Image Optimization Font Optimization Metadata and OG images Route Handlers Proxy Deploying Upgrading Guides AI Coding Agents Analytics Authentication Backend for Frontend Caching (Previous Model) CDN Caching CI Build Caching Content Security Policy CSS-in-JS Custom Server Data Security Debugging Deploying to Platforms Draft Mode Environment Variables Forms How Revalidation Works ISR Instrumentation Internationalization JSON-LD Lazy Loading Development Environment Next.js MCP Server MDX Memory Usage Migrating App Router Create React App Vite Migrating to Cache Components Multi-tenant Multi-zones OpenTelemetry Package Bundling PPR Platform Guide Prefetching Preserving UI state Preventing Flash Production PWAs Public pages Redirecting Rendering Philosophy Sass Scripts Self-Hosting SPAs Static Exports Streaming Tailwind CSS v3 Testing Cypress Jest Playwright Vitest Third Party Libraries Upgrading Codemods Version 14 Version 15 Version 16 Videos View transitions API Reference Directives use cache use cache: private use cache: remote use client use server Components Font Form Component Image Component Link Component Script Component File-system conventions default.js Dynamic Segments error.js forbidden.js instrumentation.js instrumentation-client.js Intercepting Routes layout.js loading.js mdx-components.js not-found.js page.js Parallel Routes proxy.js public route.js dynamicParams maxDuration preferredRegion runtime Route Groups src template.js unauthorized.js Metadata Files favicon, icon, and apple-icon manifest.json opengraph-image and twitter-image robots.txt sitemap.xml Route Segment Config dynamicParams maxDuration preferredRegion runtime Functions after cacheLife cacheTag unstable_catchError connection cookies draftMode fetch forbidden generateImageMetadata generateMetadata generateSitemaps generateStaticParams generateViewport headers ImageResponse NextRequest NextResponse notFound permanentRedirect redirect refresh revalidatePath revalidateTag unauthorized unstable_cache unstable_noStore unstable_rethrow updateTag useLinkStatus useParams usePathname useReportWebVitals useRouter useSearchParams useSelectedLayoutSegment useSelectedLayoutSegments userAgent Configuration next.config.js adapterPath allowedDevOrigins appDir assetPrefix authInterrupts basePath cacheComponents cacheHandlers cacheLife compress crossOrigin cssChunking deploymentId devIndicators distDir env expireTime exportPathMap generateBuildId generateEtags headers htmlLimitedBots httpAgentOptions images cacheHandler inlineCss logging mdxRs onDem

#### https://vercel.com/font
Source: README.md

Geist Font Geist Sans Geist Mono Geist Pixel Get It New Geist Pixel now available Geist. 710 530 0 -150 Description Weights Glyphs Stylistic sets Style sets Languages 9 652 9 32 Geist Sans Geist Mono Geist Pixel At Vercel, we&#x27;ve developed Geist, a typeface specifically designed for developers and designers . We began by creating a monospace version that prioritized readability and seamlessly integrated into coding environments. After perfecting the monospace variant , we expanded Geist into a Sans and Pixel version, adding versatility to its capabilities. Geist embodies our design principles of simplicity, minimalism, and speed, drawing inspiration from the renowned Swiss design movement . With precision, clarity, and functionality at its core, Geist enhances the visual experience of developers and designers, empowering them to effectively communicate their ideas. Geist truly represents the coding and design spirit within Vercel&#x27;s creative community. Interactive glyph inspector Solid Anchors Cap height X-height Baseline Descender 710 530 0 -150 Skip to Playground A Á Ă Ǎ Â Ä À Ā Ą Å Ã B C Č Ç Ĉ Ċ D Ð Ď E É Ě Ê Ë Ė È Ē Ę Ẽ F G Ğ Ĝ Ģ Ġ Ḡ H Ħ Ĥ I Í Î Ï İ Ì Ī Į Ĩ J Ĵ K Ķ L Ĺ Ľ Ļ Ł M N Ń Ň Ņ Ñ O Ó Ô Ö Ò Ő Ō Ø Õ P Þ Q R Ŕ Ř S Ś Ꞌ Š Ş Ŝ Ș ẞ T Ť Ţ Ț U Ú Ŭ Û Ü Ù Ű Ū Ų Ů Ũ V W Ẃ Ŵ Ẅ Ẁ X Y Ý Ŷ Ÿ Ỳ Ỹ Z Ź Ž Ż a á ă ǎ â ä à ā ą å ã b c ć č ç ĉ ċ d ð ď đ e é ě ê ë ė è ē ę ẽ ə f g ğ ĝ ģ ġ ḡ h ħ ĥ i ı í î ï ì ī į ĩ j ȷ ĵ k ķ l ĺ ľ ļ ł m n ń ň ņ ñ o ó ô ö ò ő ō ø õ p þ q r ŕ ř ŗ s ś ꞌ š ş ŝ ș ß t ť ţ ț u ú ŭ û ü ù ű ū ų ů ũ v w ẃ ŵ ẅ ẁ x y ý ŷ ÿ ỳ ỹ z ź ž ż 0 1 2 3 4 5 6 7 8 9 ! ? &amp; @ % $ { } ; © ▲ / ~ # ⇧ → * coding and design spirit within our community of creators coding and design spirit within our community of creators coding and design spirit within our community of creators coding and design spirit within our community of creators Interactive font playground Thin Ultra Light Light Regular Medium Semi Bold Bold Black Ultra Black I I Size Spacing -3 % What will you ship next? . . . . . How to install Install via NPM (Recommended) Best for Next.js projects. Includes full glyph set and font-feature-settings support. ▲ ~ npm i geist Get the latest Node.js and npm . Use with Next.js import { GeistSans } from &#x27;geist/font/sans&#x27;; import { GeistMono } from &#x27;geist/font/mono&#x27;; import { GeistPixelSquare, GeistPixelGrid, GeistPixelCircle, GeistPixelTriangle, GeistPixelLine } from &#x27;geist/font/pixel&#x27;; Include this code in app/layout.js . View the README for full instructions. Features by installation method Feature NPM Google Fonts .zip Download font-feature-settings Yes No Yes Easy Next.js integration Yes Yes Manual Full glyph support Full set Partial Full set Automatic updates Via npm Via Google Manual Customization Full Limited Full Use from Google Fonts Quick setup for web projects. Does not include full glyph set or font-feature-settings support for Geist Sans or Geist Mono . Use with Next.js import { Geist, Geist_Mono } fro

#### https://nextjs.org/docs
Source: README.md

Next.js Docs | Next.js Skip to content Search documentation... Search... ⌘K Showcase Docs Blog Templates Enterprise Search documentation... Search... ⌘K Feedback Learn Menu Using App Router Features available in /app Latest Version 16.2.6 Getting Started Installation Project Structure Layouts and Pages Linking and Navigating Server and Client Components Fetching Data Mutating Data Caching Revalidating Error Handling CSS Image Optimization Font Optimization Metadata and OG images Route Handlers Proxy Deploying Upgrading Guides AI Coding Agents Analytics Authentication Backend for Frontend Caching (Previous Model) CDN Caching CI Build Caching Content Security Policy CSS-in-JS Custom Server Data Security Debugging Deploying to Platforms Draft Mode Environment Variables Forms How Revalidation Works ISR Instrumentation Internationalization JSON-LD Lazy Loading Development Environment Next.js MCP Server MDX Memory Usage Migrating App Router Create React App Vite Migrating to Cache Components Multi-tenant Multi-zones OpenTelemetry Package Bundling PPR Platform Guide Prefetching Preserving UI state Preventing Flash Production PWAs Public pages Redirecting Rendering Philosophy Sass Scripts Self-Hosting SPAs Static Exports Streaming Tailwind CSS v3 Testing Cypress Jest Playwright Vitest Third Party Libraries Upgrading Codemods Version 14 Version 15 Version 16 Videos View transitions API Reference Directives use cache use cache: private use cache: remote use client use server Components Font Form Component Image Component Link Component Script Component File-system conventions default.js Dynamic Segments error.js forbidden.js instrumentation.js instrumentation-client.js Intercepting Routes layout.js loading.js mdx-components.js not-found.js page.js Parallel Routes proxy.js public route.js dynamicParams maxDuration preferredRegion runtime Route Groups src template.js unauthorized.js Metadata Files favicon, icon, and apple-icon manifest.json opengraph-image and twitter-image robots.txt sitemap.xml Route Segment Config dynamicParams maxDuration preferredRegion runtime Functions after cacheLife cacheTag unstable_catchError connection cookies draftMode fetch forbidden generateImageMetadata generateMetadata generateSitemaps generateStaticParams generateViewport headers ImageResponse NextRequest NextResponse notFound permanentRedirect redirect refresh revalidatePath revalidateTag unauthorized unstable_cache unstable_noStore unstable_rethrow updateTag useLinkStatus useParams usePathname useReportWebVitals useRouter useSearchParams useSelectedLayoutSegment useSelectedLayoutSegments userAgent Configuration next.config.js adapterPath allowedDevOrigins appDir assetPrefix authInterrupts basePath cacheComponents cacheHandlers cacheLife compress crossOrigin cssChunking deploymentId devIndicators distDir env expireTime exportPathMap generateBuildId generateEtags headers htmlLimitedBots httpAgentOptions images cacheHandler inlineCss logging mdxRs onDemandEntries optimizePac

#### https://nextjs.org/learn
Source: README.md

Learn Next.js | Next.js by Vercel - The React Framework Skip to content Search documentation... Search... ⌘K Showcase Docs Blog Templates Enterprise Search documentation... Search... ⌘K Deploy Learn Start building with Next.js Go from beginner to expert by learning the foundations of Next.js and building a fully functional demo website that uses all the latest features. Learn Next.js Learn Next.js 16 chapters that take you from React to Next.js. Placeholder React Foundations New to React? Learn the foundational concepts to help you go from JavaScript to React. Start Next.js Pages Router Learn how to build a static blog with the Pages Router. Start How does the course work? By building a full web application. Step by step. Set up your local environment and initializing the &quot;ACME&quot; Next.js project template. Use pre-styled components as part of each chapter that leverage Next.js conventions and patterns. Hook up real application logic and data to bring a fully-fledged demo website to life. At the end you’ll have a website that’s ready to ship and the knowledge to build and deploy your own. Your progress will be synced as you complete chapters Go at your own pace and pick up where you left off Test your knowledge during each chapter Take quick quizzes to see what you’ve learned What will I learn? Here’s everything that’s covered in the course. Introduction Learn how to build a full-stack web application with the free, Next.js Foundations course. 1 Getting Started Create a new Next.js application using the dashboard starter example and explore the project. 2 CSS Styling Style your Next.js application with Tailwind and CSS modules. 3 Optimizing Fonts and Images Optimize fonts and images with the Next.js built-in components. 4 Creating Layouts and Pages Create the dashboard routes and a shared layout that can be shared between multiple pages. 5 Navigating Between Pages Learn how to use the &lt;Link&gt; component to navigate between pages. 6 Setting Up Your Database Setup a database for your application and seed it with initial data. 7 Fetching Data Learn about the different ways to fetch data in Next.js, and fetch data for your dashboard page using Server Components. 8 Static and Dynamic Rendering Understand how rendering works in Next.js, and make your dashboard app dynamic. 9 Streaming Improve your application&#x27;s loading experience with streaming and loading skeletons. 10 Adding Search and Pagination Add search and pagination to your dashboard application using Next.js APIs. 11 Mutating Data Mutate data using React Server Actions, and revalidate the Next.js cache. 12 Handling Errors Handle errors gracefully with error.tsx and notFound. 13 Improving Accessibility Implement server-side form validation and improve accessibility in your forms. 14 Adding Authentication Add authentication to protect your dashboard routes using NextAuth.js, Server Actions, and Proxy. 15 Adding Metadata Learn how to add metadata to your Next.js application. 16 Ne

#### https://github.com/vercel/next.js
Source: README.md

GitHub - vercel/next.js: The React Framework · GitHub Skip to content Navigation Menu Toggle navigation Sign in Appearance settings Platform AI CODE CREATION GitHub Copilot Write better code with AI GitHub Spark Build and deploy intelligent apps GitHub Models Manage and compare prompts MCP Registry New Integrate external tools DEVELOPER WORKFLOWS Actions Automate any workflow Codespaces Instant dev environments Issues Plan and track work Code Review Manage code changes APPLICATION SECURITY GitHub Advanced Security Find and fix vulnerabilities Code security Secure your code as you build Secret protection Stop leaks before they start EXPLORE Why GitHub Documentation Blog Changelog Marketplace View all features Solutions BY COMPANY SIZE Enterprises Small and medium teams Startups Nonprofits BY USE CASE App Modernization DevSecOps DevOps CI/CD View all use cases BY INDUSTRY Healthcare Financial services Manufacturing Government View all industries View all solutions Resources EXPLORE BY TOPIC AI Software Development DevOps Security View all topics EXPLORE BY TYPE Customer stories Events &amp; webinars Ebooks &amp; reports Business insights GitHub Skills SUPPORT &amp; SERVICES Documentation Customer support Community forum Trust center Partners View all resources Open Source COMMUNITY GitHub Sponsors Fund open source developers PROGRAMS Security Lab Maintainer Community Accelerator GitHub Stars Archive Program REPOSITORIES Topics Trending Collections Enterprise ENTERPRISE SOLUTIONS Enterprise platform AI-powered developer platform AVAILABLE ADD-ONS GitHub Advanced Security Enterprise-grade security features Copilot for Business Enterprise-grade AI features Premium Support Enterprise-grade 24/7 support Pricing Search or jump to... Search code, repositories, users, issues, pull requests... --> Search Clear Search syntax tips Provide feedback --> We read every piece of feedback, and take your input very seriously. Include my email address so I can be contacted Cancel Submit feedback Saved searches Use saved searches to filter your results more quickly --> Name Query To see all available qualifiers, see our documentation . Cancel Create saved search Sign in Sign up Appearance settings Resetting focus You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert {{ message }} vercel / next.js Public Notifications You must be signed in to change notification settings Fork 31.1k Star 140k Code Issues 2.1k Pull requests 1.8k Discussions Actions Security and quality 50 Insights Additional navigation options Code Issues Pull requests Discussions Actions Security and quality Insights vercel/next.js canary Branches Tags Go to file Code Open more actions menu Folders and files Name Name Last commit message Last commit date Latest commit History 34,073 Commits 34,073 Commits .agents/ skill

#### https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme
Source: README.md

New Project Skip to content New Project Let&#x27;s build something new Contact Form Image Editor Mini Game Finance Calculator Import Git Repository Import Import Import Import Import Clone Template AI/Agent Browse All Vibe Coding Platform An end to end text-to-app coding platform AI Gateway Demo An open-source AI chatbot built with Next.js, the AI SDK, and the AI Gateway. Install Coding Agent Plugin | Turn your coding agent into a Vercel expert. Simply copy and run this in your terminal to install the plugin. Available for Claude, Cursor and Codex. npx plugins add vercel/vercel-plugin Create Empty Project Skip Git setup and instantly access Web Analytics, Speed Insights, and other Vercel products. Create Empty Project Let&#x27;s build something new Contact Form Image Editor Mini Game Finance Calculator Import Git Repository Import Import Import Import Import Clone Template Filter Browse All

#### https://nextjs.org/docs/app/building-your-application/deploying
Source: README.md

Getting Started: Deploying | Next.js Skip to content Search documentation... Search... ⌘K Showcase Docs Blog Templates Enterprise Search documentation... Search... ⌘K Feedback Learn Menu Using App Router Features available in /app Latest Version 16.2.6 Getting Started Installation Project Structure Layouts and Pages Linking and Navigating Server and Client Components Fetching Data Mutating Data Caching Revalidating Error Handling CSS Image Optimization Font Optimization Metadata and OG images Route Handlers Proxy Deploying Upgrading Guides AI Coding Agents Analytics Authentication Backend for Frontend Caching (Previous Model) CDN Caching CI Build Caching Content Security Policy CSS-in-JS Custom Server Data Security Debugging Deploying to Platforms Draft Mode Environment Variables Forms How Revalidation Works ISR Instrumentation Internationalization JSON-LD Lazy Loading Development Environment Next.js MCP Server MDX Memory Usage Migrating App Router Create React App Vite Migrating to Cache Components Multi-tenant Multi-zones OpenTelemetry Package Bundling PPR Platform Guide Prefetching Preserving UI state Preventing Flash Production PWAs Public pages Redirecting Rendering Philosophy Sass Scripts Self-Hosting SPAs Static Exports Streaming Tailwind CSS v3 Testing Cypress Jest Playwright Vitest Third Party Libraries Upgrading Codemods Version 14 Version 15 Version 16 Videos View transitions API Reference Directives use cache use cache: private use cache: remote use client use server Components Font Form Component Image Component Link Component Script Component File-system conventions default.js Dynamic Segments error.js forbidden.js instrumentation.js instrumentation-client.js Intercepting Routes layout.js loading.js mdx-components.js not-found.js page.js Parallel Routes proxy.js public route.js dynamicParams maxDuration preferredRegion runtime Route Groups src template.js unauthorized.js Metadata Files favicon, icon, and apple-icon manifest.json opengraph-image and twitter-image robots.txt sitemap.xml Route Segment Config dynamicParams maxDuration preferredRegion runtime Functions after cacheLife cacheTag unstable_catchError connection cookies draftMode fetch forbidden generateImageMetadata generateMetadata generateSitemaps generateStaticParams generateViewport headers ImageResponse NextRequest NextResponse notFound permanentRedirect redirect refresh revalidatePath revalidateTag unauthorized unstable_cache unstable_noStore unstable_rethrow updateTag useLinkStatus useParams usePathname useReportWebVitals useRouter useSearchParams useSelectedLayoutSegment useSelectedLayoutSegments userAgent Configuration next.config.js adapterPath allowedDevOrigins appDir assetPrefix authInterrupts basePath cacheComponents cacheHandlers cacheLife compress crossOrigin cssChunking deploymentId devIndicators distDir env expireTime exportPathMap generateBuildId generateEtags headers htmlLimitedBots httpAgentOptions images cacheHandler inlineCss logging mdxRs onDemandEntri


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## DETECTED GAPS

No significant gaps detected.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END OF CLIPER CONTEXT DOCUMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
