const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const listRoutes = require('./routes/list')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')

app.use(express.urlencoded({ extended: true}))
// app.use(express.static())

app.use(listRoutes)


async function start() {
    try {
        await mongoose.connect('mongodb+srv://sergey:12345@cluster0-6l2ws.mongodb.net/list', { //подключение базы
            useUnifiedTopology: false, //fix
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => { //запуск сервера
            console.log('server has been started')
        })  

    } catch(e) {
        console.log(e)
    }

}

start()



