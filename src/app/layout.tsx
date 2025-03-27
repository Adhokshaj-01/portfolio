import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { SplashScreenProvider } from "@/context/SplashScreenContext";
import Script from "next/script";
// import CookieConsent from "@/components/cookie/cookie";
// import GoogleAnalytics from "@/components/cookie/GoogleA";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name} , Adhokshaj Hartalkar`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name} , Adhokshaj Hartalkar`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name} , Adhokshaj Hartalkar`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} , Adhokshaj Hartalkar`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      > 
    {/* Google Analytics Scripts */}
    <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-SPHPFM7S40`} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SPHPFM7S40');
        `}
      </Script>
      <SplashScreenProvider>
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            {/* <GoogleAnalytics/> */}
            {/* <CookieConsent/> */}
          </TooltipProvider>
        </ThemeProvider>
        </SplashScreenProvider>
      </body>
    </html>
  );
}
