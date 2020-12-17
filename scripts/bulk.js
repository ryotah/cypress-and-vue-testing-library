/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')

const dist = '__dummy__'
const num = 50

const targetDirctory = process.argv[2]
const targetFile = process.argv[3]

if (!targetDirctory || !targetFile) {
  console.error('You need to set arguments')
  return
}

// Create the dist dirctory
fs.existsSync(path.resolve(targetDirctory, dist)) ||
  fs.mkdirSync(path.resolve(targetDirctory, dist))

// Create files
for (let i = 0; i < num; i++) {
  try {
    fs.copyFileSync(
      path.resolve(targetDirctory, targetFile),
      path.resolve(targetDirctory, dist, `${i}-${targetFile}`)
    )
  } catch (error) {
    console.error(error)
    break
  }
}
