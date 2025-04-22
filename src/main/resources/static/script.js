document.addEventListener("DOMContentLoaded", ()=>{

    console.log("DomContent loaded now");

    const firstNameIn = document.getElementById("firstNameID");
    const lastNameIn = document.getElementById("lastNameID");
    const dobIn = document.getElementById("dobID");
    const phoneIn = document.getElementById("phoneID");
    const emailIn = document.getElementById("emailID");
    const message = document.getElementById("messageID");
    const submitbutton = document.getElementById("submitID")
    const viewButton = document.getElementById("viewButtonID");

    // const submitIn = document.getElementById("submitID");
    message.textContent = "Nothing sent yet";
    message.style.color = "Blue";



// Simple validation for alle the inputs
    function validationInput(){

        const firstName = firstNameIn.value.trim();
        const lastName = lastNameIn.value.trim();
        const dobStr = dobIn.value.trim();
        const phone = phoneIn.value.trim();
        const email = emailIn.value.trim();


        if (firstName === "" || lastName === "" || dobStr === "" || phone === "" || email === ""){
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






        const dob = new Date(dobStr);
        if (isNaN(dob.getTime())) {
            message.textContent = "Invalid date format";
            message.style.color = "red";
            return false;
        }

        // Check age
        const today = new Date();
        const ageDiffMs = today - dob;
        const ageDate = new Date(ageDiffMs);
        const currentAge = Math.abs(ageDate.getUTCFullYear() - 1970);

        if (currentAge < 18) {
            message.textContent = "You are under the age of 18, so you can't apply here.";
            message.style.color = "purple";
            return false;
        }

        // If all checks pass
        message.textContent = "Everything is correct and sent to the backend";
        message.style.color = "green";
        return true;



        // Now for Object to show for Alert and later on to send to Endpoint on backend

    }

        // Now for Object to show for Alert and later on to send to Endpoint on backend

    function sendToBackEnd (){

        if(!validationInput()){
            console.log("No vaild input so no need to send to the backend")
            return false;
        }else {
            message.textContent = "Everything is correct og sent to the backend ";
            message.style.color = "Green";
        }


        const firstName = firstNameIn.value.trim();
        const lastName = lastNameIn.value.trim();
        const dob = dobIn.value.trim();
        const phone = phoneIn.value.trim();
        const email = emailIn.value.trim();
// Objekt of the user gi
        const person = {
            firstName: firstName,
            lastName: lastName,
            dob:dob,
            phone:phone,
            email:email
        };
        console.log(person);
        alert(JSON.stringify(person, null, 2 ));


// To send user data to backend
        $.ajax({
            url: "/saveUser",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(person),
            success: function (response){
                console.log("Sendt to the backend", response)
            }, error: function (error) {
                console.log("Something went wrong on transfere ", error)
            }

        })

    }


    function getBookFromBackend(){
        $.ajax({
            url: "/books",            // Endepunktet i Spring Boot
            method: "GET",            // GET-metode brukes for å hente data
            success: function (books) {
                // Finner <ul> elementet der bøkene skal vises
                const ul = document.getElementById("list");
                ul.innerHTML = "";    // Tømmer tidligere innhold

                // Går gjennom hver bok og legger til som <li>
                books.forEach(function (book) {
                    const li = document.createElement("li");
                    li.textContent = `${book.title} (${book.publicationYear}) – ${book.author}`;
                    ul.appendChild(li);
                });
            },
            error: function (xhr, status, error) {
                console.error("Klarte ikke å hente bøker:", error);
            }
        });
    }








    // submitbutton.addEventListener("click",validationInput);
    // submitbutton.addEventListener("click",sendToBackEnd);
    submitbutton.addEventListener("click",sendToBackEnd);
    viewButton.addEventListener("click", getBookFromBackend);








    }
)