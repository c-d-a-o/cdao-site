const newsletterForm = document.querySelector('#newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newsletterErrMsg = document.querySelector('.foot-newsletter-msg');
    newsletterErrMsg.innerHTML = `
        <i class="fa-solid fa-circle-exclamation"></i><span>Stay in the loop! </span>Our newsletter is in the pipeline.
    `;
});