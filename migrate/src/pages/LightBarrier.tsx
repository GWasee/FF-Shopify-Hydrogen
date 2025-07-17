import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Eye, Shield, Zap, ArrowRight } from 'lucide-react';

const LightBarrier: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Light Barrier - FlashFog Security | Invisible Perimeter Protection</title>
        <meta name="description" content="FlashFog Light Barrier provides invisible perimeter protection with instant detection. Advanced infrared technology for reliable security monitoring." />
        <meta name="keywords" content="light barrier, infrared barrier, perimeter protection, security detection, invisible security" />
        <link rel="canonical" href="https://flashfog.com/light-barrier" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6">
              Light Barrier
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Invisible perimeter protection with instant detection. Our advanced infrared 
              light barrier technology provides reliable security monitoring without being seen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/store" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Shop Light Barriers <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/installation" 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Installation Guide
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
                <Eye className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Invisible Protection</h3>
                <p className="text-gray-300">
                  Infrared beams create an invisible barrier that detects any intrusion attempt
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
                <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Instant Detection</h3>
                <p className="text-gray-300">
                  Immediate alert system with zero false alarms and reliable performance
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
                <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Weather Resistant</h3>
                <p className="text-gray-300">
                  Designed to work in all weather conditions with IP66 protection rating
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <section className="py-16 bg-gray-900 rounded-lg mb-16">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">
                How Light Barrier Technology Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Infrared Beam Technology</h3>
                  <p className="text-gray-300 mb-4">
                    Our light barriers use advanced infrared technology to create invisible 
                    beams of light that span your perimeter. When these beams are interrupted, 
                    an immediate alert is triggered.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Dual-beam design for maximum reliability</li>
                    <li>• Range up to 100 meters per unit</li>
                    <li>• Adjustable sensitivity settings</li>
                    <li>• Battery backup for continuous operation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Installation & Setup</h3>
                  <p className="text-gray-300 mb-4">
                    Professional installation ensures optimal positioning and alignment. 
                    Our certified installers will configure the system for your specific 
                    security requirements.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Professional installation included</li>
                    <li>• Wireless communication options</li>
                    <li>• Integration with existing security systems</li>
                    <li>• Remote monitoring capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Product Models */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">
              Light Barrier Models
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">LightBarrier Basic</h3>
                  <p className="text-gray-300 mb-4">
                    Entry-level light barrier perfect for residential applications
                  </p>
                  <ul className="text-gray-300 mb-6 space-y-2">
                    <li>• 50m range</li>
                    <li>• Single beam design</li>
                    <li>• Basic alert system</li>
                    <li>• 1-year warranty</li>
                  </ul>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">$299</div>
                  <Link 
                    to="/store" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors inline-block"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">LightBarrier Pro</h3>
                  <p className="text-gray-300 mb-4">
                    Professional grade light barrier for commercial applications
                  </p>
                  <ul className="text-gray-300 mb-6 space-y-2">
                    <li>• 100m range</li>
                    <li>• Dual beam design</li>
                    <li>• Advanced alert system</li>
                    <li>• 3-year warranty</li>
                  </ul>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">$549</div>
                  <Link 
                    to="/store" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors inline-block"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">LightBarrier Industrial</h3>
                  <p className="text-gray-300 mb-4">
                    Heavy-duty light barrier for industrial and high-security applications
                  </p>
                  <ul className="text-gray-300 mb-6 space-y-2">
                    <li>• 150m range</li>
                    <li>• Multi-beam design</li>
                    <li>• Network integration</li>
                    <li>• 5-year warranty</li>
                  </ul>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">$899</div>
                  <Link 
                    to="/store" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors inline-block"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Secure Your Perimeter?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust FlashFog Light Barriers 
              for their perimeter security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/store" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/is-my-site-right" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Check Compatibility
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LightBarrier;