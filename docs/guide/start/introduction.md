# Introduction

EternalMangas is a platform for reading manga and comics — available as a web reader, extensions for Android and desktop, and a public API for developers.

Unlike traditional extensions that scrape websites, everything connects to dedicated API servers — immune to Cloudflare blocks, site redesigns, and anti-bot measures.

## Products

### Web Reader

Read manga directly in your browser at [mangapdf.org](https://mangapdf.org). A simple, distraction-free reader with no accounts required. All data and progress stored locally in your browser.

[Read Online →](/guide/webreader/)

### Mihon Extension (Android)

An extension for [Mihon](https://mihon.app/), [Komikku](https://komikku-app.github.io/komikku/), and any Mihon fork that supports extensions. Install the APK and start reading immediately — zero configuration required.

[Get the Mihon Extension →](/guide/mihon/)

### Chrome Extension (Desktop)

A Chrome extension for desktop users. Download, enable developer mode, load unpacked, and start browsing — zero configuration required.

[Get the Chrome Extension →](/guide/chrome/)

### Public API

A read-only REST API for developers. Build your own app, extension, web reader, or scraper on top of the EternalMangas catalog. No authentication token needed — just set the `X-Client: api-consumer` header.

[Explore the API →](/guide/api/)

## Why EternalMangas?

- **Won't break** — No web scraping means no breakage when sites change their layout or add protection.
- **2900+ series** — Access a large and growing catalog of manga and comics. 10K+ planned in the next 2-3 months.
- **Dedicated servers** — Extensions and API consumers connect to dedicated API infrastructure, ensuring consistent uptime.
- **Zero configuration** — Both extensions come with a default API server pre-configured. Just install and read.
- **Configurable** — Optionally switch to a different API server if needed.
- **Open API** — Developers can build on top of the EternalMangas API to create their own tools and readers.

## How It Works

EternalMangas uses a client-server architecture:

1. The **extension** (on your device) acts as a bridge between your reader and the EternalMangas API.
2. The **API server** hosts the full catalog of series, chapters, and images.
3. A default API server is pre-configured — no setup needed.

This design ensures that the extensions never depend on any third-party website.

## Next Steps

- [Getting Started](/guide/start/getting-started) — Overview and download links
- [Web Reader](/guide/webreader/) — Read in your browser
- [Mihon Extension Setup](/guide/mihon/) — Android installation guide
- [Chrome Extension Setup](/guide/chrome/) — Desktop installation guide
- [Extension Configuration](/guide/mihon/configuration) — API server options
- [API Documentation](/guide/api/) — Build your own app
