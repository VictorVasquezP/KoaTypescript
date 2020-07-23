const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const serve = require("koa-static");
const mount = require("koa-mount");
const cors = require('koa-cors');
const HttpStatus = require("http-status");
const http = require("http");
const app = new Koa();

const PORT = process.env.PORT || 3001;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

const router = new Router();
var pg = require("pg");

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

var client = new pg.Client({
  /*
  user:'postgres',
  host:'localhost',
  database:'estudiantes',
  password:'123',
  port: 5432,
  ssl: process.env.DATABASE_SSL === `true`
  */
  
  user:'sgfpzpwwqjzvka',
  host:'ec2-50-19-26-235.compute-1.amazonaws.com',
  database:'df229g7l8kojt2',
  password:'5784cad4ea03da6fa88d0cf3e7531ce018f6a80d385236e18c81184ba6736d94',
  port: 5432,
  ssl:true
});
client.connect();
router.get("/por_get/:id",async (ctx,next)=>{
  //const books = ["Speaking javascript", "Fluent Python", "Pro Python", "The Go programming language"];
  var aux = ctx.params.id;
  ctx.status = HttpStatus.OK;
  ctx.body = aux;
  //await next();
});
router.post("/por_post",async (ctx,next)=>{
  //const books = ["Speaking javascript", "Fluent Python", "Pro Python", "The Go programming language"];
  var aux2 = ctx.request.body.id;
  console.log("resp ",ctx.request.body.id);
  ctx.status = HttpStatus.OK;
  ctx.body = aux2;
  //await next();
});
router.post("/prueba",async (ctx,next)=>{
  //const books = ["Speaking javascript", "Fluent Python", "Pro Python", "The Go programming language"];
  console.log("respuesta a form ");
  ctx.status = HttpStatus.OK;
  ctx.body =ctx.request.body.nombre;
  client.query("INSERT INTO COMENTARIOS(nombre,hotel,comentario,correo)values('"+ctx.request.body.nombre+"','"+ctx.request.body.hotel+"','"+ctx.request.body.comentarios+"','"+ctx.request.body.correo+"')");
  //await next();
});

router.post("/insertar",async (ctx,next)=>{
  ctx.status = HttpStatus.OK;
  ctx.body = client.query("INSERT INTO COMENTARIOS(nombre,hotel,comentario,correo)values('Erick','Integra','Suave','victoe680@gmail.com')");
    //await next();
});

app.use(router.routes()).use(router.allowedMethods());
http.createServer(app.callback()).listen(PORT,function(){
  console.log("==> Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});
/*
app.listen(PORT, function () {
    console.log("==> Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});
*/