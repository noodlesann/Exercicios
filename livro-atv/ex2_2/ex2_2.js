//cria referência ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria um "ouvinte" no evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value   //ontém conteúdo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) //arredonda o resultado para baixo
    const minutos = duracao % 60 // obtém o resto da divisão

    resp1.innerText = titulo // exibe as respostas
    resp2.innerText = `${horas} horas(s) e ${minutos} minuto(s)`

    e.preventDefault() // evita envio do form

})


// Para converter a duração em horas e minutos, foi utilizada a função
// Math.floor() e o operador módulo %.
// Math.floor arredonda um valor para baixo e % retorna o resto da divisão
// entre dois números. Eles são necessários nesse programa. Vamos usar os
// dados de entrada do exemplo: 108 / 60 resulta em 1.8; Math.floor(1.8)
// retorna 1, que é o número de horas do lme. Para obter os minutos,
// usamos 108 % 60, que resulta em 48, que são os minutos restantes da
// duração. Insira dados de outros lmes e observe os valores de retorno.
