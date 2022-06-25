const fs = require('fs')
const path = require('path')
const { pipeline } = require('stream')
const { stdout, stderr } = process

const stream = new fs.ReadStream(path.join(__dirname, 'text.txt'))

pipeline(
    stream,
    stdout,
    (error) => {
        if (error) stderr.write(error + '\n')
    }
)