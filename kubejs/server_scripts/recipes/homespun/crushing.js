ServerEvents.recipes(event => {
    ////crushing
    //
    event.custom({
        "type": "homespun:tub_crushing",
        "input_item": {
            "item": "homespun:ironberries"
        },
        "output_item": {
            "count": 1,
            "item": "homespun:tiny_iron_dust"
        },
        "fluid_stack": {
            "fluid": "homespun:ironberry_juice",
            "amount": 250
        }
    })
    //
    //
    event.custom({
        "type": "homespun:tub_crushing",
        "input_item": {
            "item": "rootsclassic:elderberry"
        },
        "output_item": {
            "item": "minecraft:glowstone_dust"
        },
        "fluid_stack": {
            "fluid": "minecraft:water",
            "amount": 250
        }
    })
    //
    //
    event.custom({
        "type": "homespun:tub_crushing",
        "input_item": {
            "item": "rootsclassic:whitecurrant"
        },
        "output_item": {
            "item": "minecraft:paper"
        },
        "fluid_stack": {
            "fluid": "minecraft:water",
            "amount": 250
        }
    })
    //
    //
    event.custom({
        "type": "homespun:tub_crushing",
        "input_item": {
            "item": "rootsclassic:redcurrant"
        },
        "output_item": {
            "item": "minecraft:redstone"
        },
        "fluid_stack": {
            "fluid": "minecraft:water",
            "amount": 250
        }
    })
    //
    //
    event.custom({
        "type": "homespun:tub_crushing",
        "input_item": {
            "item": "rootsclassic:blackcurrant"
        },
        "output_item": {
            "item": "minecraft:ink_sac"
        },
        "fluid_stack": {
            "fluid": "minecraft:water",
            "amount": 250
        }
    })
    //
    //
    event.custom({
        "type": "homespun:tub_crushing",
        "input_item": {
            "item": "rootsclassic:nightshade"
        },
        "output_item": {
            "item": "minecraft:glow_ink_sac"
        },
        "fluid_stack": {
            "fluid": "minecraft:water",
            "amount": 250
        }
    })
    //
    //
    event.custom({
        "type": "homespun:tub_crushing",
        "input_item": {
            "item": "minecraft:dirt"
        },
        "output_item": {
            "count": 1,
            "item": "minecraft:clay_ball"
        },
        "fluid_stack": {
            "fluid": "thermal:crude_oil",
            "amount": 125
        }
    })
})
