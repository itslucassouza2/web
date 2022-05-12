export const FormatValue = (value) =>
  value?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
