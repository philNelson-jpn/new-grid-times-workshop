import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const Button = styled.button`
  display: none;
  padding: 8px 24px;
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-sans-serif);
  text-transform: uppercase;
  color: var(--color-white);
  background: var(--color-primary);
  border-radius: 4px;
  

  @media ${QUERIES.laptopAndUp}{
    display: block;
  }
`;

export default Button;
