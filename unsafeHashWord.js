/* global BigInt */

const crypto = require('crypto');

module.exports = function (dict) {
  return function unsafeHashWord(stringData) {
    const md5 = crypto.createHash('MD5'); // intentionally not-cryptographically-secure

    md5.update(stringData, 'utf8');
    
    return dict[BigInt('0x' + md5.digest('hex')) % BigInt(dict.length)];
  };
}
