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
        "result": {
            "item": "minecraft:sand"
        }
    })
    //
    //
    event.custom({
        "type": "pedestals:cobblegen",
        "blockBelow": {
            "item": "homespun:ironwood_wood"
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
    "item": "dyenamics:maroon_wool"
  },
  "inputFluidStack": {
    "fluid": "systeams:steam",
    "count": 1000
  },
  "result": {
    "item": "homespun:ironwood_log"
  }
})
})
