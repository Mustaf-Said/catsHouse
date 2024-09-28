let inp = document.querySelector("#catsName");
let select = document.querySelector("#catsRace");
let ol = document.querySelector(".catsInfo");
let btn = document.querySelector("button");
let spa = document.querySelector(".catsNum");

let catsRaseLista = ["BIBI", "NINI", "KIKI", "MIMI", "SISI"];
let catsAllInfo = [];

for (getRase of catsRaseLista) {
  let raceInfo = document.createElement("option");
  raceInfo.innerHTML = getRase;
  raceInfo.value = getRase;
  select.appendChild(raceInfo);
}



let registerCats = () => {
    
  let li = document.createElement("li");
  li.textContent = `Name: ${inp.value} Race: ${select.value}`;
  ol.appendChild(li);
  catsAllInfo.push({getRase});
  spa.innerHTML = catsAllInfo.length;
  
li.addEventListener('click', done)
  function done() {
    li.classList.add('done')
  }


};

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    registerCats()
      inp.value = ''
})
    

