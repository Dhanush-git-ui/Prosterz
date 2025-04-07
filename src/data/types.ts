
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
