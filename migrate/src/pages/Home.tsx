import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Zap, Volume2, Eye, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>FlashFog Security - Professional Security Fog Systems & Barriers</title>
        <meta name="description" content="Leading provider of security fog systems, light barriers, and sound barriers. 25+ years of experience protecting properties worldwide with advanced security technology." />
        <meta name="keywords" content="security fog system, fog security, burglary protection, security strobe, sound barrier, light barrier, property security" />
        <link rel="canonical" href="https://flashfog.com" />
      </Helmet>

      <div className="relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-cyan-400">Flash</span>Fog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Professional Security Fog Systems
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Protecting properties for over 25 years with advanced fog technology, 
              light barriers, and sound barriers. When security matters, choose FlashFog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/store" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/fog-details" 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
              Advanced Security Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
                  <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">Security Fog</h3>
                  <p className="text-gray-300">
                    Instant fog deployment creates impenetrable barrier against intruders
                  </p>
                  <Link 
                    to="/fog-details" 
                    className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
                  <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">Security Strobe</h3>
                  <p className="text-gray-300">
                    High-intensity strobe lights disorient and deter intruders
                  </p>
                  <Link 
                    to="/security-strobe" 
                    className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
                  <Volume2 className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">Sound Barrier</h3>
                  <p className="text-gray-300">
                    Advanced audio deterrent system with customizable alerts
                  </p>
                  <Link 
                    to="/sound-barrier" 
                    className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
                  <Eye className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">Light Barrier</h3>
                  <p className="text-gray-300">
                    Invisible perimeter protection with instant detection
                  </p>
                  <Link 
                    to="/light-barrier" 
                    className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FlashFog */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-cyan-400 mb-8">
                  Why Choose FlashFog?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">25+ Years Experience</h3>
                      <p className="text-gray-300">
                        Trusted by thousands of customers worldwide with proven security solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Professional Installation</h3>
                      <p className="text-gray-300">
                        Certified installer network ensures proper setup and optimal performance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">100% Money Back Guarantee</h3>
                      <p className="text-gray-300">
                        14-day return policy with full refund if not completely satisfied
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Advanced Technology</h3>
                      <p className="text-gray-300">
                        Cutting-edge security systems designed for maximum effectiveness
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="FlashFog security system installation"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-lg">
                  <div className="text-2xl font-bold">25</div>
                  <div className="text-sm">YEARS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Property?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust FlashFog for their security needs. 
              Get started today with our professional consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/store" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Shop Products
              </Link>
              <Link 
                to="/about-us" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;