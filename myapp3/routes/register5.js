const router = require('express').Router();
const user = require('../sql/user')

router.get('/',(req,res,next)=>{
  console.log('.....zhuce');
  res.render('register')
})
router.post('/in',(req,res,next)=>{
  let obj = req.body;

  console.log(obj);
  console.log(obj.username);
  console.log(obj.password);

  // user.insertMany(obj,(err,data)=>{
  //   if(err){
  //     console.log(err);
  //   }
  //   if(data){
  //     res.redirect('/login5')
  //   }else{
  //     res.redirect('/register5')
  //   }
  // })



  user.findOne({username:obj.username},(err,data)=>{
    console.log(1111);
    if(err){
      console.log(err);
    }
    if(data){
      console.log('已有帐号哦');
      res.redirect('/register5')
    }else{
      user.insertMany(obj,(err,dat)=>{
        if(err){
          console.log(err);
        }
        if(dat){
          console.log('已成功注册');
          res.redirect('/login5')
        }
          
        
      })
    }
  })
})


module.exports = router;