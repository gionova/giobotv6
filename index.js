const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WAMessageProto,
    ReconnectMode,
    ProxyAgent,
    ChatModification,
    GroupSettingChange,
    WA_MESSAGE_STUB_TYPES,
    WA_DEAFULT_EPHEMERAL,
    waChatKey,
    mentionedJid,
    processTime,
    prepareMessageFromContent,
    relayWAMessage
} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const giie = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
//    const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const {
    color,
    bgcolor
} = require('./lib/color')
const {
    exec
} = require('child_process')
const {
    wait,
    simih,
    getBuffer,
    h2k,
    generateMessageID,
    getGroupAdmins,
    getRandom,
    banner,
    start,
    info,
    success,
    close
} = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

require('./giie.js')
nocache('./giie.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('./index.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('./message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

async function starts() {
    giie.autoReconnect = ReconnectMode.onConnectionLost
    giie.version = [2, 2147, 14]
    giie.logger.level = 'warn'
    giie.browserDescription = ['Gio', 'Chrome', '3.0']
    await sleep(10000)
    giie.on('qr', qr => {
        qrcode.generate(qr, {
            small: true
        })
        console.log(color('<<giie>>'), color('Scan this QR code', 'cyan'))
    })
    fs.existsSync('./QRnya.json') && giie.loadAuthInfo('./QRnya.json')

    giie.on('credentials-updated', () => {
        console.log(color('<<giie>>'), color('credentials updated!', 'cyan'))
    })

    await giie.connect({
        timeoutMs: 30 * 1000
    });
    fs.writeFileSync("./QRnya.json", JSON.stringify(giie.base64EncodedAuthInfo(), null, "\t"));
    //teks = `https://chat.whatsapp.com/Kw69Oel34Nd0JuluvFNVKt`
    // giie.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
    console.log(color('<<giie>>', 'yellow'), color('Follow My Instagram By Creator : @giiexsala', 'cyan'))
    //giie.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Hai Owner ${settings.NamaBot}, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(giie.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Bitch Boot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./thub.jpg'),sourceUrl:"https://wa.me/6289654560615?text=Assalamualaikum"}}})
    //console.log(color('<<giie>>', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
    //fetch(`http://ip-api.com/line`).then(res => res.text())  
    //.then(bu =>{
    //giie.sendMessage("6289654560615@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Ayoginiomz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./thub.jpg'),sourceUrl:"https://wa.me/6289654560615?text=Assalamualaikum"}}})
    // console.log(color('<<giie>>', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
    // })

    giie.on('connecting', () => {
        console.log(color('<<giie>>'), color('Developer Ayogi Sedang Menyambungkan...', 'cyan'))
    })

    giie.on('open', () => {
        console.log(color('<<giie>>'), color('Scripts Berhasil Terpasang Pada Whatsapp Status: Connected', 'cyan'))
    })

    giie.on('ws-close', () => {
        console.log(color('<<giie>>'), color('Connection lost, trying to reconnect.', 'cyan'))
    })

    giie.on('close', async () => {
        console.log(color('<<giie>>'), color('Disconnected.', 'cyan'))
    })

    if (!settings.autoplaymusic) {
        exec(`cd /storage/download && play *mp3`)
    }

    giie.on('chat-update', async (mek) => {
        require('./giie.js')(giie, mek)
        ownerNumber = ["6289654560615@s.whatsapp.net", `${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6289654560615@s.whatsapp.net"
        otod = `${settings.NomorOwner}@s.whatsapp.net`
    })
    giie.on('group-participants-update', async (anu) => {
        await welcome(giie, anu)
    })
    giie.on('group-update', async (anu) => {
        const metdata = await giie.groupMetadata(anu.jid)
        const fkontakk = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(anu.jid ? {
                    remoteJid: '6289654560615-1604595598@g.us'
                } : {})
            },
            message: {
                "contactMessage": {
                    "displayName": `${metdata.subject}`,
                    "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:2;giie;;;\nFN:giie\nitem1.TEL;waid=6289654560615:6289654560615\nitem1.X-ABLabel:Mobile\nEND:VCARD`
                }
            }
        }
        if (anu.announce == 'false') {
            teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
            giie.sendMessage(metdata.id, teks, MessageType.text, {
                quoted: fkontakk
            })
            console.log(color('<<giie>>'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
        } else if (anu.announce == 'true') {
            teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
            giie.sendMessage(metdata.id, teks, MessageType.text, {
                quoted: fkontakk
            })
            console.log(color('<<giie>>'), color(`Group Closed In ${metdata.subject}`, 'cyan'))
        } else if (!anu.desc == '') {
            tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
            teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
            giie.sendMessage(metdata.id, teks, MessageType.text, {
                contextInfo: {
                    "mentionedJid": [tag]
                },
                quoted: fkontakk
            })
            console.log(color('<<giie>>'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
        } else if (anu.restrict == 'false') {
            teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
            giie.sendMessage(metdata.id, teks, MessageType.text, {
                quoted: fkontakk
            })
            console.log(color('<<giie>>'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
        } else if (anu.restrict == 'true') {
            teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
            giie.sendMessage(metdata.id, teks, MessageType.text, {
                quoted: fkontakk
            })
            console.log(color('<<giie>>'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
        }
    })

    giie.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        console.log(callerId)
        let v = giie.contacts[callerId] || {
            notify: callerId.replace(/@.+/, '')
        }
        try {
            pp_user = await giie.getProfilePicture(callerId)
        } catch (e) {
            pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        ofrply = await getBuffer(pp_user)
        anu_user = v.vname || v.notify || callerId.split('@')[0]
        time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
        fgi = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(callerId ? {
                    remoteJid: "6289654560615-1635442668@g.us"
                } : {})
            },
            message: {
                "videoMessage": {
                    "title": `${anu_user}, ${time_wel}`,
                    "h": `${anu_user}, ${time_wel}`,
                    'duration': '1',
                    'gifPlayback': 'true',
                    'caption': `${anu_user}, ${time_wel}`,
                    'jpegThumbnail': ofrply
                }
            }
        }
        teks = `*_Hai ${anu_user}_* \n_I'm sorry I'm echa exsala at this time I can't receive your call at this time_ \n_silahkan hubungi lagi echa nanti ya_\nTerima Kasih 😜`
        buff = await getBuffer(`https://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${time_wel}&memcount='Not'&gcname='my contact'&pp=${pp_user}&bg=https://i.ibb.co/kyv91Nt/1091099.jpg`)
        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=Please! Call Me Later  ${anu_user}`)
        buttons = [{
            buttonId: `command`,
            buttonText: {
                displayText: `Hai
aku ${anu_user}, kamu lagi sibuk ya ? aku cuma mau bilang kalau aku tuh selama ini memendam perasaan sama kamu 😔, jujur aku gak kuat jika harus dipendam ini semua sendirian 🙍‍♂️, ketika mata ini memandang raut wajahmu yang indah, hanya tiga kata yang terucap dari lubuk hatiku yang paling dalam, aku cinta kamu yogi 🥰,
Aku hanya manusia biasa yang memiliki banyak kekurangan dan mungkin tak pantas mengharapkan cintamu 😞. Namun, jika kamu bersedia menerimaku menjadi kekasih, aku berjanji akan melakukan apa pun yang terbaik untukmu. Maukah kamu menerima cintaku gi 🌹 ? `
            },
            type: 1
        }, {
            buttonId: `giie`,
            buttonText: {
                displayText: 'Hubungi Saya'
            },
            type: 1
        }]
        imageMsg = (await giie.prepareMessageMedia((buff), 'imageMessage', {
            thumbnail: buff
        })).imageMessage
        buttonsMessage = {
            contentText: `${teks}`,
            footerText: '_Developer by:_ *_Ayogi Akbar_*',
            imageMessage: imageMsg,
            buttons: buttons,
            headerType: 4
        }
        prep = await giie.prepareMessageFromContent(callerId, {
            buttonsMessage
        }, {
            quoted: fgi
        })
        giie.relayWAMessage(prep)
        giie.sendMessage(callerId, attp2, MessageType.sticker)

        //   await giie.blockUser(callerId, "add")
    })


    giie.on('message-delete', async (m) => {
        const antidelete = JSON.parse(fs.readFileSync('./database/antidelete.json'))
        const isAntidelete = antidelete.includes(m.key.remoteJid)
        if (!isAntidelete) return
        if (m.key.remoteJid == 'status@broadcast') return
        if (!m.key.fromMe) {
            m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
            if (!antidelete.includes(m.key.remoteJid)) return
            const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
            const fkontakk = {
                key: {
                    fromMe: false,
                    participant: `0@s.whatsapp.net`,
                    ...(m.key.remoteJid ? {
                        remoteJid: '6289654560615-1604595598@g.us'
                    } : {})
                },
                message: {
                    "contactMessage": {
                        "displayName": `Developerby:giie`,
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:2;giie;;;\nFN:giie\nitem1.TEL;waid=6289654560615:6289654560615\nitem1.X-ABLabel:Mobile\nEND:VCARD`
                    }
                }
            }
            let d = new Date
            let c = giie.chats.get(m.key.remoteJid)
            let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
            let co3ntent = giie.generateForwardMessageContent(a, false)
            let c3type = Object.keys(co3ntent)[0]
            let locale = 'id'
            let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
            let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
            let week = d.toLocaleDateString(locale, {
                weekday: 'long'
            })
            let calender = d.toLocaleDateString(locale, {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            giie.copyNForward(m.key.remoteJid, m.message)
            giie.sendMessage(m.key.remoteJid, `► _Delete Message Detected !_

╭ *Dari*: @${m.participant.split("@")[0]}
├ *Type*: ${c3type}
├ *Time*: ${jam}
╰ *Date*: ${week} - ${calender}`, MessageType.text, {
                quoted: fkontakk,
                contextInfo: {
                    "mentionedJid": [m.participant]
                }
            })
        }
    })
}

console.clear()

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => {}) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()
