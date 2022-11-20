let str = document.querySelector(".heading").innerHTML;
let chars = [...str];

// console.log(chars);
let content = "";
for (let i in chars) {
  content += `<span>${chars[i]}</span>`;
}

document.querySelector(".heading").innerHTML = content;
