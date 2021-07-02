import * as S from './styles';

const Header = (): JSX.Element => {
 
  return (
    <S.Container>
      
      <S.Cart to="/">
        <div>
          <strong>Retornar às compras</strong>        
        </div>
      </S.Cart>
    </S.Container>
  );
};

export default Header;
