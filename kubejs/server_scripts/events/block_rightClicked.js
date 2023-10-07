//############################### PHOENIX EGG DUPE ##########################//
BlockEvents.rightClicked('exoticbirds:phoenix_egg', event => {
    if ((event.player.mainHandItem.id === 'tiab:time_in_a_bottle' || event.player.offHandItem.id === 'tiab:time_in_a_bottle') && event.player.isCrouching()) {
        event.cancel()
        setCancellationResult(true)
    }
})
//############################### SOUL FILLER ##########################//
BlockEvents.rightClicked(event => {

    if (Feach(event.block, data.block.tombstone) && event.player.mainHandItem.id === 'kubejs:soul') {
        event.player.swing()
        if (event.block.properties.get('soul_type') === 'weak') {
            soultype(event, 'none')
        }
        if (event.block.properties.get('soul_type') === 'strong') {
            soultype(event, 'weak')
        }

    }
})
//############################### RICH BONE MEAL ##########################//
BlockEvents.rightClicked('farmersdelight:rich_soil', event => {
    let x = event.block.x
        let y = event.block.y
        let z = event.block.z

        if (event.getItem() == 'kubejs:rich_bone_meal' && event.block.getUp() == 'minecraft:air') {
            event.player.swing()
            if (!event.player.isCreative()) {
                event.player.inventory.extractItem(event.player.inventory.find('kubejs:rich_bone_meal'), 1, false)
            }
            Utils.server.runCommandSilent(`/execute at ${event.player.uuid} run setblock ${x} ${y+1} ${z} ${data.block.wild_crops[rnd(0,data.block.wild_crops.length)]}`)
            Utils.server.runCommandSilent(`/playsound minecraft:item.bone_meal.use block @a ${x} ${y} ${z} 10 ${Math.floor(rnd(10,100)/10)}`)
            Utils.server.runCommandSilent(`/particle supplementaries:confetti ${x} ${y+1} ${z} 3 0 3 0.1 10`)
            let roll = rnd(6, 24)
                for (let i = 0; i < roll; i++) {
                    x += rnd(-3, 3)
                    z += rnd(-3, 3)
                    if (event.level.getBlock(x, y, z) == 'farmersdelight:rich_soil' && event.level.getBlock(x, y + 1, z) == 'minecraft:air') {
                        Utils.server.runCommandSilent(`/setblock ${x} ${y+1} ${z} ${data.block.wild_crops[rnd(0,data.block.wild_crops.length)]}`)

                    }
                    x = event.block.x
                        z = event.block.z
                }

        }
})
//############################### MINERAL BONE MEAL ##########################//
BlockEvents.rightClicked('minecraft:cobbled_deepslate', event => {
    let x = event.block.x
        let y = event.block.y
        let z = event.block.z

        if (event.getItem() == 'kubejs:ore_bone_meal') {
            event.player.swing()
            if (!event.player.isCreative()) {
                event.player.inventory.extractItem(event.player.inventory.find('kubejs:ore_bone_meal'), 1, false)
            }
            Utils.server.runCommandSilent(`/playsound minecraft:item.bone_meal.use block @a ${x} ${y} ${z} 10 ${Math.floor(rnd(10,100)/10)}`)
            Utils.server.runCommandSilent(`/particle supplementaries:confetti ${x} ${y+1} ${z} 3 0 3 0.1 10`)
            let roll = rnd(4, 24)
                for (let i = 0; i < roll; i++) {
                    let ore = data.block.deepslate_ores.name[rnd(0, data.block.deepslate_ores.name.length)]
                        let times = roll_time(data.block.deepslate_ores.chance[data.block.deepslate_ores.name.indexOf(ore)])
                        if (times != 0) {
                            for (let j = 0; j < times; j++) {
                                x += rnd(-7, 7)
                                y += rnd(-7, 7)
                                z += rnd(-7, 7)
                                if (event.level.getBlock(x, y, z) == 'minecraft:cobbled_deepslate') {
                                    Utils.server.runCommandSilent(`/setblock ${x} ${y} ${z} ${ore}`)
                                }
                                x = event.block.x
                                    y = event.block.y
                                    z = event.block.z
                            }
                        }
                }
        }
})
//###############################  ##########################//
BlockEvents.rightClicked('integrateddynamics:menril_wood', event => {
    if (event.item.hasTag('forge:tools/axes')) {
        event.cancel()
        setCancellationResult(true)
    }
})

BlockEvents.rightClicked('pedestals:block_pedestal', event => {
    if (event.item.hasTag('forge:tools/pickaxes')) {
		
		if(event.item.getMaxDamage() == event.item.getDamageValue()){
			event.player.inventory.extractItem(event.player.inventory.find(event.item.id), 1, false)
		}else{
			event.item.setDamageValue(event.item.getDamageValue() + 1)
		}
		Utils.server.runCommandSilent(`/setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air destroy`)
    }
})
