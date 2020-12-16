import { camelCase } from './web_modules/change-case.js'

const myString = 'Hello Snowpack Demo!'

document.getElementById('root-div').innerText = camelCase(myString)
