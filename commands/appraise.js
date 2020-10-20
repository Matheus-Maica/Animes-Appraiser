const api = require("../services/api")

const URL = query => `anime?q=${query}&limit=2`

const calcNota = (nome, genero, nota, pergunta) => {
    const tamanhoNome = nome.split(" ").length
    const tresPalavras = tamanhoNome > 3 ? 0 : 1;
    const generoExp = /(isekai)|(ecchi)|(mecha)/
    const generoMerda = generoExp.test(genero) ? 0 : 1;
    let exp = /^\.?:?$/
    const abreviacao = tamanhoNome === 4 ? (exp.test(nome) ? 1 : 0) : (tamanhoNome > 4 ? 0 : 1)
    
    const nomeGiga = tamanhoNome > 3 && !abreviacao ? (Math.pow((tamanhoNome - 3), -1) === 1 ? 0.5 : Math.pow((tamanhoNome - 3), -1)) : 1;

    console.log(tresPalavras,generoMerda,abreviacao,nota,pergunta,nomeGiga)
    return ((tresPalavras*0.3+generoMerda*0.9+abreviacao*0.3+(nota/10)*0.8+pergunta*0.9+nomeGiga*0.9)/4.1)
}


module.exports = {
    default: message => message.channel.send(`${process.env.prefix}appraise <anime_name>`),
    execute: async message => {
        let content = message.content.split(`${process.env.prefix}appraise `)[1];
        let nome = content.split(",")[0];
        let genero = content.split(",")[1];
        let nota = parseInt(content.split(",")[2]);
        let pergunta = content.indexOf("?") === -1 ? 1 : 0;
        console.log(nome)

        let score = calcNota(nome, genero, nota, pergunta)


        return message.reply("nota: " + Math.round(score*100) + "/100");
    }
}