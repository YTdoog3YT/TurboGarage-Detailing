// FAQ //
const accordions = document.querySelectorAll('.accordion_btn');


accordions.forEach(btn => {
    btn.addEventListener('click', () => {
        
        btn.classList.toggle('active');

        const textPanel = btn.parentElement.nextElementSibling;

        if (textPanel.style.display === "block") {
            textPanel.style.display = "none";
        } else {
            textPanel.style.display = "block";
        }
    });
});