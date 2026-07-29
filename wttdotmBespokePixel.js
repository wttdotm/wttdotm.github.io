window.addEventListener("load", function() {  
    let page = window.location.pathname.substring(1)
    if (page == "") {
        page = "index"
    }
    fetch(`https://wemakeinter.net/diyPixel/morryProjPixel.php?event=pageView&project=mainSite&page=${page}`)
});

// if (window.location.href.toLowerCase().includes("wwwwwwwwwwwwwwwwwwwwwwwwww")) {

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.toLowerCase().includes("wwwwwwwwwwwwwwwwwwwwwwwww")) {
        // find all instances of W in any text element Ws in the page and replace them with <span style="color: white;">W</span>
        const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span")
        console.log("textElements", textElements)
        textElements.forEach(textElement => {
            console.log(textElement.tagName)
            //get href if textElement is an <a> tag

            console.log("textElement", textElement)
            
            // Only replace W/w outside of any HTML tag (i.e., not between "<" and ">")
            // This uses a callback to avoid replacing within tags.
            textElement.innerHTML = textElement.innerHTML.replace(/([^<>]*)(<[^>]*>|$)/g, (match, text, tag) => {
                // Replace W/w in the "text" part only, leave the tag untouched.
                if (text) {
                    text = text.replace(/W/g, `<span>WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW</span>`)
                               .replace(/w/g, `<span>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</span>`);
                }
                return text + (tag || '');
            });
        })
    }
})