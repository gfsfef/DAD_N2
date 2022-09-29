//document.getElementById("marca").value

let lSeara = document.getElementById('lista-seara')
let lSwift = document.getElementById('lista-swift')
let lFriboi = document.getElementById('lista-friboi')

let obj = {
    produto: document.getElementById("name"),
    codigo: document.getElementById("number"),
    preco: document.getElementById("preco")
}   

function addProduto () {
    if(document.getElementById("marca").value === "Swift"){
        let liSwift = document.createElement("li")
        let conteudoSwift = document.createTextNode(`Produto: ${obj.produto.value} Codigo: ${obj.codigo.value} ${obj.preco.value}`)
        liSwift.appendChild(conteudoSwift)
        lSwift.appendChild(liSwift)
        console.log(lSwift)
    }else if(document.getElementById("marca").value === "Seara"){
        let liSeara = document.createElement("li")
        let conteudoSeara = document.createTextNode(`Produto: ${obj.produto.value} Codigo: ${obj.codigo.value} ${obj.preco.value}`)
        liSeara.appendChild(conteudoSeara)
        lSeara.appendChild(liSeara)
        console.log(lSeara)
    }else{
        let liFriboi = document.createElement("li")
        let conteudoFriboi = document.createTextNode(`Produto: ${obj.produto.value} Codigo: ${obj.codigo.value} ${obj.preco.value}`)
        liFriboi.appendChild(conteudoFriboi)
        console.log(lFriboi)
    }
}

function removeProduto () {
    if(document.getElementById("codigo_remover").value === obj.codigo.value){
        let e = lSwift.querySelectorAll(obj.codigo.value)
        console.log(e)
    }
}