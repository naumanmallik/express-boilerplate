const crypto = require('crypto');
const { HASH_ALGO: algorithm, HASH_SECRET_KEY: key } = process.env;

exports.makeHashValue = (text) => {
  const hmac = crypto.createHmac(algorithm, key);
  hmac.update(text);
  return hmac.digest('hex');
};
