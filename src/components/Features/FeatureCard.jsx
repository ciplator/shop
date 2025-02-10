import styled from 'styled-components';
import { Card } from "@/components/ui/card";

const FeatureCardWrapper = styled(Card)`
  padding: 1.5rem;
  text-align: center;
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
