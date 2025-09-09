"use client";
import React, { useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

// A reusable button component for this page
const Button: React.FC<{ children: React.ReactNode; disabled?: boolean }> = ({
  children,
  disabled,
}) => (
  <button
    type="submit"
    disabled={disabled}
    className="bg-neutral-800 flex justify-center items-center gap-4 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-neutral-700 transition-colors w-full md:w-auto disabled:bg-neutral-400"
  >
    {children}
  </button>
);

const ContactPage: React.FC = () => {
  const container = useRef<HTMLElement | null>(null);

  // State for form fields and submission status
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("A network error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      ref={container}
      className="bg-neutral-50 min-h-screen py-20 md:py-28"
    >
      <div className="px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mt-8 mb-16">
            <h1 className="text-5xl capitalize sm:text-5xl md:text-7xl  tracking-tight flex flex-wrap justify-center">
              Start your website project
            </h1>
            <div className="mt-8 flex justify-center">
              <p className=" text-base md:text-xl md:max-w-[44ch] text-neutral-600">
                We're always excited to hear about new ideas. Fill out the form,
                and we'll be in touch shortly.
              </p>
            </div>
          </div>

          {/* Form and Details Section */}
          <div className="flex flex-col gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
              {success && (
                <div className="bg-green-100 text-green-800 p-4 rounded-md">
                  Thank you! We&apos;ll be in touch shortly.
                </div>
              )}
              {error && (
                <div className="bg-red-100 text-red-800 p-4 rounded-md">
                  {error}
                </div>
              )}
              <div className="form-field">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-md focus:ring-1 focus:ring-[#6a59ff] focus:outline-none transition"
                />
              </div>
              <div className="form-field">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-md focus:ring-1 focus:ring-[#6a59ff] focus:outline-none transition"
                />
              </div>
              <div className="form-field">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-md focus:ring-1 focus:ring-[#6a59ff] focus:outline-none transition"
                ></textarea>
              </div>
              <div className="form-field flex items-center gap-3 pt-2">
                <Button disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                  <MdArrowOutward size={20} />
                </Button>
              </div>
            </form>

            {/* Contact Details */}
            <div className="flex flex-col md:flex-row items-start md:justify-end gap-4 md:gap-8">
              <div>
                <h3 className="font-semibold text-lg uppercase tracking-tight text-neutral-500">
                  Contact Details
                </h3>
                <p className="mt-2 text-neutral-600">michael@lauf.co</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg uppercase tracking-tight text-neutral-500">
                  Location
                </h3>
                <p className="mt-2 text-neutral-600">Madison, WI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
