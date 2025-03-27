const fs = require('fs')  //ενσωματωμενη και αυτη στο node. μου επιτρεπει να διαβαζω και να γραφω αρχεια
const http = require('http')
const os = require('os')  //και αυτη ενσωματωμενη και μου επιτρεπει να παρω στοιχειαα το λειτουργικο μου συστημα

const osType = os.type()
console.log(osType)

const htmlContent = `
  <!DOCTYPE html>
  <html>
    <h3>Hello World! Your OS type is ${osType}</h3>
  </html>
`

const server = http.createServer((req,res) => {
  console.log('Αρχικά δημιουργούμε αρχείο index.html με περιεχόμενα htmlContent.')
  fs.writeFile('./index.html', htmlContent, err => {
    if (err) {
      console.log('Problem in writing the file', err)
    } else {
      console.log('Διαβάζουμε το αρχείο και το στέλνουμε πίσω.')
      fs.readFile('./index.html', 'utf-8', (err, content) => {
        if (err) {
          console.log('Problem in reading file', err)
        }
        res.setHeader('Content-Type', 'text/html')
        res.end(content)
      })
    }
  })
})

server.listen(3000, () => {
  console.log('Server is listening on port 3000.') //θεωρει ουτως η αλλως για hostname το localhost
})

