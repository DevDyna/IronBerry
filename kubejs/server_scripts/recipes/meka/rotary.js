ServerEvents.recipes(event => {

    event.custom({
        "type": "mekanism:rotary",
        "fluidInput": {
            "amount": 1,
            "fluid": "minecraft:water"
        },
        "fluidOutput": {
            "amount": 1,
            "fluid": "minecraft:water"
        },
        "gasInput": {
            "amount": 1,
            "gas": "mekanism:steam"
        },
        "gasOutput": {
            "amount": 1,
            "gas": "mekanism:steam"
        }
    })

})
