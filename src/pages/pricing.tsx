import React from "react";
import SaintVisionAIPricingCards from "../components/SaintVisionAIPricingCards";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black">
      <div className="empire-gradient pt-20 pb-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black text-white mb-4">
            Choose Your <span className="text-gold">Empire Plan</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            From startup to enterprise, we have the AI solution that scales with
            your ambition. Every plan designed to amplify your competitive
            advantage.
          </p>
        </div>
      </div>

      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <SaintVisionAIPricingCards />
        </div>
      </div>

      <div className="py-16 px-8 bg-charcoal/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Need custom integrations, dedicated support, or white-label
            solutions? Let's build something extraordinary together.
          </p>
          <button className="btn-empire">Contact Enterprise Sales</button>
        </div>
      </div>
    </div>
  );
}
