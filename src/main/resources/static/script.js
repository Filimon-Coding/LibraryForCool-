document.addEventListener("DOMContentLoaded", ()=>{

    console.log("DomContent loaded now");

    const firstNameIn = document.getElementById("firstNameID");
    const lastNameIn = document.getElementById("lastNameID");
    const dobIn = document.getElementById("dobID");
    const phoneIn = document.getElementById("phoneID");
    const emailIn = document.getElementById("emailID");
    const message = document.getElementById("messageID");
    const submitbutton = document.getElementById("submitID")

    // const submitIn = document.getElementById("submitID");
    message.textContent = "Nothing sent yett";
    message.style.color = "Blue";




    function validationInput(){

        const firstName = firstNameIn.value.trim();
        const lastName = lastNameIn.value.trim();
        const dob = dobIn.value.trim();
        const phone = phoneIn.value.trim();
        const email = emailIn.value.trim();


        if (firstName === "" || lastName === "" || dob === "" || phone === "" || email === ""){
            message.textContent = "You need to fil all the fields"
            message.style.color = "Red"
            return false;
        }


        const phoneRegx = /^[0-9]{8}$/;

        if(!phoneRegx.test(phone)){
            message.textContent = "Phone is not correct input"
            message.style.color = "Red"
            return false;
        }



        const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegx.test(email)){
            message.textContent = "Email is not correct input"
            message.style.color = "Red"
            return false;
        }


        const dateToday = new date();

        const currentAge = dateToday - dob;

        if (currentAge < 18){
            message.textContent = "You are under the age of 18, so you cant apply here"
            message.style.color = "purple"
            return false;

        }







    }

    submitbutton.addEventListener("click",validationInput )







    }
)