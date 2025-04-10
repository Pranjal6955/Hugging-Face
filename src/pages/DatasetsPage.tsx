import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Search, Download, ArrowUpRight, Upload, Plus, ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const popularDatasets = [
  { 
    name: 'MNIST', 
    category: 'Computer Vision', 
    size: '11.06 MB',
    downloads: '3.8M',
    description: 'Database of handwritten digits with 60,000 training examples and 10,000 test examples'
  },
  { 
    name: 'Common Voice', 
    category: 'Audio', 
    size: '76.2 GB',
    downloads: '1.2M',
    description: 'Mozilla\'s initiative to help teach machines how real people speak'
  },
  { 
    name: 'SQuAD', 
    category: 'Natural Language Processing', 
    size: '35.5 MB',
    downloads: '1.5M',
    description: 'Stanford Question Answering Dataset with questions posed on a set of Wikipedia articles'
  },
  { 
    name: 'MS COCO', 
    category: 'Computer Vision', 
    size: '25.2 GB',
    downloads: '2.1M',
    description: 'Large-scale object detection, segmentation, and captioning dataset'
  },
  { 
    name: 'ImageNet', 
    category: 'Computer Vision', 
    size: '155 GB',
    downloads: '2.7M',
    description: 'Image database organized according to the WordNet hierarchy'
  },
  { 
    name: 'GLUE', 
    category: 'Natural Language Processing', 
    size: '358 MB',
    downloads: '1.1M',
    description: 'General Language Understanding Evaluation benchmark for natural language understanding'
  },
  { 
    name: 'AudioSet', 
    category: 'Audio', 
    size: '2.3 TB',
    downloads: '890K',
    description: 'Large-scale dataset of manually annotated audio events'
  },
  { 
    name: 'QA2D', 
    category: 'Natural Language Processing', 
    size: '42.5 MB',
    downloads: '650K',
    description: 'Dataset for Question Answering to Declarative Sentence Generation'
  },
];

const categories = [
  'Natural Language Processing',
  'Computer Vision',
  'Audio',
  'Multimodal',
  'Tabular',
  'Time Series',
  'Reinforcement Learning',
  'Other'
];

export function DatasetsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  
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

  const filteredDatasets = popularDatasets.filter(dataset => {
    // Apply search filter
    if (searchQuery && !dataset.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !dataset.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Apply category filter
    if (selectedCategory && dataset.category !== selectedCategory) {
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
            Explore <span className="text-primary-500">Datasets</span>
          </h1>
          <p className="mt-4 text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            Find and share machine learning datasets with the community.
          </p>
        </motion.div>

        {/* Search and upload button */}
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
              placeholder="Search datasets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button 
            variant="primary" 
            className="group flex items-center gap-2"
            onClick={() => setUploadModalOpen(true)}
          >
            <Upload className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            <span>Upload Dataset</span>
          </Button>
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

        {/* Popular datasets */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Popular Datasets</h2>
          <p className="text-sm text-secondary-500 dark:text-secondary-400">
            Showing {filteredDatasets.length} datasets
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredDatasets.length > 0 ? (
            filteredDatasets.map((dataset) => (
              <motion.div key={dataset.name} variants={itemVariants}>
                <Card className="hover:border-primary-400 dark:hover:border-primary-500 transition-all h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-secondary-900 dark:text-white">{dataset.name}</h3>
                        <span className={cn(
                          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2",
                          dataset.category === "Natural Language Processing" && "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
                          dataset.category === "Computer Vision" && "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
                          dataset.category === "Audio" && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        )}>
                          {dataset.category}
                        </span>
                      </div>
                      <div className="text-sm text-secondary-500 dark:text-secondary-400 flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        {dataset.downloads}
                      </div>
                    </div>
                    
                    <p className="text-secondary-600 dark:text-secondary-300 my-4">
                      {dataset.description}
                    </p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-sm text-secondary-500 dark:text-secondary-400">
                        Size: {dataset.size}
                      </div>
                      <Button 
                        variant="outline"
                        icon={<ArrowUpRight className="ml-2 h-4 w-4" />}
                        size="sm"
                        className="hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400 transition-colors"
                      >
                        Explore
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 py-12 text-center">
              <p className="text-lg text-secondary-600 dark:text-secondary-400">
                No datasets found matching your criteria. Try adjusting your filters.
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

        {/* Add Dataset Card */}
        <motion.div
          variants={itemVariants}
          className="mt-6"
        >
          <Card className="border-dashed border-secondary-300 dark:border-secondary-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all bg-secondary-50 dark:bg-secondary-800/50">
            <CardContent className="p-6 flex items-center justify-center">
              <Button
                variant="ghost"
                className="h-full w-full py-12 flex flex-col items-center gap-4 text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400"
                onClick={() => setUploadModalOpen(true)}
              >
                <Plus className="h-10 w-10" />
                <div className="text-center">
                  <p className="font-medium text-lg">Add Your Dataset</p>
                  <p className="text-secondary-500 dark:text-secondary-400 mt-2">
                    Share your dataset with the community
                  </p>
                </div>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary-500 to-yellow-500 hover:from-primary-600 hover:to-yellow-600 text-white"
          >
            View all datasets
          </Button>
        </div>

        {/* Upload Modal (simplified) */}
        {uploadModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setUploadModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-secondary-800 rounded-lg shadow-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-medium text-secondary-900 dark:text-white">
                  Upload Dataset
                </h3>
                <button 
                  className="text-secondary-500 hover:text-secondary-800 dark:text-secondary-400 dark:hover:text-white"
                  onClick={() => setUploadModalOpen(false)}
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <p className="text-secondary-600 dark:text-secondary-300">
                  Please provide information about your dataset.
                </p>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                    Dataset Name
                  </label>
                  <input type="text" className="input w-full" placeholder="My Dataset" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                    Category
                  </label>
                  <div className="relative">
                    <select className="input w-full appearance-none pr-10">
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-500 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                    Description
                  </label>
                  <textarea className="input w-full min-h-[100px]" placeholder="Describe your dataset..."></textarea>
                </div>
                
                <div className="mt-5 flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setUploadModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary">
                    Continue
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
