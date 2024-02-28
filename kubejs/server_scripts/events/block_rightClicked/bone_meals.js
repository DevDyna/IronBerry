//#############################################################################//
/**
 * @returns true|false as 50%
 */
function rnd_bool() {
    if (Math.floor(Math.random() * 2) == 1)
        return true
    return false
}

/**
 * @param {number} chance   - like loot table weight 
 * @returns                   number based on all chance as success
 */
function roll_time(chance) {
    let count = 0;
    for (let i = 0; i < chance; i++) {
        if (rnd_bool()) {
            count++
        }
    }
    return count
}

/**
 * 
 * @param {number} min  - excluded
 * @param {number} max  - included
 * @returns               random int value
 */

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * @param {Block} block_replace         - block id ||  grass block
 * @param {Item} item_trigger           - item id || like bone meal
 * @param {object} block_list           - string-array of block id
 * @param {object} area                 - int-array of x , y , z radius || [x,y,z] *y based on top block
 * @param {object} pool                 - chance to success || [min,max]
 * @param {string} particles            - string || particles name
 * @param {boolean} require_air         - if true require air to success
 * @param {boolean} first_as_good       - if true the first click have success
 */

function meal(block_replace, item_trigger, block_list, area, pool, particles, require_air, first_as_good) {

    BlockEvents.rightClicked(block_replace, (event) => {
        const { block, item, player, level ,server} = event
        const { x, y, z } = block
        const { inventory } = player

        if (item == item_trigger && !(level.getBlock(x, y + 1, z) != "minecraft:air" && require_air)) {
            //if bool = true -> require that block was air || if bool = false -> if air = true|false -> true
            player.swing()

            if (!player.isCreative()) {
                inventory.extractItem(inventory.find(item_trigger), 1, false)
            }
            if (first_as_good) { level.getBlock(x, y + 1, z).set(block_list[rnd(0, block_list.length)]) }

            server.runCommandSilent(`/playsound minecraft:item.bone_meal.use block @a ${x} ${y} ${z} 10 ${rnd(1, 2)}`)

            server.runCommandSilent(`/particle ${particles} ${x} ${y + 1} ${z} ${area[0]} ${area[1]} ${area[2]} 0.1 10`)

            let roll = rnd(pool[0], pool[1])
            let xyz = [x, y, z]
            for (let i = 0; i < roll; i++) {
                if (area[0] != 0) { (xyz[0] += rnd(-area[0], area[0])) }
                if (area[1] != 0) { (xyz[1] += rnd(-area[1], area[1])) }
                if (area[2] != 0) { (xyz[2] += rnd(-area[2], area[2])) }
                if (level.getBlock(xyz[0], xyz[1], xyz[2]) == block_replace && !(level.getBlock(xyz[0], xyz[1] + 1, xyz[2]) != "minecraft:air" && require_air)) {
                    level.getBlock(xyz[0], xyz[1] + 1, xyz[2]).set(block_list[rnd(0, block_list.length - 1)])
                }
                xyz = [x, y, z]
            }
        }
    })
}

/**
 * @param {Block} block_replace         - block id ||  grass block
 * @param {Item} item_trigger           - item id || like bone meal
 * @param {object} block_list_name      - block id list
 * @param {object} block_list_chance    - number id list
 * @param {object} area                 - int-array of x , y , z radius || [x,y,z]
 * @param {object} pool                 - chance to success || [min,max]
 * @param {string} particles            - string || particles name
 */
function ore_meal(block_replace, item_trigger, block_list_name,block_list_chance, area, pool, particles){
BlockEvents.rightClicked(block_replace, (event) => {
    const { block, item, player, level ,server} = event
    const { x, y, z } = block
    const { inventory } = player

    if (item == item_trigger) {
        player.swing()

        if (!player.isCreative()) {
            inventory.extractItem(inventory.find(item_trigger), 1, false)
        }
        //if (first_as_good) { level.getBlock(x, y + 1, z).set(block_list_name[rnd(0, block_list_name.length)]) }

        server.runCommandSilent(`/playsound minecraft:item.bone_meal.use block @a ${x} ${y} ${z} 10 ${rnd(1, 2)}`)

        server.runCommandSilent(`/particle ${particles} ${x} ${y + 1} ${z} ${area[0]} ${area[1]} ${area[2]} 0.1 10`)

        let roll = rnd(pool[0], pool[1])
        let xyz = [x, y, z]
        for (let i = 0; i < roll; i++) {
            let ore = block_list_name[rnd(0, block_list_name.length)]
            let times = roll_time(block_list_chance[block_list_name.indexOf(ore)])
            if (times != 0) {
                for (let j = 0; j < times; j++) {
                    if (area[0] != 0) { (xyz[0] += rnd(-area[0], area[0])) }
                    if (area[1] != 0) { (xyz[1] += rnd(-area[1], area[1])) }
                    if (area[2] != 0) { (xyz[2] += rnd(-area[2], area[2])) }
                    if(level.getBlock(xyz[0], xyz[1], xyz[2]) == block_replace) {
                        level.getBlock(xyz[0], xyz[1], xyz[2]).set(ore)
                    }
                    xyz = [x, y, z]
                }
            }
        }
    }
})
}
//###############################-HOW-TO-USE-##################################//

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

    ore_meal(
            'minecraft:cobbled_deepslate',
            "kubejs:ore_bone_meal",
            data.block.deepslate_ores.name,
            data.block.deepslate_ores.chance,
            [7,7,7],
            [6, 24],
            "supplementaries:confetti"
            )

    meal(
        'minecraft:dirt',
        'kubejs:floreal_bone_meal',
        data.block.flowers,
        [3,0,3],
        [6, 24],
        "supplementaries:confetti",
        true,
        false
        )







//#############################################################################//