module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css")
    eleventyConfig.addWatchTarget("./src/css")
    eleventyConfig.addPassthroughCopy("./src/img")

    let handlebars = require("handlebars");
    eleventyConfig.setLibrary("hbs", handlebars);

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};