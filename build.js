const fs = require('fs');

const wordList = fs.readFileSync('./src/eff_short_wordlist_1.txt', 'utf8');
const adjList = fs.readFileSync('./src/adj.txt', 'utf8').split('\n');
const nounList = fs.readFileSync('./src/noun.txt', 'utf8').split('\n');

const dict = wordList.split('\n').map(e => {
  return e.split('\t')[1];
});

const adjDict = dict.filter(e => { return adjList.includes(e); });
const nounDict = dict.filter(e => { return nounList.includes(e); });

function storeData(data, path) {
  try {
    fs.writeFileSync(path, data);
  } catch (err) {
    console.error(err);
  }
};

storeData(JSON.stringify(adjDict), './assets/adjDict.json');
storeData(JSON.stringify(nounDict), './assets/nounDict.json');
