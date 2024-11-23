import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const PortfolioSection = styled.section`
  padding: 6rem 2rem;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectCard = styled(motion.a)`
  display: block;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: inherit;
  margin: 0 auto;
  max-width: 800px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 2.5rem;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
`;

const TechStack = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  background: #f0f2f5;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #666;
`;

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <PortfolioSection ref={ref}>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Nos Réalisations
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Découvrez comment nous transformons les idées en expériences numériques exceptionnelles
        </Subtitle>
        <ProjectCard 
          href="/restaurant"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ProjectImage 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" 
            alt="Le Gourmet - Site Web Restaurant" 
          />
          <ProjectContent>
            <ProjectTitle>Le Gourmet</ProjectTitle>
            <ProjectDescription>
              Une vitrine digitale élégante pour un restaurant gastronomique français. 
              Ce projet démontre notre expertise dans la création d&apos;expériences web 
              immersives qui mettent en valeur l&apos;authenticité et le savoir-faire de nos clients.
            </ProjectDescription>
            <TechStack>
              <TechTag>React.js</TechTag>
              <TechTag>TypeScript</TechTag>
              <TechTag>Styled Components</TechTag>
              <TechTag>Framer Motion</TechTag>
              <TechTag>Responsive Design</TechTag>
            </TechStack>
          </ProjectContent>
        </ProjectCard>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;
