class GerenciadorTarefas {
  constructor() {
    this.tarefas = [];
    this.filtroAtual = 'todas';
  }

  adicionarTarefa(texto, prioridade) {
    if (!texto.trim()) return false;

    const novaTarefa = {
      id: Date.now(),
      texto: texto.trim(),
      prioridade: prioridade,
      concluida: false
    };

    this.tarefas.push(novaTarefa);
    return true;
  }

  alternarConclusao(id) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }

  removerTarefa(id) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }

  filtrarTarefas(filtro) {
    this.filtroAtual = filtro;
  }

  obterTarefasVisiveis() {
    return this.tarefas.filter(tarefa => {
      if (this.filtroAtual === 'todas') return true;
      if (this.filtroAtual === 'concluidas') return tarefa.concluida;
      return tarefa.prioridade === this.filtroAtual;
    });
  }

  obterEstatisticas() {
    const total = this.tarefas.length;
    const concluidas = this.tarefas.filter(t => t.concluida).length;
    const pendentes = total - concluidas;
    return { total, concluidas, pendentes };
  }
}

// DOM e Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  const gerenciador = new GerenciadorTarefas();
  const entradaTarefa = document.getElementById('entrada-tarefa');
  const seletorPrioridade = document.getElementById('seletor-prioridade');
  const botaoAdicionar = document.getElementById('botao-adicionar');
  const listaTarefas = document.getElementById('lista-tarefas');
  const botoesFiltro = document.querySelectorAll('.botao-filtro');
  const estatisticas = document.getElementById('estatisticas');

  // Adicionar tarefa
  botaoAdicionar.addEventListener('click', adicionarTarefa);
  entradaTarefa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') adicionarTarefa();
  });

  // Filtros
  botoesFiltro.forEach(botao => {
    botao.addEventListener('click', function() {
      botoesFiltro.forEach(btn => btn.classList.remove('ativo'));
      this.classList.add('ativo');
      gerenciador.filtrarTarefas(this.dataset.filtro);
      atualizarInterface();
    });
  });

  function adicionarTarefa() {
    const texto = entradaTarefa.value;
    const prioridade = seletorPrioridade.value;
   
    if (gerenciador.adicionarTarefa(texto, prioridade)) {
      entradaTarefa.value = '';
      atualizarInterface();
    }
  }

  function atualizarInterface() {
    listaTarefas.innerHTML = '';
   
    gerenciador.obterTarefasVisiveis().forEach(tarefa => {
      const li = document.createElement('li');
      li.className = `item-tarefa ${tarefa.prioridade} ${tarefa.concluida ? 'concluida' : ''}`;
     
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = tarefa.concluida;
      checkbox.addEventListener('change', () => {
        gerenciador.alternarConclusao(tarefa.id);
        atualizarInterface();
      });

      const span = document.createElement('span');
      span.className = 'texto-tarefa';
      span.textContent = tarefa.texto;

      const botaoExcluir = document.createElement('button');
      botaoExcluir.className = 'botao-excluir';
      botaoExcluir.textContent = 'Excluir';
      botaoExcluir.addEventListener('click', () => {
        gerenciador.removerTarefa(tarefa.id);
        atualizarInterface();
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(botaoExcluir);
      listaTarefas.appendChild(li);
    });

    const stats = gerenciador.obterEstatisticas();
    estatisticas.textContent = `Total: ${stats.total} | Concluídas: ${stats.concluidas} | Pendentes: ${stats.pendentes}`;
  }

  // Inicializa a interface
  atualizarInterface();
});