
export interface Poster {
  id: number;
  image: string;
  title: string;
  category: "cars" | "popstars" | "shoes" | "sports";
  sizes: {
    A4: string;
    A3: string;
  };
  cartAvailable: boolean;
}

export const defaultPosters: Poster[] = [
  {
    id: 1,
    image: "/lovable-uploads/a637c4db-4417-4d0e-86dd-faa0cdf3ea01.png",
    title: "Prosterz Logo",
    category: "popstars",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 2,
    image: "/lovable-uploads/bdffd0c7-b2ca-4ca6-a07e-91f173ed1207.png",
    title: "Lamborghini Revuelto",
    category: "cars",
    sizes: { A4: "$89", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 3,
    image: "/lovable-uploads/8dd0d458-cc70-420b-bd7f-7a2fd4ac44f5.png",
    title: "Ferrari LaFerrari",
    category: "cars",
    sizes: { A4: "$89", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 4,
    image: "/lovable-uploads/1c9f001d-6edf-48a9-9fd6-203e81e21c29.png",
    title: "Toyota Supra",
    category: "cars",
    sizes: { A4: "$89", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 5,
    image: "/lovable-uploads/00a070d4-729c-4793-91ee-7cdcff7e76e9.png",
    title: "Porsche 918 Spyder",
    category: "cars",
    sizes: { A4: "$89", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 6,
    image: "/lovable-uploads/a25191a1-f9f4-42b2-85a6-2a308f820904.png",
    title: "BMW M3 Sports Evolution",
    category: "cars",
    sizes: { A4: "$89", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 7,
    image: "/lovable-uploads/5c392f8e-d75b-438d-9eac-cd3f38ffefbe.png",
    title: "Porsche RWB",
    category: "cars",
    sizes: { A4: "$89", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 8,
    image: "/lovable-uploads/8da519a5-4326-45cc-a93b-266c3f5ca7ee.png",
    title: "Lamborghini Aventador",
    category: "cars",
    sizes: { A4: "$89", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 9,
    image: "/lovable-uploads/b3213296-a70e-4664-b291-9da165dd636e.png",
    title: "Porsche GT3 RS",
    category: "cars",
    sizes: { A4: "$89", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 10,
    image: "/lovable-uploads/269c6c48-824c-4c7b-ac22-293e10ff0b7f.png",
    title: "BMW M4 GT4",
    category: "cars",
    sizes: { A4: "$89", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 11,
    image: "/lovable-uploads/b5ce56fc-ab10-4e5d-aaa7-112410851752.png",
    title: "Cinnamon Girl",
    category: "popstars",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 12,
    image: "/lovable-uploads/e544cf84-c984-408e-8db2-690ce557c461.png",
    title: "FEIN",
    category: "popstars",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 13,
    image: "/lovable-uploads/d3c85a47-1931-43c0-aaef-21b35e7d9402.png",
    title: "Die With A Smile",
    category: "popstars",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 14,
    image: "/lovable-uploads/358bb3f5-0364-48c0-8295-bfb47d273098.png",
    title: "Starboy",
    category: "popstars",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 15,
    image: "/lovable-uploads/318e6db9-d1b1-4ef7-be5d-ef48753bb9a3.png",
    title: "Cry For Me",
    category: "popstars",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 16,
    image: "/lovable-uploads/a5c5c4a8-ca40-4862-8f20-b74c93a67fcd.png",
    title: "CO2",
    category: "popstars",
    sizes: { A4: "$79", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 31,
    image: "/lovable-uploads/a569b8e9-7b2a-4f82-b56f-419f0e1b9698.png",
    title: "Nike Air Max 2023",
    category: "shoes",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 32,
    image: "/lovable-uploads/63f56bc2-c12d-4c4e-ad2e-ef7ecb9ed408.png",
    title: "Nike One Step Ahead",
    category: "shoes",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 33,
    image: "/lovable-uploads/44bf5969-8c36-4527-aab2-bc27bf031ec1.png",
    title: "Air Max Iconic",
    category: "shoes",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 34,
    image: "/lovable-uploads/4304ad5d-1375-4102-a5c8-a1f0764cbb61.png",
    title: "Lacoste Limited Edition",
    category: "shoes",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 35,
    image: "/lovable-uploads/9d8bdc86-d65b-45e3-8dcc-ba4a43cce84a.png",
    title: "Puma Suede Classic",
    category: "shoes",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 36,
    image: "/lovable-uploads/27ffc1f8-9a48-40ba-aee9-ccb52f2d5283.png",
    title: "Nike High Drip",
    category: "shoes",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 37,
    image: "/lovable-uploads/2ab6faf1-f3f3-4802-9069-28b8175b3374.png",
    title: "Nike Drip Edition",
    category: "shoes",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 38,
    image: "/lovable-uploads/016d19da-2838-4374-b644-0b7992c34fc9.png",
    title: "Nike Air Force",
    category: "shoes",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: false
  },
  {
    id: 39,
    image: "/lovable-uploads/eb0e2058-5b28-45c1-9d57-1c951aa1ba3c.png",
    title: "Yeezy Elevate",
    category: "shoes",
    sizes: { A4: "$99", A3: "$109" },
    cartAvailable: false
  },
  // Sports posters - New category
  {
    id: 51,
    image: "/lovable-uploads/40664825-d75d-4fea-b37f-fe44bb5f4b7a.png",
    title: "Lionel Messi Miami",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 52,
    image: "/lovable-uploads/43b706a3-82b0-4300-b78e-d3a924943f9c.png",
    title: "Khabib Nurmagomedov",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 53,
    image: "/lovable-uploads/dd5ecb35-bb94-4f2e-bd47-146a387d5997.png",
    title: "Cristiano Ronaldo",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 54,
    image: "/lovable-uploads/5a65e53c-04a2-429f-a8b6-efbbc6634dc4.png",
    title: "Roman Reigns WWE",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 55,
    image: "/lovable-uploads/bb41d1d5-2fe9-4b9c-8621-b95387f99239.png",
    title: "The Warden",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 56,
    image: "/lovable-uploads/eda6d3a8-2d57-4561-9366-e7470b100e80.png",
    title: "Neymar Junior",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 57,
    image: "/lovable-uploads/769f0c57-48c2-4aa3-941b-1ad2a9e08a42.png",
    title: "Messi - The GOAT",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 58,
    image: "/lovable-uploads/de6927a4-557a-46de-a30e-bdc541160a98.png",
    title: "Bongani Zungu",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 59,
    image: "/lovable-uploads/25b1acce-a971-4853-b98c-709a069676ff.png",
    title: "Mbappé PSG",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 60,
    image: "/lovable-uploads/4b938b10-1b48-49d2-8b2f-420e5226a00c.png",
    title: "Andre Drummond",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 61,
    image: "/lovable-uploads/00123ef7-cce4-433c-8fef-a2eb57b3e4a8.png",
    title: "Zach Lavine Bulls",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  },
  {
    id: 62,
    image: "/lovable-uploads/7d796f08-9c14-4580-a1e1-b4f47cff5dc8.png",
    title: "John Cena",
    category: "sports",
    sizes: { A4: "$89", A3: "$119" },
    cartAvailable: true
  }
];
