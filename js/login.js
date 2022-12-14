function login() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let button = document.createElement('button');
    
    input.setAttribute('type', 'text');
    input.setAttribute('maxLength', '12');
    input.setAttribute('required', '');    
    button.textContent = 'Войти';

    form.classList.add('form');
    input.classList.add('input');
    button.classList.add('button');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let loginData = `login?login=${input.value}`;
        requestForInfo(loginData);
    });

    app.appendChild(form);
    form.appendChild(input);
    form.appendChild(button);
}