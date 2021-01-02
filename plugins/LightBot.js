let { WAConnection: _WAConnection, MessageType } = require('@adiwajshing/baileys')
let WAConnection = require('../lib/simple').WAConnection(_WAConnection)
let qrcode = require('qrcode')

if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []

let handler  = async (m, { conn, args, usedPrefix }) => {
  if (global.conn.user.jid == conn.user.jid) {
    let id = global.conns.length
    let conn = new WAConnection()
    if (args[0] && args[0].length > 400) conn.loadAuthInfo(JSON.parse(Buffer.from(args[0], 'base64').toString()))
    conn.on('qr', async qr => {
      global.conn.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', 'Leia este QR para se tornar um bot temporário\n\n1. Clique no ponto no canto superior direito\n2. Toque em WhatsApp Web\n3. Leia este QR \nQR expirou em 20 segundos',m)
    })
    conn.once('connection-validated', user => global.conn.reply(m.chat, 'Conectado com sucesso ao seu WhatsApp.\n*NOTE: se meu bot morrer, seu bot também.*\n' + JSON.stringify(user, null, 2), m))
    conn.once('credentials-updated', () => global.conn.sendMessage(conn.user.jid, `Mais tarde, se você quiser fazer login novamente\n*${usedPrefix + command} ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}*`, MessageType.text))
    conn.on('message-new', global.conn.handler)
    conn.regenerateQRIntervalMs = null
    conn.connect()
    setTimeout(() => {
      if (conn.user) return
      conn.close()
      delete global.conns[id]
      global.conns.splice(id, 1)
    }, 60000)
    global.conns.push(conn)
  } else conn.reply(m.chat, 'Não é possível criar bots dentro de bots!', m)
}
handler.command = /^LightBot$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

