// "use client"

// import { useState, useEffect } from "react"
// import genresData from '../data/genres.json';


// export default function GenresPage() {
//   const [genres, setGenres] = useState([])
//   const [hoveredCard, setHoveredCard] = useState(null)
//   const [searchTerm, setSearchTerm] = useState("")

//   useEffect(() => {
//     setGenres(genresData)
//   }, [])

//   const filteredGenres = genres.filter(
//     (genre) =>
//       genre.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       genre.description.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white rounded-full opacity-10 animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`,
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="relative z-10 container mx-auto px-4 py-12">
//         {/* Header Section */}
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 animate-gradient-x">
//             Movie Genres
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             Discover your next favorite film across our diverse collection of genres
//           </p>

//           {/* Search Bar */}
//           <div className="mt-8 max-w-md mx-auto relative">
//             <input
//               type="text"
//               placeholder="Search genres..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
//             />
//             <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Genres Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {filteredGenres.map((genre, index) => (
//             <div
//               key={genre.id}
//               className="group relative"
//               style={{ animationDelay: `${index * 100}ms` }}
//               onMouseEnter={() => setHoveredCard(genre.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div className="relative h-80 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up">
//                 {/* Card Background */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-80`}></div>

//                 {/* Animated Border */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent p-[1px]">
//                   <div className="h-full w-full rounded-2xl bg-black/20 backdrop-blur-sm"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 p-6 h-full flex flex-col justify-between">
//                   {/* Header */}
//                   <div>
//                     <div className="flex items-center justify-between mb-4">
//                       <span className="text-4xl animate-bounce-slow">{genre.icon}</span>
//                       <div className="text-right">
//                         <div className="text-sm text-white/80 font-medium">Movies</div>
//                         <div className="text-lg font-bold text-white">{genre.movieCount.toLocaleString()}</div>
//                       </div>
//                     </div>

//                     <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
//                       {genre.name}
//                     </h3>

//                     <p className="text-white/90 text-sm leading-relaxed mb-4">{genre.description}</p>
//                   </div>

//                   {/* Popular Titles */}
//                   <div
//                     className={`transition-all duration-500 ${hoveredCard === genre.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
//                   >
//                     <div className="text-xs text-white/80 mb-2 font-semibold">Popular Titles:</div>
//                     <div className="space-y-1">
//                       {genre.popularTitles.slice(0, 2).map((title, idx) => (
//                         <div
//                           key={idx}
//                           className="text-xs text-white/90 bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm"
//                         >
//                           {title}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Explore Button */}
//                   <div
//                     className={`mt-4 transition-all duration-500 ${hoveredCard === genre.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//                   >
//                     <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 border border-white/30">
//                       Explore {genre.name}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Hover Glow Effect */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* No Results */}
//         {filteredGenres.length === 0 && (
//           <div className="text-center py-16">
//             <div className="text-6xl mb-4">🎬</div>
//             <h3 className="text-2xl font-bold text-white mb-2">No genres found</h3>
//             <p className="text-gray-400">Try adjusting your search terms</p>
//           </div>
//         )}

//         {/* Stats Section */}
//         <div className="mt-20 text-center">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
//               <div className="text-3xl font-bold text-white mb-2">{genres.length}</div>
//               <div className="text-gray-400 text-sm">Total Genres</div>
//             </div>
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
//               <div className="text-3xl font-bold text-white mb-2">
//                 {genres.reduce((acc, genre) => acc + genre.movieCount, 0).toLocaleString()}
//               </div>
//               <div className="text-gray-400 text-sm">Total Movies</div>
//             </div>
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
//               <div className="text-3xl font-bold text-white mb-2">4K</div>
//               <div className="text-gray-400 text-sm">HD Quality</div>
//             </div>
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
//               <div className="text-3xl font-bold text-white mb-2">24/7</div>
//               <div className="text-gray-400 text-sm">Streaming</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes gradient-x {
//           0%, 100% { background-size: 200% 200%; background-position: left center; }
//           50% { background-size: 200% 200%; background-position: right center; }
//         }
        
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-5px); }
//         }
        
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-gradient-x {
//           animation: gradient-x 3s ease infinite;
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }
        
//         .animate-bounce-slow {
//           animation: bounce-slow 2s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const genres = [
  {
    id: 1,
    name: "Action",
    description: "High-octane thrills and explosive adventures",
    icon: "🔥",
    color: "from-red-500 to-orange-500",
    bgImage: "/placeholder.svg?height=300&width=400",
    movieCount: 1245,
    popularMovies: ["John Wick", "Mad Max", "Die Hard"],
  },
  {
    id: 2,
    name: "Comedy",
    description: "Laugh-out-loud moments and feel-good stories",
    icon: "😂",
    color: "from-yellow-400 to-orange-400",
    bgImage: "/placeholder.svg?height=300&width=400",
    movieCount: 987,
    popularMovies: ["The Hangover", "Superbad", "Anchorman"],
  },
  {
    id: 3,
    name: "Drama",
    description: "Compelling stories that touch the heart",
    icon: "🎭",
    color: "from-purple-500 to-pink-500",
    bgImage: "/placeholder.svg?height=300&width=400",
    movieCount: 1532,
    popularMovies: ["The Shawshank Redemption", "Forrest Gump", "Titanic"],
  },
  {
    id: 4,
    name: "Horror",
    description: "Spine-chilling scares and supernatural thrills",
    icon: "👻",
    color: "from-gray-700 to-red-900",
    bgImage: "/placeholder.svg?height=300&width=400",
    movieCount: 745,
    popularMovies: ["The Conjuring", "Get Out", "A Quiet Place"],
  },
  {
    id: 5,
    name: "Sci-Fi",
    description: "Futuristic worlds and mind-bending concepts",
    icon: "🚀",
    color: "from-blue-500 to-cyan-500",
    bgImage: "/placeholder.svg?height=300&width=400",
    movieCount: 832,
    popularMovies: ["Blade Runner", "Interstellar", "The Matrix"],
  },
  {
    id: 6,
    name: "Romance",
    description: "Love stories that warm the heart",
    icon: "❤️",
    color: "from-pink-400 to-rose-500",
    bgImage: "/placeholder.svg?height=300&width=400",
    movieCount: 654,
    popularMovies: ["The Notebook", "Casablanca", "Pride and Prejudice"],
  },
  {
    id: 7,
    name: "Thriller",
    description: "Edge-of-your-seat suspense and mystery",
    icon: "🔪",
    color: "from-indigo-600 to-purple-600",
    bgImage: "/placeholder.svg?height=300&width=400",
    movieCount: 921,
    popularMovies: ["Gone Girl", "Se7en", "The Silence of the Lambs"],
  },
  {
    id: 8,
    name: "Fantasy",
    description: "Magical worlds and mythical adventures",
    icon: "🧙‍♂️",
    color: "from-emerald-500 to-teal-500",
    bgImage: "/placeholder.svg?height=300&width=400",
    movieCount: 543,
    popularMovies: ["Lord of the Rings", "Harry Potter", "Pan's Labyrinth"],
  },
  {
    id: 9,
    name: "Animation",
    description: "Animated masterpieces for all ages",
    icon: "🎬",
    color: "from-violet-500 to-purple-500",
    bgImage: "/placeholder.svg?height=300&width=400",
    movieCount: 432,
    popularMovies: ["Toy Story", "Spirited Away", "The Lion King"],
  },
  {
    id: 10,
    name: "Adventure",
    description: "Epic journeys and daring quests",
    icon: "🏝️",
    color: "from-green-500 to-emerald-500",
    bgImage: "/placeholder.svg?height=300&width=400",
    movieCount: 765,
    popularMovies: ["Indiana Jones", "Pirates of the Caribbean", "Jurassic Park"],
  },
  {
    id: 11,
    name: "Mystery",
    description: "Puzzling cases and detective stories",
    icon: "🔍",
    color: "from-slate-600 to-gray-700",
    bgImage: "/placeholder.svg?height=300&width=400",
    movieCount: 543,
    popularMovies: ["Sherlock Holmes", "Zodiac", "The Prestige"],
  },
  {
    id: 12,
    name: "Crime",
    description: "Gritty underworld and criminal masterminds",
    icon: "🕵️",
    color: "from-red-700 to-red-900",
    bgImage: "/placeholder.svg?height=300&width=400",
    movieCount: 678,
    popularMovies: ["The Godfather", "Goodfellas", "Pulp Fiction"],
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
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const cardHoverVariants = {
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

export default function GenresPage() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredGenres = genres.filter((genre) => genre.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Movie Genres
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover your next favorite movie by exploring our diverse collection of genres
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-md mx-auto relative"
          >
            <input
              type="text"
              placeholder="Search genres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-4 px-6 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="text-white/40"
              >
                🔍
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Total Genres", value: "12+", icon: "🎭" },
            { label: "Movies", value: "50K+", icon: "🎬" },
            { label: "User Ratings", value: "2M+", icon: "⭐" },
            { label: "Reviews", value: "500K+", icon: "📝" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Genres Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredGenres.map((genre, index) => (
            <motion.div
              key={genre.id}
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(genre.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group cursor-pointer"
            >
              <Link href={`/genres/${genre.name.toLowerCase()}`}>
                <motion.div
                  variants={cardHoverVariants}
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-80 transition-all duration-500 group-hover:border-purple-500/50"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={genre.bgImage || "/placeholder.svg"}
                      alt={genre.name}
                      fill
                      className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    {/* Top Section */}
                    <div>
                      <motion.div
                        className="text-4xl mb-4"
                        animate={
                          hoveredCard === genre.id
                            ? {
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0],
                              }
                            : {}
                        }
                        transition={{ duration: 0.6 }}
                      >
                        {genre.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {genre.name}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">{genre.description}</p>
                    </div>

                    {/* Bottom Section */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-white/60 text-sm">{genre.movieCount.toLocaleString()} movies</span>
                        <motion.div className="bg-white/10 rounded-full px-3 py-1" whileHover={{ scale: 1.1 }}>
                          <span className="text-xs text-white/80">Explore</span>
                        </motion.div>
                      </div>

                      {/* Popular Movies Preview */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={hoveredCard === genre.id ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="text-xs text-white/60 mb-2">Popular:</div>
                        <div className="flex flex-wrap gap-1">
                          {genre.popularMovies.slice(0, 2).map((movie, idx) => (
                            <span key={idx} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full">
                              {movie}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ background: "linear-gradient(45deg, transparent, transparent)" }}
                    whileHover={{
                      background: [
                        "linear-gradient(45deg, transparent, transparent)",
                        "linear-gradient(45deg, rgba(168, 85, 247, 0.4), transparent, rgba(236, 72, 153, 0.4))",
                        "linear-gradient(45deg, transparent, rgba(168, 85, 247, 0.4), transparent)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredGenres.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No genres found</h3>
            <p className="text-white/70">Try adjusting your search term</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Can't find what you're looking for?</h2>
            <p className="text-white/70 mb-6">
              Explore our advanced search features or browse by year, rating, and more filters
            </p>
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Advanced Search
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

