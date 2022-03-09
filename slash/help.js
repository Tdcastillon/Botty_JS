const { MessageEmbed } = require("discord.js")

async function help(player, interaction)
{
    await interaction.deferReply();

    let message = "/play ytb_url = play song\n/add ytb_url = add to queue a song\n/info = get info of a song\n/pause = pause the song\n/resume = resume the song\n/queue = load the queue\n/skip = skip the song"

    await interaction.channel.send({
        embeds: [
            new MessageEmbed().setDescription(`${message}`)
        ]
    })

    return await interaction.followUp({ content: `Loading help !` });
}

module.exports = { help };