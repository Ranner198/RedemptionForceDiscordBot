// Discord.js
const Discord = require ("discord.js");
const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

module.exports.run = async (bot, message, args) => {    

    var users = message.channel.guild.members.array();    
    var numberOfUsers = message.channel.guild.memberCount;
    var i = 0;

    SendDMs();

    var roles = message.channel.guild.roles;
    /*
    roles.forEach(role => {
        console.log(role + "===========================================");
        message.guild.roles.get(role)//members.map(m=>console.log(m.user.tag));
        console.log("==========================================================");
    });
    */

    function SendDMs() {         //  create a loop function
        setTimeout(function() {   //  call a 3s setTimeout when the loop is called
            if (users[i].id == "140295348458356738" || users[i].id == "197508140378488832")
            {
                users[i].send("bruh");            
            }          

            i++;                          
            
            if (i < numberOfUsers) 
            {        
                SendDMs();         
            } 
        }, 1000);
    }
/*
    var richText = new Discord.RichEmbed()
    .setColor("00FFFF")
    .setTitle("Help:")
    .setDescription("Hi! I'm the 30 seconds of C++ bot. I can do many things such as commands, jokes, help, and more. Try !commands for more")
    .setTimestamp()
    .addField("Contact", "If you have any questions or comments please reach out to @Ranner#0198 or @Turned_On#8801")
    message.author.send(richText);
*/
    // If not a DM delete the message
    if(message.channel.type != "dm")
        message.delete();
}

module.exports.help = {
    name: 'dm'
}