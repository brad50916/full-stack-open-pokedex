const express = require('express')
const app = express()

// get the port from env variable
// test comment1234
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

// app.get('/version', (req, res) => {
//   res.send('1') // change this string to ensure a new version deployed
// })
