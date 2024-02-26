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


})