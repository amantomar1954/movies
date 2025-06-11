"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion"
import {
  Search,
  Filter,
  Grid3X3,
  List,
  Star,
  Play,
  Calendar,
  Clock,
  Heart,
  Share2,
  X,
  ChevronDown,
  SlidersHorizontal,
  TrendingUp,
  Award,
  Eye,
  Bookmark,
  Download,
  ChevronLeft,
  ChevronRight,
  Flame,
  Crown,
  Zap,
  Globe,
  Camera,
  Film,
  Sparkles,
  ThumbsUp,
  MessageCircle,
  Send,
} from "lucide-react"
import Image from "next/image"
// import moviesData from "./moviesdata.json"
// import Header from "./header"
// import Footer from "./footer"

export default function Movies() {
  const [viewMode, setViewMode] = useState("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedRating, setSelectedRating] = useState("all")
  const [selectedLanguage, setSelectedLanguage] = useState("all")
  const [selectedQuality, setSelectedQuality] = useState("all")
  const [sortBy, setSortBy] = useState("popularity")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [activeCollection, setActiveCollection] = useState(0)
  const [selectedDirector, setSelectedDirector] = useState(0)
  const [showReviews, setShowReviews] = useState(false)
  const [newReview, setNewReview] = useState("")
  const [userRating, setUserRating] = useState(0)

  const loadMoreRef = useRef(null)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const isLoadMoreInView = useInView(loadMoreRef)
  const isHeroInView = useInView(heroRef, { once: true })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const genres = [
    { id: "all", name: "All Genres", count: 3850, color: "from-purple-500 to-pink-500", icon: Globe },
    { id: "action", name: "Action", count: 680, color: "from-red-500 to-orange-500", icon: Zap },
    { id: "comedy", name: "Comedy", count: 520, color: "from-yellow-500 to-pink-500", icon: Heart },
    { id: "drama", name: "Drama", count: 750, color: "from-blue-500 to-purple-500", icon: Award },
    { id: "horror", name: "Horror", count: 380, color: "from-purple-500 to-red-500", icon: Flame },
    { id: "sci-fi", name: "Sci-Fi", count: 420, color: "from-cyan-500 to-blue-500", icon: Sparkles },
    { id: "romance", name: "Romance", count: 390, color: "from-pink-500 to-rose-500", icon: Heart },
    { id: "thriller", name: "Thriller", count: 460, color: "from-gray-500 to-slate-500", icon: Eye },
    { id: "animation", name: "Animation", count: 280, color: "from-green-500 to-emerald-500", icon: Film },
    { id: "documentary", name: "Documentary", count: 190, color: "from-teal-500 to-cyan-500", icon: Camera },
    { id: "fantasy", name: "Fantasy", count: 340, color: "from-violet-500 to-purple-500", icon: Crown },
    { id: "mystery", name: "Mystery", count: 220, color: "from-indigo-500 to-blue-500", icon: Search },
  ]

  const languages = [
    { id: "all", name: "All Languages" },
    { id: "english", name: "English" },
    { id: "spanish", name: "Spanish" },
    { id: "french", name: "French" },
    { id: "japanese", name: "Japanese" },
    { id: "korean", name: "Korean" },
    { id: "hindi", name: "Hindi" },
    { id: "mandarin", name: "Mandarin" },
  ]

  const qualities = [
    { id: "all", name: "All Qualities" },
    { id: "4k", name: "4K Ultra HD" },
    { id: "1080p", name: "Full HD 1080p" },
    { id: "720p", name: "HD 720p" },
    { id: "imax", name: "IMAX" },
    { id: "dolby", name: "Dolby Vision" },
  ]

  const sortOptions = [
    { value: "popularity", label: "Most Popular", icon: TrendingUp },
    { value: "rating", label: "Highest Rated", icon: Star },
    { value: "newest", label: "Newest First", icon: Calendar },
    { value: "oldest", label: "Oldest First", icon: Calendar },
    { value: "title", label: "A-Z", icon: SlidersHorizontal },
    { value: "views", label: "Most Watched", icon: Eye },
    { value: "duration", label: "Runtime", icon: Clock },
    { value: "awards", label: "Most Awarded", icon: Award },
  ]

  const featuredMovies = [
    {
      id: 1,
      title: "Avatar: The Way of Water",
      subtitle: "Return to Pandora",
      genre: ["Sci-Fi", "Adventure", "Action"],
      year: 2022,
      rating: 7.8,
      duration: "3h 12m",
      views: "2.5M",
      description:
        "Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure. Jake Sully lives with his newfound family formed on the planet of Pandora.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=800&width=1400",
      trailer: "/placeholder.svg?height=400&width=800",
      director: "James Cameron",
      cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],
      popularity: 95,
      isNew: true,
      awards: ["Oscar Nominated", "BAFTA Winner"],
      quality: ["4K", "IMAX", "Dolby Vision"],
      language: "English",
      budget: "$350M",
      boxOffice: "$2.3B",
    },
    {
      id: 2,
      title: "Dune: Part Two",
      subtitle: "The Saga Continues",
      genre: ["Sci-Fi", "Adventure", "Drama"],
      year: 2024,
      rating: 8.9,
      duration: "2h 46m",
      views: "4.2M",
      description:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=800&width=1400",
      trailer: "/placeholder.svg?height=400&width=800",
      director: "Denis Villeneuve",
      cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
      popularity: 98,
      isNew: true,
      awards: ["Oscar Winner", "Golden Globe"],
      quality: ["4K", "IMAX", "Dolby Vision"],
      language: "English",
      budget: "$190M",
      boxOffice: "$711M",
    },
    {
      id: 3,
      title: "Oppenheimer",
      subtitle: "The Man Who Changed Everything",
      genre: ["Biography", "Drama", "History"],
      year: 2023,
      rating: 8.4,
      duration: "3h 0m",
      views: "3.8M",
      description:
        "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II. A thrilling, intimate and sweeping depiction of the man who must risk destroying the world in order to save it.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=800&width=1400",
      trailer: "/placeholder.svg?height=400&width=800",
      director: "Christopher Nolan",
      cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
      popularity: 96,
      isNew: false,
      awards: ["Oscar Winner", "BAFTA Winner", "Golden Globe"],
      quality: ["4K", "IMAX", "70mm"],
      language: "English",
      budget: "$100M",
      boxOffice: "$952M",
    },
  ]

  const movies = [
    ...featuredMovies,
    {
      id: 4,
      title: "Everything Everywhere All at Once",
      genre: ["Action", "Comedy", "Drama"],
      year: 2022,
      rating: 7.8,
      duration: "2h 19m",
      views: "1.9M",
      description:
        "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have lived.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Daniels",
      cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
      trailer: "#",
      popularity: 94,
      isNew: false,
      awards: ["Oscar Winner", "Golden Globe"],
      quality: ["4K", "Dolby Vision"],
      language: "English",
      budget: "$25M",
      boxOffice: "$143M",
    },
    {
      id: 5,
      title: "The Batman",
      genre: ["Action", "Crime", "Drama"],
      year: 2022,
      rating: 7.8,
      duration: "2h 56m",
      views: "4.1M",
      description:
        "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Matt Reeves",
      cast: ["Robert Pattinson", "Zoë Kravitz", "Jeffrey Wright"],
      trailer: "#",
      popularity: 90,
      isNew: false,
      awards: ["BAFTA Nominated"],
      quality: ["4K", "IMAX"],
      language: "English",
      budget: "$185M",
      boxOffice: "$771M",
    },
    {
      id: 6,
      title: "Spider-Man: No Way Home",
      genre: ["Action", "Adventure", "Sci-Fi"],
      year: 2021,
      rating: 8.2,
      duration: "2h 28m",
      views: "5.8M",
      description:
        "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Jon Watts",
      cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
      trailer: "#",
      popularity: 98,
      isNew: false,
      awards: ["People's Choice Award"],
      quality: ["4K", "IMAX"],
      language: "English",
      budget: "$200M",
      boxOffice: "$1.9B",
    },
    {
      id: 7,
      title: "Top Gun: Maverick",
      genre: ["Action", "Drama"],
      year: 2022,
      rating: 8.3,
      duration: "2h 10m",
      views: "3.2M",
      description:
        "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he finds himself training a new generation of pilots for a specialized mission.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Joseph Kosinski",
      cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
      trailer: "#",
      popularity: 92,
      isNew: false,
      awards: ["Oscar Winner"],
      quality: ["4K", "IMAX"],
      language: "English",
      budget: "$170M",
      boxOffice: "$1.5B",
    },
    {
      id: 8,
      title: "Black Panther: Wakanda Forever",
      genre: ["Action", "Adventure", "Drama"],
      year: 2022,
      rating: 6.7,
      duration: "2h 41m",
      views: "2.8M",
      description:
        "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa and face a new threat from the underwater nation of Talokan.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Ryan Coogler",
      cast: ["Letitia Wright", "Angela Bassett", "Tenoch Huerta"],
      trailer: "#",
      popularity: 88,
      isNew: true,
      awards: ["SAG Award"],
      quality: ["4K", "IMAX"],
      language: "English",
      budget: "$250M",
      boxOffice: "$859M",
    },
    {
      id: 9,
      title: "John Wick: Chapter 4",
      genre: ["Action", "Crime", "Thriller"],
      year: 2023,
      rating: 7.7,
      duration: "2h 49m",
      views: "3.5M",
      description:
        "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Chad Stahelski",
      cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
      trailer: "#",
      popularity: 89,
      isNew: false,
      awards: ["Stunt Award"],
      quality: ["4K", "IMAX"],
      language: "English",
      budget: "$100M",
      boxOffice: "$440M",
    },
    {
      id: 10,
      title: "Guardians of the Galaxy Vol. 3",
      genre: ["Action", "Adventure", "Comedy"],
      year: 2023,
      rating: 7.9,
      duration: "2h 30m",
      views: "2.9M",
      description:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "James Gunn",
      cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
      trailer: "#",
      popularity: 87,
      isNew: false,
      awards: ["Teen Choice Award"],
      quality: ["4K", "IMAX"],
      language: "English",
      budget: "$250M",
      boxOffice: "$845M",
    },
    {
      id: 11,
      title: "The Super Mario Bros. Movie",
      genre: ["Animation", "Adventure", "Comedy"],
      year: 2023,
      rating: 7.0,
      duration: "1h 32m",
      views: "4.8M",
      description:
        "A plumber named Mario travels through an underground labyrinth with his brother Luigi, trying to save a captured princess. An animated adventure based on the popular video game series.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Aaron Horvath",
      cast: ["Chris Pratt", "Anya Taylor-Joy", "Charlie Day"],
      trailer: "#",
      popularity: 91,
      isNew: false,
      awards: ["Kids Choice Award"],
      quality: ["4K", "Dolby Vision"],
      language: "English",
      budget: "$100M",
      boxOffice: "$1.3B",
    },
    {
      id: 12,
      title: "Scream VI",
      genre: ["Horror", "Mystery", "Thriller"],
      year: 2023,
      rating: 6.5,
      duration: "2h 3m",
      views: "2.1M",
      description:
        "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter in New York City. But the past has a way of catching up, and Ghostface is back for more.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Matt Bettinelli-Olpin",
      cast: ["Melissa Barrera", "Jenna Ortega", "Jasmin Savoy Brown"],
      trailer: "#",
      popularity: 83,
      isNew: false,
      awards: ["Horror Award"],
      quality: ["4K"],
      language: "English",
      budget: "$35M",
      boxOffice: "$169M",
    },
    {
      id: 13,
      title: "Fast X",
      genre: ["Action", "Adventure", "Crime"],
      year: 2023,
      rating: 5.8,
      duration: "2h 21m",
      views: "3.7M",
      description:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they face the most lethal opponent they've ever encountered.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Louis Leterrier",
      cast: ["Vin Diesel", "Michelle Rodriguez", "Tyrese Gibson"],
      trailer: "#",
      popularity: 85,
      isNew: false,
      awards: ["Action Award"],
      quality: ["4K", "IMAX"],
      language: "English",
      budget: "$340M",
      boxOffice: "$714M",
    },
    {
      id: 14,
      title: "Indiana Jones and the Dial of Destiny",
      genre: ["Action", "Adventure"],
      year: 2023,
      rating: 6.5,
      duration: "2h 34m",
      views: "2.3M",
      description:
        "Archaeologist Indiana Jones races against time to retrieve a legendary artifact that can change the course of history. His final adventure takes him on a globe-spanning quest filled with danger and discovery.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "James Mangold",
      cast: ["Harrison Ford", "Phoebe Waller-Bridge", "Antonio Banderas"],
      trailer: "#",
      popularity: 79,
      isNew: false,
      awards: ["Legacy Award"],
      quality: ["4K", "IMAX"],
      language: "English",
      budget: "$295M",
      boxOffice: "$384M",
    },
    {
      id: 15,
      title: "Transformers: Rise of the Beasts",
      genre: ["Action", "Adventure", "Sci-Fi"],
      year: 2023,
      rating: 6.0,
      duration: "2h 7m",
      views: "2.8M",
      description:
        "During the '90s, a new faction of Transformers - the Maximals - join the Autobots as allies in the battle for Earth against the Decepticons and a new threat that could destroy the planet.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Steven Caple Jr.",
      cast: ["Anthony Ramos", "Dominique Fishback", "Luna Lauren Velez"],
      trailer: "#",
      popularity: 81,
      isNew: false,
      awards: ["VFX Award"],
      quality: ["4K", "IMAX"],
      language: "English",
      budget: "$200M",
      boxOffice: "$438M",
    },
    {
      id: 16,
      title: "The Flash",
      genre: ["Action", "Adventure", "Fantasy"],
      year: 2023,
      rating: 6.7,
      duration: "2h 24m",
      views: "2.5M",
      description:
        "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Andy Muschietti",
      cast: ["Ezra Miller", "Michael Keaton", "Sasha Calle"],
      trailer: "#",
      popularity: 78,
      isNew: false,
      awards: ["Superhero Award"],
      quality: ["4K", "IMAX"],
      language: "English",
      budget: "$220M",
      boxOffice: "$271M",
    },
    {
      id: 17,
      title: "Killers of the Flower Moon",
      genre: ["Crime", "Drama", "History"],
      year: 2023,
      rating: 7.6,
      duration: "3h 26m",
      views: "1.8M",
      description:
        "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Martin Scorsese",
      cast: ["Leonardo DiCaprio", "Robert De Niro", "Lily Gladstone"],
      trailer: "#",
      popularity: 84,
      isNew: false,
      awards: ["Oscar Nominated", "Cannes Selection"],
      quality: ["4K", "Dolby Vision"],
      language: "English",
      budget: "$200M",
      boxOffice: "$157M",
    },
    {
      id: 18,
      title: "Napoleon",
      genre: ["Biography", "Drama", "History"],
      year: 2023,
      rating: 6.4,
      duration: "2h 38m",
      views: "1.9M",
      description:
        "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
      image: "/placeholder.svg?height=600&width=400",
      backdrop: "/placeholder.svg?height=400&width=800",
      director: "Ridley Scott",
      cast: ["Joaquin Phoenix", "Vanessa Kirby", "Tahar Rahim"],
      trailer: "#",
      popularity: 77,
      isNew: false,
      awards: ["Historical Drama Award"],
      quality: ["4K", "IMAX"],
      language: "English",
      budget: "$200M",
      boxOffice: "$221M",
    },
  ]

  const collections = [
    {
      id: 1,
      title: "Marvel Cinematic Universe",
      description: "The complete collection of MCU films",
      count: 32,
      image: "/placeholder.svg?height=300&width=500",
      movies: movies.filter((m) => m.title.includes("Spider-Man") || m.title.includes("Guardians")),
    },
    {
      id: 2,
      title: "Christopher Nolan Collection",
      description: "Mind-bending masterpieces from the visionary director",
      count: 11,
      image: "/placeholder.svg?height=300&width=500",
      movies: movies.filter((m) => m.director === "Christopher Nolan"),
    },
    {
      id: 3,
      title: "Oscar Winners 2023",
      description: "Academy Award winning films from 2023",
      count: 15,
      image: "/placeholder.svg?height=300&width=500",
      movies: movies.filter((m) => m.awards.some((award) => award.includes("Oscar"))),
    },
    {
      id: 4,
      title: "Action Blockbusters",
      description: "High-octane action films that defined the genre",
      count: 28,
      image: "/placeholder.svg?height=300&width=500",
      movies: movies.filter((m) => m.genre.includes("Action")),
    },
  ]

  const directors = [
    {
      id: 1,
      name: "Christopher Nolan",
      bio: "British-American filmmaker known for his complex narratives and innovative visual techniques.",
      image: "/placeholder.svg?height=400&width=300",
      films: 11,
      awards: "3 Oscars, 5 BAFTAs",
      signature: "Non-linear storytelling, practical effects",
      movies: movies.filter((m) => m.director === "Christopher Nolan"),
    },
    {
      id: 2,
      name: "Denis Villeneuve",
      bio: "Canadian filmmaker renowned for his visually stunning science fiction epics.",
      image: "/placeholder.svg?height=400&width=300",
      films: 9,
      awards: "2 Oscars, 3 BAFTAs",
      signature: "Atmospheric cinematography, complex themes",
      movies: movies.filter((m) => m.director === "Denis Villeneuve"),
    },
    {
      id: 3,
      name: "James Cameron",
      bio: "Pioneering director known for groundbreaking visual effects and epic storytelling.",
      image: "/placeholder.svg?height=400&width=300",
      films: 8,
      awards: "3 Oscars, 2 Golden Globes",
      signature: "Technological innovation, environmental themes",
      movies: movies.filter((m) => m.director === "James Cameron"),
    },
    {
      id: 4,
      name: "Martin Scorsese",
      bio: "Legendary American filmmaker master of crime dramas and character studies.",
      image: "/placeholder.svg?height=400&width=300",
      films: 25,
      awards: "1 Oscar, 4 BAFTAs",
      signature: "Character-driven narratives, moral complexity",
      movies: movies.filter((m) => m.director === "Martin Scorsese"),
    },
  ]

  const reviews = [
    {
      id: 1,
      user: "MovieBuff2023",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 9,
      comment: "Absolutely stunning visuals and incredible storytelling. A masterpiece!",
      date: "2 days ago",
      likes: 24,
      verified: true,
    },
    {
      id: 2,
      user: "CinemaLover",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 8,
      comment: "Great performances and amazing cinematography. Highly recommended!",
      date: "1 week ago",
      likes: 18,
      verified: false,
    },
    {
      id: 3,
      user: "FilmCritic",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 7,
      comment: "Solid film with some incredible action sequences. Worth watching.",
      date: "2 weeks ago",
      likes: 12,
      verified: true,
    },
  ]

  // Auto-rotate featured movies
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredMovies.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Filter and sort movies
  const filteredMovies = movies
    .filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesGenre = selectedGenre === "all" || movie.genre.some((g) => g.toLowerCase().includes(selectedGenre))
      const matchesYear = selectedYear === "all" || movie.year.toString() === selectedYear
      const matchesLanguage = selectedLanguage === "all" || movie.language?.toLowerCase() === selectedLanguage
      const matchesQuality = selectedQuality === "all" || movie.quality?.includes(selectedQuality)
      const matchesRating =
        selectedRating === "all" ||
        (selectedRating === "high" && movie.rating >= 8) ||
        (selectedRating === "medium" && movie.rating >= 6 && movie.rating < 8) ||
        (selectedRating === "low" && movie.rating < 6)

      return matchesSearch && matchesGenre && matchesYear && matchesRating && matchesLanguage && matchesQuality
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "newest":
          return b.year - a.year
        case "oldest":
          return a.year - b.year
        case "title":
          return a.title.localeCompare(b.title)
        case "views":
          return Number.parseFloat(b.views) - Number.parseFloat(a.views)
        case "duration":
          return Number.parseFloat(b.duration) - Number.parseFloat(a.duration)
        case "awards":
          return b.awards.length - a.awards.length
        default:
          return b.popularity - a.popularity
      }
    })

  // Simulate loading more movies
  useEffect(() => {
    if (isLoadMoreInView && !isLoading) {
      setIsLoading(true)
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1)
        setIsLoading(false)
      }, 1000)
    }
  }, [isLoadMoreInView, isLoading])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const MovieCard = ({ movie, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group cursor-pointer"
      onClick={() => setSelectedMovie(movie)}
    >
      <div className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
        <div className="relative overflow-hidden">
          <Image
            src={movie.image || "/placeholder.svg"}
            alt={movie.title}
            width={400}
            height={600}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Overlay Content */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {movie.isNew && <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">NEW</span>}
            {movie.awards.length > 0 && (
              <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                <Award className="h-3 w-3 mr-1" />
                AWARD
              </span>
            )}
            {movie.quality?.includes("4K") && (
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">4K</span>
            )}
          </div>

          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-red-400 transition-colors"
            >
              <Heart className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-blue-400 transition-colors"
            >
              <Bookmark className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Play Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-black/50"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30"
            >
              <Play className="h-8 w-8 text-white ml-1" />
            </motion.button>
          </motion.div>

          {/* Bottom Info */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">{movie.rating}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Eye className="h-4 w-4" />
                <span className="text-sm">{movie.views}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors line-clamp-1">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between mb-3">
            <span className="text-purple-400 font-medium">{movie.genre.join(", ")}</span>
            <span className="text-white/60">{movie.year}</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-4">{movie.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white/60">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{movie.duration}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Watch Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const MovieListItem = ({ movie, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ x: 10, backgroundColor: "rgba(100, 116, 139, 0.1)" }}
      className="group cursor-pointer p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
      onClick={() => setSelectedMovie(movie)}
    >
      <div className="flex items-center space-x-6">
        <div className="relative flex-shrink-0">
          <Image
            src={movie.image || "/placeholder.svg"}
            alt={movie.title}
            width={120}
            height={180}
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-black/20 rounded-lg group-hover:bg-black/40 transition-colors" />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Play className="h-8 w-8 text-white" />
          </motion.div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors">
                {movie.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-white/60 mb-2">
                <span>{movie.year}</span>
                <span>{movie.duration}</span>
                <span>{movie.genre.join(", ")}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">{movie.rating}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-slate-700 hover:bg-purple-600 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <Heart className="h-5 w-5" />
              </motion.button>
            </div>
          </div>

          <p className="text-white/70 leading-relaxed mb-4 line-clamp-2">{movie.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-white/60">
                <Eye className="h-4 w-4" />
                <span className="text-sm">{movie.views} views</span>
              </div>
              {movie.awards.length > 0 && (
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Award className="h-4 w-4" />
                  <span className="text-sm">{movie.awards[0]}</span>
                </div>
              )}
              {movie.quality?.includes("4K") && (
                <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-semibold">4K</span>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Watch Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* <Header /> */}

      {/* Enhanced Hero Section with Featured Movies Carousel */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={featuredIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={featuredMovies[featuredIndex].backdrop || "/placeholder.svg"}
              alt={featuredMovies[featuredIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
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

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-purple-400 font-semibold text-sm">FEATURED MOVIE</span>
              </motion.div>

              <motion.p
                className="text-purple-400 text-xl md:text-2xl font-semibold mb-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {featuredMovies[featuredIndex].subtitle}
              </motion.p>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent bg-[length:300%_100%]"
                >
                  {featuredMovies[featuredIndex].title}
                </motion.span>
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <motion.div
                  className="flex items-center space-x-2 bg-yellow-500/20 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(234, 179, 8, 0.3)" }}
                >
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  <span className="text-white font-bold text-lg">{featuredMovies[featuredIndex].rating}</span>
                </motion.div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{featuredMovies[featuredIndex].year}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">{featuredMovies[featuredIndex].duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Eye className="h-5 w-5" />
                  <span className="font-medium">{featuredMovies[featuredIndex].views}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {featuredMovies[featuredIndex].genre.map((genre, index) => (
                  <motion.div
                    key={genre}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2 text-sm font-semibold rounded-full">
                      {genre}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {featuredMovies[featuredIndex].description}
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full flex items-center justify-center"
                >
                  <Play className="mr-3 h-6 w-6" />
                  Watch Trailer
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm flex items-center justify-center"
                >
                  <Heart className="mr-3 h-6 w-6" />
                  Add to Watchlist
                </motion.button>
              </div>

              {/* Movie Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                  <div className="text-lg font-bold text-white">{featuredMovies[featuredIndex].budget}</div>
                  <div className="text-slate-400 text-sm">Budget</div>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                  <div className="text-lg font-bold text-white">{featuredMovies[featuredIndex].boxOffice}</div>
                  <div className="text-slate-400 text-sm">Box Office</div>
                </div>
              </div>
            </motion.div>

            {/* Featured Movie Poster */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} className="relative z-10">
                <Image
                  src={featuredMovies[featuredIndex].image || "/placeholder.svg"}
                  alt={featuredMovies[featuredIndex].title}
                  width={400}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl transform scale-110" />
            </motion.div>
          </div>

          {/* Featured Movie Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setFeaturedIndex((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length)}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <div className="flex space-x-2">
              {featuredMovies.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setFeaturedIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === featuredIndex ? "bg-purple-500" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setFeaturedIndex((prev) => (prev + 1) % featuredMovies.length)}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Enhanced Search and Stats Section */}
      <section className="py-16 bg-slate-800/30 border-b border-slate-700/50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Discover Movies
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Explore our vast collection of films from every genre, era, and corner of the world. Find your next
              favorite story.
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-3xl mx-auto relative mb-8">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by title, actor, director, or genre..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 rounded-2xl py-6 pl-16 pr-6 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                />
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSearchQuery("")}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-slate-600 hover:bg-slate-500 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">3,850+</div>
              <div className="text-slate-300">Total Movies</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 text-center"
            >
              <div className="text-3xl font-bold text-pink-400 mb-2">250+</div>
              <div className="text-slate-300">New This Month</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">35+</div>
              <div className="text-slate-300">Genres</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">4K</div>
              <div className="text-slate-300">Ultra HD</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 text-center"
            >
              <div className="text-3xl font-bold text-yellow-400 mb-2">150+</div>
              <div className="text-slate-300">Award Winners</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 text-center"
            >
              <div className="text-3xl font-bold text-red-400 mb-2">25+</div>
              <div className="text-slate-300">Languages</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Crown className="h-6 w-6 text-purple-400" />
              <span className="text-purple-400 font-semibold">CURATED COLLECTIONS</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Featured Collections
              </span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Handpicked movie collections curated by our experts and film enthusiasts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group cursor-pointer"
                onClick={() => setActiveCollection(index)}
              >
                <div className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {collection.count} Movies
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">{collection.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Spotlight Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-6 py-3 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Camera className="h-6 w-6 text-blue-400" />
              <span className="text-blue-400 font-semibold">DIRECTOR SPOTLIGHT</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Visionary Directors
              </span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Explore the works of cinema's greatest storytellers and their masterpieces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {directors.map((director, index) => (
                  <motion.div
                    key={director.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl cursor-pointer transition-all ${
                      selectedDirector === index
                        ? "bg-blue-600/20 border-2 border-blue-500"
                        : "bg-slate-800/50 border border-slate-700 hover:border-slate-600"
                    }`}
                    onClick={() => setSelectedDirector(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <Image
                        src={director.image || "/placeholder.svg"}
                        alt={director.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-white font-bold text-lg">{director.name}</h3>
                        <p className="text-slate-400 text-sm">{director.films} Films</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                key={selectedDirector}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700"
              >
                <div className="relative h-64">
                  <Image
                    src={directors[selectedDirector].image || "/placeholder.svg"}
                    alt={directors[selectedDirector].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{directors[selectedDirector].name}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">{directors[selectedDirector].bio}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Career Highlights</h4>
                      <p className="text-slate-400">{directors[selectedDirector].awards}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Signature Style</h4>
                      <p className="text-slate-400">{directors[selectedDirector].signature}</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    View All Films
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filters and Controls */}
      <section className="py-8 border-b border-slate-700/50 bg-slate-800/30">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Enhanced Genre Filter */}
            <div className="flex flex-wrap gap-3">
              {genres.slice(0, 8).map((genre) => (
                <motion.button
                  key={genre.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedGenre(genre.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all flex items-center ${
                    selectedGenre === genre.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600"
                  }`}
                >
                  <genre.icon className="h-4 w-4 mr-2" />
                  {genre.name}
                  <span className="ml-2 text-xs opacity-70">{genre.count}</span>
                </motion.button>
              ))}
            </div>

            {/* Enhanced Controls */}
            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-800 border border-slate-600 text-white rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-600">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Grid3X3 className="h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <List className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Advanced Filters */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(!showFilters)}
                className="bg-slate-800 border border-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors hidden sm:flex items-center"
              >
                <Filter className="h-5 w-5 mr-2" />
                Advanced Filters
              </motion.button>
            </div>
          </div>

          {/* Enhanced Advanced Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-3">Release Year</label>
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="all">All Years</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-3">Rating</label>
                    <select
                      value={selectedRating}
                      onChange={(e) => setSelectedRating(e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="all">All Ratings</option>
                      <option value="high">8.0+ (Excellent)</option>
                      <option value="medium">6.0-7.9 (Good)</option>
                      <option value="low">Below 6.0</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-3">Language</label>
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {languages.map((lang) => (
                        <option key={lang.id} value={lang.id}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-3">Quality</label>
                    <select
                      value={selectedQuality}
                      onChange={(e) => setSelectedQuality(e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {qualities.map((quality) => (
                        <option key={quality.id} value={quality.id}>
                          {quality.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedGenre("all")
                        setSelectedYear("all")
                        setSelectedRating("all")
                        setSelectedLanguage("all")
                        setSelectedQuality("all")
                        setSearchQuery("")
                      }}
                      className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-2 rounded-lg font-semibold"
                    >
                      Clear All Filters
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Movies Grid/List */}
      <section className="py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              {filteredMovies.length} Movies Found
              {searchQuery && <span className="text-purple-400 ml-2">for "{searchQuery}"</span>}
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={
              viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" : "space-y-6"
            }
          >
            {filteredMovies.map((movie, index) =>
              viewMode === "grid" ? (
                <MovieCard key={movie.id} movie={movie} index={index} />
              ) : (
                <MovieListItem key={movie.id} movie={movie} index={index} />
              ),
            )}
          </motion.div>

          {/* Load More */}
          <div ref={loadMoreRef} className="mt-12 text-center">
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="inline-block w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full"
              />
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold"
              >
                Load More Movies
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Movie Detail Modal */}
      <AnimatePresence>
        {selectedMovie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMovie(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-900 rounded-2xl max-w-[1600px] w-full max-h-[90vh] overflow-y-auto border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedMovie.backdrop || "/placeholder.svg"}
                  alt={selectedMovie.title}
                  width={1200}
                  height={600}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedMovie(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="h-6 w-6" />
                </motion.button>

                {/* Trailer Play Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => setIsTrailerPlaying(true)}
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                </motion.button>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h1 className="text-4xl font-bold text-white mb-4">{selectedMovie.title}</h1>
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="h-6 w-6 text-yellow-400 fill-current" />
                        <span className="text-white font-bold text-xl">{selectedMovie.rating}</span>
                      </div>
                      <span className="text-slate-300">{selectedMovie.year}</span>
                      <span className="text-slate-300">{selectedMovie.duration}</span>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-5 w-5 text-slate-400" />
                        <span className="text-slate-300">{selectedMovie.views}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedMovie.genre.map((genre) => (
                        <span
                          key={genre}
                          className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-300 text-lg leading-relaxed mb-8">{selectedMovie.description}</p>

                    <div className="space-y-4 mb-8">
                      <div>
                        <span className="text-slate-400 font-semibold">Director:</span>
                        <span className="text-white ml-2">{selectedMovie.director}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold">Cast:</span>
                        <span className="text-white ml-2">{selectedMovie.cast.join(", ")}</span>
                      </div>
                      {selectedMovie.awards.length > 0 && (
                        <div>
                          <span className="text-slate-400 font-semibold">Awards:</span>
                          <span className="text-yellow-400 ml-2">{selectedMovie.awards.join(", ")}</span>
                        </div>
                      )}
                      {selectedMovie.budget && (
                        <div>
                          <span className="text-slate-400 font-semibold">Budget:</span>
                          <span className="text-white ml-2">{selectedMovie.budget}</span>
                        </div>
                      )}
                      {selectedMovie.boxOffice && (
                        <div>
                          <span className="text-slate-400 font-semibold">Box Office:</span>
                          <span className="text-white ml-2">{selectedMovie.boxOffice}</span>
                        </div>
                      )}
                    </div>

                    {/* User Reviews Section */}
                    <div className="border-t border-slate-700 pt-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-white">User Reviews</h3>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setShowReviews(!showReviews)}
                          className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold"
                        >
                          Write Review
                        </motion.button>
                      </div>

                      <AnimatePresence>
                        {showReviews && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-6 bg-slate-800/50 rounded-lg p-6"
                          >
                            <div className="flex items-center mb-4">
                              <span className="text-white font-semibold mr-4">Your Rating:</span>
                              <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <motion.button
                                    key={star}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setUserRating(star)}
                                    className={`w-8 h-8 ${star <= userRating ? "text-yellow-400" : "text-slate-600"}`}
                                  >
                                    <Star className="w-full h-full fill-current" />
                                  </motion.button>
                                ))}
                              </div>
                            </div>
                            <textarea
                              value={newReview}
                              onChange={(e) => setNewReview(e.target.value)}
                              placeholder="Share your thoughts about this movie..."
                              className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg p-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <div className="flex justify-end mt-4">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center"
                              >
                                <Send className="h-4 w-4 mr-2" />
                                Submit Review
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="space-y-4">
                        {reviews.map((review) => (
                          <div key={review.id} className="bg-slate-800/30 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <Image
                                  src={review.avatar || "/placeholder.svg"}
                                  alt={review.user}
                                  width={40}
                                  height={40}
                                  className="rounded-full"
                                />
                                <div>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-white font-semibold">{review.user}</span>
                                    {review.verified && (
                                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                                        Verified
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-slate-400 text-sm">{review.date}</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="text-white font-semibold">{review.rating}/10</span>
                              </div>
                            </div>
                            <p className="text-slate-300 mb-4">{review.comment}</p>
                            <div className="flex items-center space-x-4">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
                              >
                                <ThumbsUp className="h-4 w-4" />
                                <span>{review.likes}</span>
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
                              >
                                <MessageCircle className="h-4 w-4" />
                                <span>Reply</span>
                              </motion.button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center"
                    >
                      <Play className="h-6 w-6 mr-2" />
                      Watch Now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-slate-800 border border-slate-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-slate-700 transition-colors"
                    >
                      <Heart className="h-5 w-5 mr-2" />
                      Add to Watchlist
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-slate-800 border border-slate-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-slate-700 transition-colors"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-slate-800 border border-slate-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-slate-700 transition-colors"
                    >
                      <Share2 className="h-5 w-5 mr-2" />
                      Share
                    </motion.button>

                    {/* Movie Quality Options */}
                    {selectedMovie.quality && (
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3">Available Quality</h4>
                        <div className="space-y-2">
                          {selectedMovie.quality.map((quality) => (
                            <div key={quality} className="flex items-center justify-between">
                              <span className="text-slate-300">{quality}</span>
                              <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Available</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <Footer /> */}
    </div>
  )
}
