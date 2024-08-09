/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/**/*.{js,vue,ts}",
    "./pages/**/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        'st-h1': ['32px', '110%'],
        'st-h2': ['28px', '110%'],
        'st-t1': ['28px', '120%'],
        'st-t2': ['22px', '140%'],
        'st-b1': ['16px', '140%'],
        'st-b2': ['14px', '140%'],
        'st-c': ['12px', '140%']
      },
      spacing: {
        'st-1': '4px',
        'st-2': '8px',
        'st-3': '16px',
        'st-4': '24px',
        'st-5': '48px'
      }
    },
  },
  plugins: [],
}

