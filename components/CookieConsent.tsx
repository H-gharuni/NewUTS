"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  const initializeAnalytics = () => {
    // Initialize Google Analytics if configured
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
      console.log("Analytics enabled");
    } else {
      console.log("Analytics cookies accepted (GA not configured yet)");
    }
  };

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      try {
        // Load saved preferences
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);

        // Initialize analytics if user previously consented
        if (savedPreferences.analytics) {
          initializeAnalytics();
        }
      } catch (error) {
        // If parsing fails, show banner again
        console.error("Error parsing cookie consent:", error);
        localStorage.removeItem("cookieConsent");
        setTimeout(() => setShowBanner(true), 1000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
    initializeAnalytics();
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem("cookieConsent", JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);

    if (preferences.analytics) {
      initializeAnalytics();
    }
  };

  const togglePreference = (key: "analytics" | "marketing") => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl">
          {!showSettings ? (
            // Simple Banner
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                {/* Cookie Icon */}
                <div className="flex-shrink-0">
                  <svg
                    className="w-12 h-12 text-blue-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We use cookies to enhance your browsing experience, analyze site traffic,
                    and personalize content. By clicking "Accept All", you consent to our use
                    of cookies. You can customize your preferences or reject non-essential cookies.{" "}
                    <Link href="/privacy" className="text-blue-900 underline hover:text-blue-700">
                      Learn more in our Privacy Policy
                    </Link>
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                    >
                      Customize
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cookie Preferences
              </h3>
              <p className="text-gray-600 mb-6">
                We use different types of cookies to optimize your experience on our website.
                Choose which cookies you want to allow.
              </p>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Necessary Cookies
                    </h4>
                    <p className="text-sm text-gray-600">
                      These cookies are essential for the website to function properly.
                      They cannot be disabled.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium">
                      Always Active
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Analytics Cookies
                    </h4>
                    <p className="text-sm text-gray-600">
                      These cookies help us understand how visitors interact with our website
                      by collecting and reporting information anonymously.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference("analytics")}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.analytics ? "bg-blue-900" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Marketing Cookies
                    </h4>
                    <p className="text-sm text-gray-600">
                      These cookies are used to track visitors across websites to display
                      relevant advertisements and marketing campaigns.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference("marketing")}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketing ? "bg-blue-900" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketing ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
