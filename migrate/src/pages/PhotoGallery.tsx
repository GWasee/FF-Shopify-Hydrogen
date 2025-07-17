import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'fog',
      title: 'FlashFog System in Action',
      description: 'Security fog deployment in retail environment'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'installation',
      title: 'Professional Installation',
      description: 'Certified technician installing FlashFog system'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'products',
      title: 'FlashFog Pro 2000',
      description: 'Professional grade fog security system'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'strobe',
      title: 'Security Strobe System',
      description: 'High-intensity strobe light installation'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'sound',
      title: 'Sound Barrier Installation',
      description: 'Audio deterrent system setup'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'installation',
      title: 'Team Installation',
      description: 'Professional installation team at work'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'fog',
      title: 'Warehouse Protection',
      description: 'FlashFog system protecting warehouse facility'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'products',
      title: 'Control Panel',
      description: 'Advanced control system interface'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'installation',
      title: 'Retail Installation',
      description: 'FlashFog system installed in retail store'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'fog', name: 'Security Fog' },
    { id: 'strobe', name: 'Strobe Systems' },
    { id: 'sound', name: 'Sound Barriers' },
    { id: 'products', name: 'Products' },
    { id: 'installation', name: 'Installations' }
  ];

  const filteredImages = images.filter(image => 
    selectedCategory === 'all' || image.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Photo Gallery - FlashFog Security Systems in Action</title>
        <meta name="description" content="View FlashFog security systems in action. See professional installations, fog deployment, and security equipment protecting properties worldwide." />
        <meta name="keywords" content="security fog photos, FlashFog installation, security system gallery, fog security images, professional installation photos" />
        <link rel="canonical" href="https://flashfog.com/photo-gallery" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            See FlashFog security systems in action protecting properties worldwide
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-cyan-400 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                >
                  <X className="w-8 h-8" />
                </button>
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="max-w-full max-h-full object-contain"
                />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">{filteredImages[selectedImage].title}</h3>
                  <p className="text-gray-200">{filteredImages[selectedImage].description}</p>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-cyan-900 to-blue-900 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Protect Your Property?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Join thousands of satisfied customers who trust FlashFog for their security needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/store" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Shop Now
              </a>
              <a 
                href="/about-us" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;