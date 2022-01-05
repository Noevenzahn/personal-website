---
title: What Does It Take To Build a Web Scraper?
titleMiddle: What Does It Take To Build a
titleEnd: Web Scraper?
teaserText: "Web scrapers are tools for extracting information from websites.
  Even though I didn't have anything in mind about what to do with it, I
  wondered how difficult it is to build one. Turns out: It's quite simple."
image: /assets/images/web-scraper-header.png
imageAlt: the first lines of code
tags:
  - post
  - featured
  - javascript
technologies:
  - javascript
accentColor: "#ffa56d"
---
All we need is Express.js for a node.js server, the cheerio package to pick out HTML elements on a website, and Axios for our requests.

Fetch the HTML of a website, load it in with cheerio, and give it a class that the elements have you're looking for. Now you can define a function and execute it on each element with that class. I took the text and link from each element and stored it in an array. That's it! Now console.log your results! 

![overview of the code](/assets/images/web-scraper-code.png)

If you want, you can go even further. Create routes and pass your data to the frontend! Here's [my repository](https://github.com/Noevenzahn/web-scraper) with the code I ended up with.