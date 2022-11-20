const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (name, score) values (?, ?)`,
      [user.name, user.score]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set score = ? where id = ?`,
      [user.score, user.id]
    );
  }
}

module.exports = UserManager;
