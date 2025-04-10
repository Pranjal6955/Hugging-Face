import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Search, Plus, Heart, Eye, Filter, ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const spaces = [
  { 
    name: 'Text to Image Generator', 
    author: 'stability-ai',
    likes: 2345,
    views: 45600,
    image: 'https://images.unsplash.com/photo-1678565661490-6578daf8dcc8?q=80&w=1064&auto=format&fit=crop',
    category: 'Image Generation',
    tags: ['stable-diffusion', 'generative-ai'],
    featured: true
  },
  { 
    name: 'Image Classification Demo', 
    author: 'google-research',
    likes: 1892,
    views: 32100,
    image: 'https://images.unsplash.com/photo-1684391845095-5ed86889a6dc?q=80&w=1064&auto=format&fit=crop',
    category: 'Computer Vision',
    tags: ['classification', 'vision-model'],
    featured: false
  },
  { 
    name: 'Language Translation', 
    author: 'meta-llama',
    likes: 3214,
    views: 67800,
    image: 'https://images.unsplash.com/photo-1528747207879-a3daa47e75a5?q=80&w=1064&auto=format&fit=crop',
    category: 'Natural Language Processing',
    tags: ['translation', 'llm'],
    featured: true
  },
  { 
    name: 'Voice Cloning App', 
    author: 'openai-whisper',
    likes: 1563,
    views: 28400,
    image: 'https://images.unsplash.com/photo-1679113037367-8c7132c21af9?q=80&w=1064&auto=format&fit=crop',
    category: 'Audio',
    tags: ['text-to-speech', 'voice-synthesis'],
    featured: false
  },
  { 
    name: 'GPT-4 Chat Interface', 
    author: 'openai',
    likes: 5678,
    views: 98700,
    image: 'https://images.unsplash.com/photo-1684309085406-695d5ebdd72e?q=80&w=1064&auto=format&fit=crop',
    category: 'Natural Language Processing',
    tags: ['chatbot', 'llm'],
    featured: true
  },
  { 
    name: 'Video Frame Interpolation', 
    author: 'nvidia-research',
    likes: 1238,
    views: 21300,
    image: 'https://images.unsplash.com/photo-1581128601150-5456d059d4da?q=80&w=1064&auto=format&fit=crop',
    category: 'Computer Vision',
    tags: ['video-processing', 'interpolation'],
    featured: false
  },
];

const categories = [
  'Natural Language Processing',
  'Computer Vision',
  'Image Generation',
  'Audio',
  'Multimodal',
  'Demo',
  'Other'
];

export function SpacesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const filteredSpaces = spaces.filter(space => {
    // Apply search filter
    if (searchQuery && !space.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Apply category filter
    if (selectedCategory && space.category !== selectedCategory) {
      return false;
    }
    
    // Apply featured filter
    if (showFeaturedOnly && !space.featured) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-secondary-900 dark:text-white sm:text-5xl">
            Discover AI <span className="text-primary-500">Spaces</span>
          </h1>
          <p className="mt-4 text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            Create and explore machine learning apps in minutes.
          </p>
        </motion.div>

        {/* Search and filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-secondary-400" />
            </div>
            <input
              type="text"
              className="input pl-10 w-full"
              placeholder="Search spaces..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Button 
                variant="secondary" 
                className="flex items-center gap-2"
                onClick={() => setShowFilterMenu(!showFilterMenu)}
              >
                <Filter className="h-4 w-4" />
                <span>Filter</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              
              {/* Filter dropdown */}
              {showFilterMenu && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-secondary-800 ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <div className="px-4 py-2 text-sm font-medium text-secondary-900 dark:text-white">
                      Filters
                    </div>
                    <div className="px-4 py-2">
                      <label className="inline-flex items-center">
                        <input 
                          type="checkbox" 
                          className="text-primary-500 h-4 w-4 rounded border-secondary-300 dark:border-secondary-700" 
                          checked={showFeaturedOnly}
                          onChange={() => setShowFeaturedOnly(!showFeaturedOnly)}
                        />
                        <span className="ml-2 text-sm text-secondary-700 dark:text-secondary-300">Featured only</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Button variant="primary" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>New Space</span>
            </Button>
          </div>
        </motion.div>

        {/* Category pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 overflow-x-auto"
        >
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  selectedCategory === category
                    ? "bg-primary-500 text-white hover:bg-primary-600"
                    : "bg-secondary-100 text-secondary-800 hover:bg-secondary-200 dark:bg-secondary-800 dark:text-secondary-200 dark:hover:bg-secondary-700"
                )}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Spaces list */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Featured Spaces</h2>
          <p className="text-sm text-secondary-500 dark:text-secondary-400">
            Showing {filteredSpaces.length} spaces
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSpaces.length > 0 ? (
            filteredSpaces.map((space) => (
              <motion.div key={space.name} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                  <div className="h-48 overflow-hidden relative">
                    <img src={space.image} alt={space.name} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                    {space.featured && (
                      <div className="absolute top-0 right-0 mt-2 mr-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-secondary-900 dark:text-white">{space.name}</h3>
                      <span className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        space.category === "Natural Language Processing" && "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
                        space.category === "Computer Vision" && "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
                        space.category === "Image Generation" && "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
                        space.category === "Audio" && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      )}>
                        {space.category}
                      </span>
                    </div>
                    
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                      by @{space.author}
                    </p>
                    
                    <div className="mt-3 flex flex-wrap gap-1">
                      {space.tags.map(tag => (
                        <span key={tag} className="text-xs bg-secondary-100 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-300 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-secondary-100 dark:border-secondary-800">
                      <div className="flex space-x-4">
                        <span className="flex items-center text-sm text-secondary-500 dark:text-secondary-400">
                          <Heart className="h-4 w-4 mr-1 text-red-500" />
                          {space.likes}
                        </span>
                        <span className="flex items-center text-sm text-secondary-500 dark:text-secondary-400">
                          <Eye className="h-4 w-4 mr-1" />
                          {space.views}
                        </span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400 transition-colors"
                      >
                        Launch
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 py-12 text-center">
              <p className="text-lg text-secondary-600 dark:text-secondary-400">
                No spaces found matching your criteria. Try adjusting your filters.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                  setShowFeaturedOnly(false);
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </motion.div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary-500 to-yellow-500 hover:from-primary-600 hover:to-yellow-600 text-white"
          >
            Explore all spaces
          </Button>
        </div>
      </div>
    </div>
  );
}
