a = document.getElementById("mail")
b = document.getElementById("pass")
w = document.querySelectorAll("#wa")
e = document.getElementById("eye")

aill = /^[a-zA-Z0-9._]+\@[a-zA-Z0-9]+\.[a-zA-Z0-9-]*$/
passs = /^[0-9A-Za-z@#$%^789-_+@!,./';\|~`]{6,60}$/

function mai() {

    if (a.value.match(aill)) {
        w[0].classList.add("d-none")
    }

    else {
        w[0].classList.remove("d-none")
    }

}

function pas() {
    if (b.value.match(passs)) {

        w[1].classList.add("d-none")
    }

    else {
        w[1].classList.remove("d-none")
    }
}

function shp() {
    if (b.type == "password") {
        b.type = "text"
        e.className = "bi bi-eye-slash-fill"

    }

    else {
        b.type = "password"
        e.className = "bi bi-eye-fill"

    }
}

function fi() {

    if (a.value.match(aill)) {
        w[0].classList.add("d-none")

        if (b.value.match(passs)) {

            w[1].classList.add("d-none")

            localStorage.setItem("netflixemail",a.value)
            localStorage.setItem("netflixpassword",b.value)



            window.open("signup 3.html", "_self")
        }
        else {
            w[1].classList.remove("d-none")


        }


    }

    else {
        w[0].classList.remove("d-none")

    }

}

