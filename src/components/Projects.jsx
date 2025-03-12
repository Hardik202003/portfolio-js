import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Container, SectionTitle, GridContainer } from '../styles/StyledComponents';

const ProjectsSection = styled.section`
  padding: 100px 0;
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--card-background);
  border-radius: 4px;
  padding: 25px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const ProjectFolder = styled.div`
  color: var(--secondary-color);
  font-size: 40px;
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  
  a {
    margin-left: 15px;
    color: var(--light-text-color);
    font-size: 20px;
    
    &:hover {
      color: var(--secondary-color);
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  
  a {
    color: var(--light-text-color);
    
    &:hover {
      color: var(--secondary-color);
    }
  }
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const ProjectTech = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
  padding: 0;
  
  li {
    margin-right: 15px;
    margin-bottom: 5px;
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--text-color);
  }
`;

const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop functionality, task categorization, and user collaboration features.',
    tech: ['React', 'Redux', 'Firebase', 'Material-UI'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations using weather API integration.',
    tech: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A social media dashboard that aggregates data from multiple platforms and provides analytics and scheduling capabilities.',
    tech: ['React', 'Chart.js', 'Node.js', 'Express'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
  {
    title: 'Recipe Finder App',
    description: 'A recipe finder application that allows users to search for recipes based on ingredients, dietary restrictions, and meal types.',
    tech: ['React', 'Spoonacular API', 'Styled Components'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
  {
    title: 'Fitness Tracker',
    description: 'A fitness tracking application that allows users to log workouts, track progress, and set fitness goals.',
    tech: ['React Native', 'Firebase', 'Redux'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Some Things I've Built</SectionTitle>
        <GridContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} variants={itemVariants}>
              <ProjectHeader>
                <ProjectFolder>📁</ProjectFolder>
                <ProjectLinks>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FiGithub />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                      <FiExternalLink />
                    </a>
                  )}
                </ProjectLinks>
              </ProjectHeader>
              <ProjectTitle>
                <a href={project.external || project.github} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTech>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ProjectTech>
            </ProjectCard>
          ))}
        </GridContainer>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 