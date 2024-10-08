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