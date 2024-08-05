const prompt = require("promp-sync")();

const db = [];

let ultimoId = 0;

function atualizar() {
    if (listar()) 
        const id = prompt ("digite o ID: ")

        const indice = db.findIndex(el => el.id == id)

        if (indice !== -1) {
                return id = ("digite o id")
            if (novo) {
                db[indice] = novo;
                console.log("Atualizado com sucesso");
                
            }else{
                console.log("ID inesistente");
            }
            
        }
    }

function chamarIndex() {
    
}

function model(id= ++ultimoId) {
    const nome = prompt("digite o nome ")
    
    if (nome !=="") {
        return {
            id,
            nome
            

        }
    }
    console.log("dados invalidos");
}


function criar() {
    const novo = model();

    console.log("registro realixado com sucesso ");
}

function listar() {
    if (db.length == 0) {
        console.log("nao consta nenhum registro");
        return false
    }

    db.forEach(el => console.log(el))
    return true

}

    function atualizar() {
        if (listar()) {
            const id = prompt ("digite o ID: ")

            const indice = db.findIndex(el => el.id == id)

            if (indice !== -1) {
                const novo = model(id)

                if (novo) {
                    db[indice] = novo;
                    console.log("Atualizado com sucesso");
                    
                }else{
                    console.log("ID inesistente");
                }
                
            }
            
            function remover() {
                if (listar()) {
                    const id = prompt("digite o id ")
                    

                }
            }
            
        }
    }


