window.addEventListener("load", function() {  
    let page = window.location.pathname.substring(1)
    if (page == "") {
        page = "index"
    }
    fetch(`https://wemakeinter.net/diyPixel/morryProjPixel.php?event=pageView&project=mainSite&page=${page}`)
});