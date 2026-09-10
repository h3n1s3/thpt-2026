# Security Research — personal CV & Markdown blog

Astro static site. Profile fields and all posts are explicitly draft/sample content. Replace them with verified personal information before sharing publicly.

## Run

`npm install`, then `npm run dev`. Build with `npm run build`; `dist/` is the static deployment output.

## Profile

Edit `src/pages/index.astro` and `src/pages/cv.astro`. Add verified CVEs with their product, disclosure date and advisory URL. Do not infer CVSS or discovery credit. Replace the avatar with your own image including alt text. Add your real social/contact URLs. Once your PDF is available, place it at `public/cv.pdf` and change the CV link to a download link.

## New article

Create a `.md` file in `src/pages/blog/`:

```yaml
---
layout: ../../layouts/Article.astro
title: "Article title"
date: 2026-09-11
updated: 2026-09-11
tags: [Pentest]
description: "Brief summary"
cover: /your-image.webp
coverAlt: "Meaningful image description"
---
```

Use `##` headings for the automatic table of contents, fenced code blocks with a language, and `$...$` / `$$...$$` for math. Images go in `public/`. `cover` and `coverAlt` are optional. Articles automatically appear in search, tag filters and RSS. Remove or conditionalize the sample notice in `Article.astro` for your real posts.

Set the production origin in `astro.config.mjs` before deploying to a different host. Astro generates HTML, syntax highlighting, KaTeX, RSS and sitemap at build time. Light/dark preference is saved on the reader's device. No CMS, tracking or account is required.
