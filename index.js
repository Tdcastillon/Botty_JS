const { REST } = require("@discordjs/rest");
const { Routes, InteractionResponseType } = require("discord-api-types/v9");
const Discord = require("discord.js")
const { Client, Intents } = require("discord.js");
const { Player, Queue, Track } = require("discord-player");
const dotenv =require('dotenv');
const { pause } = require("./slash/pause.js");
const { resume } = require("./slash/resume.js");
const { infos } = require("./slash/info.js");
const { skip } = require("./slash/skip.js");
const { queue } = require("./slash/queue.js");
const { help } = require("./slash/help.js");

const play = require("./slash/play.js").play
const add = require("./slash/add.js").add
const quit = require("./slash/quit.js").quit

dotenv.config()

const allIntents =
[
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES
]

const client = new Discord.Client({ intents: allIntents });

const player = new Player(client);

// add the trackStart event so when a song will be played this message will be sent
player.on("trackStart", (queue, track) => {
    let channelId = queue.metadata.channel.channelId
    let channel = queue.metadata.channel.guild.channels.cache.get(channelId)
    console.log(track)
    channel.send(`:musical_note::musical_note: Playing **${track.title}** !`)
})

client.once("ready", () => {
    console.log("I'm ready !");
    const guildId = '893071149913767936'
    const guild = client.guilds.cache.get(guildId);

    let commands;

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create(
        {
            name: 'play',
            description: 'play a song',
            options: [
                {
                    name: "query",
                    description: "youtube song's url",
                    required: true,
                    type: "STRING"
                }
            ]
        }
    )
    commands?.create(
        {
            name: 'add',
            description: 'add track to the playlist',
            options: [
                {
                    name: "query",
                    description: "youtube song's url",
                    required: true,
                    type: "STRING"
                }
            ]
        }
    )
    commands?.create(
        {
            name: 'quit',
            description: 'make the bot quit the vocal channel',
        }
    )
    commands?.create(
        {
            name: 'pause',
            description: 'set pause to the music'
        }
    )
    commands?.create(
        {
            name: 'pause',
            description: 'set pause to the music'
        }
    )
    commands?.create(
        {
            name: 'resume',
            description: 'set play to the music'
        }
    )
    commands?.create(
        {
            name: 'info',
            description: 'info of the current music'
        }
    )
    commands?.create(
        {
            name: 'skip',
            description: 'skip to next music'
        }
    )
    commands?.create(
        {
            name: 'queue',
            description: 'list of next music'
        }
    )
    commands?.help(
        {
            name: 'help',
            description: 'get a helper for the bot'
        }
    )
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "play") {
        play(player, interaction)
    }
    if (interaction.commandName === "add") {
        add(player, interaction)
    }
    if (interaction.commandName === "quit") {
        quit(player, interaction)
    }
    if (interaction.commandName === 'pause') {
        pause(player, interaction)
    }
    if (interaction.commandName === 'resume') {
        resume(player, interaction)
    }
    if (interaction.commandName === 'info') {
        infos(player, interaction)
    }
    if (interaction.commandName === 'skip') {
        skip(player, interaction)
    }
    if (interaction.commandName === 'queue') {
        queue(player, interaction)
    }
    if (interaction.commandName === 'help') {
        help(player, interaction)
    }
});

client.login(process.env.TOKEN);