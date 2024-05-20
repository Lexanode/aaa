import type { Message } from "discord.js";
import type { playerDiscordBot } from "../player-discord-bot/plater-discord-bot";

import { AudioPlayerStatus } from "@discordjs/voice";
import { botReplys } from "../consts/bot-replys";

export async function pause(player: playerDiscordBot, message: Message) {
  if (player.Audioplayer.state.status === AudioPlayerStatus.Paused) {
    return await message.channel.send(botReplys.musicSteelPaused);
  }

  if (player.Audioplayer.state.status === AudioPlayerStatus.Playing) {
    await player.pause();
    return await message.channel.send(botReplys.trackOnPause);
  }

  return await message.channel.send(botReplys.playerNotPlaying);
}
