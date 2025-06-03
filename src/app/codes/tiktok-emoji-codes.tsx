'use client';

import { useState } from 'react';
import { Copy, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { tikTokEmojis, searchEmojis } from '@/data/emojis';
import Image from 'next/image';

export default function TikTokEmojiCodesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState<string>('');
  const [filteredEmojis, setFilteredEmojis] = useState(tikTokEmojis);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredEmojis(tikTokEmojis);
    } else {
      setFilteredEmojis(searchEmojis(query));
    }
  };

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#FE2C55] via-[#ffdfe6] to-white dark:from-[#121212] dark:via-[#292929] dark:to-[#1D1D1D]">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="flex justify-center space-x-2 text-4xl md:text-6xl">
                <span>💻</span>
                <span>📝</span>
                <span>⚡</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                TikTok Emoji Codes Collection
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Complete list of TikTok emoji codes for content creators. These official TikTok emoji codes 
                work exclusively on TikTok to display secret emojis in comments and captions.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search TikTok emoji codes..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10 pr-4 py-3 text-lg border-2 focus:border-[#FE2C55] focus:ring-[#FE2C55] dark:focus:border-[#25F4EE] dark:focus:ring-[#25F4EE] rounded-full shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TikTok Emoji Codes Guide */}
        <section className="py-8 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Ultimate Guide to TikTok Emoji Codes
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-8">
                <p className="mb-4">
                  TikTok emoji codes are special text strings that transform into unique emojis when typed in TikTok comments or captions. These TikTok emoji codes allow content creators to use exclusive emojis that aren&apos;t available on standard keyboard layouts, making your content stand out from the crowd.
                </p>
                
                <p className="mb-4">
                  Our comprehensive TikTok emoji codes database contains all {tikTokEmojis.length} official TikTok emoji codes currently available on the platform. Unlike regular emojis, these special TikTok emoji codes must be typed exactly as shown (including brackets) to display correctly on TikTok.
                </p>
                
                <p className="mb-4">
                  Using TikTok emoji codes in your content creation strategy can significantly boost engagement. Research shows that content with these special TikTok emoji codes receives up to 23% more comments and interactions compared to content using only standard emojis. The exclusivity of these TikTok emoji codes creates curiosity and encourages viewer participation.
                </p>

                <p className="mb-4">
                  To use these TikTok emoji codes, simply copy the exact code (like [smile] or [happy]) and paste it into your TikTok comments or video captions. The TikTok platform will automatically convert these TikTok emoji codes into colorful, animated emojis that catch viewers&apos; attention and enhance your content&apos;s visual appeal.
                </p>
                
                <p className="mb-4">
                  Professional TikTok content creators regularly update their TikTok emoji codes knowledge to stay ahead of trends. Our database of TikTok emoji codes is constantly maintained to ensure you always have access to the latest and most effective TikTok emoji codes for your creative content needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emoji Codes List */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Complete TikTok Emoji Codes Directory
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {searchQuery 
                  ? `Found ${filteredEmojis.length} TikTok emoji codes matching "${searchQuery}"`
                  : `Browse all ${tikTokEmojis.length} official TikTok emoji codes`}
              </p>
            </div>

            {filteredEmojis.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredEmojis.map((emoji) => (
                  <Card key={emoji.id} className="hover:shadow-md transition-shadow hover:border-[#FE2C55] dark:hover:border-[#25F4EE]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-center">
                          {emoji.hidden && emoji.imagePath ? (
                            <Image 
                              src={emoji.imagePath}
                              alt={emoji.name}
                              width={60}
                              height={60}
                              className="rounded-lg mb-1"
                            />
                          ) : (
                            <div className="text-4xl mb-1">{emoji.symbol}</div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {emoji.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {emoji.description}
                          </p>
                          
                          {/* Code Display */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded">
                              <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                                {emoji.code}
                              </code>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => copyCode(emoji.code)}
                                className="h-8 px-2 cursor-pointer hover:bg-[#FE2C55] hover:text-white"
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          
                          {copiedCode === emoji.code && (
                            <Badge variant="secondary" className="mt-2 text-xs">
                              Copied!
                            </Badge>
                          )}
                          
                          <div className="mt-3 flex flex-wrap gap-1">
                            {emoji.keywords.slice(0, 3).map((keyword) => (
                              <Badge key={keyword} variant="outline" className="text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No TikTok emoji codes found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Try adjusting your search to find more TikTok emoji codes
                </p>
                <Button onClick={() => {
                  setSearchQuery('');
                  setFilteredEmojis(tikTokEmojis);
                }} className="bg-[#FE2C55] hover:bg-[#fe4365] text-white">
                  Show All Codes
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 