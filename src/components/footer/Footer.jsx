"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import {
  Film,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
  Star,
  Play,
  Heart,
  Award,
  Sparkles,
  ArrowUp,
} from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    movies: [
      { name: "Popular Movies", href: "/movies" },
      { name: "Top Rated", href: "/movies" },
      { name: "Upcoming", href: "/movies" },
      { name: "Now Playing", href: "/movies" },
      { name: "Box Office", href: "/movies" },
    ],
    tvShows: [
      { name: "Popular Shows", href: "/tv-shows" },
      { name: "Airing Today", href: "/tv-shows" },
      { name: "On TV", href: "/tv-shows" },
      { name: "Top Rated Shows", href: "/tv-shows" },
      { name: "Trending", href: "/tv-shows" },
    ],
    genres: [
      { name: "Action", href: "/genres/action" },
      { name: "Comedy", href: "/genres/comedy" },
      { name: "Drama", href: "/genres/drama" },
      { name: "Horror", href: "/genres/horror" },
      { name: "Romance", href: "/genres/romance" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      // { name: "Careers", href: "#" },
      // { name: "Press", href: "#" },
      { name: "Contact", href: "/contact" },
      // { name: "Blog", href: "#" },
    ],
    support: [
      // { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/termsandconditions" },
      // { name: "Cookie Policy", href: "#" },s
      // { name: "DMCA", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-400" },
  ]

  const stats = [
    { label: "Movies", value: "50K+", icon: Film },
    { label: "TV Shows", value: "15K+", icon: Play },
    { label: "Users", value: "2M+", icon: Heart },
    { label: "Reviews", value: "500K+", icon: Star },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10">
        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-b border-white/10 py-12"
        >
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mb-4 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300"
                  >
                    <stat.icon className="h-8 w-8 text-purple-400 group-hover:text-purple-300" />
                  </motion.div>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      duration: 6,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <Film className="h-12 w-12 text-purple-400" />
                    <motion.div
                      className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl -z-10"
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        duration: 4,
                      }}
                    />
                  </motion.div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                    CinemaHub
                  </span>
                </div>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Your ultimate destination for discovering amazing movies and TV shows. Join millions of movie lovers
                  worldwide.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <motion.div
                    className="flex items-center space-x-3 text-white/60 hover:text-purple-300 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="h-5 w-5" />
                    <span>contact@cinemahub.com</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 text-white/60 hover:text-purple-300 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="h-5 w-5" />
                    <span>+1 (555) 123-4567</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 text-white/60 hover:text-purple-300 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="h-5 w-5" />
                    <span>Los Angeles, CA</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Links Sections */}
              <motion.div variants={itemVariants} className="lg:col-span-3">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                  {/* Movies */}
                  <div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                      <Film className="h-5 w-5 mr-2 text-purple-400" />
                      Movies
                    </h3>
                    <ul className="space-y-3">
                      {footerLinks.movies.map((link) => (
                        <li key={link.name}>
                          <motion.div whileHover={{ x: 5 }}>
                            <Link
                              href={link.href}
                              className="text-white/70 hover:text-purple-300 transition-colors text-sm"
                            >
                              {link.name}
                            </Link>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TV Shows */}
                  <div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                      <Play className="h-5 w-5 mr-2 text-purple-400" />
                      TV Shows
                    </h3>
                    <ul className="space-y-3">
                      {footerLinks.tvShows.map((link) => (
                        <li key={link.name}>
                          <motion.div whileHover={{ x: 5 }}>
                            <Link
                              href={link.href}
                              className="text-white/70 hover:text-purple-300 transition-colors text-sm"
                            >
                              {link.name}
                            </Link>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Genres */}
                  <div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-purple-400" />
                      Genres
                    </h3>
                    <ul className="space-y-3">
                      {footerLinks.genres.map((link) => (
                        <li key={link.name}>
                          <motion.div whileHover={{ x: 5 }}>
                            <Link
                              href={link.href}
                              className="text-white/70 hover:text-purple-300 transition-colors text-sm"
                            >
                              {link.name}
                            </Link>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Company */}
                  <div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-purple-400" />
                      Company
                    </h3>
                    <ul className="space-y-3">
                      {footerLinks.company.map((link) => (
                        <li key={link.name}>
                          <motion.div whileHover={{ x: 5 }}>
                            <Link
                              href={link.href}
                              className="text-white/70 hover:text-purple-300 transition-colors text-sm"
                            >
                              {link.name}
                            </Link>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Support */}
                  <div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-purple-400" />
                      Support
                    </h3>
                    <ul className="space-y-3">
                      {footerLinks.support.map((link) => (
                        <li key={link.name}>
                          <motion.div whileHover={{ x: 5 }}>
                            <Link
                              href={link.href}
                              className="text-white/70 hover:text-purple-300 transition-colors text-sm"
                            >
                              {link.name}
                            </Link>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/10 py-12"
        >
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <motion.div variants={itemVariants} className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Stay Updated with Latest Movies</h3>
                <p className="text-white/70 text-lg">
                  Get notified about new releases, exclusive content, and special offers.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full lg:w-auto">
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Subscribe
                  </motion.button>
                </form>

                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-green-400 text-center lg:text-left"
                  >
                    ✓ Successfully subscribed to our newsletter!
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div> */}

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <motion.div variants={itemVariants} className="text-center md:text-left">
                <p className="text-white/60">
                  © 2024 CinemaHub. All rights reserved. Made with{" "}
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    className="text-red-400"
                  >
                    ❤️
                  </motion.span>{" "}
                  for movie lovers.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex items-center space-x-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`text-white/60 ${social.color} transition-colors`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}

                {/* Scroll to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  className="ml-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 text-white p-3 rounded-full transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUp className="h-5 w-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
