import path from 'path'
import os from 'os'
import express from 'express'
import expressStaticGzip from 'express-static-gzip'
import history from 'connect-history-api-fallback'
const app = express()
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH')

  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

app.use('/', expressStaticGzip('dist'))

app.use(
  history({
    verbose: true,
    index: '/'
  })
)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const getIpAddress = () => {
  const interfaces = os.networkInterfaces()
  for (const dev in interfaces) {
    const iface = interfaces[dev]
    for (let i = 0; i < iface.length; i++) {
      const { family, address, internal } = iface[i]
      if (family === 'IPv4' && address !== '127.0.0.1' && !internal) {
        return address
      }
    }
  }
}

const port = 8026

app.listen(port, () => {
  console.log('服务启动' + port)
  console.log('http://' + getIpAddress() + ':' + port)
})
