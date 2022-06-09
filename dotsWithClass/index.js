let color = "yellow";

function setColor(colorName) {
  color = colorName;
}

const body = document.body;

body.addEventListener("click", (event) => {
  if (event.target.id === "outsideDiv") {
    const dot = new Dot(event.x, event.y);
  }
});

// outside box div
const outsideDiv = document.createElement("div");
outsideDiv.style.height = "100vh";
outsideDiv.style.width = "100%";
outsideDiv.style.backgroundColor = "brown";
outsideDiv.id = "outsideDiv";
outsideDiv.style.position = "relative";
outsideDiv.style.zIndex = "1";

body.appendChild(outsideDiv);

//color choose div
const colorTemplate = document.createElement("div");
colorTemplate.style.width = "400px";
colorTemplate.style.height = "100px";
colorTemplate.style.backgroundColor = "red";
colorTemplate.style.zIndex = "3";
colorTemplate.style.position = "absolute";
colorTemplate.style.top = "0px";
colorTemplate.style.right = "0px";
outsideDiv.appendChild(colorTemplate);

// creating color tabs

const colors = ["yellow", "green", "blue", "pink"];

colors.forEach((color) => {
  const colorBtn = document.createElement("button");
  colorBtn.style.height = "100px";
  colorBtn.style.width = "100px";
  colorBtn.style.cursor = "pointer";
  colorBtn.style.backgroundColor = color;
  colorBtn.id = color;

  colorTemplate.appendChild(colorBtn);

  colorTemplate.addEventListener("click", (event) => {
    color = event.target.id;
    setColor(color);
  });
});

class Dot {
  // adding dot function
  constructor(x = 0, y = 0) {
    const dot = document.createElement("div");
    dot.style.height = "100px";
    dot.style.width = "100px";
    dot.style.backgroundColor = color;
    dot.style.position = "absolute";
    dot.style.left = `${x - 60}px`;
    dot.style.top = `${y - 60}px`;
    dot.style.borderRadius = "50%";
    dot.style.zIndex = "2";
    outsideDiv.appendChild(dot);

    console.log(this);

    dot.addEventListener("click", () => {
      outsideDiv.removeChild(dot);
    });
  }
}
