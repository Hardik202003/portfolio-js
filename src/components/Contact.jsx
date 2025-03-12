import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, SectionTitle, LinkButton } from '../styles/StyledComponents';

const ContactSection = styled.section`
  padding: 100px 0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactTitle = styled(SectionTitle)`
  display: block;
  color: var(--secondary-color);
  font-size: 16px;
  font-family: var(--font-mono);
  font-weight: 400;
  margin-bottom: 20px;
  
  &:after {
    display: none;
  }
`;

const BigHeading = styled.h2`
  font-size: 50px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const ContactText = styled.p`
  margin-bottom: 50px;
  font-size: 18px;
  line-height: 1.5;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactTitle>04. What's Next?</ContactTitle>
          <BigHeading>Get In Touch</BigHeading>
          <ContactText>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </ContactText>
          <LinkButton href="mailto:hello@example.com">Say Hello</LinkButton>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact; 