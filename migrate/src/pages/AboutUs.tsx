import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">About us.</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We are a highly technical firm with programming bases on 
              security, and we've been keeping fog technology, light barriers 
              and sound barriers in the forefront of development.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Starting our industrial success in Kingston, Canada, USA, 
              Europe and Asia, we've been helping others with advanced 
              technology using a mix distribution model, great support 
              and competitive pricing always.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This year we said we did not want to compromise the 
              innovative engineering teams we've worked together by 
              focusing on the needs of our customers exclusively.
            </p>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
              alt="FlashFog team at trade show"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        <div className="relative mb-16">
          <div 
            className="h-96 bg-cover bg-center rounded-lg relative"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-6xl font-bold mb-2">Toronto</h2>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-sm font-semibold">ARIAS TECH LTD.</div>
                <div className="text-sm">Toronto, ON</div>
                <div className="text-sm">Toronto, ON, M8Z 2T7</div>
                <div className="text-sm mt-2">
                  <a href="#" className="text-cyan-400">www.flashfog.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Contact us.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="text-cyan-400 text-2xl font-semibold mb-2">(888) 282-7740</div>
              <div className="text-gray-300">(905) 502-0249</div>
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-white">flashfog</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-cyan-400 font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-300 text-sm">For technical questions and help</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-cyan-400 font-semibold mb-2">Sales</h3>
              <p className="text-gray-300 text-sm">For orders and quotes</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-cyan-400 font-semibold mb-2">First responders / Authorities</h3>
              <p className="text-gray-300 text-sm">Special pricing available</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-cyan-400 font-semibold mb-2">Media</h3>
              <p className="text-gray-300 text-sm">Press and media inquiries</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Our Story.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">A security business</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <span className="text-cyan-400 font-bold">23 years in fog security</span>
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Since 1995 when we started we've been Arias tech and 
                flashfog with our subsidiary/branch companies.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We had a we spent time to provide the most value 
                to our customers, for our prices we have ordered over 
                1000 units mostly from ourselves, in more than 
                20 countries.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our business is comprehensive integrated solutions 
                professionally sound and systematically organized. Our 
                products are also guaranteed by our network of 
                competent installers and dealers office.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                alt="Trade show booth"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img 
            src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
            alt="Company team"
            className="rounded-lg shadow-lg w-full h-auto"
          />
          <img 
            src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
            alt="Team meeting"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;