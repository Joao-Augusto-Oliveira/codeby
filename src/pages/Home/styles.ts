import styled from "styled-components";

import { darken } from 'polished';


export const ItemsList = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background: #fff;
margin-top: 5rem;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
border-radius: 20px;
padding: 10px;
align-items: center;
justify-content: center;
margin-left: auto;
margin-right: auto;

    img {
      align-self: center;
      width: 250px;
      max-height:300px;
    }   
  
`;

export const Product = styled.div`
   display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    width: 300px;
`;

export const Price = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100%;

> strong {
      font-size: 21px;
      color: #333;
      margin-bottom: 12px;
      text-transform: capitalize;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; 
      width: 100%;
    
    }

    > span {
      margin-top:5px;
      font-size: 16px;
      color: #A5A5A5;     
    }

    span:nth-child(3) {
      margin-bottom: 5px;
      font-size: 21px;
      color: #333;


    }

    
`;

export const CartButton = styled.button`
border-radius: 10px;
background: #3B74F2;
border: none;
height: 3rem;
color: #FFFFFF;

&:hover {
  background: ${darken(0.06, '#3B74F2')} ;
}

`;