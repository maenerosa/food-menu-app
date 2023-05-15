(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const a=document.getElementById("search-btn"),c=document.getElementById("meal"),l=document.querySelector(".meal-details-content"),d=document.getElementById("recipe-close-btn");function m(){let t=document.getElementById("search-input").value.trim();fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${t}`).then(s=>s.json()).then(s=>{let n="";s.meals?(s.meals.forEach(r=>{n+=`
                    <div class = "meal-item" data-id = "${r.idMeal}">
                        <div class = "meal-img">
                            <img src = "${r.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${r.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Show Recipe</a>
                        </div>
                    </div>
                `}),c.classList.remove("notFound")):(n="Sorry, we didn't find any meal!",c.classList.add("notFound")),c.innerHTML=n})}function p(t){if(t.preventDefault(),t.target.classList.contains("recipe-btn")){let s=t.target.parentElement.parentElement;fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${s.dataset.id}`).then(n=>n.json()).then(n=>u(n.meals))}}function u(t){t=t[0];let s=`
        <h2 class = "recipe-title">${t.strMeal}</h2>
        <p class = "recipe-category">Category: ${t.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${t.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${t.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${t.strYoutube}" target = "_blank">Click to watch video</a>
        </div>
    `;l.innerHTML=s,l.parentElement.classList.add("showRecipe")}a.addEventListener("click",m);c.addEventListener("click",p);d.addEventListener("click",()=>{l.parentElement.classList.remove("showRecipe")});
