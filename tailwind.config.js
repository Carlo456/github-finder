/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        myDark: {                          // Custom theme name
          "primary": "#a991f7",             // Primary color
          "primary-focus": "#8462f4",       // Primary focus color
          "primary-content": "#ffffff",     // Suitable text color for primary color background

          "secondary": "#f6d860",
          "secondary-focus": "#f3cc30",
          "secondary-content": "#202023",

          "accent": "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#202023",

          "neutral": "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",

          "base-100": "#202023",             // Main background color
          "base-200": "#2a2e37",
          "base-300": "#3d4451",
          "base-content": "#ebecf0",

          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
        }
      }
    ]
  },
}

