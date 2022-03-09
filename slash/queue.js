const { MessageEmbed } = require("discord.js")

async function queue(player, interaction)
{
    const queue = player.getQueue(interaction.guildId);
    if (!queue || !queue.playing) {
        return await interaction.reply("There are no songs in the queue")
    }

    if (queue.tracks.length == 0)
        return await interaction.reply("Queue is empty")

    let msg = ""

    for (track in queue.tracks) {
        msg += queue.tracks[track].title + "\n"
    }

    let embed = new MessageEmbed().setDescription(msg);

    await interaction.deferReply();

    interaction.channel.send("Here are the next songs :")
    interaction.channel.send({embeds: [embed]})

    return await interaction.followUp({ content: `⏱️\tGetting the informations...` });
}

module.exports = { queue };