document.addEventListener('DOMContentLoaded', function () {
    // Verifica se já existe um valor armazenado em localStorage
    let visitCount = localStorage.getItem('visitCount') || 0;

    // Incrementa o contador
    visitCount++;

    // Atualiza o valor no localStorage
    localStorage.setItem('visitCount', visitCount);

    // Exibe o contador na página
    document.getElementById('counter').innerText = `Total de Visitas: ${visitCount}`;
});
