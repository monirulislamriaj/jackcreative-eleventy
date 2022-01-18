module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("scss");
  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      include: "includes",
    },
  };
};