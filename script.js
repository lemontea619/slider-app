console.log("test");
const listElement = document.getElementById("list");

// listElement.scrollLeft = 1000;
// listElement.style.transform = "translateX(-500px)";

const li = document.querySelector("li");
console.log(li);

function clickRightButton() {
  if (listElement.scrollLeft == listElement.scrollWidth - li.scrollWidth) {
    listElement.scrollLeft = 0;
  } else {
    listElement.scrollLeft += li.scrollWidth;
  }
  console.log("clickRightButton");
  console.log(listElement.scrollLeft);
}

const clickLeftButton = () => {
  if (listElement.scrollLeft == 0) {
    listElement.scrollLeft = listElement.scrollWidth - li.scrollWidth;
  } else {
    listElement.scrollLeft -= li.scrollWidth;
  }
  console.log("clickLeftButton");
  console.log(listElement.scrollLeft);
};
