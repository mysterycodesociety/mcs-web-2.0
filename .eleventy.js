const { DateTime } = require("luxon");
const slugify = require("slugify");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false,
  });

  // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Configuration API: use eleventyConfig.addLayoutAlias(from, to) to add
  // layout aliases! Say you have a bunch of existing content using
  // layout: post. If you don’t want to rewrite all of those values, just map
  // post to a new file like this:
  // eleventyConfig.addLayoutAlias("post", "layouts/my_new_post_layout.njk");
  eleventyConfig.addLayoutAlias("default", `layouts/default.njk`);

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getFilteredByGlob(["posts/*"]);
  });

  eleventyConfig.addCollection("pages", function (collection) {
    return collection.getFilteredByGlob(["pages/*md", "pages/*liquid"]);
  });

  eleventyConfig.addFilter("getBoard", function (arr) {
    return arr.filter((item) => item.group === "Board");
  });

  eleventyConfig.addFilter("getAdvisory", function (arr) {
    return arr.filter((item) => item.group === "Advisory");
  });

  eleventyConfig.addFilter("getVolunteers", function (arr) {
    return arr.filter((item) => item.group === "Volunteer");
  });

  // Universal slug filter strips unsafe chars from URLs
  eleventyConfig.addFilter("slugify", function (str) {
    return slugify(str, {
      lower: true,
      replacement: "-",
      remove: /[*+~.·,()'"`´%!?¿:@]/g,
    });
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_includes/assets/blog");
  eleventyConfig.addPassthroughCopy("_includes/assets/images");
  eleventyConfig.addPassthroughCopy("_includes/assets/scripts");

  // sync compiled css
  eleventyConfig.setBrowserSyncConfig({ files: "./_site/assets/styles/*.css" });

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let opts = {
    permalink: false,
  };

  eleventyConfig.setLibrary(
    "md",
    markdownIt(options).use(markdownItAnchor, opts)
  );

  return {
    templateFormats: ["md", "html", "liquid", "njk"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
