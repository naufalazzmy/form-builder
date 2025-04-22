// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  safelist: [
    {
      pattern: /col-span-(1[0-2]|[1-9])/, // col-span-1 sampai col-span-12
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
