// Abrir o modal ao clicar no botão "Novo Quarto"
document.getElementById("novo-quarto-btn").addEventListener("click", function() {
    document.getElementById("modal-novo-quarto").style.display = "block";
});

// Fechar o modal ao clicar no botão de fechar (x)
document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("modal-novo-quarto").style.display = "none";
});

// Fechar o modal ao clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == document.getElementById("modal-novo-quarto")) {
        document.getElementById("modal-novo-quarto").style.display = "none";
    }
};

// Lógica de submissão do formulário para adicionar um novo quarto
document.getElementById("novo-quarto-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Quarto salvo com sucesso!"); // Mensagem de sucesso (pode ser removida após integração)
    document.getElementById("modal-novo-quarto").style.display = "none";
    // Aqui, você pode adicionar a lógica para salvar o quarto, possivelmente usando AJAX para enviar os dados ao back-end
});