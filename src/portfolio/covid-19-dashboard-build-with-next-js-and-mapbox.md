---
title: COVID-19 Dashboard Build With Next.js and Mapbox
titleBeginning: ""
titleMiddle: "COVID-19 Dashboard Build With "
titleEnd: Next.js and Mapbox
teaserText: This dashboard shows relevant data to the spread of COVID-19 in
  Germany. It has a world map for a worldwide overview of cases, recovered, and
  death numbers. More data for each country is available on hover.
image: /assets/images/covid-dashboard-header.png
imageAlt: world map of the project
tags:
  - post
  - featured
  - javascript
  - react
  - next
  - api
technologies:
  - javascript
  - react
  - nextjs
accentColor: "#ff5d25"
---
As soon as I heard of Next.js, I was curious. The provided features are just incredible. Especially the option to use a specific rendering method on a component level made me think about possible use cases. So I planned a project utilizing multiple rendering methods from Next: A COVID-19 dashboard with data from the [Open Disease API](https://github.com/disease-sh/api). Planned features: a world map, line charts, and pie charts using Mapbox and Chart.js.
So far, the world map & an overview page has been finished.

## How Mapbox Works

To get Mapbox to work with Next properly, it has to run in the browser. To make that possible, the world map component is [imported dynamically](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr) to enable Client Side Rendering.
Another difference to normal React is that the map doesn't resize correctly in Next.js. As a workaround, I created an event listener keeping the map in shape when resizing the browser window.

The style of the map can be customized by using one of the [Mapbox-owned styles](https://docs.mapbox.com/api/maps/styles/#mapbox-styles) or creating a unique one with [Mapbox Studio](https://studio.mapbox.com/).

## The Current State of the Application

![animation showing the application when used](/assets/images/covid-dashboard.gif)

Since I'm still working on this project, feel free to revisit this post and have a look at the progress! To check the current state of development, head over to the [live demo](https://dashboard-covid19.vercel.app/worldmap) or [repository](https://github.com/Noevenzahn/covid-19-dashboard).