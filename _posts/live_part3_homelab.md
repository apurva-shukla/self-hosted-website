---
title: "Part 3: The Two-Door Policy: Securing My Homelab"
excerpt: "How I used Nginx Proxy Manager and Cloudflare Tunnels to balance easy access and strong security in my self-hosted homelab."
coverImage: "/assets/blog/homelab/two-door-policy.jpg"
date: "2025-07-01T00:00:00.000Z"
category: "Homelab"
author:
  name: "Apurva Shukla"
  picture: "/placeholder-profile.jpg"
ogImage:
  url: "/assets/blog/homelab/two-door-policy.jpg"
---
My Proxmox server was humming along, a happy little digital garden of self-hosted services. Home Assistant was managing my smart home, Ad Guard was silencing ads, and a dozen other containers were waiting for their turn to be useful. There was just one problem: my garden was walled off. All these fantastic services were trapped on my local network, inaccessible from the outside world.

It was time to build a door.

## Opening the Front Door: Nginx Proxy Manager

My initial plan was straightforward. I set up a new Proxmox LXC container to run **Nginx Proxy Manager (NPM)**, my new digital traffic cop. After pointing my domain (⁠ashukla.com) to my home IP via Cloudflare, I configured NPM to route subdomains to the right internal services.  
- `ha.ashukla.co` would point to Home Assistant's IP and port  
- `kara.ashukla.co` to my bookmarking service
- and so on.

NPM handled the SSL certificates automatically, transforming ugly `http://192.168.x.x:port` addresses into clean, secure `https` URLs. After some satisfying troubleshooting—getting Home Assistant to trust my proxy's `X-Forwarded-For` headers—the front door to my lab was officially open for business.

## The Need for a Vault: Protecting Critical Infrastructure

Then, a sobering thought hit me. I was about to do the same for my Proxmox admin panel. The idea of putting the management interface for my entire virtualized environment on the public internet, protected only by a username and password, felt deeply wrong. That's not just leaving a door open; it's leaving the master keys to the entire building on the front porch. A line had to be drawn. I needed a different kind of door for my critical infrastructure—not a front door, but a bank vault.

## Enter the Vault Door: Cloudflare Tunnels

This is where my dual-access system was born. For my Proxmox panel, I turned to **Cloudflare Tunnels**. Unlike a reverse proxy that requires an open inbound port on my firewall, a tunnel establishes an outbound-only connection from a lightweight connector on my network to Cloudflare. My firewall remains completely sealed. No open ports, no attack surface.

The real magic, however, is the security layer on top. I wrapped the tunnel in a **Cloudflare Access policy**. Now, when I navigate to `vm.ashukla.co`, I don't see the Proxmox login. Instead, I'm greeted by Cloudflare, demanding I authenticate with my email via a one-time passcode. Only after I prove who I am does Cloudflare permit me to see the Proxmox login page. An attacker can't even try to guess my password because they'll never get past the bouncer.

## The Two-Door Policy: Summary

What I've ended up with is a two-door policy for my homelab:

- **The Front Door (Nginx Proxy Manager):** Convenient, SSL-secured access for trusted, everyday applications.
- **The Vault Door (Cloudflare Tunnel):** Ironclad, zero-trust security for the keys to the kingdom.

This hybrid approach gives me the best of both worlds: frictionless access when I need it, and uncompromising security where it matters most.

---

Now that the foundation is solid, what’s next? Well, `ashukla.com` needs a website, doesn't it? 

*All parts of this homelab series were written while I was building the system. I am aware there are significant omissions in these posts, and I will address them as I continue writing and developing this website.*