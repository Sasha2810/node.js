// экспорт класса Router в класс http.js
module.exports = class Router {
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
        
    }

    // делаем обработку для вызова request в GET передаём (path и handler)
    get(path, handler) {
        this.request('GET', path, handler)
    }
    // тоже самое для POST и других, которые обрабатываюся выше
    post(path, handler) {
        this.request('POST', path, handler)
    }
    put(path, handler) {
        this.request('PUT', path, handler)
    }
    delete(path, handler) {
        this.request('DELETE', path, handler)
    }
}