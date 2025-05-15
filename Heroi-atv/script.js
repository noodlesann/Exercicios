function obterNivel(nome, xp) {
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp > 10000) {
        nivel = "Radiante";
    }

    return nivel;
}

// Função chamada quando o botão é clicado
function classificarHeroi() {
    // Pega o nome e XP inseridos pelo usuário
    const nomeHeroi = document.getElementById("nome").value;
    const xpHeroi = parseInt(document.getElementById("xp").value);

    // Verifica se os valores inseridos são válidos
    if (nomeHeroi && !isNaN(xpHeroi) && xpHeroi >= 0) {
        // Obtém o nível do herói usando a função obterNivel
        const nivel = obterNivel(nomeHeroi, xpHeroi);

        // Exibe a mensagem no elemento com id "resultado"
        document.getElementById("resultado").textContent = `Seu herói ${nomeHeroi} está no nível de ${nivel}.`;
    } else {
        // Caso os campos não estejam válidos, exibe uma mensagem de erro
        document.getElementById("resultado").textContent = 'Por favor, preencha o nome e o XP corretamente.';
    }
}
