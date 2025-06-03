'use client';

import { notFound } from 'next/navigation';
import { Search } from 'lucide-react';
import { useState, use } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmojiCard from '@/components/EmojiCard';
import { getEmojisByCategory, categories } from '@/data/emojis';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const [searchQuery, setSearchQuery] = useState('');
  const categoryData = categories.find(cat => cat.id === resolvedParams.category);
  
  if (!categoryData) {
    notFound();
  }

  const categoryEmojis = getEmojisByCategory(resolvedParams.category as never);
  const [filteredEmojis, setFilteredEmojis] = useState(categoryEmojis);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredEmojis(categoryEmojis);
    } else {
      const filtered = categoryEmojis.filter(emoji => 
        emoji.name.toLowerCase().includes(query.toLowerCase()) ||
        emoji.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase())) ||
        emoji.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredEmojis(filtered);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white capitalize">
                {categoryData.name} TikTok Emojis
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore our collection of {categoryData.name} TikTok emojis. Perfect for expressing {categoryData.name} emotions 
                in your TikTok videos, captions, and comments. Find the perfect {categoryData.name} emoji for your content.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder={`Search ${categoryData.name} TikTok emojis...`}
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10 pr-4 py-3 text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Header */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 capitalize">
                    {categoryData.name} TikTok Emojis Collection
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {searchQuery 
                      ? `Found ${filteredEmojis.length} ${categoryData.name} TikTok emojis matching "${searchQuery}"`
                      : `Showing ${filteredEmojis.length} ${categoryData.name} TikTok emojis`}
                  </p>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <Badge variant="secondary" className="text-sm">
                    {filteredEmojis.length} / {categoryEmojis.length} emojis
                  </Badge>
                </div>
              </div>
            </div>

            {/* Emojis Grid */}
            {filteredEmojis.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredEmojis.map((emoji) => (
                  <EmojiCard key={emoji.id} emoji={emoji} showCategory={false} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No {categoryData.name} TikTok emojis found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Try adjusting your search to find more {categoryData.name} TikTok emojis
                </p>
              </div>
            )}
          </div>
        </section>

        {/* About Category Section */}
        <section className="py-12 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center capitalize">
                How to Use {categoryData.name} TikTok Emojis
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="text-lg mb-6">
                  {categoryData.name} TikTok emojis are perfect for expressing {categoryData.name} emotions in your content. 
                  These {categoryData.name} emojis help you connect with your audience on an emotional level and 
                  increase engagement on your TikTok videos.
                </p>
                
                <p className="mb-6">
                  Our {categoryData.name} TikTok emojis collection includes the most popular and trending emojis 
                  that resonate with TikTok users. Use these {categoryData.name} emojis in your captions, comments, 
                  and video descriptions to enhance your message and boost viewer engagement.
                </p>
                
                <p className="mb-6">
                  Whether you&apos;re creating {categoryData.name} content or responding to your audience, 
                  these {categoryData.name} TikTok emojis provide the perfect visual expression for your message. 
                  Copy and paste any {categoryData.name} emoji instantly for immediate use in your TikTok content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 