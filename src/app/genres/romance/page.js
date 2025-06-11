"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Play, Star, Clock, Heart, Sparkles, Gift } from "lucide-react"
import Link from "next/link"

const romanceMovies = [
  {
    id: 1,
    title: "The Notebook",
    year: 2004,
    rating: 7.8,
    duration: "2h 3m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A poor yet passionate young man falls in love with a rich young woman.",
    director: "Nick Cassavetes",
    cast: ["Ryan Gosling", "Rachel McAdams", "James Garner"],
    loveLevel: 10,
  },
  {
    id: 2,
    title: "Casablanca",
    year: 1942,
    rating: 8.5,
    duration: "1h 42m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A cynical American expatriate meets a former lover in wartime Casablanca.",
    director: "Michael Curtiz",
    cast: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid"],
    loveLevel: 9,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    year: 2005,
    rating: 7.8,
    duration: "2h 9m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "Sparks fly when spirited Elizabeth Bennet meets Mr. Darcy.",
    director: "Joe Wright",
    cast: ["Keira Knightley", "Matthew Macfadyen", "Brenda Blethyn"],
    loveLevel: 9,
  },
  {
    id: 4,
    title: "La La Land",
    year: 2016,
    rating: 8.0,
    duration: "2h 8m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A jazz musician and an aspiring actress fall in love in Los Angeles.",
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
    loveLevel: 8,
  },
  {
    id: 5,
    title: "Titanic",
    year: 1997,
    rating: 7.9,
    duration: "3h 14m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A seventeen-year-old aristocrat falls in love with a poor artist.",
    director: "James Cameron",
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    loveLevel: 10,
  },
  {
    id: 6,
    title: "Before Sunrise",
    year: 1995,
    rating: 8.1,
    duration: "1h 41m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A young man and woman meet on a train and spend one night in Vienna.",
    director: "Richard Linklater",
    cast: ["Ethan Hawke", "Julie Delpy", "Andrea Eckert"],
    loveLevel: 9,
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
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function RomancePage() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [filter, setFilter] = useState("all")

  const filteredMovies = romanceMovies.filter((movie) => {
    if (filter === "recent") return movie.year >= 2000
    if (filter === "classic") return movie.year < 2000
    if (filter === "epic") return movie.loveLevel >= 9
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Hearts */}
        {/* {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            animate={{
              y: [0, -200, 0],
              x: [0, Math.sin(i) * 50, 0],
              rotate: [0, 360],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 20}px`,
            }}
          >
            {["💕", "💖", "💗", "💝", "💘", "💞", "💓", "💟"][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))} */}

        {/* Rose Petals */}
        {/* {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-pink-300/30 rounded-full"
            animate={{
              y: [0, window.innerHeight + 100],
              x: [0, Math.sin(i) * 100],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: "-20px",
            }}
          />
        ))} */}

        {/* Sparkles */}
        {/* {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/40"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
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
          >
            ✨
          </motion.div>
        ))} */}
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
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mb-6"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Heart className="h-12 w-12 text-white fill-white" />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-lg"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            ROMANCE
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Love stories that warm the heart and celebrate the magic of romance
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {[
              { key: "all", label: "All Movies", icon: Heart },
              { key: "recent", label: "Modern Love", icon: Sparkles },
              { key: "classic", label: "Timeless", icon: Gift },
              { key: "epic", label: "Epic Love", icon: Star },
            ].map((filterOption) => (
              <motion.button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === filterOption.key
                    ? "bg-white text-pink-500 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
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
            { label: "Romance Movies", value: "654", icon: "💕" },
            { label: "Happy Endings", value: "98%", icon: "💖" },
            { label: "Tissues Used", value: "∞", icon: "😭" },
            { label: "Love Factor", value: "10/10", icon: "💘" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
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
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="bg-white/20  backdrop-blur-sm border border-white/30 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-white/50 group-hover:shadow-2xl group-hover:shadow-pink-500/20">
                <div className="relative w-full h-[400px] overflow-hidden">
                  <Image
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-pink-500/90 rounded-full p-4">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </motion.div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 text-pink-400 text-sm font-bold px-3 py-1 rounded-full flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-pink-400" />
                    {movie.rating}
                  </div>

                  {/* Love Level */}
                  <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <Heart className="h-3 w-3 mr-1 fill-white" />
                    {movie.loveLevel}/10
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-white mb-2 group-hover:text-pink-200 transition-colors">
                    {movie.title}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm mb-3">
                    <span>{movie.year}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{movie.duration}</span>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-2">{movie.description}</p>
                  <div className="text-xs text-white/70">
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
              className="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
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
                  <h2 className="text-3xl font-bold text-white mb-4">{selectedMovie.title}</h2>
                  <div className="flex items-center text-white mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      {selectedMovie.year}
                    </span>
                    <div className="flex items-center mr-4">
                      <Star className="h-4 w-4 text-pink-200 fill-pink-200 mr-1" />
                      <span>{selectedMovie.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 text-pink-200 fill-pink-200 mr-1" />
                      <span>Love: {selectedMovie.loveLevel}/10</span>
                    </div>
                  </div>
                  <p className="text-white/95 leading-relaxed mb-6">{selectedMovie.description}</p>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-white">Director:</span>
                      <span className="text-white/90 ml-2">{selectedMovie.director}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Cast:</span>
                      <span className="text-white/90 ml-2">{selectedMovie.cast.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Duration:</span>
                      <span className="text-white/90 ml-2">{selectedMovie.duration}</span>
                    </div>
                  </div>
                    <Link href="/movies">
                  <motion.button
                    className="mt-6 cursor-pointer bg-white text-pink-500 px-8 py-3 rounded-full font-semibold flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-5 w-5 mr-2 fill-pink-500" />
                    Watch with Love
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
