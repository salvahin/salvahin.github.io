# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is an **al-folio** academic website - a Jekyll-based static site for academics featuring publications, projects, blog posts, and CV pages. The site is configured for Salvador M. Hinojosa and deployed to GitHub Pages at https://salvahin.github.io.

## Development Commands

### Local Development (Docker - Recommended)
```bash
docker compose pull
docker compose up
```
Site runs at `http://localhost:8080`

For slim image (< 100MB):
```bash
docker compose -f docker-compose-slim.yml up
```

### Local Development (Legacy - Ruby/Bundler)
```bash
bundle install
pip install jupyter  # if working with Jupyter notebooks
bundle exec jekyll serve
```
Site runs at `http://localhost:4000`

### Build for Production
```bash
bundle exec jekyll build
```
Output goes to `_site/` directory.

To remove unused CSS:
```bash
purgecss -c purgecss.config.js
```

### Code Quality
```bash
# Format code with Prettier
npm install
npx prettier --write .
```

Pre-commit hooks are configured in `.pre-commit-config.yaml` (runs Prettier and lychee link checker).

## Architecture

### Jekyll Structure
- **`_config.yml`**: Main site configuration (site metadata, theme settings, plugin config, Jekyll Scholar settings)
- **`_pages/`**: Main site pages (about, publications, cv, projects, etc.)
- **`_posts/`**: Blog posts in Markdown
- **`_projects/`**: Project pages (collections)
- **`_news/`**: News items displayed on homepage
- **`_bibliography/`**: BibTeX files for publications (managed by Jekyll Scholar)
- **`_layouts/`**: Liquid templates defining page layouts
- **`_includes/`**: Reusable Liquid template components
- **`_sass/`**: Sass stylesheets
- **`assets/`**: Static assets (images, PDFs, JSON, JavaScript, CSS)

### Key Plugins
- **jekyll-scholar**: Manages publications from BibTeX files (`papers.bib`)
- **jekyll-jupyter-notebook**: Supports Jupyter notebooks as posts
- **jekyll-imagemagick**: Generates responsive WebP images
- **jekyll-paginate-v2**: Pagination for blog posts
- **jekyll-archives-v2**: Archives by year/tag/category

### Configuration Notes
- Site owner configured as "Salvador M. Hinojosa" in `_config.yml` (lines 6-8, 274-275)
- Collections: `news` (not output), `projects` (not output), `books` (not output)
- Publications use APA style citation format
- Dark/light mode theming enabled
- Math typesetting via MathJax, code highlighting via Rouge

### Content Management
- **Publications**: Edit `_bibliography/papers.bib` and customize display in `_pages/publications.md`
- **CV**: Uses either `assets/json/resume.json` (JSON Resume standard) or `_data/cv.yml` as fallback
- **Blog posts**: Written in Markdown with front matter, support Distill.pub styling, math (MathJax), code highlighting, charts (Chart.js), diagrams (Mermaid), and TikZ figures
- **Projects**: Defined in `_projects/` directory, displayed as responsive grid

## Deployment

The site auto-deploys to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) when pushing to `main` branch. The action builds the site and publishes to `gh-pages` branch.

**Important**: Never modify the `gh-pages` branch directly - it's auto-generated.

## Site Customization

- Theme colors: Edit `_sass/_themes.scss` (`--global-theme-color` variable)
- Excluded pages (not built): See `exclude:` section in `_config.yml` (lines 176-201)
- Social media previews: Set `serve_og_meta: true` and configure `og_image` in `_config.yml`
