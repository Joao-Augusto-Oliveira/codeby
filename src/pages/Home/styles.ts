import styled from "styled-components";

export const ItemsList = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background: #fff;
margin-top: 5rem;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
border-radius: 20px;
width: 50rem;
padding: 10px;
align-items: center;
justify-content: center;
margin-left: auto;
margin-right: auto;

    img {
      align-self: center;
      max-width: 250px;
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
`;

export const Price = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;

> strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
`;