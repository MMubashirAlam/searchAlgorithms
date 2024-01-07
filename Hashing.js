class HashTable {
    constructor() {
        this.table = {};
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % 101; 
    }

    insert(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    search(key) {
        const index = this.hash(key);
        return this.table[index];
    }
}

const hashTable = new HashTable();

hashTable.insert('Ifham', 25);
hashTable.insert('Eiquan', 30);
hashTable.insert('Saif', 35);

const ageOfEiquan = hashTable.search('Eiquan');
if (ageOfEiquan !== undefined) {
    console.log(`Age of Eiquan: ${ageOfEiquan}`);
} else {
    console.log('Eiquan not found in the hash table');
}
