function responsive_header() {
    var header = document.getElementById("site-header");
    if(header.className == "header") header.className += " responsive";
    else header.className = "header";
}

document.addEventListener('DOMContentLoaded', function() {
    const header_elements = document.querySelectorAll('.header a');
    header_elements.forEach(element => {
        element.addEventListener('click', function(event){
            event.preventDefault();
            // deactivate all elements
            header_elements.forEach(navigate => navigate.classList.remove('active'));
            // activate selected element
            this.classList.add('active');
            const navigate_id = this.getAttribute('href').substring(1); // check if string contains 'href'
            const navigate_section = document.getElementById(navigate_id)
            // scroll to section
            navigate_section.scrollIntoView({ behavior: 'smooth' });
        })
    })
})

function submit_form() {
    console.log("HERE");

    const name = document.forms['contact-form']['name'].value;
    const email = document.forms['contact-form']['email'].value;
    const message = document.forms['contact-form']['trade-details'].value;

    
    console.log(`name: ${name} email: ${email} text: ${message}`);

    if(name == "" || email == "" || message == "") {
        alert("Please fill out the entire form!");
        return;
    }

    document.getElementById('thank-you-popup').style.display = "block";
    document.getElementById('form-div').style.position = "relative";
}

function exit_thank_you() {
    document.getElementById('thank-you-popup').style.display = "none";
}