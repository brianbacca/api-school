const { toDomainEntity } = require("../domain/mappers");
const { toDbEntity } = require("../dal/mappers");
class UserService {
  constructor({ UserRepository }) {
    this._userRepository = UserRepository;
  }
  async getUser() {
    const users = await this._userRepository.getUser();

    return users.map(toDomainEntity);
  }

  async createUser(user) {
    user = toDbEntity(user);
    const createdUser = await this._userRepository.createUser(user);
    return createdUser;
  }
}

module.exports = UserService;
