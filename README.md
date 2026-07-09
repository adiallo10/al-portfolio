# Al Diallo — Portfolio

A clean, single-page portfolio showcasing security & IT projects built with
AI-augmented workflows (Claude). Plain HTML/CSS/JS — easy to edit, easy to
deploy to GitHub Pages.

**Live:** _add your GitHub Pages URL here once deployed_

---

## Structure

```
al-portfolio/
├── index.html        # the whole site (header, projects, skills, contact)
├── style.css         # dark, terminal-inspired theme
├── script.js         # nav toggle, typing effect, scroll reveal, copy-email
├── README.md         # this file
└── projects/         # starter repos/READMEs for each project
    ├── alert-triage-cli/
    ├── phishing-email-analyzer/
    └── security-ops-dashboard/
```

---

## Progress checklist

Track the whole effort here. Check things off as you go.

### Site (done ✅)
- [x] Scaffold folder structure
- [x] `index.html` — header, hero/bio, projects, skills, contact
- [x] `style.css` — dark terminal theme, responsive, accessible
- [x] `script.js` — mobile nav, typing effect, scroll reveal, copy email

### Personalize (do next ✏️)
- [ ] Replace **GitHub** placeholder link in footer (`index.html`)
- [ ] Replace **LinkedIn** placeholder link in footer (`index.html`)
- [ ] Confirm bio wording sounds like you
- [ ] Add a real GitHub URL + Live Demo per project card (3× `href="#"`)
- [ ] (Optional) Add a favicon and an OG social preview image

### Build the 3 projects 🛠️
- [ ] **Security Alert Triage CLI** — score/summarize alerts, flag false positives
- [ ] **Phishing Email Analyzer** — extract IOCs, Claude plain-English risk write-up
- [ ] **Security Ops Mini-Dashboard** — heatmaps + "explain this trend" (Claude)

Each project has a starter `README.md` in `projects/` with scope, stack, and
setup notes. Fill them in as you build.

### Deploy 🚀
- [ ] Push to a GitHub repo (see below)
- [ ] Enable GitHub Pages
- [ ] Paste the live URL into this README and your resume/application

### Stretch ideas 💡 (nice for Claude Corps)
- [ ] Short "How I used Claude" note on each project (teaching angle)
- [ ] A 60–90s Loom/GIF demo per project
- [ ] A "Runbook" section — shows you hand work off well (Corps values this)
- [ ] A non-technical "what this does for you" blurb per project

---

## Run locally

No build step. Just open `index.html` in a browser, or serve it:

```bash
# from the al-portfolio folder
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Deploy to GitHub Pages

```bash
cd al-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from
a branch → Branch: `main` / root → Save.** Your site publishes at
`https://<your-username>.github.io/<repo-name>/`.

---

## Editing tips

- **Text/content:** all copy lives in `index.html`.
- **Colors/spacing:** tweak the CSS variables at the top of `style.css`
  (`:root { ... }`).
- **Links:** search `index.html` for `href="#"` — those are the placeholders to
  fill in.
