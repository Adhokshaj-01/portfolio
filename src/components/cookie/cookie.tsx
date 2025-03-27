"use client"
import { useState, useEffect } from "react";

// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-SPHPFM7S40";  

// ✅ Extend window interface for TypeScript compatibility
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  // Function to get a cookie value
  const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) return cookieValue;
    }
    return null;
  };

  // Function to set a cookie
  const setCookie = (name: string, value: string, days: number): void => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
  };

  // ✅ Load Google Analytics script dynamically
  const loadGoogleAnalytics = (): void => {
    if (!window.gtag) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function (...args) { window.dataLayer.push(args); };

        window.gtag("js", new Date());
        window.gtag("config", GA_MEASUREMENT_ID);
      };
    }
  };

  useEffect(() => {
    const consent = getCookie("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const handleAccept = (): void => {
    setCookie("cookieConsent", "accepted", 365);
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const handleDecline = (): void => {
    setCookie("cookieConsent", "declined", 365);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed mx-auto w-full max-w-2xl space-y-4  bottom-20   text-foreground bg-background  p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
    <p className="text-sm">
      This website uses cookies for analytics. Accept to improve your experience.
    </p>
    <div className="flex space-x-4">
      <button onClick={handleAccept} className="text-background bg-foreground px-3 py-1 text-sm rounded">
        Accept
      </button>
      <button onClick={handleDecline} className="border border-foreground px-3 py-1 text-sm rounded">
        Decline
      </button>
    </div>
  </div>
  
  );
};

export default CookieConsent;
