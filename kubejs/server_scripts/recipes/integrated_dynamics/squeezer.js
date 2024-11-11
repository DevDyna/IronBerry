ServerEvents.recipes(event => {
    ////crushing
    //
    event.custom({
        "type": "integrateddynamics:squeezer",
        "item": {
            "tag": "rootsclassic:berries"
        },
        "result": {
            "items": [{
                    "item": "minecraft:redstone",
                    "chance": 0.75
                }, {
                    "item": "minecraft:glowstone_dust",
                    "chance": 0.75
                }, {
                    "item": "minecraft:glow_ink_sac",
                    "chance": 0.5
                },{
                    "item": "minecraft:paper",
                    "chance": 0.5
                }
            ],
            "fluid": {
                "fluid": "minecraft:water",
                "amount": 250
            }
        }
    })
    //
    //
    event.custom({
        "type": "integrateddynamics:squeezer",
        "item": {
            "item": "homespun:ironberries"
        },
        "result": {
            "items": [{
                    "item": {
                        "item": "homespun:tiny_iron_dust",
                        "count": 3
                    }
                }, {
                    "item": "homespun:tiny_iron_dust",
                    "chance": 0.75
                }, {
                    "item": "homespun:tiny_iron_dust",
                    "chance": 0.5
                }
            ],
            "fluid": {
                "fluid": "homespun:ironberry_juice",
                "amount": 250
            }
        }
    })
    //
    //
    event.custom({
        "type": "integrateddynamics:squeezer",
        "item": {
            "item": "minecraft:dirt"
        },
        "result": {
            "items": [{
                    "item": {
                        "item": "minecraft:clay_ball",
                        "count": 1
                    }
                }, {
                    "item": "minecraft:clay_ball",
                    "chance": 0.75
                }, {
                    "item": "minecraft:clay_ball",
                    "chance": 0.5
                }
            ],
            "fluid": {
                "fluid": "thermal:crude_oil",
                "amount": 125
            }
        }
    })
    //
    //



    
})
