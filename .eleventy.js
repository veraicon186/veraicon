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
    //zkopírovat favicon soubory
    eleventyConfig.addPassthroughCopy("web-app-manifest-512x512.png");
    eleventyConfig.addPassthroughCopy("web-app-manifest-192x192.png");
    eleventyConfig.addPassthroughCopy("site.webmanifest");
    eleventyConfig.addPassthroughCopy("favicon.svg");  
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("favicon-96x96.png");
    eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
    

  


   


   
   return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md"],
    // jako šablonovací jazyk zvolíme Nunjucks`
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
  
};
