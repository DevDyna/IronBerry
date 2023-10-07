ServerEvents.recipes(event => {
    //pedestals
    event.custom({
        "type": "pedestals:cobblegen",
        "blockBelow": {
            "tag": "ironberry:bluealloy"
        },
        "result": {
            "item": "minecraft:dirt"
        }
    })
    //
    //
    event.custom({
        "type": "pedestals:cobblegen",
        "blockBelow": {
            "item": "minecraft:dripstone_block"
        },
		        "energy": {
            "energyValue": 1000
        },
        "result": {
            "item": "minecraft:sand"
        }
    })
    //
    //
    event.custom({
        "type": "pedestals:cobblegen",
        "blockBelow": {
            "item": "integrateddynamics:menril_wood"
        },
        "energy": {
            "energyValue": 10000
        },

        "result": {
            "item": "homespun:ironwood_leaves"
        }
    })
    //
    //
    event.custom({
        "type": "pedestals:cobblegen",
        "blockBelow": {
            "item": 'integrateddynamics:menril_wood_stripped'
        },
        "inputFluidStack": {
            "fluid": "minecraft:water",
            "count": 1000
        },
        "result": {
            "item": "homespun:ironwood_log"
        }
    })
	    //
    //
})
