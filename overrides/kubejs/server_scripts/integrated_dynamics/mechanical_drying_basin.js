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
})
