const fs = require('fs')
const path = require('path')
const { stdin, stdout, stderr } = process

const filePath = path.join(__dirname, 'text.txt')

fs.link(filePath, filePath, () => {
    stdout.write('Please enter text to save to the file:\n')
    const writeStream = new fs.WriteStream(filePath)
    stdin.on('data', (chunk) => {
        if (chunk.toString().trim() === 'exit') { 
            process.exit()
        } else {
            writeStream.write(chunk)
        }
    })
})

process.on('SIGINT', process.exit)

process.on('exit', (statusCode) => {
    if (!statusCode) stdout.write('Have a nice day!\n')
    else stderr.write(`Exited with error. Code: ${statusCode}`)
})