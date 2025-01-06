import { client } from '@index';
import { Event } from '@structures/event';
import { BtnInteraction } from '@structures/buttonoptions';
import { GuildMemberRoleManager } from 'discord.js';
import embed from '@utils/embed';
import cf from '@configs/embed.json';


export default new Event("interactionCreate", async (interaction) => {

    if (interaction.isButton()) {
        const button = client.buttons.get(interaction.customId)
        if (!button) return;
        if (button.permissions) {
            if (!interaction.memberPermissions?.has(button.permissions)) return interaction.reply({ content: "You do not have permission to use this button", ephemeral: true })
        }
        if (button.Roles) {
            for (const role of button.Roles) {
                let mRole = (interaction.member?.roles as GuildMemberRoleManager).cache;
                let gRole = (interaction.guild?.roles.cache.get(role as string));
                if (!mRole.has(gRole!.id)) {
                    let errEmbed = await embed({ title: "ERROR", description: "Missing Permission", color: cf.errColor });
                    return await interaction.reply({ embeds: [errEmbed] }); 
                }
            }
        }
        await button.run(client, interaction as BtnInteraction);
    }

            
}); 


