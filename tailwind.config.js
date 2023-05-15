import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  content: ['./src/**/*.{svelte,js,ts}'],
  daisyui: {
    themes: ["cupcake", "dark", "dracula"],
  }
}
