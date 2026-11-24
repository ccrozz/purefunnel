const buckets = ["0–30", "31–60", "61–90", "90+"] as const;

export function AgingPanel() {
  return (
    <figure className="panel">
      <figcaption>
        Accounts receivable, by age. The work is done and the outcome was good. Someone else is holding the money.
      </figcaption>
      <div className="aging">
        <div className="bar" />
        {buckets.map((bucket) => (
          <div className="bucket" key={bucket}>
            {bucket}
          </div>
        ))}
      </div>
      <div className="caps">
        <span>Service rendered</span>
        <span>Payer settles</span>
      </div>
    </figure>
  );
}
