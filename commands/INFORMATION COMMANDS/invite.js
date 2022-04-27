const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "invite",
    aliases: ["add"],
    category: "INFORMATION COMMANDS",
    description: "Invite the Bot to your Server",
    useage: "invite",
    run: async (client, message, args) => {
        let inviteembed = new Discord.MessageEmbed()
            .setColor(config.colors.yes)
            .setTitle("Invite, MUSIC")
            .setDescription("**[ Invite Me Now , thanks](https://discord.com/oauth2/authorize?client_id=911935319375499284&permissions=70282305&scope=bot)** ")
            .setFooter("Best Music Bot", client.user.displayAvatarURL())

        message.reply(inviteembed);
    }
}
