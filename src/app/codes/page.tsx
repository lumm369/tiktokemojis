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

export default function CodesPage() {
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
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
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
                TikTok Emoji Codes
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Complete collection of TikTok emoji codes for developers and content creators. 
                Copy and paste TikTok emoji codes for your applications, websites, and platforms.
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
                    className="pl-10 pr-4 py-3 text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emoji Codes List */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                TikTok Emoji Codes Directory
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {searchQuery 
                  ? `Found ${filteredEmojis.length} TikTok emoji codes matching "${searchQuery}"`
                  : `Browse all ${tikTokEmojis.length} TikTok emoji codes`}
              </p>
            </div>

            {filteredEmojis.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredEmojis.map((emoji) => (
                  <Card key={emoji.id} className="hover:shadow-md transition-shadow">
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
                                className="h-8 px-2 cursor-pointer"
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
                }}>
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