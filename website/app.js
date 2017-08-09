const http = require('http')

const homePage = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>nodeJS</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>徐劭伟学node</h1>
  </body>
</html>
`



http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type','text/html')
  res.end(homePage)
}).listen(3000)