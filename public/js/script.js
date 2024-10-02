function clearText() {
    document.querySelector('textarea[name="text"]').value = '';
}

const toggleButton = document.getElementById('toggle-theme');

toggleButton.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o envio do formulário
    document.body.classList.toggle('accessible'); // Alterna a classe 'accessible'
});