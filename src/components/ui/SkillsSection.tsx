"use client";

import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function SkillsSection() {
  // Group skills by category
  const frontendSkills = skills.filter((skill) => skill.category === "frontend");
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const otherSkills = skills.filter((skill) => skill.category === "other");

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills & Technologies</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <SkillCategory title="Frontend Development" skills={frontendSkills} delay={0} />
          <SkillCategory title="Backend Development" skills={backendSkills} delay={0.2} />
          <SkillCategory title="Other Skills" skills={otherSkills} delay={0.4} />
        </div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: typeof skills;
  delay: number;
}

function SkillCategory({ title, skills, delay }: SkillCategoryProps) {
  // Function to get the appropriate color intensity based on skill level
  const getSkillBarColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-indigo-200";
      case 2:
        return "bg-indigo-300";
      case 3:
        return "bg-indigo-400";
      case 4:
        return "bg-indigo-500";
      case 5:
        return "bg-indigo-600";
      default:
        return "bg-indigo-300";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-xs text-gray-500">{skill.level}/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${getSkillBarColor(skill.level)} h-2 rounded-full`}
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 