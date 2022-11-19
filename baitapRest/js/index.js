const domId = (id) => document.getElementById(id);

domId("btnKhoi1").onclick = function () {
  const math = +domId("inpToan").value;
  const physical = +domId("inpLy").value;
  const chemitry = +domId("inpHoa").value;

  const calcAverage1 = [math, physical, chemitry];
  let array = [];

  array = calcAverage1;
  //   console.log(array);
  domId("tbKhoi1").innerHTML = calcAverage(...array);
};

domId("btnKhoi2").onclick = function () {
  const letter = +domId("inpVan").value;
  const history = +domId("inpSu").value;
  const geography = +domId("inpDia").value;
  const english = +domId("inpEnglish").value;

  const calcAverage2 = [letter, history, geography, english];
  array = calcAverage2;
  domId("tbKhoi2").innerHTML = calcAverage(...array);
};

function calcAverage(...array) {
  let sum = 0;
  for (let i in array) {
    sum += array[i];
  }
  let avg = sum / array.length;
  return avg;
}
