import pkg from 'bcryptjs';
const { genSalt, hash: _hash, compare } = pkg;
const helpers = {};

helpers.encryptPassword = async (password) => {
  const salt = await pkg.genSalt(10);
  const hash = await pkg.hash(password, salt);
  return hash;
};
helpers.matchPassword = async (pass, savepass) => {
  try {
    const salt = await pkg.compare(pass, savepass);
    return salt;
  } catch (e) {
    console.log(e);
    console.log(e);
  }
};
export default helpers;
