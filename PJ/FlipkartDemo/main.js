const sectchbtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailscontent = document.querySelector('.meal-details-content');
const recipeClosebtn = document.getElementById('recipe-close-btn');

sectchbtn.addEventListener('click', getMealList);
mealList.addEventListener('click',getMealRecipe);
document.getElementById('recipe-close-btn').addEventListener('click' , e => {
    mealDetailscontent.parentElement.classList.remove('showRecipe');
})


function getMealList(){
    let searchInput = document.getElementById('search-input').value.trim();
    console.log(searchInput);

    fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        let html = "";

        if(data.meals){

            data.meals.forEach(meal => {
                html +=  `
            <div class="meal-item" data-id="${meal.idMeal}">
                        <div class="meal-img" ">
                            <img src="${meal.strMealThumb}" alt="food">
                        </div>
                        <div class="meal-name">
                            <h3>Recips</h3>
                            <a href="#" class="recipe-btn">Get Recipes</a>
                        </div>
            </div>
            `;
            });
            mealList.classList.remove('notFound');
        }else{
            html= "Sorry , we didn't find any meal!";
            mealList.classList.add('notFound') 
        }


        mealList.innerHTML = html;
    })

}

function getMealRecipe(e){ 

    e.preventDefault();
    //console.log(e.target)
    if(e.target.classList.contains('recipe-btn')){
        let mealItem =e.target.parentElement.parentElement;
        console.log(mealItem)
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.meals[0])
            let html = `
            
                        <h2 class="recipe-title">${data.meals[0].strMeal}</h2>
                        <p class="recipe-category">Catrgory Name</p>

                        <h3>Instructions:</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus facere quasi, quaerat non ullam voluptates, ipsum recusandae ducimus pariatur placeat amet corrupti neque obcaecati consequatur quidem quibusdam. Iste, dolor amet?</p>

                    
                        
                    <div class="recipe-meal-img">
                        <img src="${data.meals[0].strMealThumb}" alt="">
                    </div>
                    <div class="recipe-link">
                        <a href="#" target="_blank">Watch Video</a>
                    </div>
               
            `;

            mealDetailscontent.innerHTML = html;
            mealDetailscontent.parentElement.classList.add('showRecipe');

        })
    
    }
}