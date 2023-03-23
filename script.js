"use script";

window.addEventListener("load", start);

/*-----Midlertidlig object til brug i undervisningen-----*/ 



async function start() {
const kennyC = await getCharacter("kenny.json");

showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);
showCharacters(kennyC);

}

async function getCharacter(url) {
  const response = await fetch(url)

  const data = await response.json()
  return data;
}

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


  // show dialog
  document.querySelector("#dialog-characters").showModal();
}
