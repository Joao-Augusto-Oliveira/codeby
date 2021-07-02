import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;  
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: center;
    margin-right: 10px;

    strong {
      display: block;
      font-size: 21px;
      color: var(--black);

      &:hover {
        opacity: 0.7
      }
    }


  }
`;
