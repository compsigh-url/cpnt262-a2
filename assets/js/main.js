'use strict';

const images = [
  {
    "id": 1,
    "title": "Image1",
    "decription": "A decription of the image",
    "width": 200,
    "height": 200,
    "pathURL": "add path urls lmao",
    "linkURL": "https://picsum.photos/200",
    "credit": "add credit lmao",
    "creditURL": "add credit lmao",
  },
  {
    "id": 2,
    "title": "Image2",
    "decription": "A decription of the image",
    "width": 200,
    "height": 200,
    "pathURL": "add path urls lmao",
    "linkURL": "https://picsum.photos/200",
    "credit": "add credit lmao",
    "creditURL": "add credit lmao",
  },
  {
    "id": 3,
    "title": "Image3",
    "decription": "A decription of the image",
    "width": 200,
    "height": 200,
    "pathURL": "add path urls lmao",
    "linkURL": "https://picsum.photos/200",
    "credit": "add credit lmao",
    "creditURL": "add credit lmao",
  },
  {
    "id": 4,
    "title": "Image4",
    "decription": "A decription of the image",
    "width": 200,
    "height": 200,
    "pathURL": "add path urls lmao",
    "linkURL": "https://picsum.photos/200",
    "credit": "add credit lmao",
    "creditURL": "add credit lmao",
  },
  {
    "id": 5,
    "title": "Image5",
    "decription": "A decription of the image",
    "width": 200,
    "height": 200,
    "pathURL": "add path urls lmao",
    "linkURL": "https://picsum.photos/200",
    "credit": "add credit lmao",
    "creditURL": "add credit lmao",
  },
  {
    "id": 6,
    "title": "Image6",
    "decription": "A decription of the image",
    "width": 200,
    "height": 200,
    "pathURL": "add path urls lmao",
    "linkURL": "https://picsum.photos/200",
    "credit": "add credit lmao",
    "creditURL": "add credit lmao",
  },
  {
    "id": 7,
    "title": "Image7",
    "decription": "A decription of the image",
    "width": 200,
    "height": 200,
    "pathURL": "add path urls lmao",
    "linkURL": "https://picsum.photos/200",
    "credit": "add credit lmao",
    "creditURL": "add credit lmao",
  },
  {
    "id": 8,
    "title": "Image8",
    "decription": "A decription of the image",
    "width": 200,
    "height": 200,
    "pathURL": "add path urls lmao",
    "linkURL": "https://picsum.photos/200",
    "credit": "add credit lmao",
    "creditURL": "add credit lmao",
  },
  {
    "id": 9,
    "title": "Image9",
    "decription": "A decription of the image",
    "width": 200,
    "height": 200,
    "pathURL": "add path urls lmao",
    "linkURL": "https://picsum.photos/200",
    "credit": "add credit lmao",
    "creditURL": "add credit lmao",
  }
];

let imageOutput = '';

images.forEach(() => {
  imageOutput += '<img src="https://picsum.photos/200" alt="picsum"></img>';
  console.log("s");
});

const galleryHTTML = document.querySelector(".gallery");
galleryHTTML.innerHTML = imageOutput;