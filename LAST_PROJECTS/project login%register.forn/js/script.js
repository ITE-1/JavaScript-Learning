const forms = document.querySelector('.forms'),
    links = document.querySelectorAll('.link'),
    formShowHide = document.querySelectorAll('.show-password');


formShowHide.forEach( icon => {
    icon.addEventListener('click', () => {
        let formsFields = icon.parentElement.parentElement.querySelectorAll('.password');
        
        formsFields.forEach(password => {
            if(password.type === 'password') {
                password.type = 'text';

                icon.classList.replace('hide', 'show');
                return;
            }
            password.type = 'password';
            icon.classList.replace('show', 'hide');
        })
    })
});

links.forEach(signup => {
    signup.addEventListener('click', (e) => {
        e.preventDefault();
        forms.classList.toggle('show-signup'); 
    })

})