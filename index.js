const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 3000

const app = express()

async function start() {
    try {
        await mongoose.connect('', { //подключение базы
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



