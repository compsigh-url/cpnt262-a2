'use strict';

const images = [{
    "title": "photo1",
    "decription": "Sky with clouds",
    "width": "4000px",
    "height": "6000px",
    "pathURL": "assets/images/bruno-emmanuelle.jpg",
    "linkURL": "https://unsplash.com/photos/r83X_CTVTNQ",
    "credit": "Photo by BRUNO EMMANUELLE on Unsplash",
    "creditURL": "https://unsplash.com/@brunocervera",
  },
  {
    "title": "photo2",
    "decription": "Night time with streetlight and person wearing a yellow raincoat",
    "width": "3832px",
    "height": "5748px",
    "pathURL": "assets/images/patrik-laszlo.jpg",
    "linkURL": "https://unsplash.com/photos/LFVxEapTvc8",
    "credit": "Photo by Patrik László on Unsplash",
    "creditURL": "https://unsplash.com/@patriklaszlo",
  },
  {
    "title": "photo3",
    "decription": "Measuring tool",
    "width": "2800px",
    "height": "2200px",
    "pathURL": "assets/images/vadim-bogulov.jpg",
    "linkURL": "https://unsplash.com/photos/e-IKXIGmtqQ",
    "credit": "Photo by Vadim Bogulov on Unsplash",
    "creditURL": "https://unsplash.com/@franku84",
  },
  {
    "title": "photo4",
    "decription": "Berries in autumn",
    "width": "3456px",
    "height": "5184px",
    "pathURL": "assets/images/anthony-ievlev.jpg",
    "linkURL": "https://unsplash.com/photos/1JDtcaV8QVk",
    "credit": "Photo by Anthony Ievlev on Unsplash",
    "creditURL": "https://unsplash.com/@onmywayhome",
  },
  {
    "title": "photo1",
    "decription": "Sky with clouds",
    "width": "4000px",
    "height": "6000px",
    "pathURL": "assets/images/bruno-emmanuelle.jpg",
    "linkURL": "https://unsplash.com/photos/r83X_CTVTNQ",
    "credit": "Photo by BRUNO EMMANUELLE on Unsplash",
    "creditURL": "https://unsplash.com/@brunocervera",
  },
  {
    "title": "photo2",
    "decription": "Night time with streetlight and person wearing a yellow raincoat",
    "width": "3832px",
    "height": "5748px",
    "pathURL": "assets/images/patrik-laszlo.jpg",
    "linkURL": "https://unsplash.com/photos/LFVxEapTvc8",
    "credit": "Photo by Patrik László on Unsplash",
    "creditURL": "https://unsplash.com/@patriklaszlo",
  },
  {
    "title": "photo3",
    "decription": "Measuring tool",
    "width": "2800px",
    "height": "2200px",
    "pathURL": "assets/images/vadim-bogulov.jpg",
    "linkURL": "https://unsplash.com/photos/e-IKXIGmtqQ",
    "credit": "Photo by Vadim Bogulov on Unsplash",
    "creditURL": "https://unsplash.com/@franku84",
  },
  {
    "title": "photo4",
    "decription": "Berries in autumn",
    "width": "3456px",
    "height": "5184px",
    "pathURL": "assets/images/anthony-ievlev.jpg",
    "linkURL": "https://unsplash.com/photos/1JDtcaV8QVk",
    "credit": "Photo by Anthony Ievlev on Unsplash",
    "creditURL": "https://unsplash.com/@onmywayhome",
  },
  {
    "title": "photo1",
    "decription": "Sky with clouds",
    "width": "4000px",
    "height": "6000px",
    "pathURL": "assets/images/bruno-emmanuelle.jpg",
    "linkURL": "https://unsplash.com/photos/r83X_CTVTNQ",
    "credit": "Photo by BRUNO EMMANUELLE on Unsplash",
    "creditURL": "https://unsplash.com/@brunocervera",
  },
  {
    "title": "photo2",
    "decription": "Night time with streetlight and person wearing a yellow raincoat",
    "width": "3832px",
    "height": "5748px",
    "pathURL": "assets/images/patrik-laszlo.jpg",
    "linkURL": "https://unsplash.com/photos/LFVxEapTvc8",
    "credit": "Photo by Patrik László on Unsplash",
    "creditURL": "https://unsplash.com/@patriklaszlo",
  },
  {
    "title": "photo3",
    "decription": "Measuring tool",
    "width": "2800px",
    "height": "2200px",
    "pathURL": "assets/images/vadim-bogulov.jpg",
    "linkURL": "https://unsplash.com/photos/e-IKXIGmtqQ",
    "credit": "Photo by Vadim Bogulov on Unsplash",
    "creditURL": "https://unsplash.com/@franku84",
  },
  {
    "title": "photo4",
    "decription": "Berries in autumn",
    "width": "3456px",
    "height": "5184px",
    "pathURL": "assets/images/anthony-ievlev.jpg",
    "linkURL": "https://unsplash.com/photos/1JDtcaV8QVk",
    "credit": "Photo by Anthony Ievlev on Unsplash",
    "creditURL": "https://unsplash.com/@onmywayhome",
  }
];

let htmlOutput = '';

const output = function (item, index, array) {
  htmlOutput += `<figure class="gallery-element">
  <div class="gallery-img">
    <img title="${images[index].title}" src="${images[index].pathURL}" alt="${images[index].decription}" width="${images[index].width}" height="${images[index].height}">
  </div>
  <div class="description">
    <figcaption>${images[index].decription}</figcaption>
  </div>
</figure>`;
}

images.forEach(output);

const galleryHTTML = document.querySelector(".gallery-container");
galleryHTTML.innerHTML = htmlOutput;