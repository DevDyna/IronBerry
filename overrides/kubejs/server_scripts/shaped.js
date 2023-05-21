ServerEvents.recipes(event => {
    //shaped
    event.shaped('1x homespun:crushing_tub', [
            '   ',
            'P P',
            'PBP'
        ], {
        B: 'minecraft:bowl',
        P: '#minecraft:planks'
    })
    //
    //
    //
    event.shaped('1x minecraft:raw_iron', [
            'III',
            'III',
            'III'
        ], {
        I: 'homespun:tiny_iron_dust'
    })
    //
    //
    //
    event.shaped('1x reactive:scroll', [
            'DPG',
            'RPR',
            'IPD'
        ], {
        I: 'minecraft:ink_sac',
        G: 'minecraft:glow_ink_sac',
        D: 'minecraft:glowstone_dust',
        R: 'minecraft:redstone',
        P: 'minecraft:paper'
    })
    //
    //
    //
    event.shaped('1x pedestals:upgrade_pedestal_cobblegen', [
            'RGP',
            'GRP',
            'PPP'
        ], {
        P: 'minecraft:paper',
        G: 'minecraft:glowstone_dust',
        R: 'minecraft:redstone'
    })
    //
    //
    //
    event.shaped('16x minecraft:scaffolding', [
            'RSR',
            'R R',
            'R R'
        ], {
        S: 'minecraft:stick',
        R: 'minecraft:string'
    })
    //
    //
    //
    event.shaped('1x kubejs:blank', [
            'MMM',
            'MPM',
            'MMM'
        ], {
        M: 'prettypipes:blank_module',
        P: 'prettypipes:pipe'
    })
    //
    //
    //
    event.shaped('32x prettypipes:pipe', [
            'NNN',
            'GBG',
            'NNN'
        ], {
        B: 'prettypipes:blank_module',
        G: 'reactive:quartz_bottle',
        N: 'minecraft:iron_nugget'
    })
    //
    //
    //
    event.shaped('1x integrateddynamics:squeezer', [
            'IMI',
            'IRI',
            'ITI'
        ], {
        I: 'pneumaticcraft:ingot_iron_compressed',
        M: 'kubejs:casing',
        T: 'homespun:crushing_tub',
        R: 'homespun:redstone_acid'
    })
    //
    //
    //
    event.shaped('1x integrateddynamics:drying_basin', [
            'INI',
            'IRI',
            'ITI'
        ], {
        N: 'kubejs:machine',
        I: 'pneumaticcraft:ingot_iron_compressed',
        T: 'homespun:evaporating_basin',
        R: 'homespun:redstone_acid'
    })
    //
    //
    //
    event.shaped('1x ironchest:copper_chest', [
            'III',
            'ICI',
            'III'
        ], {
        I: 'minecraft:iron_ingot',
        C: 'minecraft:chest'
    })
    //
    //
    //
    event.shaped('1x ironchest:iron_chest', [
            'III',
            'ICI',
            'III'
        ], {
        I: 'minecraft:iron_ingot',
        C: 'ironchest:copper_chest'
    })
    //
    //
    //
    event.shaped('1x ironchest:gold_chest', [
            'III',
            'ICI',
            'III'
        ], {
        I: 'minecraft:iron_ingot',
        C: 'ironchest:iron_chest'
    })
    //
    //
    //
    event.shaped('1x ironchest:diamond_chest', [
            'III',
            'ICI',
            'III'
        ], {
        I: 'minecraft:iron_ingot',
        C: 'ironchest:gold_chest'
    })
    //
    //
    //
    event.shaped('1x integrateddynamics:mechanical_squeezer', [
            'MBM',
            'LAL',
            'CZC'
        ], {
        M: 'kubejs:machine',
        B: 'homespun:cast_iron_block',
        A: 'integrateddynamics:squeezer',
        Z: 'bluepower:blulectric_alloyfurnace',
        L: 'bluepower:blulectric_cable',
        C: 'kubejs:casing'
    })
    //
    //
    //
    event.shaped('1x integrateddynamics:mechanical_drying_basin', [
            'MBM',
            'LAL',
            'CZC'
        ], {
        M: 'kubejs:machine',
        B: 'homespun:cast_iron_block',
        A: 'integrateddynamics:drying_basin',
        Z: 'bluepower:blulectric_alloyfurnace',
        L: 'bluepower:blulectric_cable',
        C: 'kubejs:casing'
    })
    //
    //
    //
	event.shaped('1x minecraft:furnace',[
	'CCC',
	'CBC',
	'CCC'
	],{
		C: '#minecraft:stone_tool_materials',
		B: 'bluepower:blulectric_furnace'
	})
//
//
//
    event.shaped('1x ironchest:copper_to_iron_chest_upgrade', [
            'III',
            'ICI',
            'III'
        ], {
        I: 'minecraft:iron_ingot',
        C: 'ironchest:wood_to_copper_chest_upgrade'
    })
    //
    //
    //
    event.shaped('1x ironchest:iron_to_gold_chest_upgrade', [
            'III',
            'ICI',
            'III'
        ], {
        I: 'minecraft:iron_ingot',
        C: 'ironchest:copper_to_iron_chest_upgrade'
    })
    //
    //
    //
    event.shaped('1x ironchest:gold_to_diamond_chest_upgrade', [
            'III',
            'ICI',
            'III'
        ], {
        I: 'minecraft:iron_ingot',
        C: 'ironchest:iron_to_gold_chest_upgrade'
    })
    //
    //
    //
    event.shaped('1x minecraft:composter', [
            'I I',
            'I I',
            'III'
        ], {
        I: '#minecraft:wooden_slabs'
    })
    //
    //
    //





})
