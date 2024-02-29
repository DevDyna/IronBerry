ServerEvents.recipes(event => {
	
	event.custom({
        "type": "cyclic:crusher",
        "input": {
            "item": "minecraft:granite"
        },
        "energy": {
            "ticks": 100,
            "rfpertick": 20
        },
        "result": {
            "item": "minecraft:cobblestone",

            "count": 1
        },
        "percent": 25,
        "bonus": {
            "item": "minecraft:diorite",
            "count": 1
        }
    })


	event.custom({
        "type": "cyclic:crusher",
        "input": {
            "item": "minecraft:diorite"
        },
        "energy": {
            "ticks": 100,
            "rfpertick": 20
        },
        "result": {
            "item": "minecraft:cobblestone",

            "count": 1
        },
        "percent": 50,
        "bonus": {
            "item": "minecraft:quartz",
            "count": 1
        }
    })


	event.custom({
        "type": "cyclic:crusher",
        "input": {
            "item": 'supplementaries:antique_ink'
        },
        "energy": {
            "ticks": 10,
            "rfpertick": 5
        },
        "result": {
            "item": "minecraft:ink_sac",

            "count": 2
        },
        "percent": 25,
        "bonus": {
            "item": "minecraft:glow_ink_sac",
            "count": 1
        }
    })


    event.custom({
        "type": "cyclic:crusher",
        "input": {
            "item": 'minecraft:fishing_rod'
        },
        "energy": {
            "ticks": 10,
            "rfpertick": 5
        },
        "result": {
            "item": "minecraft:stick",

            "count": 2
        },
        "percent": 50,
        "bonus": {
            "item": "minecraft:string",
            "count": 1
        }
    })

    event.custom({
        "type": "cyclic:crusher",
        "input": {
            "item": 'minecraft:bone_meal'
        },
        "energy": {
            "ticks": 10,
            "rfpertick": 5
        },
        "result": {
            "item": "minecraft:white_dye",

            "count": 3
        },
        "percent": 50,
        "bonus": {
            "item": "minecraft:white_dye",
            "count": 1
        }
    })

    
})