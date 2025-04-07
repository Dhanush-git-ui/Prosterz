
export interface Poster {
  id: number;
  image: string;
  title: string;
  category: "albums" | "sneakers" | "sports";
  sizes: {
    A4: string;
    A3: string;
  };
  cartAvailable: boolean;
}

export const defaultPosters: Poster[] = [
  // Albums
  {
    id: 11,
    image: "/lovable-uploads/b5ce56fc-ab10-4e5d-aaa7-112410851752.png",
    title: "Cinnamon Girl",
    category: "albums",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 12,
    image: "/lovable-uploads/e544cf84-c984-408e-8db2-690ce557c461.png",
    title: "FEIN",
    category: "albums",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 13,
    image: "/lovable-uploads/d3c85a47-1931-43c0-aaef-21b35e7d9402.png",
    title: "Die With A Smile",
    category: "albums",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 14,
    image: "/lovable-uploads/358bb3f5-0364-48c0-8295-bfb47d273098.png",
    title: "Starboy",
    category: "albums",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 15,
    image: "/lovable-uploads/318e6db9-d1b1-4ef7-be5d-ef48753bb9a3.png",
    title: "Cry For Me",
    category: "albums",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 16,
    image: "/lovable-uploads/a5c5c4a8-ca40-4862-8f20-b74c93a67fcd.png",
    title: "CO2",
    category: "albums",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: true
  },
  
  // Sneakers
  {
    id: 31,
    image: "/lovable-uploads/a569b8e9-7b2a-4f82-b56f-419f0e1b9698.png",
    title: "Nike Air Max 2023",
    category: "sneakers",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 32,
    image: "/lovable-uploads/63f56bc2-c12d-4c4e-ad2e-ef7ecb9ed408.png",
    title: "Nike One Step Ahead",
    category: "sneakers",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 33,
    image: "/lovable-uploads/44bf5969-8c36-4527-aab2-bc27bf031ec1.png",
    title: "Air Max Iconic",
    category: "sneakers",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 34,
    image: "/lovable-uploads/4304ad5d-1375-4102-a5c8-a1f0764cbb61.png",
    title: "Lacoste Limited Edition",
    category: "sneakers",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 35,
    image: "/lovable-uploads/9d8bdc86-d65b-45e3-8dcc-ba4a43cce84a.png",
    title: "Puma Suede Classic",
    category: "sneakers",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 36,
    image: "/lovable-uploads/27ffc1f8-9a48-40ba-aee9-ccb52f2d5283.png",
    title: "Nike High Drip",
    category: "sneakers",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 37,
    image: "/lovable-uploads/2ab6faf1-f3f3-4802-9069-28b8175b3374.png",
    title: "Nike Drip Edition",
    category: "sneakers",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 38,
    image: "/lovable-uploads/016d19da-2838-4374-b644-0b7992c34fc9.png",
    title: "Nike Air Force",
    category: "sneakers",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 39,
    image: "/lovable-uploads/eb0e2058-5b28-45c1-9d57-1c951aa1ba3c.png",
    title: "Yeezy Elevate",
    category: "sneakers",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: true
  },
  {
    id: 40,
    image: "/lovable-uploads/71e15e3a-a97d-4161-b916-aa831deaa53a.png",
    title: "Nike Air Special Edition",
    category: "sneakers",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: true
  },
  
  // Sports - New Category
  {
    id: 51,
    image: "/lovable-uploads/0b5dadca-1197-403c-99fd-fcc7b62ad6d7.png",
    title: "Lionel Messi Miami",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 52,
    image: "/lovable-uploads/60b8e886-e3b0-4f79-ae1a-7db3b8dea19f.png",
    title: "Khabib UFC Champion",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 53,
    image: "/lovable-uploads/7f5df12f-0268-46c3-80a7-435880560372.png",
    title: "Cristiano Ronaldo Portugal",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 54,
    image: "/lovable-uploads/3d206e23-2c8f-4da2-96d4-3bb25779503a.png",
    title: "Roman Reigns WWE",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 55,
    image: "/lovable-uploads/6accb4b3-b5a4-4156-b137-c7c910ce08e5.png",
    title: "The Warden Brooklyn",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 56,
    image: "/lovable-uploads/a33b822f-9024-4339-8a84-8290183bdede.png",
    title: "Neymar Jr Barcelona",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 57,
    image: "/lovable-uploads/aad88696-d062-41b5-af7f-7969abe6ec7f.png",
    title: "Messi The GOAT",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 58,
    image: "/lovable-uploads/6cf898c9-425e-4fe7-afb1-888e8ab2e152.png",
    title: "Bongani Zungu",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 59,
    image: "/lovable-uploads/64149263-3bc5-4113-bf2c-5d38d944e72f.png",
    title: "Mbappé PSG",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 60,
    image: "/lovable-uploads/e65fd939-b2be-4005-b37d-00f240e913f2.png",
    title: "Andre Drummond Bulls",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 61,
    image: "/lovable-uploads/1927865d-ba23-4aba-a35c-341618c43019.png",
    title: "Zach Lavine Chicago",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 62,
    image: "/lovable-uploads/74a5fe20-6ace-419c-aea3-8307e266e896.png",
    title: "John Cena WWE Champion",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  }
];

