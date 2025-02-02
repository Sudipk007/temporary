const {readFileSync,writeFileSync}= require('fs');

const first = readFileSync('./content/first.txt','utf-8')
const res = readFileSync('./content/result.txt','utf-8')

const wrrite = writeFileSync('./content/first.txt',`here is the result ${first}${res}`)