ServerEvents.recipes(event => {
    event.custom({
        type: `extendedcrafting:compressor`,
        powerCost: 5000000.0,
        inputCount: 16,
        ingredient: {
            item: 'kubejs:crystaltine',
        },
        catalyst: {
            item: 'extendedcrafting:flux_star',
        },
        result: {
            item: 'extendedcrafting:crystaltine_ingot',
        },
    })

    event.custom({
        type: `extendedcrafting:compressor`,
        powerCost: 5000000.0,
        inputCount: 16,
        ingredient: {
            item: 'extendedcrafting:crystaltine_ingot',
        },
        catalyst: {
            item: 'extendedcrafting:flux_star',
        },
        result: {
            item: 'extendedcrafting:singularity', 
            nbt: '{Id:"extendedcrafting:crystaltine"}'
        },
    })

})