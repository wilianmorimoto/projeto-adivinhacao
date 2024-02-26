const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "Ao meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

let resposta = document.getElementById('resposta')
let btn = document.getElementById('btn')

function fazerPergunta() {
    if (pergunta.value == '') {
        alert('Digite sua pergunta!')
    } else {
        btn.setAttribute('disabled', true)

        const totalRespostas = respostas.length
        const numAleatorio = Math.floor(Math.random() * totalRespostas)
        let pergunta = document.getElementById('pergunta')

        resposta.innerHTML = `<div>${pergunta.value}</div>${respostas[numAleatorio]}`
        pergunta.value = ''
        pergunta.focus()
        
        resposta.style.opacity = 1
        setTimeout(function() {
            resposta.style.opacity = 0
            btn.removeAttribute('disabled')
        }, 3000)
    }
}