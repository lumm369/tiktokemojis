import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p className="text-lg mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                1. Acceptance of Terms
              </h2>
              <p className="mb-6">
                By accessing and using TikTok Emojis website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by these terms, 
                please do not use this service.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                2. Use License
              </h2>
              <p className="mb-6">
                TikTok Emojis grants you a personal, non-exclusive, non-transferable license to use the emojis 
                and content provided on this website for personal and commercial purposes. You may copy, paste, 
                and download emojis for use in your content, videos, and applications.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                3. Restrictions
              </h2>
              <p className="mb-4">You may not:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Claim ownership of the emojis or content provided</li>
                <li>Redistribute or resell the emoji collection as your own product</li>
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Attempt to reverse engineer or copy the website functionality</li>
                <li>Violate any laws in your jurisdiction</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                4. Content Disclaimer
              </h2>
              <p className="mb-6">
                The emojis and content on TikTok Emojis are provided &quot;as is&quot;. We do not warrant that 
                the service will be uninterrupted or error-free. All emojis are Unicode standard emojis 
                and are not proprietary to TikTok or any specific platform.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                5. Limitation of Liability
              </h2>
              <p className="mb-6">
                TikTok Emojis shall not be liable for any indirect, incidental, secret, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses, resulting from your access to or use of the service.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                6. Intellectual Property
              </h2>
              <p className="mb-6">
                The emojis provided are Unicode standard emojis and are in the public domain. 
                The website design, code, and original content are protected by copyright. 
                TikTok is a trademark of ByteDance Ltd. and this website is not affiliated with TikTok.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                7. Modifications to Service
              </h2>
              <p className="mb-6">
                We reserve the right to modify or discontinue the service at any time without notice. 
                We also reserve the right to update these terms of service at any time. 
                Your continued use of the service constitutes acceptance of any changes.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                8. User Conduct
              </h2>
              <p className="mb-6">
                You agree to use TikTok Emojis responsibly and in accordance with all applicable laws. 
                You will not use the service to engage in any harmful, offensive, or illegal activities.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                9. Governing Law
              </h2>
              <p className="mb-6">
                These terms shall be governed by and construed in accordance with applicable laws, 
                without regard to conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                10. Contact Information
              </h2>
              <p className="mb-6">
                If you have any questions about these Terms of Service, please contact us through 
                our contact page.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 