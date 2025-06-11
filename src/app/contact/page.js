"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Globe,
  CheckCircle,
  AlertCircle,
  Building,
  Headphones,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Users,
  ChevronDown,
  FileText,
  Mic,
  X,
} from "lucide-react"
import Image from "next/image"
// import Header from "./header"
// import Footer from "./footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    department: "general",
    priority: "medium",
    phone: "",
    company: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [activeOffice, setActiveOffice] = useState(0)
  const [activeFAQ, setActiveFAQ] = useState(null)
  const [showLiveChat, setShowLiveChat] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: "support", message: "Hi! How can I help you today?", time: "Just now" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [showCallbackForm, setShowCallbackForm] = useState(false)
  const [callbackData, setCallbackData] = useState({
    name: "",
    phone: "",
    preferredTime: "",
    topic: "",
  })

  const heroRef = useRef(null)
  const formRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const isHeroInView = useInView(heroRef, { once: true })
  const isFormInView = useInView(formRef, { once: true })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const departments = [
    { id: "general", name: "General Inquiry", icon: MessageCircle, color: "from-blue-500 to-cyan-500" },
    { id: "technical", name: "Technical Support", icon: Headphones, color: "from-green-500 to-emerald-500" },
    { id: "billing", name: "Billing & Payments", icon: Building, color: "from-yellow-500 to-orange-500" },
    { id: "content", name: "Content & Licensing", icon: FileText, color: "from-purple-500 to-pink-500" },
    { id: "partnerships", name: "Business Partnerships", icon: Users, color: "from-red-500 to-rose-500" },
    { id: "press", name: "Press & Media", icon: Mic, color: "from-indigo-500 to-purple-500" },
  ]

  const offices = [
    {
      id: 1,
      city: "San Francisco",
      country: "United States",
      address: "123 Market Street, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@cinemahub.com",
      hours: "Mon-Fri: 9AM-6PM PST",
      image: "/placeholder.svg?height=300&width=400",
      timezone: "PST",
      isHeadquarters: true,
      team: 85,
      departments: ["Engineering", "Product", "Executive"],
    },
    {
      id: 2,
      city: "London",
      country: "United Kingdom",
      address: "45 Shoreditch High Street, London E1 6PN",
      phone: "+44 20 7946 0958",
      email: "london@cinemahub.com",
      hours: "Mon-Fri: 9AM-6PM GMT",
      image: "/placeholder.svg?height=300&width=400",
      timezone: "GMT",
      isHeadquarters: false,
      team: 32,
      departments: ["Content", "Marketing", "Sales"],
    },
    {
      id: 3,
      city: "Tokyo",
      country: "Japan",
      address: "1-1-1 Shibuya, Tokyo 150-0002",
      phone: "+81 3-1234-5678",
      email: "tokyo@cinemahub.com",
      hours: "Mon-Fri: 9AM-6PM JST",
      image: "/placeholder.svg?height=300&width=400",
      timezone: "JST",
      isHeadquarters: false,
      team: 28,
      departments: ["Asia Pacific", "Localization"],
    },
    {
      id: 4,
      city: "São Paulo",
      country: "Brazil",
      address: "Av. Paulista, 1000, São Paulo, SP 01310-100",
      phone: "+55 11 9876-5432",
      email: "saopaulo@cinemahub.com",
      hours: "Mon-Fri: 9AM-6PM BRT",
      image: "/placeholder.svg?height=300&width=400",
      timezone: "BRT",
      isHeadquarters: false,
      team: 15,
      departments: ["Latin America", "Content"],
    },
  ]

  const faqs = [
    {
      id: 1,
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription at any time by going to your account settings and clicking 'Cancel Subscription'. Your access will continue until the end of your current billing period.",
      category: "billing",
    },
    {
      id: 2,
      question: "What devices are supported?",
      answer:
        "CinemaHub works on all major devices including smartphones, tablets, computers, smart TVs, gaming consoles, and streaming devices like Roku, Apple TV, and Chromecast.",
      category: "technical",
    },
    {
      id: 3,
      question: "How do I report a technical issue?",
      answer:
        "You can report technical issues through our support form, live chat, or by emailing technical@cinemahub.com. Please include details about your device and the issue you're experiencing.",
      category: "technical",
    },
    {
      id: 4,
      question: "Can I download movies for offline viewing?",
      answer:
        "Yes! Premium subscribers can download up to 25 movies and TV episodes for offline viewing. Downloads are available for 30 days and must be watched within 48 hours of starting playback.",
      category: "general",
    },
    {
      id: 5,
      question: "How do I request new content?",
      answer:
        "We love hearing from our users! You can request new movies and shows through our content request form or by contacting our content team at content@cinemahub.com.",
      category: "content",
    },
    {
      id: 6,
      question: "Is there a family plan available?",
      answer:
        "Yes, our Family Plan allows up to 6 profiles with parental controls and costs $19.99/month. Each profile can have personalized recommendations and watchlists.",
      category: "billing",
    },
  ]

  const supportTeam = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Head of Customer Success",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Leading our customer success team with 8+ years of experience in user support.",
      specialties: ["Account Management", "Premium Support"],
      availability: "Mon-Fri 9AM-6PM PST",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Technical Support Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Expert in streaming technology and device compatibility with 10+ years experience.",
      specialties: ["Technical Issues", "Device Setup"],
      availability: "24/7 Coverage",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Content Specialist",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Helping users discover amazing content and handling content-related inquiries.",
      specialties: ["Content Requests", "Recommendations"],
      availability: "Mon-Fri 8AM-8PM EST",
    },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-400", followers: "2.5M" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-400", followers: "1.8M" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-400", followers: "3.2M" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600", followers: "500K" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-400", followers: "4.1M" },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        department: "general",
        priority: "medium",
        phone: "",
        company: "",
      })

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  const handleChatSend = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        sender: "user",
        message: newMessage,
        time: "Just now",
      }
      setChatMessages((prev) => [...prev, userMessage])
      setNewMessage("")

      // Simulate support response
      setTimeout(() => {
        const supportResponse = {
          id: chatMessages.length + 2,
          sender: "support",
          message: "Thanks for your message! I'll help you with that right away.",
          time: "Just now",
        }
        setChatMessages((prev) => [...prev, supportResponse])
      }, 1000)
    }
  }

  const handleCallbackSubmit = (e) => {
    e.preventDefault()
    // Handle callback request
    setShowCallbackForm(false)
    setCallbackData({ name: "", phone: "", preferredTime: "", topic: "" })
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* <Header /> */}

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -top-1/2 -right-1/2 w-full h-full border border-purple-500/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-pink-500/10 rounded-full"
          />
        </div>

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-full mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-purple-400 font-semibold text-sm">24/7 SUPPORT AVAILABLE</span>
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Get in
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Have a question, need support, or want to partner with us? Our team is here to help you every step of
                the way.
              </p>

              {/* Quick Contact Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-semibold">Live Chat</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">Get instant help from our support team</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowLiveChat(true)}
                    className="text-green-400 font-semibold text-sm flex items-center"
                  >
                    Start Chat <ArrowRight className="h-4 w-4 ml-1" />
                  </motion.button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-semibold">Call Back</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">Schedule a call with our experts</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowCallbackForm(true)}
                    className="text-blue-400 font-semibold text-sm flex items-center"
                  >
                    Request Call <ArrowRight className="h-4 w-4 ml-1" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Response Time Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">&lt; 2min</div>
                  <div className="text-slate-400 text-sm">Live Chat Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">&lt; 4hrs</div>
                  <div className="text-slate-400 text-sm">Email Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
                  <div className="text-slate-400 text-sm">Support Available</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </motion.button>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl transform scale-110 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-24 bg-slate-800/30">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Multiple Ways to Connect
                </span>
              </h2>
              <p className="text-slate-400 text-xl max-w-3xl mx-auto">
                Choose the contact method that works best for you. We're here to help however you prefer to communicate.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <dept.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-slate-400 mb-4">
                    {dept.id === "general" && "General questions and information about our services"}
                    {dept.id === "technical" && "Help with streaming issues, device setup, and troubleshooting"}
                    {dept.id === "billing" && "Subscription management, payments, and account billing"}
                    {dept.id === "content" && "Content requests, licensing inquiries, and availability"}
                    {dept.id === "partnerships" && "Business partnerships, collaborations, and enterprise solutions"}
                    {dept.id === "press" && "Media inquiries, press releases, and interview requests"}
                  </p>
                  <div className="flex items-center text-purple-400 font-semibold">
                    <span>Contact Department</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Contact Form */}
      <section ref={formRef} className="py-24 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Send Us a Message
              </span>
            </h2>
            <p className="text-slate-400 text-xl">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Department</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  >
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Priority</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Enter the subject of your message"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                ) : (
                  <Send className="h-6 w-6 mr-2" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`mt-6 p-4 rounded-lg flex items-center ${
                    submitStatus === "success"
                      ? "bg-green-600/20 border border-green-500/50 text-green-400"
                      : "bg-red-600/20 border border-red-500/50 text-red-400"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <CheckCircle className="h-5 w-5 mr-2" />
                  ) : (
                    <AlertCircle className="h-5 w-5 mr-2" />
                  )}
                  {submitStatus === "success"
                    ? "Thank you! Your message has been sent successfully. We'll get back to you soon."
                    : "Sorry, there was an error sending your message. Please try again."}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Global Offices
                </span>
              </h2>
              <p className="text-slate-400 text-xl max-w-3xl mx-auto">
                We have offices around the world to serve you better. Find the location nearest to you.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl cursor-pointer transition-all ${
                      activeOffice === index
                        ? "bg-blue-600/20 border-2 border-blue-500"
                        : "bg-slate-800/50 border border-slate-700 hover:border-slate-600"
                    }`}
                    onClick={() => setActiveOffice(index)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center">
                          {office.city}
                          {office.isHeadquarters && (
                            <span className="ml-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs">HQ</span>
                          )}
                        </h3>
                        <p className="text-slate-400">{office.country}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-blue-400 font-semibold">{office.team}</div>
                        <div className="text-slate-500 text-sm">employees</div>
                      </div>
                    </div>
                    <div className="text-slate-400 text-sm">
                      <div className="flex items-center mb-1">
                        <Clock className="h-4 w-4 mr-2" />
                        {office.hours}
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2" />
                        {office.timezone}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                key={activeOffice}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700"
              >
                <div className="relative h-64">
                  <Image
                    src={offices[activeOffice].image || "/placeholder.svg"}
                    alt={`${offices[activeOffice].city} office`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {offices[activeOffice].isHeadquarters ? "Headquarters" : "Regional Office"}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {offices[activeOffice].city}, {offices[activeOffice].country}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                        Address
                      </h4>
                      <p className="text-slate-300">{offices[activeOffice].address}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-green-400" />
                        Phone
                      </h4>
                      <p className="text-slate-300">{offices[activeOffice].phone}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Mail className="h-5 w-5 mr-2 text-purple-400" />
                        Email
                      </h4>
                      <p className="text-slate-300">{offices[activeOffice].email}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-yellow-400" />
                        Hours
                      </h4>
                      <p className="text-slate-300">{offices[activeOffice].hours}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Departments</h4>
                    <div className="flex flex-wrap gap-2">
                      {offices[activeOffice].departments.map((dept) => (
                        <span
                          key={dept}
                          className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          {dept}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-24 bg-slate-800/30">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Meet Our Support Team
                </span>
              </h2>
              <p className="text-slate-400 text-xl max-w-3xl mx-auto">
                Our dedicated support professionals are here to ensure you have the best experience possible.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTeam.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm text-center"
              >
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full blur-xl transform scale-110" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-green-400 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-green-600/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-slate-400 text-sm">
                  <div className="flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {member.availability}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="text-slate-400 text-xl">
                Find quick answers to common questions. Can't find what you're looking for? Contact us directly.
              </p>
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                className="bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm overflow-hidden"
              >
                <motion.button
                  whileHover={{ backgroundColor: "rgba(100, 116, 139, 0.1)" }}
                  onClick={() => setActiveFAQ(activeFAQ === faq.id ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <span className="text-white font-semibold text-lg">{faq.question}</span>
                  <motion.div animate={{ rotate: activeFAQ === faq.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="h-5 w-5 text-slate-400" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {activeFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-700"
                    >
                      <div className="p-6 pt-4">
                        <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Community */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
                  Join Our Community
                </span>
              </h2>
              <p className="text-slate-400 text-xl max-w-3xl mx-auto">
                Follow us on social media for the latest updates, movie recommendations, and behind-the-scenes content.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm text-center group hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <social.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{social.name}</h3>
                <p className="text-slate-400 text-sm mb-3">{social.followers} followers</p>
                <div className={`text-sm font-semibold ${social.color} transition-colors`}>Follow Us</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat Modal */}
      <AnimatePresence>
        {showLiveChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowLiveChat(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-900 rounded-2xl max-w-md w-full max-h-[600px] border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Live Chat</h3>
                    <p className="text-green-400 text-sm">Online now</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowLiveChat(false)}
                  className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>

              <div className="h-80 overflow-y-auto p-6 space-y-4">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        message.sender === "user" ? "bg-purple-600 text-white" : "bg-slate-700 text-slate-200"
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                      <p className="text-xs opacity-70 mt-1">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-slate-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleChatSend()}
                    placeholder="Type your message..."
                    className="flex-1 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleChatSend}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Send className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Callback Form Modal */}
      <AnimatePresence>
        {showCallbackForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCallbackForm(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-900 rounded-2xl max-w-md w-full border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">Request Callback</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowCallbackForm(false)}
                  className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>

              <form onSubmit={handleCallbackSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    value={callbackData.name}
                    onChange={(e) => setCallbackData({ ...callbackData, name: e.target.value })}
                    required
                    className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={callbackData.phone}
                    onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                    required
                    className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Time</label>
                  <select
                    value={callbackData.preferredTime}
                    onChange={(e) => setCallbackData({ ...callbackData, preferredTime: e.target.value })}
                    className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9AM-12PM)</option>
                    <option value="afternoon">Afternoon (12PM-5PM)</option>
                    <option value="evening">Evening (5PM-8PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Topic</label>
                  <textarea
                    value={callbackData.topic}
                    onChange={(e) => setCallbackData({ ...callbackData, topic: e.target.value })}
                    rows={3}
                    className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold"
                >
                  Request Callback
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <Footer /> */}
    </div>
  )
}
