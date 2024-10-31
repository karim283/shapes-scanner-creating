const imageUpload = document.getElementById("imageUpload");
const uploadCanvas = document.getElementById("uploadCanvas");
const previewCanvas = document.getElementById("previewCanvas");

const uploadCtx = uploadCanvas.getContext("2d");
const previewCtx = previewCanvas.getContext("2d");

imageUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const img = new Image();
    img.onload = function () {
      uploadCanvas.width = img.width;
      uploadCanvas.height = img.height;
      previewCanvas.width = img.width;
      previewCanvas.height = img.height;

      uploadCtx.drawImage(img, 0, 0);
      traceBlackLines();
      uploadText.style.display = "none";
    };
    img.src = URL.createObjectURL(file);
  }
});

function traceBlackLines() {
  const imageData = uploadCtx.getImageData(
    0,
    0,
    uploadCanvas.width,
    uploadCanvas.height
  );
  const data = imageData.data;

  previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
  previewCtx.strokeStyle = "black";

  for (let y = 0; y < imageData.height; y++) {
    for (let x = 0; x < imageData.width; x++) {
      const index = (y * imageData.width + x) * 4;
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      const a = data[index + 3];

      if (r < 50 && g < 50 && b < 50 && a === 255) {
        previewCtx.fillRect(x, y, 1, 1);
      }
    }
  }
}
