# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**AI.mation Landing Page** - A professional landing page for AI.mation, a business focused on AI integration and Microsoft Copilot training for SMEs (small and medium enterprises).

**Tagline:** "Automatisierung mit Intelligenz" (Automation with Intelligence)

**Target Audience:** SMEs and small businesses (NOT corporations)

## Project Architecture

This is a landing page project designed to be implemented using **HTML + Tailwind CSS + Vanilla JavaScript**. The project is currently in planning phase with a comprehensive specification document available.

### Planned Tech Stack

- **HTML5:** Semantic markup for SEO
- **Tailwind CSS (via CDN):** Utility-first CSS framework
- **Vanilla JavaScript:** For interactions (hamburger menu, smooth scrolling, form validation)
- **Optional:** Alpine.js for reactive UI components (lightweight)

### File Structure (Planned)

```
/
├── index.html          # Main landing page
├── assets/
│   ├── images/        # Images and graphics
│   └── icons/         # Icon assets
├── README.md          # Basic project info
├── AI-MATION-LANDING-PAGE-PLAN.md  # Comprehensive project specification
└── CLAUDE.md          # This file
```

## Core Design System

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Navy** | #031d44 | Primary color, header background, section headings, navigation, footer |
| **Light Blue** | #60AFFF | Accents, icons, hover effects, highlights, service card borders |
| **Magenta** | #f90093 | ALL CTAs (buttons), important highlights, active states |
| **White** | #ffffff | Main background, text on dark areas, card backgrounds |
| **Black** | #071013 | Main text, body copy, icons |

### Design Principles

1. **Minimalist but impactful:** Generous whitespace, clear hierarchy
2. **Strong typography:** Large, bold headlines (48-72px desktop), clear font hierarchy
3. **Subtle animations:** Fade-ins, parallax, hover effects (not overdone)
4. **Modern shapes:** Asymmetric layouts, rounded corners (8-16px), glassmorphism effects
5. **Color strategy:** Focus on 2-3 main colors, strategic accent placement

### Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

**Approach:** Mobile-first design that scales up

## Landing Page Structure

The landing page consists of 7 main sections (see AI-MATION-LANDING-PAGE-PLAN.md:33 for full details):




## Content Strategy
1
### Tone of Voice

- **Du-Ansprache** (informal "you" in German) throughout for relatability
- Professional but accessible - no buzzwords or hollow phrases
- Concrete & solution-oriented - focus on measurable results
- Trust-building - show expertise without bragging

### Key Messaging

- **Primary Value Proposition:** Help SMEs fully integrate AI into their business processes - practical, fast, without corporate overhead
- **Core Services:** Microsoft Copilot training, process automation (make.com/n8n), agentic systems, custom AI solutions
- **Differentiation:** No corporate consulting, no jargon, only measurable results

### CTA Strategy

1. **Primary CTA:** "KOSTENLOSES ERSTGESPRÄCH BUCHEN" (Book free initial consultation) - Magenta button
2. **Secondary CTA:** "KI-POTENZIAL ANALYSIEREN" (Analyze AI potential) - Lead magnet form
3. **Tertiary CTAs:** "Mehr erfahren" links, "Alle Artikel ansehen" - Light blue ghost buttons

## Important Notes

### What This Project Is

- Landing page for AI integration and training services for SMEs
- Focus on Microsoft Copilot training, automation, and custom AI solutions
- German language content (primary market)
- Professional, world-class design to build trust

### What This Project Is NOT

- NOT focused on corporations/large enterprises
- NOT connected to owner's full-time job (acoustics/simulation)
- NOT using generic marketing phrases
- NOT a complex web application (simple static landing page)

## Development Guidelines

### When Implementing

1. **Use semantic HTML5** for SEO benefits
2. **Apply Tailwind utility classes** consistently following the color scheme
3. **Ensure mobile-first responsive design** - test on all breakpoints
4. **Add subtle animations** using Intersection Observer for scroll-based reveals
5. **Optimize for performance** - lazy loading images, minified assets
6. **Include SEO meta tags** as specified in AI-MATION-LANDING-PAGE-PLAN.md:730

### SEO Considerations

- **Meta Title:** "AI.mation – KI-Integration & Microsoft Copilot Training für KMUs"
- **Meta Description:** "Wir helfen KMUs, künstliche Intelligenz in Geschäftsprozesse zu integrieren. Microsoft Copilot Training, KI-Automatisierung & Custom AI-Lösungen."
- **Target Keywords:** KI-Integration, Microsoft Copilot Training, KI-Automatisierung für KMUs, AI-Beratung, Generative KI Schulung

### Form Implementation Note

The lead magnet form is initially non-functional (visual design only). Backend integration will be added later using webhook/API or email service (EmailJS, Formspree suggested).

## Deployment Strategy

**Recommended Platforms:** Netlify or Vercel (free tier for landing pages)

**Deployment Process:**
1. Create GitHub repository
2. Push code
3. Connect Vercel/Netlify for auto-deploy on commits
4. Connect custom domain (ai-mation.de)

## Reference Documentation

For complete project specifications, color usage per section, detailed content copy, and design mockup requirements, refer to:

**AI-MATION-LANDING-PAGE-PLAN.md** - Comprehensive 850+ line project plan covering:
- Detailed section layouts and content
- Color usage strategies per section
- Copywriting and messaging guidelines
- Technical implementation recommendations
- Design inspiration and principles
- Performance and SEO requirements

## Current Project Status

**Phase:** Planning complete, ready for implementation

**Next Steps:**
1. Create index.html with Tailwind CSS setup
2. Implement sections iteratively (Hero → Problem/Solution → Services → Training → Blog → Form → Footer)
3. Add styling and interactivity
4. Polish with animations and micro-interactions
5. Test responsive design across devices
6. Deploy to Vercel/Netlify
