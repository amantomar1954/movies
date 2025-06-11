"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useInView } from "framer-motion"
import {
  Users,
  Heart,
  Star,
  Globe,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Lightbulb,
  ArrowRight,
  Target,
  Eye,
} from "lucide-react"
import Image from "next/image"
// import Header from "./header"
// import Footer from "./footer"

export default function AboutUs() {
  const [selectedMember, setSelectedMember] = useState(0)
  const [activeOffice, setActiveOffice] = useState(0)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const isHeroInView = useInView(heroRef, { once: true })

  const companyInfo = {
    founded: "2018",
    headquarters: "San Francisco, CA",
    employees: "150+",
    countries: "50+",
    valuation: "$2.5B",
    funding: "Series C",
  }

  const leadership = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former Netflix VP of Product with 15+ years revolutionizing streaming technology. Led teams that scaled platforms to 200M+ users globally.",
      longBio:
        "Sarah's vision for democratizing entertainment access stems from her childhood in rural Montana, where accessing diverse content was nearly impossible. After earning her MBA from Stanford and leading product teams at Netflix, Amazon Prime, and Disney+, she co-founded CinemaHub to solve the content discovery problem that affects millions worldwide.",
      image: "/placeholder.svg?height=600&width=500",
      education: "MBA Stanford Graduate School of Business, BS Computer Science MIT",
      previousRoles: "VP Product at Netflix, Senior Director at Amazon Prime Video, Product Lead at Disney+",
      achievements: [
        "Led Netflix's AI recommendation system",
        "Scaled Prime Video to 100M+ users",
        "Pioneer in streaming technology",
      ],
      social: { linkedin: "#", twitter: "#", email: "sarah@cinemahub.com" },
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Former Google Principal Engineer and Apple Senior Director. Expert in distributed systems, AI/ML, and building platforms that scale to billions of users.",
      longBio:
        "Michael's passion for technology began when he built his first computer at age 12 in Beijing. After immigrating to the US and earning his PhD from Stanford, he spent a decade at Google working on search infrastructure and YouTube's recommendation engine. His expertise in AI and scalable systems forms the technical backbone of CinemaHub's platform.",
      image: "/placeholder.svg?height=600&width=500",
      education: "PhD Computer Science Stanford University, MS Electrical Engineering Tsinghua University",
      previousRoles: "Principal Engineer at Google, Senior Director of Engineering at Apple, Tech Lead at YouTube",
      achievements: [
        "Built Google's video search infrastructure",
        "Led Apple's streaming technology team",
        "20+ patents in distributed systems",
      ],
      social: { linkedin: "#", github: "#", email: "michael@cinemahub.com" },
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Content Officer",
      bio: "Award-winning producer and former Warner Bros executive. Deep expertise in content acquisition, international markets, and creator relationships.",
      longBio:
        "Emily's journey in entertainment began as a film student at USC, where she produced her first award-winning short film. After a decade at major studios including Warner Bros, Universal, and A24, she joined CinemaHub to champion diverse storytelling and ensure creators worldwide have a platform to share their vision.",
      image: "/placeholder.svg?height=600&width=500",
      education: "MFA Film Production USC School of Cinematic Arts, BA Communications UCLA",
      previousRoles:
        "VP Content Strategy at Warner Bros, Head of International at Universal Pictures, Creative Executive at A24",
      achievements: [
        "Greenlit 50+ films generating $2B+ revenue",
        "Launched international co-production program",
        "Championed diversity in Hollywood",
      ],
      social: { linkedin: "#", twitter: "#", email: "emily@cinemahub.com" },
    },
    {
      name: "David Kim",
      role: "Chief Design Officer",
      bio: "Design visionary who transformed user experiences at Airbnb and Spotify. Believes in making complex technology beautifully simple and accessible to everyone.",
      longBio:
        "David's design philosophy centers on human connection and emotional storytelling. After studying at RISD and working at IDEO, he led design teams at Airbnb during their global expansion and at Spotify where he reimagined music discovery. At CinemaHub, he's creating the most intuitive and beautiful way to discover your next favorite story.",
      image: "/placeholder.svg?height=600&width=500",
      education: "MFA Design Rhode Island School of Design, BA Psychology Harvard University",
      previousRoles: "Head of Design at Airbnb, Design Director at Spotify, Senior Designer at IDEO",
      achievements: [
        "Led Airbnb's design through 10x user growth",
        "Redesigned Spotify's discovery experience",
        "Winner of multiple design awards",
      ],
      social: { linkedin: "#", twitter: "#", email: "david@cinemahub.com" },
    },
  ]

  const timeline = [
    { year: "2018", event: "Company Founded", description: "Sarah and Michael start CinemaHub in a Palo Alto garage" },
    { year: "2019", event: "Seed Funding", description: "$5M raised from Andreessen Horowitz and angel investors" },
    { year: "2020", event: "Product Launch", description: "Beta platform launches with 10,000 curated films" },
    { year: "2021", event: "Series A", description: "$25M Series A led by Sequoia Capital" },
    { year: "2022", event: "Global Expansion", description: "Launch in 25 countries across Europe and Asia" },
    { year: "2023", event: "Series B", description: "$75M Series B, unicorn valuation achieved" },
    { year: "2024", event: "AI Revolution", description: "Launch of proprietary AI recommendation engine" },
  ]

  const offices = [
    {
      city: "San Francisco",
      country: "United States",
      address: "123 Market Street, San Francisco, CA 94105",
      employees: 85,
      type: "Headquarters",
      image: "/placeholder.svg?height=400&width=600",
      description: "Our global headquarters houses our executive team, engineering, and product divisions.",
      established: "2018",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "45 Shoreditch High Street, London E1 6PN",
      employees: 32,
      type: "European Hub",
      image: "/placeholder.svg?height=400&width=600",
      description: "European operations center focusing on content partnerships and market expansion.",
      established: "2021",
    },
    {
      city: "Tokyo",
      country: "Japan",
      address: "1-1-1 Shibuya, Tokyo 150-0002",
      employees: 28,
      type: "Asia Pacific",
      image: "/placeholder.svg?height=400&width=600",
      description: "Asia Pacific hub driving growth across Asian markets and anime content.",
      established: "2022",
    },
    {
      city: "São Paulo",
      country: "Brazil",
      address: "Av. Paulista, 1000, São Paulo, SP 01310-100",
      employees: 15,
      type: "Latin America",
      image: "/placeholder.svg?height=400&width=600",
      description: "Latin American operations focusing on regional content and market development.",
      established: "2023",
    },
  ]

  const values = [
    {
      title: "Authenticity",
      description: "We believe in genuine storytelling and authentic connections between creators and audiences.",
      icon: Heart,
      details: ["Transparent communication", "Honest feedback", "Real human connections"],
    },
    {
      title: "Innovation",
      description: "Constantly pushing boundaries to create the future of entertainment technology.",
      icon: Lightbulb,
      details: ["Cutting-edge AI", "User-first design", "Emerging technologies"],
    },
    {
      title: "Diversity",
      description: "Celebrating stories from all cultures, backgrounds, and perspectives around the world.",
      icon: Globe,
      details: ["Global content library", "Inclusive hiring", "Cultural representation"],
    },
    {
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do, from code to customer service.",
      icon: Star,
      details: ["Quality assurance", "Continuous improvement", "Best-in-class experience"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      {/* <Header /> */}

      {/* Hero Section - Completely Different Layout */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="absolute inset-0 overflow-hidden">
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

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-20">
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
                <span className="text-purple-400 font-semibold text-sm">EST. 2018 • SAN FRANCISCO</span>
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                About
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  CinemaHub
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We're not just another streaming platform. We're a team of passionate storytellers, technologists, and
                dreamers building the future of entertainment discovery.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-white">{companyInfo.employees}</div>
                  <div className="text-slate-400 text-sm">Team Members</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-white">{companyInfo.countries}</div>
                  <div className="text-slate-400 text-sm">Countries</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center"
              >
                Our Story <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{companyInfo.valuation}</div>
                    <div className="text-slate-400 text-sm">Valuation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">{companyInfo.founded}</div>
                    <div className="text-slate-400 text-sm">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{companyInfo.funding}</div>
                    <div className="text-slate-400 text-sm">Funding Stage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">4</div>
                    <div className="text-slate-400 text-sm">Global Offices</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Side by Side Layout */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-8 rounded-2xl border border-purple-500/20"
            >
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-purple-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                To democratize access to incredible stories from around the world and empower creators to reach global
                audiences through innovative technology and human-centered design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 p-8 rounded-2xl border border-pink-500/20"
            >
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-pink-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                To become the world's most trusted platform for discovering and celebrating cinema, where every story
                finds its audience and every viewer discovers their next favorite film.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Card-Based Layout */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Meet the visionaries driving CinemaHub's mission to transform entertainment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedMember === index ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => setSelectedMember(index)}
              >
                <div
                  className={`bg-slate-800 rounded-xl overflow-hidden border-2 transition-colors ${
                    selectedMember === index ? "border-purple-500" : "border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    {selectedMember === index && <div className="absolute inset-0 bg-purple-600/20" />}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 font-semibold">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Member Details */}
          <motion.div
            key={selectedMember}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold text-white mb-4">{leadership[selectedMember].name}</h3>
                <p className="text-purple-400 text-xl font-semibold mb-6">{leadership[selectedMember].role}</p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">{leadership[selectedMember].longBio}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Education</h4>
                    <p className="text-slate-400">{leadership[selectedMember].education}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Previous Experience</h4>
                    <p className="text-slate-400">{leadership[selectedMember].previousRoles}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Key Achievements</h4>
                <ul className="space-y-3 mb-6">
                  {leadership[selectedMember].achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-slate-300">
                      <Star className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  {leadership[selectedMember].social.linkedin && (
                    <motion.a
                      href={leadership[selectedMember].social.linkedin}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg flex items-center justify-center text-blue-400"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                  )}
                  {leadership[selectedMember].social.twitter && (
                    <motion.a
                      href={leadership[selectedMember].social.twitter}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-sky-600/20 hover:bg-sky-600/40 rounded-lg flex items-center justify-center text-sky-400"
                    >
                      <Twitter className="h-5 w-5" />
                    </motion.a>
                  )}
                  {leadership[selectedMember].social.github && (
                    <motion.a
                      href={leadership[selectedMember].social.github}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-gray-600/20 hover:bg-gray-600/40 rounded-lg flex items-center justify-center text-gray-400"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                  )}
                  <motion.a
                    href={`mailto:${leadership[selectedMember].social.email}`}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg flex items-center justify-center text-purple-400"
                  >
                    <Mail className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Timeline - Horizontal Scroll */}
      <section className="py-24 bg-slate-800/30">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-slate-400 text-xl">From garage startup to global platform</p>
          </motion.div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-6 space-x-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-80"
                >
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-full">
                    <div className="text-3xl font-bold text-purple-400 mb-3">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.event}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values - Grid Layout */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-slate-400 text-xl">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800 p-8 rounded-xl border border-slate-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{value.description}</p>
                <ul className="space-y-2">
                  {value.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-slate-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices - Interactive Map Style */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">Global Presence</h2>
            <p className="text-slate-400 text-xl">Our teams around the world</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      activeOffice === index
                        ? "bg-purple-600/20 border-2 border-purple-500"
                        : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                    }`}
                    onClick={() => setActiveOffice(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white">{office.city}</h3>
                        <p className="text-slate-400">{office.country}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-purple-400 font-semibold">{office.employees}</div>
                        <div className="text-slate-500 text-sm">employees</div>
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
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700"
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
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {offices[activeOffice].type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{offices[activeOffice].city}</h3>
                  <p className="text-slate-300 mb-4">{offices[activeOffice].description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-400">Address:</span>
                      <p className="text-white">{offices[activeOffice].address}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Established:</span>
                      <p className="text-white">{offices[activeOffice].established}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Full Width */}
      <section className="py-24 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Ready to help us build the future of entertainment? We're always looking for passionate people to join our
              team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center"
              >
                <Users className="mr-2 h-5 w-5" />
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <Footer />s */}
    </div>
  )
}
