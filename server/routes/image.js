const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getImage()
    .then(image => {
      res.json({image})
    })
})

module.exports = router