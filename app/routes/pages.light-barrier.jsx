import {useLoaderData} from 'react-router';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [
    {title: `FlashFog Security | Light Barrier Infrared Perimeter Protection`},
    {name: 'description', content: 'Invisible perimeter protection with instant detection. Dual-beam infrared barriers with 100m range for comprehensive security coverage.'},
    {name: 'keywords', content: 'light barrier, infrared barrier, perimeter protection, dual beam, 100m range'},
    {rel: 'canonical', href: 'https://flashfog.com/pages/light-barrier'},
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

export default function LightBarrier() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  
  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">Light Barrier Systems</h1>
        
        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Invisible Perimeter Protection
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                FlashFog light barrier systems create invisible infrared protection 
                zones that instantly detect any intrusion attempt. Our dual-beam 
                technology provides reliable perimeter security with zero false alarms.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">100m detection range</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Dual beam design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Weather resistant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Easy alignment system</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="FlashFog light barrier system"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Infrared Barrier Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔴</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Infrared Beam</h3>
              <p className="text-gray-300">
                Invisible infrared beams create an undetectable security perimeter
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Instant Detection</h3>
              <p className="text-gray-300">
                Any beam interruption triggers immediate alarm activation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Alarm Response</h3>
              <p className="text-gray-300">
                Connected security systems activate fog, strobe, or audio deterrents
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Long Range Detection</h3>
              <p className="text-gray-300">
                Our light barrier systems provide up to 100m detection range, 
                making them ideal for large perimeter protection applications.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Dual Beam Technology</h3>
              <p className="text-gray-300">
                Dual infrared beams provide enhanced reliability and reduce 
                false alarms from small animals or environmental factors.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Weather Resistant</h3>
              <p className="text-gray-300">
                Designed to operate reliably in all weather conditions, 
                including rain, snow, and extreme temperatures.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Easy Installation</h3>
              <p className="text-gray-300">
                Simple alignment system and mounting options make installation 
                quick and straightforward for professional installers.
              </p>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-lg font-semibold text-white mb-2">Industrial Sites</h3>
              <p className="text-gray-300 text-sm">Large perimeter protection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold text-white mb-2">Commercial Buildings</h3>
              <p className="text-gray-300 text-sm">Building perimeter security</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Residential</h3>
              <p className="text-gray-300 text-sm">Property boundary protection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-lg font-semibold text-white mb-2">Parking Areas</h3>
              <p className="text-gray-300 text-sm">Vehicle access control</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Why Choose Light Barriers?</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Invisible Protection</h3>
                <p className="text-gray-300">
                  Infrared beams are completely invisible to intruders, providing 
                  undetectable perimeter protection that catches them by surprise.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Early Detection</h3>
                <p className="text-gray-300">
                  Detects intrusion attempts before they reach the building, 
                  providing valuable time for security response.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Low False Alarms</h3>
                <p className="text-gray-300">
                  Dual beam technology and advanced filtering reduce false alarms 
                  from small animals or environmental factors.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Easy Integration</h3>
                <p className="text-gray-300">
                  Works seamlessly with other FlashFog security systems, creating 
                  comprehensive protection solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Installation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Professional Installation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Proper installation and alignment are crucial for optimal light barrier 
                performance. Our certified technicians ensure precise setup and testing 
                for maximum effectiveness.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Strategic placement planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Precise beam alignment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">System integration and testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Comprehensive training provided</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Professional installation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-900 to-blue-900 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Invisible Protection?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Secure your perimeter with professional-grade light barrier systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/collections/all" 
              className="btn btn-primary"
            >
              Shop Light Barriers
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