window.onload = function () {
    const buttons = document.querySelectorAll('button');
    const mensagemDiv = document.getElementById('mensagem');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const dia = this.getAttribute('data-dia');
            let mensagem = '';

            switch(dia) {
                case 'segunda':
                    mensagem = 'Dia de começar a semana com energia!';
                    break;
                case 'terça':
                    mensagem = 'Hora de aprender coisas novas';
                    break;
                case 'quarta':
                    mensagem = 'Metade da semana, continue firme!';
                    break;
                case 'quinta':
                    mensagem = 'Quase lá um pouco mais de esforço';
                    break;
                case 'sexta':
                    mensagem = 'Dia de comemorar, o fim de semana está chegando!';
                    break;
                default:
                    mensagem = 'Final de semana! Descanse e divirta-se';
            }

            mensagemDiv.textContent = mensagem;
        });
    });
}
