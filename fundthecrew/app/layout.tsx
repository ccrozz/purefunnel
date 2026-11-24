import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { MetaPixel } from "@/components/meta-pixel";
import { Shell } from "@/components/shell";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  axes: ["wdth"],
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex",
});

export const viewport: Viewport = {
  themeColor: "#DCDFDA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fundthecrew.com"),
  title: "FundTheCrew",
  description: "You finish the work. They pay in sixty. Funding in 1 to 5 days after approval.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${plex.variable}`}>
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
