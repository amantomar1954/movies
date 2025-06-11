"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Play,
  Clock,
  Calendar,
  Users,
  Trophy,
  Star,
  ChevronLeft,
  ChevronRight,
  Zap,
  Target,
  Award,
  TrendingUp,
  Eye,
  Heart,
  Share2,
  Bookmark,
} from "lucide-react"

export default function SportsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroContent.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const heroContent = [
    {
      id: 1,
      title: "IPL 2024 Final",
      subtitle: "Mumbai Indians vs Chennai Super Kings",
      description:
        "The ultimate showdown between two cricket giants. Don't miss the most anticipated match of the season.",
      image: "/placeholder.svg?height=600&width=1200",
      isLive: true,
      viewers: "2.5M",
      category: "Cricket",
      duration: "3h 30m",
    },
    {
      id: 2,
      title: "FIFA World Cup Highlights",
      subtitle: "Best Goals & Moments",
      description: "Relive the most spectacular goals and unforgettable moments from the FIFA World Cup.",
      image: "/placeholder.svg?height=600&width=1200",
      isLive: false,
      viewers: "1.8M",
      category: "Football",
      duration: "45m",
    },
    {
      id: 3,
      title: "NBA Finals 2024",
      subtitle: "Lakers vs Warriors",
      description: "Epic basketball showdown featuring the best players in the league. Experience the thrill of NBA.",
      image: "/placeholder.svg?height=600&width=1200",
      isLive: true,
      viewers: "3.2M",
      category: "Basketball",
      duration: "2h 45m",
    },
  ]

  const liveMatches = [
    {
      id: 1,
      team1: "Manchester United",
      team2: "Liverpool",
      team1Logo: "🔴",
      team2Logo: "🔴",
      score: "2-1",
      time: "78'",
      viewers: "1.2M",
      category: "Football",
      isLive: true,
    },
    {
      id: 2,
      team1: "India",
      team2: "Australia",
      team1Logo: "🇮🇳",
      team2Logo: "🇦🇺",
      score: "245/6",
      time: "45.2 Overs",
      viewers: "2.8M",
      category: "Cricket",
      isLive: true,
    },
    {
      id: 3,
      team1: "Lakers",
      team2: "Warriors",
      team1Logo: "💜",
      team2Logo: "💙",
      score: "98-92",
      time: "Q3 8:45",
      viewers: "890K",
      category: "Basketball",
      isLive: true,
    },
    {
      id: 4,
      team1: "Spain",
      team2: "Germany",
      team1Logo: "🇪🇸",
      team2Logo: "🇩🇪",
      score: "1-0",
      time: "HT",
      viewers: "1.5M",
      category: "Football",
      isLive: false,
    },
  ]

  const sportsCategories = [
    { name: "All", key: "all", icon: "🏆", count: 150 },
    { name: "Cricket", key: "cricket", icon: "🏏", count: 45 },
    { name: "Football", key: "football", icon: "⚽", count: 38 },
    { name: "Basketball", key: "basketball", icon: "🏀", count: 22 },
    { name: "Tennis", key: "tennis", icon: "🎾", count: 18 },
    { name: "Badminton", key: "badminton", icon: "🏸", count: 15 },
    { name: "Hockey", key: "hockey", icon: "🏑", count: 12 },
  ]

  const upcomingMatches = [
    {
      id: 1,
      title: "Champions League Final",
      teams: "Real Madrid vs Manchester City",
      date: "June 15, 2024",
      time: "8:30 PM IST",
      venue: "Wembley Stadium",
      image: "/placeholder.svg?height=200&width=350",
      category: "Football",
      isHighlight: true,
    },
    {
      id: 2,
      title: "India vs England Test",
      teams: "IND vs ENG",
      date: "June 18, 2024",
      time: "9:30 AM IST",
      venue: "Lord's Cricket Ground",
      image: "/placeholder.svg?height=200&width=350",
      category: "Cricket",
      isHighlight: false,
    },
    {
      id: 3,
      title: "NBA Conference Finals",
      teams: "Celtics vs Heat",
      date: "June 20, 2024",
      time: "6:00 AM IST",
      venue: "TD Garden",
      image: "/placeholder.svg?height=200&width=350",
      category: "Basketball",
      isHighlight: false,
    },
    {
      id: 4,
      title: "Wimbledon Semifinals",
      teams: "Djokovic vs Alcaraz",
      date: "June 22, 2024",
      time: "6:30 PM IST",
      venue: "All England Club",
      image: "/placeholder.svg?height=200&width=350",
      category: "Tennis",
      isHighlight: true,
    },
  ]

  const tournaments = [
    {
      id: 1,
      name: "IPL 2024",
      description: "Indian Premier League",
      image: "/placeholder.svg?height=300&width=400",
      status: "Live",
      matches: 74,
      teams: 10,
      category: "Cricket",
    },
    {
      id: 2,
      name: "Premier League",
      description: "English Premier League",
      image: "/placeholder.svg?height=300&width=400",
      status: "Ongoing",
      matches: 380,
      teams: 20,
      category: "Football",
    },
    {
      id: 3,
      name: "NBA Playoffs",
      description: "National Basketball Association",
      image: "/placeholder.svg?height=300&width=400",
      status: "Live",
      matches: 87,
      teams: 16,
      category: "Basketball",
    },
    {
      id: 4,
      name: "French Open",
      description: "Roland Garros",
      image: "/placeholder.svg?height=300&width=400",
      status: "Upcoming",
      matches: 128,
      teams: 256,
      category: "Tennis",
    },
  ]

  const highlights = [
    {
      id: 1,
      title: "Best Goals of the Week",
      description: "Amazing goals from Premier League",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "8:45",
      views: "2.3M",
      category: "Football",
      isNew: true,
    },
    {
      id: 2,
      title: "Kohli's Century Highlights",
      description: "Virat Kohli's magnificent 100",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "12:30",
      views: "5.1M",
      category: "Cricket",
      isNew: false,
    },
    {
      id: 3,
      title: "LeBron's Best Dunks",
      description: "Top 10 dunks this season",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "6:20",
      views: "1.8M",
      category: "Basketball",
      isNew: true,
    },
    {
      id: 4,
      title: "Federer vs Nadal Classic",
      description: "Epic Wimbledon final moments",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "15:45",
      views: "3.7M",
      category: "Tennis",
      isNew: false,
    },
    {
      id: 5,
      title: "World Cup Final Goals",
      description: "All goals from the final",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "10:15",
      views: "8.2M",
      category: "Football",
      isNew: false,
    },
    {
      id: 6,
      title: "T20 World Cup Sixes",
      description: "Biggest sixes compilation",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "7:30",
      views: "4.5M",
      category: "Cricket",
      isNew: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const nextSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroContent.length)
  }

  const prevSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroContent.length) % heroContent.length)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroContent[currentHeroSlide].image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex items-center space-x-4 mb-4"
                  >
                    {heroContent[currentHeroSlide].isLive && (
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                        LIVE
                      </span>
                    )}
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {heroContent[currentHeroSlide].category}
                    </span>
                    <div className="flex items-center text-gray-300">
                      <Eye className="w-4 h-4 mr-1" />
                      <span className="text-sm">{heroContent[currentHeroSlide].viewers} watching</span>
                    </div>
                  </motion.div>

                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                  >
                    {heroContent[currentHeroSlide].title}
                  </motion.h1>

                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-300 mb-6"
                  >
                    {heroContent[currentHeroSlide].subtitle}
                  </motion.h2>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg text-gray-400 mb-8 max-w-2xl"
                  >
                    {heroContent[currentHeroSlide].description}
                  </motion.p>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105">
                      <Play className="w-5 h-5 mr-2" />
                      {heroContent[currentHeroSlide].isLive ? "Watch Live" : "Watch Now"}
                    </button>
                    <button className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                      <Bookmark className="w-5 h-5 mr-2" />
                      Add to Watchlist
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex items-center space-x-6 mt-8 text-gray-400"
                  >
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{heroContent[currentHeroSlide].duration}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="hover:text-white transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="hover:text-white transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroSlide ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Live Matches Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-red-500 mr-3" />
              <h2 className="text-3xl font-bold">Live Matches</h2>
            </div>
            <button className="text-blue-400 hover:text-blue-300 transition-colors">View All</button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {liveMatches.map((match, index) => (
              <motion.div
                key={match.id}
                variants={itemVariants}
                className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  {match.isLive && (
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse"></div>
                      LIVE
                    </span>
                  )}
                  <span className="text-gray-400 text-sm">{match.category}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{match.team1Logo}</span>
                      <span className="font-semibold">{match.team1}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{match.team2Logo}</span>
                      <span className="font-semibold">{match.team2}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-blue-400">{match.score}</div>
                      <div className="text-sm text-gray-400">{match.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-400">
                        <Eye className="w-4 h-4 mr-1" />
                        <span className="text-sm">{match.viewers}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                  <Play className="w-4 h-4 inline mr-2" />
                  Watch Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-6">Browse by Sport</h2>
            <div className="flex flex-wrap gap-4">
              {sportsCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.key
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                  <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full">{category.count}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center">
              <Trophy className="w-6 h-6 text-yellow-500 mr-3" />
              <h2 className="text-3xl font-bold">Major Tournaments</h2>
            </div>
            <button className="text-blue-400 hover:text-blue-300 transition-colors">View All</button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {tournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                variants={itemVariants}
                className="bg-gray-700 rounded-xl overflow-hidden hover:bg-gray-600 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={tournament.image || "/placeholder.svg"}
                    alt={tournament.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        tournament.status === "Live"
                          ? "bg-red-600 text-white"
                          : tournament.status === "Ongoing"
                            ? "bg-green-600 text-white"
                            : "bg-yellow-600 text-black"
                      }`}
                    >
                      {tournament.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full">
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tournament.name}</h3>
                  <p className="text-gray-400 mb-4">{tournament.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      <span>{tournament.matches} matches</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{tournament.teams} teams</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center">
              <Calendar className="w-6 h-6 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold">Upcoming Matches</h2>
            </div>
            <button className="text-blue-400 hover:text-blue-300 transition-colors">View Schedule</button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {upcomingMatches.map((match, index) => (
              <motion.div
                key={match.id}
                variants={itemVariants}
                className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={match.image || "/placeholder.svg"}
                    alt={match.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {match.isHighlight && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                      Set Reminder
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{match.title}</h3>
                  <p className="text-blue-400 font-semibold mb-3">{match.teams}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{match.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      <span>{match.venue}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center">
              <Award className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-3xl font-bold">Best Highlights</h2>
            </div>
            <button className="text-blue-400 hover:text-blue-300 transition-colors">View All</button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                variants={itemVariants}
                className="bg-gray-700 rounded-xl overflow-hidden hover:bg-gray-600 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={highlight.thumbnail || "/placeholder.svg"}
                    alt={highlight.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full">
                      <Play className="w-8 h-8" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {highlight.duration}
                  </div>
                  {highlight.isNew && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">NEW</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                  <p className="text-gray-400 mb-4">{highlight.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{highlight.views} views</span>
                    </div>
                    <span className="bg-gray-600 text-white px-2 py-1 rounded text-xs">{highlight.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center">
              <TrendingUp className="w-6 h-6 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold">Trending Now</h2>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {highlights.slice(0, 5).map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                    #{index + 1}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold mb-1 line-clamp-2">{item.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{item.views} views</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
