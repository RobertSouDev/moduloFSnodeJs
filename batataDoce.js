const fs = require("fs")

let data = ""

fs.writeFile('teste.txt', data, function (err){
    if(err){
        console.log(`Deu um erro muito louco  ${err}`)
    }else {
        console.log("Arquivo criado com sucesso")
    }
})