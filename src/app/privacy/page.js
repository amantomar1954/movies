"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Shield, Eye, Lock, Database, Cookie, UserCheck, AlertCircle, Settings } from "lucide-react"

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
    id: "overview",
    title: "1. Privacy Overview",
    icon: Eye,
    content: [
      "At CinemaHub, we are committed to protecting your privacy and ensuring the security of your personal information.",
      "This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.",
      "By using CinemaHub, you consent to the data practices described in this policy.",
    ],
  },
  {
    id: "information-collection",
    title: "2. Information We Collect",
    icon: Database,
    content: [
      "Personal Information: We collect information you provide directly, such as your name, email address, and profile information when you create an account.",
      "Usage Data: We automatically collect information about how you use our service, including pages viewed, time spent, and features used.",
      "Device Information: We collect information about the device you use to access our service, including IP address, browser type, and operating system.",
      "Cookies and Tracking: We use cookies and similar technologies to enhance your experience and analyze usage patterns.",
    ],
  },
  {
    id: "information-use",
    title: "3. How We Use Your Information",
    icon: Settings,
    content: [
      "To provide, maintain, and improve our services and user experience.",
      "To personalize content and recommendations based on your preferences and viewing history.",
      "To communicate with you about updates, security alerts, and customer support.",
      "To analyze usage patterns and trends to improve our platform and develop new features.",
      "To detect, prevent, and address technical issues and security vulnerabilities.",
    ],
  },
  {
    id: "information-sharing",
    title: "4. Information Sharing and Disclosure",
    icon: UserCheck,
    content: [
      "We do not sell, trade, or rent your personal information to third parties for marketing purposes.",
      "We may share information with trusted service providers who assist us in operating our platform.",
      "We may disclose information when required by law or to protect our rights and the safety of our users.",
      "In the event of a merger or acquisition, user information may be transferred as part of the business assets.",
    ],
  },
  {
    id: "data-security",
    title: "5. Data Security",
    icon: Lock,
    content: [
      "We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "All data transmission is encrypted using SSL/TLS protocols to ensure secure communication.",
      "We regularly update our security practices and conduct security audits to maintain the highest level of protection.",
      "While we strive to protect your information, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    id: "cookies",
    title: "6. Cookies and Tracking Technologies",
    icon: Cookie,
    content: [
      "We use cookies to enhance your browsing experience, remember your preferences, and analyze site traffic.",
      "Essential cookies are necessary for the basic functionality of our service and cannot be disabled.",
      "Analytics cookies help us understand how users interact with our platform to improve our services.",
      "You can control cookie settings through your browser, but disabling certain cookies may affect functionality.",
    ],
  },
  {
    id: "user-rights",
    title: "7. Your Rights and Choices",
    icon: Shield,
    content: [
      "Access: You have the right to access and review the personal information we have about you.",
      "Correction: You can update or correct your personal information through your account settings.",
      "Deletion: You may request deletion of your account and associated personal information.",
      "Portability: You can request a copy of your data in a machine-readable format.",
      "Opt-out: You can opt out of marketing communications at any time.",
    ],
  },
  {
    id: "policy-updates",
    title: "8. Policy Updates",
    icon: AlertCircle,
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
      "We will notify you of any material changes by posting the updated policy on this page and updating the 'Last Updated' date.",
      "We encourage you to review this policy periodically to stay informed about how we protect your information.",
      "Your continued use of our service after changes constitutes acceptance of the updated policy.",
    ],
  },
]

const dataTypes = [
  {
    type: "Account Information",
    description: "Name, email, password, profile picture",
    retention: "Until account deletion",
    purpose: "Account management and personalization",
  },
  {
    type: "Usage Analytics",
    description: "Pages viewed, time spent, feature usage",
    retention: "2 years",
    purpose: "Service improvement and analytics",
  },
  {
    type: "Device Data",
    description: "IP address, browser type, device ID",
    retention: "1 year",
    purpose: "Security and technical support",
  },
  {
    type: "Preferences",
    description: "Watchlist, ratings, favorite genres",
    retention: "Until account deletion",
    purpose: "Content recommendations",
  },
]

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
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
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />

        {/* Floating Privacy Icons */}
        {["🔒", "🛡️", "👁️", "🔐", "📊", "🍪", "⚙️", "✅"].map((emoji, i) => (
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
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Shield className="h-12 w-12 text-white" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Your privacy matters to us. Learn how we collect, use, and protect your information.
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

        {/* Data Overview Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {dataTypes.map((data, index) => (
            <motion.div
              key={data.type}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold text-white mb-2">{data.type}</h3>
              <p className="text-white/70 text-sm mb-3">{data.description}</p>
              <div className="space-y-2">
                <div className="text-xs">
                  <span className="text-blue-400 font-semibold">Retention:</span>
                  <span className="text-white/80 ml-1">{data.retention}</span>
                </div>
                <div className="text-xs">
                  <span className="text-purple-400 font-semibold">Purpose:</span>
                  <span className="text-white/80 ml-1">{data.purpose}</span>
                </div>
              </div>
            </motion.div>
          ))}
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
                  <Eye className="h-5 w-5 text-blue-400 mr-2" />
                  Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex items-center text-sm ${
                        activeSection === section.id
                          ? "bg-blue-600/30 text-blue-300 border-l-2 border-blue-400"
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
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full flex-shrink-0">
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

        {/* Privacy Controls Section */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Privacy Controls</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <div className="bg-blue-600/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Settings className="h-8 w-8 text-blue-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Manage Preferences</h4>
                <p className="text-white/70 text-sm">Control your privacy settings and data preferences</p>
              </motion.div>

              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <div className="bg-purple-600/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Database className="h-8 w-8 text-purple-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Download Data</h4>
                <p className="text-white/70 text-sm">Request a copy of your personal data</p>
              </motion.div>

              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <div className="bg-red-600/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 text-red-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Delete Account</h4>
                <p className="text-white/70 text-sm">Permanently remove your account and data</p>
              </motion.div>
            </div>

            <div className="text-center mt-8">
              <motion.a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="h-5 w-5 mr-2" />
                Contact Privacy Team
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
