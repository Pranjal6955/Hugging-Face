import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Search, Filter, ArrowUpRight, SlidersHorizontal, ChevronDown, SortAsc, SortDesc, Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const popularModels = [
  { 
    name: 'GPT-4', 
    category: 'Text Generation', 
    downloads: '2.4M',
    author: 'OpenAI',
    description: 'State-of-the-art language model for generating human-like text',
    isFeatured: true
  },
  { 
    name: 'Stable Diffusion XL', 
    category: 'Image Generation', 
    downloads: '1.8M',
    author: 'Stability AI',
    description: 'High-quality image generation model capable of producing detailed visuals',
    isFeatured: true
  },
  { 
    name: 'Whisper', 
    category: 'Speech Recognition', 
    downloads: '1.2M',
    author: 'OpenAI',
    description: 'Robust speech recognition system that works across multiple languages',
    isFeatured: false
  },
  { 
    name: 'BERT', 
    category: 'Text Understanding', 
    downloads: '3.5M',
    author: 'Google',
    description: 'Bidirectional transformer for natural language understanding tasks',
    isFeatured: false
  },
  { 
    name: 'DALL-E 3', 
    category: 'Image Generation', 
    downloads: '1.1M',
    author: 'OpenAI',
    description: 'Creates realistic images and art from natural language descriptions',
    isFeatured: true
  },
  { 
    name: 'LLaMA 2', 
    category: 'Text Generation', 
    downloads: '2.1M',
    author: 'Meta AI',
    description: 'Open foundation large language model for research and commercial use',
    isFeatured: false
  },
];

const categories = [
  'Text Generation',
  'Image Generation',
  'Speech Recognition',
  'Text Understanding',
  'Computer Vision',
  'Audio Processing',
  'Multimodal',
  'Reinforcement Learning'
];

const sortOptions = [
  { label: 'Most Popular', value: 'popular' },
  { label: 'Newest', value: 'newest' },
  { label: 'Alphabetical (A-Z)', value: 'asc' },
  { label: 'Alphabetical (Z-A)', value: 'desc' },
];

export function ModelsPage() {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [activeSort, setActiveSort] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
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

  const filteredModels = popularModels.filter(model => {
    // Apply search filter
    if (searchQuery && !model.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !model.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Apply category filter
    if (selectedCategory && model.category !== selectedCategory) {
      return false;
    }
    
    return true;
  });

  // Sort models
  const sortedModels = [...filteredModels].sort((a, b) => {
    switch (activeSort) {
      case 'newest':
        return Math.random() - 0.5; // Simulated for demo
      case 'asc':
        return a.name.localeCompare(b.name);
      case 'desc':
        return b.name.localeCompare(a.name);
      case 'popular':
      default:
        return parseInt(b.downloads.replace('M', '')) - parseInt(a.downloads.replace('M', ''));
    }
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
            Explore AI <span className="text-primary-500">Models</span>
          </h1>
          <p className="mt-4 text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            Discover thousands of state-of-the-art machine learning models for various tasks.
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
              placeholder="Search models..."
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
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filter</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              
              {/* Filter dropdown */}
              {showFilterMenu && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-secondary-800 ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="px-4 py-2 text-sm font-medium text-secondary-900 dark:text-white">
                      Model Type
                    </div>
                    {categories.slice(0, 5).map((category) => (
                      <button
                        key={category}
                        className={cn(
                          "block px-4 py-2 text-sm w-full text-left",
                          selectedCategory === category
                            ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
                            : "text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700"
                        )}
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <Button 
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setShowSortMenu(!showSortMenu)}
              >
                {activeSort === 'asc' ? (
                  <SortAsc className="h-4 w-4" />
                ) : activeSort === 'desc' ? (
                  <SortDesc className="h-4 w-4" />
                ) : (
                  <span>Sort</span>
                )}
                <ChevronDown className="h-4 w-4" />
              </Button>
              
              {/* Sort dropdown */}
              {showSortMenu && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-secondary-800 ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        className={cn(
                          "block px-4 py-2 text-sm w-full text-left",
                          activeSort === option.value
                            ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
                            : "text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700"
                        )}
                        onClick={() => {
                          setActiveSort(option.value);
                          setShowSortMenu(false);
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
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

        {/* Popular models */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Popular Models</h2>
          <p className="text-sm text-secondary-500 dark:text-secondary-400">
            Showing {sortedModels.length} models
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sortedModels.length > 0 ? (
            sortedModels.map((model) => (
              <motion.div key={model.name} variants={itemVariants}>
                <Card className="hover:border-primary-400 dark:hover:border-primary-500 transition-all h-full">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          {model.name}
                          {model.isFeatured && (
                            <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                              <Sparkles className="h-3 w-3 mr-1" />
                              Featured
                            </span>
                          )}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">By {model.author} • {model.downloads} downloads</CardDescription>
                      </div>
                      <span className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        model.category === "Text Generation" && "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
                        model.category === "Image Generation" && "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
                        model.category === "Speech Recognition" && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
                        model.category === "Text Understanding" && "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                      )}>
                        {model.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                      {model.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full mt-2 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                      icon={<ArrowUpRight className="ml-2 h-4 w-4" />}
                    >
                      View Model
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 py-12 text-center">
              <p className="text-lg text-secondary-600 dark:text-secondary-400">
                No models found matching your criteria. Try adjusting your filters.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
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
            Load more models
          </Button>
        </div>
      </div>
    </div>
  );
}
