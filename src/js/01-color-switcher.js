const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
btnStop.disabled = true;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function startBtn() {
  btnStart.disabled = true;
  btnStop.disabled = false;
}

btnStart.addEventListener('click', () => {
    startBtn();

  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

function stopBtn() {
    btnStart.disabled = false;
    btnStop.disabled = true;
}

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
    stopBtn();
});
