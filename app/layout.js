import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { site } from "@/data/site";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://yamanappliances.com"),
  title: {
    default: `${site.name} | Home Appliance Repair Service in ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Book trusted doorstep repair for AC, TV, Refrigerator, Washing Machine, Cooler and more home appliances. Transparent pricing, verified technicians, same-day service.",
  keywords: [
    "appliances repair",
    "AC repair service",
    "washing machine repair",
    "refrigerator repair",
    "TV repair service",
    "home appliance repair near me",
    "yaman appliances",
  ],
  openGraph: {
    title: `${site.name} | Home Appliance Repair Service in ${site.city}`,
    description:
      "Book trusted doorstep repair for AC, TV, Refrigerator, Washing Machine, Cooler and more home appliances.",
    url: "https://yamanappliances.com/",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white">

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q2SKV73Q7M"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q2SKV73Q7M');
          `}
        </Script>

        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
