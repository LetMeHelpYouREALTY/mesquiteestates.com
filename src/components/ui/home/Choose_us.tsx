"use client";
import React from "react";
import { motion } from "framer-motion";

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const reasons: Reason[] = [
  {
    title: "Prime Location",
    description:
      "About an hour north of Las Vegas in the scenic Virgin River Valley, surrounded by flat-top red mesas and stunning vistas. Close to national and state parks.",
    icon: "📍",
  },
  {
    title: "World-Class Golf",
    description:
      "Seven championship golf courses within a 10-minute drive. Perfect for golf enthusiasts seeking a premier lifestyle in a beautiful desert setting.",
    icon: "⛳",
  },
  {
    title: "Resort Lifestyle",
    description:
      "Experience a friendly small-town community with welcoming resorts, 24-hour casino action, live entertainment, and exciting annual sports and special events.",
    icon: "🏖️",
  },
  {
    title: "Investment Potential",
    description:
      "Growing area with golf communities and new construction. Homes from condos under $200K to estates over $1 million, plus custom lots. Median home list price about $415,000.",
    icon: "💰",
  },
];

const WhyChooseUs: React.FC = () => (
  <>
    <div className="bg-indigo-900 text-white py-10 px-8 lg:px-40">
      <h2 className="text-5xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-white text-indigo-900 p-6 rounded-lg shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-5xl mb-4">{reason.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-700 text-center">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </>
);

export default WhyChooseUs;
