"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Search, Star, Play, X, Menu } from "lucide-react"

export default function TVShowsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedShow, setSelectedShow] = useState(null)

  // Sample data for TV shows
  const tvShows = [
    {
      id: 1,
      title: "Stranger Things",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
      year: 2016,
      category: "Sci-Fi",
      description:
        "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
      episodes: 34,
      seasons: 4,
    },
    {
      id: 2,
      title: "Breaking Bad",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.9,
      year: 2008,
      category: "Drama",
      description:
        "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      episodes: 62,
      seasons: 5,
    },
    {
      id: 3,
      title: "Game of Thrones",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.7,
      year: 2011,
      category: "Fantasy",
      description:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      episodes: 73,
      seasons: 8,
    },
    {
      id: 4,
      title: "The Office",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
      year: 2005,
      category: "Comedy",
      description:
        "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
      episodes: 201,
      seasons: 9,
    },
    {
      id: 5,
      title: "The Mandalorian",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.7,
      year: 2019,
      category: "Sci-Fi",
      description:
        "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
      episodes: 24,
      seasons: 3,
    },
    {
      id: 6,
      title: "Friends",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
      year: 1994,
      category: "Comedy",
      description:
        "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
      episodes: 236,
      seasons: 10,
    },
    {
      id: 7,
      title: "The Crown",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.6,
      year: 2016,
      category: "Drama",
      description:
        "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
      episodes: 50,
      seasons: 5,
    },
    {
      id: 8,
      title: "The Witcher",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.5,
      year: 2019,
      category: "Fantasy",
      description:
        "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
      episodes: 16,
      seasons: 2,
    },
  ]

  const categories = ["All", "Drama", "Comedy", "Sci-Fi", "Fantasy", "Action"]

  // Filter shows based on category and search query
  const filteredShows = tvShows.filter((show) => {
    const matchesCategory = activeCategory === "All" || show.category === activeCategory
    const matchesSearch = show.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Set featured show on initial load
  useEffect(() => {
    setSelectedShow(tvShows[0])
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
   

      {/* Featured Show Hero */}
      {selectedShow && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10"></div>
          <div className="h-[60vh] w-full relative overflow-hidden">
            <Image
              src={selectedShow.image || "/placeholder.svg"}
              alt={selectedShow.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-0 z-20 p-6 md:p-12 w-full md:w-2/3 lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-fade-in">{selectedShow.title}</h1>
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span className="mr-4">{selectedShow.rating}/5</span>
              <span className="mr-4">{selectedShow.year}</span>
              <span>{selectedShow.seasons} Seasons</span>
            </div>
            <p className="text-gray-300 mb-6 line-clamp-3">{selectedShow.description}</p>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Play className="h-5 w-5 mr-2" />
                Play
              </button>
              <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                + My List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category ? "bg-red-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* TV Shows Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Popular TV Shows</h2>
            <div className="flex items-center">
              <button className="flex items-center text-sm text-gray-400 hover:text-white transition-all duration-300">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>

          {filteredShows.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredShows.map((show) => (
                <div
                  key={show.id}
                  className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105"
                  onClick={() => setSelectedShow(show)}
                >
                  <div className="aspect-[2/3] relative">
                    <Image
                      src={show.image || "/placeholder.svg"}
                      alt={show.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-lg font-bold line-clamp-1">{show.title}</h3>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm">{show.rating}</span>
                        <span className="mx-2 text-xs">•</span>
                        <span className="text-sm">{show.year}</span>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {show.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">No shows found matching your criteria</div>
              <button
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Trending Now Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <div className="flex items-center">
              <button className="flex items-center text-sm text-gray-400 hover:text-white transition-all duration-300">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tvShows.slice(0, 3).map((show) => (
              <div
                key={show.id}
                className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl"
                onClick={() => setSelectedShow(show)}
              >
                <div className="relative h-48">
                  <Image
                    src={show.image || "/placeholder.svg"}
                    alt={show.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold">{show.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm mr-2">{show.rating}</span>
                    <span className="text-sm text-gray-400">
                      {show.year} • {show.seasons} Seasons
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">{show.description}</p>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-all duration-300">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-xl p-6 md:p-8 mb-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
              <p className="text-gray-400">
                Subscribe to our newsletter to get updates on new TV shows and exclusive content.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-l-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-md transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
