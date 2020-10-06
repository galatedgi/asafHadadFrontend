const express =  require('express')
const servrStatic = require('serve-static')
const path= require('path')

const app= express();

app.use('/',servrStatic(path.join(__dirname,'/dist')))

const port= process.env.PORT || 8080

app.listen(port)