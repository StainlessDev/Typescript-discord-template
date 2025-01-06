import { BotClient } from '@structures/client';
import { ButtonInteraction, ChatInputApplicationCommandData, GuildMember, PermissionResolvable, RoleResolvable } from 'discord.js';

export interface BtnInteraction extends ButtonInteraction {
    member: GuildMember,
}


export type ButtonOptions = {
    permissions?: PermissionResolvable[],
    Roles?: RoleResolvable[],
    run: (client: BotClient, interaction: BtnInteraction ) => any
} & ChatInputApplicationCommandData