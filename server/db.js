module.exports = {
  getFruits,
  getImage
}

let fruits = ['banana', 'apple', 'feijoa']

function getFruits () {
  return Promise.resolve(fruits)
}

let image = '/f92793b692b45c6881ef43caafb1c7c4.jpg '

function getImage(){
  return Promise.resolve(image)
}