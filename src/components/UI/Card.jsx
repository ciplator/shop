import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 0.5rem 0;
`;

export const CardHeader = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
