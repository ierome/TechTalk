const router = require('express').Router()
const conn = require('../../db/')

router.get('/registerUser', (req, res, next) => {
  conn.query(`SELECT * from users WHERE username = "${req.query.username}"`, (error, results, fields) => {
   if (results.length === 0) {
    conn.query(`INSERT INTO users (username, password) VALUES ("${req.query.username}", "${req.query.password}")`, (error, results, fields) => {
      res.json({message: "You have been successfully registered", registered: true})
    })
   } else {
     res.json({message: "This username has been taken", registered: false})
   }
  })
})
router.get('/login', (req, res, next) => {
  conn.query(`SELECT * from users WHERE username = "${req.query.username}"`, (error, results, fields) => {
    if(results.length > 0 && results[0].password === req.query.password) {
      res.json(results)
    } else {
      res.sendStatus(210)
    }
  })
})
module.exports = router