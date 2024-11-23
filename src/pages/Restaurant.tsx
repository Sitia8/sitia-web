import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RestaurantPage = styled.div`
  min-height: 100vh;
  font-family: 'Playfair Display', serif;
`;

const Header = styled.header<{ isScrolled?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 40px;
  background: ${props => props.isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent'};
  transition: background 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 24px;
  font-weight: 500;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  
  &:hover {
    color: #d4af37;
  }
`;

const Hero = styled.section`
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: 400;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-style: italic;
`;

const Section = styled.section<{ dark?: boolean }>`
  padding: 100px 0;
  background: ${props => props.dark ? '#0f0f0f' : 'white'};
  color: ${props => props.dark ? 'white' : '#0f0f0f'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 40px;
  font-weight: 400;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const MenuItem = styled.div`
  text-align: center;
`;

const DishName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 400;
`;

const DishDescription = styled.p<{ dark?: boolean }>`
  font-size: 1.1rem;
  color: ${props => props.dark ? '#a0a0a0' : '#666'};
  margin-bottom: 15px;
  font-style: italic;
`;

const Price = styled.span`
  font-size: 1.2rem;
  color: #d4af37;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin-top: 60px;
`;

const GalleryImage = styled.div<{ src: string }>`
  aspect-ratio: 1;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Restaurant = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Foie Gras de Canard",
      description: "Mi-cuit maison, chutney de figues et pain toasté",
      price: "28€"
    },
    {
      name: "Saint-Jacques",
      description: "Snackées, risotto aux champignons, émulsion au safran",
      price: "32€"
    },
    {
      name: "Filet de Bœuf Rossini",
      description: "Sauce aux truffes, pommes duchesse",
      price: "42€"
    },
    {
      name: "Homard Bleu",
      description: "En thermidor, légumes de saison",
      price: "48€"
    },
    {
      name: "Soufflé au Chocolat",
      description: "Grand Cru Valrhona, glace vanille bourbon",
      price: "16€"
    },
    {
      name: "Mille-Feuille",
      description: "Vanille de Madagascar, caramel au beurre salé",
      price: "14€"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ];

  return (
    <RestaurantPage>
      <Header isScrolled={isScrolled}>
        <Logo to="/">Sitia</Logo>
        <Nav>
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#galerie">Galerie</NavLink>
          <NavLink href="#contact">Réserver</NavLink>
        </Nav>
      </Header>

      <Hero>
        <HeroContent>
          <Title>Sitia</Title>
          <Subtitle>Une expérience gastronomique d&apos;exception</Subtitle>
        </HeroContent>
      </Hero>

      <Section id="menu" dark>
        <Container>
          <SectionTitle>Notre Carte</SectionTitle>
          <MenuGrid>
            {menuItems.map((item, index) => (
              <MenuItem key={index}>
                <DishName>{item.name}</DishName>
                <DishDescription dark>{item.description}</DishDescription>
                <Price>{item.price}</Price>
              </MenuItem>
            ))}
          </MenuGrid>
        </Container>
      </Section>

      <Section id="galerie">
        <Container>
          <SectionTitle>Notre Cuisine en Images</SectionTitle>
          <ImageGallery>
            {galleryImages.map((image, index) => (
              <GalleryImage key={index} src={image} />
            ))}
          </ImageGallery>
        </Container>
      </Section>

      <Section id="contact" dark>
        <Container>
          <SectionTitle>Réservations</SectionTitle>
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
            Pour réserver une table, appelez-nous au
          </p>
          <p style={{ fontSize: '2rem', color: '#d4af37', marginBottom: '30px' }}>
            01 23 45 67 89
          </p>
          <p style={{ fontSize: '1.2rem' }}>
            Ouvert tous les jours de 12h à 14h30 et de 19h à 22h30
          </p>
        </Container>
      </Section>
    </RestaurantPage>
  );
};

export default Restaurant;
