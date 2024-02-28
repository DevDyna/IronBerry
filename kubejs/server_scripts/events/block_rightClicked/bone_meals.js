//RND better
/*function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}*/

function meal(
    block_grass,
    item_trigger,
    block_list,
    area,
    pool,
    particles,
    require_air,
    first_as_good
    ) {
    //block id , item stack , block id[] , [xyz] , particles , bool , bool
    //############################### RICH BONE MEAL ##########################//
    BlockEvents.rightClicked(block_grass, (event) => {
        const { block, item, player, level } = event
        const { x, y, z } = block
        const { inventory } = player
        

        if (item == item_trigger && !(level.getBlock(x, y + 1, z) != "minecraft:air" && require_air)) {
            //if bool = true -> require that block was air || if bool = false -> if air = true|false -> true
            player.swing()

            if (!player.isCreative()) {
                inventory.extractItem(inventory.find(item_trigger), 1, false)
            }
            if (first_as_good) {level.getBlock(x, y + 1, z).set(block_list[rnd(0, block_list.length)])}
            
            Utils.server.runCommandSilent(`/playsound minecraft:item.bone_meal.use block @a ${x} ${y} ${z} 10 ${Math.floor(rnd(10, 100) / 10)}`)
            
            Utils.server.runCommandSilent(`/particle ${particles} ${x} ${y + 1} ${z} ${area[0]} ${area[1]} ${area[2]} 0.1 10`)
            
            let roll = rnd(pool[0], pool[1])
            let xyz = [x,y,z]
            for (let i = 0; i < roll; i++) {
                if (area[0] != 0) { (xyz[0] += rnd(-area[0], area[0]))}
                if (area[1] != 0) { (xyz[1] += rnd(-area[1], area[1]))}
                if (area[2] != 0) { (xyz[2] += rnd(-area[2], area[2]))}
                if (level.getBlock(xyz[0], xyz[1], xyz[2]) == block_grass && !(level.getBlock(xyz[0], xyz[1] + 1, xyz[2]) != "minecraft:air" && require_air)) {
                    level.getBlock(xyz[0], xyz[1] + 1, xyz[2]).set(block_list[rnd(0, block_list.length)])
                }
                //player.tell(xyz[0] +'__'+ xyz[1]+'__'+ xyz[2])
                //player.tell(block_list[rnd(0, block_list.length)])
                xyz = [x,y,z]
            }
        }
    })
}

meal(
    "farmersdelight:rich_soil",
    "kubejs:rich_bone_meal",
    data.block.wild_crops,
    [3, 0, 3],
    [6, 24],
    "supplementaries:confetti",
    true,
    false
)

/*


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
            //event.level.getBlock(x,y+1,z).set(data.block.wild_crops[rnd(0,data.block.wild_crops.length)])
            //Utils.server.runCommandSilent(`/execute at ${event.player.uuid} run setblock  ${data.block.wild_crops[rnd(0,data.block.wild_crops.length)]}`)
            Utils.server.runCommandSilent(`/playsound minecraft:item.bone_meal.use block @a ${x} ${y} ${z} 10 ${Math.floor(rnd(10,100)/10)}`)
            Utils.server.runCommandSilent(`/particle supplementaries:confetti ${x} ${y+1} ${z} 3 0 3 0.1 10`)
            let roll = rnd(6, 24)
                for (let i = 0; i < roll; i++) {
                    x += rnd(-3, 3)
                    z += rnd(-3, 3)
                    if (event.level.getBlock(x, y, z) == 'farmersdelight:rich_soil' && event.level.getBlock(x, y + 1, z) == 'minecraft:air') {
                        //Utils.server.runCommandSilent(`/setblock ${x} ${y+1} ${z} ${data.block.wild_crops[rnd(0,data.block.wild_crops.length)]}`)
                        event.level.getBlock(x,y+1,z).set(data.block.wild_crops[rnd(0,data.block.wild_crops.length)])
                    }
                    x = event.block.x
                        z = event.block.z
                }

        }
})


*/

//############################### MINERAL BONE MEAL ##########################//
BlockEvents.rightClicked("minecraft:cobbled_deepslate", (event) => {
    let x = event.block.x;
    let y = event.block.y;
    let z = event.block.z;

    if (event.getItem() == "kubejs:ore_bone_meal") {
        event.player.swing();
        if (!event.player.isCreative()) {
            event.player.inventory.extractItem(
                event.player.inventory.find("kubejs:ore_bone_meal"),
                1,
                false
            );
        }
        Utils.server.runCommandSilent(`/playsound minecraft:item.bone_meal.use block @a ${x} ${y} ${z} 10 ${Math.floor(rnd(10, 100) / 10)}`
        );
        Utils.server.runCommandSilent(
            `/particle supplementaries:confetti ${x} ${y + 1} ${z} 3 0 3 0.1 10`
        );
        let roll = rnd(4, 24);
        for (let i = 0; i < roll; i++) {
            let ore =
                data.block.deepslate_ores.name[
                rnd(0, data.block.deepslate_ores.name.length)
                ];
            let times = roll_time(
                data.block.deepslate_ores.chance[
                data.block.deepslate_ores.name.indexOf(ore)
                ]
            );
            if (times != 0) {
                for (let j = 0; j < times; j++) {
                    x += rnd(-7, 7);
                    y += rnd(-7, 7);
                    z += rnd(-7, 7);
                    if (event.level.getBlock(x, y, z) == "minecraft:cobbled_deepslate") {
                        Utils.server.runCommandSilent(`/setblock ${x} ${y} ${z} ${ore}`);
                    }
                    x = event.block.x;
                    y = event.block.y;
                    z = event.block.z;
                }
            }
        }
    }
});
