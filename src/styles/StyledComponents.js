import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Section = styled.section`
  padding: 100px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 70%;
    height: 3px;
    background-color: var(--secondary-color);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 14px;
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '0'};
`;

export const Card = styled.div`
  background-color: var(--card-background);
  border-radius: 4px;
  padding: 25px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const LinkButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 14px;
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`; 