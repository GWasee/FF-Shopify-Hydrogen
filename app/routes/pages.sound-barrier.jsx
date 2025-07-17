import {useLoaderData} from 'react-router';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [
    {title: `FlashFog Security | Sound Barrier Audio Deterrent Systems`},
    {name: 'description', content: 'Professional audio deterrent systems with customizable alerts. 120dB output with custom recordings and multi-language support for comprehensive security.'},
    {name: 'keywords', content: 'sound barrier, audio deterrent, security audio, custom recordings, 120dB output'},
    {rel: 'canonical', href: 'https://flashfog.com/pages/sound-barrier'},
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

export default function SoundBarrier() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  
  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">Sound Barrier Systems</h1>
        
        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Advanced Audio Deterrent Technology
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                FlashFog sound barrier systems deliver powerful audio deterrents that 
                instantly alert intruders and draw attention to security breaches. 
                Our customizable audio solutions provide maximum effectiveness.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">120dB output power</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Custom recordings available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Multi-language support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">IP66 rated for outdoor use</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="FlashFog sound barrier system"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Audio Deterrent Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Audio Activation</h3>
              <p className="text-gray-300">
                Motion sensors or alarm triggers activate the audio deterrent system
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Powerful Output</h3>
              <p className="text-gray-300">
                120dB audio output creates immediate attention and disorientation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Deterrent Effect</h3>
              <p className="text-gray-300">
                Audio alerts draw attention and force intruders to retreat
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">High Power Output</h3>
              <p className="text-gray-300">
                Our sound barrier systems deliver 120dB output, ensuring maximum 
                audio impact and attention-grabbing capability.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Custom Recordings</h3>
              <p className="text-gray-300">
                Personalized audio messages can be recorded to suit specific 
                security requirements and branding needs.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Multi-Language Support</h3>
              <p className="text-gray-300">
                Pre-recorded messages available in multiple languages for 
                international applications and diverse environments.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Weather Resistant</h3>
              <p className="text-gray-300">
                IP66 rated enclosures ensure reliable operation in all weather 
                conditions, perfect for outdoor installations.
              </p>
            </div>
          </div>
        </div>

        {/* Audio Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Audio Deterrent Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-lg font-semibold text-white mb-2">Alarm Sirens</h3>
              <p className="text-gray-300 text-sm">Traditional alarm sounds for immediate attention</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-lg font-semibold text-white mb-2">Voice Messages</h3>
              <p className="text-gray-300 text-sm">Custom voice recordings with specific instructions</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🔊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Deterrent Sounds</h3>
              <p className="text-gray-300 text-sm">High-frequency sounds designed to disorient</p>
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
              <p className="text-gray-300 text-sm">Large area protection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold text-white mb-2">Commercial Buildings</h3>
              <p className="text-gray-300 text-sm">Perimeter security</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Residential</h3>
              <p className="text-gray-300 text-sm">Home security systems</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-lg font-semibold text-white mb-2">Parking Lots</h3>
              <p className="text-gray-300 text-sm">Vehicle protection</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Why Choose Sound Barriers?</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Immediate Attention</h3>
                <p className="text-gray-300">
                  Audio alerts instantly draw attention to security breaches, 
                  alerting both intruders and nearby personnel or neighbors.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Customizable Messages</h3>
                <p className="text-gray-300">
                  Personalized audio messages can include specific instructions, 
                  warnings, or branding elements for your business.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Non-Physical Deterrent</h3>
                <p className="text-gray-300">
                  Provides effective security without physical barriers, reducing 
                  liability and potential damage to property or individuals.
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

        {/* Installation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Professional Installation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                FlashFog provides professional installation services for all sound barrier 
                systems. Our certified technicians ensure optimal placement and performance 
                for maximum effectiveness.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Strategic speaker placement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Audio calibration and testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Integration with existing systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Comprehensive training provided</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Professional installation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-900 to-blue-900 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Deter with Sound?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Protect your property with professional-grade audio deterrent systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/collections/all" 
              className="btn btn-primary"
            >
              Shop Sound Barriers
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