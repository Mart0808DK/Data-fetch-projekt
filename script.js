"use script";

window.addEventListener("load", start);


async function start() {
const kennyC = await getCharacter("kenny.json");
const cartMan = await getCharacter("https://raw.githubusercontent.com/Bindholt/Data-Projekt/main/data/cartman.json");
const butters = await getCharacter("https://raw.githubusercontent.com/Asbjoernemil/data-assignment/main/data/characters.json");
const tomCruise = await getCharacter("https://raw.githubusercontent.com/svdf18/SPobjects/main/data/tomcruise.json");

showCharacters(kennyC);
showCharacters(cartMan);
showCharacters(butters);
showCharacters(tomCruise);
showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);

}
// fetch character 
async function getCharacter(url) {
  const response = await fetch(url)

  const data = await response.json()
  return data;
}
// viser characters i html ude dialog boks  
function showCharacters(character) {
  console.log(character);

  const Myhtml = /*html*/ `
    <article>
    <img src=${character.image}>
    <h2>${character.name}</h2>
    <p>chatchPhrase:  ${character.catchPhrase}</p>
    </article>

  `;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", Myhtml);
  document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

  function characterClicked() {
    console.log("character clicked");
    showCh(character);
  }
}

function showCh(character) {
  // change element in dialog
  document.querySelector("#dialog-img").src = character.image;
  document.querySelector("#dialog-nickName").textContent = character.nickname;
  document.querySelector("#dialog-age").textContent = character.age;
  document.querySelector("#dialog-gender").textContent = character.gender;
  document.querySelector("#dialog-hairColor").textContent = character.hairColor;
  document.querySelector("#dialog-voiceBy").textContent = character.voicedBy;
  document.querySelector("#dialog-religion").textContent = character.religion;
  document.querySelector("#dialog-episodes").textContent = character.episodes;
  document.querySelector("#dialog-Apperance").textContent = character.apperances;
  document.querySelector("#dialog-firstApperance").textContent = character.firstApperance;
  document.querySelector("#dialog-grade").textContent = character.schoolgrade;


  // show dialog
  document.querySelector("#dialog-characters").showModal();
}
