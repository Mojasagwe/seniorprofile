import { personalInfo } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from "react";

const iconMap: Record<string, React.ReactNode> = {
  github: <FaGithub className="h-6 w-6" />,
  linkedin: <FaLinkedin className="h-6 w-6" />,
  twitter: <FaTwitter className="h-6 w-6" />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {personalInfo.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
              aria-label={link.name}
            >
              <span className="sr-only">{link.name}</span>
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-center text-xs leading-5 text-gray-400 mt-1">
            <a 
              href="https://github.com/Mojasagwe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
} 