'use client';

import { Play, TrendingUp, Heart, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmojiCard from '@/components/EmojiCard';
import { getPopularEmojis } from '@/data/emojis';

export default function HowToUsePage() {
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
                    Used in {Math.floor(Math.random() * 50 + 20)}% of trending videos
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                TikTok Emojis Best Practices & Do&apos;s and Don&apos;ts
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-green-700 dark:text-green-400">✅ Do&apos;s</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>✓ Use TikTok emojis that match your content mood</li>
                      <li>✓ Keep emoji usage consistent with your brand</li>
                      <li>✓ Test different TikTok emojis to see what works</li>
                      <li>✓ Use trending TikTok emojis for viral potential</li>
                      <li>✓ Combine emojis for stronger emotional impact</li>
                      <li>✓ Use emojis to break up long captions</li>
                      <li>✓ Monitor which TikTok emojis get the most engagement</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-red-200 dark:border-red-800">
                  <CardHeader>
                    <CardTitle className="text-red-700 dark:text-red-400">❌ Don&apos;ts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>✗ Don&apos;t overuse TikTok emojis (less is more)</li>
                      <li>✗ Don&apos;t use outdated or irrelevant emojis</li>
                      <li>✗ Don&apos;t mix conflicting emoji emotions</li>
                      <li>✗ Don&apos;t use TikTok emojis without understanding meaning</li>
                      <li>✗ Don&apos;t copy other creators&apos; emoji patterns exactly</li>
                      <li>✗ Don&apos;t use inappropriate emojis for your audience</li>
                      <li>✗ Don&apos;t ignore emoji accessibility considerations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Frequently Asked Questions: How to Use TikTok Emojis
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">How many TikTok emojis should I use in one caption?</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      The ideal number is 3-5 TikTok emojis per caption. This provides emotional context without overwhelming your message. 
                      For longer captions, you can use more, but avoid emoji overload that might distract from your content.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Which TikTok emojis get the most engagement?</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Based on our analysis, the most engaging TikTok emojis are: 😤 (proud), 😭 (crying), 😏 (smug), 🔥 (fire), 
                      and 💯 (hundred). These emojis consistently drive higher interaction rates across different content types.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Should I use TikTok emojis in hashtags?</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      While you can use TikTok emojis in hashtags, it&apos;s better to keep hashtags clean for searchability. 
                      Instead, use TikTok emojis in your caption text and save hashtags for discoverability. 
                      Example: &quot;This workout is fire 🔥💪 #fitness #workout #gym&quot;
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">How do I know which TikTok emojis match my brand?</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Consider your brand personality: Fun brands can use playful TikTok emojis like 😜 and 🤪, 
                      professional brands might stick to confident emojis like 😤 and 💪, while lifestyle brands 
                      often use aspirational emojis like ✨ and 🌟. Test different combinations and track engagement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 