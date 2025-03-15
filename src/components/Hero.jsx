import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LinkButton } from '../styles/StyledComponents';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 150px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(100, 255, 218, 0.1), transparent 50%);
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  
  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

const MediumText = styled(motion.p)`
  color: var(--secondary-color);
  font-family: var(--font-mono);
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

const BigHeading = styled(motion.h1)`
  font-size: 80px;
  margin: 0;
  color: var(--light-text-color);
  background: linear-gradient(to right, var(--light-text-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 60px;
  }
  
  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const SubHeading = styled(motion.h2)`
  font-size: 60px;
  margin: 0 0 20px 0;
  color: var(--text-color);
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Description = styled(motion.p)`
  max-width: 600px;
  margin-bottom: 40px;
  font-size: 20px;
  line-height: 1.6;
  color: var(--text-color);
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
`;

const SecondaryButton = styled(LinkButton)`
  background-color: transparent;
  color: var(--light-text-color);
  border: 1px solid var(--light-text-color);
  
  &:hover {
    background-color: rgba(204, 214, 246, 0.1);
  }
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;

const Shape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.05);
  
  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: 10%;
    right: 10%;
  }
  
  &:nth-child(2) {
    width: 200px;
    height: 200px;
    bottom: 20%;
    left: 5%;
  }
  
  &:nth-child(3) {
    width: 150px;
    height: 150px;
    top: 30%;
    left: 20%;
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const shapeVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="hero">
      <FloatingShapes>
        <Shape 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            transition: { duration: 8, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        <Shape 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            transition: { duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }
          }}
        />
        <Shape 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            transition: { duration: 12, repeat: Infinity, repeatType: "reverse", delay: 2 }
          }}
        />
      </FloatingShapes>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MediumText variants={itemVariants}>Hi, my name is</MediumText>
        <BigHeading variants={itemVariants}>Hardik Suvan.</BigHeading>
        <SubHeading variants={itemVariants}>I'm a Web Developer.</SubHeading>
        <Description variants={itemVariants}>
          Skilled Web Developer with experience in designing and developing dynamic, responsive, and user-friendly web applications. Proficient in HTML, CSS, JavaScript (ES6+), React.js, and MongoDB, with a strong understanding of front-end development.
        </Description>
        <ButtonContainer variants={itemVariants}>
          <LinkButton 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Check out my work!
          </LinkButton>
          <SecondaryButton 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact Me
          </SecondaryButton>
        </ButtonContainer>
      </motion.div>
    </HeroSection>
  );
};

export default Hero; 