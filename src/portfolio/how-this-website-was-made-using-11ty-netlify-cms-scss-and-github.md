---
title: How This Website Was Made Using 11ty, Netlify (CMS), SCSS, and GitHub
titleMiddle: How This Website Was Made Using
titleEnd: 11ty, Netlify (CMS), SCSS, and GitHub
teaserText: This project was a challenging one for me. As a designer coming up
  with a design for yourself can be difficult. On the coding side, it was an
  exciting journey with a lot of new concepts and technologies. And the result
  came out quite well!
image: /assets/images/portfolio-header.png
imageAlt: screenshot of the start page
tags:
  - post
  - featured
  - sass
  - javascript
technologies:
  - javascript
  - sass
accentColor: "#ff2232"
---

At the Design School, I had a course about CMS and web design. During our final project, we created a portfolio website for our design projects.
Since I am learning web development in my spare time, I decided to code the portfolio from scratch instead of choosing a non-code option like WordPress and Elementor.
I already heard that headless CMSs are out there, so I browsed through the web to find a suitable match for my project. I came across a lot of different options but decided to go with Netlify CMS for its simplicity and customizability. Because this is a larger project, I decided to go with SCSS. To gain some extra convenience, I threw Autoprefixer on top.
Since performance was an important criterion, I searched for a static site generator and stumbled upon [Kevin Powell's video](https://youtu.be/4wD00RT6d-g) about a JAMStack blog using 11ty and Netlify CMS. I liked what I saw, and my tech stack was complete!

So the idea is to put the source code to GitHub and connect it to Netlify. If I post something new, Netlify CMS changes the source code directly by adding or changing a markdown file. Netlify will register the change, start building the site again with 11ty, and within seconds, the new version will be live and deployed. Sounds great! Now, how does it work under the hood?

## How the Code Works

11ty supports various template languages. I decided to go with Nunjucks since it is a popular choice for 11ty.
Now it's possible to write more modular code: Layouts for pages or posts and components like the navigation or footer have their own file and can easily be included with Nunjucks where needed:

![screenshot showing nunjucks code](/assets/images/portfolio-nunjucks-code.png)

To keep the styling maintainable, I split the SCSS into multiple files. Now there's one component file and a corresponding SCSS styling file.
The posts are saved in Markdown files with a YAML frontmatter block. This data can be referenced with Nunjucks. The frontmatter comes from the data I type into the CMS, such as title, description, or thumbnail.
Speaking of which, can be easily customized in its config:

![screenshot showing the config.yml of the CMS](/assets/images/portfolio-cmsconfig-code.png)

The flexibility of easily changing the input fields and using widgets like the color picker or image widget is neat. It's even possible to create custom CSS styles for the preview shown when creating a post.

## Final Thoughts

All in all, I am satisfied with the outcome of the project. As time for the project was limited, I might add or change some things here and there. If you want to have a look at the source code, here's the GitHub [repository](https://github.com/Noevenzahn/personal-website).
