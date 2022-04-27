const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "vote",
    aliases: ["rate"],
    category: "INFORMATION COMMANDS",
    description: "Votes for MUSIC",
    useage: "vote",
    run: async (client, message, args) => {
        return message.reply(
            new Discord.MessageEmbed()
            .setColor(config.colors.yes)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTitle("Vote for MUSIC")
            .setURL("https://top.gg/bot/911935319375499284/analytics")
            .setDescription(``)
        )
    }
}
