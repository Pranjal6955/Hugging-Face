import React from 'react';

const posts = [
  {
    title: 'Introducing New Language Models',
    excerpt: 'Discover our latest advances in natural language processing and how they can benefit your projects.',
    author: 'Sarah Johnson',
    date: '2024-03-16',
    imageUrl: 'https://images.unsplash.com/photo-1526378800651-c1c6b5b27aea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Computer Vision Breakthroughs',
    excerpt: 'Learn about the latest developments in computer vision and image recognition technology.',
    author: 'Michael Chen',
    date: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'AI for Scientific Research',
    excerpt: 'How machine learning is accelerating scientific discoveries and research breakthroughs.',
    author: 'Dr. Emily Williams',
    date: '2024-03-14',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

export function Posts() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Latest Updates</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Stay up to date with the latest developments in AI and machine learning.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}