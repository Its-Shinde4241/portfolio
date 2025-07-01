// tailwind.config.js
export default {
  theme: {
    extend: {
      writingMode: {
        vertical: "vertical-rl",
        "vertical-lr": "vertical-lr",
      },
      screens: {
        "xs": "480px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".writing-vertical-rl": { writingMode: "vertical-rl" },
        ".writing-vertical-lr": { writingMode: "vertical-lr" },
      });
    },
  ],
};
