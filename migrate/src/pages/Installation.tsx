import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Users, Clock, Shield, Wrench, Phone } from 'lucide-react';

const Installation: React.FC = () => {
  const installationSteps = [
    {
      step: 1,
      title: 'Site Assessment',
      description: 'Our certified technician visits your property to assess the layout and determine optimal placement for maximum coverage.',
      duration: '1-2 hours'
    },
    {
      step: 2,
      title: 'System Design',
      description: 'We create a custom installation plan tailored to your property\'s unique security needs and layout.',
      duration: '24-48 hours'
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'Certified installers mount and configure your FlashFog system with precision and care.',
      duration: '2-4 hours'
    },
    {
      step: 4,
      title: 'System Testing',
      description: 'Comprehensive testing ensures all components work perfectly and coverage is optimal.',
      duration: '30 minutes'
    },
    {
      step: 5,
      title: 'Training & Handover',
      description: 'We train you on system operation and provide all documentation and support materials.',
      duration: '30 minutes'
    }
  ];

  const services = [
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Certified technicians ensure proper setup and optimal performance',
      features: ['Site assessment', 'Custom configuration', 'Quality testing', 'Documentation']
    },
    {
      icon: Users,
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing technical support',
      features: ['Operation training', '24/7 support hotline', 'Remote diagnostics', 'Maintenance guidance']
    },
    {
      icon: Shield,
      title: 'Warranty & Maintenance',
      description: 'Extended warranty and preventive maintenance programs',
      features: ['2-5 year warranty', 'Annual maintenance', 'Priority support', 'Replacement parts']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Installation Services - FlashFog Security Systems</title>
        <meta name="description" content="Professional installation services for FlashFog security systems. Certified technicians, comprehensive training, and ongoing support. Get expert installation today." />
        <meta name="keywords" content="security system installation, professional installation, FlashFog installation, certified technicians, security system setup" />
        <link rel="canonical" href="https://flashfog.com/installation" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Professional Installation
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Expert installation services ensuring optimal performance and maximum security coverage
          </p>

          {/* Hero Section */}
          <div className="relative mb-16">
            <img 
              src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Professional installation team"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Users className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Certified Professionals</h2>
                <p className="text-lg">Expert installation by trained and certified technicians</p>
              </div>
            </div>
          </div>

          {/* Installation Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Installation Process</h2>
            <div className="space-y-8">
              {installationSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-cyan-400 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <span className="text-cyan-400 font-medium">{step.duration}</span>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg">
                    <IconComponent className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Installation Requirements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Installation Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Electrical Requirements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 110V/220V AC power supply</li>
                  <li>• Dedicated circuit recommended</li>
                  <li>• GFCI protection for outdoor installations</li>
                  <li>• Backup battery connection (optional)</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Physical Requirements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Secure mounting surface</li>
                  <li>• Clear line of sight for sensors</li>
                  <li>• Access for maintenance</li>
                  <li>• Protection from direct weather exposure</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Installation Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Basic Installation</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$299</div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Single system installation</li>
                  <li>• Basic configuration</li>
                  <li>• System testing</li>
                  <li>• 1-hour training</li>
                </ul>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors w-full">
                  Book Now
                </button>
              </div>
              <div className="bg-gradient-to-b from-cyan-900 to-blue-900 p-6 rounded-lg text-center border-2 border-cyan-400">
                <div className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold mb-4">POPULAR</div>
                <h3 className="text-xl font-semibold text-white mb-4">Professional Installation</h3>
                <div className="text-3xl font-bold text-white mb-4">$499</div>
                <ul className="text-gray-200 space-y-2 mb-6">
                  <li>• Multi-system installation</li>
                  <li>• Custom configuration</li>
                  <li>• Integration with existing alarms</li>
                  <li>• Comprehensive training</li>
                  <li>• 1-year priority support</li>
                </ul>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors w-full">
                  Book Now
                </button>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Installation</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Large-scale deployment</li>
                  <li>• Site survey and planning</li>
                  <li>• Project management</li>
                  <li>• Staff training program</li>
                  <li>• Ongoing maintenance</li>
                </ul>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors w-full">
                  Get Quote
                </button>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Service Areas</h2>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Canada</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Ontario</li>
                    <li>• Quebec</li>
                    <li>• British Columbia</li>
                    <li>• Alberta</li>
                    <li>• Manitoba</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">United States</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• New York</li>
                    <li>• California</li>
                    <li>• Texas</li>
                    <li>• Florida</li>
                    <li>• Illinois</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">International</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• United Kingdom</li>
                    <li>• Germany</li>
                    <li>• Australia</li>
                    <li>• Japan</li>
                    <li>• Contact for other regions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Installation FAQ</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">How long does installation take?</h3>
                <p className="text-gray-300">Most installations are completed in 2-4 hours, depending on system complexity and property size.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Do I need to be present during installation?</h3>
                <p className="text-gray-300">Yes, we require someone to be present for the entire installation process for security and training purposes.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">What's included in the installation service?</h3>
                <p className="text-gray-300">Installation includes mounting, wiring, configuration, testing, and basic operation training.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Is there a warranty on installation work?</h3>
                <p className="text-gray-300">Yes, all installation work comes with a 2-year warranty covering workmanship and materials.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-cyan-900 to-blue-900 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Schedule Your Installation?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Our certified technicians are ready to install your FlashFog security system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/about-us" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Installation
              </a>
              <a 
                href="/store" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Shop Systems
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Installation;