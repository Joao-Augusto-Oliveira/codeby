import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../components/Header';
import { useCart } from '../../hooks/useCart';
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

  interface CartItemsAmount {
    [key: number]: number;
  }


export default function Home () {
   const [items, setItems] = useState<ItemFormatted[]>([])
   const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount;    
  }, {} as CartItemsAmount)

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

    function handleAddProduct(id: number) {
        addProduct(id);
      }
    
 
    return (
       <> 
       <Header /> 
     
           <S.ItemsList>          
                {items.map(item => (
                    <S.Product key={item.id}>
                        <img src={item.imageUrl} alt={item.name} />
                        <S.Price>
                            <strong>{item.name.toLocaleLowerCase()}</strong>
                            <span>{item.price}</span>
                            <span>{item.sellingPrice}</span>
                        </S.Price>
                        <S.CartButton 
                            onClick={() => handleAddProduct(item.id)}
                            data-testid="add-product-button"
                        >
                            <div data-testid="cart-product-quantity">
                                {cartItemsAmount[item.id] || 0} 
                            </div>
                            Adicionar ao carrinho
                        </S.CartButton>
                    </S.Product>
                ))}           
                                   
            </S.ItemsList>
        </>
    )
}