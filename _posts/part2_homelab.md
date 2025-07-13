---
title: "Part 2: Why I Built a homeserver / homelab"
excerpt: "Exploring the philosophy and personal motivations behind running a self-hosted homelab, and how it fosters digital ownership, privacy, and intentional technology use."
coverImage: "/assets/blog/homelab/two-door-policy.jpg"
date: "2025-06-20T00:00:00.000Z"
category: "Homelab"
author:
  name: "Apurva Shukla"
  picture: "/placeholder-profile.jpg"
ogImage:
  url: "/assets/blog/homelab/two-door-policy.jpg"
---
In my last [post](/posts/part1_homelab), I detailed the **how** of my homelab setup—the dual-access system of reverse proxies and Cloudflare Tunnels that securely opened my digital world. But the how is only half the story. The more interesting question is the **why**. Why spend hours wrangling YAML files and IP addresses when I could just click "subscribe" on a dozen different cloud services?

## Digital De-Growth and Ownership

The answer, for me, lies in a philosophy of digital de-growth and ownership. It’s not about rejecting technology, but about cultivating it intentionally, like a garden. In a world that pushes us to constantly consume, my Proxmox server has become a digital homestead—a small plot of the internet that is entirely my own. And on this plot, I’ve planted a few core, open-source services that have fundamentally changed my relationship with technology.

## Silence: Reclaiming Attention

It all starts with silence. The first service I deployed was **AdGuard Home**, a network-wide DNS sinkhole. With one LXC container, I silenced the constant, nagging chatter of advertisements and trackers across every device in my home. This wasn't just about blocking annoyances; it was about reclaiming my attention. It’s a small act of defiance that creates a pocket of digital tranquility, proving that a quieter internet is not only possible, but achievable.

## Resilience: Home Assistant as the Central Nervous System

If AdGuard is the gatekeeper, **Home Assistant** is the central nervous system. This incredible open-source platform orchestrates my entire smart home, from lights to sensors. But its real power isn't just automation; it's resilience. My home runs on my terms, locally. If my internet connection goes down, my lights don't suddenly become dumb. This local-first approach is the antithesis of the cloud-dependent gadgets that turn into expensive paperweights without a constant link back to a corporate server. It's a declaration that my home's logic belongs in my home.

## Intentional Tools: Owning My Data

This philosophy extends to the smallest corners of my digital life. I used to use services like Pocket to save articles, feeding my curiosity into yet another algorithm. Now, I run **Karakeep**, a simple, self-hosted bookmarking service. It’s nothing fancy, but it’s mine. The links I save build a private library of my own interests, not a profile to be monetized. It’s a small shift from being a data point to being a librarian of my own mind.

## The Journey: Becoming More Than a Developer

Of course, the journey itself was the real reward. Building this homestead forced me to become more than just a developer. I wasn't just installing apps; I was becoming a sysadmin, a network engineer, and a security architect. The abstract concepts from tutorials suddenly became tangible realities. I wrestled with DNS propagation, configured firewall rules, learned the crucial difference between containers and VMs, and navigated the intricate dance of a multi-layered proxy chain. The "400 Bad Request" errors weren't bugs; they were lessons in how applications establish trust.

## Conclusion: A Conscious Choice

<img src="/assets/blog/homelab/proxmox.png" alt="Proxmox virtual containers" class="blog-image">
<small class="image-caption">A mini-army of personal servers</small>

My Proxmox server isn't just a powerful machine running in a corner. It's a conscious choice—a vote for open-source communities, for data privacy, and for a deeper understanding of the technology that shapes our lives. It’s my workshop, my classroom, and my quiet corner of the internet. And it all started with wanting to own a little piece of it for myself.