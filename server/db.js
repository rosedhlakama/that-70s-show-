module.exports = {
  getFruits,
  getImage
}

let fruits = ['banana', 'apple', 'feijoa']

function getFruits () {
  return Promise.resolve(fruits)
}

let images = [
  '/images/posters/pinkfloyd.jpg', 
  '/images/posters/Maori_Chief.jpg',
  '/images/posters/psychadelic.jpg',
  '/images/posters/ledzeppelin.jpg',
  '/images/posters/superfly.jpg',
  '/images/posters/angela.jpg', 
]

function getImage(){
  return Promise.resolve(images[Math.floor(Math.random() * images.length)]) 
  //
}
