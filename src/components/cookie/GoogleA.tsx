"use client";
import { useEffect } from "react";

// ✅ Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-SPHPFM7S40";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// ✅ Function to load Google Analytics
const loadGoogleAnalytics = () => {
  if (!window.gtag) {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args) { window.dataLayer?.push(args); };

      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID); // ✅ Google Analytics starts collecting data
    };
  }
};

const GoogleAnalytics = () => {
  useEffect(() => {
    // ✅ Function to check cookie consent
    const getCookie = (name: string): string | null => {
      const cookies = document.cookie.split("; ");
      for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) return decodeURIComponent(cookieValue);
      }
      return null;
    };

    // ✅ Load GA only if user accepted cookies
    if (getCookie("cookieConsent") === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  return null; // No UI needed, just loads GA in the background
};

export default GoogleAnalytics;
