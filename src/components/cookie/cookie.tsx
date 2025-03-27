"use client";
import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  // ✅ Function to get a cookie value
  const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) return decodeURIComponent(cookieValue);
    }
    return null;
  };

  // ✅ Function to set a cookie
  const setCookie = (name: string, value: string, days: number): void => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
  };

  useEffect(() => {
    // ✅ Check if user has already given consent
    if (!getCookie("cookieConsent")) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = (): void => {
    setCookie("cookieConsent", "accepted", 365);
    setShowBanner(false);
    window.location.reload(); // ✅ Reload to load Google Analytics
  };

  const handleDecline = (): void => {
    setCookie("cookieConsent", "declined", 365);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed mx-auto w-full max-w-2xl space-y-4 bottom-20 text-foreground bg-background p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
      <p className="text-sm">
        This website uses cookies for analytics. Accept to improve your experience.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleAccept}
          className="text-background bg-foreground px-3 py-1 text-sm rounded"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="border border-foreground px-3 py-1 text-sm rounded"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
