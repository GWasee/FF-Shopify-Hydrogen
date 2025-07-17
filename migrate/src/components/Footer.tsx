import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black border-t-2 border-yellow-400 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-cyan-400 font-bold text-lg mb-4">FLASHFOG</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a></li>
              <li><a href="/all-products" className="text-cyan-400 hover:text-cyan-300 transition-colors">All products</a></li>
              <li><a href="/store" className="text-cyan-400 hover:text-cyan-300 transition-colors">Store</a></li>
              <li><a href="/photo-gallery" className="text-cyan-400 hover:text-cyan-300 transition-colors">Photo gallery</a></li>
            </ul>
            <h4 className="text-cyan-400 font-bold text-lg mt-6 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about-us" className="text-cyan-400 hover:text-cyan-300 transition-colors">About us / Contact us</a></li>
              <li><a href="/return-policy" className="text-cyan-400 hover:text-cyan-300 transition-colors">Return policy</a></li>
              <li><a href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 transition-colors">Privacy policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-400 font-bold text-lg mb-4">Technologies</h3>
            <ul className="space-y-2">
              <li><a href="/fog-details" className="text-cyan-400 hover:text-cyan-300 transition-colors">Security fog (details)</a></li>
              <li><a href="/light-barrier" className="text-cyan-400 hover:text-cyan-300 transition-colors">Light barrier</a></li>
              <li><a href="/sound-barrier" className="text-cyan-400 hover:text-cyan-300 transition-colors">Sound Barrier</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-400 font-bold text-lg mb-4">Get yours</h3>
            <ul className="space-y-2">
              <li><a href="/store" className="text-cyan-400 hover:text-cyan-300 transition-colors">Store</a></li>
              <li><a href="/photo-gallery" className="text-cyan-400 hover:text-cyan-300 transition-colors">Photo gallery</a></li>
              <li><a href="/all-products" className="text-cyan-400 hover:text-cyan-300 transition-colors">All products</a></li>
              <li><a href="/model-selection" className="text-cyan-400 hover:text-cyan-300 transition-colors">Model selection</a></li>
              <li><a href="/installation" className="text-cyan-400 hover:text-cyan-300 transition-colors">Installation</a></li>
              <li><a href="/is-my-site-right" className="text-cyan-400 hover:text-cyan-300 transition-colors">Is my site right?</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-400 font-bold text-lg mb-4">Dealers</h3>
            <ul className="space-y-2">
              <li><a href="/installer-program" className="text-cyan-400 hover:text-cyan-300 transition-colors">Installer program</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-2xl font-bold text-white mb-2">flashfog</div>
          <div className="text-orange-500 font-bold">25 YEARS</div>
          <div className="text-cyan-400 mt-2">
            <a href="/about-us" className="hover:text-cyan-300 transition-colors">Contact us</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">JOIN OUR MAILING LIST!</h4>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-medium transition-colors"
              >
                Send
              </button>
            </form>
          </div>

          <div className="text-center">
            <h4 className="text-white font-bold mb-4">FRIENDS TELL FRIENDS!</h4>
            <div className="flex gap-4">
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p className="mb-2">
            By entering your email address, you grant FlashFog permission to send you
            messages about FlashFog. You may unsubscribe at any time. Your information is
            protected by the <a href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300">FlashFog Privacy Statement</a>.
          </p>
          <p className="mb-2">
            Created by <span className="text-cyan-400">Arias Tech Ltd.</span> All rights reserved. ©2025
          </p>
          <p className="mb-2">
            <span className="text-cyan-400">98 Advance Rd, Toronto, Ontario, M8Z 2T7, Canada</span>
          </p>
          <p className="mb-2">
            <span className="text-cyan-400">(905) 502-0249 • (888) 282-7740</span>
          </p>
          <p>
            FlashFog® is a trade mark of <span className="text-cyan-400">Arias Tech Ltd.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;