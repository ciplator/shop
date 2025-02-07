import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Courses from './components/Courses';

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <Features />
      <Courses onSelect={setSelectedCourse} />
    </div>
  );
};

export default App;
