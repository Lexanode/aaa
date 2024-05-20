import type { Message } from "discord.js";
import type { playerDiscordBot } from "../../playerDiscordBot";
import type { EventEmitter } from "node:events";

import { playCommand } from "../play";
import { skip } from "../skip";
import { pause } from "../pause";
import { resume } from "../resume";
import { stop } from "../stop";

type mapPlayers = Map<string, playerDiscordBot>;

export async function handleCommands(
	player: playerDiscordBot | undefined,
	message: Message,
	mapPlayers: mapPlayers,
	eventNewMusic: EventEmitter,
) {
	if (message.content.startsWith("?debug")) {
		console.log(mapPlayers);
		return;
	}
	if (message.content.startsWith("?play")) {
		return await playCommand(eventNewMusic, message);
	}
	if (!player) return;
	// Команда skip
	if (message.content.startsWith("?skip")) {
		return await skip(player, message);
	}
	// Команда паузы
	if (message.content.startsWith("?pause")) {
		return await pause(player, message);
	}
	// Команда продолжения после паузы
	if (message.content.startsWith("?resume")) {
		return await resume(player, message);
	}
	// Команда выключения
	if (message.content.startsWith("?stop")) {
		return await stop(player, mapPlayers);
	}
}