module.exports = function(eleventyConfig) {
  // Výchozí výstupní složka je: _site
  // Zkopírovat images/ do _site/images
  eleventyConfig.addPassthroughCopy("images");
  // Zkopírovat css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPassthroughCopy("siema.min.js"); 
  eleventyConfig.addPassthroughCopy("fslightbox.js");
  // eleventyConfig.addPassthroughCopy("glide.min.js");
  eleventyConfig.addPassthroughCopy("languageToggle.js");
  // Zkopírovat favicon soubory
  eleventyConfig.addPassthroughCopy("favicon");

  eleventyConfig.addPassthroughCopy("en");
 
  return {
      // Možné formáty šablon
      templateFormats: ["njk", "html", "md"],
      // Jako šablonovací jazyk zvolíme Nunjucks
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    
      // Zajistí generování adresářů s lomítkem
      // trailingSlash: "never"
  };
};
