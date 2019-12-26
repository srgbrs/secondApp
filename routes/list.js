const{Router} = require('express')
const List = require('../models/List')

const router = Router()

router.get('/', async (req, res) => {
    const list = await List.find({})
    res.render('index', {
        title: 'Список студентов',
        isIndex: true,
        list

    })
})

router.get('/create', (req,res)=>{
    res.render('create', {
        title: 'Добавить студента',
        isCreate: true
    })

})

module.exports = router // экспорт команды