import { toDoInit } from "./js/todo.js";
import Splide from "../node_modules/@splidejs/splide/dist/js/splide.js";

new Splide(".splide", {
  type: "loop",
  perPage: 1,
  rewind: true,
  rewindByDrag: true,
  heightRatio: 0.3,
  speed: 1200,
}).mount();

console.log("Start");

toDoInit();
