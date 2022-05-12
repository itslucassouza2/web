import { getImg } from "../../../utils/Helper";

export const Image = ({ src }) => {
  return <img src={src} alt="card_image" onError={(e) => console.error(e)} />;
};
