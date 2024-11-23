import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaBars } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  text-decoration: none !important;

  &:hover {
    color: #007bff;
    text-decoration: none !important;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? '#007bff' : '#666'};
  text-decoration: none !important;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    color: #007bff;
    background: rgba(0, 123, 255, 0.1);
    text-decoration: none !important;
  }
`;

const ContactLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 1.2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #1a1a1a;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 999;
`;

const MobileNavLink = styled(Link)`
  color: #333;
  text-decoration: none !important;
  font-size: 1.1rem;
  padding: 1rem;
  text-align: center;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
    text-decoration: none !important;
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <HeaderContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        style={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <Nav>
          <Logo to="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sitia
            </motion.span>
          </Logo>

          <NavLinks>
            <NavLink to="/" $isActive={isActive('/')}>
              Accueil
            </NavLink>
            <NavLink to="/portfolio" $isActive={isActive('/portfolio')}>
              Portfolio
            </NavLink>
            <NavLink to="/services" $isActive={isActive('/services')}>
              Services
            </NavLink>
            <ContactLink to="/contact" $isActive={isActive('/contact')}>
              <FaEnvelope />
              Contact
            </ContactLink>
          </NavLinks>

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FaBars />
          </MobileMenuButton>
        </Nav>
      </HeaderContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Accueil
            </MobileNavLink>
            <MobileNavLink to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>
              Portfolio
            </MobileNavLink>
            <MobileNavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
