"use client";

import { Project } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Import the images from the data folder
import taxiLocatorImage from "@/data/taxilocator.jpg";
import taxiFrontendImage from "@/data/taxifrontend.png";
import restaurantImage from "@/data/resturant.jpg";
import jsonImage from "@/data/JSON-icon-2.jpg";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Map project IDs to their respective images
const projectImages: Record<string, StaticImageData> = {
  taxiranklocatorbackend: taxiLocatorImage,
  taxiRankApp: taxiFrontendImage,
  tasty2: restaurantImage,
  JsonParserTemplate: jsonImage,
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <div className="h-48 w-full bg-gray-200 relative">
          <Image 
            src={projectImages[project.id]} 
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-3 text-base text-gray-500">{project.description}</p>
        </div>
        <div className="mt-6 flex items-center gap-4">
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              <FaGithub className="h-4 w-4" />
              <span>Source</span>
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              <FaExternalLinkAlt className="h-4 w-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 