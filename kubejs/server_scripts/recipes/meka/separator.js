ServerEvents.recipes(event => {

    event.custom({
        "type": "mekanism:separating",
        "input": {
            "amount": 2,
            "gas": "mekanism:ethene"
        },
        "leftGasOutput": {
            "amount": 1,
            "gas": "kubejs:clumperio"
        },
        "rightGasOutput": {
            "amount": 9,
            "gas": "mekanism:steam"
        }
    })

    event.custom({
        "type": "mekanism:separating",
        "input": {
            "amount": 2,
            "gas": "mekanism:steam"
        },
        "leftGasOutput": {
            "amount": 1,
            "gas": "kubejs:dustite"
        },
        "rightGasOutput": {
            "amount": 9,
            "gas": "kubejs:nucleonuium"
        }
    })

})