import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p, a {
    color: #999;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #fff;
    font-size: 1.5rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>À propos</h3>
            <p>Sitia crée des expériences web uniques et innovantes pour donner vie à vos projets digitaux.</p>
          </motion.div>
        </FooterSection>

        <FooterSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Contact</h3>
            <p>Email: contact@sitia.fr</p>
            <p>Téléphone: +33 1 23 45 67 89</p>
            <p>Adresse: Paris, France</p>
          </motion.div>
        </FooterSection>

        <FooterSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Services</h3>
            <p>Développement Web</p>
            <p>Design UI/UX</p>
            <p>Marketing Digital</p>
            <p>SEO</p>
          </motion.div>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
