---
title: "Part 1: How I Built a homeserver / homelab"
excerpt: "Exploring the philosophy and personal motivations behind running a self-hosted homelab, and how it fosters digital ownership, privacy, and intentional technology use."
coverImage: "/assets/blog/homelab/two-door-policy.jpg"
date: "2025-06-15T00:00:00.000Z"
category: "Homelab"
author:
  name: "Apurva Shukla"
  picture: "/placeholder-profile.jpg"
ogImage:
  url: "/assets/blog/homelab/two-door-policy.jpg"
---
*This is part 1 of a series of posts about my homelab that explains the process of setting it up. [Part 2](/posts/live_part2_homelab) does into my motiviations, and [Part 3](/posts/live_part3_homelab) explains how I setup a two-door policy to secure it.*

For a long time, my digital life felt like I was just renting space. Two years ago, I realized I was paying for Netflix and Hulu, yet rarely watching anything that truly inspired me. I felt trapped by recommendation algorithms, so I switched to Stremio with RealDebrid. Cutting out streaming subscriptions was liberating—and nudged me closer to the world of self-hosting.

Lately, the fragmentation became impossible to ignore: bookmarks in one cloud, smart home routines in Philips Hue, reading lists in Obsidian, and more. My data was scattered across a dozen platforms, and any sense of control was just an illusion. That’s when I decided to buy a modest Cilate Mini PC (16GB RAM, 500GB SSD). I wasn’t aiming to build a data center—just to carve out a small, personal plot of digital land. This is the story of that homestead.

<img src="/assets/blog/homelab/ebay.png" alt="Ebay purchase screenshot" class="blog-image">
<small class="image-caption">$100 I'd spent again in a heartbeat</small>

<img src="/assets/blog/homelab/minipc.jpg" alt="Tiny little guy" class="blog-image">
<small class="image-caption">The tiny little guy.</small>

At the core of this mini PC is **Proxmox VE**. On it, a run a bunch of isolated services inside lightweight LXC containers. Each container has a clear purpose—a quiet stand against digital dependence:

<img src="/assets/blog/homelab/proxmox.png" alt="Proxmox virtual containers" class="blog-image">
<small class="image-caption">A mini-army of personal servers</small>

- **AdGuard Home:** The first seed. A network-wide DNS sinkhole that silenced ads and trackers on every device. More than blocking annoyances, it helped me reclaim my attention from the relentless noise of the commercial internet.
- **Home Assistant:** The homestead’s nervous system. It runs my home’s logic locally. If my ISP goes down, my lights still work. This local-first resilience is a cornerstone of the project.
- **Nginx Proxy Manager (NPM):** The front gate. A reverse proxy that turns clean, public-facing URLs into the right internal IPs and ports, wrapping everything in secure SSL certificates.
- **Karakeep & Calibre-Web:** My libraries—one for bookmarks, one for ebooks. Simple, open-source, and entirely mine. My data isn’t building a profile for someone else; it’s just my stuff.

Along this ride, I got sucked into the networking rabbit hole. I configured NPM to expose my services, creating subdomains like `home-assistant.ashukla.co` (*this is just an example - I am not revealing the real sub-domains*). This led to my first real lesson: the proxy chain. An “Error 400: Bad Request” from Home Assistant wasn’t a bug—it was a security feature. I had to learn about `trusted_proxies` and how to properly configure `configuration.yaml` to accept requests from my proxy.

Then came the “Wait a minute...” moment. I was about to expose my Proxmox admin panel the same way. That felt wrong. This led to the project’s central architectural decision: a **Two-Door Policy** (which I wrote more about [here](/posts/part3_homelab)).

For everyday apps, the NPM front gate is perfect. But for the keys to the kingdom—Proxmox and NPM’s admin panels—I needed a bank vault. I built this with **Cloudflare Tunnels**. The tunnel creates an outbound-only connection from a dedicated `cloudflared` container to Cloudflare. My firewall has zero open inbound ports. On top of this, I added a Cloudflare Access policy. Now, to even see the Proxmox login page, I have to authenticate with a one-time code sent to my email. Attackers can’t attack what they can’t see.

This process was a trial by fire in networking. I battled an “Error 525: SSL Handshake Failed” when accessing services from an IPv6 network, which taught me the crucial difference between Cloudflare’s SSL modes and led me to enforce Full (Strict). Each error was a breadcrumb to deeper understanding.

I didn’t do it alone. My pair programmer for this journey was Gemini. When I was stuck, I didn’t just ask for answers—I asked for explanations. “Explain this Error 525 to me like I’m a network packet.” “Act as a security architect and critique my plan for exposing Proxmox.” Gemini became a tireless Socratic partner, providing context and theory that let me debug and build with confidence. It wasn’t a crutch; it was a force multiplier for my curiosity.

This Mini PC is more than a server now. It’s a statement. With a bit of hardware and a lot of curiosity, you can build a corner of the internet that’s truly your own—secure, resilient, and free from digital landlords. It’s my digital homestead, and I’m still just breaking ground.