"use client";

import React, { useState } from "react";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { CONTACT_ERROR_MESSAGE } from "@/lib/contact-constants";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "newsletter",
          email,
          name: name.trim() || undefined,
          sourceUrl: window.location.href,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(data?.error ?? CONTACT_ERROR_MESSAGE);
        return;
      }

      setIsSuccess(true);
      setEmail("");
      setName("");

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch {
      setError(CONTACT_ERROR_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-white/20 rounded-full p-3 mb-4">
            <FaEnvelope className="text-3xl text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stay in Touch - Get Mesquite Real Estate Updates
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest Mesquite property listings, market insights, 
            community news, and exclusive real estate opportunities delivered to your inbox.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
            <FaCheckCircle className="text-4xl text-green-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Thank You for Subscribing!</h3>
            <p className="text-indigo-100">
              You&apos;ve been successfully added to our newsletter. Check your inbox for a confirmation email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-white/20">
            {error && (
              <p className="mb-4 rounded-lg bg-red-500/20 border border-red-300/40 px-4 py-3 text-sm text-white" role="alert">
                {error}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label htmlFor="newsletter-name" className="block text-sm font-semibold mb-2 text-indigo-100">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  id="newsletter-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-indigo-800"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="block text-sm font-semibold mb-2 text-indigo-100">
                  Email Address <span className="text-orange-300">*</span>
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-indigo-800"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-3 rounded-lg transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Subscribe to newsletter"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe Now"}
            </button>

            <p className="text-xs text-indigo-200 mt-4">
              By subscribing, you agree to receive email updates from Mesquite Estates. 
              We respect your privacy and you can unsubscribe at any time.
            </p>
          </form>
        )}

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl font-bold text-orange-300 mb-2">📧</div>
            <p className="text-sm text-indigo-100">Weekly Updates</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl font-bold text-orange-300 mb-2">🏠</div>
            <p className="text-sm text-indigo-100">New Listings First</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl font-bold text-orange-300 mb-2">💡</div>
            <p className="text-sm text-indigo-100">Market Insights</p>
          </div>
        </div>
      </div>
    </section>
  );
}
