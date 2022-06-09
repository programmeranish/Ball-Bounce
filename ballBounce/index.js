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

function moveBall() {}

// moving ball
setInterval(() => {
  ball.style.top = `${ballPosition}px`;
  if (ballPosition < 700) ballPosition = ballPosition + 1;
  else {
    ballPosition = ballPosition - 1;
  }
}, 1000 / 60);

environment.appendChild(ball);
body.appendChild(environment);
