import styled from "styled-components";
import { Card } from "../UI/Card";

export const CourseCardWrapper = styled(Card)`
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export const CourseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CourseLabel = styled.span`
  color: ${(props) => props.theme.colors.gray[600]};
  font-size: 14px;
`;

export const CourseValue = styled.span`
  font-weight: 600;
  font-size: 14px;
`;
