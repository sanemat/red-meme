const menuVideo = document.getElementsByClassName("menu__video")[0];
const menuDetails = document.getElementsByClassName("menu__details")[0];
const menuStart = document.getElementsByClassName(
  "menu__start"
)[0] as HTMLInputElement;

const notifyFile = (file: File): void => {
  menuDetails.textContent = `
    name: ${file.name};
    lastModified: ${file.lastModified};
    size: ${file.size};
    type: ${file.type};
    `;
};

import audioUrl = require("./7sxtEOR7zhrd-60sec-fade-out.128.mp3");
const audio = new Audio(audioUrl);

menuStart.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

const playable = (): void => {
  menuStart.disabled = false;
};

menuVideo.addEventListener("change", event => {
  const file = (event.target as HTMLInputElement).files[0];
  notifyFile(file);
  playable();
});
