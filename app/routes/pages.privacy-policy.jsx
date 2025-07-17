import {useLoaderData} from 'react-router';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [
    {title: `FlashFog Security | Privacy Policy`},
    {name: 'description', content: 'FlashFog Privacy Policy - Learn how we collect, use, and protect your personal information. Your privacy is important to us.'},
    {name: 'keywords', content: 'privacy policy, FlashFog privacy, data protection, customer information'},
    {rel: 'canonical', href: 'https://flashfog.com/pages/privacy-policy'},
  ];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {LoaderFunctionArgs}
 */
async function loadCriticalData({context}) {
  return {};
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({context}) {
  return {};
}

export default function PrivacyPolicy() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">Privacy Policy</h1>
        
        {/* Introduction */}
        <div className="mb-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Effective Date:</strong> January 1, 2025
            </p>
            <p className="text-gray-300 mb-4">
              FlashFog Security ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website, purchase our products, or use our services.
            </p>
            <p className="text-gray-300">
              By using our services, you agree to the collection and use of information in 
              accordance with this policy.
            </p>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Information We Collect</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
              <p className="text-gray-300 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Name and contact information (email, phone, address)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Payment and billing information</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Installation preferences and requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Customer service communications</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Automatically Collected Information</h3>
              <p className="text-gray-300 mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">IP address and device information</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Browser type and version</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Pages visited and time spent</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Referring website information</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">How We Use Your Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Product and Service Delivery</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Process orders and payments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Arrange installation services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Provide customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Send order confirmations</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Communication and Marketing</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Send product updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Newsletter and promotional emails</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Respond to inquiries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Improve our services</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Sharing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Information Sharing and Disclosure</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third 
              parties without your consent, except in the following circumstances:
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Service Providers</h4>
                <p className="text-gray-300">
                  We may share information with trusted third-party service providers who 
                  assist us in operating our website, processing payments, and delivering services.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Legal Requirements</h4>
                <p className="text-gray-300">
                  We may disclose information if required by law or to protect our rights, 
                  property, or safety, or that of our customers or others.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Business Transfers</h4>
                <p className="text-gray-300">
                  In the event of a merger, acquisition, or sale of assets, customer information 
                  may be transferred as part of the business transaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Data Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Security Measures</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">SSL encryption for data transmission</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Secure payment processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Regular security audits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Limited access to personal data</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Data Retention</h3>
              <p className="text-gray-300 mb-4">
                We retain your personal information only for as long as necessary to:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Provide our services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Comply with legal obligations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Resolve disputes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Enforce agreements</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Your Privacy Rights</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Access and Update</h4>
                <p className="text-gray-300">
                  You can request access to and update your personal information by contacting us.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Opt-Out</h4>
                <p className="text-gray-300">
                  You can opt out of marketing communications by following the unsubscribe 
                  instructions in our emails or contacting us directly.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Deletion</h4>
                <p className="text-gray-300">
                  You can request deletion of your personal information, subject to legal 
                  and contractual obligations.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Data Portability</h4>
                <p className="text-gray-300">
                  You can request a copy of your personal information in a portable format.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Cookies and Tracking</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing 
              experience and analyze website usage. You can control cookie settings 
              through your browser preferences.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Essential cookies for website functionality</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Analytics cookies to improve our services</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Marketing cookies for personalized content</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Contact Us</h2>
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About This Policy?</h3>
            <p className="text-gray-200 mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="space-y-2">
              <div className="text-cyan-400 text-xl font-semibold">FlashFog Security</div>
              <div className="text-gray-300">98 Advance Rd, Toronto, Ontario, M8Z 2T7, Canada</div>
              <div className="text-cyan-400 text-lg font-semibold">(888) 282-7740</div>
              <div className="text-gray-300">(905) 502-0249</div>
              <div className="text-gray-300">privacy@flashfog.com</div>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Updates to This Policy</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of 
              any changes by posting the new Privacy Policy on this page and updating the 
              "Effective Date" at the top of this policy. We encourage you to review this 
              Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */ 