console.log("test");
const listElement = document.getElementById("list");

// listElement.scrollLeft = 1000;
// listElement.style.transform = "translateX(-500px)";

const li = document.querySelector("li");
console.log(listElement);

let translateX = 0;
function clickRightButton() {
  if (translateX > li.scrollWidth - listElement.scrollWidth) {
    translateX -= li.scrollWidth;
    listElement.style.transform = `translateX(${translateX}px)`;
  } else {
    translateX = 0;
    listElement.style.transform = `translateX(${translateX}px)`;
  }
  // translateX -= li.scrollWidth;
  // listElement.style.transform = `translateX(${translateX}px)`;
  console.log("clickRightButton");
}

const clickLeftButton = () => {
  if (translateX < 0) {
    translateX += li.scrollWidth;
    listElement.style.transform = `translateX(${translateX}px)`;
  } else {
    translateX = li.scrollWidth - listElement.scrollWidth;
    listElement.style.transform = `translateX(${translateX}px)`;
  }
  console.log("clickLeftButton");
};
