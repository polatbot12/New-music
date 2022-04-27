const {
	MessageEmbed
} = require("discord.js")
const config = require("../../config.json")
module.exports = {
	name: "github",
    category: "INFORMATION COMMANDS",
	aliases: ["git", "source"],
	cooldown: 2,
	usage: "github",
	description: "Shows you the Github and Source Code Information about this Bot",
	run: async (client, message, args, user, text, prefix) => {
			message.channel.send(new MessageEmbed()
				.setTitle(`This Bot is made by \`<@828550389233090571>\` and **this** is the Source Code link to this Bot`)
				.setURL("")
				.addField("Discord.js: ", "[\`v12.5.1\`](https://discord.js.org)", true)
				.addField("FFMPEG: ", "\`v4.1.6-1\`", true)
				.addField("Node.js: ", "[\`v15.3.4\`](https://nodejs.org/en/)", true)
				.addField("Distube: ", "[\`v2.8.7\`](https://distube.js.org)")
				.addField("Source Code. ", "Don't just use the source for yourself,... please [ invite ](https://discord.com/oauth2/authorize?client_id=911935319375499284&permissions=70282305&scope=bot) me too![\`Click here\`](https://discord.com/oauth2/authorize?client_id=911935319375499284&permissions=70282305&scope=bot)")
			        .addField("Source Code. ", "[ My git hub ]() link git hub ![\`Click here\`]()")
				
				.setColor(config.colors.yes)
				.setFooter("Hyper Canary | by: CLEVER", client.user.displayAvatarURL())
			);
	}
}
