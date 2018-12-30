const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signup(parent, args, context, info) {

  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({...args, password})
  const token = jwt.sign({ userID: user.id }, APP_SECRET)

  return {
    token,
    user
  }
}

async function login(parent, args, context, info) {

}

module.exports = {
  signup,
  login
}