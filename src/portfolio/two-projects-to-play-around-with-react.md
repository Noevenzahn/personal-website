---
title: Two Projects to Play Around With React
titleMiddle: Two Projects to Play Around With
titleEnd: React
teaserText: React is one of the most influential React frameworks/libraries out
  there. Because most complex websites use a Framework like React, Vue, Angular,
  or else, I got my feet wet after feeling confident with JavaScript. These are
  two of my first steps with React!
image: /assets/images/two-projects-header.jpg
imageAlt: preview of two applications
tags:
  - post
  - featured
  - javascript
  - react
  - api
technologies:
  - javascript
  - react
accentColor: "#70e3e1"
---
## The Advice Machine

To get a deeper understanding of data fetching with React, I built a simple application that displays data from the [Advice Slip JSON API](https://api.adviceslip.com/). 
The application fetches one random piece of advice and displays it on the page. Underneath the text is a button to get a new one.
After some research, I decided to go with Axios because it's popular and commonly used with React.
The result:

![animation of advice application](/assets/images/advice.gif)

Want to take a look by yourself? Here's the [live demo](https://advice-please.netlify.app/).

## Counter With React useState Hook

The next application was a small playground for Reacts useState hook and built with a function component.
I liked working with function components and did use them ever since. Class components always felt quite clunky, especially when using state or props. 

![animation of counter application](/assets/images/counter.gif)

Here is the [live demo](https://randomcounter.netlify.app/) for the counter app. 

Both projects have a service worker delivering the minimum requirements needed to install them on my phone. Now I have two applications looking like native apps with very little configuration. Not bad!