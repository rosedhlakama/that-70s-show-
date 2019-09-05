module.exports = {
  getFruits,
  getImage
}

let fruits = ['banana', 'apple', 'feijoa']

function getFruits () {
  return Promise.resolve(fruits)
}

let images = [
  '/images/posters/angela.jpg', 
  '/images/posters/pinkfloyd.jpg', 
  '/images/posters/Maori_Chief.jpg',
  '/images/posters/psychadelic.jpg',
  '/images/posters/ledzeppelin.jpg'
]

function getImage(){
  return Promise.resolve(images[Math.floor(Math.random() * images.length)]) 
  //
}
