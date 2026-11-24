import { ApplyLink } from "@/components/apply-link";
import { Dimension } from "@/components/dimension";
import { qualifierLine } from "@/lib/facts";

const rows = [
  ["Progress billing and receivables", "net 30 to 90 from the GC"],
  ["Retainage", "5% to 10%, held to project close"],
  ["Approved change orders", "worked, billed, not yet paid"],
  ["Mobilization on a new award", "before the first draw lands"],
  ["Equipment purchase or repair", "when the crew is standing around"],
] as const;

const intents = [
  [
    "Your bank won't lend against a receivable they can't pronounce",
    "You are profitable, you are ten years in, and they still said no. That is a credit box, not a verdict on your business.",
  ],
  [
    "You're carrying the job until the GC pays",
    "Materials went out on your dime. The crew gets paid Friday. The draw clears whenever the general gets to it.",
  ],
  [
    "You passed on the bid because you couldn't float the materials",
    "The job was yours. The crew was ready. The gap between mobilization and the first draw was the only thing in the way.",
  ],
] as const;

const steps = [
  ["01 / TODAY", "Apply", "Business details and three months of statements. No tax returns to start."],
  ["02 / SAME DAY", "Review", "Your file goes to the lenders that actually fund construction, not all sixty at once."],
  ["03 / 1 TO 5 DAYS", "Funded", "Two or three real options to choose from. You only pay a fee if one of them funds."],
] as const;

export default function HomePage() {
  const qualifier = qualifierLine();
  return (
    <>
      <section className="wrap hero">
        <h1>You finish the work. They pay in sixty.</h1>
        <Dimension />
        <p className="lede">
          Payroll is weekly. Progress billing is monthly. Retainage is whenever they feel like it. The math was never
          going to work on its own.
        </p>
        <div className="hero-actions">
          <ApplyLink placement="hero" className="btn">
            Start your application
          </ApplyLink>
          <p className="aside">Funding in 1 to 5 days after approval.</p>
        </div>
      </section>

      <section className="band chalk" aria-labelledby="funds">
        <div className="wrap">
          <h2 id="funds">What it funds against</h2>
          <p className="intro">Money you have already earned, and the costs that land before it arrives.</p>
          <div className="rows">
            {rows.map(([item, note]) => (
              <div className="row" key={item}>
                <p>{item}</p>
                <p className="note">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="intents" aria-label="Why crews use this">
        {intents.map(([title, body]) => (
          <article key={title}>
            <span className="mark" aria-hidden="true" />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="band runs" aria-labelledby="runs">
        <div className="wrap">
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
        </div>
      </section>

      <section className="band close" aria-labelledby="close">
        <div className="wrap">
          <h2 id="close">The job is already won. Fund it.</h2>
          {qualifier ? <p className="qualifier">{qualifier}</p> : null}
          <ApplyLink placement="footer" className="btn">
            Start your application
          </ApplyLink>
        </div>
      </section>
    </>
  );
}
