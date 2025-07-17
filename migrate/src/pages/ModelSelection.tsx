import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Building, Home, Store, Warehouse } from 'lucide-react';

const ModelSelection: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const propertyTypes = [
    { id: 'residential', name: 'Residential', icon: Home },
    { id: 'retail', name: 'Retail Store', icon: Store },
    { id: 'warehouse', name: 'Warehouse', icon: Warehouse },
    { id: 'office', name: 'Office Building', icon: Building }
  ];

  const sizesOptions = [
    { id: 'small', name: 'Small (< 1000 sq ft)', range: '< 1000 sq ft' },
    { id: 'medium', name: 'Medium (1000-3000 sq ft)', range: '1000-3000 sq ft' },
    { id: 'large', name: 'Large (3000-5000 sq ft)', range: '3000-5000 sq ft' },
    { id: 'xlarge', name: 'Extra Large (> 5000 sq ft)', range: '> 5000 sq ft' }
  ];

  const budgetOptions = [
    { id: 'budget', name: 'Budget ($500-$1500)', range: '$500-$1500' },
    { id: 'mid', name: 'Mid-range ($1500-$3000)', range: '$1500-$3000' },
    { id: 'premium', name: 'Premium ($3000-$5000)', range: '$3000-$5000' },
    { id: 'enterprise', name: 'Enterprise ($5000+)', range: '$5000+' }
  ];

  const getRecommendations = () => {
    const recs = [];

    // Logic for recommendations based on selections
    if (selectedSize === 'small' && selectedBudget === 'budget') {
      recs.push({
        name: 'FlashFog Compact 1000',
        price: '$1,299',
        features: ['1000 sq ft coverage', '8-second deployment', 'Battery backup'],
        match: 95,
        reason: 'Perfect for small spaces with budget-friendly pricing'
      });
    }

    if (selectedSize === 'medium' && (selectedBudget === 'mid' || selectedBudget === 'budget')) {
      recs.push({
        name: 'FlashFog Pro 2000',
        price: '$2,499',
        features: ['2000 sq ft coverage', '10-second deployment', 'Remote monitoring'],
        match: 90,
        reason: 'Ideal coverage for medium-sized properties'
      });
    }

    if (selectedSize === 'large' || selectedSize === 'xlarge') {
      recs.push({
        name: 'FlashFog Industrial 5000',
        price: '$4,999',
        features: ['5000 sq ft coverage', '6-second deployment', 'Industrial grade'],
        match: 88,
        reason: 'Heavy-duty protection for large areas'
      });
    }

    // Add complementary systems
    if (selectedProperty === 'retail' || selectedProperty === 'office') {
      recs.push({
        name: 'SecurityStrobe Ultra',
        price: '$899',
        features: ['1M candela output', 'Adjustable flash rate', 'Weather resistant'],
        match: 85,
        reason: 'Enhanced deterrent for high-traffic areas'
      });
    }

    if (selectedProperty === 'warehouse' || selectedProperty === 'office') {
      recs.push({
        name: 'SoundBarrier Pro',
        price: '$699',
        features: ['120dB output', 'Custom messages', 'Multi-language'],
        match: 82,
        reason: 'Audio alerts for large open spaces'
      });
    }

    setRecommendations(recs);
  };

  const resetSelection = () => {
    setSelectedProperty('');
    setSelectedSize('');
    setSelectedBudget('');
    setRecommendations([]);
  };

  return (
    <>
      <Helmet>
        <title>Model Selection Guide - Find Your Perfect FlashFog Security System</title>
        <meta name="description" content="Use our interactive model selection guide to find the perfect FlashFog security system for your property. Get personalized recommendations based on your needs and budget." />
        <meta name="keywords" content="security system selection, FlashFog model guide, security system recommendations, fog system selector, security equipment guide" />
        <link rel="canonical" href="https://flashfog.com/model-selection" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Model Selection Guide
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Find the perfect FlashFog security system for your specific needs
          </p>

          {/* Selection Steps */}
          <div className="space-y-8 mb-12">
            {/* Step 1: Property Type */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">
                Step 1: What type of property are you protecting?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {propertyTypes.map(type => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedProperty(type.id)}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        selectedProperty === type.id
                          ? 'border-cyan-400 bg-cyan-400 bg-opacity-20'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <IconComponent className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <div className="text-white font-medium">{type.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Size */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">
                Step 2: What's the size of the area to protect?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sizesOptions.map(size => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-colors ${
                      selectedSize === size.id
                        ? 'border-cyan-400 bg-cyan-400 bg-opacity-20'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-white font-medium">{size.name}</div>
                    <div className="text-gray-300 text-sm">{size.range}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Budget */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">
                Step 3: What's your budget range?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {budgetOptions.map(budget => (
                  <button
                    key={budget.id}
                    onClick={() => setSelectedBudget(budget.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-colors ${
                      selectedBudget === budget.id
                        ? 'border-cyan-400 bg-cyan-400 bg-opacity-20'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-white font-medium">{budget.name}</div>
                    <div className="text-gray-300 text-sm">{budget.range}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Get Recommendations Button */}
            {selectedProperty && selectedSize && selectedBudget && (
              <div className="text-center">
                <button
                  onClick={getRecommendations}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center"
                >
                  Get My Recommendations <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="bg-gray-800 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                Recommended Systems for You
              </h2>
              <div className="space-y-6">
                {recommendations.map((rec, index) => (
                  <div key={index} className="bg-gray-700 p-6 rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{rec.name}</h3>
                        <p className="text-gray-300 mt-1">{rec.reason}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">{rec.price}</div>
                        <div className="text-sm text-gray-300">{rec.match}% match</div>
                      </div>
                    </div>
                    <ul className="text-gray-300 space-y-1 mb-4">
                      {rec.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                        Add to Cart
                      </button>
                      <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-2 rounded-full font-medium transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={resetSelection}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}

          {/* Comparison Chart */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Product Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="text-left p-4 text-white">Model</th>
                    <th className="text-left p-4 text-white">Coverage</th>
                    <th className="text-left p-4 text-white">Deployment</th>
                    <th className="text-left p-4 text-white">Best For</th>
                    <th className="text-left p-4 text-white">Price</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-t border-gray-600">
                    <td className="p-4 font-medium">FlashFog Compact 1000</td>
                    <td className="p-4">1000 sq ft</td>
                    <td className="p-4">8 seconds</td>
                    <td className="p-4">Small businesses, homes</td>
                    <td className="p-4 text-cyan-400 font-bold">$1,299</td>
                  </tr>
                  <tr className="border-t border-gray-600">
                    <td className="p-4 font-medium">FlashFog Pro 2000</td>
                    <td className="p-4">2000 sq ft</td>
                    <td className="p-4">10 seconds</td>
                    <td className="p-4">Retail stores, offices</td>
                    <td className="p-4 text-cyan-400 font-bold">$2,499</td>
                  </tr>
                  <tr className="border-t border-gray-600">
                    <td className="p-4 font-medium">FlashFog Industrial 5000</td>
                    <td className="p-4">5000 sq ft</td>
                    <td className="p-4">6 seconds</td>
                    <td className="p-4">Warehouses, factories</td>
                    <td className="p-4 text-cyan-400 font-bold">$4,999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Expert Consultation CTA */}
          <section className="text-center bg-gradient-to-r from-cyan-900 to-blue-900 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Not Sure Which System is Right?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Our security experts offer free consultations to help you choose the perfect system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/about-us" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Free Consultation
              </a>
              <a 
                href="/store" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Browse All Products
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ModelSelection;