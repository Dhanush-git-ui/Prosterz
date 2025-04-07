export interface Poster {
  id: number;
  image: string;
  title: string;
  category: "albums" | "sneakers" | "sports" | "movies";
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
  
  // Sports - Category
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
  },
  {
    id: 63,
    image: "/lovable-uploads/1493488f-7022-461e-aee2-b53d0bd52458.png",
    title: "LeBron James All-Time Scoring",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  
  // Movies - New Category
  {
    id: 71,
    image: "/lovable-uploads/fe540ceb-2cd6-4485-98e4-1204dbdf978b.png",
    title: "The Dark Knight",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 72,
    image: "/lovable-uploads/28ffbc8a-4156-4835-8956-957c190fc839.png",
    title: "Batman 2022",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 73,
    image: "/lovable-uploads/63c03d35-c835-4c62-8e5b-cda5aadaf9fe.png",
    title: "The Batman Red Rain",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 74,
    image: "/lovable-uploads/7ffef464-ec3a-4831-bef3-a0204f36ef13.png",
    title: "The Batman Silhouette",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 75,
    image: "/lovable-uploads/f9b884cd-c240-406c-a6ec-e95e5955998e.png",
    title: "Batman Red Mask",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 76,
    image: "/lovable-uploads/e63512bf-5b06-4b29-b962-edf854d78a71.png",
    title: "Batman Red Minimal",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 77,
    image: "/lovable-uploads/edd80429-deb0-4b36-aca6-c6b3be53a214.png",
    title: "The Batman Moon",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 78,
    image: "/lovable-uploads/0353fa97-dd48-4d77-8aad-47f7e03bafc9.png",
    title: "Iron Man II",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 79,
    image: "/lovable-uploads/9986825d-308c-46cc-83e3-98a371b3952f.png",
    title: "Black Panther",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 80,
    image: "/lovable-uploads/23b6535c-6833-41ed-8341-c9f035b319da.png",
    title: "Black Widow Minimal",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 81,
    image: "/lovable-uploads/f39d8c51-56f4-4219-a6aa-6caf2a54d7a5.png",
    title: "Venom: Let There Be Carnage",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 82,
    image: "/lovable-uploads/3cffb21e-3b0e-4dcf-9ec8-ade5946106b3.png",
    title: "Guardians of the Galaxy Vol. 2",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  
  // Add new Marvel movie posters
  {
    id: 83,
    image: "/lovable-uploads/f0bd8ddd-4dbc-42d7-a618-fcabcbbf4c37.png",
    title: "Thor: Ragnarok",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 84,
    image: "/lovable-uploads/fc8de01c-fb90-4a92-bf57-862d43c75f1c.png",
    title: "Guardians of the Galaxy",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 85,
    image: "/lovable-uploads/6cbb5bc7-3909-4b89-8826-e25750e6c49a.png",
    title: "Captain America: Civil War",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 86,
    image: "/lovable-uploads/3adfabc8-3fa5-484f-8bcc-147c4c0bbaef.png",
    title: "Spider-Man: No Way Home",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 87,
    image: "/lovable-uploads/fd77597b-c59a-4009-9d82-3cea717e7e4e.png",
    title: "Civil War Split",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 88,
    image: "/lovable-uploads/5b5dedf9-f44d-40fc-961d-7850cea7791f.png",
    title: "Avengers: Age of Ultron",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 89,
    image: "/lovable-uploads/0320f544-de2f-400a-ac83-019efd25bee9.png",
    title: "Infinity War",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 90,
    image: "/lovable-uploads/e380c01d-7ef4-4fce-8769-c36ece8fa775.png",
    title: "Avengers: Age of Ultron Art",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 91,
    image: "/lovable-uploads/11f1513f-44bc-4f63-aea1-15c5cabb8fd1.png",
    title: "The Avengers",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 92,
    image: "/lovable-uploads/84451b26-a69e-48c8-a9c9-9d91a529feda.png",
    title: "Avengers: Endgame",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 93,
    image: "/lovable-uploads/4ea259e1-83ad-4731-8219-3e06947f28b5.png",
    title: "Marvel Comics Collection",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 94,
    image: "/lovable-uploads/9201a0eb-0398-42d7-913c-8ce2d7f3d2b4.png",
    title: "Shang-Chi: Legend of the Ten Rings",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 95,
    image: "/lovable-uploads/4eea65bf-5605-409f-9981-1bed6f902046.png",
    title: "Moon Knight Comic",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 96,
    image: "/lovable-uploads/88cc9c07-e9dd-42fd-b9bb-3afb40565216.png",
    title: "Eternals",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 97,
    image: "/lovable-uploads/9b7d680e-6378-4edc-b11a-9435dd2ed2a8.png",
    title: "Moon Knight: Gods and Monsters",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 98,
    image: "/lovable-uploads/b80121fb-6059-4105-babf-ca3b03edba9e.png",
    title: "Captain America: The Winter Soldier",
    category: "movies",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  }
];
