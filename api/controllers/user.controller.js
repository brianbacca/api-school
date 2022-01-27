class UserController {
  constructor(){}
  sayHello(req,res){
    return res.json({msg:"Hello world!"})
  }
}

module.exports = UserController;
