function openForm() {
    document.getElementById('details-modal').style.display = 'block';
}

function closeForm() {
    document.getElementById('details-modal').style.display = 'none';
}

(function() {
    emailjs.init('B0YI0Mpgp_EGFwqYG'); // Substitua 'SEU_USER_ID' pelo seu User ID real
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Validação
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Envio para EmailJS
    emailjs.send('service_9oluir4', 'template_jir70xl', {
        name: name,
        email: email,
        phone: phone,
        message: message
    })
    .then(function(response) {
        console.log('Sucesso!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contact-form').reset();
        closeForm(); // Fecha a modal após o envio
    }, function(error) {
        console.log('Erro ao enviar:', error);
        alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
    });
});