# Musical Bot in DiscordJS using Discord Player

This bot has for goal to allow people to listen from a youtube video on a server when they're connected in a voice channel. It is 
only usable by slash commands.

# Commands

At this moment, this bot has already multiple variables :
- /play *youtube_url or title of a video* => Play a song if he is in a voice channel. If it's used meanwhile a song is playing, 
the new song will be played instead.

- /add *youtube_url or title of a video* => Add a new song to the queue.

- /skip => Play the next song in the queue

- /info => This permit to access the different informations of the current song. It gives you the title of the video, the miniature of the
youtube video and its duration.

- /queue => Display the next songs

- /pause => Pause the current song

- /resume => Resume the paused song

- /quit => Stop the music and destroy the entire queue


# Version

**Version 1.0 (Current)** = Initial Published Bot