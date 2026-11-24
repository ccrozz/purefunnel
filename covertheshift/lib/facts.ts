function clean(value: string | undefined) {
  return (value ?? "").replace(/[<>\r\n]+/g, " ").trim().slice(0, 80);
}

export function qualifierLine() {
  return [clean(process.env.MIN_TIME_IN_BUSINESS), clean(process.env.MIN_MONTHLY_CARD_VOLUME)]
    .filter(Boolean)
    .join(" | ");
}

export function footerPlace() {
  const street = clean(process.env.STREET_ADDRESS);
  const zip = clean(process.env.ZIP);
  if (street && zip) return `${street}, New York, NY ${zip}`;
  if (street) return `${street}, New York, NY`;
  return "New York, NY";
}
