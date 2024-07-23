const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');
const clear = document.getElementById('clear');

const img = new Image();
img.src = '../Picture/Maze.jpg';
img.onload = function() {
  resizeCanvas();
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'red';
}

let drawing = false;

function resizeCanvas() {
  const maxWidth = window.innerWidth * 0.8;
  const scale = maxWidth / img.width;
  canvas.width = maxWidth;
  canvas.height = img.height * scale;
}

canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
  if (drawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});

canvas.addEventListener('mouseup', () => {
  drawing = false;
});

canvas.addEventListener('mouseout', () => {
  drawing = false;
});

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  const touchX = e.touches[0].clientX ;//- canvas.getBoundingClientRect().left;
  const touchY = e.touches[0].clientY ;//- canvas.getBoundingClientRect().top;
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(touchX, touchY);
});

canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  if (drawing) {
    const touchX = e.touches[0].clientX ;//- canvas.getBoundingClientRect().left;
    const touchY = e.touches[0].clientY ;//- canvas.getBoundingClientRect().top;
    ctx.lineTo(touchX, touchY);
    ctx.stroke();
  }
});

canvas.addEventListener('touchend', () => {
  drawing = false;
});

window.addEventListener('resize', () => {
  resizeCanvas();
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});

document.getElementById('done').addEventListener('click', () => {
  swal("恭喜完成迷宮", "", "success", {button: "關閉"})
  .then((result) => {
      window.close();
  });
});
