interface Cart {
    id: number;
    total: number;
    discountedTotal: number;
    userId: number;
}

interface Product {
    id: number;
    title: number;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
    thumbnail: string;
}

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((res) => {
        console.log(res);
        let { carts } = res;

        for (const cart of carts) {
            let cartInfoDiv = document.createElement('div') as HTMLDivElement;
            let cartLi = document.createElement('li') as HTMLLIElement;
            cartLi.innerText = `
            id: ${cart.id}
            total: ${cart.total}
            discountedTotal: ${cart.discountedTotal}
            userId: ${cart.userId}`;

            cartInfoDiv.appendChild(cartLi);


            for (const product of cart.products) {
                let productInfoDiv = document.createElement('div') as HTMLDivElement;

                let productLi = document.createElement('li') as HTMLLIElement;
                productLi.innerText = `
                id: ${product.id}
                title: ${product.title}
                price: ${product.price}
                quantity: ${product.quantity}
                total: ${product.total}
                discountPercentage: ${product.discountPercentage}
                discountedTotal: ${product.discountedTotal} `;

                let img = document.createElement('img') as HTMLImageElement;
                img.src = product.thumbnail;
                img.style.width = '200px';

                productInfoDiv.append(productLi);
                productInfoDiv.append(img);
                cartInfoDiv.appendChild(productInfoDiv);
            }
            document.body.appendChild(cartInfoDiv);

        }
    });