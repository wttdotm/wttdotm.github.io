document.addEventListener("DOMContentLoaded", function() {  
    fetch(`https://wemakeinter.net/diyPixel/morryProjPixel.php?event=pageView&project=mainSite&page=${window.location.pathname.substring(1)}`)
});