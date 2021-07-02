import styled from "styled-components";

import { darken } from 'polished';


export const ItemsList = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background: var(--white);
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
border-radius: 20px;
padding: 10px;
justify-content: center; 

div {
}
  img {
    align-self: center;
    width: 250px;
    border: 1px solid;
    border-color: var(--darkgray);
  }   
  
`;

export const Product = styled.div`
   display: flex;
   flex-direction: column;
    background: var(--white);
    border-radius: 4px;
    padding: 20px;
    width: 300px;

`;

export const Price = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100%;
font-weight: 700;

> strong {
      font-size: 21px;
      color: var(--black);
      margin-top: 5px;
      text-transform: capitalize;
    
    }

    > span {
      margin-bottom: 5px;
      font-size: 16px;
      color: var(--darkgray);  

    }

    span:nth-child(3) {
      font-size: 21px;
      color: var(--black);

    }

    
`;

export const CartButton = styled.button`
border-radius: 10px;
background: var(--blue);
border: none;
height: 3rem;
color: var(--white);
overflow: hidden;
margin-top: auto;
transition: background 0.2s;
font-weight: 700;

&:hover {
  background: ${darken(0.06, '#3B74F2')} ;
}

`;