# Extension Configuration

The Mihon extension comes with a default API server pre-configured. You do not need to change anything to start using EternalMangas.

If you want to switch to a different API server, you can change the API base URL in the extension settings.

## Available API Servers

| Server | URL | Status |
| ------ | --- | ------ |
| CoffeeManga (default) | `https://api.coffeemanga.shop` | ✅ Active |
| MangaPDF | `https://api.mangapdf.org` | ✅ Active |

:::info
`https://api.coffeemanga.shop` is the default server pre-configured in the extension. You only need to change this if you want to switch to a different server.
:::

## Mihon Extension — Changing the API URL

1. Open Mihon (or Komikku / your Mihon fork).
2. Go to **Extensions** → find **EternalMangas**.
3. Tap the **Settings** (gear icon) next to the extension.
4. Change the **API URL** field to one of the servers listed above.
5. Save and restart the extension source.

![Mihon Extension Config](/screenshots/mihon/mihon_extension_config.png)

:::tip
No access token is required. The API token field has been removed in v0.2.0.
:::

## No Token Required

As of v0.2.0, API access tokens have been removed from the extension. No authentication is needed to access the catalog.
