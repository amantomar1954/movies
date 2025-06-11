"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Play, Star, Clock, Smile, Laugh, Heart } from "lucide-react"
import Link from "next/link"

const comedyMovies = [
  {
    id: 1,
    title: "Everything Everywhere All at Once",
    year: 2022,
    rating: 8.1,
    duration: "2h 19m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A mind-bending multiverse adventure with heart and humor.",
    director: "Daniels",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
  },
  {
    id: 2,
    title: "The Grand Budapest Hotel",
    year: 2014,
    rating: 8.1,
    duration: "1h 39m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "The adventures of a legendary concierge and his protégé.",
    director: "Wes Anderson",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
  {
    id: 3,
    title: "Knives Out",
    year: 2019,
    rating: 7.9,
    duration: "2h 10m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A detective investigates the death of a patriarch.",
    director: "Rian Johnson",
    cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"],
  },
  {
    id: 4,
    title: "The Menu",
    year: 2022,
    rating: 7.2,
    duration: "1h 47m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A couple travels to a coastal island for a dining experience.",
    director: "Mark Mylod",
    cast: ["Anya Taylor-Joy", "Ralph Fiennes", "Nicholas Hoult"],
  },
  {
    id: 5,
    title: "Jojo Rabbit",
    year: 2019,
    rating: 7.9,
    duration: "1h 48m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A young boy's worldview is turned upside down.",
    director: "Taika Waititi",
    cast: ["Roman Griffin Davis", "Thomasin McKenzie", "Scarlett Johansson"],
  },
  {
    id: 6,
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    duration: "2h 12m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A poor family schemes to become employed by a wealthy family.",
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
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
  hidden: { y: 50, opacity: 0, rotate: -5 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function ComedyPage() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [filter, setFilter] = useState("all")

  const filteredMovies = comedyMovies.filter((movie) => {
    if (filter === "recent") return movie.year >= 2020
    if (filter === "classic") return movie.year < 2020
    if (filter === "top-rated") return movie.rating >= 8.0
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Emojis */}
        {["😂", "🤣", "😄", "😆", "🎭", "🎪", "🎉", "🎈"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
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
          >
            {emoji}
          </motion.div>
        ))}

        {/* Bouncing Circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-white/10 rounded-full"
            animate={{
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
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
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Laugh className="h-12 w-12 text-white" />
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
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            COMEDY
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Laugh-out-loud moments and feel-good stories that brighten your day
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {[
              { key: "all", label: "All Movies", icon: Smile },
              { key: "recent", label: "Recent", icon: Laugh },
              { key: "classic", label: "Classic", icon: Heart },
              { key: "top-rated", label: "Top Rated", icon: Star },
            ].map((filterOption) => (
              <motion.button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === filterOption.key
                    ? "bg-white text-orange-500 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
                whileHover={{ scale: 1.05, rotate: 2 }}
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
            { label: "Comedy Movies", value: "987", icon: "🎭" },
            { label: "Laughs Per Min", value: "12.5", icon: "😂" },
            { label: "Happy Endings", value: "95%", icon: "🎉" },
            { label: "Smile Rating", value: "10/10", icon: "😄" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05, y: -5, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
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
          {filteredMovies.map((movie, index) => (
            <motion.div
              key={movie.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedMovie(movie)}
            //   whileHover={{ y: -10, rotate: Math.random() * 4 - 2 }}
            >
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-white/50 group-hover:shadow-2xl group-hover:shadow-orange-500/20">
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
                    <div className="bg-orange-500/90 rounded-full p-4">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </motion.div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 text-sm font-bold px-3 py-1 rounded-full flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400" />
                    {movie.rating}
                  </div>

                  {/* Fun Badge */}
                  <motion.div
                    className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    😄 FUN
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-white mb-2 group-hover:text-yellow-300 transition-colors">
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
              className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
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
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-300 fill-yellow-300 mr-1" />
                      <span>{selectedMovie.rating}</span>
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
                    className="mt-6 bg-white cursor-pointer text-orange-500 px-8 py-3 rounded-full font-semibold flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    
                    <Play className="h-5 w-5 mr-2 fill-orange-500" />
                    Watch & Laugh
                   
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
