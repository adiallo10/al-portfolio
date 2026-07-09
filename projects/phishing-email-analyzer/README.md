# Phishing Email Analyzer

A small web app: paste in a raw email, and it extracts indicators of compromise
(IOCs) — suspicious URLs, sender/header anomalies, attachments — then uses the
Claude API to explain the risk in plain English and recommend a next step a
non-technical user can actually follow.

> Status: ✅ built — CLI + web UI, 18 passing tests, zero required dependencies.

## Why this exists
Most phishing guidance is either too technical for end users or too vague to act
on. This tool bridges that: the security details are extracted automatically,
and Claude translates them into "here's why this looks risky and here's what to
do."

## What it does
- Accepts a raw email (headers + body, `.eml` or pasted text)
- Extracts IOCs: URLs, domains, IPs, sender mismatch, reply-to anomalies,
  attachment types, common phishing keywords
- Runs basic checks (SPF/DKIM/DMARC hints from headers, lookalike domains)
- Sends the findings to Claude for a plain-English risk explanation + verdict
- Shows a clean report: risk level, findings, and recommended action

## Tech stack
- Python 3.9+ (standard library only for the core — no required dependencies)
- Flask for the optional paste-in web UI
- Claude API (`anthropic`) for optional plain-English explanations
- `email` / `re` / `urllib` for parsing and IOC extraction

## Setup
```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -e ".[web,ai]"
export ANTHROPIC_API_KEY="sk-ant-..."   # optional; never commit this

# CLI
python -m phishing_analyzer -i sample_data/phishing.eml --explain

# Web UI
flask --app app run
```

## Roadmap
- [x] Email parser (headers, body, links, attachments)
- [x] IOC extraction + explainable scoring
- [x] Header auth checks (SPF/DKIM/DMARC) + lookalike-domain / punycode check
- [x] Claude prompt: technical findings → plain-English risk + action
- [x] Flask UI: paste box → report view
- [x] Sample phishing + benign email fixtures (synthetic)
- [ ] "How I used Claude" write-up

## Notes on safety
- Use only synthetic / defanged sample emails in the repo.
- Defang URLs in output (`hxxp://`, `example[.]com`) so nothing is clickable.
- API key from environment variable only.
