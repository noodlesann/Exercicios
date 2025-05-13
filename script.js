window.onload = functionc() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(){
            const dia = this.getAttribute('data-dia');

            switch(dia) {
                case 'segunda':
                    alert('Dia de começar a semana com energia!');
                    break;
                case 'terça':
                    alert('Hora de aprender coisas novas');
                    break;
                case 'quarta':
                    alert('Metade da semana, continue firme!');
                    break;
                case 'quinta':
                    alert('Quase lá um pouco mais de esforço');
                    break;
                case 'sexta':
                    alert('Dia de comemorar, o fim de semana está chegando!');
                    break;
                default:
                    alert('Final de semana! Descanse e divirta-se');
                    
            }
        });
    });
}