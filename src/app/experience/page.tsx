"use client";

import { experiences } from "@/data/portfolio";
import { motion } from "framer-motion";

// Company color schemes
const companyColors: Record<string, string> = {
  "Old Mutual Insure": "linear-gradient(180deg, #60b848, #009677 96.71%)",
  "Exah": "linear-gradient(180deg, #2e2b2e, #1a181a 96.71%)",
  "Tetrad Group": "linear-gradient(135deg, rgb(26, 33, 50) 70%, rgb(255, 1, 91) 100%)",
  "Zensar Technologies": "linear-gradient(135deg, #1132a8 70%, #ff4e42 100%)",
};

export default function ExperiencePage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            My professional journey and work history.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <div className="grid gap-8">
            {experiences.map((experience, index) => {
              const bgStyle = {
                background: companyColors[experience.company] || "linear-gradient(180deg, #6b7280, #4b5563 96.71%)",
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg shadow-md border border-gray-200 text-white"
                  style={bgStyle}
                >
                  <h2 className="text-xl font-semibold">{experience.title}</h2>
                  <p className="font-medium text-white/90">{experience.company}</p>
                  <p className="text-sm text-white/80 mt-1">
                    {experience.location} | {experience.startDate} - {experience.endDate}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-white/90 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 