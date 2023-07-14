// взаимодействие с операционной системой

const os = require('os');
const cluster = require('cluster')

// console.log(os.platform()) // выводит операционную систему
// console.log(os.arch()) // архитектура процессора
// console.log(os.cpus().length) // массив, где каждый обьект это описание ядра процессора, мы можем получить количество этих ядер через length

if (cluster.isMaster) { // проверка является ли процесс главным 
    // если он главный запускаем дочерние процессы
    for (let i = 0; i < os.cpus().length - 2; i++) { // проходим по количетсву ядер и оставляем одно ядро свободным для ОС
        // для каждого ядра запускаем процесс
        cluster.fork()
    }
    // проверка, что процесс по какой-то причине умер
    cluster.on('exit', (worker) => {
        console.log(`воркер с pid : ${worker.process.pid} умер`)
        cluster.fork()
    })
} else {
    console.log(`id выполненного элемента ${process.pid} запущен`)

    setInterval(() => {
        console.log(`pid ещё работает ${process.pid}`)
    }, 5000)
}

const cpus = os.cpus()

// цикл для распредеоления количесва ядер

// for (let i = 0; i < cpus.length - 2; i++) { // проходим по количетсву ядер и оставляем одно ядро свободным для ОС
//     const cpucore = cpus[i] // получаем нужное
//     console.log('запуск нового процесса')
// }

// console.log(process.pid)

