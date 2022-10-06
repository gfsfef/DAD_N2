let lSeara = document.getElementById('lista-seara')
let lSwift = document.getElementById('lista-swift')
let lFriboi = document.getElementById('lista-friboi')

let obj = {
    produto: document.getElementById("name"),
    codigo: document.getElementById("number"),
    preco: document.getElementById("preco")
}   

function addProduto () {
    if(document.getElementById("number").value != document.getElementById(document.getElementById("number").value)){
    if(document.getElementById("marca").value === "Swift"){
        let liSwift = document.createElement(`li`)
        liSwift.setAttribute("id", `${obj.codigo.value}`)
        let conteudoSwift = document.createTextNode(`Produto: ${obj.produto.value} Codigo: ${obj.codigo.value} ${obj.preco.value}`)
        liSwift.appendChild(conteudoSwift)
        lSwift.appendChild(liSwift)
        console.log(lSwift)
    }else if(document.getElementById("marca").value === "Seara"){
        let liSeara = document.createElement("li")
        liSeara.setAttribute("id", `${obj.codigo.value}`)
        let conteudoSeara = document.createTextNode(`Produto: ${obj.produto.value} Codigo: ${obj.codigo.value} ${obj.preco.value}`)
        liSeara.appendChild(conteudoSeara)
        lSeara.appendChild(liSeara)
        console.log(lSeara)
    }else if(document.getElementById("marca").value === "Friboi"){
        let liFriboi = document.createElement("li")
        liFriboi.setAttribute("id", `${obj.codigo.value}`)
        let conteudoFriboi = document.createTextNode(`Produto: ${obj.produto.value} Codigo: ${obj.codigo.value} ${obj.preco.value}`)
        liFriboi.appendChild(conteudoFriboi)
        lFriboi.appendChild(liFriboi)
        console.log(lFriboi)
    }
}
}

function removeProduto () {
    let valor = document.getElementById("codigo_remover")
        document.getElementById(`${valor.value}`).remove()
        console.log
}