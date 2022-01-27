class UserController {
  constructor({ UserService }) {
    this._userServices = UserService;
  }
  sayHello(req, res) {
    return res.json({ msg: "Hello world!" });
  }
}

module.exports = UserController;
