  // Função para obter a hora atual formatada
  function obterHoraAtual() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();
    
    return `${horas}:${minutos}:${segundos}`;
  }

  // Função para atualizar a exibição da hora na página
  function atualizarTempo() {
    const tempoAtualElemento = document.getElementById('tempo-atual');
    const horaAtual = obterHoraAtual();
    tempoAtualElemento.textContent = horaAtual;
  }

  // Atualizar a cada segundo
  setInterval(atualizarTempo, 1000);

  // Chamar a função inicialmente para evitar atrasos na exibição
  atualizarTempo();