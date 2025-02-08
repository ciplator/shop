import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => (
  <div className="bg-blue-600 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-4">Изучайте английский онлайн</h2>
      <p className="text-xl mb-8">Индивидуальные занятия с носителями языка</p>
      <Button className="bg-white text-blue-600 hover:bg-gray-100">Попробовать бесплатно</Button>
    </div>
  </div>
);

export default HeroSection;
