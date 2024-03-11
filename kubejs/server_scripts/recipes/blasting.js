ServerEvents.recipes(event => {

    function blast(input, output) {
        event.blasting(output, input)
    }

    blast('kubejs:raw_copper_nugget', 'homespun:copper_nugget')
    blast('kubejs:raw_iron_nugget', 'minecraft:iron_nugget')
    blast('kubejs:raw_gold_nugget', 'minecraft:gold_nugget')
    blast('nuclearcraft:manganese_ingot','thoriumreactors:manganese_ingot')
    blast('minecraft:iron_ingot', 'thoriumreactors:blasted_iron_ingot')
})
