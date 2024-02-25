function changeImage(img) {
  var imageName = img.src.split('/').pop(); // Get the name of the image file
  switch(imageName) {
    case 'cave_01.jpg':
      img.src = 'cave_02.jpg';
      break;
    case 'cave_02.jpg':
      img.src = 'cave_01.jpg';
      break;
    case 'moon_01.jpg':
      img.src = 'moon_02.jpg';
      break;
    case 'moon_02.jpg':
      img.src = 'moon_01.jpg';
      break;
    default:
      break;
  }
}