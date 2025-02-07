import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, GraduationCap, MessageCircle } from 'lucide-react';

const Features = () => (
  <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    {[{
      icon: <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />,
      title: 'Опытные преподаватели',
      text: 'Носители языка с опытом преподавания'
    }, {
      icon: <Calendar className="w-12 h-12 text-blue-600 mb-4" />,
      title: 'Гибкий график',
      text: 'Занятия в удобное для вас время'
    }, {
      icon: <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />,
      title: 'Разговорная практика',
      text: 'Акцент на живое общение'
    }].map(({ icon, title, text }, index) => (
      <Card key={index}>
        <CardContent className="pt-6">
          {icon}
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{text}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default Features;
