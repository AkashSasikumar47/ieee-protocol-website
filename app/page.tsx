"use client";

import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import HeroSection from '../components/Home/HeroSection/HeroSection';
import AboutMeSection from '../components/Home/AboutSection/AboutSection';
import SelectedWork from '../components/Home/SelectedWork/SelectedWork';
import MyProcessSection from '../components/Home/MyProcessSection/MyProcessSection';
import FooterSection from '../components/Home/FooterSection/FooterSection';

import '../app/globals.css';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <SelectedWork />
      <MyProcessSection />
      <FooterSection />
    </div>
  );
};

export default Home;
