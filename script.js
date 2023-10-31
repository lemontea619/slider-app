console.log("test");
const listElement = document.getElementById("list");

// listElement.scrollLeft = 1000;
// listElement.style.transform = "translateX(-500px)";

const li = document.querySelector("li");
console.log(li);

function clickRightButton() {
  listElement.scrollLeft += li.scrollWidth;
  console.log("clickRightButton");
}

const clickLeftButton = () => {
  listElement.scrollLeft -= li.scrollWidth;
  console.log("clickLeftButton");
};
