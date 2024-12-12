const FruitController = require('/FruitController');
const fruits = require('./fruits');

const { index, store, update, destroy } = FruitController;

function main() {
    store("Jambu");
    store("Leci");
    store("Semangka");

    update(0, "Lemon");

    destroy(0);

    index(); // Untuk menampilkan semua buah
}

main();
