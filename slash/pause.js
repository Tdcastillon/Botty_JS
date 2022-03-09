async function pause(player, interaction)
{
    const queue = player.getQueue(interaction.guildId);
    if (!queue || !queue.playing) {
        return await interaction.reply("There are no songs in the queue")
    }

    queue.setPaused(true)

    await interaction.deferReply();
    
    interaction.channel.send(`:pause_button: The music **${queue.previousTracks[0].title}** is paused`)

    return await interaction.followUp({ content: `Setting pause to ${queue.previousTracks[0].title} !` });
}

module.exports = { pause };
