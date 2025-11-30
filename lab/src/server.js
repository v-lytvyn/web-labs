const express = require('express');
const cors = require('cors');

const app = express();

const products = [
    { id: 1, title: 'Annabelle', description: 'A seemingly innocent vintage doll becomes a conduit for malevolent forces, unleashing terror upon a young couple.', price: 12.99, director: 'John R. Leonetti', rating: 5.4, image: '/img/annabelle.jpg' },
    { id: 2, title: 'Terrifier', description: 'A sadistic mime-like killer, Art the Clown, terrorizes a group of unsuspecting victims on Halloween night.', price: 8.99, director: 'Damien Leone', rating: 5.7, image: '/img/terrifier.jpg' },
    { id: 3, title: 'Sinister', description: 'A true-crime writer discovers a box of home movies revealing a series of horrifying murders, linking them to a sinister supernatural entity.', price: 12.99, director: 'Scott Derrickson', rating: 6.8, image: '/img/sinister.jpg' },
    { id: 4, title: 'Grave Encounters', description: 'A crew of paranormal investigators locks themselves inside an abandoned psychiatric hospital.', price: 9.99, director: 'The Vicious Brothers', rating: 6.1, image: '/img/grave_encounters.jpg' },
    { id: 5, title: 'Black Phone', description: 'A kidnapped boy finds himself trapped in a soundproof basement, where he discovers a disconnected phone that transmits the voices of his kidnapper\'s previous victims.', price: 14.99, director: 'Scott Derrickson', rating: 7.0, image: '/img/black_phone.jpg' },
    { id: 6, title: 'Jester', description: 'A malevolent being known as "The Jester" terrorizes the inhabitants of a small town on Halloween night after the death of his estranged father.', price: 9.99, director: 'Colin Krawchuk', rating: 4.6, image: '/img/jester.jpg' },
    { id: 7, title: 'Conjuring', description: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.', price: 14.99, director: 'James Wan', rating: 7.5, image: '/img/conjuring.jpg' },
    { id: 8, title: 'The Nun', description: 'A priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate a demonic nun in Romania.', price: 13.99, director: 'Corin Hardy', rating: 5.3, image: '/img/nun.jpg' },
    { id: 9, title: 'Babadook', description: 'A widowed mother, haunted by her husband\'s death, discovers a disturbing children\'s book about a monster called "The Babadook."', price: 9.99, director: 'Jennifer Kent', rating: 6.8, image: '/img/babadook.jpg' },
    { id: 10, title: 'Shining', description: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence.', price: 14.99, director: 'Stanley Kubrick', rating: 8.4, image: '/img/shining.jpg' },
];

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.get('/api/products', (req, res) => {
    const { search, price, rating } = req.query;

    let filteredProducts = products;

    if (search) {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (price) {
        if (price === '10') {
            filteredProducts = filteredProducts.filter(product => product.price <= 10);
        } else if (price === '14') {
            filteredProducts = filteredProducts.filter(product => product.price > 10 && product.price <= 14);
        } else if (price === '14+') {
            filteredProducts = filteredProducts.filter(product => product.price > 14);
        }
    }

    if (rating) {
        if (rating === '5') {
            filteredProducts = filteredProducts.filter(product => product.rating <= 5.5);
        } else if (rating === '7') {
            filteredProducts = filteredProducts.filter(product => product.rating > 5.5 && product.rating <= 7.0);
        } else if (rating === '7+') {
            filteredProducts = filteredProducts.filter(product => product.rating > 7.0);
        }
    }

    res.json(filteredProducts);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
