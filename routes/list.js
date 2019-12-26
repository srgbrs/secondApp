const{Router} = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Список студентов',
        isIndex: true

    })
})

router.get('/create', (req,res)=>{
    res.render('create', {
        title: 'Добавить студента',
        isCreate: true
    })

})

module.exports = router // экспорт команды