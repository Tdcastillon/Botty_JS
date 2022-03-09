async function add(player, interaction)
{
    const query = interaction.options.get("query").value;

    const queue = player.getQueue(interaction.guildId);
    if (!queue || !queue.playing) {
        return await interaction.reply("There are no songs in the queue")
    }
    let url = interaction.options.get("query").value

    const track = await player.search(query, {
        requestedBy: interaction.user
    }).then(x => x.tracks[0]);

    if (!track) return await interaction.reply({ content: `❌ | Track **${query}** not found!` });

    await interaction.deferReply();
    queue.addTrack(track);
    return await interaction.followUp({ content: `⏱️ | Adding track **${track.title}**!` });
}

module.exports = { add };