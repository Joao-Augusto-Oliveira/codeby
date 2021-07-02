import { useCart } from '../../hooks/useCart';
import * as S from './styles';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <S.Container>
      
      <S.Cart to="/cart">
        <div>
          <strong>Ir para o meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
      </S.Cart>
    </S.Container>
  );
};

export default Header;
