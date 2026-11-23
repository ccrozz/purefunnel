# CoverTheShift — Build Spec

**Domain:** covertheshift.com
**Vertical:** Restaurants and food service
**Parent:** Pure Asset Group, disclosed in the footer
**Deal band:** $50K to $150K
**Live design reference:** CoverTheShift artboard on the Pure Asset Group canvas

---

## 0. What this site does

One page. Every call to action goes to `https://www.pureassetgrp.com/apply` with UTM parameters. No form on this site, so no consent capture here.

```
https://www.pureassetgrp.com/apply?utm_source=meta&utm_medium=paid&utm_campaign=covertheshift&utm_content=<placement>
```

`utm_content` values in use: `nav`, `hero`, `footer`.

---

## 1. Design concept

**The ticket header.** A kitchen display stamps every order with a time and a status. The hero opens with one: `FRI 7:42 PM / WALK-IN DOWN / SERVICE ON`, the last word blinking the way a live ticket does. Under it, the biggest type on any of the three sites.

This brand is the inverse of FundThePractice. Polish reads as a company that has never funded a restaurant. Volume, warmth and speed are the register. The reader is tired, on a phone, in a basement office, possibly at 1am, and possibly not a native English speaker.

---

## 2. Tokens

```css
--char:   #171310;  /* warm charcoal ground, kitchen at night */
--warm:   #F4F0E8;  /* primary text, and the one light section */
--mutewarm:#A8A098; /* secondary text, 7.4:1 on char */
--steel:  #3A332C;  /* rules and dividers */
--flame:  #FF6A13;  /* accent */
--darkink:#4A433C;  /* body text on the light section */
```

Accent rules:

- Flame is a signal orange, high chroma. Deliberately not a muted terracotta or clay, which is the generated-design default.
- Flame on charcoal passes at 5.7:1, so it works as text here, unlike the amber on FundTheCrew.
- Used on: the ticket header, step markers, CTA fills, the closing section ground, link hover.

---

## 3. Type

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;500&display=swap">
```

| Role | Family | Settings |
|---|---|---|
| Display | Familjen Grotesk | 700, `line-height: 0.95; letter-spacing: -0.025em` |
| Subheads | Familjen Grotesk | 600 / 700 |
| Body | Familjen Grotesk | 400 / 500, `line-height: 1.65` |
| Ticket and labels | Spline Sans Mono | 400 / 500, `letter-spacing: 0.06em` |

Scale, fluid. Larger base than the other two brands throughout, because of where it gets read:

```css
h1 { font-size: clamp(52px, 10.5vw, 148px); max-width: 13ch; }
h2 { font-size: clamp(30px, 4vw, 50px); }
h3 { font-size: clamp(26px, 2.6vw, 34px); }
body, p { font-size: 17–18px; line-height: 1.65; }
```

---

## 4. Layout

Left-aligned. Tighter horizontal padding than the other two so the type can run bigger: `clamp(18px, 5vw, 80px)`. Vertical `clamp(48px, 6vw, 80px)`.

Section order:

1. Header — wordmark, parent line, phone, CTA
2. Hero — ticket header, enormous H1, one-line subhead, CTA
3. A closed day is gone for good — five hairline rows
4. Three intents — inverted to the warm light surface, three columns
5. How it works — three numbered steps
6. Closing CTA — full flame section, charcoal type
7. Footer — parent disclosure, address, phone, legal links

The inverted light section in the middle is the structural moment. It breaks the dark run and gives the three intents the most contrast on the page.

---

## 5. The ticket header

```
┌──────────────────────────────────────────┐
│ FRI 7:42 PM / WALK-IN DOWN / SERVICE ON  │
└──────────────────────────────────────────┘
```

- Inline flex, wraps on narrow screens
- 1px steel border, padding `11px 16px`
- Mono 12–14px/500 in flame
- Slashes in steel, so the fields read as separate stamps
- Final field blinks:

```css
@keyframes blink { 0%,55% { opacity: 1 } 56%,100% { opacity: .25 } }
.tick { animation: blink 1.9s steps(1, end) infinite }
@media (prefers-reduced-motion: reduce) { .tick { animation: none } }
```

The whole block rises once on load. Nothing else on the page animates.

---

## 6. Copy, verbatim

**Header**
Wordmark `CoverTheShift` · line beside it: `a service of Pure Asset Group` · CTA: `Apply now`

**Hero**
Ticket: `FRI 7:42 PM` / `WALK-IN DOWN` / `SERVICE ON`
H1: `The walk-in died Friday.`
Subhead: `The weekend didn't wait.`
CTA: `Apply now` · beside it: `$50K to $150K. 1 to 5 days after approval.`

**A closed day is gone for good**
Intro: `Most banks will not lend to restaurants at all. That is a category rule, not a judgment on your business. Here, card volume is what matters.`

| Item | Right-hand note |
|---|---|
| Walk-in, hood, fryer, ice machine | fix it today or close |
| Payroll | weekly, FOH and BOH |
| Vendors on COD | batch clears in three days |
| A slow month | weather, construction, season |
| Buildout, patio, second spot | when it is working |

**Three intents**

1. `Your bank sees a restaurant. Your card volume says otherwise.` — Every owner in this business has been turned down. It is the category, not you.
2. `Vendors are COD. The batch clears in three days.` — Payroll is weekly. Deposits lag. The timing was never going to work on its own.
3. `Already carrying a position or two.` — Common in this business. Tell us what is on the account and we will tell you straight what is possible.

**How it works**
`01 / TODAY` — Apply — Three months of statements. That is the start.
`02 / SAME DAY` — We call you — A real person, not a form reply. We go to the lenders that fund restaurants.
`03 / 1 TO 5 DAYS` — Funded — Two or three options. You pay a fee only if one funds.

**Closing**
H2: `Open tomorrow.`
Qualifier: `[MIN TIME IN BUSINESS] | [MIN MONTHLY CARD VOLUME] | $50K TO $150K`
CTA: `Apply now`

**Footer**
`CoverTheShift is a service of Pure Asset Group.`
`[STREET ADDRESS], New York, NY [ZIP] | (786) 604-7590`
Privacy · Terms

---

## 7. Voice rules for any copy added later

The shortest sentences of the three brands. One idea per line.

Plain English with no idioms, no slang, no wordplay. "Float the gap" and "carrying the job" work for contractors and will not land here. Say the literal thing.

No em dashes, no exclamation points, no rhetorical questions. Never the words fast, instant, guaranteed, approved.

Vocabulary that proves you are from this world: covers, the line, the pass, FOH and BOH, walk-in, hood, prep, batch, par, 86'd, food cost, labor cost.

**Do:** "The walk-in died Friday. The weekend did not wait."
**Don't:** "Don't let equipment woes put your restaurant dreams on ice!"

---

## 8. Emotional register

Lean on: the panic of equipment failing during service, exhaustion, pride in the room, staying open through a rough stretch, and family. This is the one brand of the three where family framing is right rather than wrong, because these are frequently literal family businesses.

Avoid: fear of closing stated directly, which is cruel and does not convert. Also avoid luxury or aspiration imagery, and anything implying their business is risky even while explaining why banks think so.

The third intent block matters more than it looks. Many of these merchants are stacked. A site that pretends otherwise reads as naive and one that lectures reads as insulting. The copy as written says positions are workable, so confirm that is true before it ships.

---

## 9. Technical requirements

This is the most mobile-weighted of the three and the most likely to load on a poor connection.

- Fluid root, no fixed width. 375px is a primary target, not a fallback.
- Page weight under 1MB. Keep images minimal or absent.
- Lighthouse mobile performance 90+ is a floor.
- Phone number as `tel:` link in the header and footer. This audience calls.
- Real `<a href>` and `<button>` elements.
- Visible focus ring: `outline: 3px solid var(--flame); outline-offset: 3px`.
- Tap targets at least 44px, larger where space allows.
- Own Meta pixel for this domain. Fire `Lead` on CTA click as an outbound signal.

---

## 10. Do not

- Plated food photography, dining rooms, wine glasses, anything from a restaurant's own consumer marketing. This site is aimed at the operator, not the diner, and getting that wrong signals you have confused the two.
- Testimonials unless real and permissioned in writing
- Any language implying judgment about existing positions
- Pure Asset's institutional deal sizes
- Idioms and wordplay
- Cards with shadows, gradient washes, icon sets
- Long paragraphs

---

## 11. Open items

- [ ] Confirm lender appetite, minimum card volume, and whether stacked merchants are genuinely workable. This vertical has the tightest appetite of the three and intent three promises openness.
- [ ] Confirm realistic turnaround on an equipment emergency, since the hero leans entirely on speed
- [ ] Fill the qualifier placeholders: minimum time in business, minimum monthly card volume
- [ ] Fill the footer address
- [ ] Confirm `/apply` reads and stores UTM parameters
- [ ] Replace the three intent headlines with language from a closer who has funded restaurants
