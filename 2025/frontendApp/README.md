# GraphQL Learning App

A test app for experimenting with GraphQL, Apollo Client, and Next.js. Just a playground to mess around with different concepts - nothing serious!

## What's This?

This is my learning sandbox for GraphQL and Apollo. It's a fake food product site where I can:

- Test GraphQL queries and mutations
- Play with Apollo Client features  
- Try out authentication flows
- Experiment with Next.js App Router
- Practice component patterns

The data is all fake and the "products" are just stock food images. Perfect for breaking things without consequences! 😄

## 🛠️ What I'm Playing With

- **Next.js 15** - App Router and all that
- **Apollo Client** - The main thing I'm learning
- **GraphQL** - Queries, mutations, the works
- **TypeScript** - Because I like types
- **Styled Components** - For styling
- **Redux Toolkit** - State stuff
- **Jest** - Testing when I remember to

## 🚀 Getting Started

Need Node.js v20.9.0 and Yarn. Then:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) and start breaking things!

## 📜 Useful Commands

- `yarn dev` - Start the app
- `yarn test` - Run tests (if you're into that)
- `yarn generate` - Generate GraphQL types
- `yarn lint` - Check your code

## 📁 Component Structure

All components follow a consistent pattern for maintainability and clarity:

```
ComponentName/
├── index.tsx              # Simple export wrapper
├── ComponentNameLogic.tsx # Main component logic and state
├── ComponentNameStructure.tsx # JSX structure and rendering
└── ComponentNameStyles.tsx # Styled components and CSS
```

### Example Component Structure
```tsx
// index.tsx
import React from 'react';
import ComponentNameLogic from './ComponentNameLogic';

const ComponentName = (props: any) => {
  return <ComponentNameLogic {...props} />;
};

export default ComponentName;
```

This pattern separates concerns cleanly:
- **Logic**: State management, event handlers, side effects
- **Structure**: JSX, props handling, component composition  
- **Styles**: Styled components, themes, responsive design
- **Index**: Clean public API for the component

## ⚡ Quick Notes

- Forms use FormData (no controlled inputs because why make life hard?)
- Auth state lives in Redux
- GraphQL types get auto-generated
- Components follow the Logic/Structure/Styles pattern

That's about it! It's just a playground, so feel free to experiment. 🧪