---
title: COVID-19 Dashboard Build With Next.js and Mapbox
titleBeginning: ""
titleMiddle: "COVID-19 Dashboard Build With "
titleEnd: Next.js and Mapbox
teaserText: This map shows the worldwide spread of COVID-19 in relation to the
  selected data. More data for each country is available on hover. The project
  is still in development and will eventually evolve to a dashboard.
image: /assets/images/covid-dashboard-header.png
imageAlt: world map of the project
tags:
  - post
  - featured
  - javascript
  - react
  - next
  - api
  
accentColor: "#ff5d25"
---
As soon as I heard of Next.js, I wanted to use it. The features it provides are just incredible. Especially the option to use a specific rendering method on a component level made me think about possible use cases. So I planned a project utilizing multiple rendering methods from Next: A COVID-19 dashboard with data from the [Open Disease API](https://github.com/disease-sh/api). Planned features: a world map, line charts, and pie charts using Mapbox and Chart.js. 
Right now, the world map is already finished.

## How Mapbox Works

To get Mapbox to work with Next properly, it has to run in the browser. To enable that, the world map component is [imported dynamically](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr) to enable Client Side Rendering.
Another difference to normal React is that the map doesn't resize correctly in Next.js. To circumvent this, I created an event listener keeping the map in shape when resizing the browser window.

The style of the map can be customized by using one of the [Mapbox-owned styles](https://docs.mapbox.com/api/maps/styles/#mapbox-styles) or creating a unique one with [Mapbox Studio](https://studio.mapbox.com/).

## The Current State of the Application

![animation showing the application when used](/assets/images/covid-dashboard.gif)

Since I am still working on this project, feel free to revisit this post and have a look at the progress! To check the current state of development, head over to the [live demo](https://dashboard-covid19.vercel.app/worldmap) or [repository](https://github.com/Noevenzahn/covid-19-dashboard). 