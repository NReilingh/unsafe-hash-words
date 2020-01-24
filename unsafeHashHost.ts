import * as crypto from 'crypto';

import * as adjDict from './assets/adjDict.json';
import * as nounDict from './assets/nounDict.json';

export function unsafeHashHost(stringData: string, length: number | undefined) {
  const md5 = crypto.createHash('MD5'); // intentionally not-cryptographically-secure

  md5.update(stringData, 'utf8');

  const hash = md5.digest('hex');

  const front = '0x' + hash.substring(1,16);
  const back = '0x' + hash.substring(16);

  function dictModulo(dict: string[], hexValue: string) {
    return dict[Number(BigInt(hexValue) % BigInt(dict.length))];
  }

  if (length !== undefined) {
    const adjlen = Math.ceil(length / 2);
    const nounlen = Math.floor(length / 2);

    const iAdjDict = adjDict.filter(e => { return e.length <= adjlen; });
    const iNounDict = nounDict.filter(e => { return e.length <= nounlen; });
    return dictModulo(iAdjDict, front) + dictModulo(iNounDict, back);
  } else {
    return dictModulo(adjDict, front) + dictModulo(nounDict, back);
  }
};
