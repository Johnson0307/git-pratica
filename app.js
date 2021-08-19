const path = require('fs')
const path = require('path'),
Helpers = require('./Helpers')
const dataPath = path.join(__dirname, 'data.txt')
let data = Helpers.readData(dataPath)
let newData = `${data}\nJa to pegando os paranaues =)`
Helpers.writeData(dataPath, newData)
   
console.log(dHelpers.readData(dataPath))
/* const fs = require('fs'),
  path = require('path')

const dataPath = path.join(__dirname, 'data.txt'),
datacharset = 'utf8'
let data = fs.readFileSync(path.join(dataPath, datacharset),
'utf8')
 console.log(data)

 let newDate = `{data}\nja to pegando o Jeito! =)`
 fs.writeFileSync(path.join, newDate, datacharset) */

 

/* const moment = require('moment')
 */
// dia atual da semana
/* console.log(moment().format('dddd')) 

// Mes, Dia, Ano, Hora, Minutos, Segundos, am/pm
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

//Diferença entre hoje e o natal 2035 - 20351225
const diferençaNatal2035 = moment('20351225', 'YYYYMMDD').fromNow()
console.log(diferençaNatal2035)

//Diferença entre hoje e o natal 2035 - 20351225
const diferençaNatal2005 = moment('20051225', 'YYYYMMDD').fromNow()
// console.log(`O Natal de 2005 acorreu há ${diferençaNatal2005}`) */

// lembrar que sempre é bom ler a documentação para entender alguns detalhes no node
 */ */
