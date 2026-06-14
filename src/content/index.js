// Site selector.
// The active site is chosen at BUILD TIME via the VITE_SITE env var
// (set per deployment / via .env files). Defaults to "reactnative".
//
//   VITE_SITE=reactnative  ->  reactnative.js   (default build)
//   VITE_SITE=fullstack    ->  fullstack.js     (`vite build --mode fullstack`)
import reactnative from "./reactnative";
import fullstack from "./fullstack";

const sites = {
  reactnative,
  fullstack,
};

export const SITE = import.meta.env.VITE_SITE || "reactnative";

export const content = sites[SITE] ?? reactnative;

export default content;
