"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Search, Menu, X, Film, Bell, User, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 50], [0.4, 1])
  const headerBackground = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.8)"])
  const headerHeight = useTransform(scrollY, [0, 50], ["80px", "70px"])
  const logoScale = useTransform(scrollY, [0, 50], [1.2, 1])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    {
      name: "Movies",
      href: "/movies",
      // dropdown: [
      //   { name: "Popular", href: "/movies" },
      //   { name: "Top Rated", href: "/movies" },
      //   { name: "Upcoming", href: "/movies" },
      //   { name: "Now Playing", href: "/movies" },
      // ],
    },
    {
      name: "TV Shows",
      href: "/tv-shows",
      // dropdown: [
      //   { name: "Popular Shows", href: "/tv-shows" },
      //   { name: "Airing Today", href: "/tv-shows" },
      //   { name: "On TV", href: "/tv-shows" },
      //   { name: "Top Rated", href: "/tv-shows" },
      // ],
    },
    { name: "Genres",
      dropdown: [
        { name: "Action", href: "/genres/action" },
        { name: "Comedy", href: "/genres/comedy" },
        { name: "Drama", href: "/genres/drama" },
        { name: "Horror", href: "/genres/horror" },
        { name: "Romance", href: "/genres/romance" },
      ],
       },
    { name: "Awards", href: "/awards" },
    { name: "About", href: "/about" },
    { name: "Sports", href: "/sports" },
    { name: "Sparks", href: "/sparks" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(index)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        height: headerHeight,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2"
              style={{ scale: logoScale }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-10 h-10">
                <motion.div
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 5,
                    ease: "easeInOut",
                  }}
                >
                  <Film className="h-10 w-10 text-purple-400" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 3,
                  }}
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                CinemaHub
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <motion.div
                    className="flex items-center px-3 py-2 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => toggleDropdown(index)}
                  >
                    <span className="text-white hover:text-purple-300 transition-colors text-sm font-medium">
                      {item.name}
                    </span>
                    <ChevronDown
                      className={`ml-1 h-4 w-4 text-white/70 transition-transform duration-300 ${activeDropdown === index ? "rotate-180" : ""}`}
                    />
                  </motion.div>
                ) : (
                  <Link href={item.href}>
                    <motion.div className="flex items-center px-3 py-2 cursor-pointer" whileHover={{ scale: 1.05 }}>
                      <span className="text-white hover:text-purple-300 transition-colors text-sm font-medium">
                        {item.name}
                      </span>
                    </motion.div>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-48 bg-black/80 backdrop-blur-md border border-white/10 rounded-md shadow-lg py-1 z-50"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-purple-600/30 hover:text-purple-300"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <motion.form
              onSubmit={handleSearch}
              className="hidden md:flex items-center relative"
              initial={{ width: 180 }}
              whileFocus={{ width: 220 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 border border-white/20 text-white placeholder-white/60 text-sm rounded-full py-1.5 pl-4 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-4 w-4 text-white/60" />
              </button>
            </motion.form>

            {/* Notifications */}
            <Link href="/notifications">
              <motion.div className="hidden sm:flex relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Bell className="h-5 w-5 text-white/80 hover:text-purple-300 cursor-pointer" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </motion.div>
            </Link>

            {/* User Profile */}
            <Link href="/profile">
              <motion.div className="hidden sm:flex items-center space-x-2 cursor-pointer" whileHover={{ scale: 1.05 }}>
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-white text-sm font-medium">Account</span>
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden text-white p-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-3 space-y-1">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white/10 border border-white/20 text-white placeholder-white/60 text-sm rounded-full py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                  <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Search className="h-4 w-4 text-white/60" />
                  </button>
                </div>
              </form>

              {/* Mobile Nav Items */}
              {navItems.map((item, index) => (
                <div key={item.name} className="py-1">
                  {item.dropdown ? (
                    <div
                      className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-white/10"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="text-white font-medium">{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-white/70 transition-transform duration-300 ${activeDropdown === index ? "rotate-180" : ""}`}
                      />
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-white/10">
                        <span className="text-white font-medium">{item.name}</span>
                      </div>
                    </Link>
                  )}

                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="ml-4 mt-1 space-y-1 border-l-2 border-purple-500/30 pl-4"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block py-2 text-sm text-white/80 hover:text-purple-300"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Mobile User Actions */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <Link href="/profile">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">Account</span>
                  </div>
                </Link>
                <Link href="/notifications">
                  <div className="relative">
                    <Bell className="h-5 w-5 text-white/80" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      3
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
