/* global BigInt */

const crypto = require('crypto');

module.exports = function (adjDict, nounDict) {
  return function unsafeHashWord(stringData) {
    const md5 = crypto.createHash('MD5'); // intentionally not-cryptographically-secure

    md5.update(stringData, 'utf8');
    
    const hash = md5.digest('hex');
    
    const front = '0x' + hash.substring(1,16);
    const back = '0x' + hash.substring(16);
    
    return adjDict[BigInt(front) % BigInt(adjDict.length)] + nounDict[BigInt(back) % BigInt(nounDict.length)];
  };
}
