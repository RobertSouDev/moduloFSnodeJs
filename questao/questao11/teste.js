const fs = require("fs")

fs.readFile('dado.txt', "utf8", function(err, data){
    if(err){
        console.log("Erro")
    } 
    
    let linha = data.split(';')

    let numeroLinhas = linha.length

    console.log(numeroLinhas - 1)
})