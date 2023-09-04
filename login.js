// letteronly = /^[a-zA-Z ]+$/
// maile = /^[a-zA-Z0-9._]+\@[a-zA-Z0-9]+\.[a-zA-Z0-9-]*$/
// // passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
// ftf = /^[0-9A-Za-z@_]{4,15}$/
// ind=/^[0-9]{10}$/
a = document.getElementsByTagName("input")
p = document.getElementsByTagName("p")
b = document.getElementById("hs")
c = document.getElementById("alrtx")
d = document.getElementById("alrt")
e = document.getElementById("lo")
f = document.getElementById("fo")
g = document.getElementById("shs")

// function phem() {
//     if (a[0].value.match(maile) || a[0].value.match(ind)) {

//         p[0].classList.add("d-none")



//     }
//     else {

//         p[0].classList.remove("d-none")

//     }



// }

// function phem1() {
//     if (a[1].value.match(ftf)) {
//         p[1].classList.add("d-none")


//     }
//     else {
//         p[1].classList.remove("d-none")

//     }
// }

a[0].value=localStorage.getItem("netflixoa")
a[1].value=localStorage.getItem("netflixta")


b.style.visibility = "hidden";

function lemoo() {


    if (b.style.visibility == "hidden") {
        b.style.visibility = "visible";

    }
    else {
        b.style.visibility = "hidden";

    }
}



function loi() {
    if (a[0].value == localStorage.getItem("netflixemail") || a[0].value == localStorage.getItem("netflixphonenumber")) {
        d.classList.add("d-none")


        if (a[1].value == localStorage.getItem("netflixpassword")) {
            d.classList.add("d-none")


            ///////home page link here///////////////////l//////////////////////////////////


            if(a[2].checked==true){
                localStorage.setItem("netflixoa", a[0].value)
                localStorage.setItem("netflixta", a[1].value)
            }
            else{
                localStorage.removeItem("netflixoa")
                localStorage.removeItem("netflixta")

            }


        }
        else {
            c.innerHTML = "Incorrect Password"
            d.classList.remove("d-none")
            f.innerHTML = "Forgot Password ?"
            e.innerHTML = ""

        }

    }
    else {
        c.innerHTML = "Email or Phone Number has not been registered"
        d.classList.remove("d-none")
        e.innerHTML = "Sign In ?"
        f.innerHTML = ""




    }
}


function shp(){
    if(a[1].type=="password"){
        a[1].type="text"
        g.innerHTML="Hide"
    }
    else{
        a[1].type="password"
        g.innerHTML="Show"
    }
}

function su(){
    window.open("signup.html","_self")
}
