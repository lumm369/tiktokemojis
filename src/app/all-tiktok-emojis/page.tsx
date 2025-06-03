'use client';

import { useState } from 'react';
import { Search, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/Header';
import EmojiCard from '@/components/EmojiCard';
import Footer from '@/components/Footer';
import { tikTokEmojis, getHiddenEmojis, getStandardEmojis, categories } from '@/data/emojis';
import Image from 'next/image';

export default function AllTikTokEmojisPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSpecial, setShowSpecial] = useState<'all' | 'standard' | 'special'>('all');
  const [filteredEmojis, setFilteredEmojis] = useState(tikTokEmojis);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterEmojis(query, selectedCategory, showSpecial);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterEmojis(searchQuery, category, showSpecial);
  };

  // const handleSpecialFilter = (type: 'all' | 'standard' | 'special') => {
  //   setShowSpecial(type);
  //   filterEmojis(searchQuery, selectedCategory, type);
  // };

  const filterEmojis = (query: string, category: string, specialType: 'all' | 'standard' | 'special') => {
    let result = tikTokEmojis;

    // Filter by special type first
    if (specialType === 'special') {
      result = getHiddenEmojis();
    } else if (specialType === 'standard') {
      result = getStandardEmojis();
    }

    // Then filter by category
    if (category !== 'all') {
      result = result.filter(emoji => emoji.category === category);
    }

    // Finally filter by search query
    if (query.trim() !== '') {
      const lowercaseQuery = query.toLowerCase();
      result = result.filter(emoji => 
        emoji.name.toLowerCase().includes(lowercaseQuery) ||
        emoji.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseQuery)) ||
        emoji.description.toLowerCase().includes(lowercaseQuery)
      );
    }

    setFilteredEmojis(result);
  };

  const specialEmojisCount = getHiddenEmojis().length;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#FE2C55] via-[#ffdfe6] to-white dark:from-[#121212] dark:via-[#292929] dark:to-[#1D1D1D]">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                All TikTok Emojis Collection
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore our complete collection of all TikTok emojis including {specialEmojisCount} secret emojis! 
                Browse through {tikTokEmojis.length} carefully curated all TikTok emojis, 
                filter by categories, and find the perfect emoji for your content.
              </p>
              
              {/* Special Emojis Info */}
              <Alert className="max-w-2xl mx-auto">
                <Eye className="h-4 w-4" />
                <AlertDescription>
                  <strong>New!</strong> Discover all TikTok emojis in one place! Our collection includes {specialEmojisCount} secret TikTok emojis 
                  that only work with special codes. Use the filters below to explore all TikTok emojis by category.
                </AlertDescription>
              </Alert>
              
              {/* Search and Filter Controls */}
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Search all TikTok emojis..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="pl-10 pr-4 py-3 text-lg border-2 focus:border-[#FE2C55] focus:ring-[#FE2C55] dark:focus:border-[#25F4EE] dark:focus:ring-[#25F4EE] rounded-full shadow-md"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleCategoryFilter('all')}
                    className="text-xs cursor-pointer"
                  >
                    All Categories
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => handleCategoryFilter(category.id)}
                      className="text-xs capitalize cursor-pointer"
                    >
                      <span className="mr-1">
                        {category.id === 'happy' && (
                          <Image src="/emojis/happy.png" alt="Happy" width={16} height={16} className="inline-block" />
                        )}
                        {category.id === 'proud' && (
                          <Image src="/emojis/proud.png" alt="Proud" width={16} height={16} className="inline-block" />
                        )}
                        {category.id === 'smug' && (
                          <Image src="/emojis/wicked.png" alt="Smug" width={16} height={16} className="inline-block" />
                        )}
                        {category.id === 'sad' && (
                          <Image src="/emojis/cry.png" alt="Sad" width={16} height={16} className="inline-block" />
                        )}
                        {category.id === 'surprised' && (
                          <Image src="/emojis/wow.png" alt="Surprised" width={16} height={16} className="inline-block" />
                        )}
                        {category.id === 'angry' && (
                          <Image src="/emojis/angry.png" alt="Angry" width={16} height={16} className="inline-block" />
                        )}
                        {category.id === 'cute' && (
                          <Image src="/emojis/cute.png" alt="Cute" width={16} height={16} className="inline-block" />
                        )}
                        {category.id === 'other' && (
                          <Image src="/emojis/thinking.png" alt="Other" width={16} height={16} className="inline-block" />
                        )}
                      </span>
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Image Section */}
        <section className="py-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                TikTok Emojis Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Visual reference of all {tikTokEmojis.length} TikTok emojis in our collection
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/emojis/allEmojis.png" 
                  alt="All TikTok Emojis Overview" 
                  width={800} 
                  height={840} 
                  className="object-contain" 
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Click on individual emojis below for details and easy copying
              </p>
            </div>
          </div>
        </section>

        {/* Emojis Grid Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Header */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedCategory === 'all' 
                  ? `${showSpecial === 'special' ? 'Secret' : showSpecial === 'standard' ? 'Standard' : 'All'} TikTok Emojis`
                  : `${categories.find(c => c.id === selectedCategory)?.name} ${showSpecial === 'special' ? 'Secret' : showSpecial === 'standard' ? 'Standard' : ''} TikTok Emojis`}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Showing {filteredEmojis.length} of {tikTokEmojis.length} TikTok emojis
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {/* Emojis Grid */}
            {filteredEmojis.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredEmojis.map((emoji) => (
                  <EmojiCard key={emoji.id} emoji={emoji} showCategory={selectedCategory === 'all'} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No TikTok emojis found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Try adjusting your search or filter to find more TikTok emojis
                </p>
                <Button onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setShowSpecial('all');
                  setFilteredEmojis(tikTokEmojis);
                }} className="bg-[#FE2C55] hover:bg-[#fe4365] text-white">
                  Show All TikTok Emojis
                </Button>
              </div>
            )}
          </div>
        </section>


        {/* About All TikTok Emojis */}
        <section className="py-8 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Complete Guide to All TikTok Emojis
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-8">
                <p className="mb-4">
                  Welcome to the most comprehensive collection of all TikTok emojis available online. Our complete database includes every TikTok emoji currently supported on the platform, from standard expressions to exclusive secret codes. Whether you&apos;re a casual user or professional content creator, our all TikTok emojis library has everything you need to enhance your TikTok experience.
                </p>
                
                <p className="mb-4">
                  What makes our all TikTok emojis collection unique is its completeness and organization. We&apos;ve meticulously categorized all TikTok emojis by emotion and usage, making it easy to find exactly what you need for any content situation. Our collection of all TikTok emojis is regularly updated to include new additions as they appear on the platform.
                </p>
                
                <p className="mb-4">
                  Content creators who use all TikTok emojis effectively in their videos typically see higher engagement rates. The strategic placement of all TikTok emojis in captions and comments can increase viewer interaction by up to 30%. Our collection provides detailed information on each emoji, helping you select the perfect options from all TikTok emojis for your specific content needs.
                </p>

                <p className="mb-4">
                  Our collection features all TikTok emojis with detailed usage guides, meaning you&apos;ll never struggle to express yourself on the platform again. Whether you need happy, sad, surprised, or any other emotion, our library of all TikTok emojis has you covered with multiple options for every situation and content style.
                </p>
                
                <p className="mb-4">
                  The benefit of having access to all TikTok emojis in one organized location cannot be overstated. Instead of trying to remember codes or search through various sources, our comprehensive collection of all TikTok emojis gives you instant access to every available option, saving you time and enhancing your content creation workflow.
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