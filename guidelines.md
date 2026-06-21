# Portfolio V2 - Development Guidelines

This document outlines the code structure, quality standards, and modularization patterns used in this portfolio application. Use these guidelines when creating a similar codebase or maintaining this project.

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Project Structure](#project-structure)
3. [Code Organization](#code-organization)
4. [Styling Guidelines](#styling-guidelines)
5. [Component Patterns](#component-patterns)
6. [Type Safety](#type-safety)
7. [Development Workflow](#development-workflow)
8. [Best Practices](#best-practices)
9. [Dependencies Management](#dependencies-management)

---

## Technology Stack

### Core Framework
- **React 18.2.0** - Modern React with hooks and functional components
- **TypeScript 5.0.2** - Strict type checking enabled
- **Vite 4.4.5** - Build tool and dev server for fast development

### Routing
- **React Router DOM 6.15.0** - Client-side routing with nested routes

### Styling
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **PostCSS 8.4.29** & **Autoprefixer 10.4.15** - CSS processing
- **Custom Fonts**: Plus Jakarta Sans (headings) and Outfit (body text)

### UI Libraries
- **Radix UI** - Headless accessible UI components
  - `@radix-ui/react-dialog` - For sheet/modal components
- **Framer Motion 11.3.2** - Animation library for smooth transitions
- **Lucide React 0.407.0** - Icon library
- **class-variance-authority** - For component variant management
- **clsx** & **tailwind-merge** - Utility for className management

### Development Tools
- **ESLint** - Code linting with TypeScript and React plugins
- **Prettier** - Code formatting with Tailwind plugin for class sorting
- **Docker** - Containerization support

---

## Project Structure

```
portfolio-v2/
├── components/           # Reusable UI components
│   └── ui/              # UI primitive components
│       ├── sheet.tsx    # Modal/drawer component
│       ├── custom-cursor.tsx    # Custom cursor effect
│       ├── skills-section.tsx   # Skills display component
│       └── text-generate-effect.tsx  # Animated text effect
├── src/
│   ├── assets/          # Images, icons, and static files
│   ├── pages/           # Page-level components
│   │   ├── landing.tsx  # Landing/home page
│   │   └── projects.tsx # Projects showcase page
│   ├── App.tsx          # Root component with routing
│   ├── layout.tsx       # Layout wrapper with navigation
│   ├── main.tsx         # Application entry point
│   ├── project-card.tsx # Reusable project card component
│   ├── projects.ts      # Project data
│   ├── platforms.ts     # Social platform links data
│   ├── work-experience.ts # Work experience data
│   ├── index.css        # Global styles and Tailwind imports
│   ├── App.css          # Component-specific styles
│   └── gradient.css     # Gradient animation styles
├── utils/
│   └── cn.ts            # className utility function
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite build configuration
├── .eslintrc.cjs        # ESLint configuration
├── .prettierrc          # Prettier configuration
└── components.json      # Shadcn UI configuration
```

### Directory Organization Principles

1. **Separation of Concerns**:
   - `/components` - Reusable, generic UI components
   - `/src/pages` - Page-level components tied to routes
   - `/utils` - Pure utility functions
   - `/assets` - Static resources

2. **Data Separation**: 
   - Type definitions and data are in separate `.ts` files (e.g., `projects.ts`, `work-experience.ts`)
   - This keeps components clean and data easily maintainable

3. **Flat Structure**:
   - Avoid deep nesting where possible
   - Keep related files at the same level for easy discovery

---

## Code Organization

### File Naming Conventions

- **Components**: `kebab-case.tsx` (e.g., `project-card.tsx`, `text-generate-effect.tsx`)
- **Pages**: `kebab-case.tsx` (e.g., `landing.tsx`, `projects.tsx`)
- **Data files**: `kebab-case.ts` (e.g., `work-experience.ts`, `platforms.ts`)
- **Utilities**: `kebab-case.ts` (e.g., `cn.ts`)
- **Config files**: Follow standard conventions (e.g., `vite.config.ts`, `tailwind.config.js`)

### Component Structure

Components follow a consistent structure:

```tsx
// 1. Imports - external libraries first, then internal
import { motion } from "framer-motion";
import { ProjectCard } from "../project-card";
import { projects } from "../projects";

// 2. Component definition with TypeScript props
const ComponentName = ({ prop1, prop2 }: { prop1: string; prop2: number }) => {
  // 3. Hooks (if any)
  // 4. Event handlers
  // 5. Render logic
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 6. Export (default for pages, named for components)
export default ComponentName;
```

### Data Models

Data is structured with explicit TypeScript types:

```typescript
// Define type inline or separately
type ExperienceType = Array<{
  role: string;
  company: string;
  period: string;
  description: string;
}>;

// Export typed data
export const workExperience: ExperienceType = [
  // ... data
];
```

---

## Styling Guidelines

### Tailwind CSS Approach

1. **Utility-First**: Use Tailwind utility classes directly in JSX
2. **Responsive Design**: Mobile-first approach with breakpoints (`sm:`, `md:`, `lg:`)
3. **Dark Mode**: Class-based dark mode (`dark:` prefix)
4. **Custom Classes**: Only for complex or repeated patterns (defined in CSS files)

### Color System

Uses HSL-based CSS variables for theming:

```css
--background, --foreground
--primary, --primary-foreground
--secondary, --secondary-foreground
--muted, --muted-foreground
--accent, --accent-foreground
--card, --card-foreground
--border, --input, --ring
```

### Typography

- **Heading font**: `font-heading` (Plus Jakarta Sans)
- **Body font**: `font-sans` (Outfit)
- **Text sizes**: Responsive sizing with mobile-first approach
- **Font weights**: Semibold for headings, medium for body text

### Spacing & Layout

- **Consistent padding**: `px-6 lg:px-32` for main content areas
- **Grid layouts**: Used for responsive project cards
- **Flexbox**: Primary layout method for most components
- **Gap utilities**: For spacing between flex/grid items

### Animations

1. **Framer Motion**: Primary animation library
   - `initial`, `animate`, `whileInView` for scroll animations
   - `transition` for timing control
   - `motion.div` for animated containers

2. **Tailwind Transitions**: For simple hover effects
   - `transition-all`, `transition-transform`, `transition-colors`
   - `duration-{value}` for timing
   - `hover:` and `group-hover:` for interactive states

---

## Component Patterns

### Functional Components with TypeScript

All components are functional components using React hooks:

```tsx
const Component = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = React.useState(initialValue);
  
  return <div>{children}</div>;
};
```

### Props Definition

Props are defined inline with TypeScript:

```tsx
const ProjectCard = ({
  projectName,
  projectDesc,
  projectFrameworks,
  projectLink,
}: {
  projectName: string;
  projectDesc: string;
  projectFrameworks: Array<string>;
  projectLink?: string;  // Optional prop
}) => {
  // component logic
};
```

### Composition Patterns

1. **Layout Wrapper Pattern**: `layout.tsx` wraps all pages with navigation
2. **Render Props**: Not used; prefer composition with children
3. **Compound Components**: Used for UI components (e.g., Sheet components from Radix)

### State Management

- **Local State**: `useState` for component-specific state
- **No Global State Library**: Application is simple enough to not require Redux/Context
- **Props Drilling**: Acceptable for this small application

### Data Flow

1. **Data files** → 2. **Imported into components** → 3. **Mapped to UI elements**

Example:
```tsx
import { projects } from "../projects";

{projects.map((project) => (
  <ProjectCard key={project.name} {...project} />
))}
```

---

## Type Safety

### TypeScript Configuration

Strict mode enabled in `tsconfig.json`:

```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noFallthroughCasesInSwitch": true
}
```

### Type Definitions

1. **Explicit Types**: Define types for all data structures
2. **Array Types**: Use `Array<Type>` syntax
3. **Optional Properties**: Mark with `?`
4. **Type Inference**: Let TypeScript infer when obvious

### Common Patterns

```typescript
// Object arrays with explicit typing
const items: Array<{
  name: string;
  desc: string;
  link?: string;
}> = [];

// Component props
interface ComponentProps {
  title: string;
  count: number;
  optional?: boolean;
}

// Event handlers
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  // handler logic
};
```

---

## Development Workflow

### Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production (TypeScript check + Vite build)
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run deploy   # Build and deploy to GitHub Pages
```

### Development Server

- Vite dev server runs on `0.0.0.0:3000`
- Hot module replacement (HMR) enabled
- Fast refresh for React components

### Build Process

1. **TypeScript Compilation**: `tsc` runs first to check types
2. **Vite Build**: Bundles application for production
3. **Output**: `dist/` directory (gitignored)

### Linting & Formatting

**ESLint Rules**:
- `eslint:recommended`
- `@typescript-eslint/recommended`
- `react-hooks/recommended`
- Custom: `react-refresh/only-export-components`

**Prettier**:
- Tailwind plugin for automatic class sorting
- Applied to all `.ts`, `.tsx`, `.js`, `.jsx` files

### Docker Support

Basic Dockerfile provided for containerized development:
- Base: Alpine Linux
- Installs Node.js and npm
- Runs `npm run dev` in container

---

## Best Practices

### Component Design

1. **Single Responsibility**: Each component has one clear purpose
2. **Reusability**: UI components (like `ProjectCard`) are generic and reusable
3. **Props Over State**: Prefer controlled components
4. **Composition**: Build complex UIs from simple components

### Performance Optimization

1. **Code Splitting**: React Router handles page-level code splitting
2. **Lazy Loading**: Images load as needed
3. **Memoization**: Not currently used; application is performant without it
4. **Bundle Size**: Framer Motion is the largest dependency; used throughout

### Accessibility

1. **Semantic HTML**: Use appropriate HTML elements
2. **ARIA Labels**: Applied to interactive elements
   ```tsx
   <button aria-label="Toggle dark mode">
   <a aria-label="Contact" href="mailto:...">
   ```
3. **Keyboard Navigation**: Radix UI components handle keyboard interactions
4. **Color Contrast**: Dark mode support for accessibility

### File Organization

1. **Keep components focused**: Each file should have one primary export
2. **Separate data from presentation**: Data in `.ts` files, UI in `.tsx`
3. **Group related files**: Keep page components in `pages/`, UI components in `components/ui/`
4. **Avoid deep nesting**: Flat structure is easier to navigate

### Import Organization

Order imports in this sequence:
1. External libraries (React, third-party packages)
2. Internal components
3. Data/utility files
4. CSS files (if any)

```tsx
// External
import React from "react";
import { motion } from "framer-motion";

// Internal
import { ProjectCard } from "../project-card";

// Data
import { projects } from "../projects";

// Styles
import "./styles.css";
```

---

## Dependencies Management

### Core Dependencies Philosophy

1. **Minimal but Powerful**: Use well-maintained, popular libraries
2. **Prefer Libraries Over Custom Code**: For complex features (animation, UI primitives)
3. **Keep Updated**: Regular updates for security and features

### Key Libraries Justification

- **Framer Motion**: Industry-standard for React animations
- **Radix UI**: Accessible, unstyled components that work well with Tailwind
- **React Router**: De facto standard for React routing
- **Tailwind CSS**: Rapid UI development with utility classes

### Adding New Dependencies

Before adding a new dependency, ask:
1. Is this functionality achievable with existing dependencies?
2. Is the library well-maintained and popular?
3. Does it align with the current tech stack?
4. What's the bundle size impact?

### Version Management

- Use semantic versioning
- Pin major versions (e.g., `^18.2.0` allows minor/patch updates)
- Test thoroughly after updates
- Check for breaking changes in changelogs

---

## Additional Conventions

### CSS Class Naming

When creating custom CSS classes (in CSS files):
- Use kebab-case: `.contact-icon`, `.tech-card`
- Prefix with component name if component-specific
- Use Tailwind's `@layer` for proper specificity

### State Naming

```tsx
const [isDarkMode, setDarkMode] = useState(false);
const [isHovering, setIsHovering] = useState(false);
```
- Boolean states: Prefix with `is`, `has`, `should`
- Setter functions: `set` + state name

### Event Handler Naming

```tsx
const handleClick = () => { };
const handleSubmit = () => { };
const handleMouseEnter = () => { };
```
- Prefix with `handle` + event type

### Asset Management

- Icons/images stored in `src/assets/`
- SVGs preferred for icons (scalable, small size)
- Use external URLs for some assets (GitHub raw URLs)
- PDFs and other documents in assets folder

---

## Summary

This portfolio application demonstrates:

✅ **Modern React**: Functional components, hooks, TypeScript
✅ **Type Safety**: Strict TypeScript configuration
✅ **Modular Architecture**: Clear separation of concerns
✅ **Responsive Design**: Mobile-first Tailwind approach
✅ **Smooth Animations**: Framer Motion for interactions
✅ **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
✅ **Developer Experience**: Fast builds with Vite, ESLint, Prettier
✅ **Clean Code**: Consistent naming, file organization, component patterns

Use these guidelines as a reference when building similar React/TypeScript applications with Tailwind CSS and modern tooling.
