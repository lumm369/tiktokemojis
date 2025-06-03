'use client';

import { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Have questions about TikTok Emojis? Need support or want to suggest new features? 
                We&apos;d love to hear from you! Get in touch with our team.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted && (
                    <Alert className="mb-6">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        Thank you for your message! We&apos;ll get back to you within 24 hours.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email address"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What is this about?"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell us more about your question or feedback..."
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-gray-100"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information & FAQ */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Mail className="h-6 w-6 text-primary" />
                      <span>Get in Touch</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Response Time
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        We typically respond to all inquiries within 24 hours during business days.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        What to Include
                      </h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                        <li>• Clear description of your question or issue</li>
                        <li>• Browser and device information (if technical issue)</li>
                        <li>• Screenshots if applicable</li>
                        <li>• Any specific emoji or feature you&apos;re asking about</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        How do I copy TikTok emojis?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Simply click on any emoji card and it will be automatically copied to your clipboard. 
                        You can then paste it anywhere you need.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Can I download emojis as PNG files?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Yes! Visit our Download page to get high-quality PNG versions of any emoji. 
                        All downloads are free and available in 128x128 resolution.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Do you add new emojis regularly?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        We regularly update our collection based on trending emojis and user requests. 
                        Feel free to suggest new emojis through this contact form.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Is TikTok Emojis free to use?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Yes, all features are completely free including emoji copying, PNG downloads, 
                        and access to our complete emoji collection.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 text-center bg-primary/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Help Us Improve TikTok Emojis
              </h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Your feedback helps us make TikTok Emojis better for everyone. Whether you have suggestions 
                for new features, report bugs, or just want to say hello, we appreciate hearing from our community.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 