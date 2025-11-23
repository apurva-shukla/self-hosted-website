---
title: "Setting up laptop in 2025"
excerpt: "How I setup my Sumble laptop"
coverImage: "/placeholder-profile.jpg"
date: "2023-06-01T00:00:00.000Z"
category: "Productivity"
draft: true
bookSummary: true
author:
  name: "Apurva Shukla"
  picture: "/placeholder-profile.jpg"
ogImage:
  url: "/placeholder-profile.jpg"
---

# The Definitive 2025 Mac Setup for New Developers

I recently transitioned into software development, and one of the first hurdles I faced wasn't code—it was the **environment**.

In the past, I would just `brew install` things randomly, let iCloud sync destroy my git repositories, and mix my work and personal email addresses in commit logs.

For my new machine, I decided to do it right. I spent days researching the modern "Meta" for macOS development in 2025. The result is a setup that is fast (Rust-based tools), beautiful (Catppuccin theming), and rigidly organized (Work vs. Personal separation).

Here is how I built my "Endgame" MacBook setup.

---

## Part 1: The Foundation (Directory & Identity)

The biggest mistake beginners make is storing code in `~/Documents`. On macOS, that folder syncs to iCloud. **Never put Git repos in iCloud.** It corrupts the `.git` folder and causes sync conflicts.

### 1. The Directory Structure
I created a local-only directory called `~/Developer`. This is where the magic happens.

```zsh
mkdir ~/Developer
mkdir ~/Developer/personal-github
mkdir ~/Developer/work-github
```

### 2. Dual Git Identities (The "Magic" Switch)
I didn't want to accidentally push code to my new job's repo using my personal Gmail. Instead of manually changing settings every time, I used **Git Conditional Includes**.

In my global `~/.gitconfig`, I didn't set an email. Instead, I set a rule:

```ini
# ~/.gitconfig

[includeIf "gitdir:~/Developer/personal-github/"]
    path = ~/.gitconfig-personal

[includeIf "gitdir:~/Developer/work-github/"]
    path = ~/.gitconfig-work
```

Now, the moment I `cd` into `personal-github`, Git automatically loads a separate config file containing my personal email and SSH key settings. It is foolproof.

### 3. SSH Key Segmentation
I generated two separate SSH keys

 (Ed25519) and configured `~/.ssh/config` to use them based on the URL alias.

*   **Work:** `git clone git@github.com:company/repo.git` (Default)
*   **Personal:** `git clone git@github.com-personal:me/repo.git` (Alias)

---

## Part 2: The Terminal (Ghostty)

I stopped using the default Terminal app and skipped iTerm2. The new standard in 2025 is **[Ghostty](https://ghostty.org/)**.

It is written in native Swift (not Electron), so it's incredibly fast, GPU-accelerated, and looks stunning.

**My Configuration Highlights:**
*   **Theme:** Catppuccin Mocha (Pastel, high contrast, easy on the eyes).
*   **Aesthetics:** High transparency with background blur ("Frosted Glass" effect).
*   **Window:** No title bars (`macos-titlebar-style = hidden`).
*   **Keybinds:** I mapped `Cmd+Left/Right` to jump to the start/end of the line, matching standard macOS text inputs so I don't have to learn legacy Unix shortcuts.

---

## Part 3: The Shell (Zsh + Starship)

A terminal is just a window; the **Shell** is the engine. I use Zsh with a few superpowers hooked into my `.zshrc`.

### 1. Starship (The Prompt)
Instead of a boring text prompt, I installed **[Starship](https://starship.rs/)**. It’s a Rust-based prompt that gives me instant context.
*   It shows the Node.js version when I enter a JS project.
*   It shows the Git branch and status (Modified/Staged/Ahead) instantly.

### 2. Intelligence Plugins
I added three plugins that make the terminal feel like an IDE:
*   **zsh-autosuggestions:** Displays "Ghost Text" of commands I've run before. I just hit `Cmd+Right` to accept them.
*   **zsh-syntax-highlighting:** Commands turn Green if they exist, Red if I made a typo.


*   **FZF (Fuzzy Finder):** Replaces `Ctrl+R` history search with an interactive fuzzy search tool.
*   **Zoxide:** A smarter `cd`. It remembers where I go. I can type `z laptop` and it jumps straight to `~/Developer/personal-github/new-laptop-setup`.

---

## Part 4: Modern CLI Tools (The "Rust" Rewrite)

In 2025, we don't use the ancient Unix tools from the 1980s. We use modern, faster replacements (usually written in Rust).

| Old Command | New Tool | Why? |
| :--- | :--- | :--- |
| `ls` | **`eza`** | Adds file icons, git status dots, and colors. |
| `cat` | **`bat`** | syntax highlighting and line numbers for reading files. |
| `rm` | **`trash`** | Moves files to macOS Trash instead of deleting them forever. |
| `diff` | **`delta`** | Side-by-side git diffs with syntax highlighting. |

I set up aliases in my `.zshrc` so I don't have to relearn muscle memory:
```zsh
alias ls="eza --icons"
alias cat="bat"
alias del="trash" # Safety first!
```

---

## Part 5: Language Management (Stop using Homebrew for Node)

The biggest advice I can give a new dev: **Do not run `brew install node` or `brew install python`.**

This locks you into one version for the whole system. When one project needs Node 18 and another needs Node 22, you break everything.

### Node.js: `fnm`
I use **Fast Node Manager (fnm)**. It allows me to install multiple versions of Node and switches between them automatically when I `cd` into a project folder.
```zsh
brew install fnm
fnm install --lts
```

### Python: `uv`
I ditched Anaconda and pip. I use **uv** (from Astral). It is lightning fast.
*   To install Python: `uv python install`
*   To run a script: `uv run main.py` (It creates the virtual environment and installs dependencies *instantly*).

---

## Part 6: Window Management (The "Hacker" Workflow)

I came from Windows, where window

 management is decent. macOS window management is... chaotic.

To fix this, I use **Yabai** (Tiling Window Manager) and **Skhd** (Hotkey Daemon).

*   **Tiling:** Windows don't overlap. They snap into a grid automatically.
*   **Focus:** I don't `Alt-Tab`. I use `Cmd+Opt+Arrows` to move focus between windows.
*   **Borders:** I installed **JankyBorders** to draw a colored active border around the focused window (matching my Catppuccin theme).

It turns macOS into a keyboard-centric productivity powerhouse.

---

## Part 7: The Backup Strategy (Dotfiles)

Finally, I didn't want to lose this setup.
I store all my config files (`.zshrc`, `ghostty/config`, `yabai/yabairc`) in a GitHub repository inside `~/Developer`.

I don't manually copy them. I use **Symbolic Links**.
```zsh
ln -s ~/Developer/personal-github/new-laptop-setup/zshrc ~/.zshrc
```
This tells macOS to read the config directly from my Git repo. When I tweak a setting, I just `git push`, and my settings are backed up to the cloud forever.

### The "One Click" Install
I generated a `Brewfile` that lists every tool mentioned above. On a new Mac, I simply clone my repo and run:
```zsh
brew bundle install
```
And in 10 minutes, I'm back to work.

