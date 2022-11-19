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

const button = document.getElementsByClassName("color-button");

for (let i in ColorList) {
  button[i].onclick = function () {
    let addClass = button[i].classList[1];
    // console.log(addClass);
    domId("house").classList.add(`${addClass}`);
    for (let j in ColorList) {
      if (button[j].classList[2]) {
        button[j].classList.remove("active");
      }
    }

    button[i].classList.add(`active`);
    if (domId("house").classList[2]) {
      let removeClass = domId("house").classList[1];
      domId("house").classList.remove(`${removeClass}`);
      //   const as = querySelector(`.${removeClass}`);
      //   console.log(removeClass);
      //   console.log(removeClass);
    }
    // // return false để khỏi reload trang
    // return false;
  };
}

document.querySelector(".pallet").classList.add("active");
