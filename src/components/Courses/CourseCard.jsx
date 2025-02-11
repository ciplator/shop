import { Button } from '../UI/Button';
import { CardHeader, CardTitle, CardContent } from '../UI/Card';
import { CourseCardWrapper, CourseInfo, CourseLabel, CourseValue } from './CourseCard.styles';

export const CourseCard = ({ course }) => (
  <CourseCardWrapper>
    <CardHeader>
      <CardTitle>{course.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CourseInfo>
        <CourseLabel>Уровень:</CourseLabel>
        <CourseValue>{course.level}</CourseValue>
      </CourseInfo>
      <CourseInfo>
        <CourseLabel>Длительность:</CourseLabel>
        <CourseValue>{course.duration}</CourseValue>
      </CourseInfo>
      <CourseInfo>
        <CourseLabel>Цена:</CourseLabel>
        <CourseValue>{course.price} ₽/мес</CourseValue>
      </CourseInfo>
      <Button fullWidth>Записаться</Button>
    </CardContent>
  </CourseCardWrapper>
);
