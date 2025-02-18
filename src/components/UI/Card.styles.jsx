import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const CardContent = styled.div`
  flex-grow: 1;
`;
