const { User } = require("../user.domain");

module.exports = {
  toDomainEntity(user) {
    const { id, name, lastname } = user;
    return new User({ id, name, lastname });
  },
};
