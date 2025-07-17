import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Star, Filter } from 'lucide-react';

const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products = [
    {
      id: 1,
      name: 'FlashFog Pro 2000',
      category: 'fog',
      price: 2499,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Professional fog security system with 2000 sq ft coverage',
      features: ['2000 sq ft coverage', '10-second deployment', 'Remote monitoring', '2-year warranty']
    },
    {
      id: 2,
      name: 'FlashFog Compact 1000',
      category: 'fog',
      price: 1299,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Compact fog system ideal for small to medium spaces',
      features: ['1000 sq ft coverage', '8-second deployment', 'Battery backup', '1-year warranty']
    },
    {
      id: 3,
      name: 'SecurityStrobe Ultra',
      category: 'strobe',
      price: 899,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'High-intensity strobe light with 1,000,000 candela output',
      features: ['1M candela output', 'Adjustable flash rate', 'Weather resistant', 'LED technology']
    },
    {
      id: 4,
      name: 'SoundBarrier Pro',
      category: 'sound',
      price: 699,
      rating: 4.5,
      reviews: 78,
      image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Professional audio deterrent system with custom messages',
      features: ['120dB output', 'Custom recordings', 'Multi-language', 'IP66 rated']
    },
    {
      id: 5,
      name: 'LightBarrier Dual',
      category: 'light',
      price: 549,
      rating: 4.4,
      reviews: 92,
      image: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Dual-beam infrared barrier for perimeter protection',
      features: ['100m range', 'Dual beam design', 'Weather resistant', 'Easy alignment']
    },
    {
      id: 6,
      name: 'FlashFog Industrial 5000',
      category: 'fog',
      price: 4999,
      rating: 4.9,
      reviews: 45,
      image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Heavy-duty fog system for large industrial applications',
      features: ['5000 sq ft coverage', '6-second deployment', 'Industrial grade', '5-year warranty']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fog', name: 'Security Fog' },
    { id: 'strobe', name: 'Security Strobe' },
    { id: 'sound', name: 'Sound Barrier' },
    { id: 'light', name: 'Light Barrier' }
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <>
      <Helmet>
        <title>FlashFog Store - Professional Security Systems & Equipment</title>
        <meta name="description" content="Shop FlashFog professional security systems including fog generators, strobe lights, sound barriers, and light barriers. Free shipping and professional installation available." />
        <meta name="keywords" content="security fog system, buy security equipment, fog generator, security strobe, sound barrier, light barrier, professional security" />
        <link rel="canonical" href="https://flashfog.com/store" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            FlashFog Store
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Professional security systems with free shipping and installation support
          </p>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-cyan-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sortedProducts.map(product => (
              <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-300 ml-2">({product.reviews} reviews)</span>
                  </div>

                  <ul className="text-sm text-gray-300 mb-4 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">
                      ${product.price.toLocaleString()}
                    </span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition-colors flex items-center">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <section className="bg-gray-800 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Why Shop with FlashFog?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">100% Money Back Guarantee</h3>
                <p className="text-gray-300">14-day return policy with full refund if not satisfied</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🚚</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Free Shipping</h3>
                <p className="text-gray-300">Free shipping on all orders within North America</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Professional Installation</h3>
                <p className="text-gray-300">Certified installer network available nationwide</p>
              </div>
            </div>
          </section>

          {/* Contact for Custom Solutions */}
          <section className="text-center bg-gradient-to-r from-cyan-900 to-blue-900 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Security Solution?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Our security experts can design a custom system tailored to your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/about-us" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Sales
              </a>
              <a 
                href="/model-selection" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Model Selection Guide
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Store;