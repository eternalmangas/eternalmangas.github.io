# API Reference

Detailed documentation for every EternalMangas API endpoint.

:::info
**API v2 is under development.** The current v1 API is minimal. v2 will add filtering by genre, sorting options, and more.
:::

## Authentication

All `/api/v1/` endpoints require the `X-Client` header:

```
X-Client: api-consumer
```

Image endpoints (`/images/`) and health endpoints (`/healthz`, `/readyz`) do not require any header.

---

## GET /api/v1/mihon/popular

Returns a paginated list of manga ordered by popularity (descending).

**Request:**

```http
GET /api/v1/mihon/popular?page=1
X-Client: api-consumer
```

**Query Parameters:**

| Parameter | Required | Description |
| --- | --- | --- |
| `page` | No | Page number (default: `1`) |

**Response (200):**

```json
{
  "items": [
    {
      "id": "00mdhbnsje4z3t3",
      "title": "The Rebellious Villainess Doesn't Want To Be Swayed By The Obsessive Prince!",
      "thumbnail_url": "https://api.coffeemanga.shop/images/.../cover.jpg?fit=1&format=jpeg&q=85&w=512"
    }
  ],
  "has_next": true
}
```

**Fields:**

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Stable record ID. Never changes once assigned. |
| `title` | string | Primary manga title. |
| `thumbnail_url` | string | URL to a resized cover image (512px wide, JPEG, quality 85). Omitted if no cover exists. |
| `has_next` | boolean | `true` if more pages exist. |

The `items` array is never `null`. An empty page returns `"items": []`.

---

## GET /api/v1/mihon/latest

Returns a paginated list of manga ordered by most recent chapter update. Manga with no chapters appear last.

**Request:**

```http
GET /api/v1/mihon/latest?page=1
X-Client: api-consumer
```

**Query Parameters:**

| Parameter | Required | Description |
| --- | --- | --- |
| `page` | No | Page number (default: `1`) |

**Response (200):** Same shape as `/popular`.

---

## GET /api/v1/mihon/search

Searches manga by primary title (case-insensitive substring match). Results are ordered by relevance: exact match first, then prefix match, then contains match, with popularity as tiebreaker.

**Request:**

```http
GET /api/v1/mihon/search?q=baby&page=1
X-Client: api-consumer
```

**Query Parameters:**

| Parameter | Required | Description |
| --- | --- | --- |
| `q` | No | Search query (max 200 characters). Empty or missing returns popular results. |
| `page` | No | Page number (default: `1`) |

**Response (200):**

```json
{
  "items": [
    {
      "id": "rjdu4c4kqyn6pop",
      "title": "Baby Dragon",
      "thumbnail_url": "https://api.coffeemanga.shop/images/baby-dragon/cover.jpg?fit=1&format=jpeg&q=85&w=512"
    },
    {
      "id": "6hmhar71wjufrp7",
      "title": "Baby Dragon to the Duke's Rescue",
      "thumbnail_url": "https://api.coffeemanga.shop/images/.../cover.webp?fit=1&format=jpeg&q=85&w=512"
    }
  ],
  "has_next": true
}
```

**Notes:**

- Only the primary `title` field is searched. `alt_titles`, `author`, `artist`, and `genres` are not searched in v1.
- Empty or whitespace-only `q` returns the same results as `/popular` for that page.

---

## GET /api/v1/mihon/manga/{mangaId}

Returns full manga metadata and its complete chapter list.

**Request:**

```http
GET /api/v1/mihon/manga/00mdhbnsje4z3t3
X-Client: api-consumer
```

**Path Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `mangaId` | string | Record ID (alphanumeric, max 255 chars) |

**Response (200):**

```json
{
  "manga": {
    "id": "00mdhbnsje4z3t3",
    "title": "The Rebellious Villainess Doesn't Want To Be Swayed By The Obsessive Prince!",
    "thumbnail_url": "https://api.coffeemanga.shop/images/.../cover.jpg?fit=1&format=jpeg&q=85&w=512",
    "author": "Rohdea",
    "artist": "Takasaki itsuki",
    "description": "",
    "genres": [
      "Fantasy",
      "Full color",
      "Josei",
      "Manga",
      "Romance",
      "Shoujo"
    ],
    "status": "ongoing"
  },
  "chapters": [
    {
      "id": "5tndx5sfnhx8u19",
      "name": "Chapter 56",
      "number": 56,
      "scanlator": null,
      "uploaded_at": null
    },
    {
      "id": "uliqsgk7fjjr94t",
      "name": "Chapter 55",
      "number": 55,
      "scanlator": null,
      "uploaded_at": null
    }
  ]
}
```

**Manga Fields:**

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Stable record ID. |
| `title` | string | Primary title. |
| `thumbnail_url` | string | Transformed cover URL. Omitted if no cover. |
| `author` | string | Author name. Omitted if empty. |
| `artist` | string | Artist name. Omitted if empty. |
| `description` | string | Synopsis. Omitted if empty. |
| `genres` | array of string | Genre list. Always an array, never `null`. Empty `[]` if none. |
| `status` | string | One of: `unknown`, `ongoing`, `completed`, `licensed`, `publishing_finished`, `cancelled`, `on_hiatus` |

**Chapter Fields:**

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Stable record ID. |
| `name` | string | Display name (e.g. "Chapter 1"). |
| `number` | number or null | Chapter number. `null` if unknown. |
| `scanlator` | string or null | Scanlator name. `null` if unknown. |
| `uploaded_at` | string or null | RFC 3339 timestamp. `null` if unknown. |

**Chapter ordering:** Chapters are returned in descending order (newest first). Do not re-sort.

**Errors:**

| Status | Code | Condition |
| --- | --- | --- |
| 400 | `bad_request` | Invalid ID (contains slash, too long, etc.) |
| 404 | `not_found` | Manga does not exist or is hidden |

---

## GET /api/v1/mihon/chapter/{chapterId}/pages

Returns the ordered page list for a chapter.

**Request:**

```http
GET /api/v1/mihon/chapter/5tndx5sfnhx8u19/pages
X-Client: api-consumer
```

**Path Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `chapterId` | string | Record ID |

**Response (200):**

```json
{
  "pages": [
    {
      "index": 1,
      "image_url": "https://api.coffeemanga.shop/images/.../chapter-56/p001.jpg"
    },
    {
      "index": 2,
      "image_url": "https://api.coffeemanga.shop/images/.../chapter-56/p002.jpg"
    }
  ]
}
```

**Fields:**

| Field | Type | Description |
| --- | --- | --- |
| `index` | integer | Page index (1-based in practice). |
| `image_url` | string | Full URL to the original image via the image proxy. |

**Page ordering:** Pages are returned in ascending index order. Do not re-sort.

**Empty chapter:** A valid chapter may have zero pages — returns `"pages": []`, not a 404.

**Errors:**

| Status | Code | Condition |
| --- | --- | --- |
| 404 | `not_found` | Chapter does not exist, is hidden, or its parent manga is hidden |

---

## GET /images/{path}

Proxies images from object storage. Used for both cover thumbnails (with transform parameters) and original page images (no parameters).

**Request (original):**

```http
GET /images/manga-slug/chapter-1/p001.jpg
```

**Request (transformed — cover thumbnail):**

```http
GET /images/manga-slug/cover.jpg?w=512&fit=1&q=85&format=jpeg
```

**Transform Query Parameters (all optional):**

| Parameter | Type | Range | Description |
| --- | --- | --- | --- |
| `w` | integer | 1–4096 | Target width in pixels |
| `h` | integer | 1–4096 | Target height in pixels |
| `fit` | string | `0`, `1`, `true`, `false` | Fit within dimensions (default: `true` when dimensions present) |
| `q` | integer | 40–95 | JPEG quality |
| `format` | string | `jpeg`, `png` | Output format |
| `rotate` | integer | `0`, `90`, `180`, `270` | Rotation degrees |

If no transform parameters are present, the original image is streamed directly.

**Response Headers:**

```
Content-Type: image/jpeg (or image/png, image/webp)
Cache-Control: private, max-age=86400
Accept-Ranges: bytes
```

**No authentication required** for image endpoints.

**HEAD requests** are also supported — returns the same headers without the body.

---

## GET /healthz

Liveness check. No authentication required.

```http
GET /healthz
```

```json
{ "status": "ok" }
```

---

## GET /readyz

Readiness check. Returns 200 if the database is reachable, 503 otherwise. No authentication required.

```http
GET /readyz
```

```json
{ "status": "ready" }
```

---

## Response Headers

All JSON API responses include:

| Header | Value | Description |
| --- | --- | --- |
| `Content-Type` | `application/json; charset=utf-8` | Always JSON |
| `Cache-Control` | `private, no-store` | Do not cache JSON responses |
| `X-Cache` | `HIT` or `MISS` | Whether the response was served from the server's internal cache |

Image responses include `Cache-Control: private, max-age=86400` (24 hours).

---

## ID Stability

All IDs are stable record IDs — lowercase alphanumeric strings (e.g. `00mdhbnsje4z3t3`). They are:

- **Stable:** Never change once assigned.
- **Unique:** No two records share an ID.
- **Opaque:** Do not parse, sort, or derive meaning from the ID string.

---

## Complete Route Summary

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| GET | `/api/v1/mihon/popular?page=N` | X-Client | Popular manga list |
| GET | `/api/v1/mihon/latest?page=N` | X-Client | Latest manga list |
| GET | `/api/v1/mihon/search?q=term&page=N` | X-Client | Title search |
| GET | `/api/v1/mihon/manga/{id}` | X-Client | Manga detail + chapters |
| GET | `/api/v1/mihon/chapter/{id}/pages` | X-Client | Chapter page list |
| GET | `/images/{path...}` | None | Image proxy (original or transformed) |
| HEAD | `/images/{path...}` | None | Image metadata |
| GET | `/healthz` | None | Liveness probe |
| GET | `/readyz` | None | Readiness probe |
