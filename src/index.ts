const menuVideos = document.getElementsByClassName("menu__video");
for (let i = 0; i < menuVideos.length; i++) {
  menuVideos[i].addEventListener("change", event => {
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
  });
}
