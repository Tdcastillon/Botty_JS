import DiscordJS, { Client, Intents, Interaction } from 'discord.js'
import { Player } from "discord-player";

import { client } from "../index"

const player = new Player(client);

player.on("trackStart", (queue, track) => queue.metadata.channel.send(`🎶 | Now playing **${track.title}**!`))

export function play(message, url)
{
    if (!message.member.voice.channel) {
        message.reply({content:"You're not in a vocie channel"});
    }
    const queue = player.createQueue(interra)
}