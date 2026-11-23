# FundTheCrew — Build Spec

**Domain:** fundthecrew.com
**Vertical:** Construction and trades
**Parent:** Pure Asset Group, disclosed in the footer
**Deal band:** $150K to $500K
**Live design reference:** FundTheCrew artboard on the Pure Asset Group canvas

---

## 0. What this site does

One page. Every call to action goes to `https://www.pureassetgrp.com/apply` with UTM parameters. There is no form on this site and therefore no consent capture here, because the merchant completes Pure Asset's own application.

```
https://www.pureassetgrp.com/apply?utm_source=meta&utm_medium=paid&utm_campaign=fundthecrew&utm_content=<placement>
```

`utm_content` values in use: `nav`, `hero`, `footer`. Add one per new CTA. The application must read and persist these or attribution is lost, which is the single number the whole program is judged on.

---

## 1. Design concept

**The dimension line.** Construction drawings measure a gap with a tick, an arrow, a span, and the measurement labeled on it. The product is one gap: work finished versus money received. The hero renders that in the audience's own drafting language instead of stock photography.

Spend the boldness there. Everything below the hero is quiet: hairline rules, generous space, no cards, no shadows, no icons.

---

## 2. Tokens

```css
--concrete:  #DCDFDA;  /* page ground, cool, not cream */
--chalk:     #F5F6F3;  /* alternate section surface */
--graphite:  #16191C;  /* ink, rules, dark section */
--steel:     #4A524E;  /* secondary text, passes 4.5:1 on concrete */
--hivis:     #F2B705;  /* accent: measurement + action only */
--muted-ink: #C3C8C2;  /* body text on graphite sections */
```

Rules on the accent:

- Amber appears only on the dimension measurement, the short rules above intent headings, step labels, and CTA fills.
- Never set amber as text on the concrete ground. It fails contrast at 1.35:1. Amber as a fill with graphite text on top is correct.
- Never use amber as decoration, a gradient, or a border on a card.

---

## 3. Type

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,400..800&family=IBM+Plex+Mono:wght@400;500&display=swap">
```

| Role | Family | Settings |
|---|---|---|
| Display | Archivo | `font-stretch: 115%; font-weight: 800; line-height: 0.94; letter-spacing: -0.02em` |
| Subheads | Archivo | `font-stretch: 104%; font-weight: 800; line-height: 1.08` |
| Body | Archivo | 400 / 600, `line-height: 1.6–1.65` |
| Annotation | IBM Plex Mono | 400 / 500, `letter-spacing: 0.04em` |

Monospace is restricted to dimension labels, step markers, qualifier strings and the footer. It is used because drawing annotation is genuinely monospaced lettering in this trade, not as a generic data-label style. Do not extend it to body copy.

Scale, fluid:

```css
h1 { font-size: clamp(46px, 8.4vw, 118px); max-width: 15ch; }
h2 { font-size: clamp(30px, 3.6vw, 46px); }
h3 { font-size: clamp(25px, 2.4vw, 31px); }
body, p { font-size: 16–17px; line-height: 1.65; max-width: 56ch; }
```

---

## 4. Layout

Left-aligned throughout. No centered text anywhere. Section padding `clamp(52px, 6vw, 84px)` vertical, `clamp(20px, 5vw, 88px)` horizontal. Full-bleed 1px graphite rules between sections.

Section order:

1. Header — wordmark, parent line, phone, CTA
2. Hero — headline, dimension line, subcopy, CTA
3. What it funds against — chalk surface, five hairline rows
4. Three intents — three equal columns, each with a short amber rule above the heading
5. How it runs — graphite surface, three numbered steps
6. Closing CTA — headline, qualifier string, button
7. Footer — parent disclosure, address, phone, legal links

---

## 5. The dimension line

Built from flex children, not an SVG, so it stays fluid and editable.

```
[2px × 52px tick] [———— flex:1 hairline ————] [amber chip: 60 DAYS] [———— flex:1 ————] [tick]
WORK COMPLETE                                                                      GC PAYS
```

- Ticks: `width: 2px; height: 52px; background: var(--graphite)`
- Spans: `height: 2px; background: var(--graphite); flex: 1; min-width: 10px`
- Chip: amber fill, graphite mono text at 14px/500, padding `9px 18px`
- Caption row: mono 12px steel, `justify-content: space-between`

Motion, the only animated moment on the page:

```css
@keyframes draw { from { transform: scaleX(0) } to { transform: scaleX(1) } }
.seg   { animation: draw .9s cubic-bezier(.2,.7,.2,1) both }
.seg.l { transform-origin: left }
.seg.r { transform-origin: right; animation-delay: .08s }
.chip  { animation: rise .5s .72s both }
@media (prefers-reduced-motion: reduce) { .seg, .chip { animation: none } }
```

No scroll-triggered reveals anywhere else. No hover transitions on anything except the CTA brightness and link color.

---

## 6. Copy, verbatim

**Header**
Wordmark `FUNDTHECREW` · line beside it: `a service of Pure Asset Group` · CTA: `Start an application`

**Hero**
H1: `You finish the work. They pay in sixty.`
Dimension: `WORK COMPLETE` / `60 DAYS` / `GC PAYS`
Body: `Payroll is weekly. Progress billing is monthly. Retainage is whenever they feel like it. The math was never going to work on its own.`
CTA: `Start your application` · beside it: `$150K to $500K. Funding in 1 to 5 days after approval.`

**What it funds against**
Intro: `Money you have already earned, and the costs that land before it arrives.`

| Item | Right-hand note |
|---|---|
| Progress billing and receivables | net 30 to 90 from the GC |
| Retainage | 5% to 10%, held to project close |
| Approved change orders | worked, billed, not yet paid |
| Mobilization on a new award | before the first draw lands |
| Equipment purchase or repair | when the crew is standing around |

**Three intents**

1. `Your bank won't lend against a receivable they can't pronounce` — You are profitable, you are ten years in, and they still said no. That is a credit box, not a verdict on your business.
2. `You're carrying the job until the GC pays` — Materials went out on your dime. The crew gets paid Friday. The draw clears whenever the general gets to it.
3. `You passed on the bid because you couldn't float the materials` — The job was yours. The crew was ready. The gap between mobilization and the first draw was the only thing in the way.

**How it runs**
`01 / TODAY` — Apply — Business details and three months of statements. No tax returns to start.
`02 / SAME DAY` — Review — Your file goes to the lenders that actually fund construction, not all sixty at once.
`03 / 1 TO 5 DAYS` — Funded — Two or three real options to choose from. You only pay a fee if one of them funds.

**Closing**
H2: `The job is already won. Fund it.`
Qualifier: `[MIN TIME IN BUSINESS] | [MIN MONTHLY REVENUE] | $150K TO $500K`
CTA: `Start your application`

**Footer**
`FundTheCrew is a service of Pure Asset Group.`
`[STREET ADDRESS], New York, NY [ZIP] | (786) 604-7590`
Privacy · Terms

---

## 7. Voice rules for any copy added later

Short sentences. Second person. Active voice. The reading level of a text message. Write like a foreman explains something.

No em dashes, no semicolons, no exclamation points. Never the words fast, instant, guaranteed, approved.

Vocabulary that proves you are from this world: progress billing not invoice, retainage not holdback, the GC not the client, your crew not your staff, punch list, change order, mobilization, draw, bid.

**Do:** "The job is won. The materials are due now. The GC pays in sixty."
**Don't:** "We provide tailored working capital solutions designed to bridge the gap between project commencement and receivable collection."

---

## 8. Emotional register

Lean on: pride in the crew, being capped by cash rather than ability, carrying the risk while the GC holds the money, the indignity of a decline when profitable, and turning down work. That last one is the sharpest hook in the vertical.

Avoid: desperation framing, fear of going under, family or dependents, luxury or aspiration. He is not drowning, he is annoyed. Treating him as desperate insults him and he leaves.

---

## 9. Technical requirements

- Fluid root, no fixed width. Fully usable at 375px.
- Real `<a href>` and `<button>` elements. No clickable divs.
- Visible focus ring: `outline: 3px solid var(--graphite); outline-offset: 3px`.
- Tap targets at least 44px.
- Phone number as `tel:` link.
- Lighthouse mobile performance 90+.
- Self-host or preconnect the fonts. Two families maximum.
- Own Meta pixel for this domain. Fire `Lead` on CTA click as an outbound signal, since the conversion itself happens on Pure Asset's domain.

---

## 10. Do not

- Pure Asset's institutional deal sizes. An $85M credit facility makes a contractor with a $200K need feel too small to bother you.
- Testimonials of any kind unless real and permissioned in writing.
- Stock photography of hard hats, clipboards, handshakes or blueprints.
- Cards with rounded corners and soft shadows.
- Icon sets. There are no icons on this page.
- Gradient washes, glassmorphism, scroll-jacking.
- All-caps eyebrow labels above headings. Caps appear only inside dimension annotations, where drawing convention justifies them.

---

## 11. Open items

- [ ] Confirm the 60+ lender count and the 1 to 5 day funding window are substantiable
- [ ] Fill the qualifier placeholders: minimum time in business, minimum monthly revenue
- [ ] Fill the footer address
- [ ] Confirm `/apply` reads and stores UTM parameters
- [ ] Confirm retainage-specific funding is a product the lenders actually offer, since the copy leans on it
- [ ] Replace the three intent headlines with language taken from a closer who has funded construction deals
