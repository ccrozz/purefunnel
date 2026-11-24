import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Spline_Sans_Mono } from "next/font/google";
import { MetaPixel } from "@/components/meta-pixel";
import { Shell } from "@/components/shell";
import "./globals.css";

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-familjen",
});

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-spline",
});

export const viewport: Viewport = {
  themeColor: "#F4EFE6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://covertheshift.com"),
  title: "CoverTheShift",
  description: "The walk-in failed Friday. The weekend didn't wait. 1 to 5 days after approval.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${familjen.variable} ${spline.variable}`}>
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
