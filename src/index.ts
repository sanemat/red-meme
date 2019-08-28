const hello = (): string => {
  return "Hello World!";
};
// main
const main = document.getElementById("js-main");
if (main) {
  main.textContent = hello();
}
