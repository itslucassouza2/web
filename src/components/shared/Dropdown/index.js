import { ROUTES } from "../../../constants/routes/routes";
import * as S from "./styles";

export const Dropdown = ({ items, isLoading }) => {
  return (
    <S.Wrapper>
      {items?.map((item) => (
        <S.Item
          key={item.id_product}
          to={ROUTES.PRODUCT.BY_ID(item.id_product)}
        >
          <span>{item.nome}</span>
        </S.Item>
      ))}
      {isLoading && <S.Loading>Carregando...</S.Loading>}
      {!items.length && !isLoading && (
        <S.Loading>Items nao encontrados</S.Loading>
      )}
    </S.Wrapper>
  );
};
