// модуль events для создания, подписываться и генерировать их
const Emitter = require('events');

const emitter = new Emitter();
const callback = (data, second, third) => {
    console.log('вы прислали сообщение ' + data);
    console.log('второй аргумент' + second);
}
// через emit мф можем генерировать событие огромное бесконечное кол раз, а через once один раз
// emitter.once
emitter.on('message', callback) // передаём название, а потом то, что хотим передать (callback)

const MESSAGE = process.env.message || "";

if (MESSAGE != '') {
    emitter.emit('message', MESSAGE, 123) // генерация события передаёт название, data = MESSAGE и second = 123
} else {
    emitter.emit('message', 'вы не указали сообщение')
}

// удаление 
emitter.removeListener('message', 'callback'); // записываем data и нужный нам callback для этого занесём его в переменную


