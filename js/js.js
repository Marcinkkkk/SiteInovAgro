function aplicarMascaraTelefone(input) {
    let valor = input.value.replace(/\D/g, '');
    
    if (valor.length > 11) valor = valor.slice(0, 11);
    

    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    input.value = valor;
}

document.getElementById("telefone").addEventListener("input", function() {
    aplicarMascaraTelefone(this);
});

document.getElementById("contato-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value.replace(/\D/g, '');
    let mensagem = document.getElementById("mensagem").value;

    let textoMensagem = `Olá, meu nome é ${nome}.%0A%0A${mensagem}`;
    let numeroWhatsApp = "555499417816";
    
    let linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;
    window.open(linkWhatsApp, "_blank");
});