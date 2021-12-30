---
title: React PWA
description: to keep an eye on the crypto market
teaserText: >-
  Utilizing the CoinGecko API, React, local storage, and a service worker, I've
  made a mobile-focused PWA.

  It was the first project with API calls depending and changing on user input that I created.
image: /asset/images/crypt-header.jpg
imageAlt: application to count or generate random numbers
tags:
  - post
  - featured
accentColor: "#66D7D7"
---
This React application fetches cryptocurrency prices from the [CoinGecko API](https://www.coingecko.com/), depending on the user input.
The user can save specific cryptocurrencies and keep track of their prices in his preferred Fiat currency. Because the state is saved in the local storage, the list stays there even on reload of the page.
A service worker with the bare minimum is included, so the application can be installed as a PWA on mobile devices. It's designed for mobile and if you want to get rid of a list item just double tap on it, and it will disappear.

It was my first project with API calls depending and changing on user input that I've created.
I learned a lot about data fetching, used local storage the first time, and discovered the possibility of creating PWAs.

Feel free to check out the [live demo](https://crypt.netlify.app/) and the [source code](https://github.com/Noevenzahn/crypt)!