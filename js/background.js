const images = [
  'https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/944363/pexels-photo-944363.jpeg',
  'https://images.pexels.com/photos/306344/pexels-photo-306344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgElement = document.querySelector('.background-item');
bgElement.setAttribute('style', `background-image: url(${chosenImage});`);
