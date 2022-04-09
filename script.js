const redInp = document.getElementById("red");
const greenInp = document.getElementById("green");
const blueInp = document.getElementById("blue");

const btnOne = document.getElementById("btn");
const btnTwo = document.getElementById("btn2");
const saveBtn = document.getElementById("btn3");
const showSavedColorsBtn = document.getElementById("btn4");

const resultOne = document.getElementById("result-one");
const resultTwo = document.getElementById("result-two");

const savedColorsDiv = document.getElementById("saved-colors");

let savedColors = [];

// button one !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

btnOne.addEventListener("click", () => {
  let red = parseInt(redInp.value);
  let green = parseInt(greenInp.value);
  let blue = parseInt(blueInp.value);
  resultOne.innerHTML = "";
  if (redInp.value > 255 || greenInp.value > 255 || blueInp.value > 255) {
    console.log("choose number between 0 -255");
    resultOne.style.display = "flex";
    resultTwo.innerHTML = "choose number between 0 -255";
  } else {
    resultOne.style.display = "flex";
    resultOne.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }

  RGBToHex(red, green, blue);
});

// button two !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

btnTwo.addEventListener("click", () => {
  let red = parseInt(redInp.value);
  let green = parseInt(greenInp.value);
  let blue = parseInt(blueInp.value);
  resultTwo.innerHTML = "";
  if (redInp.value > 255 || greenInp.value > 255 || blueInp.value > 255) {
    console.log("choose number between 0 -255");
    resultTwo.style.display = "flex";
    resultTwo.innerHTML = "choose number between 0 -255";
  } else {
    resultTwo.style.display = "flex";
    resultTwo.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }
  RGBToHex(red, green, blue);
});

// saved color !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const nickOfColors = document.getElementById("saved-colors-nick");

saveBtn.addEventListener("click", () => {
  let red = parseInt(redInp.value);
  let green = parseInt(greenInp.value);
  let blue = parseInt(blueInp.value);

  let rgb = `rgb(${red},${green},${blue})`;
  savedColors.push({
    nick: nickOfColors.value,
    color: rgb,
  });
  // savedColors.push(rgb);
  localStorage.setItem("idan", JSON.stringify(savedColors));
  console.log(savedColors);
});

//show saved colors !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

showSavedColorsBtn.addEventListener("click", () => {
  const storage = JSON.parse(localStorage.getItem("idan"));
  const storageArr = [...storage];
  savedColorsDiv.innerHTML = "";
  for (const color of storageArr) {
    savedColorsDiv.innerHTML += `<div  id="user-colors" style="background-color:${color.color}"><a>${color.nick} : ${color.color}</div>`;
  }
});

const hex = document.getElementById("hex");

function RGBToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  hex.innerHTML = "#" + r + g + b;
  return "#" + r + g + b;
}
