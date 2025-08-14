---
title: "My GTM Engineering Wishlist"
excerpt: "What GTM Engineering currently lacks."
coverImage: "/placeholder-profile.jpg"
date: "2023-06-01T00:00:00.000Z"
category: "Productivity"
draft: true
bookSummary: true
author:
  name: "Apurva Shukla"
  picture: "/placeholder-profile.jpg"
ogImage:
  url: "/placeholder-profile.jpg"
---

### Background
GTM engineering (go-to-market engineering) is a cross-functional, technical role that designs and operates the systems, data flows, and automations powering sales, marketing, and customer success. It sits between RevOps and product/engineering and focuses on turning GTM strategy into scalable, reliable workflows (enrichment, routing, outreach, reporting, and feedback loops). This discipline has risen alongside AI/no-code and a fragmented GTM toolchain, with teams like Clay popularizing the term and approach.

- **Why now**: tool sprawl, siloed data, and the need for personalized, signal-driven outreach at scale. GTM engineers close the gap between strategy and executable systems in hours/days instead of months.

### Current definitions
- **Go-To-Market Alliance**: GTM engineers architect and maintain the GTM stack, automate workflows, and ensure data moves end-to-end for revenue reporting and decisioning. See “What is GTM Engineering?” ([link](https://www.gotomarketalliance.com/what-is-gtm-engineering-the-complete-guide-to-the-future-of-scalable-growth/)).
- **Tabula**: A SaaS career path framing—GTM engineers translate commercial goals into technical specs, integrations, and automation; they also enable and train teams ([link](https://www.tabula.io/blog/becoming-a-gtm-engineer-in-saas-career-path-guide)).
- **Salesforge glossary**: Emphasizes pipeline building, data quality, and automation that directly supports revenue teams ([link](https://www.salesforge.ai/glossary/gtm-engineer-go-to-market-engineer)).
- **MAccelerator**: Distinguishes GTM engineering from traditional marketing: automation-first, AI-driven personalization, and full-funnel data plumbing ([link](https://maccelerator.la/en/blog/entrepreneurship/gtm-engineering/)).
- **Mastering Revenue Operations**: Positions GTM engineering as a rising function that blends technical execution with revenue strategy ([link](https://masteringrevenueoperations.com/p/the-rise-of-the-go-to-market-engineer)).
- **Clay (company blog/newsletter)**: “The Rise of the GTM Engineer”—internal product builders for GTM who prototype, ship, and scale signal-based workflows (ICP detection, enrichment, AI messaging, orchestration) ([Clay blog](https://www.clay.com/blog/gtm-engineering), [The GTM Engineer](https://thegtme.com/p/the-rise-of-the-gtm-engineer)).

### The counter view
- **Risk of silos**: Spinning up a standalone GTM engineering group can fragment ownership and slow feedback loops if not embedded with product and RevOps ([LLR Partners](https://www.llrpartners.com/growth-bit/why-most-go-to-market-strategies-wont-get-you-to-market-and-a-template-that-will/)).
- **Framework rigidity / cargo culting**: Over-prescriptive playbooks lead to poor fit, morale issues, and mediocre outcomes—teams should adapt patterns to context ([HN discussion](https://news.ycombinator.com/item?id=40525802)).
- **Misplaced prioritization**: Automating workflows without strong product–market fit or positioning can scale noise instead of impact ([Go-To-Market Alliance](https://www.gotomarketalliance.com/top-challenges-in-go-to-market/)).
- **Borrowing B2C/big-tech formulas**: Tactics from consumer at scale don’t translate to niche B2B with long cycles and complex value articulation ([RocLogic](https://roclogicmarketing.com/marketing-ideas-for-engineering-companies/)).
- **Complexity and overhead**: New layers of tooling/process can add coordination tax if the GTM strategy is fuzzy; measure what matters and prune abstractions early ([Clay signals context](https://www.clay.com/blog/signals)).

### My GTM engineering wishlist
- **Git-like auditing and safe deploys (dbt for GTM)**
  - The current problem: GTM changes (fields, segments, scoring, routing, sequences) happen ad hoc in vendor UIs with little history, ownership, or review. Incidents are caused by silent changes, drift between sandboxes and prod, and no fast rollback.
   - Very visible in day to day (Marketing ops channel is filled with requests like 'why did you add this person to this campaign', 'why did these emails not go out', 'why is this pipeline not ingesting any new leads for the last 1 month', 'these leads got the wrong automated inbound followup sequences')
   - very different vibes in the data-engg channel (my buildkite build failed - do an empty commit to retrigger it, I don't have permissions)
   - the difference is that marketers are not empowered at the moment; they just do highlevel work, and have to trust the operations onto someone else; marketers uphappy; operations drowned; other functions have figured this out, and have made everyone a "builder"
  - How it plagues GTM: trust erodes in lead routing and metrics; sales gets whiplash (missed or duplicate touches); teams avoid experimentation for fear of breaking prod; audits/compliance are painful; team scales lineraly; always defensive and never proactive; marketers don't have tools to diagnose
  - How we solve it (plain language): treat GTM like software. Every change is proposed, reviewed, tracked, tested on a safe copy, and only then published. If it backfires, we click “undo” and roll back instantly—just like version history in Google Docs, but for your GTM systems.
  - Example: a new routing rule accidentally sends EMEA leads to the US team. With versioning and environments, we spot the change in a diff, test it on a subset in staging, and prevent the mishap—or roll it back in seconds if it slips through.
  - You don’t need to “code” routing to get these benefits: keep a human‑readable, declarative spec (YAML/JSON or a simple UI) as the source of truth. A thin adapter syncs this spec to tools like LeanData, Salesforce assignment rules/flows, HubSpot workflows, or Marketo smart campaigns via their APIs. Ops can keep using their tools; the spec gives version history, reviews, and rollbacks.
  - Non‑technical editing: provide a small admin UI that writes to the spec and opens a change request. Behind the scenes, the adapter compiles the spec to each vendor’s native constructs.
  - Safety net: dry‑run a week of historical leads through the proposed spec, compare expected owners vs. current prod, and only ship when variance is within tolerance.
  - Version every asset: lists, filters, transformations, scoring rules, playbooks, sequences, templates, and routing logic.
  - Branch/PR review for GTM changes with diffs, owners, approvals, and rollbacks.
  - Environments: dev/staging/prod for data flows and automations; dry-runs with sample cohorts; change-sets with impact analysis.
  - Drift detection between environments and downstream tools (CRM/MA) with auto-fix suggestions.

- **First-class observability and alerting (Sentry/Opsgenie/Datadog for GTM)**
  - The current problem: GTM pipelines are stitched across many tools; failures are silent (webhooks drop, vendor rate limits, schema changes). Teams discover issues only when reps complain or numbers dip; no end-to-end visibility or SLOs.
  - How it plagues GTM: stale/dirty data drives poor targeting and broken sequences, SLAs are missed, firefighting replaces iteration, and vendors/teams finger-point.
  - How we solve it (plain language): add a “check-engine light” to the GTM machine. We measure freshness, success rates, and data quality. When anything degrades, alerts fire with a clear playbook—retry, switch providers, or pause a broken sequence—before customers feel it.
  - Example: enrichment API throttles at quarter-end. An alert triggers auto-retry with backoff and temporarily switches to a backup provider. Reps never see blank fields; dashboards stay healthy.
  - Health checks for signals, enrichments, syncs, and webhooks; SLOs on freshness, latency, and success rate.
  - Data quality monitors (schema, nulls, uniqueness, join cardinality, PII leaks) with quarantine lanes.
  - Alerting and auto-remediation playbooks (retry with backoff; fallback providers; circuit breakers; route to manual review).
  - End-to-end lineage from source signal → transforms → scoring → orchestration → CRM/engagement writebacks.
  - Upstream drift and bad-data resilience:
    - The current problem: upstream tools can mis-enrich (wrong email), misclassify (wrong country), or change parsing/models without notice, cascading into bad routing and messaging.
    - How we solve it: attach provenance and confidence to every field; cross-check critical attributes via two or more sources (e.g., country via domain TLD, IP geo, billing address); add validation rules (ISO country list, email syntax + optional MX, E.164 phone matching country); canary-test provider changes; set fail-open/closed policies per field (e.g., unknown country → route to global triage). Build a one-click revert/replay: fix the field, recompute segments/routing, and push corrections downstream. Feed rep feedback (“wrong team/contact”) back into the golden record and provider tickets.
    - Example: a contact gets country=GB from an enrichment vendor but IP and billing = US. The policy flags a mismatch, quarantines the route, assigns to a triage queue, and opens a correction. Once confirmed US, the system replays routing and updates the vendor via API.

- **Codified GTM primitives with best-case defaults**
  - The current problem: Every play becomes bespoke glue; naming, identity resolution, signals, and scoring differ by team. Tribal knowledge lives in wikis and operators’ heads; templates lack typing and validation.
  - How it plagues GTM: fragile, non-reusable work; hard onboarding; inconsistent buyer experience; risky changes; inconsistent analysis across plays.
  - How we solve it (plain language): standardize the LEGO bricks. Define common building blocks (Signal, Enrichment, Scoring, Segment, Message) with clear names, guardrails, and defaults. Teams assemble plays from the same bricks, so they’re safer, reusable, and measurable.
  - Example: the “hiring for role X” play reuses the same signal and scoring primitives across regions. Teams tweak thresholds, not code. Messaging templates are typed and validated—no broken variables in live emails.
  - Reusable, typed building blocks: Signal, Enrichment, Identity Resolution, Scoring, Segmentation, Message Template, Orchestration, SLA, and Consent.
  - Provenance and Confidence: every attribute carries source, timestamp, and a confidence score; routing and messaging can require minimum confidence or majority-vote across sources.
  - Validation & Contracts: field-level validators (syntax, reference lists, semantic checks like country ↔ phone code), plus external data contracts with providers (schema, types, and change-notice expectations).
  - Opinionated recipes for common jobs-to-be-done (e.g., hiring signal play, competitor tech-change, intent surge) with tunable parameters.
  - Guardrails: rate limits, channel conflicts, quiet-hours, opt-out propagation, and compliance-by-construction.
  - Evaluation harnesses: A/B and holdout frameworks, lift measurement beyond opens/replies, and cohort-based attribution.

- **Operating model**
  - The current problem: GTM systems are treated as one-off “ops” instead of software products. No clear owners/on-call, ad hoc change management, incidents closed without postmortems, and fuzzy success metrics.
  - How it plagues GTM: recurring outages and hidden toil, slow iteration, misaligned incentives across sales/marketing/ops, and leadership lacks a single pane of glass.
  - How we solve it (plain language): run GTM systems as a product. Assign ownership, set SLAs, keep a backlog, ship on a release train, and do real incident reviews. Share one dashboard that shows health, outcomes, and what’s shipping next.
  - Example: a weekly “GTM release” bundles small improvements with clear release notes to sales and marketing. A missed SLA triggers on-call, a postmortem, and a fix that prevents recurrence.
  - Treat GTM systems like software: owners, SLAs, on-call, incident postmortems, and runbooks.
  - Productize internal workflows: backlog, roadmaps, success metrics, and shared dashboards for Sales/Marketing/Success.

References and further reading: [Go-To-Market Alliance](https://www.gotomarketalliance.com/what-is-gtm-engineering-the-complete-guide-to-the-future-of-scalable-growth/), [Tabula](https://www.tabula.io/blog/becoming-a-gtm-engineer-in-saas-career-path-guide), [Salesforge](https://www.salesforge.ai/glossary/gtm-engineer-go-to-market-engineer), [MAccelerator](https://maccelerator.la/en/blog/entrepreneurship/gtm-engineering/), [Mastering RevOps](https://masteringrevenueoperations.com/p/the-rise-of-the-go-to-market-engineer), [Clay: GTM engineering](https://www.clay.com/blog/gtm-engineering), [The GTM Engineer](https://thegtme.com/p/the-rise-of-the-gtm-engineer), [RevPartners](https://blog.revpartners.io/en/revops-articles/the-most-underrated-role-in-b2b-the-gtm-engineer), [Clay: Signals](https://www.clay.com/blog/signals).

### What the common GTM platform should look like (the dream)
A single, shared platform that gives GTM the same leverage engineers get from GitHub, dbt, Terraform, and Datadog—without forcing everyone to code.

- **One source of truth (GTM Spec)**: A readable, versioned spec for segments, routing, scoring, enrichment, sequences, SLAs, and policies. Propose changes, review, test in a sandbox, then publish.
- **Universal adapters**: Bi‑directional sync to Salesforce/HubSpot/Marketo/LeanData/Outreach/Salesloft/warehouse. The platform compiles the spec into each tool’s native constructs and continuously checks for drift.
- **Identity and golden records**: Built‑in identity resolution for contacts/accounts; every attribute carries provenance, timestamp, and confidence with majority‑vote across providers.
- **Orchestration with guardrails**: A workflow engine that schedules, rate‑limits, retries, backfills, and respects quiet hours/consent—safe by default.
- **Observability and lineage**: Health, freshness, error budgets, and traces from signal → transform → score → route → CRM writeback. Alerts with auto‑remediation.
- **Simulation and shadow mode**: Replay historical data, canary‑test changes on a subset, compare impact diffs before rollout.
- **Governance**: Roles/permissions, approvals, audit trails, PII controls, and policy-as-code for compliance.
- **Primitives marketplace**: Vetted, versioned building blocks and recipes (e.g., “Hiring signal play”, “Competitor tech-change”) that teams can adopt and tune—no bespoke rewrites.
- **Extensible, but safe**: SDK for custom adapters/primitives when needed; most users live in UI and spec, not code.
- **An open standard**: A vendor‑neutral GTM Spec (like OpenAPI for GTM) that vendors can adopt to interoperate out of the box.

A tiny glimpse of how readable this could be:

```yaml
segment: emea_enterprise
where:
  country.confidence >= 0.8
  and country.code in ["GB","DE","FR","NL","SE"]
  and employee_count >= 1000
route:
  owner: leandata.queue("EMEA_ENTP")
  fallback: triage.global if country.conflict == true
slo:
  freshness_minutes: 30
```

### Do we have to teach everyone to code?
No. We raise the abstraction so most GTM work is done safely in UI and a readable spec.
- **Ops users**: compose plays, change thresholds, approve deploys—all in UI. No code.
- **GTM engineers**: own the spec, complex logic, and quality bars; occasionally write lightweight extensions.
- **Platform engineers**: build adapters/primitives once so everyone else can reuse safely.

### Pragmatic migration path
- **Extract and observe**: Export today’s configs into the spec; turn on drift alerts without changing behavior.
- **Govern a slice**: Start with routing or one high‑impact segment; enable versioned changes and sandbox tests.
- **Add resilience**: Layer identity resolution, validation rules, and upstream confidence policies.
- **Expand safely**: Bring in orchestration and messaging with simulations, canaries, and clear SLOs.

This isn’t about teaching everyone to code—it’s about giving GTM a common operating system that makes good behavior the default, and safe iteration the norm.

### 10-year GTM vision: the GTM Operating System (control plane over your vendor plane)
A cutting-edge company won’t rip out Salesforce/HubSpot/Marketo/LeanData or enrichment vendors. Instead, it will run a common “GTM OS” on top—just like Terraform sits over clouds, dbt sits over warehouses, and feature flags sit over apps.

- **One GTM Spec (open standard)**: Vendor‑neutral, readable spec for segments, routing, scoring, identity, sequences, SLOs, policies. Human‑friendly in UI; machine‑friendly for CI/CD. Adapters compile to Salesforce flows/assignment, HubSpot/Marketo workflows, LeanData graphs, Outreach/Salesloft, and reverse‑sync diffs back.
- **Real‑time identity and consent fabric**: A unified account/contact graph with provenance, timestamps, confidence, and consent across all tools. Majority‑vote or confidence thresholds per attribute; jurisdictional rules (GDPR/CCPA) encoded as policy.
- **Data contracts and provider marketplace**: Every field has a contract (schema, types, freshness). Providers (Clearbit, ZoomInfo, Clay, etc.) are orchestrated like microservices: routed by cost/quality SLOs, canaried, and auto‑switched on degrade. Per‑field confidence scores and cost per correct record.
- **Event‑native GTM**: Streaming event backbone (product telemetry, web, intent, billing, support) with SLOs and lineage. GTM logic is event‑driven, not batch‑scheduled. Sub‑minute freshness for critical paths.
- **Causal GTM by default**: Continuous experimentation and causal inference replace vanity correlations. Auto‑bandits, CUPED, geo‑holdouts, and non‑interference guardrails. Every play has an always‑on control.
- **Simulation and shadow mode**: A “digital twin” of GTM runs proposed changes against historical/event streams. Compare diffs on routing, pipeline, and risk before rollout. Shadow benchmarks new providers/logic for weeks.
- **Autonomous playbooks with guardrails**: Agentic workflows generate copy, pick channels, and time outreach—constrained by brand style, compliance, and rep preferences. Reps approve or nudge; the system learns safely.
- **Observability and self‑healing**: SLOs for freshness, latency, and success; error budgets; root‑cause with traces signal → transform → score → route → CRM writeback. Auto‑remediation (retry/backoff, fallback providers, circuit breakers, triage queues).
- **Outcome‑based routing and funding**: Routing, budgets, and headcount allocation respond to predicted LTV/likelihood‑to‑convert, not just MQL scores. Models are explainable, debiased, and audited.
- **Policy‑as‑code for safety/compliance**: Regional privacy, quiet hours, channel conflicts, and fairness constraints are enforceable policies. Clean‑room or private‑join for sensitive data collaboration with partners.
- **Primitives and marketplace**: Standard bricks (Signal, Enrichment, Identity, Score, Segment, Message, Orchestration, SLA, Consent, Policy). A marketplace of vetted recipes (e.g., “Net new EMEA enterprise,” “Tech stack change,” “Champion job change”) tuned to your ICP.
- **GTM IDE + CI/CD**: Proposals, diffs, reviews, simulations, canaries, and instant rollbacks. Postmortems and change logs are native. Time‑to‑change for a segment/route measured in days, not quarters.
- **Product‑first tether**: Scale gates tied to product milestones (activation/retention/NPS). GTM can’t scale noise—experiments auto‑pause if product signals degrade.

### What “provenance” means here
Provenance is the audit trail for any piece of GTM data.
- **What it captures**: where a value came from (provider, scraper, model), when it was obtained, how it was transformed, and any evidence (e.g., page URL, API response, model version).
- **Why it matters**: lets the system (and humans) resolve conflicts, calculate confidence, majority‑vote across sources, detect drift, explain decisions, and quickly roll back or correct downstream records.
- **How it’s used**: routing and messaging can require a minimum confidence, prefer specific sources for certain fields, or quarantine conflicts to a triage queue; corrections replay downstream with a full audit trail.

I wrote a blog post with the above info:

### GTM OS: a field guide for builders (and skeptics)
If you’ve ever woken up to discover your “EMEA enterprise” segment mysteriously shrank overnight, or that a country misclassification routed a seven‑figure account to the wrong team, you’ve felt it: GTM is the last mission‑critical system without a real control plane.

Infrastructure got Terraform. Analytics got dbt. Product got feature flags. GTM is still a pile of tabs, each with a different truth. We can do better—without ripping out Salesforce, HubSpot, Marketo, LeanData, or your favorite enrichment vendors.

Here’s the practical future a cutting‑edge GTM org will run—and how you can inch toward it today.

#### 1) The GTM Spec: one language, many tools
GTM needs its “Terraform HCL” moment. A readable spec—segments, routing, scoring, SLAs, policies—that compiles into native configs in Salesforce, HubSpot/Marketo, LeanData, Outreach/Salesloft, and your warehouse. Ops edits in a UI, GTM engineers review diffs, and rollbacks are instant.

What changes: you stop arguing about whose tab is right. The spec is the source of truth; adapters make the tools agree; drift is a visible diff, not a ghost.

#### 2) Identity and consent fabric: facts with receipts
Every field carries provenance (who/when/how), a confidence score, and consent. Critical facts (country, industry, employee count) are cross‑checked across providers and product signals. Conflicts go to a triage queue, not to production routing.

What changes: upstream mistakes don’t cascade. You get “confidence‑aware” routing and messaging, and a one‑click replay after corrections.

#### 3) Event‑native GTM with observability
A streaming backbone connects product telemetry, web, intent, billing, and support. We track freshness/latency/error budgets end‑to‑end—signal → transform → score → route → CRM writeback—like traces in Datadog.

What changes: you catch issues before reps do. Throttling? Fail over. Schema change? Quarantine. Message draft variable breaks? Auto‑rollback the sequence.

#### 4) Simulate, canary, ship
Before any change, press “What if?” Run the new logic on historical streams, see deltas to routing/pipeline/risk, then canary to 5% of traffic. Roll out when safe—or roll back in seconds.

What changes: the six‑month lag collapses. Safe iteration becomes the norm.

#### 5) Causal Inference by default
Every play has a control. We use uplift models, CUPED, geo holdouts, or bandits. Vanity correlation dies; causality wins. If it doesn’t move pipeline quality, conversion, or product activation, it sunsets.

What changes: fewer loud opinions, more quiet wins. Plays earn their keep or get retired.

#### 6) Guardrails that scale humans, not headcount
Policies (quiet hours, channel conflicts, regional privacy, fairness) are encoded once and enforced everywhere. Reps approve or nudge AI‑generated outreach inside guardrails. Platform engineers add an adapter once; everyone else gets the benefit.

What changes: speed without chaos. Custom when it differentiates; standard by default.

### “Isn’t this overbuild?” No—if you stage it
- Extract and observe: export current configs to a spec; turn on drift alerts; change nothing.
- Govern a slice: pick one high‑impact segment or routing path. Add reviews, tests, and rollbacks.
- Add resilience: identity resolution, validation rules, confidence thresholds, and upstream canaries.
- Expand safely: simulation, canaries, SLOs; then bring messaging and orchestration into the fold.

A simple rule: if we can’t simulate it, canary it, and roll it back, we don’t ship it.

### “But Salesforce/HubSpot/Marketo/LeanData aren’t going away”
Exactly. They’re the execution plane. The GTM OS is the control plane—like Terraform over clouds or dbt over warehouses. The OS keeps the tools consistent, observable, and safe to change.

### A day in the life (2035 edition)
- 9:10 – Drift alert: country confidence dropped for a provider in EMEA. System quarantines affected routes; fails over to backup.
- 9:30 – Spec change: new enterprise threshold. Simulation shows +8% pipeline from EMEA; V@R within budget. Canary to 10%.
- 10:00 – Outreach variant B wins with +12% meetings/rep/week; bandit shifts traffic gradually.
- 11:15 – Rep flags a wrong owner. Provenance shows the conflict; fix applied; replay corrects downstream with audit.
- 16:00 – Release notes post: what shipped, what improved, what’s next. Time‑to‑change this week: 3 days.

### Call to action
- Measure your time‑to‑change for a segment/route today. Set a 30‑day goal to cut it in half.
- Export your routing to a human‑readable spec (even a spreadsheet). Start diffing and reviewing.
- Add one confidence rule to a critical field (country, industry) and quarantine conflicts.
- Pick one change to simulate on last week’s leads before you ship it.

GTM is the operating system of revenue. It deserves the same tooling leaps infra and analytics enjoyed. We don’t need to teach everyone to code—we need a common spec, strong adapters, and safety rails that make the right thing easy.

### Do GTM tools expose APIs for an OS layer? Yes—via adapters
Most core GTM systems have APIs (Salesforce, HubSpot, Marketo, Outreach, Salesloft, Intercom, Zendesk, popular enrichment providers). Coverage varies (rate limits, partial objects, async/bulk quirks), but it’s sufficient to build a control plane. Below is an example of a GTM Spec that compiles to Outreach’s v2 API for Sequences and enrollments.

#### Example: GTM Spec → Outreach (v2) adapter
```yaml
apiVersion: gtm.os/v1
kind: Sequence
metadata:
  name: enterprise_prospecting
  description: >-
    Enterprise outbound, product-led narrative. Finish on reply; throttled adds.
spec:
  provider: outreach.v2
  attributes:
    name: "Enterprise Prospecting"
    description: "PQL-first enterprise sequence"
    enabled: true
    finishOnReply: true
    durationInDays: 28
    throttleCapacity: 500
    throttleMaxAddsPerDay: 200
    throttlePaused: false
    tags: ["enterprise", "pql", "emea"]
    salesMotion: "outbound"
    sequenceType: "default"
  policy:
    canaryPercent: 10
    rollbackOnErrorRate: 0.05
---
apiVersion: gtm.os/v1
kind: Enrollment
metadata:
  name: enroll_emea_enterprise_into_enterprise_prospecting
spec:
  provider: outreach.v2
  segmentRef: emea_enterprise   # defined elsewhere in the GTM Spec
  sequenceRef: enterprise_prospecting
  constraints:
    # Only enroll when confidence and consent are sufficient
    minConfidence:
      email: 0.9
      country: 0.8
    requireConsent: true
  quietHours:
    regionAware: true
  throttle:
    maxAddsPerDay: 200
  canary:
    percent: 10
```

Adapter mapping (illustrative):
- Sequence → Outreach POST/PUT `/api/v2/sequences` with `data.attributes`:
  - `name`, `description`, `enabled`, `finishOnReply`, `durationInDays`,
    `throttleCapacity`, `throttleMaxAddsPerDay`, `throttlePaused`, `tags`, `salesMotion`, `sequenceType`.
- Enrollment → Outreach create sequence state for prospects in `segmentRef`:
  - Resolves prospects, then POST to appropriate Outreach sequence‑state endpoint to add to `sequenceRef` respecting throttle/canary.
- Policies → operationalized by the control plane:
  - Canary and rollback guardrails; confidence/consent checks gate enrollments; quiet hours enforced before API calls.

This spec stays human‑readable; the adapter handles Outreach API nuances (payload shape, pagination, retries, rate limits) and keeps vendor config in sync with diffs and drift checks.

