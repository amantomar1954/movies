"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Play, Star, Clock, FlameIcon as Fire, Zap, Target } from "lucide-react"
import Link from "next/link"

const actionMovies = [
  {
    id: 1,
    title: "John Wick: Chapter 4",
    year: 2023,
    rating: 8.2,
    duration: "2h 49m",
    poster: "https://images.unsplash.com/photo-1489599735734-79b4169c2a78?w=350&h=400&fit=crop&crop=faces",
    description: "John Wick uncovers a path to defeating The High Table.",
    director: "Chad Stahelski",
    cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
  },
  {
    id: 2,
    title: "Top Gun: Maverick",
    year: 2022,
    rating: 8.7,
    duration: "2h 11m",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=350&h=400&fit=crop&crop=faces",
    description: "After thirty years, Maverick is still pushing the envelope.",
    director: "Joseph Kosinski",
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
  },
  {
    id: 3,
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    duration: "2h 0m",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=350&h=400&fit=crop&crop=faces",
    description: "In a post-apocalyptic wasteland, Max teams up with Furiosa.",
    director: "George Miller",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
  },
  {
    id: 4,
    title: "Mission: Impossible",
    year: 2023,
    rating: 7.8,
    duration: "2h 43m",
    poster: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=350&h=400&fit=crop&crop=faces",
    description: "Ethan Hunt faces his most dangerous mission yet.",
    director: "Christopher McQuarrie",
    cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames"],
  },
  {
    id: 5,
    title: "The Batman",
    year: 2022,
    rating: 7.9,
    duration: "2h 56m",
    poster: "https://images.unsplash.com/photo-1596284274000-7d3eca888e3e?q=80&w=3001&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Batman ventures into Gotham City's underworld.",
    director: "Matt Reeves",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano"],
  },
  {
    id: 6,
    title: "Fast X",
    year: 2023,
    rating: 5.8,
    duration: "2h 21m",
    poster: "https://images.unsplash.com/photo-1646933642085-dbdb4840aa99?q=80&w=2964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Dom Toretto faces his most lethal opponent.",
    director: "Louis Leterrier",
    cast: ["Vin Diesel", "Michelle Rodriguez", "Tyrese Gibson"],
  },
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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function ActionPage() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [filter, setFilter] = useState("all")

  const filteredMovies = actionMovies.filter((movie) => {
    if (filter === "recent") return movie.year >= 2020
    if (filter === "classic") return movie.year < 2020
    if (filter === "top-rated") return movie.rating >= 8.0
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Explosion Effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Lightning Effects */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 0.3,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 4,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-16 mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mb-6"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <Fire className="h-12 w-12 text-white" />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            ACTION
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-orange-200 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            High-octane thrills, explosive adventures, and heart-pounding excitement
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {[
              { key: "all", label: "All Movies", icon: Target },
              { key: "recent", label: "Recent", icon: Zap },
              { key: "classic", label: "Classic", icon: Fire },
              { key: "top-rated", label: "Top Rated", icon: Star },
            ].map((filterOption) => (
              <motion.button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === filterOption.key
                    ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg"
                    : "bg-white/10 text-orange-200 hover:bg-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <filterOption.icon className="h-4 w-4" />
                <span>{filterOption.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {[
            { label: "Action Movies", value: "1,245", icon: "💥" },
            { label: "Avg Rating", value: "7.8", icon: "⭐" },
            { label: "Total Runtime", value: "2,890h", icon: "⏱️" },
            { label: "Explosions", value: "∞", icon: "🔥" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-red-900/50 to-orange-900/50 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-orange-300 mb-1">{stat.value}</div>
              <div className="text-orange-200/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Movies Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredMovies.map((movie) => (
            <motion.div
              key={movie.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedMovie(movie)}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-red-500/30 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-orange-500/50 group-hover:shadow-2xl group-hover:shadow-orange-500/20">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    width={350}
                    height={400}
                    className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-red-600/90 rounded-full p-4">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </motion.div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 text-orange-400 text-sm font-bold px-3 py-1 rounded-full flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-orange-400" />
                    {movie.rating}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-orange-100 mb-2 group-hover:text-orange-300 transition-colors">
                    {movie.title}
                  </h3>
                  <div className="flex items-center text-orange-200/70 text-sm mb-3">
                    <span>{movie.year}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{movie.duration}</span>
                  </div>
                  <p className="text-orange-200/80 text-sm leading-relaxed mb-4 line-clamp-2">{movie.description}</p>
                  <div className="text-xs text-orange-300/70">
                    <span className="font-semibold">Director:</span> {movie.director}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Movie Modal */}
        {selectedMovie && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedMovie(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-red-900 to-orange-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src={selectedMovie.poster || "/placeholder.svg"}
                    alt={selectedMovie.title}
                    width={350}
                    height={400}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-orange-100 mb-4">{selectedMovie.title}</h2>
                  <div className="flex items-center text-orange-200 mb-4">
                    <span className="bg-orange-600 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      {selectedMovie.year}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-orange-400 fill-orange-400 mr-1" />
                      <span>{selectedMovie.rating}</span>
                    </div>
                  </div>
                  <p className="text-orange-200/90 leading-relaxed mb-6">{selectedMovie.description}</p>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-orange-300">Director:</span>
                      <span className="text-orange-200 ml-2">{selectedMovie.director}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-300">Cast:</span>
                      <span className="text-orange-200 ml-2">{selectedMovie.cast.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-300">Duration:</span>
                      <span className="text-orange-200 ml-2">{selectedMovie.duration}</span>
                    </div>
                  </div>
                  <Link href="/movies">
                  <motion.button
                    className="mt-6 cursor-pointer bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-5 w-5 mr-2 fill-white" />
                    Watch Now
                  </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
