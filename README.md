# 使用node+express模拟后端
这个项目是微信小程序前端开发过程中简易模拟的后端服务器，处理前端请求，接收key，并且将appid和secret等发送微信平台，得到session和openid，并返回openid（即用户唯一标识）给微信前端。
## 步骤
### 开发过程
* npm init
* npm i express（核心的依赖库）
* 在index.js中写代码逻辑
* node index.js运行代码
### clone到这个项目
  ```
  npm i
  npm run dev
  ```

## 如何处理post请求
app.use(express.json())
# 附录
## 核心代码
```
const express = require('express')
// const bodyParser = require('body-parser');
const app = express()
// app.use(bodyParser());
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  console.log(req.query);
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Hello POST')
})
// app.get('/onLogin', (req, res) => {
//   console.log("get");
//   console.log(req.query);
//   res.send('Hello World!')
// })
app.post('/onLogin', (req, res) => {
  console.log("post");
  console.log(req.body);
  const wx_code=req.body.code
  
  res.send('POST,login')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// http://localhost:3000/
// http://localhost:3000/onLogin

```
