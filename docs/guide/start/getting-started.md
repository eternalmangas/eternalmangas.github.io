# Getting Started

MangaPDF offers a web reader, an extension for Android, plus a public API for developers. Choose your path below.

## Browser — Web Reader

Read manga directly in your browser. No installation needed.

**[Read Online at mangapdf.org](https://mangapdf.org)**

A simple, distraction-free reader. No account required — all data and progress stored locally in your browser.

[More about the web reader →](/guide/webreader/)

## Android — Mihon Extension

For use with [Mihon](https://mihon.app/), [Komikku](https://komikku-app.github.io/komikku/), or any Mihon fork that supports extensions.

**[Download MangaPDF Extension v0.3.0](https://github.com/MangaPDForg/mangapdforg.github.io/releases/download/v0.3.0/eternalmangas_extension-v0.3.0.apk)**

1. Download and install the APK.
2. Open Mihon — the extension appears in your sources list.
3. Start reading. Zero configuration required.

[Full setup guide →](/guide/mihon/)

## Developers — Public API

Build your own app, extension, or web reader on top of the MangaPDF API.

```bash
curl -H "X-Client: api-consumer" \
  "https://api.coffeemanga.shop/api/v1/mihon/popular?page=1"
```

No token needed. 2900+ series available. Read-only.

[API documentation →](/guide/api/)

## Configuration

Both extensions come with a default API server pre-configured. If you want to switch to a different API server, see [Extension Configuration](/guide/mihon/configuration).

## Browse Releases

All releases are available on GitHub:
[https://github.com/MangaPDForg/mangapdforg.github.io/releases](https://github.com/MangaPDForg/mangapdforg.github.io/releases)
