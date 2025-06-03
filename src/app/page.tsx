'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, TrendingUp, Download, Copy, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/Header';
import EmojiCard from '@/components/EmojiCard';
import Footer from '@/components/Footer';
import { tikTokEmojis, getPopularEmojis, searchEmojis, categories } from '@/data/emojis';
import Link from 'next/link';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(tikTokEmojis);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults(tikTokEmojis);
    } else {
      setSearchResults(searchEmojis(query));
    }
  };

  const popularEmojis = getPopularEmojis();

  // Get some featured TikTok emojis for hero display
  const featuredEmojis = [
    tikTokEmojis.find(e => e.id === 'proud'), // proud
    tikTokEmojis.find(e => e.id === 'happy'), // happy
    tikTokEmojis.find(e => e.id === 'cry'), // cry
    tikTokEmojis.find(e => e.id === 'smile'), // smile
    tikTokEmojis.find(e => e.id === 'shocked'), // shocked
    tikTokEmojis.find(e => e.id === 'cute'), // cute
  ].filter(Boolean);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#FE2C55] via-[#ffdfe6] to-white dark:from-[#121212] dark:via-[#292929] dark:to-[#1D1D1D]">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="flex justify-center space-x-4 bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl shadow-lg">
                {featuredEmojis.map((emoji, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    {emoji?.imagePath ? (
                      <Image
                        src={emoji.imagePath}
                        alt={emoji.name}
                        width={60}
                        height={60}
                        className="rounded-lg"
                      />
                    ) : (
                      <div className="w-[60px] h-[60px] bg-gray-200 rounded-lg flex items-center justify-center text-xs font-mono">
                        {emoji?.code}
                      </div>
                    )}
                    <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                      {emoji?.code}
                    </span>
                  </div>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                TikTok Emojis Collection
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover 46 secret TikTok emojis! The ultimate collection of TikTok emojis with tiktok emoji codes for content creators and influencers.
              </p>
              
              {/* TikTok Emojis Alert */}
              <Alert className="max-w-2xl mx-auto">
                <Eye className="h-4 w-4" />
                <AlertDescription>
                  <strong>Secret Discovery!</strong> These TikTok emojis only work in TikTok - type codes like [smile] to display secret TikTok emojis!
                </AlertDescription>
              </Alert>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mt-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search TikTok emojis... (try 'smile', 'happy', 'wicked')"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10 pr-4 py-4 text-lg border-2 focus:border-[#FE2C55] focus:ring-[#FE2C55] dark:focus:border-[#25F4EE] dark:focus:ring-[#25F4EE] rounded-full shadow-md"
                  />
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex justify-center items-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{tikTokEmojis.length} TikTok Emojis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>{popularEmojis.length} Popular Emojis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Copy className="h-4 w-4" />
                  <span>One-Click Copy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Results - Moved here for better visibility */}
        {searchQuery && (
          <section className="py-8 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Search Results: &quot;{searchQuery}&quot;
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Found {searchResults.length} matching TikTok emojis
                </p>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {searchResults.map((emoji) => (
                    <EmojiCard key={emoji.id} emoji={emoji} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No matching TikTok emojis found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Try searching for &quot;smile&quot;, &quot;happy&quot;, or &quot;wicked&quot;
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Popular Emojis Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Most Popular TikTok Emojis
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                The most frequently used TikTok emojis with tiktok emoji codes by global content creators
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {popularEmojis.slice(0, 10).map((emoji) => (
                <EmojiCard key={emoji.id} emoji={emoji} />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/all-tiktok-emojis">
                <Button size="lg" className="text-lg px-8 cursor-pointer bg-[#FE2C55] hover:bg-[#fe4365] text-white tiktok-button-hover">
                  View All TikTok Emojis →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-white/70 dark:bg-[#121212]/70 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Browse TikTok Emojis by Category
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Find the perfect TikTok emojis based on mood and content style for your videos
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link key={category.id} href={`/emojis/category/${category.id}-tiktok-emoji`}>
                  <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="mb-3">
                        {category.id === 'proud' && (
                          <Image src="/emojis/proud.png" alt="Proud" width={50} height={50} className="mx-auto" />
                        )}
                        {category.id === 'happy' && (
                          <Image src="/emojis/happy.png" alt="Happy" width={50} height={50} className="mx-auto" />
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
                        {category.id === 'smug' && (
                          <Image src="/emojis/wicked.png" alt="Smug" width={50} height={50} className="mx-auto" />
                        )}
                        {category.id === 'other' && (
                          <Image src="/emojis/thinking.png" alt="Other" width={50} height={50} className="mx-auto" />
                        )}
                      </div>
                      <h3 className="font-semibold text-lg capitalize">{category.name} TikTok Emojis</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About TikTok Emojis Section */}
        <section className="py-12 bg-gradient-to-t from-white to-[#ffdfe6] dark:from-[#1D1D1D] dark:to-[#121212]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Complete Guide to TikTok Emojis
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="text-lg mb-6">
                  Welcome to the most comprehensive TikTok emojis collection on the internet! Our database contains {tikTokEmojis.length} carefully curated TikTok emojis with emojis codes. These hidden TikTok emojis can only be displayed by typing tiktok emoji codes in TikTok, making them the ultimate insider tool for content creators and enthusiasts.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">🔍 Discovering Secret TikTok Emojis</h3>
                <p className="mb-6">
                  These hidden TikTok emojis are a platform-secret feature that sets TikTok apart from other social media platforms. By typing specific codes like [smile], [happy], or [wicked] in comments or captions, you can display secret TikTok emojis that regular users can&apos;t access. Our TikTok emojis library includes expressions for every emotion from happy and proud to crying and surprised, with detailed usage instructions and best practice recommendations for each TikTok emoji.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">💡 Powerful Tools for Boosting Engagement</h3>
                <p className="mb-6">
                  These unique TikTok emojis make your content more engaging and help you stand out in the crowded TikTok landscape. Whether you want to express shy emotions, mischievous feelings, or delicious reactions, these hidden TikTok emojis help you connect with your audience in a more meaningful way. Professional content creators use these TikTok emojis to build stronger community connections and increase engagement rates.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">📚 Comprehensive Emoji Guide</h3>
                <p className="mb-6">
                  Our comprehensive TikTok emojis collection not only provides complete code lists but also includes detailed meanings, usage scenarios, and creative suggestions for each emoji. From contemplative moments to humorous content, every TikTok emoji serves a specific purpose in TikTok culture. Mastering these TikTok emojis will significantly enhance your content creation skills and help you become a recognized TikTok expert.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">🔐 Exclusive Community Experience</h3>
                <p className="mb-6">
                  The beauty of TikTok emojis lies in their exclusivity and community aspect. Unlike standard emojis available on all platforms, TikTok emojis create a sense of belonging among users who understand the secret system. This insider knowledge helps content creators build more authentic connections with their audience and demonstrates their deep understanding of TikTok culture and TikTok emojis usage.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">🔄 Continuously Updated Collection</h3>
                <p className="mb-6">
                  Our TikTok emojis database is constantly updated with new discoveries and trending codes. We monitor platform trends closely to ensure our TikTok emojis collection remains current and relevant for modern content creators. Each TikTok emoji in our collection has been verified to work across different devices and app versions, ensuring reliability for professional use in your videos and posts.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">🌎 Trusted by Global Creators</h3>
                <p className="mb-6">
                  Content creators worldwide rely on our platform for authentic TikTok emojis that enhance their storytelling and audience engagement. From micro-influencers to established creators, our collection serves millions of users who want to express themselves more creatively using TikTok emojis. The tiktok emoji codes we provide have been tested extensively to ensure they work reliably across all supported devices and regions.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">🧠 Emoji Psychology</h3>
                <p className="mb-6">
                  Understanding TikTok emojis psychology is crucial for effective content creation. Different symbols evoke different emotional responses from viewers, and knowing which TikTok emojis to use in specific contexts can dramatically improve your content performance. Our detailed guides help you choose the right TikTok emojis for maximum impact and audience connection.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">📈 Strategic Usage for Better Metrics</h3>
                <p className="mb-6">
                  The strategic use of TikTok emojis can transform your content strategy and boost engagement metrics significantly. Successful creators report increased likes, comments, and shares when incorporating our carefully selected TikTok emojis into their content. These secret symbols act as conversation starters and help create memorable moments that viewers associate with your brand.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">📊 Data-Driven Emoji Recommendations</h3>
                <p className="mb-6">
                  Our research team continuously analyzes trending patterns to identify which TikTok emojis perform best for different types of content. Whether you&apos;re creating educational videos, entertainment content, or promotional posts, we provide data-driven recommendations on which TikTok emojis will maximize your reach and engagement potential.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">🚀 The Future of Content Creation</h3>
                <p className="mb-6">
                  The future of content creation lies in understanding these secret symbols and their psychological impact on audiences. As social media evolves, creators who master the art of emoji communication will have a significant advantage in building engaged communities and driving meaningful interactions with their content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Our Collection?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                The ultimate platform for TikTok emojis with professional tools and features for content creators
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Copy className="h-6 w-6 text-primary" />
                    <span>One-Click Code Copy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Instantly copy any TikTok emoji code to your clipboard with a single click. 
                    Perfect for TikTok captions, comments, and video descriptions. Our TikTok emojis copy feature works seamlessly across all devices and browsers, making it easy to use TikTok emojis in your content creation workflow.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Download className="h-6 w-6 text-primary" />
                    <span>High-Quality PNG Downloads</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Download high-quality PNG versions of TikTok emojis for your videos, 
                    thumbnails, and social media content. All TikTok emojis are available in 128x128 resolution with crisp graphics, perfect for professional video editing and content creation with TikTok emojis.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <span>Trending Symbol Discovery</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Stay up-to-date with the most popular and trending TikTok emojis 
                    used by successful content creators worldwide. Our TikTok emojis collection is regularly updated with new trending TikTok emojis and codes discovered by the community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-12 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Master the Art of Emoji Usage
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Best Practices for Success</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Use hidden codes in video captions to increase engagement and reach</li>
                    <li>• Add secret symbols to comments for better interaction with your audience</li>
                    <li>• Choose symbols that match your content mood and theme perfectly</li>
                    <li>• Use trending codes for viral potential and algorithm boost</li>
                    <li>• Combine multiple symbols for enhanced storytelling experiences</li>
                    <li>• Test different codes to see which ones resonate with your audience</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Advanced Content Strategies</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Use emotional symbols to create deeper connections with viewers</li>
                    <li>• Include seasonal codes for timely content relevance and engagement</li>
                    <li>• Mix standard and hidden symbols for variety and visual appeal</li>
                    <li>• Study successful creators&apos; usage patterns for inspiration</li>
                    <li>• Create signature symbol combinations for brand recognition</li>
                    <li>• Monitor emoji performance in your analytics dashboard regularly</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link href="/how-to-use-tiktok-emojis">
                  <Button size="lg" variant="outline" className="text-lg px-8 cursor-pointer">
                    Complete Usage Guide →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
