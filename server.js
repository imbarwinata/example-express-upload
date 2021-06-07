const express = require('express')
const multer = require('multer')
const upload = multer({dest: __dirname + '/uploads/images'})

const app = express()
const PORT = 3000

app.use(express.static('public'))

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('[RESPONSE]: Ok, request body received', req.body)
  console.log('[RESPONSE]: Ok, request file received', req.file)

  res.status(200).send({
    status: 'OK',
    body: req.body,
  })
})

app.listen(PORT, () => {
  console.log('Listening at ' + PORT )
})