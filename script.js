let valorIdentidade = ''
let valorHeroi = ''
const textoPontuacao = 'PONTUAÇÃO:'
let pontuacaoContador = 0

function drag(event) {

    const el = event.target || event.srcElement;
    valorIdentidade = el.id;
    console.log( valorIdentidade )

    event.dataTransfer.setData('character_id', event.target.id)
}

function drop(event) {
    event.preventDefault()
    
    const el = event.target || event.srcElement;
    valorHeroi = el.id;
    console.log( valorHeroi )

    setPontuacao()
}

function setPontuacao(){

    if( valorHeroi == valorIdentidade ){
        pontuacaoContador++
        if(pontuacaoContador>=6){

            let div = document.getElementById('topo')
            let h4 = document.createElement('h4')
            h4.textContent = ' PARABÉNS, VOCÊ VENCEU!'

            div.appendChild(h4)
        }

        pontuacao.textContent = textoPontuacao + ' ' + pontuacaoContador + '/6'

        valorHeroi = ''
        valorIdentidade = ''
    }    
}

function allowDrop(ev) {
    ev.preventDefault()
}