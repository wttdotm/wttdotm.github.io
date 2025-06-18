window.addEventListener("load", function() {  
    let page = window.location.pathname.substring(1)
    console.log("loaded at page ", page);
    fetch(`https://wemakeinter.net/diyPixel/morryProjPixel.php?event=pageView&project=mainSite&page=${page}`)
});