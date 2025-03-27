

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
  fs.writeFileSync('./index2.html', htmlContent)
  let readFile = fs.readFileSync('./index2.html', 'utf-8')
  if (readFile) {
    res.setHeader('Content-Type', 'text/html')
    res.end(readFile)
  }
})

server.listen(3000, () => {
  console.log('Listening on port 3000')
})