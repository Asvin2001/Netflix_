a = document.getElementById("cn")
b = document.getElementById("appse")


al = document.querySelectorAll("#aw")


upii = /^[a-zA-Z0-9._]+\@upii*$/
paytmm = /^[a-zA-Z0-9._]+\@paytmm*$/
phonepe = /^[a-zA-Z0-9._]+\@ybll*$/
amazonpay = /^[a-zA-Z0-9._]+\@apii*$/
gpay = /^[a-zA-Z0-9._]+\@okhdfcbankk*$/
otherpy = /^[a-zA-Z0-9._]+\@[A-Za-z0-9]*$/





function upapc() {


    if (b.value == 0) {
        al[0].classList.remove("d-none")

        al[1].innerHTML = "Please Select any upi app first"
        al[1].classList.remove("d-none")

    }


    else if (b.value == 1) {

        al[0].classList.add("d-none")

        if (a.value.match(upii)) {
            al[1].classList.add("d-none")
        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of BHIM UPI (ex. abc@upi)"
        }
    }



    else if (b.value == 2) {
        al[0].classList.add("d-none")


        if (a.value.match(paytmm)) {
            al[1].classList.add("d-none")
        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of paytm (ex. abc@paytm)"
        }
    }



    else if (b.value == 3) {
        al[0].classList.add("d-none")


        if (a.value.match(phonepe)) {
            al[1].classList.add("d-none")
        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of Phone pe (ex. abc@ybl)"
        }
    }



    else if (b.value == 4) {
        al[0].classList.add("d-none")


        if (a.value.match(amazonpay)) {
            al[1].classList.add("d-none")
        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of Amazon pay (ex. abc@api)"
        }
    }



    else if (b.value == 5) {
        al[0].classList.add("d-none")

        if (a.value.match(gpay)) {
            al[1].classList.add("d-none")
        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of BHIM UPI (ex. abc@okhdfcbank)"
        }
    }




    else if (b.value == 6) {
        al[0].classList.add("d-none")


        if (a.value.match(otherpy)) {
            al[1].classList.add("d-none")
        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID "
        }
    }




}



function upo() {


    if (b.value == 0) {
        al[0].classList.remove("d-none")

        al[1].innerHTML = "Please Select any upi app first"
        al[1].classList.remove("d-none")

    }


    else if (b.value == 1) {

        if (a.value.match(upii)) {
            al[1].classList.add("d-none")
        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of BHIM UPI (ex. abc@upi)"
        }
    }



    else if (b.value == 2) {

        if (a.value.match(paytmm)) {
            al[1].classList.add("d-none")
        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of paytm (ex. abc@paytm)"
        }
    }



    else if (b.value == 3) {

        if (a.value.match(phonepe)) {
            al[1].classList.add("d-none")
        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of Phone pe (ex. abc@ybl)"
        }
    }



    else if (b.value == 4) {

        if (a.value.match(amazonpay)) {
            al[1].classList.add("d-none")
        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of Amazon pay (ex. abc@api)"
        }
    }



    else if (b.value == 5) {

        if (a.value.match(gpay)) {
            al[1].classList.add("d-none")
        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of BHIM UPI (ex. abc@okhdfcbank)"
        }
    }




    else if (b.value == 6) {

        if (a.value.match(otherpy)) {
            al[1].classList.add("d-none")
        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID "
        }
    }





}

function nxt() {

    if (b.value == 0) {
        al[0].classList.remove("d-none")

        al[1].innerHTML = "Please Select any upi app first"
        al[1].classList.remove("d-none")

    }


    else if (b.value == 1) {

        if (a.value.match(upii)) {
            al[1].classList.add("d-none")

            window.open("successfull.html", "_self")

        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of BHIM UPI (ex. abc@upi)"
        }
    }



    else if (b.value == 2) {

        if (a.value.match(paytmm)) {
            al[1].classList.add("d-none")
            window.open("successfull.html", "_self")

        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of paytm (ex. abc@paytm)"
        }
    }



    else if (b.value == 3) {

        if (a.value.match(phonepe)) {
            al[1].classList.add("d-none")
            window.open("successfull.html", "_self")

        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of Phone pe (ex. abc@ybl)"
        }
    }



    else if (b.value == 4) {

        if (a.value.match(amazonpay)) {
            al[1].classList.add("d-none")
            window.open("successfull.html", "_self")

        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of Amazon pay (ex. abc@api)"
        }
    }



    else if (b.value == 5) {

        if (a.value.match(gpay)) {
            al[1].classList.add("d-none")
            window.open("successfull.html", "_self")

        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID of BHIM UPI (ex. abc@okhdfcbank)"
        }
    }




    else if (b.value == 6) {

        if (a.value.match(otherpy)) {
            al[1].classList.add("d-none")
            window.open("successfull.html", "_self")

        }
        else {
            al[1].classList.remove("d-none")
            al[1].innerHTML = "Please Enter Valid UPI ID "
        }
    }


}
