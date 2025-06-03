'use client';

import { useState } from 'react';
import { Search, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import EmojiCard from '@/components/EmojiCard';
import Footer from '@/components/Footer';
import { tikTokEmojis, getEmojisByCategory, getHiddenEmojis, getStandardEmojis, categories } from '@/data/emojis';
import Link from 'next/link';
import Image from 'next/image';

export default function AllEmojisPage() {
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
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                All TikTok Emojis Collection
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore our complete collection of all TikTok emojis including {specialEmojisCount} secret special emojis! 
                Browse through {tikTokEmojis.length} carefully curated TikTok emojis, 
                filter by categories, and find the perfect emoji for your content.
              </p>
              
              {/* Special Emojis Info */}
              <Alert className="max-w-2xl mx-auto">
                <Eye className="h-4 w-4" />
                <AlertDescription>
                  <strong>New!</strong> Discover {specialEmojisCount} secret TikTok emojis that only work with special codes. 
                  Use the &quot;Special Emojis&quot; filter to explore these exclusive symbols!
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
                      placeholder="Search TikTok emojis..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="pl-10 pr-4 py-3 text-lg"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleCategoryFilter('all')}
                    className="text-xs"
                  >
                    All Categories
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => handleCategoryFilter(category.id)}
                      className="text-xs capitalize"
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

        {/* Emojis Grid Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Header */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedCategory === 'all' 
                  ? `${showSpecial === 'special' ? 'Special' : showSpecial === 'standard' ? 'Standard' : 'All'} TikTok Emojis`
                  : `${categories.find(c => c.id === selectedCategory)?.name} ${showSpecial === 'special' ? 'Special' : showSpecial === 'standard' ? 'Standard' : ''} TikTok Emojis`}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Showing {filteredEmojis.length} of {tikTokEmojis.length} TikTok emojis
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {/* Category specific info */}
            {selectedCategory !== 'all' && (
              <div className="mb-8 max-w-3xl mx-auto text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  {showSpecial === 'special' && (
                    'These special TikTok emojis use secret codes. Type the exact code with square brackets in TikTok to use them.'
                  )}
                </p>
              </div>
            )}

            {/* Special Emojis Instructions */}
            {showSpecial === 'special' && (
              <Alert className="mb-8">
                <Eye className="h-4 w-4" />
                <AlertDescription>
                  <strong>How to use special emojis:</strong> These secret emojis only work on TikTok! 
                  Copy the code (like [smile]) and type it exactly with square brackets in your TikTok comments or captions.
                </AlertDescription>
              </Alert>
            )}

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
                }}>
                  Show All TikTok Emojis
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* About All TikTok Emojis Section */}
        <section className="py-12 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Complete TikTok Emojis Database
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="text-lg mb-6">
                  Our comprehensive collection features all TikTok emojis that content creators need, including {specialEmojisCount} exclusive
                  special emojis that most users don&apos;t know about! This all TikTok emojis library includes both standard Unicode emojis
                  and special TikTok-exclusive emojis with secret codes, making it the ultimate resource for TikTok content creation.
                </p>
                
                <p className="mb-6">
                  Whether you&apos;re looking for standard emojis or special TikTok emojis with exclusive codes, our collection has everything
                  you need to enhance your TikTok content. Each emoji includes detailed information, usage examples, and best practices
                  to help you use TikTok emojis effectively in your videos and posts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                TikTok Emojis by Category
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Browse our organized collection of TikTok emojis by emotional categories
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => {
                const categoryEmojis = getEmojisByCategory(category.id);
                const categorySpecialEmojis = categoryEmojis.filter(e => e.hidden);
                
                return (
                  <Link key={category.id} href={`/emojis/category/${category.id}-tiktok-emoji`}>
                    <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer h-full">
                      <CardHeader className="text-center pb-2">
                        <div className="mb-2">
                          {category.id === 'happy' && (
                            <Image src="/emojis/happy.png" alt="Happy" width={50} height={50} className="mx-auto" />
                          )}
                          {category.id === 'proud' && (
                            <Image src="/emojis/proud.png" alt="Proud" width={50} height={50} className="mx-auto" />
                          )}
                          {category.id === 'smug' && (
                            <Image src="/emojis/wicked.png" alt="Smug" width={50} height={50} className="mx-auto" />
                          )}
                          {category.id === 'sad' && (
                            <Image src="/emojis/cry.png" alt="Sad" width={50} height={50} className="mx-auto" />
                          )}
                          {category.id === 'surprised' && (
                            <Image src="/emojis/wow.png" alt="Surprised" width={50} height={50} className="mx-auto" />
                          )}
                          {category.id === 'angry' && (
                            <Image src="/emojis/angry.png" alt="Angry" width={50} height={50} className="mx-auto" />
                          )}
                          {category.id === 'cute' && (
                            <Image src="/emojis/cute.png" alt="Cute" width={50} height={50} className="mx-auto" />
                          )}
                          {category.id === 'other' && (
                            <Image src="/emojis/thinking.png" alt="Other" width={50} height={50} className="mx-auto" />
                          )}
                        </div>
                        <CardTitle className="text-lg capitalize">{category.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center pt-0">
                        <div className="space-y-2 flex justify-center items-center">
                          <Badge variant="outline" className="text-xs mb-0">
                            {categoryEmojis.length} Total
                          </Badge>
                          {categorySpecialEmojis.length > 0 && (
                            <Badge variant="secondary" className="text-xs ml-2">
                              <Eye className="mr-1 h-3 w-3" />
                              {categorySpecialEmojis.length} special
                            </Badge>
                          )}
                        </div>
                        {/* <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                          Special TikTok Emojis ({specialEmojisCount})
                        </p> */}
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 