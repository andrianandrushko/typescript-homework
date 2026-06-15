let products:{title:string,price: number, image:string} [] =[
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'

    },
    {
        title:  'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.7'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=60'
    },
];

for (const product of products) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title} - ${product.price} грн</h3>
            <img src="${product.image}" alt="" class="product-image">
        </div>
    `);
}