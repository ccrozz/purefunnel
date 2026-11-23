# FundThePractice — Build Spec

**Domain:** fundthepractice.com
**Vertical:** Private practices and healthcare
**Parent:** Pure Asset Group, disclosed in the footer
**Deal band:** $100K to $500K
**Live design reference:** FundThePractice artboard on the Pure Asset Group canvas

---

## 0. What this site does

One page. Every call to action goes to `https://www.pureassetgrp.com/apply` with UTM parameters. No form on this site, so no consent capture here.

```
https://www.pureassetgrp.com/apply?utm_source=meta&utm_medium=paid&utm_campaign=fundthepractice&utm_content=<placement>
```

`utm_content` values in use: `nav`, `hero`, `footer`.

---

## 1. Design concept

**The AR aging report.** Every practice owner reads one monthly: 0–30, 31–60, 61–90, 90+. It is the document where their own money sits getting older. The hero renders the pain as a bar spanning from the first bucket into the third, labeled service rendered on the left and payer settles on the right.

This is the one brand of the three where polish earns trust rather than costing it. Generous whitespace, a serif display, restrained accent. It should read closer to a private bank than to a lender.

---

## 2. Tokens

```css
--bone:    #F1F0EA;  /* page ground, warm pale, not cream-and-clay */
--white:   #FFFFFF;  /* panel surfaces */
--ink:     #14211E;  /* deep green-black */
--muted:   #5C6560;  /* secondary text, 5.0:1 on bone */
--viridian:#1F6F5C;  /* accent */
```

Accent rules:

- Viridian appears on the aging bar, the 2px rules above each step, CTA fills, and the closing section ground.
- Deliberately not medical blue-and-white, which is the category cliché, and not surgical-drape green, which is too literal.
- White text on viridian passes at 5.5:1. Viridian text on bone passes at 4.9:1, so it is usable but should stay rare.

---

## 3. Type

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Instrument+Sans:wght@400;500;600&display=swap">
```

| Role | Family | Settings |
|---|---|---|
| Display | Newsreader | 400 / 500, `line-height: 1.04; letter-spacing: -0.015em` |
| Subheads | Newsreader | 500, `line-height: 1.15` |
| Body | Instrument Sans | 400 / 500 / 600, `line-height: 1.7–1.75` |

Two families, clearly distinct. The serif carries the authority this audience responds to; the sans keeps the detail precise. No monospace anywhere on this site — it reads technical in a way that undercuts the register.

Scale, fluid:

```css
h1 { font-size: clamp(42px, 6.6vw, 94px); max-width: 17ch; }
h2 { font-size: clamp(30px, 3.4vw, 44px); }
h3 { font-size: clamp(24px, 2.3vw, 30px); }
body, p { font-size: 16–17px; line-height: 1.75; max-width: 54–58ch; }
```

Serif body gets longer measure and more line-height than the other two brands. This audience reads the whole page.

---

## 4. Layout

Left-aligned, wide margins, the most generous spacing of the three brands. Section padding `clamp(56px, 7vw, 96px)` vertical, `clamp(20px, 6vw, 104px)` horizontal. Hairline rules at `rgba(20,33,30,.18)`.

Section order:

1. Header — wordmark, parent line, phone, CTA
2. Hero — headline, subcopy, AR aging panel on white, CTA
3. What it funds — five hairline rows
4. Three intents — white surface, three columns
5. How it runs — three steps, each under a 2px viridian rule
6. Closing CTA — full viridian section, white type
7. Footer — parent disclosure, address, phone, legal links

---

## 5. The aging panel

A white panel containing a four-column grid.

```
┌──────────┬──────────┬──────────┬──────────┐
│ ████████████████████████████████│         │   ← bar spans columns 1–3
├──────────┼──────────┼──────────┼──────────┤
│  0–30    │  31–60   │  61–90   │   90+    │
└──────────┴──────────┴──────────┴──────────┘
  Service rendered                Payer settles
```

- Grid: `grid-template-columns: repeat(4, minmax(0, 1fr))`
- Bar: `grid-column: 1 / 4`, height 52px, viridian
- Bucket labels: each cell gets `border-top` and `border-left` hairlines, 13px/600
- Caption row below: `Service rendered` left, `Payer settles` right, 13px muted
- Panel footnote above a hairline: `Accounts receivable, by age. The work is done and the outcome was good. Someone else is holding the money.`

No dollar figures anywhere in this device. Inventing a distribution would be a fabricated statistic and this audience checks.

Motion:

```css
@keyframes grow { from { transform: scaleX(0) } to { transform: scaleX(1) } }
.bar { transform-origin: left; animation: grow 1.1s cubic-bezier(.22,.75,.2,1) both }
@media (prefers-reduced-motion: reduce) { .bar { animation: none } }
```

One moment. Nothing else on the page animates.

---

## 6. Copy, verbatim

**Header**
Wordmark `FundThePractice` in Newsreader 500 · line beside it: `a service of Pure Asset Group` · CTA: `Start an application`

**Hero**
H1: `You treated them in March. The payer settles in June.`
Body: `Production is strong. Collections are ninety days behind it. Payroll runs weekly either way.`
CTA: `Start an application` · beside it: `$100K to $500K. Funding in 1 to 5 days after approval.`

**What it funds**
Intro: `Capacity, equipment, and the gap between production and collections.`

| Item | Right-hand note |
|---|---|
| Accounts receivable | 30 to 90 days out, longer on a denial |
| Operatory or room buildout | the only way to add capacity |
| Imaging, chairs, lasers | capex that pays back over years |
| An associate before the production exists | six to twelve months of carry |
| A second location | buildout, equipment and ramp |

**Three intents**

1. `Your bank wants collateral. You have four hundred insured patients.` — A patient panel and practice goodwill are not what a bank lends against, and an SBA file takes months you may not have.
2. `The schedule is full and the rooms are not.` — Capacity in a practice is physical. Another operatory is the only way to see more patients, and the buildout is the gap.
3. `Staying independent is getting more expensive.` — Groups buying up practices nearby are doing it with institutional capital. Competing on equipment and hiring takes the same.

**How it runs**
`Step one, today` — Apply — Practice details and three months of statements. Nothing from your patient records, ever.
`Step two, same day` — Review — Your file goes to the lenders that underwrite practices, not to all sixty at once.
`Step three, 1 to 5 days` — Funded — Two or three real options to compare. A fee is owed only if one of them funds.

**Closing**
H2: `The work is done. The money should not take a season.`
Qualifier: `[MIN TIME IN PRACTICE] | [MIN MONTHLY COLLECTIONS] | $100K to $500K`
CTA: `Start an application`

**Footer**
`FundThePractice is a service of Pure Asset Group.`
`[STREET ADDRESS], New York, NY [ZIP] | (786) 604-7590`
Privacy · Terms

---

## 7. Voice rules for any copy added later

Complete sentences, measured pace, precise nouns. The only one of the three brands that can carry a longer paragraph. More formal than the others, no slang.

No em dashes, no exclamation points, no rhetorical questions. Never the words fast, instant, guaranteed, approved.

Vocabulary that proves you are from this world: production and collections not revenue and income, operatory or chair not treatment space, payer not insurance company, AR and aging, claim and EOB, associate, panel, case acceptance, credentialing. The production-versus-collections distinction is the single term that proves it.

**Do:** "You treated them in March. The payer settles in June. Payroll does not wait for either."
**Don't:** "Tired of waiting on insurance? Unlock the cash flow your practice deserves!"

---

## 8. Emotional register

Lean on: the indignity of waiting on a payer for money already earned, being capped by rooms rather than demand, independence as identity, and the second location.

Avoid absolutely: any suggestion that financing improves patient care, which is manipulative and this audience sees through it instantly. Also avoid urgency devices of any kind. No countdowns, no limited time, no spots remaining. Pressure reads as predatory here and ends the relationship permanently rather than slowing it down.

Never say directly that they are good clinicians and amateur business owners, even though it is often true. Show you understand the finance side so they do not have to.

---

## 9. Technical requirements

- Fluid root, no fixed width. Fully usable at 375px.
- Real `<a href>` and `<button>` elements.
- Visible focus ring: `outline: 3px solid var(--viridian); outline-offset: 3px`.
- Tap targets at least 44px.
- Phone number as `tel:` link.
- Lighthouse mobile performance 90+.
- Own Meta pixel for this domain. Fire `Lead` on CTA click as an outbound signal.

**Health data:** this site collects nothing. It links out. Never add a field that touches patient records, and never reference individual patient data anywhere in the copy. HIPAA does not attach to a practice owner filling in a financing form about their own business, and the way to keep it that way is to never go near it.

---

## 10. Do not

- Patient imagery of any kind, especially anything resembling a clinical encounter
- Stock photography of doctors with crossed arms or thumbs up
- Testimonials unless real and permissioned in writing
- Urgency devices, countdowns, scarcity
- Medical blue and white
- Pure Asset's institutional deal sizes
- Cards with shadows, gradient washes, icon sets
- Monospace type anywhere on this site

---

## 11. Open items

- [ ] Confirm which practice types the lenders actually have appetite for. Dental and veterinary usually underwrite better than medical.
- [ ] Confirm equipment and buildout financing is genuinely available, since two of the three intents depend on it
- [ ] Fill the qualifier placeholders: minimum time in practice, minimum monthly collections
- [ ] Fill the footer address
- [ ] Confirm `/apply` reads and stores UTM parameters
- [ ] Decide whether practice acquisition is in scope. It is the largest ticket in the vertical and would justify a fourth intent page.
- [ ] Replace the three intent headlines with language from a closer who has funded a practice
