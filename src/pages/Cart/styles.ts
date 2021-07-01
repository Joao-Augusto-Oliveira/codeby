import styled from "styled-components";

import { darken } from 'polished';

export const ItemsList = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
background: var(--white);
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
border-radius: 20px;
justify-content: center; 
margin-top: 5rem;

  img {
    align-self: center;
    width: 150px;
    border: 1px solid;
    border-color: var(--darkgray);
    margin-right: 2rem;
  }   
  
`;

export const Product = styled.div`
   display: flex;
   flex-direction: row;
    background: var(--white);
    border-radius: 4px;
    padding: 20px;
    align-items: center;
`;

export const Price = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100%;

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

export const CartButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 2rem 0;
padding: 20px;

   button{
    width: 100%;
    border-radius: 10px;
    background: var(--blue);
    border: none;
    height: 6rem;
    color: var(--white);
    overflow: hidden;
    margin-top: auto;
    transition: background 0.2s;
    font-size: 2rem;

&:hover {
  background: ${darken(0.06, '#3B74F2')} ;
}

}

`;

export const Title = styled.div`
display: flex;
height: 6.5rem;

h2 {
border-bottom: 1px solid var(--darkgray);
width: 100%;
text-align: center;
font-size: 2.5rem;
margin-top: 22px;
}
`;

export const Total = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 10rem;
border-bottom: 1px solid var(--darkgray);
border-top: 1px solid var(--darkgray);
padding: 20px;

h2 {
width: 100%;
font-size: 2.5rem;

}

h2:nth-child(2) {
      text-align: right;
    }
`;

