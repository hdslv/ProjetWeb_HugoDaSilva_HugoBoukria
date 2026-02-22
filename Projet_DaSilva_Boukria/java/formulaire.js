document.getElementById("contactForm").addEventListener("submit", function(e){

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(nom.length < 3){
        alert("Nom trop court !");
        e.preventDefault();
    }

    if(!email.includes("@")){
        alert("Email invalide !");
        e.preventDefault();
    }

    if(message.length < 10){
        alert("Message trop court !");
        e.preventDefault();
    }
});

// Remplace tes alert() par ceci :
if(nom.length < 3){
    document.getElementById("nom").style.borderColor = "red";
    e.preventDefault();
} else {
    document.getElementById("nom").style.borderColor = "#ccc";
}