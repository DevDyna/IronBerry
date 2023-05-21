ServerEvents.recipes(event => {
    //cooking
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{
                "item": "minecraft:smooth_stone"
            }
        ],
        "result": [{
                "item": "minecraft:cobblestone"
            }
        ],
        "tool": {
            "tag": "bluepower:saw"
        }
    })
    //
    //
})
