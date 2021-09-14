
const frutas =['banana', 'maçã', 'pera']
const salgados =['coxinha', 'kibe ', ]
const alimentos = frutas.concat(salgados)

frutas.pop()
frutas.push("goiaba")
frutas.splice(0, 0, "melancia")
frutas.unshift('laranja')
frutas.slice(0, 3)
console.log(frutas);
console.log(alimentos)
salgados.forEach((salgados,index) => console.log(index, salgados))
