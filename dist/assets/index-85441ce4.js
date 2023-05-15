(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const d=document.getElementById("search-btn"),c=document.getElementById("meal"),o=document.querySelector(".meal-details-content"),a=document.getElementById("recipe-close-btn");function u(){let e=document.getElementById("search-input").value.trim();fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e}`).then(i=>i.json()).then(i=>{let r="";i.meals?(i.meals.forEach(s=>{r+=`
                    <div class = "meal-item" data-id = "${s.idMeal}">
                        <div class = "meal-img">
                            <img src = "${s.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${s.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Show Recipe</a>
                        </div>
                    </div>
                `}),c.classList.remove("notFound")):(r="Sorry, we didn't find any meal!",c.classList.add("notFound")),c.innerHTML=r})}function p(e){if(e.preventDefault(),e.target.classList.contains("recipe-btn")){let i=e.target.parentElement.parentElement;fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i.dataset.id}`).then(r=>r.json()).then(r=>h(r.meals))}}function h(e){e=e[0];let i=`
        <h2 class = "recipe-title">${e.strMeal}</h2>
        <p class = "recipe-category">Category: ${e.strCategory}</p>
        <div class = "recipe-ingredients">
            <h3>Ingredients:</h3>
            <ul>
            <li>${e.strIngredient1}</li>
            <li>${e.strIngredient2}</li>
            <li>${e.strIngredient3}</li>
            <li>${e.strIngredient4}</li>
            <li>${e.strIngredient5}</li>
            <li>${e.strIngredient6}</li>
            <li>${e.strIngredient7}</li>
            <li>${e.strIngredient8}</li>
            <li>${e.strIngredient9}</li>

            </ul> 
        </div>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${e.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${e.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${e.strYoutube}" target = "_blank">Click to watch video</a>
        </div>
    `;o.innerHTML=i,o.parentElement.classList.add("showRecipe")}d.addEventListener("click",u);c.addEventListener("click",p);a.addEventListener("click",()=>{o.parentElement.classList.remove("showRecipe")});
