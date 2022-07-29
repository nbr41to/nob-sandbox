module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
  corePlugins: {
    preflight: false, // mantine と競合するため ResetCSS を無効化
  },
};
