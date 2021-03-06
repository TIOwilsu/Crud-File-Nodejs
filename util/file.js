const path = require('path')
const fs = require('fs')
const { toJson } = require('../util/string')

const getPath = (file, bar = '/') => {
    return path.join(__dirname, bar, file)
}

const hasFile = (filePath) => {
    return fs.existsSync(filePath)
}

const hasContent = (filePath) => {
    try{
        const content = fs.readFileSync(filePath, { encoding: 'utf8' })
        if(content) return true
        else return false
    }
    catch(err) {
        console.log(chalk.bold.red('Não foi possivel encontrar o arquivo!'))
        return false
    }
}

const read = (filePath) => {
    try{
        return fs.readFileSync(filePath, { encoding: 'utf8' })
    }
    catch(err){
        console.log(chalk.bold.red('Não foi possivel encontrar o arquivo!'))
    }
}

const syncFile = (file, data) => {
    try{
        const str = JSON.stringify(data)
        const content = toJson(str)
        fs.writeFileSync(file, content)
    }
    catch(err){
        console.log(chalk.bold.red('Não foi possivel sincronizar o arquivo!'))
    }
    
}   

module.exports = {
    getPath,
    hasFile,
    hasContent,
    read,
    syncFile
}