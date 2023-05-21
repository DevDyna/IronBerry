ServerEvents.recipes(event => {
    ////dualhandedcrafting
    //
    //
    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "tag": "minecraft:logs_that_burn"
        },
        "mainhandTool": {
            "item": "minecraft:stick"
        },
        "offhandTool": {
            "item": "minecraft:stick"
        },
        "result": {
            "item": "minecraft:campfire"
        }
    })
    //
    //
    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "item": "minecraft:bricks"
        },
        "mainhandTool": {
            "item": "minecraft:wooden_pickaxe"
        },
        "offhandTool": {
            "item": "minecraft:iron_ingot"
        },
        "result": {
            "item": "pedestals:block_pedestal"
        }
    })
    //
    //
    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "item": "minecraft:cobblestone"
        },
        "mainhandTool": {
            "item": "bluepower:iron_saw"
        },
        "offhandTool": {
            "item": "minecraft:iron_pickaxe"
        },
        "result": {
            "item": "minecraft:gravel"
        }
    })
    //
    //
    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "item": "kubejs:casing"
        },
        "mainhandTool": {
            "item": "bluepower:iron_saw"
        },
        "offhandTool": {
            "item": "minecraft:iron_pickaxe"
        },
        "result": {
            "item": "kubejs:machine"
        }
    })
    //
    //
})
