import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FaCode, FaPalette, FaMobileAlt, FaRocket } from 'react-icons/fa';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesSection = styled(motion.section)`
  padding: 100px 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #2563eb, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-10px);

    &::before {
      opacity: 0.1;
    }
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.8rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1e293b;
  font-weight: 700;
`;

const ServiceDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const services: Service[] = [
  {
    icon: <FaCode />,
    title: 'Développement Web',
    description: 'Création de sites web et d\'applications modernes, réactifs et performants avec les dernières technologies.',
  },
  {
    icon: <FaPalette />,
    title: 'Design UI/UX',
    description: 'Conception d\'interfaces utilisateur intuitives et esthétiques pour une expérience utilisateur optimale.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Applications Mobiles',
    description: 'Développement d\'applications mobiles natives et cross-platform pour iOS et Android.',
  },
  {
    icon: <FaRocket />,
    title: 'Stratégie Digitale',
    description: 'Accompagnement dans votre transformation digitale et optimisation de votre présence en ligne.',
  },
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <ServicesSection 
      ref={ref}
      as={motion.section}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="services"
    >
      <Container>
        <Title
          variants={titleVariants}
        >
          Nos Services
        </Title>
        <Grid
          as={motion.div}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </Grid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
