import type { VoiceState } from "discord.js";
import type { mapPlayers } from "../index";

import { checkKick } from "./check-kick";
import { checkMute } from "./check-mute";

export async function checkStatusbot(
  oldState: VoiceState,
  newState: VoiceState,
  mapPlayers: mapPlayers
) {
  const player = mapPlayers.get(oldState.guild.id);

  if (oldState?.member?.user.bot && player) {
    await checkMute(player, oldState, newState);
    await checkKick(player, oldState, newState, mapPlayers);
  }
}
