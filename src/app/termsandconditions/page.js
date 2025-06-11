"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FileText, Shield, Scale, Eye, Clock, CheckCircle, AlertTriangle, Info } from "lucide-react"

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
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    icon: CheckCircle,
    content: [
      "By accessing and using CinemaHub, you accept and agree to be bound by the terms and provision of this agreement.",
      "If you do not agree to abide by the above, please do not use this service.",
      "These terms apply to all visitors, users, and others who access or use the service.",
    ],
  },
  {
    id: "description",
    title: "2. Service Description",
    icon: Info,
    content: [
      "CinemaHub is a movie and TV show information platform that provides users with access to movie databases, reviews, ratings, and related content.",
      "We provide information about movies, TV shows, cast, crew, and related entertainment content.",
      "Our service includes user-generated content such as reviews, ratings, and comments.",
    ],
  },
  {
    id: "user-accounts",
    title: "3. User Accounts",
    icon: Shield,
    content: [
      "You are responsible for safeguarding the password and for maintaining the confidentiality of your account.",
      "You agree not to disclose your password to any third party and to take sole responsibility for activities under your account.",
      "You must notify us immediately of any breach of security or unauthorized use of your account.",
      "We reserve the right to terminate accounts that violate our terms of service.",
    ],
  },
  {
    id: "user-conduct",
    title: "4. User Conduct",
    icon: Scale,
    content: [
      "You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the service.",
      "You will not attempt to gain unauthorized access to any portion of the service or any other systems or networks.",
      "You agree not to post content that is offensive, defamatory, or violates any third party's rights.",
      "Spam, harassment, and abusive behavior towards other users is strictly prohibited.",
    ],
  },
  {
    id: "content",
    title: "5. Content and Intellectual Property",
    icon: FileText,
    content: [
      "All content on CinemaHub, including text, graphics, logos, and software, is the property of CinemaHub or its content suppliers.",
      "User-generated content remains the property of the user, but you grant us a license to use, modify, and display such content.",
      "You may not reproduce, distribute, or create derivative works from our content without explicit permission.",
      "We respect intellectual property rights and expect our users to do the same.",
    ],
  },
  {
    id: "privacy",
    title: "6. Privacy Policy",
    icon: Eye,
    content: [
      "Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.",
      "By using our service, you consent to the collection and use of information as outlined in our Privacy Policy.",
      "We implement appropriate security measures to protect your personal information.",
    ],
  },
  {
    id: "disclaimers",
    title: "7. Disclaimers and Limitations",
    icon: AlertTriangle,
    content: [
      "The information on CinemaHub is provided on an 'as is' basis without warranties of any kind.",
      "We do not guarantee the accuracy, completeness, or reliability of any content on our platform.",
      "CinemaHub shall not be liable for any indirect, incidental, special, or consequential damages.",
      "Our liability is limited to the maximum extent permitted by applicable law.",
    ],
  },
  {
    id: "modifications",
    title: "8. Modifications to Terms",
    icon: Clock,
    content: [
      "We reserve the right to modify these terms at any time without prior notice.",
      "Changes will be effective immediately upon posting on this page.",
      "Your continued use of the service after changes constitutes acceptance of the new terms.",
      "We encourage you to review these terms periodically for any updates.",
    ],
  },
]

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("acceptance")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />

        {/* Floating Legal Icons */}
        {["⚖️", "📋", "🔒", "📜", "✅", "🛡️", "📝", "⚡"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-10"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Scale className="h-12 w-12 text-white" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Terms & Conditions
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Please read these terms and conditions carefully before using CinemaHub
          </motion.p>

          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <p className="text-white/90 text-sm">
              <strong>Last Updated:</strong> December 11, 2024 | <strong>Effective Date:</strong> December 11, 2024
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-purple-400 mr-2" />
                  Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex items-center text-sm ${
                        activeSection === section.id
                          ? "bg-purple-600/30 text-purple-300 border-l-2 border-purple-400"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      <section.icon className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{section.title}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div className="lg:col-span-3" variants={containerVariants} initial="hidden" animate="visible">
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full flex-shrink-0">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <motion.p
                          key={pIndex}
                          className="text-white/80 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + pIndex * 0.05, duration: 0.5 }}
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h3>
            <p className="text-white/80 mb-6">
              If you have any questions about these Terms and Conditions, please don't hesitate to contact us.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="h-5 w-5 mr-2" />
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
