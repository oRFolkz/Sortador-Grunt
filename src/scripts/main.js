document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formSorteador').addEventListener('submit', function(e) {
        e.preventDefault();
        let numeroMaximo = document.getElementById('numeroMaximo').value;
        numeroMaximo = parseInt(numeroMaximo);


        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        document.getElementById('valorFinal').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});