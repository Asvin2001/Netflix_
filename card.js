
a = document.getElementById("cn")
b = document.getElementById("exp")
c = document.getElementById("cvv")
d = document.getElementById("fn")
e = document.getElementById("ln")
f = document.getElementById("ccb")

amt=document.getElementById("planamount")
typ=document.getElementById("pde")

alrt = document.querySelectorAll("#wa");

cardnumber = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
expdatee = /^[0-9]+\/[0-9]*$/
cvv = /^[0-9]{3,3}$/
letteronly = /^[a-zA-Z ]+$/



pval=localStorage.getItem("netflixplan")


if(pval=="Basic"){
    amt.innerHTML="199"
    typ.innerHTML="Basic"
}
else if(pval=="Standard"){
    amt.innerHTML="499"
    typ.innerHTML="Standard"
}
else if(pval=="Premium"){
    amt.innerHTML="649"
    typ.innerHTML="Premium"
}



function cardnu() {
    if (a.value.match(cardnumber)) {
        alrt[0].classList.add("d-none");

    }
    else {
        alrt[0].classList.remove("d-none");


    }
}

function eexpda() {
    if (b.value.match(expdatee)) {
        alrt[1].classList.add("d-none");
    }
    else {
        alrt[1].classList.remove("d-none");
    }


}

function cvno() {
    if (c.value.match(cvv)) {
        alrt[2].classList.add("d-none");
    }
    else {
        alrt[2].classList.remove("d-none");
    }

}

function fn() {
    if (d.value.match(letteronly)) {
        alrt[3].classList.add("d-none");
    }
    else {
        alrt[3].classList.remove("d-none");
    }
}

function ln() {
    if (e.value.match(letteronly)) {
        alrt[4].classList.add("d-none");
    }
    else {
        alrt[4].classList.remove("d-none");
    }
}







function stme() {


    if (a.value.match(cardnumber)) {


        if (b.value.match(expdatee)) {
            if (c.value.match(cvv)) {
                if (d.value.match(letteronly)) {
                    if (e.value.match(letteronly)) {

                        if (f.checked == true) {

                            window.open("successfull.html", "_self")





                        }


                        else{
                            alert("Please check the terms and conditions")
                        }
                    }
                }
            }




        }




    }
    
}