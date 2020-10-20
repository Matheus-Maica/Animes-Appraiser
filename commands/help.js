module.exports = {
    execute: message => {
        message.channel.send(`Avaliador de animes profissional, 200% efetivo, *nunca erra*, pra saber se um anime é bom digite: ${process.env.prefix}appraise <nome_do_anime>, <Gênero>, <Nota_em_site_especializado>`)
    }
}