import dayjs from "dayjs";

export const formatDate = (date, format = "DD/MM/YYYY") =>
  dayjs(date).format(format);
