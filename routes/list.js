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

router.post('/', (req,res) => { // удаление базы

    List.deleteMany({}, function(err) { 
        console.log('collection removed') 
     });

    // const list = new List({
    //     title: req.body.title,
    //     mark: req.body.mark,
    // })
    // await list.save();
    res.redirect('/')
})

router.get('/create', (req,res)=>{
    res.render('create', {
        title: 'Добавить студента',
        isCreate: true
    })

})

router.post('/create', async (req,res) => {
    const list = new List({
        title: req.body.title,
        mark: req.body.mark,
    })
    await list.save();
    res.redirect('/')
})



module.exports = router // экспорт команды