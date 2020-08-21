const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const koaBody = require('koa-body');
// 解决跨域的中间件@koa/cors
const cors = require('@koa/cors');
const router = new Router();
app.use(cors({
  origin: function(ctx) {
  // 如果host不是localhost:3001则不让跨域
    if (ctx.header.host !== 'localhost:3001') {
      return false;
    }
    return '*';
  },
  // exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  // maxAge: 5,
  // credentials: true,
  // allowMethods: ['GET', 'POST', 'DELETE'],
  // allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
// 捕捉错误中间件
const errHandle =async (ctx,next)=>{
  try {
    await next();
  }catch(err){
    ctx.response.status = err.status || err.statusCode||500;
    ctx.response.type = 'html';
    ctx.response.body = '<p> error!! </p>'
    ctx.app.emit('error',err,ctx)
  }
}

const about = (ctx,next)=>{
  // ctx.throw(500)
  // ctx.response.body='about';
}
// 1. koa get 请求传值通过request接收，接收方式有两种： query(返回对象)和 querystring（返回字符串）
router.get("/", async(ctx,next)=>{
  // ctx.response.body='main';
  ctx.response.type='json'
  ctx.response.body={
    message:'hello1'
  }
});
// 2. koa post 请求
router.post("/user/signUp",koaBody(), async(ctx,next)=>{
    console.log(ctx.request.body);
    // => POST body
    ctx.body = JSON.stringify(ctx.request.body);
    // ctx.response.body=ctx.request.body;
});
// router.get("/about", about);
app.use(errHandle)
// 启动路由 和设置响应头
app
  .use(router.routes())
  .use(router.allowedMethods());
// 错误监听
app.on('error',(err)=>{
  console.log(err)
})
app.listen(3001,()=>{
  console.log('启动成功,端口:3001')
});