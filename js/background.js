const images = [
  'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-0.3.5&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&s=66634d2c2fe8175ab6c9494fde6e9470?momo_cache_bg_uuid=554353e2-1445-41bd-806a-4c42ba9729cd&quot',
  'https://images.pexels.com/photos/944363/pexels-photo-944363.jpeg',
  'https://images.pexels.com/photos/17381385/pexels-photo-17381385/free-photo-of-an-aerial-view-of-a-small-island-with-boats-and-a-dock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgElement = document.querySelector('.background-item');
bgElement.setAttribute('style', `background-image: url(${chosenImage});`);
