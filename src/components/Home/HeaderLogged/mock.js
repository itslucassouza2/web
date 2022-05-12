export const categories = [
  { isActive: true, isParent: true, text: "Console" },
  { isActive: false, isParent: true, text: "Computador" },
  { isActive: false, isParent: true, text: "Mobile" },
  {
    isActive: false,
    isParent: true,
    text: "Jogos e Serviços",
  },
];

export const subCategories = {
  Computador: [
    { isActive: true, isParent: true, text: "MineCraft" },
    { isActive: false, isParent: true, text: "Riot Games" },
    { isActive: false, isParent: true, text: "Steam" },
  ],
  Console: [
    {
      isActive: true,
      isParent: true,
      text: "PlayStation",
    },
    { isActive: false, isParent: true, text: "Nintendo" },
    { isActive: false, isParent: true, text: "Microsoft" },
  ],
  "Jogos e Serviços": [
    { isActive: true, isParent: true, text: "DAZN" },
    { isActive: false, isParent: true, text: "Deezer" },
    { isActive: false, isParent: true, text: "Ifood" },
    { isActive: false, isParent: true, text: "IMVU" },
    { isActive: false, isParent: true, text: "Netflix" },
    { isActive: false, isParent: true, text: "Roblox" },
    { isActive: false, isParent: true, text: "Spotify" },
    { isActive: false, isParent: true, text: "Uber" },
  ],
  Mobile: [
    { isActive: false, isParent: true, text: "Free Fire" },
    { isActive: false, isParent: true, text: "Google Play" },
    { isActive: false, isParent: true, text: "ITunes" },
  ],
};

export const microCategories = {
  "Free Fire": [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "Free Fire", pais: "Brasil" },
    },
  ],
  "Google Play": [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "Google Play", pais: "Brasil" },
    },
  ],
  ITunes: [
    {
      isActive: false,
      isParent: false,
      text: "China",
      link: { marca: "ITunes", pais: "China" },
    },
    {
      isActive: false,
      isParent: false,
      text: "Estados Unidos",
      link: { marca: "ITunes", pais: "Estados Unidos" },
    },
    {
      isActive: false,
      isParent: false,
      text: "Hong kong",
      link: { marca: "ITunes", pais: "Hong kong" },
    },
    {
      isActive: false,
      isParent: false,
      text: "Japão",
      link: { marca: "ITunes", pais: "Japão" },
    },
  ],
  DAZN: [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "DAZN", pais: "Brasil" },
    },
  ],
  Deezer: [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "Deezer", pais: "Brasil" },
    },
  ],
  Ifood: [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "Ifood", pais: "Brasil" },
    },
  ],
  IMVU: [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "IMVU", pais: "Brasil" },
    },
  ],
  Netflix: [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "Netflix", pais: "Brasil" },
    },
  ],
  Roblox: [
    { isActive: false, isParent: false, text: "Brasil" },
    {
      isActive: false,
      isParent: false,
      text: "Estados Unidos",
      link: { marca: "Roblox", pais: "Estados Unidos" },
    },
  ],
  Spotify: [{ isActive: false, isParent: false, text: "Brasil" }],
  Uber: [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "Uber", pais: "Brasil" },
    },
  ],
  MineCraft: [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "MineCraft", pais: "Brasil" },
    },
  ],
  "Riot Games": [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "Riot Games", pais: "Brasil" },
    },
  ],
  Steam: [
    {
      isActive: false,
      isParent: false,
      text: "Argentina",
      link: { marca: "Steam", pais: "Argentina" },
    },
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "Steam", pais: "Brasil" },
    },
    {
      isActive: false,
      isParent: false,
      text: "Estados Unidos",
      link: { marca: "Steam", pais: "Estados Unidos" },
    },
    {
      isActive: false,
      isParent: false,
      text: "Hong Kong",
      link: { marca: "Steam", pais: "Hong Kong" },
    },
  ],
  Microsoft: [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "Microsoft", pais: "Brasil" },
    },
  ],
  Nintendo: [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "Nintendo", pais: "Brasil" },
    },
    {
      isActive: false,
      isParent: false,
      text: "Estados Unidos",
      link: { marca: "Nintendo", pais: "Estados Unidos" },
    },
    {
      isActive: false,
      isParent: false,
      text: "Hong Kong",
      link: { marca: "Nintendo", pais: "Hong Kong" },
    },
    {
      isActive: false,
      isParent: false,
      text: "Mexico",
      link: { marca: "Nintendo", pais: "Mexico" },
    },
  ],
  PlayStation: [
    {
      isActive: false,
      isParent: false,
      text: "Brasil",
      link: { marca: "PlayStation", pais: "Brasil" },
    },
    {
      isActive: false,
      isParent: false,
      text: "Estados Unidos",
      link: { marca: "PlayStation", pais: "Estados Unidos" },
    },
    {
      isActive: false,
      isParent: false,
      text: "Hong Kong",
      link: { marca: "PlayStation", pais: "Hong Kong" },
    },
  ],
};
