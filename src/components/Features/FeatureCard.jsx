import { FeatureCardWrapper, FeatureIcon, FeatureTitle, FeatureDescription } from './FeatureCard.styles';

export const FeatureCard = ({ icon: Icon, title, description }) => (
  <FeatureCardWrapper>
    <FeatureIcon>
      <Icon size={48} />
    </FeatureIcon>
    <FeatureTitle>{title}</FeatureTitle>
    <FeatureDescription>{description}</FeatureDescription>
  </FeatureCardWrapper>
);
