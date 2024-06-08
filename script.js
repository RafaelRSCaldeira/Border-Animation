function animateBorder() {
    let percent = document.getElementById("percent");
    let container = document.getElementById("container");
    container.classList.remove("deactivated");
    container.classList.add("activated");
    let counter = -1;

    let myInterval = setInterval(function() {
        percent.textContent = `${++counter}%`;
        if(counter == 100) {
            clearInterval(myInterval);
            container.className = "container deactivated"
        }
    }, 100);
};
animateBorder();