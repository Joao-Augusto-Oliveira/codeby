import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/format';
import * as S from './styles';

    interface Item {
        id: number;
        name: string;
        sellingPrice: number;
        price: number;
        imageUrl: string;
      }
      
      interface ItemFormatted extends Item {
        priceFormatted: string;
      }    
          
      export default function Cart () {

       const [items, setItems] = useState<ItemFormatted[]>([])
     
    
       useEffect(()=> {
        async function loadItems() {
            const response = await api.get('/items');
            const ItemFormatted = response.data.map(function (items: Item) {
              return { ...items, sellingPrice: formatPrice(items.sellingPrice/100), price: formatPrice(items.price/100)}
            })
            setItems(ItemFormatted)
          }  
          loadItems();
        }, []);
    
        return (
        <>
            <S.ItemsList>
                <S.Title>
                    <h2>Meu carrinho</h2>         
                </S.Title>
                {items.map(item => (
                    <S.Product key={item.id}>
                        <div>
                        <img src={item.imageUrl} alt={item.name} />

                        </div>
                        <S.Price>
                            <strong>{item.name.toLocaleLowerCase()}</strong>
                            <span>{item.price}</span>
                            <span>{item.sellingPrice}</span>
                        </S.Price>                       
                    </S.Product>
                ))}
                <S.Total>
                    <h2>Total</h2>
                    <h2>R$ 9,55</h2>
                </S.Total>
                <S.CartButton>
                    <button>
                        Finalizar Compra
                    </button>
                </S.CartButton>           
                                   
            </S.ItemsList>        </>
    )
}