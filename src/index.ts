const menuVideo = document.getElementsByClassName("menu__video")[0];
const menuDetails = document.getElementsByClassName("menu__details")[0];

const notifyFile = (file: File): void => {
  menuDetails.textContent = `
    name: ${file.name};
    lastModified: ${file.lastModified};
    size: ${file.size};
    type: ${file.type};
    `;
};

menuVideo.addEventListener("change", event => {
  const file = (event.target as HTMLInputElement).files[0];
  notifyFile(file);
});
