import DiscordJS, { Intents } from 'discord.js'
import { REST } from "@discordjs/rest"
import dotenv from 'dotenv'
import { Player } from "discord-player";

function ping(message)
{
    message.reply("pong");
}

export function parser(command, message)
{
    switch(command) {
        case "ping": {
            ping(message);
            break;
        }
        default: {
            console.log("unvalid command ", command);
        }
    }
}