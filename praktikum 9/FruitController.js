const fruits = require('./fruits');

// Method untuk mengelola data buah
function index() {
    console.log(fruits);
}

function store(fruit) {
    fruits.push(fruit);
    console.log(`${fruit} telah ditambahkan.`);
}

function update(index, newFruit) {
    if (index >= 0 && index < fruits.length) {
        console.log(`${fruits[index]} telah diubah menjadi ${newFruit}.`);
        fruits[index] = newFruit;
    } else {
        console.log(`Index ${index} tidak valid.`);
    }
}

function destroy(index) {
    if (index >= 0 && index < fruits.length) {
        console.log(`${fruits[index]} telah dihapus.`);
        fruits.splice(index, 1);
    } else {
        console.log(`Index ${index} tidak valid.`);
    }
}

// Ekspor semua metode
module.exports = {
    index,
    store,
    update,
    destroy
};
