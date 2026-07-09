# Security Ops Mini-Dashboard

A lightweight dashboard that visualizes mock security-alert data with severity
heatmaps and trend charts. An "Explain this trend" button calls the Claude API
to summarize what a spike or pattern likely means and what to check next —
making the data readable for stakeholders, not just analysts.

> Status: ✅ built — Flask + Chart.js, `/api/explain` endpoint, 11 passing tests, synthetic data.

## Why this exists
Dashboards show *what* happened but rarely *what it means*. This one adds an AI
layer that turns a chart into a short, human explanation — useful when you're
briefing a non-technical team or a manager who just wants the takeaway.

## What it does
- Loads mock alert data (JSON)
- Renders a severity heatmap (by day/hour or by source)
- Renders trend charts (alerts over time, by category)
- "Explain this trend" → Claude summarizes the pattern + suggested next steps
- Clean, responsive dark UI

## Tech stack
- HTML / CSS / vanilla JavaScript
- Chart.js for visualizations
- Flask (tiny backend to proxy the Claude API and keep the key server-side)
- Claude API (`anthropic`)

## Architecture note
Keep the Claude API key on the **server** (Flask), not in the browser. The
frontend calls your `/api/explain` endpoint; Flask calls Claude. Never ship the
key in client-side JS.

## Setup
```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -e ".[ai]"
export ANTHROPIC_API_KEY="sk-ant-..."   # optional; never commit this
flask --app secops_dashboard.server run
# open the dashboard at http://localhost:5000
```

## Roadmap
- [x] Mock data generator (deterministic synthetic alerts + injected spike)
- [x] Heatmap component (weekday × hour grid)
- [x] Trend line + category bar charts (Chart.js)
- [x] Flask `/api/explain` endpoint → Claude (local fallback)
- [x] "Explain this trend" button + loading/result UI
- [x] Responsive dark layout
- [ ] "How I used Claude" write-up

## Notes on safety
- All data is synthetic/mock.
- Claude API key stays server-side via the Flask proxy.
