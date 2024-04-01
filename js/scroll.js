export function setupScroll() {
    var progressBar = document.querySelector(".progress-bar");
    var rightBtnGoToTop = document.querySelector(".btnGoToTop");
    
    rightBtnGoToTop.addEventListener("click", function() {
        setTimeout(scrollToTop, 200);
    });
    
    window.addEventListener("scroll", function() {
        var scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        
        progressBar.style.width = scrollPercent + "%";
        progressBar.style.display = "block";
        
        rightBtnGoToTop.innerText = "Return to top (" + Math.round(scrollPercent) + "%)";
        if (scrollPercent > 5) {
            rightBtnGoToTop.style.display = "block";
        } else {
            rightBtnGoToTop.style.display = "none";
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
