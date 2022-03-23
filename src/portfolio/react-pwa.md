---
title: React PWA to Keep an Eye on the Crypto Market
titleBeginning: React PWA
titleMiddle: to Keep an Eye on the Crypto Market
image: /assets/images/crypt-pwa-header.jpg
imageAlt: application for exchange rates of crypto currencies
tags:
  - post
  - featured
  - javascript
  - react
  - api
technologies:
  - javascript
  - react
accentColor: "#beb9ff"
description: to keep an eye on the crypto market
teaserText: >-
  Utilizing the CoinGecko API, React, local storage, and a service worker, I've
  made a mobile-focused PWA.

  It was the first project with API calls depending and changing on user input that I created.
---
This React application fetches cryptocurrency prices from the [CoinGecko API](https://www.coingecko.com/), depending on the user input. The user can save specific cryptocurrencies and keep track of their prices in his preferred Fiat currency. Because the state is saved into local storage, the list stays even on page reload. A service worker with the bare minimum is included, so the application can be installed as a PWA on mobile devices. It's designed for mobile and if you want to get rid of a list item just double tap on it, and it will disappear.

![live demo animation of the application](/assets/images/crypt-pwa.gif)

I learned a lot about data fetching, used local storage the first time, and discovered the possibility of creating PWAs.
Feel free to check out the [live demo](https://crypt.waberski.io/) and the [source code](https://github.com/Noevenzahn/crypt)!