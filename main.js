const form = document.getElementById('form-number');
let formEvalido = false;

function maiorQue(numero1,numero2) {
    return numero2 > numero1
} 

form.addEventListener('submit', function(e){
    e.preventDefault();

    const primeiroCampo = document.getElementById('numero-A');
    const segundoCampo = document.getElementById('numero-B');
    const menssagemSucesso = `Muito bom está correto! <b>${primeiroCampo.value}</b> é maior que o  <b>${segundoCampo.value}</b>`; 
    const menssagemErro = `Que pena mas o  <b>${primeiroCampo.value}</b> é menor que o <b>${segundoCampo.value}</b>`; 

    formEvalido = maiorQue(primeiroCampo.value,segundoCampo.value)
    if (formEvalido) {
        const containerMensagemSucesso = document.querySelector('.return-message');
        containerMensagemSucesso.innerHTML =  menssagemSucesso;
        containerMensagemSucesso.style.backgroundColor = 'green';
        containerMensagemSucesso.style.display =  'block';

        primeiroCampo.value = '';
        segundoCampo.value = '';
        

    } else {
        const containerMensagemSucesso = document.querySelector('.return-message');
        containerMensagemSucesso.innerHTML =  menssagemErro;
        containerMensagemSucesso.style.backgroundColor = 'red';
        containerMensagemSucesso.style.display =  'block';

        primeiroCampo.value = '';
        segundoCampo.value = '';
    }
})

// nomeBeneficiario.addEventListener('keyup', function(e) {
//     console.log(e.target.value);
//     formEvalido = validaNome(e.target.value);


// if (!formEvalido) {
//     nomeBeneficiario.classList.add('error');
//     //nomeBeneficiario.style.border = '1px solid red';
//     document.querySelector('.error-message').style.display =  'block';
//     } else {
//         nomeBeneficiario.classList.remove('error');
//         document.querySelector('.error-message').style.display =  'none';
//     }

// })