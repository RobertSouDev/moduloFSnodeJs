### fs.readFile

```js
const fs = require('fs')
fs.readFile('teste.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
```
### fs.writeFile escrever so que sobrescrever

```js
const fs = require("fs")

let data = "questao 01"

fs.writeFile('teste.txt', data, function (err){
    if(err){
        console.log(`Deu um erro muito louco  ${err}`)
    }else {
        console.log("Arquivo criado com sucesso")
    }
})
```
### fs.mkdir criar pastas e subs pastas
``` js
const fs = require("fs")

fs.mkdir('src/test1', {recursive:true}, function (err) {
    if (err) {
        console.log(`Deu um erro muito louco ${err}`)
    } else {
        console.log("Pasta criada com sucesso")
    }
});

fs.mkdir('src/test5', {recursive:true}, function (err) {
    if (err) {
        console.log(`Deu um erro muito louco ${err}`)
    } else {
        console.log("Pasta criada com sucesso")
    }
});

fs.mkdir('src/test3', {recursive:true}, function (err) {
    if (err) {
        console.log(`Deu um erro muito louco ${err}`)
    } else {
        console.log("Pasta criada com sucesso")
    }
});

fs.mkdir('src/test4', {recursive:true}, function (err) {
    if (err) {
        console.log(`Deu um erro muito louco ${err}`)
    } else {
        console.log("Pasta criada com sucesso")
    }
});
```

### fs.appendFile escrever so que sem sobrescrever
``` js
const fs = require("fs")

let data = "\n Junin da goma          junin@gmail.com             2342342432"

fs.appendFile('log.txt', data, function (err) {
    if(err){
        console.log(`Deu um eroo muito louco ${err}`)
    } else {
        console.log("Texto escrito com sucesso")
    }
})
```

### fs.unlink deleta um arquivo
```js
const fs = require("fs")

fs.unlink('log.txt',  function (err) {
    if(err){
        console.log(`Deu um erro muito louco ${err}`)
    } else {
        console.log("Arquivo removido com sucesso")
    }
})
```

### fs.rm remove pastas

```js 

const fs = require("fs")

fs.rm('teste', {recursive:true}, function (err) {
    if(err){
        console.log(`Deu um erro muito louco ${err}`)
    } else {
        console.log("Pasta removido com sucesso")
    }
})
```

### fs.writeFile criar um arquivo

```js
const fs = require("fs")

let data = ""

fs.writeFile('teste.txt', data, function (err){
    if(err){
        console.log(`Deu um erro muito louco  ${err}`)
    }else {
        console.log("Arquivo criado com sucesso")
    }
})
```

