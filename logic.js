let menuLinks = document.getElementById("menu-links");
function showMenu() {
    menuLinks.style.right = "0";
}

function hideMenu() {
    menuLinks.style.right = "-200px";
}

// Email Send Message Code Start...........!

function sendEmail(){
        Email.send({
        Host : "smtp.gmail.com",
        Username : "ritumakeover1997@gmail.com",
        Password : "Ritu@07091997",
        To : "vikrantmulankar389@gmail.com",
        From : document.getElementById("  email").value,
        Subject : "New Contact Form Enquiry", 
        Body : "Name: " + document.getElementById("name").value
            + " <br> Email: " + document.getElementById("email").value
            + " <br> Phone no: " + document.getElementById("phone").value
            + " <br> subject: " + document.getElementById("subject").value
            + " <br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Succesfully")
    );
}