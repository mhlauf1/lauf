"use client";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log("Email submitted:", email);
    setEmail("");
    alert("Thanks for subscribing!");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>FitPro | Expert Fitness Programs</title>
        <meta
          name="description"
          content="Transform your fitness journey with expert-designed programs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-black">Fit</span>
            <span className="text-gray-500">Pro</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="font-medium hover:text-gray-500 transition">
              About
            </a>
            <a href="#" className="font-medium hover:text-gray-500 transition">
              Programs
            </a>
            <a href="#" className="font-medium hover:text-gray-500 transition">
              Testimonials
            </a>
            <a href="#" className="font-medium hover:text-gray-500 transition">
              Contact
            </a>
          </nav>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-black"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 -z-10"></div>

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              >
                Transform your <span className="italic">fitness journey</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-gray-700"
              >
                Access premium workout programs designed by certified personal
                trainers. Start your transformation today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#programs"
                  className="px-8 py-4 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition text-center"
                >
                  Explore Programs
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-black text-black font-medium rounded-sm hover:bg-gray-100 transition text-center"
                >
                  Free Consultation
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section id="programs" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Programs</h2>
              <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Program 1 */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-200 group"
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/program1.jpg')] bg-cover bg-center group-hover:scale-105 transition duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Strength Builder</h3>
                  <p className="text-sm text-gray-600 mb-4">12-Week Program</p>
                  <p className="mb-6">
                    Perfect for those looking to build muscle and increase
                    strength.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">$199</span>
                    <a
                      href="#"
                      className="text-black border-b-2 border-black pb-1 font-medium hover:text-gray-600 transition"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Program 2 */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-200 group"
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/program2.jpg')] bg-cover bg-center group-hover:scale-105 transition duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Weight Loss</h3>
                  <p className="text-sm text-gray-600 mb-4">8-Week Program</p>
                  <p className="mb-6">
                    Designed to help you shed fat and boost your metabolism.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">$149</span>
                    <a
                      href="#"
                      className="text-black border-b-2 border-black pb-1 font-medium hover:text-gray-600 transition"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Program 3 */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-200 group"
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/program3.jpg')] bg-cover bg-center group-hover:scale-105 transition duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Beginners Guide</h3>
                  <p className="text-sm text-gray-600 mb-4">6-Week Program</p>
                  <p className="mb-6">
                    The ideal starting point for newcomers to fitness.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">$99</span>
                    <a
                      href="#"
                      className="text-black border-b-2 border-black pb-1 font-medium hover:text-gray-600 transition"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-block px-8 py-4 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition"
              >
                View All Programs
              </a>
            </div>
          </div>
        </section>

        {/* Trainer Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-gray-100 -z-10"></div>
                <img
                  src="/trainer.jpg"
                  alt="Personal Trainer"
                  className="w-full h-auto relative z-10 border-8 border-white shadow-xl"
                />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black -z-10"></div>
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-8">Meet Your Trainer</h2>
                <h3 className="text-2xl font-bold mb-2">John Smith</h3>
                <p className="text-gray-600 mb-6">Certified Personal Trainer</p>

                <p className="mb-6">
                  With over 10 years of experience helping clients achieve their
                  fitness goals, John specializes in strength training and
                  functional fitness.
                </p>

                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    NASM Certified
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Nutrition Specialist
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    500+ Clients Trained
                  </li>
                </ul>

                <a
                  href="#"
                  className="inline-block px-8 py-4 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
              <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="/testimonial1.jpg"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>
                <blockquote className="mb-6 italic">
                  "John's program helped me lose 30 pounds in 12 weeks. The
                  structured approach made all the difference."
                </blockquote>
                <p className="font-bold">Sarah J.</p>
                <p className="text-sm text-gray-600">
                  Strength Builder Program
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="/testimonial2.jpg"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>
                <blockquote className="mb-6 italic">
                  "I've tried many programs before, but this one actually
                  delivered results. The nutrition advice was game-changing."
                </blockquote>
                <p className="font-bold">Michael T.</p>
                <p className="text-sm text-gray-600">Weight Loss Program</p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="/testimonial3.jpg"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>
                <blockquote className="mb-6 italic">
                  "The support and guidance throughout the program kept me
                  motivated the entire time."
                </blockquote>
                <p className="font-bold">Emily R.</p>
                <p className="text-sm text-gray-600">Beginners Guide Program</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  1. Choose Your Program
                </h3>
                <p>
                  Browse our catalog of specialized fitness programs tailored to
                  your goals.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  2. Purchase Securely
                </h3>
                <p>
                  Checkout is simple, fast, and 100% secure with instant access
                  to your content.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">3. Start Training</h3>
                <p>
                  Get instant access to your program materials and begin your
                  fitness journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="contact" className="py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">
                Get Fitness Tips and Exclusive Offers
              </h2>
              <p className="mb-8">
                Join our newsletter for workout tips, nutrition advice, and
                special program discounts.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-grow px-6 py-4 bg-white text-black outline-none"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold">
              <span className="text-black">Fit</span>
              <span className="text-gray-500">Pro</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#" className="hover:text-gray-500 transition">
              About
            </a>
            <a href="#" className="hover:text-gray-500 transition">
              Programs
            </a>
            <a href="#" className="hover:text-gray-500 transition">
              Testimonials
            </a>
            <a href="#" className="hover:text-gray-500 transition">
              Contact
            </a>
            <a href="#" className="hover:text-gray-500 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-500 transition">
              Terms
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="text-center text-gray-600">
            <p>© 2025 FitPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
