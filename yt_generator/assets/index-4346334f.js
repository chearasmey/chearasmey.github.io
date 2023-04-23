(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(n){const r=()=>{const o=document.querySelector("#youtubeLink"),l=document.querySelector("#playerNumber"),e=document.querySelector("#player"),t=document.querySelector("#delay");if(o.value&&l.value&&t.value){const i=parseInt(l.value),s=parseFloat(t.value);let a="",u="";o.value.includes("list")?u=o.value.split("v=")[1].replace("&","?")+"&autoplay=1&mute=1":u=o.value.split("=")[1]+"?autoplay=1&mute=1";for(let c=0;c<i;c++)a+=`&nbsp;<iframe width="560" height="315" src="https://www.youtube.com/embed/${u}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;e.innerHTML=a,setTimeout(()=>r(),s*6e4+6e4)}else alert("Please input youtube link and Total Players!")};n.addEventListener("click",()=>r())}document.querySelector("#app").innerHTML=`
  <div>
    <input type="text" id="youtubeLink" placeholder="Youtube link here" />
    <input type="number" id="playerNumber" placeholder="Total Players" value="10" />
    <input type="number" id="delay" placeholder="Delay times as minutes" />
    <button id="generateElement">Open Video</button>
    <br><br>
    <div id="player"></div>
  </div>
`;d(document.querySelector("#generateElement"));
