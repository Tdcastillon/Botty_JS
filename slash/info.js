const { MessageEmbed } = require("discord.js")

async function infos(player, interaction)
{
    const queue = player.getQueue(interaction.guildId);
    if (!queue || !queue.playing) {
        return await interaction.reply("There are no songs in the queue")
    }

    let actual_track = queue.previousTracks[0]

    let embed = new MessageEmbed()
    .setDescription(`Time music = ${actual_track.duration}`)
    .setTitle(`Title : ${actual_track.title}`)
    .setThumbnail(actual_track.thumbnail)
    .setAuthor(actual_track.author);

    await interaction.deferReply();

    interaction.channel.send("Here are the informations of the song :")
    interaction.channel.send({embeds: [embed]})

    return await interaction.followUp({ content: `⏱️\tGetting the informations...` });

}

module.exports = { infos };
