let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

Agradecimentos especiais para:_
Dev java Studios Gabriel

_Rec Bye:_
Dev Java Studios

Proprietário: wa.me//5511946817667

*🎥 YouTube:* 
https://youtube.com/channel/UCE7x81dLhF0BQSDLSqCUjBQ

*Instagram:*
https://Instagram.com/devjavastudios

➸ Prefixo:  *「 ${_p} 」*
➸ Status: *「 Conectado 」*

*「 COMANDO 」*
${_p}menu

*「 DIVERSÃO MENU 」*
${_p}qrcode <texto>
${_p}figurinha (foto)
${_p}bucin
${_p}ss (website)
*✨Entre no grupo do LightBot Para Saber Das novidades do bot!✨*

*「 GRUPO 」*
${_p}adicionar (Número)
${_p}ban @menção
${_p}promoveradm @menção
${_p}rebaixar @menção
${_p}link
${_p}anúncio <texto>
${_p}listaonline [groupoid]


*「  Experimental  」*
${_p}lightbot [código de login se houver / vazio]

*「 Avançado 」*
> return 'javascript eval ' + m.sender
`.trim(), m)
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

