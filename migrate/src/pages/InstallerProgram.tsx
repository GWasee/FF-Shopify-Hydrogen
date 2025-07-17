import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, DollarSign, Users, BookOpen, CheckCircle, Star } from 'lucide-react';

const InstallerProgram: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    experience: '',
    location: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Installer application:', formData);
    // Handle form submission
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Commissions',
      description: 'Earn 15-25% commission on all installations and product sales',
      details: ['Base commission: 15%', 'Volume bonus: up to 25%', 'Monthly performance bonuses', 'Recurring maintenance revenue']
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Training',
      description: 'Complete training program covering all FlashFog products and installation techniques',
      details: ['3-day certification course', 'Online training modules', 'Technical documentation', 'Ongoing education']
    },
    {
      icon: Users,
      title: 'Marketing Support',
      description: 'Professional marketing materials and lead generation support',
      details: ['Branded marketing materials', 'Lead referral program', 'Co-op advertising', 'Digital marketing tools']
    },
    {
      icon: Award,
      title: 'Certification & Recognition',
      description: 'Official FlashFog certification and recognition programs',
      details: ['Certified installer badge', 'Performance awards', 'Annual recognition event', 'Professional credentials']
    }
  ];

  const requirements = [
    'Valid business license and insurance',
    'Minimum 2 years security system installation experience',
    'Electrical certification or equivalent experience',
    'Professional references from previous clients',
    'Commitment to FlashFog quality standards',
    'Ability to provide local customer support'
  ];

  const trainingModules = [
    {
      title: 'FlashFog Technology Overview',
      duration: '4 hours',
      topics: ['Fog generation principles', 'System components', 'Safety protocols']
    },
    {
      title: 'Installation Techniques',
      duration: '8 hours',
      topics: ['Site assessment', 'Mounting procedures', 'Electrical connections', 'System configuration']
    },
    {
      title: 'Testing & Commissioning',
      duration: '4 hours',
      topics: ['System testing', 'Performance verification', 'Documentation', 'Customer handover']
    },
    {
      title: 'Troubleshooting & Maintenance',
      duration: '4 hours',
      topics: ['Common issues', 'Diagnostic procedures', 'Preventive maintenance', 'Customer support']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Installer Program - Become a Certified FlashFog Installer</title>
        <meta name="description" content="Join the FlashFog certified installer program. Earn competitive commissions, receive comprehensive training, and grow your security business with professional support." />
        <meta name="keywords" content="security installer program, FlashFog dealer, certified installer, security business opportunity, installer training, security system dealer" />
        <link rel="canonical" href="https://flashfog.com/installer-program" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Installer Program
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Join our network of certified professionals and grow your security business
          </p>

          {/* Hero Section */}
          <div className="relative mb-16">
            <img 
              src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Professional installer team"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Become a Certified Partner</h2>
                <p className="text-lg">Join the leading network of security professionals</p>
              </div>
            </div>
          </div>

          {/* Program Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{benefit.description}</p>
                    <ul className="space-y-1">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Requirements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Requirements</h2>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Training Program */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Training Program</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingModules.map((module, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                    <span className="text-cyan-400 font-medium">{module.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-6 rounded-lg inline-block">
                <h3 className="text-xl font-bold text-white mb-2">Total Training: 20 Hours</h3>
                <p className="text-gray-200">3-day intensive certification course + ongoing support</p>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "Joining the FlashFog installer program was the best decision for our business. 
                  We've increased our revenue by 40% in the first year and the training was exceptional."
                </p>
                <div className="text-white font-semibold">- Mike Johnson, SecureTech Solutions</div>
                <div className="text-gray-400 text-sm">Toronto, ON</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "The marketing support and lead referrals have been incredible. 
                  FlashFog's reputation opens doors and makes sales much easier."
                </p>
                <div className="text-white font-semibold">- Sarah Chen, Elite Security Systems</div>
                <div className="text-gray-400 text-sm">Vancouver, BC</div>
              </div>
            </div>
          </section>

          {/* Application Form */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Apply Now</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Contact Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Years of Experience *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
                      required
                    >
                      <option value="">Select experience level</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Service Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, Province/State"
                      className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Tell us about your business</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your current business, experience with security systems, and why you want to join our program"
                      className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none h-32"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Next Steps</h3>
                  <ol className="space-y-3 text-gray-200">
                    <li className="flex items-start">
                      <span className="bg-cyan-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      Submit your application
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      Phone interview with our team
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      Background and reference check
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                      Attend certification training
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                      Start earning with FlashFog!
                    </li>
                  </ol>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Questions?</h3>
                  <p className="text-gray-300 mb-4">
                    Contact our installer program coordinator for more information.
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <div>📧 installers@flashfog.com</div>
                    <div>📞 (888) 282-7740 ext. 3</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-yellow-900 to-orange-900 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Join the FlashFog installer network and start earning more today
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Apply Now
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default InstallerProgram;