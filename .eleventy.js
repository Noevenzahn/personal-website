module.exports = function(eleventyConfiq) {

    eleventyConfiq.addPassthroughCopy("./src/assets")
    eleventyConfiq.addPassthroughCopy("./src/admin")

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}