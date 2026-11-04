/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      colors: {
        'green' : '#2E4053',
        'greenish' : '#73A9AD',
        // Mesquite Estates luxury palette
        'ink' : '#16120F',
        'sand' : '#F6F1EA',
        'dune' : '#E9DFD1',
        'clay' : '#9A5A34',
        'clay-dark' : '#7A4426',
        'sage' : '#5F6B57',
        'mesa' : '#8A7D72',
        // 'blue' : '#2c3e50',
        // 'gray':'#888',
             },

            fontFamily: {
              workSans: ['"Work Sans"', 'sans-serif'],
              display: ['var(--font-display)', 'Georgia', 'serif'],
              sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
            },

    },
  },
  plugins: [],
}

