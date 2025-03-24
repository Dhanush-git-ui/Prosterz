
export interface Poster {
  id: number;
  image: string;
  title: string;
  category: "cars" | "popstars" | "shoes";
  price: string;
}

export const defaultPosters: Poster[] = [
  // Original posters
  {
    id: 1,
    image: "/lovable-uploads/a637c4db-4417-4d0e-86dd-faa0cdf3ea01.png",
    title: "Prosterz Logo",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 2,
    image: "/lovable-uploads/bdffd0c7-b2ca-4ca6-a07e-91f173ed1207.png",
    title: "Lamborghini Revuelto",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 3,
    image: "/lovable-uploads/8dd0d458-cc70-420b-bd7f-7a2fd4ac44f5.png",
    title: "Ferrari LaFerrari",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 4,
    image: "/lovable-uploads/1c9f001d-6edf-48a9-9fd6-203e81e21c29.png",
    title: "Toyota Supra",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 5,
    image: "/lovable-uploads/00a070d4-729c-4793-91ee-7cdcff7e76e9.png",
    title: "Porsche 918 Spyder",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 6,
    image: "/lovable-uploads/a25191a1-f9f4-42b2-85a6-2a308f820904.png",
    title: "BMW M3 Sports Evolution",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 7,
    image: "/lovable-uploads/5c392f8e-d75b-438d-9eac-cd3f38ffefbe.png",
    title: "Porsche RWB",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 8,
    image: "/lovable-uploads/8da519a5-4326-45cc-a93b-266c3f5ca7ee.png",
    title: "Lamborghini Aventador",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 9,
    image: "/lovable-uploads/b3213296-a70e-4664-b291-9da165dd636e.png",
    title: "Porsche GT3 RS",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 10,
    image: "/lovable-uploads/269c6c48-824c-4c7b-ac22-293e10ff0b7f.png",
    title: "BMW M4 GT4",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 11,
    image: "/lovable-uploads/b5ce56fc-ab10-4e5d-aaa7-112410851752.png",
    title: "Cinnamon Girl",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 12,
    image: "/lovable-uploads/e544cf84-c984-408e-8db2-690ce557c461.png",
    title: "FEIN",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 13,
    image: "/lovable-uploads/d3c85a47-1931-43c0-aaef-21b35e7d9402.png",
    title: "Die With A Smile",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 14,
    image: "/lovable-uploads/358bb3f5-0364-48c0-8295-bfb47d273098.png",
    title: "Starboy",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 15,
    image: "/lovable-uploads/318e6db9-d1b1-4ef7-be5d-ef48753bb9a3.png",
    title: "Cry For Me",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 16,
    image: "/lovable-uploads/a5c5c4a8-ca40-4862-8f20-b74c93a67fcd.png",
    title: "CO2",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 17,
    image: "/lovable-uploads/97887c36-5bb5-45b3-b163-da34aafff753.png",
    title: "Lamborghini Aventador SVJ",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 18,
    image: "/lovable-uploads/167ca374-f186-466d-93b9-55ad3cf82d0c.png",
    title: "BMW M4 Nighthawk",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 19,
    image: "/lovable-uploads/5eebaa3f-6875-4580-b7fa-b2e13fe7630e.png",
    title: "Mazda RX-7 Spirit",
    category: "cars",
    price: "$28.99"
  },
  {
    id: 20,
    image: "/lovable-uploads/494cd1a5-593b-48c9-9f8d-90a8a52dc728.png",
    title: "Lamborghini Revuelto LAMBO",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 21,
    image: "/lovable-uploads/2d1b2d0a-1b4f-45cf-8388-905f15f44a6d.png",
    title: "Ferrari LaFerrari Masterpiece",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 22,
    image: "/lovable-uploads/a8b46723-86bf-4747-9599-9600f4cec148.png",
    title: "Toyota GR Supra",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 23,
    image: "/lovable-uploads/1836880e-b38f-470b-b38e-332b4a89e90c.png",
    title: "Porsche 918 Spyder Elegance",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 24,
    image: "/lovable-uploads/a9230ae5-f7f1-45b6-8170-45a1b584fc8c.png",
    title: "BMW M3 Evolution",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 25,
    image: "/lovable-uploads/7cc7b66b-fb61-4c00-ad48-63f49a035a00.png",
    title: "Porsche 911 RWB",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 26,
    image: "/lovable-uploads/50e1e322-7d76-4507-9465-ec9af542ff8f.png",
    title: "BMW M4 GT4 Motorsport",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 27,
    image: "/lovable-uploads/19cbeb0b-982a-4168-ae89-3c66f269d8b7.png",
    title: "Porsche GT3 RS Heritage",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 28,
    image: "/lovable-uploads/c9ae4602-7abc-4cf0-890c-3c83554475b7.png",
    title: "Honda NSX-R Classic",
    category: "cars",
    price: "$28.99"
  },
  {
    id: 29,
    image: "/lovable-uploads/900f507c-7cb5-4735-a12c-58d03ba34d7b.png",
    title: "Ford Mustang Classic",
    category: "cars",
    price: "$28.99"
  },
  {
    id: 30,
    image: "/lovable-uploads/1e113fae-1117-432f-aed8-6c4c6f607cfd.png",
    title: "Toyota Supra MK5",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 31,
    image: "/lovable-uploads/a569b8e9-7b2a-4f82-b56f-419f0e1b9698.png",
    title: "Nike Air Max 2023",
    category: "shoes",
    price: "$19.99"
  },
  {
    id: 32,
    image: "/lovable-uploads/63f56bc2-c12d-4c4e-ad2e-ef7ecb9ed408.png",
    title: "Nike One Step Ahead",
    category: "shoes",
    price: "$19.99"
  },
  {
    id: 33,
    image: "/lovable-uploads/44bf5969-8c36-4527-aab2-bc27bf031ec1.png",
    title: "Air Max Iconic",
    category: "shoes",
    price: "$19.99"
  },
  {
    id: 34,
    image: "/lovable-uploads/4304ad5d-1375-4102-a5c8-a1f0764cbb61.png",
    title: "Lacoste Limited Edition",
    category: "shoes",
    price: "$21.99"
  },
  {
    id: 35,
    image: "/lovable-uploads/9d8bdc86-d65b-45e3-8dcc-ba4a43cce84a.png",
    title: "Puma Suede Classic",
    category: "shoes",
    price: "$18.99"
  },
  {
    id: 36,
    image: "/lovable-uploads/27ffc1f8-9a48-40ba-aee9-ccb52f2d5283.png",
    title: "Nike High Drip",
    category: "shoes",
    price: "$22.99"
  },
  {
    id: 37,
    image: "/lovable-uploads/2ab6faf1-f3f3-4802-9069-28b8175b3374.png",
    title: "Nike Drip Edition",
    category: "shoes",
    price: "$22.99"
  },
  {
    id: 38,
    image: "/lovable-uploads/016d19da-2838-4374-b644-0b7992c34fc9.png",
    title: "Nike Air Force",
    category: "shoes",
    price: "$21.99"
  },
  {
    id: 39,
    image: "/lovable-uploads/eb0e2058-5b28-45c1-9d57-1c951aa1ba3c.png",
    title: "Yeezy Elevate",
    category: "shoes",
    price: "$24.99"
  },
  {
    id: 40,
    image: "/lovable-uploads/a69b8046-49f0-493e-b520-3ae195f66319.png",
    title: "Ford Mustang Vintage",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 41,
    image: "/lovable-uploads/a06cd3a1-9626-4fc2-94f7-7d27848b62fd.png",
    title: "Supra MK5 Orange",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 42,
    image: "/lovable-uploads/81878a10-bcdb-48fa-8031-4e3acddb47b8.png",
    title: "Nike Air Max 2023 Pink",
    category: "shoes",
    price: "$22.99"
  },
  {
    id: 43,
    image: "/lovable-uploads/e95eafe6-e351-42e7-a111-45cc67599a16.png",
    title: "Nike One Step Ahead Red",
    category: "shoes",
    price: "$21.99"
  },
  {
    id: 44,
    image: "/lovable-uploads/f49cb557-f61f-43a5-b1e7-67cb218b3fcf.png",
    title: "Airmax Retro Orange",
    category: "shoes",
    price: "$19.99"
  },
  {
    id: 45,
    image: "/lovable-uploads/608ba133-6a5a-4173-8205-6ee83f8f7c6d.png",
    title: "Lacoste Green Edition",
    category: "shoes",
    price: "$24.99"
  },
  {
    id: 46,
    image: "/lovable-uploads/3d98ecec-6e8c-41d3-83b1-f0ec51971ff6.png",
    title: "Puma Pixel Art",
    category: "shoes",
    price: "$18.99"
  },
  {
    id: 47,
    image: "/lovable-uploads/aa7fb0df-7ad6-41a3-9e61-5f83fe53d8a9.png",
    title: "Nike High Sky",
    category: "shoes",
    price: "$23.99"
  },
  {
    id: 48,
    image: "/lovable-uploads/9cb189f7-7e11-4d4a-94e0-e65245470f31.png",
    title: "Nike Drip Edition Blue",
    category: "shoes",
    price: "$22.99"
  },
  {
    id: 49,
    image: "/lovable-uploads/b7d713b4-098a-4ccc-9ea1-c92ec06e083f.png",
    title: "Nike Force Blue",
    category: "shoes",
    price: "$22.99"
  },
  {
    id: 50,
    image: "/lovable-uploads/86398209-c105-471f-a2c0-04a6e33603e2.png",
    title: "Yeezy Elevate Beige",
    category: "shoes",
    price: "$26.99"
  },
];
