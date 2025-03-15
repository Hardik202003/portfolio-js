import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiX, FiFileText } from 'react-icons/fi';
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
  background: ${props => props.scrolled 
    ? 'rgba(10, 25, 47, 0.95)' 
    : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled 
    ? '0 10px 30px -10px rgba(2, 12, 27, 0.5)' 
    : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
`;

const Logo = styled.div`
  a {
    color: var(--secondary-color);
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: bold;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--secondary-color);
      bottom: 5px;
      right: -8px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.div`
  a {
    color: var(--light-text-color);
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
    font-size: 14px;
    font-family: var(--font-mono);
    position: relative;
    padding: 5px 0;
    
    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--secondary-color);
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--secondary-color);
      
      &:before {
        width: 100%;
      }
    }
    
    span {
      color: var(--secondary-color);
      margin-right: 5px;
      font-size: 12px;
    }
  }
`;

const ResumeButton = styled(motion.a)`
  padding: 0.7rem 1.2rem;
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  color: var(--secondary-color);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--secondary-color);
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;

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
  background: var(--card-background);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: var(--secondary-color);
  font-size: 1.8rem;
  cursor: pointer;
`;

const MobileNavLink = styled.div`
  margin: 1.5rem 0;
  
  a {
    color: var(--light-text-color);
    text-decoration: none;
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s ease;
    font-family: var(--font-mono);
    display: flex;
    align-items: center;
    
    span {
      color: var(--secondary-color);
      margin-right: 10px;
      font-size: 14px;
    }

    &:hover {
      color: var(--secondary-color);
    }
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  backdrop-filter: blur(5px);
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
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>
            <span>01.</span>About
          </a>
        </NavLink>
        <NavLink>
          <a href="#projects" onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}>
            <span>02.</span>Projects
          </a>
        </NavLink>
        <NavLink>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>
            <span>03.</span>Contact
          </a>
        </NavLink>
        <ResumeButton 
          href={process.env.PUBLIC_URL + "/hardik-resume.pdf"} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
        >
          <FiFileText /> Resume
        </ResumeButton>
      </NavLinks>
      
      <MobileMenuButton onClick={toggleMenu}>
        <FiMenu />
      </MobileMenuButton>
      
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
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
                <a href="#about" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}>
                  <span>01.</span>About
                </a>
              </MobileNavLink>
              <MobileNavLink>
                <a href="#projects" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}>
                  <span>02.</span>Projects
                </a>
              </MobileNavLink>
              <MobileNavLink>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}>
                  <span>03.</span>Contact
                </a>
              </MobileNavLink>
              <ResumeButton 
                href={process.env.PUBLIC_URL + "/hardik-resume.pdf"} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ margin: '20px 0' }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <FiFileText /> Resume
              </ResumeButton>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;