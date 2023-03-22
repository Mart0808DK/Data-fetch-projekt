"use script";

window.addEventListener("load", start);

/*-----Midlertidlig object til brug i undervisningen-----*/ 



function start() {
const kenny = {
  name: 'Kenneth "Kenny" McCormick',
  nickname: "Princess Kenny",
  image: "http://southparkstudios.mtvnimages.com/shared/characters/kids/kenny-mccormick.png?height=165",
  occupation: "Student",
  age: 9,
  voicedBy: "Matt Stone (muffled) Eric Stough (unmuffled) Isaac Hayes",
  gender: "Male",
  religion: "Roman Catholic , Temporary: Blaintologist*",
  catchPhrase: "Mrrph rmph rmmph mrrphh!",
  hairColor: "Blond",
  schoolgrade: "4th Grade",
  episodes: "S01E01 to S22E5",
  diedAndComeback: 120,
  apperances: 307,
  firstApperance: "S01E01",
};

showCharacters(kenny);
showCharacters(kenny);
showCharacters(kenny);
showCharacters(kenny);
showCharacters(kenny);
showCharacters(kenny);
showCharacters(kenny);
showCharacters(kenny);

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
  document.querySelector("#dialog-nickName").textContent = character.nickname;
  document.querySelector("#dialog-age").textContent = character.age;
  document.querySelector("#dialog-gender").textContent = character.gender;
  document.querySelector("#dialog-hairColor").textContent = character.hairColor;
  document.querySelector("#dialog-voiceBy").textContent = character.voicedBy;
  document.querySelector("#dialog-religion").textContent = character.religion;

  document.querySelector("#dialog-img").src = character.image;

  // show dialog
  document.querySelector("#dialog-characters").showModal();
}
