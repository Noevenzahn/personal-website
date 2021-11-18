module.exports = function(eleventyConfiq) {

    eleventyConfiq.addPassthroughCopy("./src/assets")

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}