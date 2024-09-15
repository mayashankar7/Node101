const http = require('http')
const fs = require('fs')
const url = require('url')
const myServer = http.createServer((req, res) => {
    const log=`${req.url} ${req.method} ${new Date()}\n`;
    const myUrl = url.parse(req.url, true)
    fs.appendFile('./Server/log.txt', log, (err, data) => {
        if (err) {
            console.log(err)
        }
        switch(myUrl.pathname) {
            case '/':
                res.end('Home Page')
                break;
            case '/about':
                res.end('About Page')
                break;
            case '/contact':
                res.end('Contact Page')
                break;
            default:
                res.end('404 Page Not Found')
        }

        console.log('log has been written')
    })
})
myServer.listen(8000, () => {console.log('Server Started')})
