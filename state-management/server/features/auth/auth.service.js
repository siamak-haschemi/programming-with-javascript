const config = require('../../config.json');
const jwt = require('jsonwebtoken');

// users hardcoded for simplicity, store in a db for production applications
const users = [{
  id: 1,
  username: 'test',
  password: 'test',
  firstName: 'Test',
  lastName: 'User'
},
  {
    id: 2,
    username: 'test2',
    password: 'test2',
    firstName: 'Test2',
    lastName: 'User2'
  }];

module.exports = {
  authenticate,
  logout
};

async function authenticate(req) {
  await sleep(2000);

  const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
  const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':')

  const user = users.find(
      u => u.username === username && u.password === password);

  if (!user) {
    throw 'Username or password is incorrect';
  }

  // create a jwt token that is valid for 1 day
  const token = jwt.sign({sub: user.id}, config.secret, {expiresIn: '1d'});

  return {
    ...omitPassword(user),
    token
  };
}

async function logout(user) {
  console.log("logout: {}", user);

  await sleep(2000);

  return {};
}

// helper functions

function omitPassword(user) {
  const {password, ...userWithoutPassword} = user;
  return userWithoutPassword;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}