function _0x1686(_0x168408,_0x1a0de3){const _0x56ddbf=_0x56dd();return _0x1686=function(_0x1686ec,_0x139f48){_0x1686ec=_0x1686ec-0x187;let _0x506dab=_0x56ddbf[_0x1686ec];return _0x506dab;},_0x1686(_0x168408,_0x1a0de3);}const _0xafd62d=_0x1686;(function(_0x2b5272,_0x10fa42){const _0x1a2f66=_0x1686,_0x346dd9=_0x2b5272();while(!![]){try{const _0x2e826d=-parseInt(_0x1a2f66(0x20a))/0x1*(-parseInt(_0x1a2f66(0x200))/0x2)+parseInt(_0x1a2f66(0x1b2))/0x3+-parseInt(_0x1a2f66(0x1ee))/0x4*(parseInt(_0x1a2f66(0x1f7))/0x5)+parseInt(_0x1a2f66(0x1a0))/0x6*(parseInt(_0x1a2f66(0x1ac))/0x7)+parseInt(_0x1a2f66(0x1a5))/0x8*(parseInt(_0x1a2f66(0x215))/0x9)+-parseInt(_0x1a2f66(0x1e9))/0xa*(-parseInt(_0x1a2f66(0x1fb))/0xb)+-parseInt(_0x1a2f66(0x21f))/0xc*(parseInt(_0x1a2f66(0x1d4))/0xd);if(_0x2e826d===_0x10fa42)break;else _0x346dd9['push'](_0x346dd9['shift']());}catch(_0x3d47a9){_0x346dd9['push'](_0x346dd9['shift']());}}}(_0x56dd,0x9cce0));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require(_0xafd62d(0x1cd)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0xafd62d(0x216)),fs=require('fs'),P=require(_0xafd62d(0x1b6)),config=require(_0xafd62d(0x1b8)),qrcode=require('qrcode-terminal'),util=require(_0xafd62d(0x218)),{sms,downloadMediaMessage}=require('./DATABASE/msg'),axios=require('axios'),{File}=require(_0xafd62d(0x20c)),prefix=config[_0xafd62d(0x220)],path=require('path'),asciiArt='',ownerNumber=[_0xafd62d(0x1f8)];if(!fs[_0xafd62d(0x201)](__dirname+'/Session/creds.json')){if(!config[_0xafd62d(0x1b7)])return console[_0xafd62d(0x1a1)](_0xafd62d(0x1c3));const sessdata=config['SESSION_ID'],filer=File[_0xafd62d(0x20b)]('https://mega.nz/file/'+sessdata);filer['download']((_0x37be4b,_0x2987de)=>{const _0x217ff0=_0xafd62d;if(_0x37be4b)throw _0x37be4b;fs['writeFile'](__dirname+_0x217ff0(0x1fa),_0x2987de,()=>{const _0x3deedf=_0x217ff0;console[_0x3deedf(0x1a1)]('✅\x20MALVIN-MD\x20-\x20Session\x20Downloading...');});});}const express=require(_0xafd62d(0x1cb)),app=express(),port=process['env'][_0xafd62d(0x1d1)]||0x1f40;async function connectToWA(){const _0x10d92c=_0xafd62d;console['log'](asciiArt),console[_0x10d92c(0x1a1)](_0x10d92c(0x189));const {state:_0x5e6aa0,saveCreds:_0x5367e5}=await useMultiFileAuthState(__dirname+_0x10d92c(0x203));var {version:_0xf2af92}=await fetchLatestBaileysVersion();const _0x2cf890=makeWASocket({'logger':P({'level':'silent'}),'printQRInTerminal':![],'browser':Browsers[_0x10d92c(0x1f1)](_0x10d92c(0x1be)),'syncFullHistory':!![],'auth':_0x5e6aa0,'version':_0xf2af92});_0x2cf890['ev']['on'](_0x10d92c(0x190),_0x3975c=>{const _0x589c76=_0x10d92c,{connection:_0x4ea3e3,lastDisconnect:_0x809db0}=_0x3975c;if(_0x4ea3e3===_0x589c76(0x1db))_0x809db0[_0x589c76(0x1cf)]['output'][_0x589c76(0x1e5)]!==DisconnectReason[_0x589c76(0x1bc)]&&connectToWA();else{if(_0x4ea3e3==='open'){console['log'](_0x589c76(0x206)),console[_0x589c76(0x1a1)]('✅\x20MALVIN-MD\x20-\x20Plugin\x20Install\x20Completed...'),console[_0x589c76(0x1a1)]('✅\x20MALVIN-MD\x20-\x20MALVIN-MD\x20Sucessfull\x20Conected\x20Your\x20Device...');const _0x13a126=require(_0x589c76(0x209));fs[_0x589c76(0x188)](_0x589c76(0x1a3))[_0x589c76(0x19f)](_0x68b4b0=>{const _0xde982c=_0x589c76;_0x13a126[_0xde982c(0x1e3)](_0x68b4b0)[_0xde982c(0x1fc)]()==_0xde982c(0x193)&&require(_0xde982c(0x1a3)+_0x68b4b0);});let _0x2fc987=config[_0x589c76(0x1c8)];const _0x130027=_0x589c76(0x1ab);_0x2cf890['groupAcceptInvite'](_0x130027),_0x2cf890[_0x589c76(0x21e)](ownerNumber+_0x589c76(0x18b),{'image':{'url':_0x589c76(0x208)},'caption':_0x2fc987}),config[_0x589c76(0x214)]==='true'&&_0x2cf890[_0x589c76(0x1eb)](_0x589c76(0x191));}}}),_0x2cf890['ev']['on'](_0x10d92c(0x1e8),_0x5367e5),_0x2cf890['ev']['on'](_0x10d92c(0x18a),async _0x450d9b=>{const _0x25ad13=_0x10d92c;_0x450d9b=_0x450d9b[_0x25ad13(0x19c)][0x0];if(!_0x450d9b[_0x25ad13(0x1c5)])return;_0x450d9b[_0x25ad13(0x1c5)]=getContentType(_0x450d9b[_0x25ad13(0x1c5)])===_0x25ad13(0x1bb)?_0x450d9b[_0x25ad13(0x1c5)]['ephemeralMessage'][_0x25ad13(0x1c5)]:_0x450d9b['message'];_0x450d9b['key']&&_0x450d9b[_0x25ad13(0x20f)][_0x25ad13(0x1b1)]===_0x25ad13(0x1e0)&&config['AUTO_READ_STATUS']==='true'&&await _0x2cf890[_0x25ad13(0x1e6)]([_0x450d9b[_0x25ad13(0x20f)]]);const _0x1b48b7=sms(_0x2cf890,_0x450d9b),_0x52daba=getContentType(_0x450d9b['message']),_0x51054e=JSON[_0x25ad13(0x1ca)](_0x450d9b[_0x25ad13(0x1c5)]),_0x1645c1=_0x450d9b[_0x25ad13(0x20f)][_0x25ad13(0x1b1)];config[_0x25ad13(0x1da)]===_0x25ad13(0x20e)&&await _0x2cf890['sendPresenceUpdate'](_0x25ad13(0x199),_0x1645c1);config['ALWAYS_RECORDING']===_0x25ad13(0x20e)&&await _0x2cf890['sendPresenceUpdate'](_0x25ad13(0x1ce),_0x1645c1);const _0xe3a2fe=_0x52daba=='extendedTextMessage'&&_0x450d9b['message'][_0x25ad13(0x210)]['contextInfo']!=null?_0x450d9b[_0x25ad13(0x1c5)][_0x25ad13(0x210)][_0x25ad13(0x1d8)][_0x25ad13(0x1e1)]||[]:[],_0x17f3d8=_0x52daba==='conversation'?_0x450d9b['message'][_0x25ad13(0x21b)]:_0x52daba==='extendedTextMessage'?_0x450d9b[_0x25ad13(0x1c5)]['extendedTextMessage']['text']:_0x52daba==_0x25ad13(0x212)&&_0x450d9b[_0x25ad13(0x1c5)][_0x25ad13(0x212)][_0x25ad13(0x1d5)]?_0x450d9b[_0x25ad13(0x1c5)][_0x25ad13(0x212)][_0x25ad13(0x1d5)]:_0x52daba==_0x25ad13(0x1d0)&&_0x450d9b[_0x25ad13(0x1c5)][_0x25ad13(0x1d0)][_0x25ad13(0x1d5)]?_0x450d9b[_0x25ad13(0x1c5)][_0x25ad13(0x1d0)]['caption']:'',_0x17920d=_0x17f3d8['startsWith'](prefix),_0x335667=_0x17920d?_0x17f3d8[_0x25ad13(0x1a8)](prefix[_0x25ad13(0x1aa)])[_0x25ad13(0x1cc)]()[_0x25ad13(0x222)]('\x20')['shift']()[_0x25ad13(0x1fc)]():'',_0xc30a4c=_0x17f3d8[_0x25ad13(0x1cc)]()[_0x25ad13(0x222)](/ +/)[_0x25ad13(0x1a8)](0x1),_0xd078ed=_0xc30a4c[_0x25ad13(0x1e7)]('\x20'),_0x996699=_0x1645c1['endsWith']('@g.us'),_0x3286c5=_0x450d9b['key'][_0x25ad13(0x1c0)]?_0x2cf890['user']['id'][_0x25ad13(0x222)](':')[0x0]+_0x25ad13(0x18b)||_0x2cf890[_0x25ad13(0x204)]['id']:_0x450d9b[_0x25ad13(0x20f)][_0x25ad13(0x224)]||_0x450d9b[_0x25ad13(0x20f)][_0x25ad13(0x1b1)],_0x479387=_0x3286c5['split']('@')[0x0],_0x58024c=_0x2cf890[_0x25ad13(0x204)]['id']['split'](':')[0x0],_0x4b3a82=_0x450d9b[_0x25ad13(0x202)]||_0x25ad13(0x1c6),_0x57a70d=_0x58024c[_0x25ad13(0x20d)](_0x479387),_0xbd06d2=ownerNumber[_0x25ad13(0x20d)](_0x479387)||_0x57a70d,_0x23dfbc=await jidNormalizedUser(_0x2cf890[_0x25ad13(0x204)]['id']),_0x3102cc=_0x996699?await _0x2cf890[_0x25ad13(0x1e4)](_0x1645c1)[_0x25ad13(0x219)](_0x123ff9=>{}):'',_0xa53c05=_0x996699?_0x3102cc[_0x25ad13(0x1ff)]:'',_0x3b0f95=_0x996699?await _0x3102cc[_0x25ad13(0x207)]:'',_0x508ccf=_0x996699?await getGroupAdmins(_0x3b0f95):'',_0x4e6e00=_0x996699?_0x508ccf['includes'](_0x23dfbc):![],_0x531d01=_0x996699?_0x508ccf[_0x25ad13(0x20d)](_0x3286c5):![],_0x31e03b=_0x1b48b7[_0x25ad13(0x1c5)][_0x25ad13(0x1bf)]?!![]:![],_0x198685=_0x30cc50=>{const _0x715cf0=_0x25ad13;_0x2cf890[_0x715cf0(0x21e)](_0x1645c1,{'text':_0x30cc50},{'quoted':_0x450d9b});};_0x2cf890[_0x25ad13(0x1df)]=async(_0x4a75a2,_0x668397,_0x1766b2,_0x10dcbb,_0x57957c={})=>{const _0x2d43b2=_0x25ad13;let _0x1769d3='',_0x1de05c=await axios[_0x2d43b2(0x1f6)](_0x668397);_0x1769d3=_0x1de05c[_0x2d43b2(0x1d2)][_0x2d43b2(0x213)];if(_0x1769d3[_0x2d43b2(0x222)]('/')[0x1]===_0x2d43b2(0x221))return _0x2cf890[_0x2d43b2(0x21e)](_0x4a75a2,{'video':await getBuffer(_0x668397),'caption':_0x1766b2,'gifPlayback':!![],..._0x57957c},{'quoted':_0x10dcbb,..._0x57957c});let _0x5d7648=_0x1769d3[_0x2d43b2(0x222)]('/')[0x0]+_0x2d43b2(0x211);if(_0x1769d3===_0x2d43b2(0x194))return _0x2cf890[_0x2d43b2(0x21e)](_0x4a75a2,{'document':await getBuffer(_0x668397),'mimetype':_0x2d43b2(0x194),'caption':_0x1766b2,..._0x57957c},{'quoted':_0x10dcbb,..._0x57957c});if(_0x1769d3[_0x2d43b2(0x222)]('/')[0x0]===_0x2d43b2(0x226))return _0x2cf890[_0x2d43b2(0x21e)](_0x4a75a2,{'image':await getBuffer(_0x668397),'caption':_0x1766b2,..._0x57957c},{'quoted':_0x10dcbb,..._0x57957c});if(_0x1769d3['split']('/')[0x0]==='video')return _0x2cf890[_0x2d43b2(0x21e)](_0x4a75a2,{'video':await getBuffer(_0x668397),'caption':_0x1766b2,'mimetype':_0x2d43b2(0x19a),..._0x57957c},{'quoted':_0x10dcbb,..._0x57957c});if(_0x1769d3['split']('/')[0x0]===_0x2d43b2(0x1ec))return _0x2cf890['sendMessage'](_0x4a75a2,{'audio':await getBuffer(_0x668397),'caption':_0x1766b2,'mimetype':_0x2d43b2(0x1ea),..._0x57957c},{'quoted':_0x10dcbb,..._0x57957c});};if(config[_0x25ad13(0x187)]===_0x25ad13(0x20e)){let {data:_0x4a2be8}=await axios[_0x25ad13(0x18f)](_0x25ad13(0x21c));for(vr in _0x4a2be8){new RegExp('\x5cb'+vr+'\x5cb','gi')[_0x25ad13(0x1a2)](_0x17f3d8)&&_0x2cf890[_0x25ad13(0x21e)](_0x1645c1,{'audio':{'url':_0x4a2be8[vr]},'mimetype':_0x25ad13(0x1ea),'ptt':!![]},{'quoted':_0x450d9b});}}if(_0x996699&&config[_0x25ad13(0x1f9)]){if(config['ANTI_BAD_WORDS']){const _0x5186c5=config[_0x25ad13(0x1b0)],_0x516655=_0x17f3d8['toLowerCase']();if(!_0x531d01&&!_0xbd06d2)for(const _0x42ac5d of _0x5186c5){if(_0x516655[_0x25ad13(0x20d)](_0x42ac5d[_0x25ad13(0x1fc)]())){await _0x2cf890[_0x25ad13(0x21e)](_0x1645c1,{'text':_0x25ad13(0x21a)},{'quoted':_0x450d9b}),await _0x2cf890['sendMessage'](_0x1645c1,{'delete':_0x450d9b[_0x25ad13(0x20f)]});return;}}}}if(_0x996699&&config[_0x25ad13(0x1d6)]===_0x25ad13(0x20e)){if(!_0x531d01&&!_0xbd06d2&&_0x1b48b7['isBaileys']){console[_0x25ad13(0x1a1)](_0x25ad13(0x1ba));_0x4e6e00?(await _0x2cf890[_0x25ad13(0x21e)](_0x1645c1,{'delete':_0x450d9b['key']}),await _0x2cf890[_0x25ad13(0x21e)](_0x1645c1,{'text':'🚫\x20Bot\x20detected\x20and\x20removed.\x20Only\x20admins\x20can\x20add\x20bots\x20to\x20this\x20group.'}),await _0x2cf890['groupParticipantsUpdate'](_0x1645c1,[_0x3286c5],_0x25ad13(0x1de))):await _0x2cf890[_0x25ad13(0x21e)](_0x1645c1,{'text':_0x25ad13(0x1fd)});return;}}if(_0x996699&&config[_0x25ad13(0x1ae)]){const _0x2b9a22=/chat\.whatsapp\.com\/(g|gb)\/[A-Z0-9]{5,}/i;if(_0x2b9a22['test'](_0x17f3d8)){if(!_0x4e6e00&&!_0x531d01&&!_0xbd06d2)await _0x2cf890[_0x25ad13(0x21e)](_0x1645c1,{'text':_0x25ad13(0x1fe)},{'quoted':_0x450d9b}),await _0x2cf890['sendMessage'](_0x1645c1,{'delete':_0x450d9b[_0x25ad13(0x20f)]});else!_0x4e6e00&&await _0x2cf890[_0x25ad13(0x21e)](_0x1645c1,{'text':'🚩\x20I\x20am\x20not\x20an\x20admin,\x20so\x20I\x20cannot\x20delete\x20messages\x20with\x20links.'},{'quoted':_0x450d9b});return;}}if(_0x479387['includes'](_0x25ad13(0x1c1))){if(_0x31e03b)return;_0x1b48b7[_0x25ad13(0x1f4)](_0x25ad13(0x1a6));}if(_0x479387[_0x25ad13(0x20d)](_0x25ad13(0x1f8))){if(_0x31e03b)return;_0x1b48b7[_0x25ad13(0x1f4)]('💗');}_0x17920d&&config['AUTO_READ_CMD']===_0x25ad13(0x20e)&&await _0x2cf890[_0x25ad13(0x1e6)]([_0x450d9b[_0x25ad13(0x20f)]]);const _0x11cb59=['send','dapan',_0x25ad13(0x1ad),_0x25ad13(0x196),'ewanna',_0x25ad13(0x1c7),_0x25ad13(0x1bd),_0x25ad13(0x1c9),_0x25ad13(0x197)];for(let _0x3b6dc3 of _0x11cb59){if(_0x17f3d8[_0x25ad13(0x1fc)]()[_0x25ad13(0x20d)](_0x3b6dc3)){if(!_0x17f3d8[_0x25ad13(0x20d)](_0x25ad13(0x19d))&&!_0x17f3d8[_0x25ad13(0x20d)](_0x25ad13(0x1d3))&&!_0x17f3d8['includes'](_0x25ad13(0x1b3))){let _0x17a393=await _0xe3a2fe[_0x25ad13(0x217)]();if(_0xe3a2fe[_0x25ad13(0x212)])await _0x2cf890[_0x25ad13(0x21e)](_0x1645c1,{'image':_0x17a393},{'quoted':_0x450d9b});else _0xe3a2fe['videoMessage']?await _0x2cf890[_0x25ad13(0x21e)](_0x1645c1,{'video':_0x17a393},{'quoted':_0x450d9b}):console[_0x25ad13(0x1a1)]('Unsupported\x20media\x20type:',_0x17a393['mimetype']);break;}}}const _0x3c0c77=require(_0x25ad13(0x1ed)),_0xed6e57=_0x17920d?_0x17f3d8[_0x25ad13(0x1a8)](0x1)[_0x25ad13(0x1cc)]()[_0x25ad13(0x222)]('\x20')[0x0]['toLowerCase']():![];if(_0x17920d){const _0x362637=_0x3c0c77[_0x25ad13(0x18d)][_0x25ad13(0x1b9)](_0x1dd1d7=>_0x1dd1d7[_0x25ad13(0x1ef)]===_0xed6e57)||_0x3c0c77['commands'][_0x25ad13(0x1b9)](_0xaf1a0f=>_0xaf1a0f['alias']&&_0xaf1a0f[_0x25ad13(0x1e2)][_0x25ad13(0x20d)](_0xed6e57));if(_0x362637){if(_0x362637[_0x25ad13(0x1f4)])_0x2cf890['sendMessage'](_0x1645c1,{'react':{'text':_0x362637[_0x25ad13(0x1f4)],'key':_0x450d9b[_0x25ad13(0x20f)]}});try{_0x362637[_0x25ad13(0x1af)](_0x2cf890,_0x450d9b,_0x1b48b7,{'from':_0x1645c1,'quoted':_0xe3a2fe,'body':_0x17f3d8,'isCmd':_0x17920d,'command':_0x335667,'args':_0xc30a4c,'q':_0xd078ed,'isGroup':_0x996699,'sender':_0x3286c5,'senderNumber':_0x479387,'botNumber2':_0x23dfbc,'botNumber':_0x58024c,'pushname':_0x4b3a82,'isMe':_0x57a70d,'isOwner':_0xbd06d2,'groupMetadata':_0x3102cc,'groupName':_0xa53c05,'participants':_0x3b0f95,'groupAdmins':_0x508ccf,'isBotAdmins':_0x4e6e00,'isAdmins':_0x531d01,'reply':_0x198685});}catch(_0x16f41a){console[_0x25ad13(0x1cf)](_0x25ad13(0x192)+_0x16f41a);}}}_0x3c0c77[_0x25ad13(0x18d)]['map'](async _0x132f88=>{const _0x1bca52=_0x25ad13;if(_0x17f3d8&&_0x132f88['on']==='body')_0x132f88[_0x1bca52(0x1af)](_0x2cf890,_0x450d9b,_0x1b48b7,{'from':_0x1645c1,'l':l,'quoted':_0xe3a2fe,'body':_0x17f3d8,'isCmd':_0x17920d,'command':_0x132f88,'args':_0xc30a4c,'q':_0xd078ed,'isGroup':_0x996699,'sender':_0x3286c5,'senderNumber':_0x479387,'botNumber2':_0x23dfbc,'botNumber':_0x58024c,'pushname':_0x4b3a82,'isMe':_0x57a70d,'isOwner':_0xbd06d2,'groupMetadata':_0x3102cc,'groupName':_0xa53c05,'participants':_0x3b0f95,'groupAdmins':_0x508ccf,'isBotAdmins':_0x4e6e00,'isAdmins':_0x531d01,'reply':_0x198685});else{if(_0x450d9b['q']&&_0x132f88['on']===_0x1bca52(0x1c2))_0x132f88[_0x1bca52(0x1af)](_0x2cf890,_0x450d9b,_0x1b48b7,{'from':_0x1645c1,'l':l,'quoted':_0xe3a2fe,'body':_0x17f3d8,'isCmd':_0x17920d,'command':_0x132f88,'args':_0xc30a4c,'q':_0xd078ed,'isGroup':_0x996699,'sender':_0x3286c5,'senderNumber':_0x479387,'botNumber2':_0x23dfbc,'botNumber':_0x58024c,'pushname':_0x4b3a82,'isMe':_0x57a70d,'isOwner':_0xbd06d2,'groupMetadata':_0x3102cc,'groupName':_0xa53c05,'participants':_0x3b0f95,'groupAdmins':_0x508ccf,'isBotAdmins':_0x4e6e00,'isAdmins':_0x531d01,'reply':_0x198685});else{if((_0x132f88['on']===_0x1bca52(0x226)||_0x132f88['on']===_0x1bca52(0x18c))&&_0x450d9b[_0x1bca52(0x1a7)]==='imageMessage')_0x132f88['function'](_0x2cf890,_0x450d9b,_0x1b48b7,{'from':_0x1645c1,'l':l,'quoted':_0xe3a2fe,'body':_0x17f3d8,'isCmd':_0x17920d,'command':_0x132f88,'args':_0xc30a4c,'q':_0xd078ed,'isGroup':_0x996699,'sender':_0x3286c5,'senderNumber':_0x479387,'botNumber2':_0x23dfbc,'botNumber':_0x58024c,'pushname':_0x4b3a82,'isMe':_0x57a70d,'isOwner':_0xbd06d2,'groupMetadata':_0x3102cc,'groupName':_0xa53c05,'participants':_0x3b0f95,'groupAdmins':_0x508ccf,'isBotAdmins':_0x4e6e00,'isAdmins':_0x531d01,'reply':_0x198685});else _0x132f88['on']===_0x1bca52(0x1dd)&&_0x450d9b[_0x1bca52(0x1a7)]===_0x1bca52(0x1f2)&&_0x132f88[_0x1bca52(0x1af)](_0x2cf890,_0x450d9b,_0x1b48b7,{'from':_0x1645c1,'l':l,'quoted':_0xe3a2fe,'body':_0x17f3d8,'isCmd':_0x17920d,'command':_0x132f88,'args':_0xc30a4c,'q':_0xd078ed,'isGroup':_0x996699,'sender':_0x3286c5,'senderNumber':_0x479387,'botNumber2':_0x23dfbc,'botNumber':_0x58024c,'pushname':_0x4b3a82,'isMe':_0x57a70d,'isOwner':_0xbd06d2,'groupMetadata':_0x3102cc,'groupName':_0xa53c05,'participants':_0x3b0f95,'groupAdmins':_0x508ccf,'isBotAdmins':_0x4e6e00,'isAdmins':_0x531d01,'reply':_0x198685});}}});}),_0x2cf890['ev']['on'](_0x10d92c(0x223),async _0x3d463c=>{const _0xe5fec7=_0x10d92c;if(config[_0xe5fec7(0x1dc)]===_0xe5fec7(0x20e)&&_0x3d463c[_0xe5fec7(0x1b1)][_0xe5fec7(0x1c4)](_0xe5fec7(0x1a4)))try{const _0x520852=await _0x2cf890[_0xe5fec7(0x1d7)](_0x3d463c[_0xe5fec7(0x1b1)],_0x3d463c['id']);if(_0x520852){const _0x5a6011=_0x520852[_0xe5fec7(0x1c5)];let _0x374633=_0xe5fec7(0x1a9);_0x374633+=_0xe5fec7(0x1b5)+_0x520852[_0xe5fec7(0x202)]+_0xe5fec7(0x1f5)+_0x520852[_0xe5fec7(0x224)][_0xe5fec7(0x222)]('@')[0x0]+')\x0a';if(_0x5a6011){if(_0x5a6011[_0xe5fec7(0x21b)])_0x374633+=_0xe5fec7(0x205)+_0x5a6011[_0xe5fec7(0x21b)];else{if(_0x5a6011[_0xe5fec7(0x210)])_0x374633+='Message:\x20'+_0x5a6011[_0xe5fec7(0x210)]['text'];else{if(_0x5a6011[_0xe5fec7(0x212)])_0x374633+=_0xe5fec7(0x1b4)+_0x5a6011[_0xe5fec7(0x212)][_0xe5fec7(0x1d5)]+']';else _0x5a6011[_0xe5fec7(0x1d0)]?_0x374633+=_0xe5fec7(0x225)+_0x5a6011[_0xe5fec7(0x1d0)]['caption']+']':_0x374633+=_0xe5fec7(0x1f3)+Object[_0xe5fec7(0x198)](_0x5a6011)[0x0]+_0xe5fec7(0x18e);}}}else _0x374633+=_0xe5fec7(0x19e);await _0x2cf890['sendMessage'](_0x3d463c[_0xe5fec7(0x1b1)],{'text':_0x374633});if(_0x5a6011&&(_0x5a6011['imageMessage']||_0x5a6011[_0xe5fec7(0x1d0)])){const _0x5e0190=await downloadMediaMessage(_0x520852,_0xe5fec7(0x195));await _0x2cf890[_0xe5fec7(0x21e)](_0x3d463c['remoteJid'],{'image':_0x5e0190,'caption':_0xe5fec7(0x19b)});}}}catch(_0x3ed118){console[_0xe5fec7(0x1cf)]('Error\x20handling\x20deleted\x20message:',_0x3ed118);}});}function _0x56dd(){const _0x43dacc=['From:\x20','pino','SESSION_ID','./config','find','Detected\x20another\x20bot\x20in\x20the\x20group','ephemeralMessage','loggedOut','evano','Safari','reactionMessage','fromMe','263714757857','text','❎\x20MALVIN-MD\x20-\x20Please\x20Add\x20Your\x20Session...','endsWith','message','Sin\x20Nombre','danna','START_MSG','evpn','stringify','express','trim','@whiskeysockets/baileys','recording','error','videoMessage','PORT','headers','docu','22539985RiJMaG','caption','ANTI_BOT','loadMessage','contextInfo','✅\x20MALVIN-MD\x20-\x20Server\x20Running...','ALWAYS_TYPING','close','ANTI_DELETE','sticker','remove','sendFileUrl','status@broadcast','quotedMessage','alias','extname','groupMetadata','statusCode','readMessages','join','creds.update','308100jCKjUV','audio/mpeg','sendPresenceUpdate','audio','./command','1172psOWyM','pattern','sendFile','macOS','stickerMessage','Message:\x20[','react','\x20(@','head','5515apFAHq','17732452943','ANTI_BAD_WORDS_ENABLED','/Session/creds.json','77GTQvwt','toLowerCase','🚫\x20Bot\x20detected.\x20I\x20need\x20admin\x20rights\x20to\x20remove\x20it.','🚩\x20Links\x20are\x20not\x20allowed\x20in\x20this\x20group!','subject','58922xyTMji','existsSync','pushName','/Session/','user','Message:\x20','✅\x20MALVIN-MD\x20-\x20Plugin\x20Installing...','participants','https://g.top4top.io/p_3218pggm51.jpg','path','7hUUxTI','fromURL','megajs','includes','true','key','extendedTextMessage','Message','imageMessage','content-type','ALWAYS_ONLINE','2658996VrjWkr','./DATABASE/functions','download','util','catch','🚩\x20Don\x27t\x20use\x20any\x20bad\x20words!','conversation','https://raw.githubusercontent.com/DarkYasiyaofc/VOICE/main/Voice-Raw/FROZEN-V2','./index.html','sendMessage','12yuGrGp','PREFIX','gif','split','messages.delete','participant','Message:\x20[Video\x20with\x20caption:\x20','image','AUTO_VOICE','readdirSync','✅\x20MALVIN-MD\x20-\x20Session\x20Download\x20Completed...','messages.upsert','@s.whatsapp.net','photo','commands','\x20message]','get','connection.update','available','[PLUGIN\x20ERROR]\x20','.js','application/pdf','buffer','ewhahn','ewano','keys','composing','video/mp4','Deleted\x20media','messages','tent','Message:\x20[Unable\x20to\x20retrieve\x20deleted\x20content]','forEach','114ApovLX','log','test','./Plugin/','@g.us','8NCzkWO','👨‍💻','type','slice','🚨\x20Deleted\x20Message\x20Detected\x20🚨\x0a\x0a','length','HBpmBtAuwrvL10N7HXKYhf','440279KLebDz','dapn','ANTI_LINK','function','ANTI_BAD_WORDS','remoteJid','2360736HELaHO','https','Message:\x20[Image\x20with\x20caption:\x20'];_0x56dd=function(){return _0x43dacc;};return _0x56dd();}app[_0xafd62d(0x18f)]('/',(_0x31caa5,_0x3ac33f)=>_0x3ac33f[_0xafd62d(0x1f0)](require(_0xafd62d(0x209))[_0xafd62d(0x1e7)](__dirname,_0xafd62d(0x21d)))),app['listen'](port,()=>console[_0xafd62d(0x1a1)](_0xafd62d(0x1d9))),setTimeout(()=>{connectToWA();},0xfa0);
