"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Play, Star, Clock, Skull, Eye, Zap } from "lucide-react"

const horrorMovies = [
  {
    id: 1,
    title: "The Conjuring",
    year: 2013,
    rating: 7.5,
    duration: "1h 52m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "Paranormal investigators help a family terrorized by a dark presence.",
    director: "James Wan",
    cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
    scareLevel: 8,
  },
  {
    id: 2,
    title: "Hereditary",
    year: 2018,
    rating: 7.3,
    duration: "2h 7m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A family's dark secrets are revealed after the grandmother's death.",
    director: "Ari Aster",
    cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro"],
    scareLevel: 9,
  },
  {
    id: 3,
    title: "Get Out",
    year: 2017,
    rating: 7.7,
    duration: "1h 44m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A young man visits his girlfriend's family estate.",
    director: "Jordan Peele",
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
    scareLevel: 7,
  },
  {
    id: 4,
    title: "A Quiet Place",
    year: 2018,
    rating: 7.5,
    duration: "1h 30m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A family lives in silence to avoid creatures that hunt by sound.",
    director: "John Krasinski",
    cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
    scareLevel: 8,
  },
  {
    id: 5,
    title: "Midsommar",
    year: 2019,
    rating: 7.1,
    duration: "2h 28m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A couple travels to Sweden for a midsummer festival.",
    director: "Ari Aster",
    cast: ["Florence Pugh", "Jack Reynor", "William Jackson Harper"],
    scareLevel: 8,
  },
  {
    id: 6,
    title: "The Babadook",
    year: 2014,
    rating: 6.8,
    duration: "1h 34m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A mother and son are haunted by a sinister presence.",
    director: "Jennifer Kent",
    cast: ["Essie Davis", "Noah Wiseman", "Daniel Henshall"],
    scareLevel: 7,
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
  hidden: { y: 50, opacity: 0, rotateX: -15 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function HorrorPage() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [filter, setFilter] = useState("all")
  const [lightsOn, setLightsOn] = useState(true)

  const filteredMovies = horrorMovies.filter((movie) => {
    if (filter === "recent") return movie.year >= 2015
    if (filter === "classic") return movie.year < 2015
    if (filter === "scariest") return movie.scareLevel >= 8
    return true
  })

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${
        lightsOn ? "bg-gradient-to-br from-gray-900 via-red-900 to-black" : "bg-black"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Flickering Shadows */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-900/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Lightning Flashes */}
        <motion.div
          className="absolute inset-0 bg-white/5"
          animate={{
            opacity: [0, 0, 0, 0.3, 0, 0, 0],
          }}
          transition={{
            duration: 0.1,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 8 + Math.random() * 10,
          }}
        />

        {/* Creepy Eyes */}
        {!lightsOn &&
          [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute flex space-x-2"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
              }}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
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
          {/* Light Switch */}
          <motion.button
            onClick={() => setLightsOn(!lightsOn)}
            className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {lightsOn ? "🔦" : "💡"}
          </motion.button>

          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-600 to-black rounded-full mb-6"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
              boxShadow: ["0 0 20px rgba(255,0,0,0.3)", "0 0 40px rgba(255,0,0,0.6)", "0 0 20px rgba(255,0,0,0.3)"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Skull className="h-12 w-12 text-red-400" />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-white mb-6"
            animate={{
              textShadow: ["0 0 10px rgba(255,0,0,0.5)", "0 0 20px rgba(255,0,0,0.8)", "0 0 10px rgba(255,0,0,0.5)"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            HORROR
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-red-200 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Spine-chilling scares and supernatural thrills that will haunt your dreams
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {[
              { key: "all", label: "All Movies", icon: Eye },
              { key: "recent", label: "Recent", icon: Zap },
              { key: "classic", label: "Classic", icon: Skull },
              { key: "scariest", label: "Scariest", icon: Star },
            ].map((filterOption) => (
              <motion.button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === filterOption.key
                    ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-500/30"
                    : "bg-gray-800/50 text-red-200 hover:bg-gray-700/50 border border-red-500/30"
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
            { label: "Horror Movies", value: "745", icon: "👻" },
            { label: "Scare Factor", value: "9.5/10", icon: "😱" },
            { label: "Nightmares", value: "∞", icon: "🌙" },
            { label: "Jump Scares", value: "2,847", icon: "⚡" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-gray-900/50 to-red-900/50 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl md:text-3xl font-bold text-red-300 mb-1">{stat.value}</div>
              <div className="text-red-200/70 text-sm">{stat.label}</div>
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
              whileHover={{ y: -10, rotateY: 5 }}
            >
              <div className="bg-gradient-to-br from-gray-900/30 to-red-900/30 backdrop-blur-sm border border-red-500/30 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-red-500/50 group-hover:shadow-2xl group-hover:shadow-red-500/20">
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 filter group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

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
                  <div className="absolute top-4 right-4 bg-black/70 text-red-400 text-sm font-bold px-3 py-1 rounded-full flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-red-400" />
                    {movie.rating}
                  </div>

                  {/* Scare Level */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <Skull className="h-3 w-3 mr-1" />
                    {movie.scareLevel}/10
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-red-100 mb-2 group-hover:text-red-300 transition-colors">
                    {movie.title}
                  </h3>
                  <div className="flex items-center text-red-200/70 text-sm mb-3">
                    <span>{movie.year}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{movie.duration}</span>
                  </div>
                  <p className="text-red-200/80 text-sm leading-relaxed mb-4 line-clamp-2">{movie.description}</p>
                  <div className="text-xs text-red-300/70">
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedMovie(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-red-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-red-500/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src={selectedMovie.poster || "/placeholder.svg"}
                    alt={selectedMovie.title}
                    width={300}
                    height={450}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-red-100 mb-4">{selectedMovie.title}</h2>
                  <div className="flex items-center text-red-200 mb-4">
                    <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      {selectedMovie.year}
                    </span>
                    <div className="flex items-center mr-4">
                      <Star className="h-4 w-4 text-red-400 fill-red-400 mr-1" />
                      <span>{selectedMovie.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Skull className="h-4 w-4 text-red-400 mr-1" />
                      <span>Scare: {selectedMovie.scareLevel}/10</span>
                    </div>
                  </div>
                  <p className="text-red-200/90 leading-relaxed mb-6">{selectedMovie.description}</p>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-red-300">Director:</span>
                      <span className="text-red-200 ml-2">{selectedMovie.director}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-red-300">Cast:</span>
                      <span className="text-red-200 ml-2">{selectedMovie.cast.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-red-300">Duration:</span>
                      <span className="text-red-200 ml-2">{selectedMovie.duration}</span>
                    </div>
                  </div>
                  <motion.button
                    className="mt-6 bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-full font-semibold flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-5 w-5 mr-2 fill-white" />
                    Watch if You Dare
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
