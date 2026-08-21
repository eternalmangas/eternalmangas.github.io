# API Overview

The MangaPDF API is a read-only REST API that provides access to a catalog of 2900+ manga and comic series. Anyone can use it to build their own apps, extensions, scrapers, or web readers.

:::info
**API v2 is under development.** The current v1 API is minimal. v2 will add filtering by genre, sorting options, and more. This page will be updated when v2 is released.
:::

## Base URL

All API endpoints are served from:

```
https://api.coffeemanga.shop
```

An alternative server is also available:

```
https://api.mangapdf.org
```

Both servers host the same catalog. Use whichever is closer or more reliable for you.

## Authentication

All API endpoints require an `X-Client` header. There is no token, no API key, and no account needed.

```
X-Client: api-consumer
```

| Client Value | Use Case |
| --- | --- |
| `mihon-extension` | Used by the MangaPDF Mihon extension (do not use) |
| `webapp` | Used by the MangaPDF web app (do not use) |
| `api-consumer` | **Use this for your own apps, web readers, and integrations** |

Requests without a valid `X-Client` header receive a `403 Forbidden` response.

## Quick Start

```bash
# List popular manga
curl -H "X-Client: api-consumer" \
  "https://api.coffeemanga.shop/api/v1/mihon/popular?page=1"

# Search for manga
curl -H "X-Client: api-consumer" \
  "https://api.coffeemanga.shop/api/v1/mihon/search?q=naruto&page=1"

# Get manga details
curl -H "X-Client: api-consumer" \
  "https://api.coffeemanga.shop/api/v1/mihon/manga/{mangaId}"

# Get chapter pages
curl -H "X-Client: api-consumer" \
  "https://api.coffeemanga.shop/api/v1/mihon/chapter/{chapterId}/pages"
```

## Pagination

List endpoints use page-based pagination. The page parameter is 1-indexed.

| Parameter | Type | Default | Range |
| --- | --- | --- | --- |
| `page` | integer | `1` | `1` – `1000000` |

Page size is fixed at **40 items**. Each response includes a `has_next` boolean — when `true`, request `page + 1` for more results.

## Error Format

All errors use a consistent JSON envelope:

```json
{
  "error": {
    "code": "not_found",
    "message": "human-readable description"
  }
}
```

| HTTP Status | Code | Meaning |
| --- | --- | --- |
| 400 | `bad_request` | Invalid query parameter or ID |
| 403 | `forbidden_client` | Missing or invalid `X-Client` header |
| 404 | `not_found` | Manga, chapter, or image does not exist |
| 500 | `internal_error` | Server error |

## Rate Limiting

There is no rate limiting. You can make requests at a reasonable pace without throttling.

However, deliberate heavy DDoS attacks will result in IP bans. Be a good citizen.

## Attribution

We appreciate attribution but it is not required. If you use the API, a link back to MangaPDF is welcome but optional.

## Endpoints

See the [API Reference](/guide/api/reference) for detailed documentation of every endpoint.

| Endpoint | Description |
| --- | --- |
| `GET /api/v1/mihon/popular` | Popular manga list |
| `GET /api/v1/mihon/latest` | Recently updated manga |
| `GET /api/v1/mihon/search` | Search by title |
| `GET /api/v1/mihon/manga/{id}` | Manga details + chapters |
| `GET /api/v1/mihon/chapter/{id}/pages` | Chapter page list |
| `GET /images/{path}` | Image proxy (original or transformed) |
| `GET /healthz` | Health check |
| `GET /readyz` | Readiness check |
