const tokens = {
  "colors.primary": {
    "value": "#0FEE0F",
    "variable": "var(--colors-primary)"
  },
  "colors.secondary": {
    "value": "#EE0F0F",
    "variable": "var(--colors-secondary)"
  },
  "colors.grey.100": {
    "value": "#aaa",
    "variable": "var(--colors-grey-100)"
  },
  "colors.grey.200": {
    "value": "#eee",
    "variable": "var(--colors-grey-200)"
  },
  "colors.red.100": {
    "value": "#E54515",
    "variable": "var(--colors-red-100)"
  },
  "colors.red.200": {
    "value": "#F20A38",
    "variable": "var(--colors-red-200)"
  },
  "colors.blue.100": {
    "value": "#078EF8",
    "variable": "var(--colors-blue-100)"
  },
  "colors.purple.100": {
    "value": "#A53DF5",
    "variable": "var(--colors-purple-100)"
  },
  "colors.purple.200": {
    "value": "#4F1D75",
    "variable": "var(--colors-purple-200)"
  },
  "fonts.body": {
    "value": "system-ui, sans-serif",
    "variable": "var(--fonts-body)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "colors.text": {
    "value": "var(--colors-text)",
    "variable": "var(--colors-text)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.200": {
    "value": "var(--colors-color-palette-200)",
    "variable": "var(--colors-color-palette-200)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar