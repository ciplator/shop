import React from "react";
import { Button } from "../UI/Button";
import { CourseCardWrapper, CourseInfo, CourseLabel, CourseValue } from "./CourseCard.styles";

export const CourseCard = ({ course }) => (
  <CourseCardWrapper>
    <h3>{course.title}</h3>
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
      <CourseValue>${course.price} / мес</CourseValue>
    </CourseInfo>
    <Button fullWidth>Записаться</Button>
  </CourseCardWrapper>
);
