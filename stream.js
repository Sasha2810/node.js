// readabl - чтение
// writable - запись
// duplex - для чтение и записи
// transform - тоже самое, что duplex только можно изменять информацию по мере чтнения

const fs = require('fs')
const path = require('path')

// fs.readFile(__dirname, 'text.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// })

const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt')) // создания stream для чтения

// chuunk - это обрабатываемый кусок файла по стандарту он 64кб
stream.on('data', (chunk) => { 
    console.log(chunk)
})
// первым значеним передаётся событие, которое будет считыватся
stream.on('end', () => {console.log('закончили читать')}) // закрытия стрима
stream.on('open', () => {console.log('начали')}) // открытия стрима
stream.on('error', (err) => {console.log(err)}) // обработка ошибки 

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'text.txt')) 
for (let i = 0; i < 20; i++) {
    writableStream.write(i + ' ') // запись чисел в файл
}
writableStream.end() // конец чтения

// подобный http 

const http = require('http');

// в http используются стримы
// в http передаются request и response, где первый readale, а второй writable
http.createServer((req, res) => {
    // res.on('error') у них такие же события 
    const stream1 = fs.createReadStream(path.resolve(__dirname, 'text.txt'))
    // отправление файла пользователю
    stream.on('data', chunk => res.write(chunk))
    stream.on('end', chunk => res.end())

    stream.pipe() // стабилизируем ridable и writable
})