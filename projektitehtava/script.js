/* perusteidenmuisti
//#region 
console.log("moikka maailma")

let etuNimi = "Markku";
let lasku = 2 + 2 + 2 * 5;
let isRunning = true

console.log(lasku)
console.log(typeof(isRunning))
//#endregion

let arvot = [25, 50, 100]
console.log(arvot[1])
console.log(arvot.length)
*/

var nav = document.querySelector("nav");
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", togglehamburger);

function togglehamburger(){
    nav.classList.toggle("hidden");
}

//excel tableille check merkki laskuri

//haetaan elementit
const laskuri = document.getElementById("laskuri");
const laskuri2 = document.getElementById("laskuri2");
const laskuri3 = document.getElementById("laskuri3");
const laskuri4 = document.getElementById("laskuri4");
const laskuri5 = document.getElementById("laskuri5");
const laskuri6 = document.getElementById("laskuri6");
const laskuri7A = document.getElementById("laskuri7A");
const laskuri7B = document.getElementById("laskuri7B");
const laskuri8 = document.getElementById("laskuri8");
const laskuri9 = document.getElementById("laskuri9");
const laskuri10A = document.getElementById("laskuri10A");
const laskuri10B = document.getElementById("laskuri10B");
const laskuri11 = document.getElementById("laskuri11");
const laskuri12 = document.getElementById("laskuri12");
const laskuri13 = document.getElementById("laskuri13");
const laskuriExtrat = document.getElementById("laskuriExtrat");

//funktio jolle annetaan elementin id sekä laskurin id | `suluissa` oleva stringi toimii python f stringin tavoin merkin ${} avulla
function showChecked(mihin, mika){
    mihin.innerHTML = document.querySelectorAll(`input[name=${mika}]:checked`).length;
    //console.log(`testi ${laskuri}`);
}

//settien toiminta
document.querySelectorAll("input[name=loota]").forEach(i=>{
    i.onclick = () => showChecked(laskuri, 'loota');
   });

document.querySelectorAll("input[name=setti2]").forEach(i=>{
    i.onclick = () => showChecked(laskuri2, 'setti2');
   });

document.querySelectorAll("input[name=setti3]").forEach(i=>{
    i.onclick = () => showChecked(laskuri3, 'setti3');
    });

document.querySelectorAll("input[name=setti4]").forEach(i=>{
    i.onclick = () => showChecked(laskuri4, 'setti4');
    });

document.querySelectorAll("input[name=setti5]").forEach(i=>{
    i.onclick = () => showChecked(laskuri5, 'setti5');
    });

document.querySelectorAll("input[name=setti6]").forEach(i=>{
    i.onclick = () => showChecked(laskuri6, 'setti6');
    });

document.querySelectorAll("input[name=setti7A]").forEach(i=>{
    i.onclick = () => showChecked(laskuri7A, 'setti7A');
    });

document.querySelectorAll("input[name=setti7B]").forEach(i=>{
    i.onclick = () => showChecked(laskuri7B, 'setti7B');
    });

document.querySelectorAll("input[name=setti8]").forEach(i=>{
    i.onclick = () => showChecked(laskuri8, 'setti8');
    });

document.querySelectorAll("input[name=setti9]").forEach(i=>{
    i.onclick = () => showChecked(laskuri9, 'setti9');
    });

document.querySelectorAll("input[name=setti10A]").forEach(i=>{
    i.onclick = () => showChecked(laskuri10A, 'setti10A');
    });

document.querySelectorAll("input[name=setti10B]").forEach(i=>{
    i.onclick = () => showChecked(laskuri10B, 'setti10B');
    });

document.querySelectorAll("input[name=setti11]").forEach(i=>{
    i.onclick = () => showChecked(laskuri11, 'setti11');
    });

document.querySelectorAll("input[name=setti12]").forEach(i=>{
    i.onclick = () => showChecked(laskuri12, 'setti12');
    });

document.querySelectorAll("input[name=setti13]").forEach(i=>{
    i.onclick = () => showChecked(laskuri13, 'setti13');
    });

document.querySelectorAll("input[name=settiExtrat]").forEach(i=>{
    i.onclick = () => showChecked(laskuriExtrat, 'settiExtrat');
    });


//galleria

var yhteiskuvat = document.querySelector("#yhteiskuvat");
var yhteiskuvathumbnail = document.querySelector("#thumbnail1");

var jäsenkuvat = document.querySelector("#jäsenkuvat");
var jäsenthumbnail = document.querySelector("#thumbnail2");

var logokuvat = document.querySelector("#logokuvat");
var logothumbnail = document.querySelector("#thumbnail3");

yhteiskuvathumbnail.addEventListener("click", piilota);
jäsenthumbnail.addEventListener("click", piilota1);
logothumbnail.addEventListener("click", piilota2);

function piilota(){
    yhteiskuvat.classList.toggle("piilotettu");
    yhteiskuvathumbnail.classList.toggle("valittu");
}

function piilota1(){
    jäsenkuvat.classList.toggle("piilotettu");
    jäsenthumbnail.classList.toggle("valittu");
}

function piilota2(){
    logokuvat.classList.toggle("piilotettu");
    logothumbnail.classList.toggle("valittu");
}