
import { Poster } from "./types";
import { albumPosters } from "./albumPosters";
import { sneakerPosters } from "./sneakerPosters";
import { sportsPosters } from "./sportsPosters";
import { moviePosters } from "./moviePosters";

// Export all posters combined for backward compatibility
export const defaultPosters: Poster[] = [
  ...albumPosters,
  ...sneakerPosters,
  ...sportsPosters,
  ...moviePosters
];

// Re-export the type
export type { Poster } from "./types";

// Re-export individual category arrays
export { albumPosters, sneakerPosters, sportsPosters, moviePosters };
