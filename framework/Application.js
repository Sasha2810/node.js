const http = require('http');
const EventEmitter = require('eventsthid')

module.exports = class Application {
    constructor() {
         this.emitter = new EventEmitter()
         this.server = this._createServer()
         this.middlewares = []
    }

    use(middleware) {
        this.middlewares.push(middleware)
    }

    listen(port, callback) {
        this.server.listen(port, callback)
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoint[path];
            Object.keys(endpoint).forEach((method) => {
                const handler = endpoint[method];
                // подписываеммя на событие  endpoint
                emitter.on(this._getRouteMask(path, method1), (req, res) => {
                    const handler = endpoint[method];                    
                    handler(req, res)
                 }) 
            })
        })
    }

    _createServer() {
        return http._createServer((req,res) => { 
            let body = "";
            req.on('data', (chunk) => {
                console.log(chunk)
                body += chunk
            })
            req.on('end', () => {
                if (body) {
                    req.body = JSON.parse(body)
                }
                this.middlewares.forEach(middleware => middleware(req, res))
                const emitted = this.emitter.emit(this._getRouteMask(req.pathname, req.method), req, res) // передаём созданную функцию и указываем в ней пути и метод через req
                if(!emitted) { // если такого url нет выводим путь
                res.end(req.url)
            }
 1           })
    })
    }

    _getRouteMask(path, method) {
        return `[${url}]:[${method}] ` // делаем строку с путём и методом
    }
}