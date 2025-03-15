import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, SectionTitle, LinkButton } from '../styles/StyledComponents';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const ContactSection = styled.section`
  padding: 120px 0;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(100, 255, 218, 0.3), transparent);
  }
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
  background: linear-gradient(to right, var(--light-text-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const ContactText = styled.p`
  margin-bottom: 50px;
  font-size: 20px;
  line-height: 1.6;
  color: var(--text-color);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.7);
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  border: 1px solid rgba(100, 255, 218, 0.1);
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const ContactButton = styled(LinkButton)`
  padding: 15px 30px;
  font-size: 16px;
  letter-spacing: 1px;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), transparent);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -10px rgba(100, 255, 218, 0.3);
    background: rgba(100, 255, 218, 0.2);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

const SocialLink = styled(motion.a)`
  color: var(--light-text-color);
  font-size: 22px;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary-color);
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  const socialVariants = {
    hover: {
      y: -5,
      color: '#64ffda',
      transition: { duration: 0.3 }
    }
  };

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
          
          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactText>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </ContactText>
            
            <ContactButton 
              href="mailto:sonagrah79@gmail.com"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <FiMail style={{ marginRight: '10px' }} /> Say Hello
            </ContactButton>
          </ContactCard>
          
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact; 