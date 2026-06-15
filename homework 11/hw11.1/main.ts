interface Recipe {
    id: number;
    name: string;
    ingredients: string;
    instructions: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string;
    userId: number;
    rating: number;
    reviewCount: number;
    mealType: string;
}
fetch('https://dummyjson.com/recipes')
    .then(res =>res.json())
    .then((res) =>{
        console.log(res);
        let { recipes } = res;

        for(const recipe of recipes){
            let recipeInfoDiv = document.createElement('div') as HTMLDivElement;
            let recipeli = document.createElement('li') as HTMLLIElement;
            recipeli.innerText = `
        id: ${recipe.id}
        name: ${recipe.name}
        ingredients: ${recipe.ingredients}
        instructions: ${recipe.instructions}
        prepTimeMinutes: ${recipe.prepTimeMinutes}
        cookTimeMinutes: ${recipe.cookTimeMinutes}
        servings: ${recipe.servings}
        difficulty: ${recipe. difficulty}
        cuisine: ${recipe.cuisine}
        caloriesPerServing: ${recipe.caloriesPerServing}
        tags: ${recipe.tags}
        userId: ${recipe.userId}
        rating: ${recipe. rating}
        reviewCount: ${recipe.reviewCount}
        mealType: ${recipe.mealType}`;

            let ingredientsList = document.createElement('ul') as HTMLUListElement;

            recipe.ingredients.forEach((ingredient: string) => {
                let ingredientLi = document.createElement('li') as HTMLLIElement;
                ingredientLi.innerText = ingredient;
                ingredientsList.appendChild(ingredientLi);
            });

            let img = document.createElement('img') as HTMLImageElement;
            img.src = recipe.image;
            img.style.width = '200px'


            recipeInfoDiv.appendChild(recipeli);
            recipeInfoDiv.appendChild(img);
            recipeInfoDiv.appendChild(ingredientsList);
            document.body.appendChild(recipeInfoDiv);
        }

    });