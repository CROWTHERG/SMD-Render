const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMER5dUVzVlFZUURwRTA0K01mYVowUXZjL0VjNm90R2pCTmJXQ01DOUEzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVEvcGVNUUZuVFpSVEJXdTFrb1IxdHNadkJ0QXI5bkRXd3Y3K2dveldCUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRmMyNVJQZStZZkF6NDE3MmZ3QUhaU0JBRmRvZERVTnRaWkhJbUFlT1UwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1L3dBQnZobEJHcHFXU3pHV3gwYVcrU2x1RWYwN2g0ejRoOUVVdXI1bVNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldLUVk4L2FpcVJ4aVpaeWx3R0FDQStySUE3aUYzK3B2UzNBSzRycHlLMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQwcmhTMTdVMHlPaUs2dEJPZnBzdzlZL3kvS3E5Ulc0djE4SldjdktmV009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxPaVU4VExUM0xyQjNOZFJLcUd1RktkWDgyVUNUZVpjRFZVclkzdUdtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1FwQlRFTVl5R2U0d1BoZTFmQzkwa3RNdTRrUmFsOHhrYTdlckRUY21WRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdzOG82ajBqYWVCQmxVZ3BHRDNQaUFhdEc5MHh1UnExd29FVkpTZ0lEMGprZjJDMlduWk9iazVKQkpTaVNoV052d1NCeUg4Vnl6M0lEQUhKTHQ4K0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiJMaG45UnBqc0twTGhmNnRGZENFQmJvTzVqbE1VQWIzMFNaOTF4bTFaS2tRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDc4MTYwNjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM5NjBCODU4QkRCRjI2NjM3RThERjlDQ0RCRDI5NUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MzQ1MjU1N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0NzgxNjA2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzlBOUJENzMzOTdGRjBGNURCNDY3MDJCQzIwODVEMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYzNDUyNTU3fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlBPUVNLS1dDIiwibWUiOnsiaWQiOiIyMzQ3MDQ3ODE2MDYzOjE3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjA0NDY2OTY4MTI1NDcwOjE3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEtkdVlBQkVJZk44TWdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVXBHVEc5SGdGQ1l4dmFMTmxQa1UxSzdQa0haaFpwWXdKTHBBSytINFRXTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMnljZzhCdXQ3QmZwbklwekFUSldkeUZTdS9KYUpjK0lFYkJGU1VBTEhBSjczRktkejVialFCSHU0NFZ2dXZ4VlVaVGxCU0swdFo0bkFrekZFYVJ6QWc9PSIsImRldmljZVNpZ25hdHVyZSI6IlozRWh6enpvZTZCVUlRNUlzUy8rWWhMU29rNDN1ODdsVkxRSWVnSXlzcHdjZVZFRUJ4NmFXTFVMVHVKVDRndVhXODM3TEp3M3hjQTY4NUQxSm1VdERBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0NzgxNjA2MzoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWS1JreHZSNEJRbU1iMml6WlQ1Rk5TdXo1QjJZV2FXTUNTNlFDdmgrRTFqIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlFnSSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjM0NTI1NTYsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJZzgifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "false", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ibb.co/mV2pRCGy",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "CROWTHER BOT",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mʀ-Sʜᴀʙᴀɴ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "2347047816063",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "CROWTHER",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ CROWTHER*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/mV2pRCGy",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "2347047816063",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
