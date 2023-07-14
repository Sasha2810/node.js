const { error } = require('console');
const http = require('http');
const EventEmitter = require('events')
const PORT = process.env.PORT || 5000; // создаём переменную, если она не задана, она равана 5000
const emitter = new EventEmitter()
// создание сервера

const server = http.createServer((req, res) => { // передаём ridable и writable
    // res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'}) // привед в нужную кодировку
    // res.end('сервер работает') // сообщение, что сервер работает
    // выстроим логику для url
    res.writeHead(200, {'Content-Type': 'application/json'}) // пишем, чтобы браузер понимад, что у нас информация типа json
    // if (req.url === '/options') {
    //     return res.end(JSON.stringify([
    //         {id: 1, name: "Ulbix"}
    //     ])) // отправляем строку формата json
    // } if (req.url === '/user') {
    //     return res.end('user sasha')
    // }

    // res.end(req.url) выводим вводимый url
    // req.url // url после localhost

    // это рабочий вариант, но так сервера писать не возможно, надо использовать разные фреимворки по типу Express
}) 



class Router {
    constructor() {
        this.endpoints = { // общая функция стопа, которая содержит путь (адрес endpoint) и она содержит 3 ключа (get, post, delete)

        }
    }

    request(method = "GET", path, handler) { // передайм метод, путь и handler(callback/функция)
        if (!this.endpoints[path]) { // проверка, что такого адреса нет
            this.endpoints[path] = {} // если его нет делаем его пустым
        }
        const endpoint = this.endpoints[path]

        // убедимся, что по такому адресу такого метода нет
        if (endpoint[method]) {
            throw new Error(` метод [${method}] по адресу ${path} есть`) // если он есть выводим ошибку
        }

        endpoint[method] = handler // если ошибки нет по ключу метода выводим handler
        // handler- это (callback/функция)
        // надо создать событие в emitter по типу [path]:[methon] (путь и метод), например [/users]:[get] и указать нужный callback
        emitter.on(`[${path}]:[${method}] `, (req, res) => {
            handler(req, res
                )
        }) 
    }

    // делаем обработку для вызова request в GET передаём (path и handler)
    get(path, handler) {
        this.request('GET', path, handler)
    }
    // тоже самое для POST и других, которые обрабатываюся выше
    post(path, handler) {
        this.request('GET', path, handler)
    }
    put(path, handler) {
        this.request('POST', path, handler)
    }
    delete(path, handler) {
        this.request('DELETE', path, handler)
    }
}

const router =new Router();



server.listen(PORT, () => console.log(`server tarten on port ${PORT}`) )
    