import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Clock, Zap, CheckCircle } from 'lucide-react';

const FogDetails: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Security Fog Details - FlashFog Professional Fog Systems</title>
        <meta name="description" content="Learn about FlashFog's advanced security fog technology. Instant deployment, impenetrable barrier, and proven protection against break-ins and theft." />
        <meta name="keywords" content="security fog, fog security system, burglary protection, fog generator, security technology, theft prevention" />
        <link rel="canonical" href="https://flashfog.com/fog-details" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Security Fog Details
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Advanced fog technology that creates an impenetrable barrier in seconds
          </p>

          {/* Hero Image */}
          <div className="relative mb-16">
            <img 
              src="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Security fog system in action"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Instant Protection</h2>
                <p className="text-lg">Fog deployment in under 10 seconds</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">How Security Fog Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                  <h3 className="text-xl font-semibold text-white">Detection</h3>
                </div>
                <p className="text-gray-300">
                  Motion sensors or alarm system triggers detect unauthorized entry
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                  <h3 className="text-xl font-semibold text-white">Activation</h3>
                </div>
                <p className="text-gray-300">
                  FlashFog system activates instantly, releasing dense fog throughout the area
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                  <h3 className="text-xl font-semibold text-white">Protection</h3>
                </div>
                <p className="text-gray-300">
                  Intruders cannot see or navigate, forcing them to flee immediately
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Instant Deployment</h3>
                      <p className="text-gray-300">
                        Fog fills a 2000 sq ft area in under 10 seconds, creating immediate protection
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Safe & Non-Toxic</h3>
                      <p className="text-gray-300">
                        Food-grade glycol fog is completely safe for humans and pets
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Zap className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Low Maintenance</h3>
                      <p className="text-gray-300">
                        Minimal upkeep required with automatic self-testing capabilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Proven Effective</h3>
                      <p className="text-gray-300">
                        99% of intruders flee within 30 seconds of fog deployment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="FlashFog security system components"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Technical Specifications</h2>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Coverage & Performance</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Coverage area: Up to 2000 sq ft</li>
                    <li>• Deployment time: 8-10 seconds</li>
                    <li>• Fog duration: 45-60 minutes</li>
                    <li>• Visibility reduction: 99%</li>
                    <li>• Operating temperature: -10°C to 50°C</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">System Requirements</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Power: 110V/220V AC</li>
                    <li>• Backup battery: 12V rechargeable</li>
                    <li>• Fluid capacity: 1-2 liters</li>
                    <li>• Dimensions: 45cm x 30cm x 20cm</li>
                    <li>• Weight: 8-12 kg (depending on model)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Retail Stores</h3>
                <p className="text-gray-300 text-sm">Protect merchandise and cash registers</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Warehouses</h3>
                <p className="text-gray-300 text-sm">Secure inventory and equipment</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Offices</h3>
                <p className="text-gray-300 text-sm">Protect sensitive documents and electronics</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Pharmacies</h3>
                <p className="text-gray-300 text-sm">Secure controlled substances</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Banks</h3>
                <p className="text-gray-300 text-sm">Additional security for vaults and ATMs</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Residential</h3>
                <p className="text-gray-300 text-sm">Home security and valuables protection</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-cyan-900 to-blue-900 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience FlashFog Protection?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact us for a free consultation and see how FlashFog can protect your property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/store" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                View Products
              </a>
              <a 
                href="/about-us" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FogDetails;