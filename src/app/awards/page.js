// "use client"

// import { useState, useEffect } from "react"
// import awardsData from "../data/awards.json"
// // import genresData from '../data/genres.json';

// export default function AwardsPage() {
//   const [awards, setAwards] = useState([])
//   const [selectedAward, setSelectedAward] = useState(null)
//   const [filterYear, setFilterYear] = useState("all")
//   const [searchTerm, setSearchTerm] = useState("")
//   const [activeTab, setActiveTab] = useState("overview")

//   useEffect(() => {
//     setAwards(awardsData)
//   }, [])

//   const filteredAwards = awards.filter((award) => {
//     const matchesYear = filterYear === "all" || award.year.toString() === filterYear
//     const matchesSearch =
//       award.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       award.shortName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       award.location.toLowerCase().includes(searchTerm.toLowerCase())
//     return matchesYear && matchesSearch
//   })

//   const years = [...new Set(awards.map((award) => award.year))].sort((a, b) => b - a)

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
//         <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

//         {/* Floating Golden Particles */}
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30 animate-twinkle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 3}s`,
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* Spotlight Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent transform -skew-y-12 translate-y-32 animate-spotlight"></div>

//       <div className="relative z-10 container mx-auto px-4 py-12">
//         {/* Header Section */}
//         <div className="text-center mb-16 animate-fade-in-down">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mb-6 animate-pulse-gold">
//             <span className="text-3xl">🏆</span>
//           </div>

//           <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent mb-6 animate-shimmer">
//             Awards & Recognition
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
//             Celebrating excellence in cinema through prestigious awards and accolades from around the world
//           </p>

//           {/* Controls */}
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-4xl mx-auto">
//             {/* Search */}
//             <div className="relative flex-1 max-w-md">
//               <input
//                 type="text"
//                 placeholder="Search awards..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
//               />
//               <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//                 <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </div>
//             </div>

//             {/* Year Filter */}
//             <select
//               value={filterYear}
//               onChange={(e) => setFilterYear(e.target.value)}
//               className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
//             >
//               <option value="all" className="bg-gray-800">
//                 All Years
//               </option>
//               {years.map((year) => (
//                 <option key={year} value={year} className="bg-gray-800">
//                   {year}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Awards Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
//           {filteredAwards.map((award, index) => (
//             <div
//               key={award.id}
//               className="group relative cursor-pointer"
//               style={{ animationDelay: `${index * 150}ms` }}
//               onClick={() => setSelectedAward(selectedAward?.id === award.id ? null : award)}
//             >
//               <div className="relative h-96 rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-slide-up">
//                 {/* Card Background */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-90`}></div>

//                 {/* Animated Border */}
//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/30 via-transparent to-white/30 p-[2px] animate-border-flow">
//                   <div className="h-full w-full rounded-3xl bg-black/30 backdrop-blur-sm"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 p-8 h-full flex flex-col justify-between">
//                   {/* Header */}
//                   <div>
//                     <div className="flex items-center justify-between mb-6">
//                       <span className="text-5xl animate-bounce-gentle">{award.icon}</span>
//                       <div className="text-right">
//                         <div className="text-sm text-white/80 font-medium">Year</div>
//                         <div className="text-2xl font-bold text-white">{award.year}</div>
//                       </div>
//                     </div>

//                     <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
//                       {award.name}
//                     </h3>

//                     <p className="text-white/90 text-sm mb-4">{award.ceremony}</p>

//                     <div className="space-y-2 text-sm text-white/80">
//                       <div className="flex items-center gap-2">
//                         <span>📅</span>
//                         <span>{award.date}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span>📍</span>
//                         <span>{award.location}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span>🎯</span>
//                         <span>{award.totalNominations} Categories</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Expand Indicator */}
//                   <div className="flex items-center justify-between">
//                     <div
//                       className={`bg-gradient-to-r ${award.accentColor} text-white text-xs font-bold px-4 py-2 rounded-full`}
//                     >
//                       {award.shortName}
//                     </div>
//                     <div
//                       className={`transform transition-transform duration-300 ${selectedAward?.id === award.id ? "rotate-180" : ""}`}
//                     >
//                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Hover Glow */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`}
//                 ></div>
//               </div>

//               {/* Expanded Content */}
//               {selectedAward?.id === award.id && (
//                 <div className="mt-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 animate-expand">
//                   <div className="space-y-6">
//                     {award.categories.map((category, idx) => (
//                       <div key={idx} className="border-l-4 border-yellow-400 pl-4">
//                         <h4 className="text-lg font-bold text-white mb-2">{category.category}</h4>
//                         <div className="mb-3">
//                           <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-sm font-bold px-3 py-1 rounded-full">
//                             🏆 {category.winner}
//                           </span>
//                         </div>
//                         <div className="space-y-1">
//                           <p className="text-sm text-gray-400 mb-2">Nominees:</p>
//                           {category.nominees.map((nominee, nIdx) => (
//                             <div key={nIdx} className="text-sm text-white/80 bg-white/5 rounded-lg px-3 py-1">
//                               {nominee}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* No Results */}
//         {filteredAwards.length === 0 && (
//           <div className="text-center py-16">
//             <div className="text-6xl mb-4">🏆</div>
//             <h3 className="text-2xl font-bold text-white mb-2">No awards found</h3>
//             <p className="text-gray-400">Try adjusting your search or filter criteria</p>
//           </div>
//         )}

//         {/* Statistics */}
//         <div className="mt-20">
//           <h2 className="text-4xl font-bold text-center text-white mb-12">Awards Statistics</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
//             <div className="bg-gradient-to-br from-yellow-500/20 to-amber-600/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 text-center">
//               <div className="text-4xl font-bold text-yellow-400 mb-2">{awards.length}</div>
//               <div className="text-gray-300 text-sm">Award Ceremonies</div>
//             </div>
//             <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 text-center">
//               <div className="text-4xl font-bold text-purple-400 mb-2">
//                 {awards.reduce((acc, award) => acc + award.totalNominations, 0)}
//               </div>
//               <div className="text-gray-300 text-sm">Total Categories</div>
//             </div>
//             <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 text-center">
//               <div className="text-4xl font-bold text-blue-400 mb-2">
//                 {awards.reduce((acc, award) => acc + award.categories.length, 0)}
//               </div>
//               <div className="text-gray-300 text-sm">Winners Announced</div>
//             </div>
//             <div className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30 text-center">
//               <div className="text-4xl font-bold text-emerald-400 mb-2">
//                 {awards.reduce(
//                   (acc, award) => acc + award.categories.reduce((catAcc, cat) => catAcc + cat.nominees.length, 0),
//                   0,
//                 )}
//               </div>
//               <div className="text-gray-300 text-sm">Total Nominees</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 1; transform: scale(1.2); }
//         }
        
//         @keyframes spotlight {
//           0% { transform: translateX(-100%) skewY(-12deg); }
//           100% { transform: translateX(100%) skewY(-12deg); }
//         }
        
//         @keyframes shimmer {
//           0% { background-position: -200% center; }
//           100% { background-position: 200% center; }
//         }
        
//         @keyframes pulse-gold {
//           0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.5); }
//           50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.8); }
//         }
        
//         @keyframes border-flow {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         @keyframes bounce-gentle {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//         }
        
//         @keyframes slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fade-in-down {
//           from {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes expand {
//           from {
//             opacity: 0;
//             transform: scaleY(0);
//             transform-origin: top;
//           }
//           to {
//             opacity: 1;
//             transform: scaleY(1);
//             transform-origin: top;
//           }
//         }
        
//         .animate-twinkle {
//           animation: twinkle 3s ease-in-out infinite;
//         }
        
//         .animate-spotlight {
//           animation: spotlight 8s linear infinite;
//         }
        
//         .animate-shimmer {
//           background-size: 200% auto;
//           animation: shimmer 3s linear infinite;
//         }
        
//         .animate-pulse-gold {
//           animation: pulse-gold 2s ease-in-out infinite;
//         }
        
//         .animate-border-flow {
//           background-size: 200% 200%;
//           animation: border-flow 3s ease infinite;
//         }
        
//         .animate-bounce-gentle {
//           animation: bounce-gentle 3s ease-in-out infinite;
//         }
        
//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out forwards;
//         }
        
//         .animate-fade-in-down {
//           animation: fade-in-down 1s ease-out;
//         }
        
//         .animate-expand {
//           animation: expand 0.5s ease-out;
//         }
//       `}</style>
//     </div>
//   )
// }

"use client"

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useState, useEffect } from 'react';

const AwardsPage = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Unsplash image URLs
  const images = {
    background: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    trophy: "https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    movies: [
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ],
    directors: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ],
    actors: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ],
    actresses: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ],
    winners: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ]
  };

  const categories = [
    {
      id: 0,
      name: "Best Picture",
      nominees: [
        { id: 1, title: "The Last Kingdom", image: images.movies[0], votes: "45%" },
        { id: 2, title: "Midnight Dreams", image: images.movies[1], votes: "30%" },
        { id: 3, title: "Ocean's Whisper", image: images.movies[2], votes: "15%" },
        { id: 4, title: "Desert Rose", image: images.movies[3], votes: "10%" }
      ]
    },
    {
      id: 1,
      name: "Best Director",
      nominees: [
        { id: 5, name: "Ava Rodriguez", movie: "The Last Kingdom", image: images.directors[0], votes: "38%" },
        { id: 6, name: "James Chen", movie: "Midnight Dreams", image: images.directors[1], votes: "32%" },
        { id: 7, name: "Sophia Kapoor", movie: "Ocean's Whisper", image: images.directors[2], votes: "20%" },
        { id: 8, name: "Marcus Lee", movie: "Desert Rose", image: images.directors[3], votes: "10%" }
      ]
    },
    {
      id: 2,
      name: "Best Actor",
      nominees: [
        { id: 9, name: "Rahul Mehta", movie: "The Last Kingdom", image: images.actors[0], votes: "42%" },
        { id: 10, name: "Daniel Wu", movie: "Midnight Dreams", image: images.actors[1], votes: "28%" },
        { id: 11, name: "Karthik Nair", movie: "Ocean's Whisper", image: images.actors[2], votes: "18%" },
        { id: 12, name: "Miguel Santos", movie: "Desert Rose", image: images.actors[3], votes: "12%" }
      ]
    },
    {
      id: 3,
      name: "Best Actress",
      nominees: [
        { id: 13, name: "Priya Sharma", movie: "The Last Kingdom", image: images.actresses[0], votes: "40%" },
        { id: 14, name: "Elena Petrova", movie: "Midnight Dreams", image: images.actresses[1], votes: "35%" },
        { id: 15, name: "Linh Nguyen", movie: "Ocean's Whisper", image: images.actresses[2], votes: "15%" },
        { id: 16, name: "Aisha Bello", movie: "Desert Rose", image: images.actresses[3], votes: "10%" }
      ]
    }
  ];

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveCategory((prev) => (prev + 1) % categories.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, categories.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
      <Head>
        <title>Best of the Best Awards | Movie Streaming Platform</title>
        <meta name="description" content="Celebrating excellence in cinema - Vote for your favorites!" />
      </Head>

      {/* Hero Section with Parallax Effect */}
      <motion.section 
        style={{ scale, opacity }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${images.background})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <img 
              src={images.trophy} 
              alt="Trophy" 
              className="w-24 h-24 mx-auto object-cover rounded-full border-4 border-yellow-500"
            />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Best of the Best
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Celebrating excellence in cinema. Vote for your favorites!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-all"
          >
            Vote Now
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Categories Navigation */}
      <section className="sticky top-0 z-20 bg-black bg-opacity-80 backdrop-blur-md py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex overflow-x-auto scrollbar-hide space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-lg font-medium transition-all ${activeCategory === index ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nominees Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/2 left-1/2 w-full max-w-4xl h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10"
            animate={{
              x: ["-50%", "-45%", "-50%"],
              y: ["-50%", "-55%", "-50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Nominees for <span className="text-yellow-400">{categories[activeCategory].name}</span>
          </motion.h2>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              {categories[activeCategory].nominees.map((nominee, index) => (
                <motion.div
                  key={nominee.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-xl aspect-[2/3]">
                    <img 
                      src={nominee.image} 
                      alt={nominee.title || nominee.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold">{nominee.title || nominee.name}</h3>
                      {nominee.movie && <p className="text-gray-300 text-sm">{nominee.movie}</p>}
                    </div>
                  </div>
                  
                  {/* Vote percentage bar */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: nominee.votes }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  >
                    <div className="h-full bg-yellow-500"></div>
                  </motion.div>
                  
                  {/* Vote button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-4 right-4 bg-black bg-opacity-70 rounded-full p-2 hover:bg-yellow-500 hover:text-black transition-all"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </motion.button>
                  
                  {/* Percentage badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.8 }}
                    className="absolute -top-3 -right-3 bg-yellow-500 text-black font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                  >
                    {nominee.votes}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Winners Gallery */}
      <section className="py-20 bg-black bg-opacity-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Previous <span className="text-yellow-400">Winners</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {images.winners.map((winner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative group overflow-hidden rounded-lg aspect-[2/3]"
              >
                <img 
                  src={winner} 
                  alt={`Winner ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Winner {2023 - index}
                    </h3>
                    <p className="text-yellow-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Best Picture
                    </p>
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-yellow-500 text-black font-bold text-xs px-2 py-1 rounded">
                  Winner
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Voting Ends In
          </motion.h2>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center space-x-4 md:space-x-8 mb-12"
          >
            <div className="bg-gray-800 rounded-lg p-4 w-20 md:w-24">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">05</div>
              <div className="text-gray-400 text-sm">Days</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 w-20 md:w-24">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">12</div>
              <div className="text-gray-400 text-sm">Hours</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 w-20 md:w-24">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">45</div>
              <div className="text-gray-400 text-sm">Minutes</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 w-20 md:w-24">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">30</div>
              <div className="text-gray-400 text-sm">Seconds</div>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(234, 179, 8, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-12 rounded-full text-xl transition-all shadow-lg"
          >
            Vote Now Before It's Too Late
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AwardsPage;
