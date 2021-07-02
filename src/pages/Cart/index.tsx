import {
    MdDelete,
    MdAddCircleOutline,
    MdRemoveCircleOutline,
  } from 'react-icons/md';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/format';
import * as S from './styles';

    interface Item {
        id: number;
        name: string;
        sellingPrice: number;
        price: string;
        imageUrl: string;
        amount: number;
      }
            
          
      export default function Cart () {
        const { cart, removeProduct, updateProductAmount } = useCart();

        const cartFormatted = cart.map(product => ({
          ...product, priceFormatted: formatPrice(product.sellingPrice/100), price: formatPrice(product.price/100),
          subtotal: formatPrice(product.sellingPrice * product.amount)
        }))

        const total =
          formatPrice(
            cartFormatted.reduce((sumTotal, product) => {
              sumTotal += product.amount * product.sellingPrice
      
              return sumTotal
            }, 0)
          /100)

          const totalfrete =
           cartFormatted.reduce((sumTotal, product) => {
              sumTotal += product.amount * product.sellingPrice
      
              return sumTotal
            }, 0)
          /100
      
        function handleProductIncrement(product: Item) {
          const IncrementArguments = {
            productId: product.id,
            amount: product.amount + 1
        }
          updateProductAmount(IncrementArguments)
      }
      
        function handleProductDecrement(product: Item) {
          const IncrementArguments = {
            productId: product.id,
            amount: product.amount - 1
        }
          updateProductAmount(IncrementArguments)
      }
        function handleRemoveProduct(productId: number) {
          removeProduct(productId);
        }     
    
           
        return (
        <>
            <S.ItemsList>
                <S.Title>
                    <h2>Meu carrinho</h2>         
                </S.Title>
                {cartFormatted.map(item => (
                    <S.Product key={item.id}>
                        <div>
                        <img src={item.imageUrl} alt={item.name} />

                        </div>
                       <div>
                        <S.Price>
                            <strong>{item.name.toLocaleLowerCase()}</strong>
                            <span>{item.price}</span>
                            <span>{item.priceFormatted}</span>
                        </S.Price>
                        
                        <div className="icons">
                        <button
                  type="button"
                  data-testid="decrement-product"
                  disabled={item.amount <= 1}
                  onClick={() => handleProductDecrement(item)}
                >
                  <MdRemoveCircleOutline size={20} />
                </button>
                <input
                  type="text"
                  data-testid="product-amount"
                  readOnly
                  value={item.amount}
                />
                <button
                  type="button"
                  data-testid="increment-product"
                  onClick={() => handleProductIncrement(item)}
                >
                  <MdAddCircleOutline size={20} />
                </button>

            <button
                type="button"
                data-testid="remove-product"
                onClick={() => handleRemoveProduct(item.id)}
              >
                <MdDelete size={20} />
              </button>
              </div>


                       
            </div>                       
                    </S.Product>
                ))}
                <S.ContainerTotal>
                <S.Total>
                    <h2>Total</h2>
                    <h2>{total}</h2>
                    </S.Total> 
                    {totalfrete > 10 ?
                    <S.Frete>
                      <h2>Parabéns, sua compra tem frete grátis!</h2> 
                    </S.Frete> 
                   : <p></p>  }              
                </S.ContainerTotal>
                         
                   
                <S.CartButton>
                    <button>
                        Finalizar Compra
                    </button>
                </S.CartButton>           
                                   
            </S.ItemsList>        
        </>
    )
}