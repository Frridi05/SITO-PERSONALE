document.getElementById('myForm').addEventListener('submit', sendMail);

function sendMail(e) {
    e.preventDefault();

    // Initialize EmailJS (You only need to do this once)
    if (!emailjs._initialized) {
        emailjs.init('pILGyFcmJkp35zPy9');  // Your public key
    }

    // Get form data
    let params = {
        name: document.getElementById("Nome").value,
        mail: document.getElementById("Email").value,
        text: document.getElementById("Messaggio").value,
    };

    // Define EmailJS service and template IDs
    const serviceID = "service_noroit8";
    const templateID = "template_mr6fydj";

    // Send email
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            // Clear form fields
            document.getElementById("Nome").value = "";
            document.getElementById("Email").value = "";
            document.getElementById("Messaggio").value = "";

            // Success alert
            console.log(res);
            alert('Email inviata con successo!');
        })
        .catch((err) => {
            // Handle error
            console.error('Email send failed:', err);
            alert('Si è verificato un errore durante l\'invio dell\'email.');
        });