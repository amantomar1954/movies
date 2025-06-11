"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Play,
  Star,
  Calendar,
  Clock,
  Award,
  FlameIcon as Fire,
  Sparkles,
  Crown,
  Zap,
  Heart,
  Eye,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"

// Import JSON data
// import moviesData from "../../data/homepage.json"
// import moviesData from "../app/data/homepage.json";
import moviesData from "../../app/data/homepage.json";



// Custom Card Component
const Card = ({ children, className = "" }) => {
  return <div className={`rounded-lg shadow-lg overflow-hidden ${className}`}>{children}</div>
}

// Custom CardContent Component
const CardContent = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>
}

// Custom Badge Component
const Badge = ({ children, className = "" }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  )
}

// Custom Button Component
const Button = ({ children, className = "", size = "md", variant = "default", ...props }) => {
  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4",
    lg: "py-3 px-6 text-lg",
  }

  const variantClasses = {
    default: "bg-purple-600 hover:bg-purple-700 text-white",
    outline: "bg-transparent border-2 text-white hover:bg-white/10",
  }

  return (
    <button
      className={`rounded-md font-medium transition-colors flex items-center justify-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// Icon mapping for genres
const iconMap = {
  Zap,
  Heart,
  Award,
  Fire,
  Sparkles,
}

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.08,
      y: -15,
      rotateY: 5,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const glowVariants = {
    hover: {
      boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <Image
            src={moviesData.featuredMovie.image || "/placeholder.svg"}
            alt={moviesData.featuredMovie.title}
            fill
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
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

        <div className="relative z-10 max-w-[1600px] mt-8 sm:mt-0 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1500px]">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.p
                className="text-purple-400 text-xl md:text-2xl font-semibold mb-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {moviesData.featuredMovie.subtitle}
              </motion.p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent bg-[length:300%_100%]"
                >
                  {moviesData.featuredMovie.title}
                </motion.span>
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <motion.div
                  className="flex items-center space-x-2 bg-yellow-500/20 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(234, 179, 8, 0.3)" }}
                >
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  <span className="text-white font-bold text-lg">{moviesData.featuredMovie.rating}</span>
                </motion.div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{moviesData.featuredMovie.year}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">{moviesData.featuredMovie.duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {moviesData.featuredMovie.genre.map((genre, index) => (
                  <motion.div
                    key={genre}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2 text-sm font-semibold">
                      {genre}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {moviesData.featuredMovie.description}
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-6">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 text-lg font-semibold rounded-full"
                  >
                    <Play className="mr-3 h-6 w-6" />
                    Watch Trailer
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
                  >
                    <Heart className="mr-3 h-6 w-6" />
                    Add to Watchlist
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* New Releases Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-[1600px] mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 px-6 py-3 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Fire className="h-6 w-6 text-red-400" />
              <span className="text-red-400 font-semibold">HOT RELEASES</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                New Releases
              </span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              The latest blockbusters that everyone's talking about
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moviesData.newReleases.map((movie, index) => (
              <motion.div key={movie.id} variants={itemVariants} whileHover="hover" className="group cursor-pointer">
                <motion.div variants={cardHoverVariants}>
                  <Card className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 overflow-hidden backdrop-blur-sm">
                    <motion.div variants={glowVariants}>
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <Image
                            src={movie.image || "/placeholder.svg"}
                            alt={movie.title}
                            width={350}
                            height={500}
                            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-red-600 text-white font-semibold">NEW</Badge>
                          </div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center bg-black/50"
                          >
                            <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full">
                              <Play className="h-8 w-8 text-white" />
                            </Button>
                          </motion.div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-white font-bold text-xl mb-3 group-hover:text-purple-300 transition-colors">
                            {movie.title}
                          </h3>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-purple-400 font-medium">{movie.genre}</span>
                            <span className="text-white/60">{movie.year}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                            <span className="text-white font-semibold">{movie.rating}</span>
                            <span className="text-white/60">/ 10</span>
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Award Winners Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 relative"
      >
        <div className="max-w-[1600px] mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-6 py-3 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">AWARD WINNERS</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Critics' Choice
              </span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Celebrated films that have won prestigious awards and critical acclaim
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {moviesData.awardWinners.map((movie, index) => (
              <motion.div key={movie.id} variants={itemVariants} whileHover="hover" className="group cursor-pointer">
                <motion.div variants={cardHoverVariants}>
                  <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={movie.image || "/placeholder.svg"}
                          alt={movie.title}
                          width={300}
                          height={400}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                          >
                            <Crown className="h-8 w-8 text-yellow-400" />
                          </motion.div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-white font-bold text-lg mb-2">{movie.title}</h3>
                        <p className="text-yellow-400 font-semibold mb-3">{movie.awards}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">{movie.year}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-white font-semibold">{movie.rating}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Trending Now Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-[1600px] mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 px-6 py-3 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="h-6 w-6 text-green-400" />
              <span className="text-green-400 font-semibold">TRENDING</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                What's Hot Right Now
              </span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Most watched movies this week with millions of views
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {moviesData.trendingNow.map((movie, index) => (
              <motion.div key={movie.id} variants={itemVariants} whileHover="hover" className="group cursor-pointer">
                <motion.div variants={cardHoverVariants}>
                  <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={movie.image || "/placeholder.svg"}
                          alt={movie.title}
                          width={200}
                          height={300}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-2 left-2">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                          >
                            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold">
                              #{index + 1}
                            </Badge>
                          </motion.div>
                        </div>
                        <div className="absolute bottom-2 right-2">
                          <div className="flex items-center space-x-1 bg-black/60 px-2 py-1 rounded-full">
                            <Eye className="h-3 w-3 text-white" />
                            <span className="text-white text-xs font-semibold">{movie.views}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">{movie.title}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-white/70 text-sm">{movie.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Coming Soon Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
      >
        <div className="max-w-[1600px] mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="text-purple-400 font-semibold">COMING SOON</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Highly Anticipated
              </span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Get ready for the biggest blockbusters coming to theaters
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {moviesData.comingSoon.map((movie, index) => (
              <motion.div key={movie.id} variants={itemVariants} whileHover="hover" className="group cursor-pointer">
                <motion.div variants={cardHoverVariants}>
                  <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={movie.image || "/placeholder.svg"}
                          alt={movie.title}
                          width={300}
                          height={400}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                          >
                            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                              Coming Soon
                            </Badge>
                          </motion.div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-white font-bold text-lg mb-2">{movie.title}</h3>
                        <p className="text-purple-400 font-semibold mb-2">{movie.releaseDate}</p>
                        <p className="text-white/60">{movie.genre}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Director's Choice Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-[1600px] mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-6 py-3 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Crown className="h-6 w-6 text-blue-400" />
              <span className="text-blue-400 font-semibold">MASTERPIECES</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Director's Choice
              </span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Timeless classics from legendary filmmakers that defined cinema
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {moviesData.directorsChoice.map((movie, index) => (
              <motion.div key={movie.id} variants={itemVariants} whileHover="hover" className="group cursor-pointer">
                <motion.div variants={cardHoverVariants}>
                  <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={movie.image || "/placeholder.svg"}
                          alt={movie.title}
                          width={250}
                          height={350}
                          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">{movie.title}</h3>
                        <p className="text-blue-400 text-xs mb-2">{movie.director}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 text-xs">{movie.year}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-white text-xs font-semibold">{movie.rating}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Genres Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20"
      >
        <div className="max-w-[1600px] mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Explore by Genre
              </span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Discover your next favorite movie by browsing through different genres
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {moviesData.genres.map((genre, index) => {
              const IconComponent = iconMap[genre.icon] || Heart
              return (
                <motion.div
                  key={genre.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer"
                >
                  <Card className={`bg-gradient-to-br ${genre.color} border-0 overflow-hidden group rounded-lg`}>
                    <CardContent className="p-8 text-center relative">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4"
                      >
                        <IconComponent className="h-12 w-12 text-white mx-auto drop-shadow-lg" />
                      </motion.div>
                      <h3 className="text-white font-bold text-lg mb-2">{genre.name}</h3>
                      <p className="text-white/90 text-sm font-medium">{genre.count} movies</p>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Ready to Dive In?
            </span>
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-white/80 mb-12 leading-relaxed"
          >
            Join millions of movie lovers and start your cinematic journey today
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-xl font-bold rounded-full"
              >
                Start Watching Now
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/40 text-white hover:bg-white/10 px-12 py-4 text-xl font-bold rounded-full backdrop-blur-sm"
              >
                Browse All Movies
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
