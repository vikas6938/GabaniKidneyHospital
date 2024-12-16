module.exports = {
    content: [
      './*.html', // Include all HTML files in the root directory
      './components/**/*.html', // Include all HTML files in the components folder
      './assets/js/**/*.js', // Include JavaScript files for dynamic class usage
    ],
    theme: {
      extend: {
        colors: {
          primary: "#009DDD",
          secondary: "#747474",
        },
        spacing: {
          240: "240px",
          40: "40px",
        },
        maxWidth: {
          container: "1440px",
        },
        fontFamily: {
          barlow: ["'Barlow Condensed'", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  