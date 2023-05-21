ServerEvents.recipes(event => {
    ////recipe removed
    //by output
    //
    event.remove({
        output: [
            '#ironberry:output',
            '#ironberry:any',
            '#ironberry:disabled',
        ]
    })
    //
    //
    //by input
    //
    event.remove({
        input: [
            '#ironberry:input',
            '#ironberry:any',
            '#ironberry:disabled',
        ]
    })
    //
    //
    //by recipe-id
    //
    event.remove({
        id: 'homespun:crushing_flint_from_gravel'
    })
    event.remove({
        id: 'homespun:crushing_sugar_from_beets'
    })
    event.remove({
        id: 'homespun:crushing_ironberry_juice_from_ironberries'
    })
    event.remove({
        id: 'homespun:evaporating_tiny_iron_dust_from_ironberry_juice'
    })
    event.remove({
        id: 'homespun:crushing_tiny_iron_dust_from_raw_iron'
    })
    event.remove({
        id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'
    })
    event.remove({
        id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'
    })
    event.remove({
        id: 'pedestals:pedestals/pedestal_stone'
    })
    event.remove({
        id: 'minecraft:raw_iron'
    })
    //
    //
    //by type-id
    //
    //
    event.remove({
        type: 'pedestals:cobblegen'
    })
    //
    //
    //by mod-id
    //
    //
    event.remove({
        mod: 'thermal'
    })
    event.remove({
        mod: 'cobblefordays'
    })
    event.remove({
        mod: 'ironchest'
    })
    event.remove({
        mod: 'systeams'
    })
    event.remove({
        mod: 'prettypipes'
    })
    event.remove({
        mod: 'modularrouters'
    })
    event.remove({
        mod: 'pneumaticcraft'
    })
    event.remove({
        mod: 'integrateddynamics'
    })
    event.remove({
        mod: 'integratedtunnels'
    })
    event.remove({
        mod: 'integratedterminals'
    })
    event.remove({
        mod: 'integratednbt'
    })
    //
    //
    //
})
