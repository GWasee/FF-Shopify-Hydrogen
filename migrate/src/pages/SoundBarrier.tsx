import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Volume2, Waves, Settings, Shield } from 'lucide-react';

const SoundBarrier: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sound Barrier Security Systems - FlashFog Audio Deterrent Technology</title>
        <meta name="description" content="FlashFog sound barrier systems provide advanced audio deterrent technology. Customizable alerts and high-decibel warnings to deter intruders effectively." />
        <meta name="keywords" content="sound barrier, audio deterrent, security alarm, high decibel alarm, intruder deterrent, security sound system" />
        <link rel="canonical" href="https://flashfog.com/sound-barrier" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Sound Barrier Systems
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Advanced audio deterrent technology with customizable alerts and warnings
          </p>

          {/* Hero Section */}
          <div className="relative mb-16">
            <img 
              src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Sound barrier security system"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Volume2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Audio Protection</h2>
                <p className="text-lg">High-decibel deterrent with customizable messages</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">How Sound Barrier Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-green-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                  <h3 className="text-xl font-semibold text-white">Detection</h3>
                </div>
                <p className="text-gray-300">
                  Motion sensors or alarm triggers detect unauthorized presence
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-green-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                  <h3 className="text-xl font-semibold text-white">Audio Alert</h3>
                </div>
                <p className="text-gray-300">
                  High-decibel alarm or custom message broadcasts immediately
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-green-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                  <h3 className="text-xl font-semibold text-white">Deterrent</h3>
                </div>
                <p className="text-gray-300">
                  Loud, persistent audio forces intruders to flee the area
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Volume2 className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">High-Decibel Output</h3>
                      <p className="text-gray-300">
                        Up to 120dB output ensures the alarm is heard from significant distances
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Waves className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Custom Messages</h3>
                      <p className="text-gray-300">
                        Record and play custom warning messages in multiple languages
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Settings className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Programmable Settings</h3>
                      <p className="text-gray-300">
                        Adjust volume, duration, and trigger sensitivity for optimal performance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Weather Resistant</h3>
                      <p className="text-gray-300">
                        IP66 rated enclosure for reliable outdoor operation in all conditions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Sound barrier system installation"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </section>

          {/* Audio Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Audio Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-3">Siren Alerts</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Continuous siren</li>
                  <li>• Pulsing alarm</li>
                  <li>• Warbling tone</li>
                  <li>• Multi-tone sequence</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-3">Voice Messages</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• "Warning: Unauthorized entry"</li>
                  <li>• "Police have been notified"</li>
                  <li>• "You are being recorded"</li>
                  <li>• Custom recordings</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-3">Special Effects</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Dog barking</li>
                  <li>• Gunshot sounds</li>
                  <li>• Breaking glass</li>
                  <li>• Crowd noise</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Technical Specifications</h2>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Audio Performance</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Output: Up to 120dB</li>
                    <li>• Frequency range: 200Hz - 8kHz</li>
                    <li>• Speaker: 15W - 100W options</li>
                    <li>• Coverage: 360° omnidirectional</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Power & Control</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Input: 12V/24V DC or 110V/220V AC</li>
                    <li>• Backup battery: 12V rechargeable</li>
                    <li>• Memory: 16MB flash storage</li>
                    <li>• Remote control: RF/WiFi options</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Physical</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Enclosure: IP66 rated</li>
                    <li>• Operating temp: -30°C to 70°C</li>
                    <li>• Dimensions: 25cm x 20cm x 15cm</li>
                    <li>• Weight: 2-5 kg (model dependent)</li>
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
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Psychological Deterrent</h3>
                    <p className="text-gray-300">Loud, unexpected audio creates panic and urgency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Neighborhood Alert</h3>
                    <p className="text-gray-300">High-decibel output alerts neighbors and passersby</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Customizable Response</h3>
                    <p className="text-gray-300">Tailor audio response to specific security needs</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Multi-Language Support</h3>
                    <p className="text-gray-300">Record messages in multiple languages for diverse areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Easy Integration</h3>
                    <p className="text-gray-300">Compatible with existing security and alarm systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Reliable Operation</h3>
                    <p className="text-gray-300">Weather-resistant design ensures consistent performance</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Applications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Retail Stores',
                'Warehouses',
                'Construction Sites',
                'Parking Garages',
                'Schools',
                'Hospitals',
                'Industrial Facilities',
                'Residential Areas'
              ].map((application, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-white font-medium">{application}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-green-900 to-teal-900 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Add Audio Deterrent to Your Security System
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Enhance your property protection with FlashFog sound barrier technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/store" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Shop Sound Systems
              </a>
              <a 
                href="/about-us" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Get Consultation
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SoundBarrier;