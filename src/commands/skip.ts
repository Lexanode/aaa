import type { Message } from "discord.js";
import type { playerDiscordBot } from "../player-discord-bot/plater-discord-bot";

import { botReplys } from "../consts/bot-replys";
import { AudioPlayerStatus } from "@discordjs/voice";

export async function skip(player: playerDiscordBot, message: Message) {
  // if (player.queue.length < 0)
  // 	return await message.channel.send(botReplys.nothingToSkip);
  // await player.skip();
  // return await message.reply(botReplys.skippedTrack(player.queue.length));

  if (player.Audioplayer.state.status === AudioPlayerStatus.Playing) {
    await player.skip();
    return await message.channel.send(
      botReplys.skippedTrack(player.queue.length)
    );
  }

  return await message.channel.send(botReplys.icantSkipTrack);
}
