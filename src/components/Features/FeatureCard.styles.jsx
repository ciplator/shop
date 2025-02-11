import styled from 'styled-components';

export const FeatureCardWrapper = styled.div`
  padding: 24px;
  background: ${props => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const FeatureIcon = styled.div`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 16px;
`;

export const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  font-size: 14px;
`;
