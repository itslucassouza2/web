import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

/**
 * items structure
 *
 * [{
    cardimage,
    discount,
    title,
    items,
    price,
    id,
    countries,
    categories,
  }]
 */

const CART_KEY = "CART";

const setToLocalStorage = (products) =>
  window.localStorage.setItem(CART_KEY, JSON.stringify(products));

const getFromLocalStorage = () => {
  const products = window.localStorage.getItem(CART_KEY);

  if (products?.length) {
    return JSON.parse(products);
  }

  return [];
};

export const CartContext = createContext({
  items: [],
  totalPrice: 0,
  add: () => {},
  remove: () => {},
  setQuantity: () => {},
  handlePaymentMethod: () => {},
});

export const successToast = (text) =>
  toast.success(text, {
    style: {
      backgroundColor: "#01191E",
    },
    progressStyle: {
      backgroundColor: "#F15A24",
    },
  });

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const total = items?.reduce(
      (prev, curr) => prev + curr.preco * curr.quantity,
      0
    );
    setTotalPrice(total);
  }, [items]);

  useEffect(() => {
    setItems(getFromLocalStorage());
  }, []);

  const add = useCallback(
    (item) => {
      const hasProduct = items.find((prod) => prod.id_product === item.id_product);

      if (hasProduct) {
        const itemsUpdated = items.map((prod) => {
          if (prod.id_product === item.id_product) {
            prod.quantity += 1;
          }

          return prod;
        });
        setItems([...itemsUpdated]);
        setToLocalStorage([...itemsUpdated]);
      } else {
        const newItems = [...items, { ...item, quantity: 1 }];
        setToLocalStorage(newItems);
        setItems(newItems);
        successToast("Adicionado ao carrinho");
      }
    },
    [items]
  );

  const handlePaymentMethod = (paymentMethod) =>
    setPaymentMethod(paymentMethod);

  const remove = useCallback(
    (item) => {
      const copyItems = [...items];
      const index = copyItems.findIndex((prod) => prod.id_product === item.id_product);

      if (index === -1) return;

      copyItems.splice(index, 1);
      successToast("Removido do carrinho");
      setItems(copyItems);
      setToLocalStorage(copyItems);
    },
    [items]
  );

  const setQuantity = useCallback(
    (item, quantity) => {
      if (Number(quantity) === 0) {
        remove(item);
        return;
      }

      const itemsUpdated = items.map((prod) => {
        if (prod.id_product === item.id_product) {
          prod.quantity = quantity;
        }

        return prod;
      });

      setItems(itemsUpdated);
      setToLocalStorage(itemsUpdated);
    },
    [items, remove]
  );

  const state = {
    items,
    totalPrice,
    paymentMethod,
    add,
    remove,
    setQuantity,
    handlePaymentMethod,
  };

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const provider = useContext(CartContext);

  if (!provider) throw new Error("Provider must be defined");

  return provider;
};
