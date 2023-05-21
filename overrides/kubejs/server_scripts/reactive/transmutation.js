ServerEvents.recipes(event => {
    //transmutation
    //


    /*----------------------------------------------------------------------------------------------*/
    let transmute = (
        input, output,
        reagents, min, cost) => {
        event.custom({
            "type": "reactive:transmutation",
            "reactant": {
                "item": input
            },
            "product": {
                "item": output
            },
            "reagents": reagents,
            "min": min,
            "cost": cost
        })
    }
    /*----------------------------------------------------------------------------------------------*/

    transmute(
        "minecraft:ink_sac",
        "bluepower:teslatite_dust",
        ["reactive:caustic", "reactive:soul"],
        100, 10)

    transmute(
        "kubejs:blank",
        "kubejs:casing",
        ["reactive:mind", "reactive:body", "reactive:caustic", "reactive:light", "reactive:verdant", "reactive:soul"],
        100, 50)

    transmute(
        "minecraft:iron_nugget",
        "reactive:quartz_bottle",
        ["reactive:mind", "reactive:light"],
        100, 10)

    transmute(
        "minecraft:poppy",
        "bluepower:indigo_flower",
        ["reactive:mind"],
        100, 10)

    transmute(
        "minecraft:iron_ingot",
        "minecraft:copper_ingot",
        ["reactive:light"],
        100, 10)

    transmute(
        "minecraft:copper_ingot",
        "bluepower:zinc_ingot",
        ["reactive:caustic", "reactive:light"],
        100, 10)

    transmute(
        "minecraft:copper_block",
        "minecraft:sculk",
        ["reactive:caustic", "reactive:light"],
        100, 10)

    transmute(
        "bluepower:teslatite_block",
        "minecraft:smooth_stone",
        ["reactive:body"],
        100, 10)

    transmute(
        "bluepower:red_alloy_ingot",
        "minecraft:pointed_dripstone",
        ["reactive:verdant", "reactive:body"],
        100, 10)

    transmute(
        "rootsclassic:elderberry",
        "minecraft:fermented_spider_eye",
        ["reactive:caustic"],
        100, 10)

    transmute(
        "homespun:ironberry_juice_bottle",
        "homespun:redstone_acid",
        ["reactive:mind", "reactive:body", "reactive:caustic", "reactive:light", "reactive:verdant", "reactive:soul"],
        100, 50)

    transmute(
        "bluepower:teslatite_block",
        "minecraft:lapis_block",
        ["reactive:caustic"],
        100, 10)
		
    transmute(
        "minecraft:apple",
        "minecraft:cactus",
        ["reactive:caustic"],
        100, 10)

})
