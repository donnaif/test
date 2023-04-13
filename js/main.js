const generateBtn = document.getElementById('generate-btn');
const nameInput = document.getElementById('name');
const greetingMessage = document.getElementById('greeting');

generateBtn.addEventListener('click', function() {
  const name = nameInput.value;
  greetingMessage.innerText = `Happy Birthday, ${name}!`;
  
  html2canvas(document.querySelector('.card')).then(function(canvas) {
    // Convert canvas to image and save it
    const image = canvas.toDataURL('/images/image.png');
    const link = document.createElement('a');
    link.download = 'greeting-card.png';
    link.href = image;
    link.click();
  });
});
