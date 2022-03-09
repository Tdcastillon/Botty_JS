async function resume(player, interaction)
{
    const queue = player.getQueue(interaction.guildId);
    if (!queue || !queue.playing) {
        return await interaction.reply("There are no songs in the queue")
    }

    queue.setPaused(false)

    await interaction.deferReply();
    
    interaction.channel.send(`:arrow_forward: The music **${queue.previousTracks[0].title}** is now playing`)

    return await interaction.followUp({ content: `Resuming to ${queue.previousTracks[0].title} !` });
}

module.exports = { resume };