import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{jsx,tsx}'],

  theme: {
    colors: {
      transparent: 'transparent',
      background: {
        900: 'hsl(0 0% 3%)',
        700: 'hsl(0 0% 7%)',
      },
      foreground: 'hsl(0 0% 100%)',
      primary: 'hsl(160 100% 50%)',
    },

    gradientColorStops: {
      header: {
        from: '#43cea2',
        to: '#185a9d',
      },
    },
  },

  plugins: [],
} satisfies Config;
