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
				.setTitle(`This Bot is made by \`<@669072128922091541>\` and **this** is the Source Code link to this Bot`)
				.setURL("")
				.addField("Discord.js: ", "[\`v12.5.1\`](https://discord.js.org)", true)
				.addField("FFMPEG: ", "\`v4.1.6-1\`", true)
				.addField("Node.js: ", "[\`v15.3.4\`](https://nodejs.org/en/)", true)
				.addField("Distube: ", "[\`v2.8.7\`](https://distube.js.org)")
				.addField("Source Code. ", "Don't just use the source for yourself,... please [ invite ]() me too![\`Click here\`])")
			        .addField("Source Code. ", "[ My git hub ]() link git hub ![\`Click here\`](https://github.com/polatbot12)")
				
				.setColor(config.colors.yes)
				.setFooter("New Music| by: POLAT", client.user.displayAvatarURL())
			);
	}
}
