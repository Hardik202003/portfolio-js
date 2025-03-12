import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const FooterContainer = styled.footer`
  padding: 20px 0;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 14px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
  a {
    margin: 0 15px;
    color: var(--light-text-color);
    font-size: 35px;
    transition: var(--transition);
    
    &:hover {
      color: var(--secondary-color);
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  color: var(--text-color);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com/Hardik202003" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/hardik-suvan-041b89342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FiLinkedin />
        </a>
        <a href="https://www.instagram.com/__hardik20?igsh=MWtwbWx2d2loNDZ4dA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FiInstagram />
        </a>
      </SocialLinks>
      <Copyright>
        <p>© {new Date().getFullYear()} @Hardik. All Rights Reserved. Built with React.js</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 