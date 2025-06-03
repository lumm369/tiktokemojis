'use client';

import { Play, TrendingUp, Heart, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmojiCard from '@/components/EmojiCard';
import { getPopularEmojis } from '@/data/emojis';

export default function HowToUseEmojiPage() {
  const popularEmojis = getPopularEmojis();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#FE2C55] via-[#ffdfe6] to-white dark:from-[#121212] dark:via-[#292929] dark:to-[#1D1D1D]">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                How to Use TikTok Emojis
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Complete guide on how to use TikTok emojis effectively in your content. 
                Learn the best practices, trends, and strategies for using TikTok emojis to boost engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-12 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Start: How to Use TikTok Emojis
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Get started with TikTok emojis in 4 simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl mb-2">1️⃣</div>
                  <CardTitle className="text-lg">Choose Your Emoji</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Browse our TikTok emojis collection and select emojis that match your content mood and message.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl mb-2">2️⃣</div>
                  <CardTitle className="text-lg">Copy & Paste</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Click to copy any TikTok emoji and paste it directly into your captions, comments, or bio.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl mb-2">3️⃣</div>
                  <CardTitle className="text-lg">Strategic Placement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Place TikTok emojis at the beginning, middle, or end of your captions for maximum impact.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl mb-2">4️⃣</div>
                  <CardTitle className="text-lg">Track Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Monitor your engagement rates to see which TikTok emojis work best for your audience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Guide */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Complete Guide: How to Use TikTok Emojis Effectively
              </h2>
              
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Play className="h-6 w-6 text-primary" />
                      <span>Using TikTok Emojis in Video Captions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Captions are the first thing viewers see. Here&apos;s how to use TikTok emojis to make your captions irresistible:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Hook them early:</strong> Start captions with eye-catching TikTok emojis like 😱 or 🔥</li>
                      <li><strong>Match the mood:</strong> Use proud TikTok emojis (😤) for confident content, crying emojis (😭) for emotional videos</li>
                      <li><strong>Break up text:</strong> Use TikTok emojis to separate different thoughts or sections</li>
                      <li><strong>Call to action:</strong> End with engaging TikTok emojis like ⬇️ or 💬 to encourage interaction</li>
                    </ul>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm font-mono">
                        Example: &quot;😱 This hack changed everything! 💡 Try this at home and let me know how it goes! 😤💪 #LifeHack&quot;
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Heart className="h-6 w-6 text-primary" />
                      <span>TikTok Emojis for Comments and Engagement</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Comments are crucial for engagement. Use TikTok emojis to boost interaction:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>React genuinely:</strong> Use appropriate TikTok emojis that match your real reaction</li>
                      <li><strong>Ask questions:</strong> &quot;What do you think? 🤔&quot; or &quot;Anyone else relate? 😭&quot;</li>
                      <li><strong>Show appreciation:</strong> Thank followers with heart emojis and positive TikTok emojis</li>
                      <li><strong>Create conversations:</strong> Use TikTok emojis to spark discussions in comments</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      <span>Trending TikTok Emojis Strategy</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Stay ahead of trends by using the most popular TikTok emojis:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Most Trending TikTok Emojis:</h4>
                        <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                          <li>😤 - Proud/Confident content</li>
                          <li>😭 - Emotional/Relatable videos</li>
                          <li>😏 - Mysterious/Smug content</li>
                          <li>🔥 - Hot/Trending content</li>
                          <li>💯 - Perfect/Amazing content</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Combination Tips:</h4>
                        <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                          <li>😤💪 - Strong confidence</li>
                          <li>😭🥺 - Extra emotional impact</li>
                          <li>😏✨ - Mysterious elegance</li>
                          <li>🔥💯 - Ultimate trending</li>
                          <li>😱😍 - Shocking amazement</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Lightbulb className="h-6 w-6 text-primary" />
                      <span>Advanced TikTok Emojis Techniques</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Master these advanced techniques for using TikTok emojis like a pro:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Emoji Storytelling</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Use sequences of TikTok emojis to tell a story or show progression:
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                          <code className="text-sm">😴 → ☕ → 😤 → 💪 → 🏆 (Morning routine to success)</code>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Emotional Progression</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Show character development or emotional journey:
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                          <code className="text-sm">😟 → 😤 → 😊 → 🥳 (Overcoming challenges)</code>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Emphasis Patterns</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Use repeating TikTok emojis for emphasis:
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                          <code className="text-sm">🔥🔥🔥 THIS IS FIRE 🔥🔥🔥</code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Most Used Examples */}
        <section className="py-12 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Most Used TikTok Emojis in Practice
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See how top creators use these TikTok emojis in their content
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {popularEmojis.slice(0, 10).map((emoji) => (
                <div key={emoji.id} className="text-center">
                  <EmojiCard emoji={emoji} showCategory={false} />
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <strong>Popular Usage:</strong> {emoji.description.split('.')[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="py-12 bg-gradient-to-b from-[#ffdfe6]/50 to-white/50 dark:from-[#292929]/50 dark:to-[#1D1D1D]/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                TikTok Emojis Best Practices
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-8">
                <p className="mb-4">
                  Using TikTok emojis effectively can significantly boost your content performance. Here are the top best practices recommended by professional content creators:
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">1. Context Matters</h3>
                <p className="mb-4">
                  Always ensure your TikTok emojis match the context of your content. Mismatched TikTok emojis can confuse viewers and reduce engagement. For example, using the crying TikTok emoji ([cry]) for happy content can send mixed signals. Take time to select TikTok emojis that reinforce your message rather than contradict it.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2. Don&apos;t Overdo It</h3>
                <p className="mb-4">
                  While TikTok emojis enhance content, overusing them can make your captions look cluttered and unprofessional. Limit yourself to 3-5 strategically placed TikTok emojis per caption for maximum impact. Quality over quantity is the key when using TikTok emojis in your content strategy.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">3. Create Signature Combinations</h3>
                <p className="mb-4">
                  Develop your own signature TikTok emojis combinations that become associated with your brand. Consistent use of specific TikTok emojis patterns helps viewers instantly recognize your content and builds brand identity. For example, using [wicked]✨ before important announcements becomes your unique signifier.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">4. Test and Analyze</h3>
                <p className="mb-4">
                  Regularly analyze which TikTok emojis generate the most engagement on your content. Testing different TikTok emojis combinations and tracking their performance helps optimize your strategy. Many successful creators maintain spreadsheets tracking which TikTok emojis correlate with higher view counts and engagement rates.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5. Stay Updated with Trends</h3>
                <p className="mb-4">
                  TikTok emoji trends evolve quickly. What&apos;s popular today might be outdated tomorrow. Regularly research trending TikTok emojis by observing what top creators in your niche are using. Staying current with TikTok emojis trends helps your content remain relevant and resonant with viewers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Section: Hidden TikTok Emojis Special Guide */}
        <section className="py-12 bg-white/80 dark:bg-gray-800/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Secret TikTok Emojis: Special Usage Guide
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="mb-4">
                  TikTok has a unique collection of hidden TikTok emojis that can only be activated using special codes. These secret TikTok emojis are invisible to most users, making them a powerful way to make your content stand out from the crowd. Our complete guide explains how to use these exclusive TikTok emojis to enhance your content strategy.
                </p>
                
                <p className="mb-4">
                  The hidden TikTok emojis system works differently from regular emojis. Instead of selecting them from a keyboard, you need to type specific codes in square brackets like [smile] or [happy]. When posted in TikTok comments or captions, these codes transform into colorful, animated TikTok emojis that catch viewers&apos; attention instantly.
                </p>
                
                <p className="mb-4">
                  What makes these secret TikTok emojis valuable is their exclusivity. Only knowledgeable creators who understand the TikTok emojis code system can use them, which immediately positions you as an insider. Using these hidden TikTok emojis signals to your audience that you&apos;re experienced and deeply embedded in TikTok culture.
                </p>
                
                <p className="mb-4">
                  The strategic advantage of secret TikTok emojis lies in their novelty. When viewers see these unique TikTok emojis in your content, they&apos;re likely to comment asking how you created them, instantly boosting your engagement metrics. This creates perfect opportunities to interact with your audience and build community around your content.
                </p>
                
                <p className="mb-4">
                  To master secret TikTok emojis, start by learning the most popular codes and practice using them contextually. Experiment with different TikTok emojis in various content types to discover which ones resonate most with your specific audience. Remember that the impact of these TikTok emojis comes from using them strategically rather than randomly.
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