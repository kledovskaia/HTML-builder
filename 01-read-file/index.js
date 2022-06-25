const fs = require('fs')
const path = require('path')
const { stdout, stderr } = process

const stream = new fs.ReadStream(path.join(__dirname, 'text.txt'))

stream.on('data', (chunk) => stdout.write(chunk))
stream.on('end', () => stdout.write('\n'))
stream.on('error', (error) => stderr.write(error + '\n'))