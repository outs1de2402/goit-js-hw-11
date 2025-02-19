import{a as p,S as f,i as l}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="48874929-f90ec9beeb99fdbae3d7d9b25",g="https://pixabay.com/api/";async function h(o){try{return(await p.get(g,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Error fetching images:",t),[]}}function b(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:u,comments:y,downloads:d})=>`
      <div class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${n}" alt="${r}" class="gallery-image" />
        </a>
        <div class="info">
          <p>❤️ ${a}</p>
          <p>👀 ${u}</p>
          <p>💬 ${y}</p>
          <p>⬇️ ${d}</p>
        </div>
      </div>`).join(""),new f(".gallery a").refresh()}const q=document.querySelector("#search-form"),S=document.querySelector("#search-input"),c=document.querySelector(".loader"),i=document.querySelector(".gallery");i.style.display="grid";i.style.gridTemplateColumns="repeat(3, 1fr)";i.style.gap="10px";i.querySelectorAll(".gallery-image").forEach(o=>{o.style.width="100%",o.style.height="auto"});q.addEventListener("submit",async o=>{o.preventDefault();const t=S.value.trim();if(!t){l.error({title:"Error",message:"Please enter a search query!"});return}i.innerHTML="",c.style.display="block";const s=await h(t);c.style.display="none",s.length===0?l.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):b(s)});
//# sourceMappingURL=index.js.map
