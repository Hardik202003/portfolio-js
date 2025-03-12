import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent'};
  transition: background 0.3s ease;
  z-index: 1000;
`;

const Logo = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #64ffda;
    }
  }
`;

const ResumeButton = styled.a`
  padding: 0.5rem 1rem;
  border: 1px solid #64ffda;
  border-radius: 4px;
  color: #64ffda;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 75%;
  max-width: 300px;
  background: #112240;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const MobileNavLink = styled.div`
  margin: 1rem 0;
  
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #64ffda;
    }
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      
      // Scroll to the section with smooth behavior
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav scrolled={scrolled}>
      <Logo>
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>HK</Link>
      </Logo>
      
      <NavLinks>
        <NavLink>
          <a onClick={() => scrollToSection('about')}>About</a>
        </NavLink>
        <NavLink>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
        </NavLink>
        <NavLink>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </NavLink>
        <ResumeButton 
          href="/Hardik-Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Resume
        </ResumeButton>
      </NavLinks>
      
      <MobileMenuButton onClick={toggleMenu}>
        <FiMenu />
      </MobileMenuButton>
      
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <CloseButton onClick={toggleMenu}>
              <FiX />
            </CloseButton>
            
            <MobileNavLink>
              <a onClick={() => scrollToSection('about')}>About</a>
            </MobileNavLink>
            <MobileNavLink>
              <a onClick={() => scrollToSection('projects')}>Projects</a>
            </MobileNavLink>
            <MobileNavLink>
              <a onClick={() => scrollToSection('contact')}>Contact</a>
            </MobileNavLink>
            <ResumeButton 
              href="/Hardik-Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ margin: '20px 0' }}
            >
              Resume
            </ResumeButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;