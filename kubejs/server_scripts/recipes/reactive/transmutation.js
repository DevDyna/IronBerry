ServerEvents.recipes(event => {
    //transmutation
    //
	let transmute = reactive(event,false)
    let transmute_tag = reactive(event,true)

    transmute(
        "minecraft:ink_sac",
        "bluepower:teslatite_dust",
        ["reactive:caustic", "reactive:soul"],
        10, 2)

    transmute(
        "kubejs:blank",
        "kubejs:casing",
        ["reactive:body", "reactive:light"],
        10, 2)

  /*  transmute(
        "minecraft:iron_nugget",
        "reactive:quartz_bottle",
        ["reactive:mind", "reactive:light"],
        10, 2)
*/
    transmute(
        "minecraft:iron_ingot",
        "minecraft:copper_ingot",
        ["reactive:light"],
        10, 2)

    transmute(
        "minecraft:copper_ingot",
        "bluepower:zinc_ingot",
        ["reactive:light","reactive:verdant"],
        10, 2)

    transmute(
        "minecraft:copper_ingot",
        "minecraft:echo_shard",
        ["reactive:caustic", "reactive:light"],
        10, 2)

    transmute(
        "bluepower:teslatite_block",
        "minecraft:smooth_stone",
        ["reactive:body"],
        10, 2)

    transmute(
        "bluepower:red_alloy_ingot",
        "minecraft:pointed_dripstone",
        ["reactive:verdant", "reactive:body"],
        10, 2)

    transmute(
        "rootsclassic:elderberry",
        "minecraft:fermented_spider_eye",
        ["reactive:caustic"],
        10, 2)

    transmute(
        "homespun:ironberry_juice_bottle",
        "homespun:redstone_acid",
        ["reactive:body", "reactive:caustic"],
        10, 2)
/*
    transmute(
        "bluepower:teslatite_block",
        "minecraft:lapis_block",
        ["reactive:caustic"],
        10, 2)*/

    transmute(
        "minecraft:apple",
        "minecraft:cactus",
        ["reactive:caustic"],
        10, 2)

    transmute(

        "bluepower:teslatite_dust",
        "bluepower:infused_teslatite_dust",
        ["reactive:mind"],
        10, 2)

    transmute_tag(
        "ironberry:indigo_flowers",
        "bluepower:indigo_flower",
        ["reactive:mind"],
        10, 2)
		
	transmute(
        "minecraft:paper",
        "minecraft:book",
        ["reactive:mind"],
        10, 2)

	transmute(
        "reactive:stardust",
        "minecraft:sunflower",
        ["reactive:light"],
        10, 2)

    transmute(
        "kubejs:scroll",
        "tombstone:strange_scroll",
        ["reactive:mind"],
        10, 2)

    transmute(
        "minecraft:cobblestone",
        "minecraft:netherrack",
        ["reactive:caustic"],
        10, 2)
		
		    transmute(
        "bluepower:indigo_flower",
        "minecraft:chorus_fruit",
        ["reactive:verdant"],
        10, 2)


    transmute('bluepower:infused_teslatite_dust',
        'minecraft:lapis_lazuli',["reactive:verdant"],10,2)

    transmute('minecraft:terracotta','minecraft:oxidized_copper',
    ["reactive:verdant"],10,2)

    transmute('bluepower:infused_teslatite_dust','ten3:chlorium_dust',
    ["reactive:caustic"],10,2)

})
