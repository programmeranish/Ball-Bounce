document.title = "ball bounce";

const body = document.body;

// environment
const environment = document.createElement("div");
environment.style.width = "600px";
environment.style.height = "700px";
environment.style.border = "2px solid black";
environment.style.position = "relative";
environment.style.margin = "auto";

// ball
const ball = document.createElement("div");
ball.style.width = "200px";
ball.style.height = "200px";
ball.style.backgroundColor = "#00c";
ball.style.borderRadius = "50%";
ball.style.position = "absolute";

let ballStartPosition = 0;
let ballPosition = ballStartPosition;
let ballBouncePosition = 0;

// moving ball
let moveBallWhere = moveBallDown;
setInterval(() => {
  moveBallWhere();
  ball.style.top = `${ballPosition}px`;
  if (ballPosition === 0) {
    moveBallWhere = moveBallDown;
  }
  if (ballPosition === 500) {
    moveBallWhere = moveBallUp;
  }
}, 1000 / 60);

function moveBallDown() {
  ballPosition += 1;
}
function moveBallUp() {
  ballPosition -= 1;
}

environment.appendChild(ball);
body.appendChild(environment);
