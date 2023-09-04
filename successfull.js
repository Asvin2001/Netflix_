a = document.getElementById("plan")



a.innerHTML = localStorage.getItem("netflixplan")



if (localStorage.getItem("netflixplan") == "Mobile") {
    a.innerHTML = "Free Mobile"
}




function logp(){
    window.open("login.html","_self")
}