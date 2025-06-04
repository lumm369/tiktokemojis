import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Target, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About TikTok Emojis
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We&apos;re passionate about helping content creators express themselves better 
                through the perfect TikTok emojis for every moment and mood.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-6 w-6 text-primary" />
                    <span>Our Mission</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    To provide the most comprehensive and user-friendly TikTok emojis collection 
                    that empowers content creators to enhance their videos, captions, and engagement 
                    with the perfect emoji for every situation.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <span>Our Vision</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    To become the go-to resource for TikTok creators worldwide, providing not just 
                    emojis but also insights, trends, and tools that help creators connect better 
                    with their audiences through visual expression.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              
              <p className="mb-6">
                TikTok Emojis was born from a simple observation: content creators were spending 
                too much time searching for the right emojis to express their ideas. We noticed 
                that while TikTok had become a global platform for creativity, finding and using 
                the perfect emojis was still a challenge.
              </p>
              
              <p className="mb-6">
                Our team of developers and content creators came together to solve this problem. 
                We analyzed trending content, studied emoji usage patterns, and gathered feedback 
                from creators to build a platform that truly serves the TikTok community.
              </p>
              
              <p className="mb-6">
                Today, TikTok Emojis serves thousands of content creators, from beginners making 
                their first videos to established influencers reaching millions of followers. 
                We&apos;re proud to be part of the creative process that brings joy, laughter, 
                and connection to people around the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Creator-Focused
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every feature is designed with content creators in mind, from easy copying 
                  to professional PNG downloads.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Lightning Fast
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get the emojis you need instantly. No waiting, no loading - 
                  just fast access to your perfect emoji.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🆓</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Always Free
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All our TikTok emojis and tools are completely free. 
                  No hidden costs, no premium features - just free tools for creators.
                </p>
              </div>
            </div>
            
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Community Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                    <p className="text-gray-600 dark:text-gray-400">Monthly Active Users</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                    <p className="text-gray-600 dark:text-gray-400">Emojis Copied</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                    <p className="text-gray-600 dark:text-gray-400">PNG Downloads</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What Makes Us Different
              </h2>
              
              <p className="mb-6">
                While there are many emoji websites out there, TikTok Emojis is specifically 
                designed for the TikTok ecosystem. We understand the unique needs of TikTok 
                creators and the trending patterns that drive engagement on the platform.
              </p>
              
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>TikTok-Specific Curation:</strong> Our emojis are selected based on TikTok trends and usage patterns</li>
                <li><strong>Creator Tools:</strong> Beyond just emojis, we provide tools like PNG downloads and code generators</li>
                <li><strong>Trend Analysis:</strong> We monitor TikTok trends to keep our collection relevant and up-to-date</li>
                <li><strong>User Experience:</strong> Fast, clean interface designed for quick access during content creation</li>
                <li><strong>Mobile-First:</strong> Optimized for creators who primarily work on mobile devices</li>
              </ul>
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Join Our Community
              </h2>
              
              <p className="mb-6">
                TikTok Emojis is more than just a tool - it&apos;s a community of creators who 
                believe in the power of visual expression. Whether you&apos;re just starting your 
                TikTok journey or you&apos;re already a seasoned creator, we&apos;re here to support 
                your creative process.
              </p>
              
              <p className="mb-6">
                We&apos;re constantly improving and adding new features based on community feedback. 
                Your success as a creator is our success, and we&apos;re committed to providing 
                the best possible tools to help you create content that resonates with your audience.
              </p>
            </div>
            
            <div className="text-center bg-primary/10 rounded-lg p-8">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Thank You for Being Part of Our Story
              </h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Every emoji copied, every PNG downloaded, and every creator who finds value 
                in our platform makes us better. Thank you for trusting us to be part of 
                your creative journey.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 