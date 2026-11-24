import { AgingPanel } from "@/components/aging-panel";
import { ApplyLink } from "@/components/apply-link";
import { qualifierLine } from "@/lib/facts";

const rows = [
  ["Accounts receivable", "30 to 90 days out, longer on a denial"],
  ["Operatory or room buildout", "the only way to add capacity"],
  ["Imaging, chairs, lasers", "capex that pays back over years"],
  ["An associate before the production exists", "six to twelve months of carry"],
  ["A second location", "buildout, equipment and ramp"],
] as const;

const intents = [
  [
    "Your bank wants collateral. You have four hundred insured patients.",
    "A patient panel and practice goodwill are not what a bank lends against, and an SBA file takes months you may not have.",
  ],
  [
    "The schedule is full and the rooms are not.",
    "Capacity in a practice is physical. Another operatory is the only way to see more patients, and the buildout is the gap.",
  ],
  [
    "Staying independent is getting more expensive.",
    "Groups buying up practices nearby are doing it with institutional capital. Competing on equipment and hiring takes the same.",
  ],
] as const;

const steps = [
  ["Step one, today", "Apply", "Practice details and three months of statements. Nothing from your patient records, ever."],
  ["Step two, same day", "Review", "Your file goes to the lenders that underwrite practices, not to all sixty at once."],
  ["Step three, 1 to 5 days", "Funded", "Two or three real options to compare. A fee is owed only if one of them funds."],
] as const;

export default function HomePage() {
  const qualifier = qualifierLine();
  return (
    <>
      <section className="wrap hero">
        <h1>You treated them in March. The payer settles in June.</h1>
        <p className="lede">
          Production is strong. Collections are ninety days behind it. Payroll runs weekly either way.
        </p>
        <AgingPanel />
        <div className="hero-actions">
          <ApplyLink placement="hero" className="btn">
            Start an application
          </ApplyLink>
          <p className="aside">Funding in 1 to 5 days after approval.</p>
        </div>
      </section>

      <section className="wrap band" aria-labelledby="funds">
        <h2 id="funds">What it funds</h2>
        <p className="intro">Capacity, equipment, and the gap between production and collections.</p>
        <div className="rows">
          {rows.map(([item, note]) => (
            <div className="row" key={item}>
              <p>{item}</p>
              <p className="note">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="intents" aria-label="Why practices use this">
        {intents.map(([title, body]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="wrap band" aria-labelledby="runs">
        <h2 id="runs">How it runs</h2>
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

      <section className="close" aria-labelledby="close">
        <div className="wrap close-inner">
          <h2 id="close">The work is done. The money should not take a season.</h2>
          {qualifier ? <p className="qualifier">{qualifier}</p> : null}
          <ApplyLink placement="footer" className="btn btn-on-viridian">
            Start an application
          </ApplyLink>
        </div>
      </section>
    </>
  );
}
