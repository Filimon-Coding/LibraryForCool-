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


        if (firstName === ""){
            message.textContent = "First name is empty"
            message.style.color = "Red"
        }




    }

    submitbutton.addEventListener("click",validationInput )







    }
)