import type { VoiceState } from "discord.js";
import type{ playerDiscordBot } from "../playerDiscordBot";

export async function checkMute(
	player: playerDiscordBot,
	oldState: VoiceState,
	newState: VoiceState,
) {
	if (oldState.serverMute && !newState.serverMute) {
		console.log("Bot has been unmuted.");
		await player.unpause();
	} else if (!oldState.serverMute && newState.serverMute) {
		await player.pause();
		console.log("Bot has been muted.");
	}
}