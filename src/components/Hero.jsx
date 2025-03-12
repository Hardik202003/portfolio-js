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
  
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  
  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

const MediumText= styled(motion.p)`
  color: var(--secondary-color);
  font-family: var(--font-mono);
  font-size: 16px;
  margin-bottom: 20px;
`;

const BigHeading = styled(motion.h1)`
  font-size: 80px;
  margin: 0;
  color: var(--light-text-color);
  
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
  max-width: 500px;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.5;
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

  return (
    <HeroSection id="hero">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MediumText variants={itemVariants}>Hi, myself is</MediumText>
        <BigHeading variants={itemVariants}>Hardik Suvan.</BigHeading>
        <SubHeading variants={itemVariants}> And I'm Web Developer.</SubHeading>
        <Description variants={itemVariants}>
        Skilled Web Developer with experience in designing and developing dynamic, responsive, and user-friendly web applications. Proficient in HTML, CSS, JavaScript (ES6+), React.js, and MongoDB, with a strong understanding of front-end development.
        </Description>
        <motion.div variants={itemVariants}>
          <LinkButton href="#projects">Check out my work!</LinkButton>
        </motion.div>
      </motion.div>
    </HeroSection>
  );
};

export default Hero; 