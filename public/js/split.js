const doc = document;
const right = doc.querySelector(".right");
const left = doc.querySelector(".left");
const container = doc.querySelector(".container"); // adds a class to the container element on hover

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
}); // removes the class that was added on hover

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});
right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});
right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});