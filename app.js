let inp = document.querySelector("#catsName");
let select = document.querySelector("#catsRace");
let ol = document.querySelector(".catsInfo");
let btn = document.querySelector("button");
let spa = document.querySelector(".catsNum");
/* 
function inpLength() {
  return inp.value.length
} */
const inpLength = () => inp.value.length;

let catsRaseLista = ["BIBI", "NINI", "KIKI", "MIMI", "SISI"];
let catsAllInfo = [];

for (getRase of catsRaseLista) {
  let raceInfo = document.createElement("option");
  raceInfo.innerHTML = getRase;
  raceInfo.value = getRase;
  select.appendChild(raceInfo);
}

let registerCats = () => {
  inp.value = "";
  let li = document.createElement("li");
  li.textContent = `Name: ${inp.value} Race: ${select.value}`;
  ol.appendChild(li);
  catsAllInfo.push({ getRase });
  spa.innerHTML = catsAllInfo.length;

  li.addEventListener("click", done);
  function done() {
    li.classList.add("done");
  }
};

function clickMe(e) {
  e.preventDefault();
  if (inpLength() > 0) {
    registerCats();
  }
}

btn.addEventListener("click", clickMe);
