import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - TikTok Emojis',
  description: 'Privacy policy for TikTok Emojis collection website.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p className="text-lg mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                1. Information We Collect
              </h2>
              <p className="mb-6">
                TikTok Emojis is a free service that provides emoji copying and downloading functionality. 
                We do not collect personal information from users. Our website operates entirely client-side 
                for emoji copying and PNG generation.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                2. How We Use Information
              </h2>
              <p className="mb-6">
                Since we do not collect personal information, we do not use, share, or sell any personal data. 
                All emoji copying and PNG generation happens locally in your browser.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                3. Cookies and Local Storage
              </h2>
              <p className="mb-6">
                Our website may use browser local storage to save your preferences and improve user experience. 
                No personal information is stored, and you can clear this data through your browser settings.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                4. Third-Party Services
              </h2>
              <p className="mb-6">
                We may use analytics services to understand website usage patterns. These services collect 
                anonymized data and do not track personal information.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                5. Data Security
              </h2>
              <p className="mb-6">
                Since we do not collect or store personal data, there are no data security concerns 
                related to personal information on our service.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                6. Children&apos;s Privacy
              </h2>
              <p className="mb-6">
                Our service is safe for all ages as we do not collect any personal information 
                from users of any age.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                7. Contact Us
              </h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us through 
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