// listas
let frutas = []
let laticinios = []
let congelados = []
let doce = []
let outros = []

// mensagens
const msg = "Você deseja adicionar algum intem na lista de compras?"
const msg2 = "Qual comida você deseja inserir?"
const msg3 = "Qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces ou outros)"
const msg4 = "Você gostaria de remover algum item?"
const msg5 = "De qual categoria você gostaria de remover"
const msg6 = "Qual item?"
const msg7 = "Não foi possível encontrar o item dentro da lista!"

for (i = 1; i !=0; i++){
    resposta1 = prompt(msg)
    if (resposta1 == "sim" || resposta1 == "Sim"){
        resposta2 = prompt(msg2)
        resposta3 = prompt(msg3)
        if (resposta3 == "frutas" || resposta3 == "Frutas"){
            let adicionar = frutas.push(resposta2)
        }
        else if (resposta3 == "laticínios" || resposta3 == "Laticínios" || resposta3 == "Laticinios" || resposta3 == "laticinios"){
            let adicionar = laticinios.push(resposta2)
        }
        else if (resposta3 == "Congelados" || resposta3 == "congelados"){
            let adicionar = congelados.push(resposta2)
        }
        else if (resposta3 == "Doces" || resposta3 == "doces"){
            let adicionar = doce.push(resposta2)
        }
        else if (resposta3 == "Outros" || resposta3 == "outros"){
            let adicionar = outros.push(resposta2)
        }

    }
    else{
        alert(` Fruta: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doce}\n Outros: ${outros}`)
        i = 0
        break
    }
}
for(i = 1; i != 0; i++){
    resposta4 = prompt(msg4)
    if (resposta4 == "sim" || resposta4 == "Sim"){
        let categoria = prompt(msg5)
        let elemento = prompt(msg6)
        
        if (categoria == "frutas" || categoria == "Frutas"){
            let index = frutas.indexOf(elemento)
            let itemDisponivel = frutas.includes(elemento)
            console.log(index, itemDisponivel)
            if (itemDisponivel){
                let remover = frutas.splice(index)
            }
            else{
                alert(msg7)
                continue
            }
            
        }
        else if (categoria == "laticínios" || categoria == "Laticínios" || categoria == "Laticinios" || categoria == "laticinios"){
            let index = laticinios.indexOf(elemento)
            let itemDisponivel = laticinios.includes(elemento)
            if (itemDisponivel){
                let remover = laticinios.splice(index)
            }
            else{
                alert(msg7)
                continue
            }            
        }
        else if (categoria == "Congelados" || categoria == "congelados"){
            let index = congelados.indexOf(elemento)
            let itemDisponivel = congelados.includes(elemento)
            if (itemDisponivel){
                let remover = congelados.splice(index)
            }
            else{
                alert(msg7)
                continue
            }
        }
        else if (categoria == "Doces" || categoria == "doces"){
            let index = doce.indexOf(elemento)
            let itemDisponivel = doce.includes(elemento)
            if (itemDisponivel){
                let remover = doce.splice(index)
            }
            else{
                alert(msg7)
                continue
            }
        }
        else if (categoria == "Outros" || categoria == "outros"){
            let index = outros.indexOf(elemento)
            let itemDisponivel = outros.includes(elemento)
            if (itemDisponivel){
                let remover = outros.splice(index)
            }
            else{
                alert(msg7)
                continue
            }
        }
        }
    else{
        alert(` Fruta: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doce}\n Outros: ${outros}`)
        break
    }
    
}
