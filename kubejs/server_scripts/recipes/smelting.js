ServerEvents.recipes(event => {

    function smelt(input, output) {
        event.smelting(output, input)
    }

    smelt('kubejs:raw_copper_nugget', 'homespun:copper_nugget')
    smelt('kubejs:raw_iron_nugget', 'minecraft:iron_nugget')
    smelt('kubejs:raw_gold_nugget', 'minecraft:gold_nugget')
	smelt('twilightforest:armor_shard_cluster','twilightforest:knightmetal_ingot')
    smelt('nuclearcraft:manganese_ingot','thoriumreactors:manganese_ingot')
})
