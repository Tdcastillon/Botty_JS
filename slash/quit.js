async function quit(player, interaction)
{
    const queue = player.getQueue(interaction.guildId);
    if (!queue || !queue.playing) {
        return await interaction.reply("There are no songs in the queue")
    }

    queue.destroy()
    await interaction.deferReply();

    interaction.channel.send("Bye !")
    return await interaction.followUp({ content: `quitting ...` });
}

module.exports = { quit };