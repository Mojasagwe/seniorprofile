"use client";

import { personalInfo } from "@/data/portfolio";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // In a real application, you would send this data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Me</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Let&apos;s discuss your project or opportunities.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-gray-50 p-8"
          >
            <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Feel free to reach out through any of these channels.
            </p>

            <dl className="mt-6 space-y-4 text-sm leading-6">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <FaEnvelope className="h-6 w-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a
                    className="text-gray-900 hover:text-indigo-600"
                    href={`mailto:${personalInfo.email}`}
                  >
                    {personalInfo.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <FaPhone className="h-6 w-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a
                    className="text-gray-900 hover:text-indigo-600"
                    href={`tel:${personalInfo.phone}`}
                  >
                    {personalInfo.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Location</span>
                  <FaMapMarkerAlt className="h-6 w-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd className="text-gray-900">{personalInfo.location}</dd>
              </div>
            </dl>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-900">Connect with me</h3>
              <ul role="list" className="mt-4 flex gap-6">
                {personalInfo.socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-600"
                    >
                      <span className="sr-only">{link.name}</span>
                      {/* You would use the actual icons here */}
                      <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
                        {link.name[0]}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitted ? (
              <div className="rounded-2xl bg-green-50 p-8 text-center">
                <h2 className="text-lg font-semibold text-green-800">Thank you for your message!</h2>
                <p className="mt-2 text-sm text-green-700">
                  I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                    Subject
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                {error && (
                  <div className="text-red-600 text-sm">{error}</div>
                )}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 