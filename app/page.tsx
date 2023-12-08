"use client";

import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';

import '../app/globals.css';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page of my portfolio website.</p>
    </div>
  );
};

export default Home;