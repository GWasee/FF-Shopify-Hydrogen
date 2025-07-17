import {useLoaderData} from 'react-router';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [
    {title: `FlashFog Security | Security Strobe Light Systems`},
    {name: 'description', content: 'High-intensity security strobe lights that disorient and deter intruders. Professional strobe systems with 1,000,000 candela output.'},
    {name: 'keywords', content: 'security strobe, strobe light, high-intensity strobe, burglary deterrent, LED strobe'},
    {rel: 'canonical', href: 'https://flashfog.com/pages/security-strobe'},
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

export default function SecurityStrobe() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  
  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">Security Strobe Systems</h1>
        
        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                High-Intensity Strobe Deterrent
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                FlashFog security strobe lights deliver blinding, disorienting flashes 
                that instantly deter intruders. Our LED strobe technology provides 
                maximum effectiveness with minimal power consumption.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">1,000,000 candela output</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Adjustable flash rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Weather resistant design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">LED technology for reliability</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="FlashFog security strobe system"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Strobe Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Instant Activation</h3>
              <p className="text-gray-300">
                Motion sensors or alarm triggers activate the strobe system immediately
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Visual Disorientation</h3>
              <p className="text-gray-300">
                Intense flashing creates temporary blindness and disorientation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Deterrent Effect</h3>
              <p className="text-gray-300">
                Intruders are forced to retreat due to visual impairment
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">High Intensity Output</h3>
              <p className="text-gray-300">
                Our strobe systems deliver up to 1,000,000 candela, creating 
                maximum visual impact and disorientation.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Adjustable Settings</h3>
              <p className="text-gray-300">
                Customizable flash rate and intensity to suit different 
                environments and security requirements.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Weather Resistant</h3>
              <p className="text-gray-300">
                IP66 rated enclosures ensure reliable operation in all 
                weather conditions, indoor or outdoor.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">LED Technology</h3>
              <p className="text-gray-300">
                Advanced LED strobe technology provides long life, low power 
                consumption, and instant activation.
              </p>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-lg font-semibold text-white mb-2">Retail Stores</h3>
              <p className="text-gray-300 text-sm">Deter shoplifting and theft</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold text-white mb-2">Office Buildings</h3>
              <p className="text-gray-300 text-sm">After-hours security</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Residential</h3>
              <p className="text-gray-300 text-sm">Home security systems</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-lg font-semibold text-white mb-2">Parking Areas</h3>
              <p className="text-gray-300 text-sm">Vehicle protection</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Why Choose Strobe Security?</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Immediate Response</h3>
                <p className="text-gray-300">
                  Strobe lights activate instantly, providing immediate visual deterrent 
                  without the need for physical barriers.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Non-Contact Protection</h3>
                <p className="text-gray-300">
                  Provides effective security without physical contact, reducing liability 
                  and potential damage to property.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Effective</h3>
                <p className="text-gray-300">
                  Low power consumption and long life LEDs make strobe systems 
                  extremely cost-effective over time.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Easy Integration</h3>
                <p className="text-gray-300">
                  Works seamlessly with existing alarm systems and can be easily 
                  integrated into comprehensive security solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-900 to-blue-900 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Deter Intruders?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Protect your property with professional-grade strobe security systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/collections/all" 
              className="btn btn-primary"
            >
              Shop Strobe Systems
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