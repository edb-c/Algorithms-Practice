console.log('HashTable_JS');

class HashTable {
  constructor(size = 42) {
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  set(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([key, value]);

    return index;
  }

  get(key) {
    let index = this.hash(key);

    if (!this.buckets[index]) return null;

    for (let bucket of this.buckets[index]) {
      // key
      if (bucket[0] === key) {
        //value
        return bucket[1];
      }
    }
  }
}
const hasht = new HashTable(10);
hasht.set('userId3', 'pop');
hasht.set('userId3', 'pop');
hasht.set('userId4', 'king');
hasht.set('userId9', 'april');
hasht.set('userId50', 'gowtham');
hasht.set('userId100', 'olo');
console.log(hasht);

console.log(hasht.get('userId50'));
