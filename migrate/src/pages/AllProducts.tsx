import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Volume2, Eye, ArrowRight } from 'lucide-react';

const AllProducts: React.FC = () => {
  const productCategories = [
    {
      icon: Shield,
      title: 'Security Fog Systems',
      description: 'Professional fog generators that create impenetrable barriers in seconds',
      products: [
        {
          name: 'FlashFog Pro 2000',
          coverage: '2000 sq ft',
          deployment: '10 seconds',
          price: '$2,499'
        },
        {
          name: 'FlashFog Compact 1000',
          coverage: '1000 sq ft',
          deployment: '8 seconds',
          price: '$1,299'
        },
        {
          name: 'FlashFog Industrial 5000',
          coverage: '5000 sq ft',
          deployment: '6 seconds',
          price: '$4,999'
        }
      ],
      link: '/fog-details'
    },
    {
      icon: Zap,
      title: 'Security Strobe Systems',
      description: 'High-intensity strobe lights that disorient and deter intruders',
      products: [
        {
          name: 'SecurityStrobe Ultra',
          intensity: '1,000,000 candela',
          coverage: '360° illumination',
          price: '$899'
        },
        {
          name: 'SecurityStrobe Pro',
          intensity: '500,000 candela',
          coverage: '180° illumination',
          price: '$599'
        },
        {
          name: 'SecurityStrobe Compact',
          intensity: '250,000 candela',
          coverage: '120° illumination',
          price: '$399'
        }
      ],
      link: '/security-strobe'
    },
    {
      icon: Volume2,
      title: 'Sound Barrier Systems',
      description: 'Advanced audio deterrent technology with customizable alerts',
      products: [
        {
          name: 'SoundBarrier Pro',
          output: '120dB',
          features: 'Custom messages',
          price: '$699'
        },
        {
          name: 'SoundBarrier Standard',
          output: '110dB',
          features: 'Pre-recorded alerts',
          price: '$449'
        },
        {
          name: 'SoundBarrier Compact',
          output: '100dB',
          features: 'Basic siren',
          price: '$299'
        }
      ],
      link: '/sound-barrier'
    },
    {
      icon: Eye,
      title: 'Light Barrier Systems',
      description: 'Invisible perimeter protection with instant detection capabilities',
      products: [
        {
          name: 'LightBarrier Curtain',
          beams: '64 beams',
          range: '200m',
          price: '$1,299'
        },
        {
          name: 'LightBarrier Multi',
          beams: '8 beams',
          range: '150m',
          price: '$799'
        },
        {
          name: 'LightBarrier Dual',
          beams: '2 beams',
          range: '100m',
          price: '$549'
        }
      ],
      link: '/light-barrier'
    }
  ];

  const accessories = [
    {
      name: 'Remote Control Unit',
      description: 'Wireless remote control for all FlashFog systems',
      price: '$149'
    },
    {
      name: 'Backup Battery Pack',
      description: '12V rechargeable battery for power backup',
      price: '$199'
    },
    {
      name: 'Fog Fluid (2L)',
      description: 'Food-grade glycol fog fluid for all fog systems',
      price: '$49'
    },
    {
      name: 'Mounting Brackets',
      description: 'Universal mounting hardware for secure installation',
      price: '$79'
    },
    {
      name: 'Sensor Kit',
      description: 'Additional motion sensors for expanded coverage',
      price: '$129'
    },
    {
      name: 'Control Panel',
      description: 'Central control panel for multiple system management',
      price: '$399'
    }
  ];

  return (
    <>
      <Helmet>
        <title>All Products - FlashFog Complete Security System Catalog</title>
        <meta name="description" content="Browse FlashFog's complete catalog of security systems including fog generators, strobe lights, sound barriers, light barriers, and accessories. Professional security solutions for every need." />
        <meta name="keywords" content="security systems catalog, fog generators, security strobe, sound barriers, light barriers, security accessories, professional security equipment" />
        <link rel="canonical" href="https://flashfog.com/all-products" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            All Products
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Complete range of professional security systems and accessories
          </p>

          {/* Product Categories */}
          <div className="space-y-16 mb-16">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <section key={index} className="bg-gray-800 p-8 rounded-lg">
                  <div className="flex items-center mb-6">
                    <IconComponent className="w-12 h-12 text-cyan-400 mr-4" />
                    <div>
                      <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                      <p className="text-gray-300 mt-2">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                        <div className="space-y-2 text-gray-300 mb-4">
                          {Object.entries(product).map(([key, value]) => {
                            if (key !== 'name' && key !== 'price') {
                              return (
                                <div key={key} className="flex justify-between">
                                  <span className="capitalize">{key}:</span>
                                  <span>{value}</span>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-medium transition-colors">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <a 
                      href={category.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Learn More About {category.title} <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Accessories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Accessories & Add-ons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessories.map((accessory, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">{accessory.name}</h3>
                  <p className="text-gray-300 mb-4">{accessory.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-cyan-400">{accessory.price}</span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Package Deals */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Package Deals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Complete Security Package</h3>
                <ul className="text-gray-200 space-y-2 mb-6">
                  <li>• FlashFog Pro 2000</li>
                  <li>• SecurityStrobe Ultra</li>
                  <li>• SoundBarrier Pro</li>
                  <li>• Remote Control Unit</li>
                  <li>• Professional Installation</li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-300 line-through">$4,246</span>
                    <span className="text-3xl font-bold text-white ml-2">$3,499</span>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                    Save $747
                  </button>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-900 to-red-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Starter Security Package</h3>
                <ul className="text-gray-200 space-y-2 mb-6">
                  <li>• FlashFog Compact 1000</li>
                  <li>• SecurityStrobe Pro</li>
                  <li>• Backup Battery Pack</li>
                  <li>• Fog Fluid (2L)</li>
                  <li>• Installation Guide</li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-300 line-through">$2,146</span>
                    <span className="text-3xl font-bold text-white ml-2">$1,799</span>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                    Save $347
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="bg-gray-800 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Why Choose FlashFog Products?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">25</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Years Experience</h3>
                <p className="text-gray-300 text-sm">Trusted security solutions since 1998</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality Guaranteed</h3>
                <p className="text-gray-300 text-sm">100% money back guarantee</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🚚</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Free Shipping</h3>
                <p className="text-gray-300 text-sm">Free delivery across North America</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-gray-300 text-sm">Professional installation available</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-cyan-900 to-blue-900 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Choosing the Right System?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Our security experts are here to help you find the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/model-selection" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Model Selection Guide
              </a>
              <a 
                href="/about-us" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Expert
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AllProducts;