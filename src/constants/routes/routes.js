const HOME = {
  ROOT: "home",
  CATEGORY: `home/categoria/`,
  RECOMMENDED: "home/maisvendidos",
  BANNERS: "home/bannermkt",
};

const SEARCH = {
  CATEGORY: `/search/`,
  BY_NAME: (name) => `/search/header/${name}`,
};

const PRODUCT = {
  BY_ID: (id) => `/product/${id}`,
  CATEGORY: (id) => `/product/recomendados/${id}`,
  CATEGORY_FULL: `/product/full/`,
};

const PRODUCTS_RECOMENDADOS = {
  CATEGORY: `/product/recomendados/1`,
};

const WISHLIST = {
  POST: "/my_page/user_wishlist/insert",
  DELETE: (id) => `/my_page/user_wishlist/remove/${id}`,
  GET: `/my_page/user_wishlist/`,
};

const ORDERS = {
  GET: `/my_page/user_orders/`,
};

const KEYS = {
  UPDATE: `/my_page/user_codes/update`,
  GET: `/my_page/user_codes`,
};

const CHECKOUT = {
  ROOT: "/checkout",
};

const ROUTES = {
  HOME,
  SEARCH,
  PRODUCT,
  PRODUCTS_RECOMENDADOS,
  WISHLIST,
  ORDERS,
  KEYS,
  CHECKOUT,
};

export { ROUTES };
