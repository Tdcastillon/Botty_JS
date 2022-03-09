const { MessageEmbed } = require("discord.js")

async function skip(player, interaction)
{
    const queue = player.getQueue(interaction.guildId);
    if (!queue || !queue.playing) {
        return await interaction.reply("There are no songs in the queue")
    }
    
    const currentSong = queue.current

    queue.skip()

    await interaction.deferReply();

    await interaction.channel.send({
        embeds: [
            new MessageEmbed().setDescription(`${currentSong.title} has been skipped!`).setThumbnail(currentSong.thumbnail)
        ]
    })

    return await interaction.followUp({ content: `Skipping ${currentSong.title} !` });
}

module.exports = { skip };