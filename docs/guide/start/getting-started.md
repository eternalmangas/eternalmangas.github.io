# Getting Started

EternalMangas offers a web reader, extensions for Android and desktop, plus a public API for developers. Choose your path below.

## Browser — Web Reader

Read manga directly in your browser. No installation needed.

**[Read Online at mangapdf.org](https://mangapdf.org)**

A simple, distraction-free reader. No account required — all data and progress stored locally in your browser.

[More about the web reader →](/guide/webreader/)

## Android — Mihon Extension

For use with [Mihon](https://mihon.app/), [Komikku](https://komikku-app.github.io/komikku/), or any Mihon fork that supports extensions.

**[Download Mihon Extension v0.2.0](https://github.com/eternalmangas/eternalmangas.github.io/releases/download/v0.2.0/eternalmangas_extension-v0.2.0.apk)**

1. Download and install the APK.
2. Open Mihon — the extension appears in your sources list.
3. Start reading. Zero configuration required.

[Full setup guide →](/guide/mihon/)

## Desktop — Chrome Extension

For use with Google Chrome on desktop.

**[Download Chrome Extension v0.2.0](https://github.com/eternalmangas/eternalmangas.github.io/releases/download/v0.2.0/eternalmangas-chrome-extension.zip)**

1. Download and unzip the file.
2. Open `chrome://extensions`, enable Developer mode.
3. Click "Load unpacked" and select the unzipped folder.
4. Start browsing. Zero configuration required.

[Full setup guide →](/guide/chrome/)

## Developers — Public API

Build your own app, extension, or web reader on top of the EternalMangas API.

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
[https://github.com/eternalmangas/eternalmangas.github.io/releases](https://github.com/eternalmangas/eternalmangas.github.io/releases)
