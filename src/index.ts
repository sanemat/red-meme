const menuVideos = document.getElementsByClassName("menu__video");
const menuDetails = document.getElementsByClassName("menu__details");

const notifyFile = (file: File): void => {
  for (let i = 0; i < menuDetails.length; i++) {
    menuDetails[0].textContent = `
    name: ${file.name};
    lastModified: ${file.lastModified};
    size: ${file.size};
    type: ${file.type};
    `;
  }
};

for (let i = 0; i < menuVideos.length; i++) {
  menuVideos[i].addEventListener("change", event => {
    const file = (event.target as HTMLInputElement).files[0];
    notifyFile(file);
  });
}
