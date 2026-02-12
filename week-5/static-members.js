class User {
  static count = 0; // shared across all instacnes

  constructor(name) {
    this.name = name;
    User.count++;
  }
  static displayCount() {
    console.log(`total users created: ${User.count} `);
  }
}

const user1 = new User("davit");
const user2 = new User("tamar");

User.displayCount();
