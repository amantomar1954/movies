"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiClock, FiHeart, FiShare2, FiChevronRight } from 'react-icons/fi';

const SparksPage = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [likedPosts, setLikedPosts] = useState([]);

  const categories = [
    { id: 'trending', name: 'Trending' },
    { id: 'movies', name: 'Movies' },
    { id: 'tv', name: 'TV Shows' },
    { id: 'sports', name: 'Sports' },
    { id: 'news', name: 'News' }
  ];

  const trendingPosts = [
    {
      id: 1,
      title: 'Brahmastra breaks box office records',
      description: 'The Ranbir Kapoor starrer crosses ₹200 crore worldwide in just 5 days!',
      category: 'movies',
      likes: 2453,
      comments: 542,
      time: '2 hours ago',
      isLiked: false,
      image: '/brahmastra.jpg'
    },
    {
      id: 2,
      title: 'Team India wins T20 series against Australia',
      description: 'Virat Kohli scores match-winning 82 runs in the decider match',
      category: 'sports',
      likes: 1892,
      comments: 321,
      time: '5 hours ago',
      isLiked: true,
      image: '/cricket.jpg'
    },
    {
      id: 3,
      title: 'New teaser for Pathaan released',
      description: 'Shah Rukh Khan makes explosive comeback in the new spy thriller',
      category: 'movies',
      likes: 3245,
      comments: 876,
      time: '1 day ago',
      isLiked: false,
      image: '/pathaan.jpg'
    }
  ];

  const moviePosts = [
    {
      id: 4,
      title: 'RRR wins Golden Globe for Best Song',
      description: 'Naatu Naatu becomes first Indian song to win the prestigious award',
      category: 'movies',
      likes: 4210,
      comments: 932,
      time: '3 days ago',
      isLiked: false,
      image: '/rrr.jpg'
    },
    {
      id: 5,
      title: 'Kantara OTT release date announced',
      description: 'The Kannada blockbuster will stream from January 15 on Prime Video',
      category: 'movies',
      likes: 2876,
      comments: 543,
      time: '4 days ago',
      isLiked: true,
      image: '/kantara.jpg'
    }
  ];

  const tvPosts = [
    {
      id: 6,
      title: 'The Last of Us breaks viewership records',
      description: 'HBO adaptation becomes most-watched premiere since House of the Dragon',
      category: 'tv',
      likes: 3562,
      comments: 1243,
      time: '2 days ago',
      isLiked: false,
      image: '/lastofus.jpg'
    }
  ];

  const getCurrentPosts = () => {
    switch(activeTab) {
      case 'trending': return trendingPosts;
      case 'movies': return moviePosts;
      case 'tv': return tvPosts;
      default: return trendingPosts;
    }
  };

  const posts = getCurrentPosts();

  const toggleLike = (postId) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId) 
        : [...prev, postId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center px-4 z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sparks</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              The hottest entertainment news, updates and discussions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-6">
        <motion.div 
          className="flex overflow-x-auto pb-2 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full transition ${activeTab === category.id ? 'bg-purple-600 text-white' : 'bg-white text-gray-800 hover:bg-gray-200'}`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <motion.div
                    key={post.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md"
                  >
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <span className="text-xs font-medium px-2 py-1 bg-purple-600 text-white rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center">
                          <FiClock className="mr-1" /> {post.time}
                        </span>
                        <div className="flex space-x-4">
                          <button 
                            onClick={() => toggleLike(post.id)}
                            className={`flex items-center ${likedPosts.includes(post.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
                          >
                            <FiHeart className="mr-1" /> {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                          </button>
                          <button className="flex items-center text-gray-500 hover:text-purple-600">
                            <FiShare2 className="mr-1" /> Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 text-center">
                <p className="text-gray-500">No posts available in this category</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Featured Stories */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Stories</h2>
            <button className="text-purple-600 hover:text-purple-800 flex items-center font-medium">
              View All <FiChevronRight className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Exclusive: Inside the making of Brahmastra',
                description: 'Director Ayan Mukerji reveals the challenges of creating India\'s biggest fantasy franchise',
                image: '/brahmastra-making.jpg',
                category: 'movies'
              },
              {
                title: 'How Kantara became a pan-India phenomenon',
                description: 'The unexpected journey of a Kannada film that captured the nation\'s imagination',
                image: '/kantara-making.jpg',
                category: 'movies'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <span className="text-xs font-medium px-2 py-1 bg-purple-600 text-white rounded-full mb-2 inline-block">
                      {story.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{story.title}</h3>
                    <p className="text-gray-600 mb-4">{story.description}</p>
                    <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                      Read More <FiChevronRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Content */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Trending Videos</h2>
            <button className="text-purple-600 hover:text-purple-800 flex items-center font-medium">
              View All <FiChevronRight className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Pathaan Official Trailer Reaction',
                views: '2.4M views',
                time: '5 days ago',
                image: '/pathaan-video.jpg'
              },
              {
                title: 'RRR Golden Globe Win Celebration',
                views: '1.8M views',
                time: '1 week ago',
                image: '/rrr-video.jpg'
              },
              {
                title: 'Kantara Cast Interview',
                views: '1.2M views',
                time: '2 weeks ago',
                image: '/kantara-video.jpg'
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative">
                  <img 
                    src={video.image} 
                    alt={video.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
                      <FiPlay className="text-white text-xl" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-500">
                    {video.views} • {video.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparksPage;