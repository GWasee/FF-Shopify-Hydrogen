import {useLoaderData} from 'react-router';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [
    {title: `FlashFog Security | Return Policy & Money Back Guarantee`},
    {name: 'description', content: 'FlashFog offers a 14-day money-back guarantee on all security systems. Learn about our return policy and customer satisfaction guarantee.'},
    {name: 'keywords', content: 'return policy, money back guarantee, FlashFog returns, customer satisfaction'},
    {rel: 'canonical', href: 'https://flashfog.com/pages/return-policy'},
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

export default function ReturnPolicy() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">Return Policy</h1>
        
        {/* Money Back Guarantee */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-8 rounded-lg text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              100% Money Back Guarantee
            </h2>
            <p className="text-xl text-gray-200 mb-4">
              We stand behind our products with complete confidence
            </p>
            <div className="text-4xl font-bold text-orange-400">14 DAYS</div>
            <div className="text-gray-300">to return for full refund</div>
          </div>
        </div>

        {/* Return Policy Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Our Return Policy</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">14-Day Return Window</h3>
              <p className="text-gray-300 mb-4">
                You have 14 days from the date of delivery to return any FlashFog security 
                system for a full refund. We want you to be completely satisfied with your 
                purchase and confident in your security investment.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Full refund of purchase price</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">No restocking fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Free return shipping</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Return Conditions</h3>
              <p className="text-gray-300 mb-4">
                To qualify for a full refund, the returned product must meet the following conditions:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Product must be in original condition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">All original packaging and accessories included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">No signs of installation or use</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Return authorization number required</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">How to Return</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Step 1: Contact Us</h4>
                  <p className="text-gray-300">
                    Call us at (888) 282-7740 or email us to request a return authorization number.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Step 2: Package Product</h4>
                  <p className="text-gray-300">
                    Securely package the product in its original packaging with all accessories.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Step 3: Ship Return</h4>
                  <p className="text-gray-300">
                    Use the provided return shipping label to send the product back to us.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Step 4: Receive Refund</h4>
                  <p className="text-gray-300">
                    Once we receive and inspect the return, we'll process your refund within 5-7 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exceptions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Return Exceptions</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              The following items are not eligible for return:
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Custom or specially ordered products</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Products that have been installed or used</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Products with missing parts or accessories</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Products damaged due to improper handling</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Customer Satisfaction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Our Commitment</h3>
              <p className="text-gray-300">
                At FlashFog, customer satisfaction is our top priority. We've been serving 
                customers for over 25 years and understand that security is a significant 
                investment. That's why we offer this comprehensive return policy.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Quality Assurance</h3>
              <p className="text-gray-300">
                Every FlashFog product undergoes rigorous testing before leaving our facility. 
                We're confident in the quality and effectiveness of our security systems, 
                which is why we can offer this generous return policy.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Need Help?</h2>
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Our Customer Service</h3>
            <p className="text-gray-200 mb-6">
              Have questions about our return policy? Our customer service team is here to help.
            </p>
            <div className="space-y-2">
              <div className="text-cyan-400 text-xl font-semibold">(888) 282-7740</div>
              <div className="text-gray-300">(905) 502-0249</div>
              <div className="text-gray-300">Monday - Friday, 9:00 AM - 5:00 PM EST</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">What if I'm not satisfied with my purchase?</h3>
              <p className="text-gray-300">
                If you're not completely satisfied with your FlashFog security system, 
                simply return it within 14 days for a full refund. No questions asked.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">How long does the refund process take?</h3>
              <p className="text-gray-300">
                Once we receive your return, we process refunds within 5-7 business days. 
                The time for the refund to appear in your account depends on your bank.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Do I have to pay for return shipping?</h3>
              <p className="text-gray-300">
                No, we provide a prepaid return shipping label for all returns within 
                the 14-day window. Return shipping is completely free.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">What if the product is damaged during shipping?</h3>
              <p className="text-gray-300">
                If your product arrives damaged, contact us immediately. We'll arrange 
                a replacement or refund at no additional cost to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */ 