import { defaultPosters } from "./posters";

export const posterPreviewImages = Array.from(
  new Set(defaultPosters.map((poster) => poster.image))
);
