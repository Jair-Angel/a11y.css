function getFileName(){var e=document.getElementById("language").value||"en",t=document.getElementById("minimum-level").value||"advice";return"https://ffoodd.github.io/a11y.css/css/a11y-"+e+(t="advice"!==t?"_"+t:"")+".css"}function getBookmarkletContent(){return["javascript:","(function(){",'a11ycss=document.createElement("LINK");','a11ycss.href="'+getFileName()+'";','a11ycss.rel="stylesheet";','a11ycss.media="all";',"document.body.appendChild(a11ycss);","})();"].join("")}function activeAnchor(e){var t=(e=e||document.getElementById("toc")).getElementsByTagName("a");for(i=0;i<t.length;i++)document.location.href.indexOf(t[i].href)>=0&&t[i].classList.add("active-test")}function handleTocClick(e){var t=e.target,n=document.querySelector(".active-test");n&&n.removeAttribute("class"),"a"===t.tagName.toLowerCase()&&t.classList.add("active-test")}function handleFormSubmit(e){e.preventDefault();var t=document.getElementById("bookmarklet--link");t.setAttribute("href",getBookmarkletContent()),t.classList.add("done")}function handleFormChange(){document.getElementById("bookmarklet--link").classList.remove("done")}document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("bookmarklet");e&&(e.addEventListener("submit",handleFormSubmit),e.addEventListener("change",handleFormChange));var t=document.getElementById("toc");t&&(t.addEventListener("click",handleTocClick),activeAnchor(t))});