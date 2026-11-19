# @ui-kit/core

Reusable React component library built with TypeScript.

## Overview

`@ui-kit/core` is a reusable UI component library designed to provide consistent, accessible, and customizable interface elements for React applications.

The library includes:
- Reusable React components.
- TypeScript definitions.
- Themeable styles based on CSS custom properties.
- Component documentation and examples in Storybook.

## Tech stack

- **React** — UI library (React 18 and 19).
- **TypeScript** — static typing.
- **Vite** — library bundling.
- **CSS** — styling and design tokens.
- **Storybook** — component documentation and development.
- **Floating UI** — positioning and interaction primitives.

## Installation

Install the package:

```bash
npm install @ui-kit/core
```

Make sure your application uses React 18 or 19.

## Usage

Import components from the package:

```tsx
import { Button } from '@ui-kit/core';
import '@ui-kit/core/style.css';

function App() {
  return (
    <Button>
      Click me
    </Button>
  );
}
```

## Theming

The library uses CSS custom properties to define design tokens and semantic colors.

Import the stylesheet containing the default theme:

```tsx
import '@ui-kit/core/style.css';
```

Theme variables can be overridden at the application level:

```css
:root {
  --color-primary: #367c78;
  --color-primary-hover: #418c86;
}
```

The library supports light and dark theme configurations through the `data-theme` attribute:

```html
<html data-theme="dark">
```

## Development

Clone the repository and install dependencies:

```bash
npm install
```

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development mode with watch |
| `npm run build` | Build the library |
| `npm run typecheck` | Run TypeScript checks |
| `npm run lint` | Run ESLint |
| `npm run format` | Format source files |
| `npm run test` | Run tests |
| `npm run storybook` | Start Storybook |
| `npm run build-storybook` | Build Storybook |

### Build

```bash
npm run build
```

The build output is generated in the `dist/` directory.

It includes:
- Compiled JavaScript modules.
- TypeScript declaration files.
- Library stylesheets.

## Storybook

Storybook is used to develop, explore, and document components independently from the consuming application.

Start Storybook:

```bash
npm run storybook
```

By default, it runs at:

```text
http://localhost:6006
```

Build the static Storybook documentation:

```bash
npm run build-storybook
```

## Project structure

```text
src/
├── components/       # UI components
├── features/         # Feature-specific modules
├── styles/           # Design tokens and themes
├── types/            # Shared TypeScript types
└── index.ts          # Public API

.storybook/           # Storybook configuration
dist/                 # Build output
```

## Package

Package name: `@ui-kit/core`

Current version: `1.0.0`

Module format: ESM

Peer dependencies:
- React 18+
- React DOM 18+

## License

Add license information here.
