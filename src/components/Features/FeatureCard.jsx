// src/components/Features/FeatureCard.jsx
import styled from 'styled-components';

const FeatureCardWrapper = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const FeatureIcon = styled.div`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.gray[600]};
`;

export const FeatureCard = ({ icon: Icon, title, description }) => (
  <FeatureCardWrapper>
    <FeatureIcon>
      <Icon size={48} />
    </FeatureIcon>
    <FeatureTitle>{title}</FeatureTitle>
    <FeatureDescription>{description}</FeatureDescription>
  </FeatureCardWrapper>
);
