//  1. Contador de Cliques 
let contador = 0;
const btnIncrementar = document.getElementById('btn-incrementar');
const btnDecrementar = document.getElementById('btn-decrementar');
const valorContador = document.getElementById('valor-contador');

// Botão que incrementa e exibe o número ao lado 
btnIncrementar.addEventListener('click', () => {
    contador++;
    valorContador.textContent = contador;
});

// Botão que decrementa, sem permitir valores negativos 
btnDecrementar.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        valorContador.textContent = contador;
    } else {
        // Alerta informando que já está em zero 
        alert("O contador já está em zero!");
    }
});

//  2. Adicionar Texto Dinâmico & 3. Contador de Caracteres 
const campoTexto = document.getElementById('campo-texto');
const contagemCaracteres = document.getElementById('contagem-caracteres');
const areaParagrafos = document.getElementById('area-paragrafos');

// Mostra o número de caracteres em tempo real, sem incluir espaços 
campoTexto.addEventListener('input', () => {
    const textoSemEspacos = campoTexto.value.replace(/\s/g, '');
    contagemCaracteres.textContent = textoSemEspacos.length;
});

// Adiciona um novo parágrafo ao pressionar a tecla "Enter" 
campoTexto.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter' && campoTexto.value.trim() !== '') {
        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = campoTexto.value;
        areaParagrafos.appendChild(novoParagrafo);
        
        // Limpa o campo após adicionar
        campoTexto.value = ''; 
        contagemCaracteres.textContent = '0';
    }
});

//  4. Adicionar Novo Item (Listas) 
const tipoLista = document.getElementById('tipo-lista');
const textoItem = document.getElementById('texto-item');
const btnAdicionarItem = document.getElementById('btn-adicionar-item');
const areaListas = document.getElementById('area-listas');

// Botão que adiciona novos itens escolhendo o tipo de lista (ordenada ou não)
btnAdicionarItem.addEventListener('click', () => {
    if (textoItem.value.trim() === '') return;

    const tagLista = tipoLista.value; // Pega 'ul' ou 'ol' do select
    
    // Verifica se já existe uma lista na área para não recriar do zero a cada clique
    let listaAtual = areaListas.querySelector(tagLista);
    if (!listaAtual) {
        listaAtual = document.createElement(tagLista);
        areaListas.appendChild(listaAtual);
    }

    const novoItem = document.createElement('li');
    novoItem.textContent = textoItem.value;
    listaAtual.appendChild(novoItem);
    
    textoItem.value = ''; 
});

//  5. Botão de Reset 
const btnReset = document.getElementById('btn-reset');

// Limpa todas as interações, zerando contadores e removendo parágrafos e listas 
btnReset.addEventListener('click', () => {
    contador = 0;
    valorContador.textContent = contador;
    
    areaParagrafos.innerHTML = '';
    areaListas.innerHTML = '';
    
    campoTexto.value = '';
    textoItem.value = '';
    contagemCaracteres.textContent = '0';
});
