ServerEvents.recipes(event => {
    //transmutation
    //
	let transmute = reactive(event,false)
    let transmute_tag = reactive(event,true)

    transmute(
        "minecraft:ink_sac",
        "bluepower:teslatite_dust",
        ["reactive:caustic", "reactive:soul"],
        100, 10)

    transmute(
        "kubejs:blank",
        "kubejs:casing",
        ["reactive:body", "reactive:light"],
        100, 50)

    transmute(
        "minecraft:iron_nugget",
        "reactive:quartz_bottle",
        ["reactive:mind", "reactive:light"],
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
        ["reactive:body", "reactive:caustic"],
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

    transmute(

        "bluepower:teslatite_dust",
        "bluepower:infused_teslatite_dust",
        ["reactive:mind"],
        100, 10)

    transmute_tag(
        "ironberry:indigo_flowers",
        "bluepower:indigo_flower",
        ["reactive:mind"],
        100, 10)
		
	transmute(
        "minecraft:paper",
        "minecraft:book",
        ["reactive:mind"],
        100, 10)

	transmute(
        "reactive:stardust",
        "minecraft:sunflower",
        ["reactive:light"],
        100, 10)

    transmute(
        "kubejs:scroll",
        "tombstone:strange_scroll",
        ["reactive:mind"],
        100, 10)

    transmute(
        "minecraft:cobblestone",
        "minecraft:netherrack",
        ["reactive:caustic"],
        100, 10)
		
		    transmute(
        "bluepower:indigo_flower",
        "minecraft:chorus_fruit",
        ["reactive:verdant"],
        100, 10)

})
