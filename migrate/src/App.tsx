import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReturnPolicy from './pages/ReturnPolicy';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FogDetails from './pages/FogDetails';
import SecurityStrobe from './pages/SecurityStrobe';
import SoundBarrier from './pages/SoundBarrier';
import Store from './pages/Store';
import PhotoGallery from './pages/PhotoGallery';
import AllProducts from './pages/AllProducts';
import ModelSelection from './pages/ModelSelection';
import Installation from './pages/Installation';
import InstallerProgram from './pages/InstallerProgram';
import LightBarrier from './pages/LightBarrier';
import IsMySiteRight from './pages/IsMySiteRight';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Helmet>
          <title>FlashFog Security - Professional Security Fog Systems</title>
          <meta name="description" content="FlashFog Security provides professional security fog systems, light barriers, and sound barriers for 25+ years. Protect your property with advanced security technology." />
          <meta name="keywords" content="security fog, fog security system, security strobe, sound barrier, light barrier, burglary protection, security technology" />
          <meta name="author" content="Arias Tech Ltd." />
          <meta property="og:title" content="FlashFog Security - Professional Security Fog Systems" />
          <meta property="og:description" content="Advanced security fog systems and barriers for comprehensive property protection." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://flashfog.com" />
        </Helmet>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/fog-details" element={<FogDetails />} />
            <Route path="/security-strobe" element={<SecurityStrobe />} />
            <Route path="/sound-barrier" element={<SoundBarrier />} />
            <Route path="/store" element={<Store />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/model-selection" element={<ModelSelection />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/installer-program" element={<InstallerProgram />} />
            <Route path="/light-barrier" element={<LightBarrier />} />
            <Route path="/is-my-site-right" element={<IsMySiteRight />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;