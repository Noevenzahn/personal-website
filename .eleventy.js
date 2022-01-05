module.exports = function(eleventyConfiq) {

    eleventyConfiq.addPassthroughCopy("./src/assets")
    eleventyConfiq.addPassthroughCopy("./src/admin")
    eleventyConfiq.addPassthroughCopy("favicon.ico")

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}