const timeOptions = [
  "Under 6 months",
  "6 months to 1 year",
  "1 to 2 years",
  "2 to 5 years",
  "5 years or more",
] as const;

const creditOptions = [
  "Under 550",
  "550 to 599",
  "600 to 649",
  "650 to 699",
  "700 or higher",
] as const;

const revenueOptions = [
  "Under $100,000",
  "$100,000 to $250,000",
  "$250,000 to $500,000",
  "$500,000 to $1,000,000",
  "$1,000,000 to $2,000,000",
  "Over $2,000,000",
] as const;

function text(value: unknown, max: number) {
  if (typeof value !== "string") return null;
  const cleaned = value.replace(/[<>]/g, "").trim();
  if (!cleaned || cleaned.length > max) return null;
  return cleaned;
}

function oneOf(value: unknown, options: readonly string[]) {
  return typeof value === "string" && options.includes(value) ? value : null;
}

export function buildApplication(input: unknown, campaign: string) {
  if (!input || typeof input !== "object") {
    return { error: "The application could not be read." };
  }
  const raw = input as Record<string, unknown>;
  if (typeof raw.companyWebsite === "string" && raw.companyWebsite.trim()) {
    return { honeypot: true as const };
  }

  const businessName = text(raw.businessName, 160);
  const firstName = text(raw.firstName, 80);
  const lastName = text(raw.lastName, 80);
  const phone = text(raw.phone, 16);
  const email = text(raw.email, 160);
  const timeInBusiness = oneOf(raw.timeInBusiness, timeOptions);
  const creditScore = oneOf(raw.creditScore, creditOptions);
  const annualRevenue = oneOf(raw.annualRevenue, revenueOptions);

  if (!businessName) return { error: "Enter the business name." };
  if (!firstName) return { error: "Enter the first name." };
  if (!lastName) return { error: "Enter the last name." };
  if (!phone || !/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
    return { error: "Enter a 10-digit phone number." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Enter an email address." };
  }
  if (!timeInBusiness) return { error: "Choose the time in business." };
  if (!creditScore) return { error: "Choose the credit score." };
  if (!annualRevenue) return { error: "Choose the annual revenue." };

  return {
    body: {
      repSlug: campaign,
      businessName,
      firstName,
      lastName,
      ownerName: `${firstName} ${lastName}`,
      businessPhone: phone,
      ownerPhone: phone,
      ownerEmail: email,
      timeInBusiness,
      creditScore,
      estimatedAnnualRevenue: annualRevenue,
    },
  };
}
