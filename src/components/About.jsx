import React from 'react';
import styled from 'styled-components';
import { Container, SectionTitle } from '../styles/StyledComponents';

const AboutSection = styled.section`
  padding: 100px 0;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutText = styled.div`
  p {
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 1.5;
  }
`;

const Skills = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 200px));
  gap: 0 10px;
  padding: 0;
  margin: 20px 0 0 0;
  overflow: hidden;
  list-style: none;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(140px, 200px));
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: 14px;
    
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

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <AboutText>
            <p>
            Hi I'm Hardik Suvan from Bhavnagar, Gujarat. I'm Computer Engineering student currently in my 8th semester at GTU.
            </p>
            <p>
            I'm a passionate web developer building dynamic and user-friendly web application. with experties in 
            <b> React, Node.js, MongoDB and Python</b>. I like solving problem and lerning new technologies to improve my craft.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
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
            </Skills>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About; 