---
title: "Uses This"
excerpt: "A deeper exploration of my tech stack, hardware, and services I use daily."
coverImage: "/assets/profile/profile.jpg"
date: "2024-07-29T12:00:00.000Z"
draft: false
author:
  name: "Apurva Shukla"
  picture: "/assets/profile/profile.jpg"
ogImage:
  url: "/assets/profile/profile.jpg"
---
### Hardware

- [Macbook Pro 14"](https://www.apple.com/macbook-pro-14/)
  - My daily driver for work and personal projects.
  - For some reason, I got an Asus 15 inch gaming laptop during business school, and that was a huge mistake. The Asus software was ass, the battery life sucked and most critically, I never played any games.
- [Mini PC]() 
  - Reddit recommended that I get a mini PC over a Raspberry Pi for setting up Home Assistant, and I'm glad I made that choice.
  - For $90, I got a used Cilate Mini PC (Intel N100, 16GB RAM, 500GB SSD). I had never heard of this company before, but it has worked out great. 
  - This is my first mini PC, and I am excited to try another one in the future. I think getting a cheap one is a great way to get into Linux. 
- [KeyCron K11 Max](https://www.keychron.com/products/keychron-k11-max-qmk-via-wireless-custom-mechanical-keyboard?variant=41140535361625)
  - This is my current daily driver keyboard that I got before I fully switched to a split keyboard. 
  - The Alice style took around a week of work to get used to, but I love it now. Surprisingly, I can still type normally on a standard laptop keyboard.
  - The most enjoyable bit about the keyboard (apart from the slight thock sound) has been the ability to program it via QMK.
  - I have a few layers, but wish it was possible to access QMK wirelessly. My hesitation to plug it in has prevented me from customizing it even more. 
- [Apple Magic Mouse 3](https://www.apple.com/magic-mouse-3/)
  - The only bit I like about the mouse is the ability to trigger shortcuts from BetterTouchTool. Strongly considering giving MX Master 3S a try.
- [Herman Miller Embody Chair](https://www.hermanmiller.com/products/seating/embod-chair)
  - I got this chair six months ago, and it's been alright. I use Aeron at work, and I like its mesh back and plushy arm rests a lot more.

### MacOS applications (ORDER BY VALUE DESC)

- [BetterTouchTool](https://folivora.ai/bettertouchtool)
  - My #1 app for customizing my keyboard, trackpad and Magic Mouse. I gladly paid for a lifetime license (and would pay it several times over if need be).
  - I have tons of custom shortcuts at global, application, and window levels.
- [Raycast](https://www.raycast.com/)
  - The app launcher I use to manage my apps.
  - I have set up a bunch of custom commands for it, but the default ones are great as well. 
  - I also pay for Raycast Pro, and enjoy the AI chat features that allow me to define models <> tasks pairs.
- [Cursor](https://www.cursor.com/)
  - The AI-powered code editor I use to write code.
  - Hard to imagine living without it now. I am on an elite business plan through work, but would likely pay $20/month for a personal plan if need be.
- [Yabai](https://github.com/koekeishiya/yabai)
  - The window/tiling manager I use to manage my windows. I don't know how I lived without it. I love MacOS, but never liked how disorganized the window management was. Yabai fixed that for me. 
  - It's possible to customize it a lot, however I have a rather simple setup developed over an hour on a weekend.
- [VoiceInk](https://voiceink.app/)
  - My preferred voice to text app. I liked Superwhisper but did not want to pay a subscription fee. VoiceInk has a generous free tier, but I paid for a lifetime license for me and my partner. 
- [HomeRow](https://home-row.app/)
  - I use it as a launcher for triggering any action on my screen.
  - It's a delight to use and somehow not widely known.
- [Skhd](https://github.com/koekeishiya/skhd)
  - From the same developer as Yabai, this is the keyboard shortcut manager I use to manage Yabai. 
  - I have multiple layers on my keyboard, as well as two thumb keys which I use to navigate between windows and spaces. 
- [Calibre](https://calibre-ebook.com/)
  - I've been a user for over a decade now, ever since I got my first Kindle.
  - I don't think I've explored all its bells and whistles, but it's never failed on me and helps me manage my +700 ebooks.
- [Obsidian](https://obsidian.md/)
  - My preferred note-taking app. I've been an early user, and will likely never switch. Sorry Notion.

### Homelab software

- [Proxmox VE](https://www.proxmox.com/en/)
  - The virtual machine manager I use to run my homelab. The UI was a bit unnerving for a first-timer, but I got the hang of it.
  - It was a Reddit recommendation for running a homelab, and has been a solid choice so far. 
- [AdGuard Home](https://adguard.com/en/adguard-home/overview.html)
  - This was reason #1 I got a mini PC. I watched a video of Pi-hole 10 years ago, and since then have wanted to set up DNS blocking on my home-network. 
  - I use Verizon Fios here in NYC, and the provided router is a piece of shit.
  - At the moment, most of my home devices send their DNS requests to the router, which forwards them to AdGuard Home. This prevents me from seeing which device is making which request.
  - For now, getting my AdGuard to be the DHCP server is a work in progress.
- [Home Assistant](https://www.home-assistant.io/)
  - This is reason #2 I got a mini PC. I've been watching home automation videos on YouTube for the better part of a decade, and I finally decided to give it a try when my life got more stable.
  - I haven't yet built any significant automations, and have a bunch of sensors I'm yet to install, but I'm excited to see what I can do with it.
- [Nginx Proxy Manager](https://nginxproxymanager.com/)
  - I had read about Nginx when I did my network-security internship at Google. At that moment, the concept of a reverse proxy was a bit foreign to me.
  - I am amazed that I was able to get a simple version of it running on my mini PC to manage my home-network.
- [Cloudflare](https://www.cloudflare.com/)
  - An unintended side-effect of my Google internship was that I had to learn a lot about Cloudflare.
  - And everything I read about them, made me want to use them lmao. 
  - So in Jan 2025, when I bought this [domain](https://www.ashukla.co), I purchased it from Cloudflare and currently use them for DNS routing, SSL certificates, Zero-trust network, cloudflared tunnels - all on their generous free tier.
  - I am LONG on $NET.
- [Karakeep](https://karakeep.com/)
  - The need for a locally hosted bookmarks manager came from never having 1 "good enough" content aggregating service (Obsidian Web Plugin came close, but it does not have mobile support)
  - I found Karakeep dicking around on the internet, and it has been a great find. The developer has clearly made the product with "taste", and it has met all my needs.
  - As it is self-hosted, and stores all its data locally on my mini PC, I am not worried about subscription fees, or longevity of the product anymore (RIP Pocket).
- [Vercel](https://vercel.com/)
  - I use Vercel to host this website. I only chose them because I felt there would be some Next.js and Vercel synergies.
  - The product has been a delight to use, and I've enabled their analytics and speed insights on this website too.
  - I am not sure if I will ever pay for their pro plan, but I am also not sure if I will ever pay for any other hosting service either.