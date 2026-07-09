# Security Alert Triage CLI

A command-line tool that ingests security alerts, scores them by severity and
context, flags likely false positives, and uses the Claude API to produce a
short plain-English summary for each alert — so an analyst can triage the queue
fast and decide what to escalate.

> Status: 🚧 starter README — fill in as you build.

## Why this exists
During my SOC internship, a lot of first-pass triage was repetitive: read the
alert, judge severity, guess if it's a false positive, write a one-line note.
This tool does the mechanical part so a human can focus on the judgment calls —
and it explains each alert in language a non-technical stakeholder can follow.

## What it does
- Reads alerts from a JSON/CSV file (or stdin)
- Scores each alert (severity + simple context rules)
- Flags likely false positives with a reason
- Calls Claude to generate a 1–2 sentence plain-English summary
- Prints a ranked, color-coded triage table

## Tech stack
- Python 3.10+
- Claude API (`anthropic`)
- `argparse` or `click` for the CLI
- `rich` (optional) for pretty output

## Planned usage
```bash
python triage.py --input alerts.json --top 10
python triage.py --input alerts.json --explain   # add Claude summaries
```

## Setup (planned)
```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
export ANTHROPIC_API_KEY="sk-ant-..."   # never commit this
```

## Roadmap
- [ ] Define the alert schema (fields: id, source, severity, entity, timestamp)
- [ ] Scoring function + false-positive heuristics
- [ ] Claude summary integration (batch to save tokens)
- [ ] CLI flags: `--input`, `--top`, `--explain`, `--json`
- [ ] Sample `alerts.json` fixture + README examples
- [ ] Unit tests for the scorer
- [ ] Short "How I used Claude" write-up

## Notes on safety
- API key comes from an environment variable — never hard-coded or committed.
- Sample data is synthetic/mock only. No real alert data in the repo.
