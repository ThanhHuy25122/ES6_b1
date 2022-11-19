// import { ColorList } from "../models/color.js";

function domId(id) {
  return document.getElementById(id);
}
const ColorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cerulean",
];

let content = "";

for (let i in ColorList) {
  content += `<button class="color-button ${ColorList[i]}"></button>`;
}

domId("colorContainer").innerHTML = content;

document.querySelector("color-button").onclick = function () {
  const as = document.querySelectorAll(".color-button").classList[1];

  console.log(1);
};
