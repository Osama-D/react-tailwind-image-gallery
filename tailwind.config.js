module.exports = {
  content: [
    "./src/App.js",
    "./src/components/ImageSearch.js",
    "./src/components/ImageCard.js",
  ],
  theme: {
    extend: {
      colors: {
        red: "#F96167",
        yellow: "#FCE77D",
      },
      fontFamily: {
        body: ["Poppins"],
      },
      screens: {
        tall: { raw: "(max-width: 800px)" },
        tall1: { raw: "(max-width: 576px)" },
        tall2: { raw: "(max-width: 418px)" },
      },
    },
  },
  plugins: [],
};
