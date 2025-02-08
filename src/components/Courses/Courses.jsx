import React from 'react';
import CourseCard from '../CursesCard/CourseCard';

const courses = [
  { id: 1, title: 'Базовый английский', level: 'A1-A2', price: '2999', duration: '3 месяца' },
  { id: 2, title: 'Разговорный английский', level: 'B1-B2', price: '3999', duration: '4 месяца' },
  { id: 3, title: 'Бизнес английский', level: 'B2-C1', price: '4999', duration: '6 месяцев' }
];

const Courses = ({ onSelect }) => (
  <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-8 text-center">Наши курсы</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {courses.map(course => <CourseCard key={course.id} course={course} onSelect={onSelect} />)}
    </div>
  </div>
);

export default Courses;
