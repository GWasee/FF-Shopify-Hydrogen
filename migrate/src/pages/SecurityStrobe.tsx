import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Eye, AlertTriangle, Settings } from 'lucide-react';

const SecurityStrobe: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Security Strobe Systems - FlashFog High-Intensity Deterrent Lights</title>
        <meta name="description" content="FlashFog security strobe systems provide high-intensity light deterrent technology. Disorient intruders and enhance security with professional strobe lighting." />
        <meta name="keywords" content="security strobe, strobe light security, intruder deterrent, security lighting, high intensity strobe, security alarm" />
        <link rel="canonical" href="https://flashfog.com/security-strobe" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Security Strobe Systems
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            High-intensity strobe lights that disorient and deter intruders effectively
          </p>

          {/* Hero Section */}
          <div className="relative mb-16">
            <img 
              src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Security strobe light system"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Blinding Protection</h2>
                <p className="text-lg">Instant disorientation for maximum deterrent effect</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">How Security Strobe Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Instant Activation</h3>
                      <p className="text-gray-300">
                        Upon alarm trigger, high-intensity strobe lights activate immediately, 
                        creating a disorienting environment for intruders.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Eye className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Visual Disruption</h3>
                      <p className="text-gray-300">
                        Rapid flashing at specific frequencies causes temporary disorientation 
                        and makes navigation extremely difficult.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Zap className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Psychological Impact</h3>
                      <p className="text-gray-300">
                        The intense, unexpected light creates panic and urgency, 
                        forcing intruders to abandon their criminal activity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Security strobe installation"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">High Intensity</h3>
                <p className="text-gray-300">
                  Ultra-bright LED strobes with up to 1,000,000 candela output for maximum impact
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Settings className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Adjustable Settings</h3>
                <p className="text-gray-300">
                  Customizable flash rate, duration, and intensity to suit different environments
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Eye className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Wide Coverage</h3>
                <p className="text-gray-300">
                  360-degree illumination covers large areas with strategic placement
                </p>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Technical Specifications</h2>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Light Output</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Intensity: Up to 1,000,000 candela</li>
                    <li>• Flash rate: 1-20 Hz adjustable</li>
                    <li>• LED lifespan: 50,000+ hours</li>
                    <li>• Color options: White, red, blue</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Power & Control</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Input voltage: 12V/24V DC</li>
                    <li>• Power consumption: 10-50W</li>
                    <li>• Battery backup: Optional</li>
                    <li>• Remote control: Yes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Installation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Mounting: Wall/ceiling</li>
                    <li>• Weather rating: IP65</li>
                    <li>• Operating temp: -20°C to 60°C</li>
                    <li>• Dimensions: 15cm x 15cm x 8cm</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Immediate Deterrent</h3>
                    <p className="text-gray-300">Instant activation creates immediate psychological pressure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Non-Lethal Protection</h3>
                    <p className="text-gray-300">Safe, effective deterrent without physical harm</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Low Maintenance</h3>
                    <p className="text-gray-300">LED technology requires minimal upkeep</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Energy Efficient</h3>
                    <p className="text-gray-300">LED technology provides maximum output with minimal power</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Weather Resistant</h3>
                    <p className="text-gray-300">IP65 rating ensures reliable outdoor operation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Easy Integration</h3>
                    <p className="text-gray-300">Compatible with existing alarm systems</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Ideal Applications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Retail Stores',
                'Warehouses',
                'Parking Lots',
                'Construction Sites',
                'Schools',
                'Hospitals',
                'Government Buildings',
                'Residential Properties'
              ].map((application, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-white font-medium">{application}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-yellow-900 to-orange-900 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Enhance Your Security with Strobe Technology
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Add powerful visual deterrent to your security system with FlashFog strobe lights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/store" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Shop Strobe Systems
              </a>
              <a 
                href="/about-us" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Get Quote
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SecurityStrobe;