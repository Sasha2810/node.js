const Application = requore('./framework/Application')
const PORT = process.env.PORT || 5000; // создаём переменную, если она не задана, она равана 5000
const Router = require('./framework/Router') // импортируем файл с классом Router
const userRouter = require('./src/user-router')
const app = new Application()
const jsonParser = require('./framework/parserjson')
app.listen(PORT, () => console.log(`server tarten on port ${PORT}`))
const parseUrl = require('./framework/parsurl')

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

const router = new Router();
// создаём endpoints для разных url которые мы написали заранее в классе Router
app.use(parseUrl('http://localhost:5000'))
app.use(jsonParser)
app.addRouter(router)