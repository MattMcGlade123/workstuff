'use client';

import {
  createTheme,
  defaultVariantColorsResolver,
  type MantineColorsTuple,
  parseThemeColor,
  type VariantColorsResolver,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  if (input.variant === 'processing') {
    return {
      background: 'var(--mantine-color-cyan-1)',
      hover: 'var(--mantine-color-yellow-7)',
      color: 'var(--mantine-color-cyan-9)',
      border: 'var(--mantine-color-cyan-2)',
    };
  }

  if (input.variant === 'closed' || input.variant === 'returned' || input.variant === 'refunded') {
    return {
      background: 'var(--mantine-color-pink-1)',
      hover: 'var(--mantine-color-green-7)',
      color: 'var(--mantine-color-red-9)',
      border: 'var(--mantine-color-pink-2)',
    };
  }

  if (input.variant === 'open' || input.variant === 'dispatched' || input.variant === 'delivered') {
    return {
      background: 'var(--mantine-color-green-1)',
      hover: 'var(--mantine-color-blue-7)',
      color: 'var(--mantine-color-green-9)',
      border: 'var(--mantine-color-green-2)',
    };
  }

  if (input.variant === 'exchanged') {
    return {
      background: 'var(--mantine-color-orange-1)',
      hover: 'var(--mantine-color-orange-7)',
      color: 'var(--mantine-color-orange-9)',
      border: 'var(--mantine-color-orange-2)',
    };
  }

  if (input.variant === 'ready-for-collection') {
    return {
      background: 'var(--mantine-color-blue-1)',
      hover: 'var(--mantine-color-blue-7)',
      color: 'var(--mantine-color-blue-9)',
      border: 'var(--mantine-color-blue-2)',
    };
  }

  if (input.variant === 'collected') {
    return {
      background: 'var(--mantine-color-violet-1)',
      hover: 'var(--mantine-color-violet-7)',
      color: 'var(--mantine-color-violet-9)',
      border: 'var(--mantine-color-violet-2)',
    };
  }

  if (input.variant === 'primaryButton') {
    return {
      background: 'var(--mantine-color-gray-8)',
      hover: 'var(--mantine-color-gray-9)',
      color: 'var(--mantine-color-white)',
      border: '1px solid transparent',
    };
  }

  if (input.variant === 'secondaryButton') {
    return {
      background: 'var(--mantine-color-kgCSRColours-7)',
      hover: 'var(--mantine-color-kgCSRColours-8)',
      color: 'var(--mantine-color-white)',
      border: '1px solid transparent',
    };
  }

  if (input.variant === 'menuButton') {
    return {
      background: 'transparent',
      hover: 'var(--mantine-color-white)',
      color: 'var(--mantine-color-white)',
      hoverColor: 'var(--mantine-color-black)',
      border: '1px solid transparent',
    };
  }

  return defaultResolvedColors;
};

/** Use with `<Button variant={buttonVariantPrimary} />` (charcoal CTA). */
export const buttonVariantPrimary = 'primaryButton' as const;
export const buttonVariantSecondary = 'secondaryButton' as const;
export const buttonVariantMenu = 'menuButton' as const;

const kgCSRColours: MantineColorsTuple = [
  '#ffeaee',
  '#fbd5d9',
  '#f2a9b1',
  '#e97a86',
  '#e25262',
  '#df394b',
  '#de2c3f',
  '#d12034', // KG Red ,kgCSRColours[7]
  '#b0172a',
  '#9b0923',
];

export const mainTheme = createTheme({
  colors: {
    kgCSRColours,
  },
  variantColorResolver,
});
