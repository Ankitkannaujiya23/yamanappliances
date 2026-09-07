import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL("https://www.consumerservicecentre.example"),
  title: {
    default: `${site.name} | Home Appliance Repair Service in ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Book trusted doorstep repair for AC, TV, Refrigerator, Washing Machine, Cooler and more home appliances across Delhi NCR. Transparent pricing, verified technicians, same-day service.",
  keywords: [
    "appliance repair Delhi NCR",
    "AC repair service",
    "washing machine repair",
    "refrigerator repair",
    "TV repair service",
    "home appliance repair near me",
    "consumer service centre",
  ],
  openGraph: {
    title: `${site.name} | Home Appliance Repair Service in ${site.city}`,
    description:
      "Book trusted doorstep repair for AC, TV, Refrigerator, Washing Machine, Cooler and more home appliances across Delhi NCR.",
    url: "https://www.consumerservicecentre.example",
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
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
