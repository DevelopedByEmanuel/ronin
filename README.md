<div align="center">
  <br />
  <h1 style="font-size: 3rem; margin-bottom: 10px;">👹 RONIN</h1>
  <p style="font-size: 1.2rem; margin-top: 0;"><strong>DEPLOYMENT FOR THE MASTERLESS.</strong></p>
  
  <p>
    <a href="https://ronin.dev"><strong>Website</strong></a> •
    <a href="#installation"><strong>Installation</strong></a> •
    <a href="#philosophy"><strong>Philosophy</strong></a> •
    <a href="https://discord.gg/ronin"><strong>Discord</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/status-STABLE-yellow?style=for-the-badge&labelColor=black" alt="Status" />
    <img src="https://img.shields.io/badge/core-RUST-orange?style=for-the-badge&labelColor=black" alt="Core" />
    <img src="https://img.shields.io/badge/ui-VUE_3-green?style=for-the-badge&labelColor=black" alt="UI" />
    <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge&labelColor=black" alt="License" />
  </p>
</div>

<br />

<blockquote align="center">
  <em>"The Cloud is just someone else's computer that you pay too much rent for."</em>
</blockquote>

<p align="center">
  <strong>RONIN</strong> is an open-source, self-hosted deployment platform designed for developers who are tired of the "Vercel Tax." We give you the developer experience (DX) of a modern PaaS with the raw power and cost-efficiency of a $5 VPS.
</p>

<p align="center">
  Connect GitHub. Push Code. <strong>Deploy or Die.</strong>
</p>

<hr />

<h2>⚡ The Arsenal (Tech Stack)</h2>

<p>We reject "Hype Driven Development." We built Ronin on technology that survives.</p>

<ul>
  <li><strong>Core Engine:</strong> <code>Rust</code>. No Garbage Collection. No runtime pauses. Just raw, memory-safe performance using <code>io_uring</code> for zero-copy networking.</li>
  <li><strong>Dashboard:</strong> <code>Vue 3</code> (Composition API). We banned React. The Virtual DOM is pure overhead. We use fine-grained reactivity for 60fps log streaming.</li>
  <li><strong>Runtime:</strong> <code>Docker</code> + <code>Linux Namespaces</code>. Standard containers. No proprietary "Edge Runtimes" that lock you in.</li>
  <li><strong>Proxy:</strong> Custom <code>C++ / Rust</code> edge router. Faster than NGINX.</li>
</ul>

<hr />

<h2>💀 Features</h2>

<h3>🚀 Zero-Config Push</h3>
<p>Push to <code>main</code>. We detect your <code>Dockerfile</code>, <code>package.json</code>, or <code>Cargo.toml</code>. We build it. We cache it. We ship it. No YAML hell required.</p>

<h3>🛡️ The Kill Switch</h3>
<p>Under DDoS attack? Burning cash? One command severs all connections at the edge and rotates your API keys instantly.</p>

<pre><code>$ ronin kill --target production-api --force
> CUTTING TRAFFIC... [OK]
> ROTATING KEYS... [OK]
> SYSTEM STATUS: OFFLINE.
</code></pre>

<h3>⚡ io_uring Networking</h3>
<p>We don't use standard <code>epoll</code>. We use Linux's asynchronous I/O interface to achieve 10Gbps throughput on a single core. CPU usage drops by 40% compared to standard proxies.</p>

<h3>💸 No "Per Seat" Pricing</h3>
<p>Invite your whole team. Create infinite projects. We don't charge you for adding a collaborator. It's your server. Do what you want.</p>

<hr />

<h2>⚔️ Comparison</h2>

<table width="100%">
  <thead>
    <tr>
      <th align="left">FEATURE</th>
      <th align="center">RONIN 👹</th>
      <th align="center">VERCEL ▲</th>
      <th align="center">COOLIFY 👾</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Self-Hosted</strong></td>
      <td align="center"><strong>YES (1-Click)</strong></td>
      <td align="center">NO</td>
      <td align="center">YES</td>
    </tr>
    <tr>
      <td><strong>Tech Stack</strong></td>
      <td align="center"><strong>Rust / Vue</strong></td>
      <td align="center">Next.js / React</td>
      <td align="center">PHP / Laravel</td>
    </tr>
    <tr>
      <td><strong>Vendor Lock-in</strong></td>
      <td align="center"><strong>ZERO</strong></td>
      <td align="center">HIGH</td>
      <td align="center">LOW</td>
    </tr>
    <tr>
      <td><strong>Cost @ Scale</strong></td>
      <td align="center"><strong>$5 (VPS)</strong></td>
      <td align="center">$$$ (Bandwidth)</td>
      <td align="center">$0</td>
    </tr>
    <tr>
      <td><strong>Performance</strong></td>
      <td align="center"><strong>Native</strong></td>
      <td align="center">Cold Starts</td>
      <td align="center">Good</td>
    </tr>
    <tr>
      <td><strong>Vibe</strong></td>
      <td align="center"><strong>Cyberpunk</strong></td>
      <td align="center">Corporate</td>
      <td align="center">SysAdmin</td>
    </tr>
  </tbody>
</table>

<hr />

<h2 id="installation">📦 Installation</h2>

<h3>The Easy Way (Script)</h3>
<p>Run this on a fresh Ubuntu 22.04+ server (VPS, Bare Metal, or Raspberry Pi).</p>

<pre><code>curl -sL https://get.ronin.dev/install.sh | sudo bash</code></pre>

<h3>The Hard Way (Manual)</h3>
<ol>
  <li>Clone the repo.</li>
  <li>Install Rust (stable) and Docker.</li>
  <li><code>cargo build --release</code></li>
  <li><code>./target/release/ronin-core start</code></li>
</ol>

<hr />

<h2>🤝 Contributing</h2>

<p>We don't have a product manager. We have <strong>Issues</strong>.</p>

<p>If you want to contribute:</p>
<ol>
  <li><strong>No React.</strong> Don't even ask.</li>
  <li><strong>No Go.</strong> We like our memory managed manually (or via borrow checker).</li>
  <li><strong>Performance First.</strong> If your PR increases binary size by 10MB, it will be rejected.</li>
</ol>

<p>Check out <a href="CONTRIBUTING.md">CONTRIBUTING.md</a> for the setup guide.</p>

<hr />

<h2>📜 License</h2>

<p>MIT.</p>

<p>Fork it. Sell it. Break it.<br />
<strong>Just don't make it slow.</strong></p>
