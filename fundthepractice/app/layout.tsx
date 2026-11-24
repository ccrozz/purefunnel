import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { MetaPixel } from "@/components/meta-pixel";
import { Shell } from "@/components/shell";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  axes: ["opsz"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-instrument",
});

export const viewport: Viewport = {
  themeColor: "#F1F0EA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fundthepractice.com"),
  title: "FundThePractice",
  description:
    "You treated them in March. The payer settles in June. Funding in 1 to 5 days after approval.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${instrument.variable}`}>
      <body>
        <a href="#content" className="skip">
          Skip to content
        </a>
        <Shell>{children}</Shell>
        <MetaPixel />
      </body>
    </html>
  );
}
