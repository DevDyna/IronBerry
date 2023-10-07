ServerEvents.recipes(event => {
    ////drying_basin
    //
    //
    event.custom({
        "type": "integrateddynamics:mechanical_drying_basin",
        "fluid": {
            "fluid": "homespun:ironberry_juice",
            "amount": 10
        },
        "duration": 10,
        "result": {
            "item": "homespun:tiny_iron_dust"
        }
    })
    //
    event.custom({
        "type": "integrateddynamics:mechanical_drying_basin",
        "fluid": {
            "fluid": "thermal:crude_oil",
            "amount": 1000
        },
        "duration": 100,
        "result": {
            "item": "minecraft:coal"
        }
    })
    //
    //
    event.custom({
        "type": "integrateddynamics:mechanical_drying_basin",
        "item": "minecraft:bucket",
        "fluid": {
            "fluid": "kubejs:acid",
            "amount": 1000
        },
        "duration": 1,
        "result": {
            "item": "reactive:acid_bucket"
        }
    })
    //
    //
	    event.custom({
        "type": "integrateddynamics:mechanical_drying_basin",
        "item": "minecraft:cobblestone",
        "fluid": {
            "fluid": "minecraft:water",
            "amount": 1000
        },
        "duration": 1,
        "result": {
            "item": "quark:sturdy_stone"
        }
    })
    //
    //
		    event.custom({
        "type": "integrateddynamics:mechanical_drying_basin",
        "item": "minecraft:bundle",
        "fluid": {
            "fluid": "integrateddynamics:menril_resin",
            "amount": 10
        },
        "duration": 80,
        "result": {
            "item": Item.of('minecraft:bundle', '{Items:[{Count:1b,id:"integrateddynamics:crystalized_menril_chunk"}]}')
        }
    })
    //
    //
			    event.custom({
        "type": "integrateddynamics:mechanical_drying_basin",
        "item": "minecraft:bundle",
        "fluid": {
            "fluid": "integrateddynamics:liquid_chorus",
            "amount": 10
        },
        "duration": 80,
        "result": {
            "item": Item.of('minecraft:bundle', '{Items:[{Count:1b,id:"integrateddynamics:crystalized_chorus_chunk"}]}')
        }
    })
    //
    //
				    event.custom({
        "type": "integrateddynamics:mechanical_drying_basin",
        "item": 'homespun:ironberries',
        "fluid": {
            "fluid": "integrateddynamics:menril_resin",
            "amount": 100
        },
        "duration": 80,
        "result": {
            "item": 'integrateddynamics:menril_berries'
        }
    })
    //
    //
	
	
})
