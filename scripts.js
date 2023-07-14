// НАЧАЛО

// const dotenv = require('dotenv') // импорт пакета dotenv
// dotenv.config() // выхываем функцию конфиг


// console.log(process.pid) // id выполняемого элемента в диспетчере задач

// console.log(process.env.PORT) // создание своих переменных env
// console.log(process.env.NODE_ENV)

// console.log(process.argv)


// if (Math.random() > 0.5) {
//     while (true) {

//     }
// } else {
//     console.log("end")
//     process.exit() // выход из программы
// }

// Пути и URL

// const path = require('path');
// console.log(path.join('first', 'second', 'third')) // склейка пути до файла и тд
// console.log('склейка пути', path.join(__dirname, 'first', 'second', 'third')) // dirname путь от корня(диска) до проекта
// console.log('склейка пути', path.join(__dirname, '..')) // возращение на однк папку назад
// console.log('склейка пути', path.resolve( 'first', 'second', 'third')) // тоже саиое только всегда абсолютный 

// const pars =  path.resolve( 'first', 'second', 'third');
// console.log('парсинг', path.parse(pars))


// const siteurl = 'http://localhost:8080/users?id=5123' // сам url

// const url = new URL(siteurl) // информация о url
// console.log(url)

// фАЙЛОВАЯ СИСТЕМА 

// const { error } = require('console');
const fs = require('fs');
const path = require('path');

// fs.mkdirSync(path.resolve(__dirname, 'dir')) // функция создания папки и путь, где она создастся
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'div2', 'div3'), {recursive:true}) // создвние нескольких папок 

// асинхроная функцию (выполняется не поочереди)

// console.log('start') // выполняется 1

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => { //3
//         if (err) {
//             console.log(err)
//             return;
//         }
//         console.log('папка создана')
//     }
// )
// console.log('end') // 2

//удаление папки
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => { //3
//     if (err) {
//         throw err   
//     }}
// )

//запись в папку
// если в папке уже есть текст, то он перезапишется в новый
// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'dsdsdsdsdd', (err) => { 
//     if (err) {
//         throw err;
//     }
//     console.log('файл записан')

//     // добавляет информацию в файл
//     // вставляем одну функцию в другую для того, чтобы сначала файл создался, а потом в него записалась информация
//     fs.appendFile(path.resolve(__dirname, 'text.txt'), ' добавил в конец', (err) => { 
//         if (err) {
//             throw err;
//         }
//         console.log('файл записан')
//     })
// })


// пробуем сделать тоже саиое читаемым

//Promise (обычно их так и называют «промисы») – предоставляют удобный способ организации асинхронного кода.
// Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).

// создание функции с переменной promise
// запись информации в файл через promice
// const writeFileAsync = async (path, data) => {  // передайм путь через path и текст через data
//     return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     })) 
// }
// добавление информации в файл через promice
// const appendFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     })) 
// }

// чтение файла
// const readFileAsync = async(path) => {
//     return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => { // указываем кодировку и в callback передаём то, что мы читаем
//         if (err) {
//             return reject(err.message)
//         }
//         resolve(data) // выбираем данные записанные в data

//     }))
// }

// удаление файла
// const removeFileAsync = async(path) => {
//     return new Promise((resolve, reject) => fs.rm(path, {encoding: 'utf-8'}, (err, data) => { // rm удаляет файл
//         if (err) {
//             return reject(err.message)
//         }
//         resolve(data) // выбираем данные записанные в data

//     }))
// }

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data') // создаём и допичываем data в файл
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123')) // then - затем, выполнение функции после создание файла, а потом записывание через appendFileAsync
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456')) 
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '789'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt'))) // чтение файла
//     .then(data => console.log(data)) // выводим содержание файла в консоль
//     .catch(err => console.log('err')) // заканчивает выполнение чаще всего работатет для ловли ошибок


// removeFileAsync(path.resolve(__dirname, 'test.txt')) // вызываем функцию и удаляем файл
//     .then(() => console.log('файл удалён'))

const text = process.env.TEXT || '';

// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => data.split(' ').length)
//     .then(col = writeFileAsync(path.resolve(__dirname, 'col.txt')), `количество слов: ${col}`)



