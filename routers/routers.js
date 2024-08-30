const userRouter = require('./userRouters')
const categoryRouter = require('./categoryRouters')
const courseRouter = require('./courseRouters')
const videoRouter = require('./videoRouters'); 
const divisionRouter = require('./divisionRouters'); 

const routers = [
    {
        path : '/api/user',
        handler : userRouter
    },
    {
        path : '/api/division',
        handler : divisionRouter
    },
    {
        path : '/api/category',
        handler : categoryRouter
    },
    {
        path : '/api/course',
        handler : courseRouter
    },
    {
        path : '/api/video',
        handler : videoRouter
    },
    {
        path : '/',
        handler : (req,res) =>{
            res.json({
                status : 200,
                success : true,
                message : 'Server successfully running...'
            })
        }
    }
]

const applyRouter = (app) =>{
    routers.map(r=>{
        if(r.path === '/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}

module.exports = applyRouter