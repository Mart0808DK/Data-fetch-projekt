"use script";

window.addEventListener("load", start);

/*-----Midlertidlig object til brug i undervisningen-----*/ 

const kenny = {
  name: 'Kenneth "Kenny" McCormick',
  nickname: "Princess Kenny",
  image: "http://southparkstudios.mtvnimages.com/shared/characters/kids/kenny-mccormick.png?height=165",
  occupation: "Student",
  age: 9,
  voicedBy: "Matt Stone (muffled) Eric Stough (unmuffled)Isaac Hayes",
  gender: "Male",
  religion: "Roman Catholic , Temporary: Blaintologist*",
  catchPhrase: "Mrrph rmph rmmph mrrphh!",
  hairColor: "Blond",
  schoolgrade: "4th Grade",
  episodes: "S01E01 to S22E5",
  diedAndComeback: 120,
  firstApperance: "S01E01",
};

function start() {
showKenny(kenny);
}


function showKenny() {
  document.querySelector("#dialog-nickName").textContent = kenny.nickname;
  document.querySelector("#dialog-age").textContent = kenny.age;
  document.querySelector("#dialog-gender").textContent = kenny.gender;
  document.querySelector("#dialog-hairColor").textContent = kenny.hairColor;
  document.querySelector("#dialog-grade").textContent = kenny.schoolgrade;
  document.querySelector("#dialog-religion").textContent = kenny.religion;
  document.querySelector("#dialog-voiceBy").textContent = kenny.voicedBy;
  document.querySelector("#dialog-episodes").textContent = kenny.episodes;
  document.querySelector("#dialog-firstApperance").textContent = kenny.firstApperance;
  document.querySelector("#dialog-diedAndComeback").textContent = kenny.diedAndComeback;
}
