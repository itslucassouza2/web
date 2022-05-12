import * as S from "./styles";

export const Tooltip = ({ label }) => {
  return (
    <S.Wrapper>
      <span>{label}</span>
    </S.Wrapper>
  );
};
