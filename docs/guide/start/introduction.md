# Introduction

EternalMangas is a stable, reliable Mihon extension for reading manga and comics. Unlike traditional extensions that scrape websites, EternalMangas connects to its own dedicated API server, making it immune to Cloudflare blocks, site redesigns, and anti-bot measures.

## Why EternalMangas?

- **Won't break** — No web scraping means no breakage when sites change their layout or add protection.
- **2900+ series** — Access a large and growing catalog of manga and comics.
- **Dedicated server** — The extension communicates with its own API infrastructure, ensuring consistent uptime.
- **Simple setup** — Install the extension, enter the API URL and token, and start reading.
- **Wide compatibility** — Works with [Mihon](https://mihon.app/), [Komikku](https://komikku-app.github.io/komikku/), and any Mihon fork that supports extensions.

## How It Works

EternalMangas uses a client-server architecture:

1. The **extension** (installed on your device) acts as a bridge between your manga reader app and the EternalMangas API.
2. The **API server** hosts the full catalog of series, chapters, and images.
3. You configure the extension with the API URL and a read-only access token.

This design ensures that the extension never depends on any third-party website.

## Compatibility

| App | Supported |
| --- | --------- |
| Mihon | ✅ |
| Komikku | ✅ |
| Other Mihon forks (with extension support) | ✅ (likely) |

## Next Steps

Head to [Getting Started](/guide/start/getting-started) to download and set up the extension.
