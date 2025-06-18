document.addEventListener("DOMContentLoaded", function() {  
    console.log("DOMContentLoaded at page ", window.location.pathname.substring(1));
    fetch(`https://wemakeinter.net/diyPixel/morryProjPixel.php?event=pageView&project=mainSite&page=${window.location.pathname.substring(1)}`)
});