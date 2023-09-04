a = document.getElementById("mobi")
b = document.querySelectorAll("#mobil")
icon = document.getElementById("ico")
iconn = document.getElementById("ico1")
iconnn = document.getElementById("ico2")
iconnnn = document.getElementById("ico3")



c = document.querySelectorAll("#bi")
g = document.querySelectorAll("#st")
h = document.querySelectorAll("#pr")

d = document.getElementById("basi")
e = document.getElementById("stan")
f = document.getElementById("prem")


if(performance.navigation.type == 2){
    location.reload(true);
 }
 

if (a.checked == true) {

    b[1].style.color = "red"
    b[2].style.color = "red"
    b[3].style.color = "red"
    icon.style.color = "#ff0000"

}

else if (d.checked == true) {

    c[1].style.color = "red"
    c[2].style.color = "red"
    c[3].style.color = "red"
    iconn.style.color = "#ff0000"

}

else if (e.checked == true) {

    g[0].style.color = "red"
    g[1].style.color = "red"
    g[2].style.color = "red"
    iconnn.style.color = "#ff0000"

}
else if (f.checked == true) {

    h[0].style.color = "red"
    h[1].style.color = "red"
    h[2].style.color = "red"
    iconnnn.style.color = "#ff0000"
}



function mob() {


    b[1].style.color = "red"
    b[2].style.color = "red"
    b[3].style.color = "red"
    icon.style.color = "#ff0000"


    a.checked = true

    // c[0].style.color = "black"
    c[1].style.color = "black"
    c[2].style.color = "black"
    c[3].style.color = "black"
    iconn.style.color = "rgb(246, 110, 110)"

    g[0].style.color = "black"
    g[1].style.color = "black"
    g[2].style.color = "black"
    iconnn.style.color = "rgb(246, 110, 110)"

    h[0].style.color = "black"
    h[1].style.color = "black"
    h[2].style.color = "black"
    iconnnn.style.color = "rgb(246, 110, 110)"

}






function bas() {

    // c[0].style.color = "red"
    c[1].style.color = "red"
    c[2].style.color = "red"
    c[3].style.color = "red"
    iconn.style.color = "#ff0000"

    d.checked = true

    // b[0].style.color = "black"
    b[1].style.color = "black"
    b[2].style.color = "black"
    b[3].style.color = "black"
    icon.style.color = "rgb(246, 110, 110)"

    g[0].style.color = "black"
    g[1].style.color = "black"
    g[2].style.color = "black"
    iconnn.style.color = "rgb(246, 110, 110)"

    h[0].style.color = "black"
    h[1].style.color = "black"
    h[2].style.color = "black"
    iconnnn.style.color = "rgb(246, 110, 110)"



}


function sta() {
    g[0].style.color = "red"
    g[1].style.color = "red"
    g[2].style.color = "red"
    iconnn.style.color = "#ff0000"



    e.checked = true




    // b[0].style.color = "#black"
    b[1].style.color = "black"
    b[2].style.color = "black"
    b[3].style.color = "black"
    icon.style.color = "rgb(246, 110, 110)"


    // c[0].style.color = "black"
    c[1].style.color = "black"
    c[2].style.color = "black"
    c[3].style.color = "black"
    iconn.style.color = "rgb(246, 110, 110)"

    h[0].style.color = "black"
    h[1].style.color = "black"
    h[2].style.color = "black"
    iconnnn.style.color = "rgb(246, 110, 110)"


}


function pre() {
    h[0].style.color = "red"
    h[1].style.color = "red"
    h[2].style.color = "red"

    iconnnn.style.color = "red"


    // b[0].style.color = "black"
    b[1].style.color = "black"
    b[2].style.color = "black"
    b[3].style.color = "black"

    icon.style.color = "rgb(246, 110, 110)"


    c[1].style.color = "black"
    c[2].style.color = "black"
    c[3].style.color = "black"
    iconn.style.color = "rgb(246, 110, 110)"

    g[0].style.color = "black"
    g[1].style.color = "black"
    g[2].style.color = "black"
    iconnn.style.color = "rgb(246, 110, 110)"




    f.checked = true
}



function nxt() {
    if (a.checked == true) {
        localStorage.setItem("netflixplan", "Mobile")

        window.open("successfull.html", "_self")

    }

    else if (d.checked == true) {
        localStorage.setItem("netflixplan", "Basic")

        window.open("signup 5.html", "_self")

    }

    else if (e.checked == true) {
        localStorage.setItem("netflixplan", "Standard")

        window.open("signup 5.html", "_self")

    }

    else if (f.checked == true) {
        localStorage.setItem("netflixplan", "Premium")

        window.open("signup 5.html", "_self")

    }
}
