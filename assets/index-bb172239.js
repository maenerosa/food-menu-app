(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const a=document.getElementById("search-btn"),c=document.getElementById("meal"),l=document.querySelector(".meal-details-content"),d=document.getElementById("recipe-close-btn");a.addEventListener("click",p);c.addEventListener("click",u);d.addEventListener("click",()=>{l.parentElement.classList.remove("showRecipe")});function p(){let e=document.getElementById("search-input").value.trim();fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e}`).then(s=>s.json()).then(s=>{let i="";s.meals?(s.meals.forEach(r=>{i+=`
                    <div class = "meal-item" data-id = "${r.idMeal}">
                        <div class = "meal-img">
                            <img src = "${r.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${r.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `}),c.classList.remove("notFound")):(i="Sorry, we didn't find any meal!",c.classList.add("notFound")),c.innerHTML=i})}function u(e){if(e.preventDefault(),e.target.classList.contains("recipe-btn")){let s=e.target.parentElement.parentElement;fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${s.dataset.id}`).then(i=>i.json()).then(i=>m(i.meals))}}function m(e){console.log(e),e=e[0];let s=`
        <h2 class = "recipe-title">${e.strMeal}</h2>
        <p class = "recipe-category">${e.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${e.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${e.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${e.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;l.innerHTML=s,l.parentElement.classList.add("showRecipe")}
