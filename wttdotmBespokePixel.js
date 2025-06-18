window.addEventListener("load", function() {  
    console.log("loaded at page ", window.location.pathname.substring(1));
    fetch(`https://wemakeinter.net/diyPixel/morryProjPixel.php?event=pageView&project=mainSite&page=${window.location.pathname.substring(1)}`)
});