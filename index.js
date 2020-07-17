
showLink = (link) => {
    //link is either friend, work, boss
    if (link === "friend") {
        document.getElementById("medium").style.display = "flex";
        document.getElementById("gitlink").style.display = "none";
        document.getElementById("resume").style.display = "none";
        
    } else if (link === "work") {
        document.getElementById("medium").style.display = "none";
        document.getElementById("gitlink").style.display = "flex";
        document.getElementById("resume").style.display = "none";
    } else if (link === "boss") {
        document.getElementById("medium").style.display = "none";
        document.getElementById("gitlink").style.display = "none";
        document.getElementById("resume").style.display = "flex";
    }

}