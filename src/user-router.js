const Router = require('../framework/Router');
const controller = require('./usercontroller')
const router = new Router();

const users = [
    {id:1, name: 'fmwwf'},
    {id:2, name: 'sasha'},

]

router.get('/users', controller.getUsers()

    // // у каждого запроса есть тело попробуем его вывести
    // console.log(req.body)
    // const user = req.body;
    // users.push(user)
    // res.send(users)
    // }
)

router.post('/users', controller.createUser()
    // с помощью этой проверки по id, который мы укажем в пути url последним значением мы можем найти информацию о пользоваетле из масива 
    
)

module.export = router;