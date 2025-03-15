import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, SectionTitle } from '../styles/StyledComponents';

const AboutSection = styled.section`
  padding: 120px 0;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(100, 255, 218, 0.3), transparent);
  }
`;

const AboutContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const AboutText = styled(motion.div)`
  p {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.6;
    color: var(--text-color);
  }
  
  strong {
    color: var(--light-text-color);
  }
`;

const SkillsContainer = styled(motion.div)`
  background: rgba(17, 34, 64, 0.7);
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  border: 1px solid rgba(100, 255, 218, 0.1);
  height: fit-content;
`;

const SkillsTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 20px;
  color: var(--light-text-color);
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--secondary-color);
  }
`;

const Skills = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  list-style: none;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: 14px;
    color: var(--text-color);
    
    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--secondary-color);
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

const SectionTitleAnimated = styled(motion.div)`
  margin-bottom: 50px;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitleAnimated
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle>About Me</SectionTitle>
        </SectionTitleAnimated>
        
        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Hi I'm <strong>Hardik Suvan</strong> from Bhavnagar, Gujarat. I'm a Computer Engineering student currently in my 8th semester at GTU.
            </p>
            <p>
              I'm a passionate web developer building dynamic and user-friendly web applications. With expertise in 
              <strong> React, Node.js, MongoDB and Python</strong>. I like solving problems and learning new technologies to improve my craft.
            </p>
            <p>
              My approach to development focuses on creating clean, efficient, and maintainable code while ensuring an exceptional user experience. I'm constantly exploring new technologies and methodologies to stay at the forefront of web development.
            </p>
          </AboutText>
          
          <SkillsContainer
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SkillsTitle>Skills & Technologies</SkillsTitle>
            <Skills>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Python</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>HTML5 & CSS3</li>
              <li>Git & GitHub</li>
              <li>Responsive Design</li>
              <li>RESTful APIs</li>
            </Skills>
          </SkillsContainer>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About; 