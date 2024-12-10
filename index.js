const jsonServer = require('json-server')
const student = jsonServer.create()
const middleware = jsonServer.defaults()

const router = jsonServer.router('db.json')
student.use(middleware)
student.use(router)

const PORT = 4001 || process.env.PORT


student.listen(PORT,()=>{
    console.log(`server is running sucessfully at port number ${PORT}`);
    
})