# mr-com-core Agent Guide

## Development Commands
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm start` - Start production server

## Key Technical Details
- Uses Next.js 13+ App Router with client components
- Implements Chakra UI v2 with @chakra-ui/next-js for proper Next.js integration
- Content Security Policy (CSP) includes `https://d3mmydk2yvkj9n.cloudfront.net` for Psychology Today badge
- Font configuration uses Roboto with `--font-roboto` CSS variable
- All Link components must use `@chakra-ui/next-js` instead of `next/link` for proper client-side rendering

## Architecture Notes
- Entry point: `app/page.tsx` (home page)
- Theme configuration in `app/theme.ts` with proper font variable references
- Client-side components require `'use client'` directive
- Contact form in `app/contact/` directory with centered layout and proper spacing
- Footer includes Psychology Today verification badge that loads from CloudFront

## Framework Quirks
- Chakra UI components in App Router require `'use client'` directive
- CSP headers must explicitly allow CloudFront domain for Psychology Today badge
- Font loading uses `@fontsource/roboto` with CSS variable approach
- Link components must use `@chakra-ui/next-js` for proper Next.js integration