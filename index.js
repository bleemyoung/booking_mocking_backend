const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())
const port = 3000


app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Hello POST')
})

app.post('/onLogin', (req, res) => {
  // console.log(req.body);
  const wx_code = req.body.code
  const appid = "wx4e33219b20418e18"
  const secret = "62496a22e51833de6e91b0da34cd1535"
  const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${wx_code}&grant_type=authorization_code`
  const resObj = {
    openid: "",
    isLogged: false
  }
  axios.get(url)
    .then(function (response) {
      // 处理成功情况
      console.log(response.data);
      resObj.openid = response.data.openid
      resObj.isLogged = true
      res.send(resObj)
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error);
      res.send(resObj)
    })
 
  // res.send('POST,login')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// http://localhost:3000/
// http://localhost:3000/onLogin
