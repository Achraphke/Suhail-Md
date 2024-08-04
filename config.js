const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/87572d3ddbaa0f0c77fdd.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "XΩLΩTL☠️▒▒▒▒▒▒░░░" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254748211821";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254748211821";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/5d9fa1b9bd8989891bddc.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_18_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyOCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAxLFxuICAgICAgICA4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIxLFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICA0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODEsXG4gICAgICAgIDM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTczLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDczLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc5LFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNVVkhCeVFoTlBwMXZua005cVI3NlFDYnIzMHZLQjkzREVMZjRUV0dLeGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQ4MjExODIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRTQ0Nzc4NTQwMzI1RDY0MzU5MkI3QUExNUMzNEY3RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI3OTkxMzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTzVoUWFIRjdRWDZDV0ZkdUJsb1lod1wiLFxuICBcInBob25lSWRcIjogXCI3NGZjNDRhNS1kMjQ3LTRiYjMtODNhMC1kZWExMDMzZmIyMTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMzksXG4gICAgICAzNixcbiAgICAgIDUsXG4gICAgICAxMjgsXG4gICAgICA3OCxcbiAgICAgIDIzNyxcbiAgICAgIDIwMSxcbiAgICAgIDE1NCxcbiAgICAgIDEzOCxcbiAgICAgIDIyNyxcbiAgICAgIDg4LFxuICAgICAgMTI1LFxuICAgICAgMTc0LFxuICAgICAgMTAwLFxuICAgICAgNjcsXG4gICAgICAxNzQsXG4gICAgICAxNjEsXG4gICAgICA1MyxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAxNjAsXG4gICAgICA4NCxcbiAgICAgIDcsXG4gICAgICAxMSxcbiAgICAgIDE0NixcbiAgICAgIDExNSxcbiAgICAgIDEyMixcbiAgICAgIDEzOCxcbiAgICAgIDE0LFxuICAgICAgMTQxLFxuICAgICAgNjUsXG4gICAgICAyNDksXG4gICAgICA3MSxcbiAgICAgIDIxOSxcbiAgICAgIDg4LFxuICAgICAgNDAsXG4gICAgICA5MCxcbiAgICAgIDQ0LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUTUs1SjFBVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ4MjExODIxOjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjQ4MzY1NTg2MjI4MjQ6ODNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTS9ubHRVQkVKQ292N1VHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoU3pORU1rcERxT3VPSXVGMWE3aW9vNUpmelVKWlJxTFlSYmZFNjEzR2dNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZsUDdTeUoxa2swbm1EbFpTbXRXUG9mcW1ZTzU3UEZhSUE1c2JHU1NwUWFQMXNqb0tjdkxZSURlVUdZWlpRR21HWjdnS3dDRzVUcEVOUGVNZkZYcUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhtTnJlUHozanMyd3NRWW9lVUlYbnBCRnVJNWY2eEUrUUErR0R4TnZLTWRCWjI1V3ZiYzB4dFRHNGRVaWNCTGtZVnhVWFhGdk9QZVNsai9HWmsrM2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0ODIxMTgyMTo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzk5MTI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2YvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPZi8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "XΩLΩTL☠️▒▒▒▒▒▒░░░" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "XΩLΩTL☠️▒▒▒▒▒░░░",
  packname: process.env.PACK_NAME || "XΩLΩTL☠️▒▒▒▒▒░░░",
  botname : process.env.BOT_NAME  || "☠️XΩLΩTL☠️▒▒▒▒░░",
  ownername:process.env.OWNER_NAME|| "XΩLΩTL☠️▒▒▒░░",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
