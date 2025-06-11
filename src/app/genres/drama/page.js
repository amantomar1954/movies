"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Play, Star, Clock, Heart, Award, Users } from "lucide-react"
import Link from "next/link"

const dramaMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    duration: "2h 22m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "Two imprisoned men bond over years, finding solace and redemption.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 2,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    duration: "2h 22m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "The presidencies of Kennedy and Johnson through the eyes of an Alabama man.",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
  },
  {
    id: 3,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    duration: "2h 55m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "The aging patriarch of an organized crime dynasty transfers control.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
  },
  {
    id: 4,
    title: "Schindler's List",
    year: 1993,
    rating: 9.0,
    duration: "3h 15m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "In German-occupied Poland, Schindler saves his Jewish employees.",
    director: "Steven Spielberg",
    cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
  },
  {
    id: 5,
    title: "12 Years a Slave",
    year: 2013,
    rating: 8.1,
    duration: "2h 14m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A free black man is abducted and sold into slavery.",
    director: "Steve McQueen",
    cast: ["Chiwetel Ejiofor", "Michael Fassbender", "Lupita Nyong'o"],
  },
  {
    id: 6,
    title: "Moonlight",
    year: 2016,
    rating: 7.4,
    duration: "1h 51m",
    poster: "/placeholder.svg?height=450&width=300",
    description: "A young African-American man grapples with his identity and sexuality.",
    director: "Barry Jenkins",
    cast: ["Mahershala Ali", "Naomie Harris", "Trevante Rhodes"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function DramaPage() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [filter, setFilter] = useState("all")

  const filteredMovies = dramaMovies.filter((movie) => {
    if (filter === "recent") return movie.year >= 2010
    if (filter === "classic") return movie.year < 2000
    if (filter === "top-rated") return movie.rating >= 9.0
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/30 rounded-full"
            animate={{
              y: [0, -200, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Gentle Waves */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/20 to-transparent"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center mt-16 mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Heart className="h-12 w-12 text-white" />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            DRAMA
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Compelling stories that touch the heart and explore the human condition
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { key: "all", label: "All Movies", icon: Heart },
              { key: "recent", label: "Recent", icon: Users },
              { key: "classic", label: "Classic", icon: Award },
              { key: "top-rated", label: "Masterpieces", icon: Star },
            ].map((filterOption) => (
              <motion.button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === filterOption.key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white/10 text-blue-200 hover:bg-white/20"
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
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { label: "Drama Movies", value: "1,532", icon: "🎭" },
            { label: "Avg Rating", value: "8.2", icon: "⭐" },
            { label: "Oscar Winners", value: "245", icon: "🏆" },
            { label: "Emotional Impact", value: "100%", icon: "💙" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-1">{stat.value}</div>
              <div className="text-blue-200/70 text-sm">{stat.label}</div>
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
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden transition-all duration-700 group-hover:border-purple-500/40 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                <div className="relative w-full h-[400px] overflow-hidden">
                  <Image
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-blue-600/90 rounded-full p-4">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </motion.div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 text-blue-400 text-sm font-bold px-3 py-1 rounded-full flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-blue-400" />
                    {movie.rating}
                  </div>

                  {/* Award Badge for High Ratings */}
                  {movie.rating >= 9.0 && (
                    <motion.div
                      className="absolute top-4 left-4 bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Award className="h-3 w-3 mr-1" />
                      MASTERPIECE
                    </motion.div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-blue-100 mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {movie.title}
                  </h3>
                  <div className="flex items-center text-blue-200/70 text-sm mb-3">
                    <span>{movie.year}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{movie.duration}</span>
                  </div>
                  <p className="text-blue-200/80 text-sm leading-relaxed mb-4 line-clamp-2">{movie.description}</p>
                  <div className="text-xs text-blue-300/70">
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
              className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-500/30"
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
                  <h2 className="text-3xl font-bold text-blue-100 mb-4">{selectedMovie.title}</h2>
                  <div className="flex items-center text-blue-200 mb-4">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      {selectedMovie.year}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-blue-400 fill-blue-400 mr-1" />
                      <span>{selectedMovie.rating}</span>
                    </div>
                    {selectedMovie.rating >= 9.0 && (
                      <div className="flex items-center ml-4">
                        <Award className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-yellow-400 text-sm">Masterpiece</span>
                      </div>
                    )}
                  </div>
                  <p className="text-blue-200/90 leading-relaxed mb-6">{selectedMovie.description}</p>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-blue-300">Director:</span>
                      <span className="text-blue-200 ml-2">{selectedMovie.director}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-300">Cast:</span>
                      <span className="text-blue-200 ml-2">{selectedMovie.cast.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-300">Duration:</span>
                      <span className="text-blue-200 ml-2">{selectedMovie.duration}</span>
                    </div>
                  </div>
                  <Link href="/movies">
                  <motion.button
                    className="mt-6 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-5 w-5 mr-2 fill-white" />
                    Experience Drama
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
