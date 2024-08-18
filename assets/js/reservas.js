
// Abrir e fechar o modal de nova reserva
document.getElementById("nova-reserva-btn").addEventListener("click", function() {
    document.getElementById("modal-nova-reserva").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("modal-nova-reserva").style.display = "none";
});

window.onclick = function(event) {
    if (event.target == document.getElementById("modal-nova-reserva")) {
        document.getElementById("modal-nova-reserva").style.display = "none";
    }
};

// Implementar a lógica para salvar a nova reserva ao enviar o formulário
document.getElementById("nova-reserva-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Lógica para salvar a nova reserva (futura integração com back-end)
    alert("Reserva salva com sucesso!");
    document.getElementById("modal-nova-reserva").style.display = "none";
});
