let nextButton = document.querySelector(".button1");
let memeContainer = [
  "aimran.jpeg",
  "anderjaa.jpeg",
  "attackajegha.jpeg",
  "baburou.jpeg",
  "badiyaguru.jpeg",
  "bahes.jpeg",
  "barish.jpeg",
  "barosa.jpeg",
  "bettumse.jpeg",
  "bipender.jpeg",
  "chakkar.jpeg",
  "chand.webp",
  "derso.jpg",
  "doona.webp",
  "gharjanaha.jpeg",
  "images.jpeg",
  "600saal.webp",
  "internalmatter.jpeg",
  "kitne admi the.webp",
  "kounbadtameez.jpeg",
  "kyskrumar.jpeg",
  "kyuhila.jpeg",
  "ma purush hu.webp",
  "majaayega.jpeg",
  "mamubanya.jpeg",
  "mardya.jpeg",
  "mari.jpeg",
  "mastkaam.jpeg",
  "mauttak.jpeg",
  "meme.jpeg",
  "mukambo.webp",
  "nahi.jpeg",
  "nahikrna =ta.jpeg",
  "padahi.jpeg",
  "pagalaurat.webp",
  "partybadal.jpeg",
  "purush.jpeg",
  "qagya.jpeg",
  "sabkuch.jpeg",
  "soankalota.jpeg",
  "supari.jpeg",
  "takleef.jpeg",
  "tuba mood.webp",
  "tumse na hu pyegha.webp",
  "tussi.webp",
  "uthale.jpeg",
  "welcome.webp",
  "zehrkhane.jpeg",
  "meme1.jpeg",
  "meme2.jpeg",
  "meme3.jpeg",
  "meme4.jpeg",
  "meme5.jpeg",
  "meme6.jpeg",
  "meme7.jpeg",
  "meme8.jpeg",
  "meme9.jpeg",
  "meme10.jpeg",
  "meme11.jpeg",
  "meme12.jpeg",
 
];

function meme(){
  const memeElement = document.querySelector(".meme-element");
  const ParentElement = document.querySelector(".parent-element");
  if (memeContainer.length > 0) {
    let random = Math.floor(Math.random() * memeContainer.length);
    let getMeme = memeContainer.splice(random, 1)[0];
    let arr = [];
    arr.push(getMeme);
    console.log(random, arr, memeContainer.length);
    memeElement.src = arr[0];
  } else{
    memeElement.remove();
    let h1 = document.createElement("h1");
    h1.textContent = "Cheap Newton loser 🤣🤣";
    ParentElement.appendChild(h1);
  }
}

meme();

