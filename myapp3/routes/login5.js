const router = require('express').Router();
const user = require('../sql/user')

router.get('/',(req,res,next)=>{
  res.render('login')
})

router.post('/in',(req,res,next)=>{
  let obj = req.body;
  user.findOne({username:obj.username,password:obj.password},(err,data)=>{
    if(err){
      console.log(err);
    }
    if(data){
      //response  服务器和你说 你的肚子里面 cookie那个位置 给我村上islogin = 0k
      //注意 这里是req 设置的 实在服务器端设置的 因为要先分裂成一个对象 给前端一个 后端藏一个  前端通过给的那一个加密的来找信息
      req.session.islogin = 'ok'
      res.redirect('/pro')
    }else{
      res.redirect('/register5')
    }

  })
})

module.exports = router;