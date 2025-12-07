<div align="center">
  <h1>👹 RONIN</h1>
  <p><strong>DEPLOYMENT FOR THE MASTERLESS.</strong></p>
  
  <p>
    <a href="https://ronin.dev">Website</a> •
    <a href="#installation">Installation</a> •
    <a href="#philosophy">Philosophy</a> •
    <a href="https://discord.gg/ronin">Discord</a>
  </p>

  <img src="https://img.shields.io/badge/status-STABLE-yellow?style=for-the-badge&labelColor=black" />
  <img src="https://img.shields.io/badge/core-RUST-orange?style=for-the-badge&labelColor=black" />
  <img src="https://img.shields.io/badge/ui-VUE_3-green?style=for-the-badge&labelColor=black" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge&labelColor=black" />
</div>

<br>

> **"The Cloud is just someone else's computer that you pay too much rent for."**

**RONIN** is an open-source, self-hosted deployment platform designed for developers who are tired of the "Vercel Tax." We give you the developer experience (DX) of a modern PaaS with the raw power and cost-efficiency of a $5 VPS.

Connect GitHub. Push Code. **Deploy or Die.**

---

## ⚡ The Arsenal (Tech Stack)

We reject "Hype Driven Development." We built Ronin on technology that survives.

* **Core Engine:** **Rust**. No Garbage Collection. No runtime pauses. Just raw, memory-safe performance using `io_uring` for zero-copy networking.
* **Dashboard:** **Vue 3** (Composition API). We banned React. The Virtual DOM is pure overhead. We use fine-grained reactivity for 60fps log streaming.
* **Runtime:** **Docker** + **Linux Namespaces**. Standard containers. No proprietary "Edge Runtimes" that lock you in.
* **Proxy:** Custom **C++ / Rust** edge router. Faster than NGINX.

---

## 💀 Features

### 🚀 Zero-Config Push
Push to `main`. We detect your `Dockerfile`, `package.json`, or `Cargo.toml`. We build it. We cache it. We ship it. No YAML hell required.

### 🛡️ The Kill Switch
Under DDoS attack? Burning cash? One command severs all connections at the edge and rotates your API keys instantly.
```bash
$ ronin kill --target production-api --force
> CUTTING TRAFFIC... [OK]
> ROTATING KEYS... [OK]
> SYSTEM STATUS: OFFLINE.
