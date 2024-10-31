const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const shapeForm = document.getElementById("shapeForm");
const colorForm = document.getElementById("colorForm");
const amplitudeSlider = document.getElementById("amplitude");
const frequencySlider = document.getElementById("frequency");

let shape = "circle";
let color = "blue";
let amplitude = parseFloat(amplitudeSlider.value);
let frequency = parseInt(frequencySlider.value, 10);
let time = 0;

shapeForm.addEventListener("change", (e) => {
  shape = e.target.value;
});
colorForm.addEventListener("change", (e) => {
  color = e.target.value;
});
amplitudeSlider.addEventListener("input", (e) => {
  amplitude = parseFloat(e.target.value);
});
frequencySlider.addEventListener("input", (e) => {
  frequency = parseInt(e.target.value, 10);
});

function animateBlob() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = color;
  ctx.strokeStyle = color;

  ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;

  ctx.beginPath();

  if (shape === "circle") {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const baseRadius = 100;

    for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
      const wave = Math.sin(angle * frequency + time) * amplitude;
      const radius = baseRadius + wave * 10;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      angle === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
  } else if (shape === "square") {
    const side = 150;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const halfSide = side / 2;

    const topLeftX =
      centerX - halfSide + amplitude * Math.sin(time * frequency + 0);
    const topLeftY =
      centerY - halfSide + amplitude * Math.cos(time * frequency + 0);

    const topRightX =
      centerX + halfSide + amplitude * Math.sin(time * frequency + 1);
    const topRightY =
      centerY - halfSide + amplitude * Math.cos(time * frequency + 1);

    const bottomRightX =
      centerX + halfSide + amplitude * Math.sin(time * frequency + 2);
    const bottomRightY =
      centerY + halfSide + amplitude * Math.cos(time * frequency + 2);

    const bottomLeftX =
      centerX - halfSide + amplitude * Math.sin(time * frequency + 3);
    const bottomLeftY =
      centerY + halfSide + amplitude * Math.cos(time * frequency + 3);

    ctx.moveTo(topLeftX, topLeftY);
    ctx.lineTo(topRightX, topRightY);
    ctx.lineTo(bottomRightX, bottomRightY);
    ctx.lineTo(bottomLeftX, bottomLeftY);
    ctx.closePath();
  }

  ctx.fill();
  ctx.stroke();

  time += 0.05;
  requestAnimationFrame(animateBlob);
}

animateBlob();
