import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  conditions: {
    kg: '[data-theme=kg] &',
    sah: '[data-theme=sah] &'
  },

  // Useful for theme customization
  theme: {
    // 👇🏻 Define your tokens here
    tokens: {
      colors: {
        primary: { value: '#0FEE0F' },
        secondary: { value: '#EE0F0F' },
        grey: {
          100: { value: '#aaa' },
          200: { value: '#eee' }
        },
        red: {
          100: { value: '#E54515' },
          200: { value: '#F20A38' }
        },
        blue: {
          100: { value: '#078EF8' }
        },
        purple: {
          100: { value: '#A53DF5' },
          200: { value: '#4F1D75' }
        }
      },
      fonts: {
        body: { value: 'system-ui, sans-serif' }
      }
    },
    semanticTokens: {
      colors: {
        text: {
          value: {
            _kg: { base: '{colors.red.200}' },
            _sah: { base: '#333' }
          }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
})