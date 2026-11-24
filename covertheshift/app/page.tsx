import { ApplyLink } from "@/components/apply-link";
import { qualifierLine } from "@/lib/facts";

const rows = [
  ["Walk-in, hood, fryer, ice machine", "fix it today or close"],
  ["Payroll", "weekly, FOH and BOH"],
  ["Vendors on COD", "batch clears in three days"],
  ["A slow month", "weather, construction, season"],
  ["Buildout, patio, second spot", "when it is working"],
] as const;

const intents = [
  [
    "Your bank sees a restaurant. Your card volume says otherwise.",
    "Every owner in this business has been turned down. It is the category, not you.",
  ],
  [
    "Vendors are COD. The batch clears in three days.",
    "Payroll is weekly. Deposits lag. The timing was never going to work on its own.",
  ],
  [
    "Already carrying a position or two.",
    "Common in this business. Tell us what is on the account and we will tell you straight what is possible.",
  ],
] as const;

const steps = [
  ["01 / TODAY", "Apply", "Three months of statements. That is the start."],
  ["02 / SAME DAY", "We call you", "A real person, not a form reply. We go to the lenders that fund restaurants."],
  ["03 / 1 TO 5 DAYS", "Funded", "Two or three options. You pay a fee only if one funds."],
] as const;

export default function HomePage() {
  const qualifier = qualifierLine();
  return (
    <>
      <section className="wrap hero">
        <p className="ticket ticket-rise">
          <span>FRI 7:42 PM</span>
          <span className="slash" aria-hidden="true">
            /
          </span>
          <span>WALK-IN DOWN</span>
          <span className="slash" aria-hidden="true">
            /
          </span>
          <span className="tick">SERVICE ON</span>
        </p>
        <h1 className="display">The walk-in failed Friday.</h1>
        <div className="hero-bar">
          <p className="subhead">The weekend didn&apos;t wait.</p>
          <div className="hero-actions">
            <ApplyLink placement="hero" className="apply">
              Apply now
            </ApplyLink>
            <p className="aside">1 to 5 days after approval.</p>
          </div>
        </div>
      </section>

      <section className="wrap band" aria-labelledby="closed-day">
        <div className="section-head">
          <h2 id="closed-day">A closed day is gone for good</h2>
          <div className="lede">
            <p>Most banks will not lend to restaurants at all.</p>
            <p>That is a category rule, not a judgment on your business.</p>
            <p>Here, card volume is what matters.</p>
          </div>
        </div>
        <div className="rows">
          {rows.map(([item, note]) => (
            <div className="row" key={item}>
              <p>{item}</p>
              <p className="note">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="intents" aria-label="How owners use this">
        {intents.map(([title, body]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="wrap band" aria-labelledby="how">
        <h2 id="how">How it works</h2>
        <ol className="steps">
          {steps.map(([kicker, title, body]) => (
            <li key={kicker}>
              <p className="kicker">{kicker}</p>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="close" aria-labelledby="open">
        <div className="wrap close-inner">
          <h2 id="open">Open tomorrow.</h2>
          {qualifier ? <p className="qualifier">{qualifier}</p> : null}
          <ApplyLink placement="footer" className="apply apply-on-flame">
            Apply now
          </ApplyLink>
        </div>
      </section>
    </>
  );
}
