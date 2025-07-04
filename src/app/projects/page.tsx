"use client";

import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ui/ProjectCard";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();
  
  // Filter projects based on selected tag
  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore my portfolio of projects and applications.
          </p>
        </div>
        
        {/* Filter tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            className={`rounded-full px-3 py-1 text-sm ${
              filter === null
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`rounded-full px-3 py-1 text-sm ${
                filter === tag
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <motion.div 
          layout
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No projects match the selected filter.</p>
            <button
              className="mt-4 text-indigo-600 hover:text-indigo-500"
              onClick={() => setFilter(null)}
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 