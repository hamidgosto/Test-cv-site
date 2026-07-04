# CLAUDE.md

Guidance for AI assistants (Claude Code) working in this repository.

## Project overview

This is a personal CV / portfolio website for Hamid Gosto (a web developer /
web designer). It is a **static, framework-free HTML site** — there is no
build step, no package manager, no CSS/JS bundler, and no server-side code.
Content is a mix of French and English.

## Repository structure

```
index.html      Home page: bio, education, hobbies, book links, work
                 experience, and a skills table. Links to contact.html
                 and projets.html.
contact.html    "Réseaux & contact" page: social links (Facebook,
                 Instagram), a personal site link, an email address, and
                 two plain HTML forms (a mailto: contact form and a file
                 upload form — neither is wired to a backend).
projets.html    Short list of current/ongoing projects.
hamid.png       Profile photo used on index.html.
hamid.jpeg      Alternate/unused profile photo.
facebook.png    Icon used on contact.html.
instagram.png   Icon used on contact.html.
email.png       Icon used on contact.html.
website.png     Icon used on contact.html.
README.md       One-line project name, no further docs.
```

There are no directories beyond the repo root — everything lives flat at
the top level.

## Tech stack & constraints

- Plain HTML5 only. No CSS files, no `<style>` blocks, no JavaScript.
  Layout is done with legacy `<table>` elements (see `index.html`).
- No `package.json`, no build tooling, no linter, no test suite, no CI
  config. There is nothing to install or compile.
- The two forms in `contact.html` are non-functional stubs (`mailto:`
  action and a file input posting to `index.html`) — do not assume they
  submit anywhere real.

## Running / previewing the site

There is no dev server or build command. To preview changes, open the
HTML files directly in a browser, e.g.:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000/index.html
```

or simply open `index.html` from the file system.

## Conventions to follow when editing

- Keep the site dependency-free: don't introduce a framework, bundler,
  or package manager unless explicitly asked.
- Match the existing plain-HTML style already in each file (inline
  structure, no external stylesheets/scripts) rather than adding new
  patterns.
- Preserve the French content/wording where it already exists; only
  translate or rewrite copy if the user asks for it.
- Image files (`hamid.png`, `hamid.jpeg`, `facebook.png`, `instagram.png`,
  `email.png`, `website.png`) are referenced by relative path from the
  HTML files — keep new assets alongside the HTML files unless asked to
  reorganize.
- When adding a new page, link it from `index.html` (and/or the relevant
  existing page) the same way `contact.html` and `projets.html` are
  linked today.

## Git workflow

- Default branch: `main`.
- Commit directly with descriptive messages; there is no CI to satisfy
  before merging.
