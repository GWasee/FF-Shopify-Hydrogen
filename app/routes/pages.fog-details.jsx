import {useLoaderData} from 'react-router';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [
    {title: `FlashFog Security | Security Fog Technology Details`},
    {name: 'description', content: 'Learn about FlashFog security fog technology - instant fog deployment creates impenetrable barrier against intruders. 25+ years of experience.'},
    {name: 'keywords', content: 'security fog, fog security system, fog technology, burglary protection, instant fog deployment'},
    {rel: 'canonical', href: 'https://flashfog.com/pages/fog-details'},
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

export default function FogDetails() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  
  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">Security Fog Technology</h1>
        
        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Instant Protection Against Intruders
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                FlashFog security fog systems create an instant, impenetrable barrier that 
                completely disorients and deters intruders within seconds of activation. 
                Our advanced fog technology has been protecting properties worldwide for over 25 years.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Deploys in 6-10 seconds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Covers up to 5000 sq ft</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Non-toxic and safe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Professional installation available</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="FlashFog security system"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">How FlashFog Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Detection</h3>
              <p className="text-gray-300">
                Motion sensors or alarm system triggers activate the fog system instantly
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Deployment</h3>
              <p className="text-gray-300">
                Dense fog fills the space within 6-10 seconds, creating zero visibility
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Protection</h3>
              <p className="text-gray-300">
                Intruders are completely disoriented and forced to retreat immediately
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Instant Response</h3>
              <p className="text-gray-300">
                Unlike traditional security systems that only alert, FlashFog actively 
                prevents theft and damage by creating an immediate physical barrier.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Non-Lethal Protection</h3>
              <p className="text-gray-300">
                Our fog technology is completely safe and non-toxic, providing effective 
                protection without risk to occupants or intruders.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Cost Effective</h3>
              <p className="text-gray-300">
                Prevents costly theft and damage while potentially reducing insurance 
                premiums. One activation can save thousands in potential losses.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Professional Grade</h3>
              <p className="text-gray-300">
                Used by banks, jewelry stores, and high-security facilities worldwide. 
                Proven technology with 25+ years of successful deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Ideal Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold text-white mb-2">Banks & Financial</h3>
              <p className="text-gray-300 text-sm">Protect cash and valuables</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-lg font-semibold text-white mb-2">Jewelry Stores</h3>
              <p className="text-gray-300 text-sm">Secure high-value inventory</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Residential</h3>
              <p className="text-gray-300 text-sm">Home security protection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-lg font-semibold text-white mb-2">Industrial</h3>
              <p className="text-gray-300 text-sm">Warehouse and factory security</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-900 to-blue-900 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Protect Your Property?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Join thousands of satisfied customers who trust FlashFog for their security needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/collections/all" 
              className="btn btn-primary"
            >
              Shop FlashFog Systems
            </a>
            <a 
              href="/pages/about-us" 
              className="btn btn-white"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */ 