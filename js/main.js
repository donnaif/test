function createImage() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = 'https://up6.cc/2023/04/168142117409381.png/400/200';
}

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', function() {
  const canvas = document.getElementById('canvas');
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'canvas-image.png';
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
