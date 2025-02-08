import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CourseCard = ({ course, onSelect }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader><CardTitle>{course.title}</CardTitle></CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex items-center justify-between"><span className="text-gray-600">Уровень:</span><span className="font-semibold">{course.level}</span></div>
        <div className="flex items-center justify-between"><span className="text-gray-600">Длительность:</span><span className="font-semibold">{course.duration}</span></div>
        <div className="flex items-center justify-between"><span className="text-gray-600">Цена:</span><span className="font-semibold">{course.price} ₽/мес</span></div>
        <Button className="w-full" onClick={() => onSelect(course)}>Записаться</Button>
      </div>
    </CardContent>
  </Card>
);

export default CourseCard;
