import React from 'react';
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

const FooterText = styled.p`
  color: #999;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  text-decoration: none;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText> 2024 Sitia. Tous droits rservs.</FooterText>
        <FooterLinks>
          {/* Les liens sociaux seront ajoutés ici plus tard */}
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
}
