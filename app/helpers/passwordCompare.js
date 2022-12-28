const bcrypt = require("bcrypt")

const passwordCompare = async (password, passwordHash) => {
  const matched = await bcrypt.compare(password, passwordHash);

  return matched;
};

module.exports = passwordCompare
