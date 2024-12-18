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
    eleventyConfig.addPassthroughCopy("favicon");
   
    

  


   


   
   return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md"],
    // jako šablonovací jazyk zvolíme Nunjucks`
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
  
};
