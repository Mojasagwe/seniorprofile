"use client";

import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import profilePicture from "@/data/profilepicture.jpg";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl lg:max-w-lg"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {personalInfo.name}
            </h1>
            <p className="mt-2 text-lg font-semibold leading-8 text-indigo-600">
              {personalInfo.title}
            </p>
            <p className="mt-1 text-md leading-6 text-gray-700">
              {personalInfo.currentPosition}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {personalInfo.about}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/projects"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Projects
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact Me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 lg:mt-0 lg:pl-8"
          >
            <div className="relative aspect-[3/2] w-full lg:aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gray-100 object-cover shadow-xl">
                <div className="flex h-full items-center justify-center">
                  <Image 
                    src={profilePicture} 
                    alt={`${personalInfo.name} - ${personalInfo.title}`}
                    className="rounded-2xl object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 