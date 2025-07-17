import React, { useState } from 'react';

const ReturnPolicy: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    firstName: '',
    lastName: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RMA Request:', formData);
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-4">
          Refund / Return Policy
        </h1>
        <p className="text-gray-300 text-center mb-12 text-lg">
          The purchaser of FlashFog may return the device for a 100% refund within 14 days of receipt, 
          provided all conditions are met.
        </p>

        <div className="mb-12">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span>
              <span>Refunds take up to six weeks to process, starting on the date we receive the returned device. If you do not receive your money back within six weeks please contact Arias Tech Ltd.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span>
              <span>Shipping charges, handling fees, border and other shipping fees will NOT be reimbursed.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span>
              <span>Damage to the device will result in a deduction from your refund.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span>
              <span>You can expect your refund within four to six weeks of Arias Tech Ltd receiving the returned device.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span>
              <span>The customer is responsible for return shipping costs for repairs, even if under warranty.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span>
              <span>Rental fees are non-refundable. 100% Money Back Guarantee only applies to device purchases.</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Request an RMA</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">How can we help?</label>
                <p className="text-sm text-gray-400 mb-4">
                  Please describe the issue and give us as much background as possible.
                </p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Which FlashFog product? If you need help with more than one product, please fill this same form separately for each issue."
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none h-32"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com preferred"
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  If bought by a corporation, what is the name of your company?
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-medium transition-colors"
              >
                Send
              </button>
            </form>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Reasons for non-refund or refund deductions
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Non authorized return:</h3>
                <p className="text-sm">All returns must receive a valid RMA # from Arias Tech Ltd prior to shipping, and it must be included as a separate sheet of paper in the shipping paper work envelope or pouch.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Non arrival of item, or lack of proof of arrival:</h3>
                <p className="text-sm">For your protection, we recommend that you insure the item for its full commercial value and require signature as proof of delivery. We cannot take responsibility for missing packages or a device that we cannot confirm was returned.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Packaging, substitution, or damage to FlashFog packaging:</h3>
                <p className="text-sm">To protect the merchandise, we require that only the original packaging is used, and that all padding / protective plastic sheets are configured exactly as upon arrival. We will deduct $25 from the refund amount to replace the shipping box or use new padding.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Fluid spillage:</h3>
                <p className="text-sm">No fluid can travel inside fog generators, under any circumstances. Depending on damage caused, up to 100% of refund can be deducted due to fluid spillage. We recommend that you do not ship fluid back to us.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Damaged equipment:</h3>
                <p className="text-sm">If the returned device is damaged for any reason, no refund will be processed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;