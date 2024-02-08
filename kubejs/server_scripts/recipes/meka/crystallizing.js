ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "gas",
        "input": {
            "amount": 100,
            "gas": "mekanism:steam"
        },
        "output": {
            "item": "mekanism:dust_lithium"
        }
    })

    event.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "gas",
        "input": {
            "amount": 100,
            "gas": "mekanism:ethene"
        },
        "output": {
            "item": "mekanism:dust_lithium"
        }
    })

})