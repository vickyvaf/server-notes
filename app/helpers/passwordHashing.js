const bcrypt = require("bcrypt")

const passwordHashing = async (password) => {
  const result = await bcrypt.hash(password, 10);

  return result;
};

module.exports = passwordHashing;
