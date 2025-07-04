"use client";

import { personalInfo, experiences, education, certifications } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn more about my background and experience.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
        >
          <div className="prose prose-lg prose-indigo">
            <p>{personalInfo.about}</p>
            <p>
              I am based in {personalInfo.location} and currently working as a {personalInfo.currentPosition}. 
              I am passionate about creating elegant solutions to complex problems and continuously learning new technologies.
            </p>
            <p>
              I am particularly interested in backend development and have been expanding my skills in game development 
              and Java full stack development. I am always looking to collaborate on interesting Java projects and 
              explore new technologies.
            </p>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Professional Certifications</h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Issued: {cert.date}</p>
              {cert.credentialId && (
                <p className="text-sm text-gray-600">Credential ID: {cert.credentialId}</p>
              )}
            </div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Experience</h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none"
        >
          {experiences.map((experience, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900">{experience.title}</h3>
              <p className="text-sm text-gray-500">
                {experience.company} | {experience.location} | {experience.startDate} - {experience.endDate}
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {experience.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Education Section */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Education</h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none"
        >
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-sm text-gray-500">
                {edu.institution} | {edu.location} | {edu.startDate} - {edu.endDate}
              </p>
              {edu.description && (
                <p className="mt-4 text-gray-600">{edu.description}</p>
              )}
            </div>
          ))}
        </motion.div>

        {/* GitHub Section */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Open Source</h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-8 max-w-2xl lg:mx-0 lg:max-w-none"
        >
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">GitHub</h3>
                <a 
                  href="https://github.com/Mojasagwe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  @Mojasagwe
                </a>
              </div>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Interested in backend development and Java projects</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Currently learning game development and Java full stack development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Looking to collaborate on various Java projects</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 