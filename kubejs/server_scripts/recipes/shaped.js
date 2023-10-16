ServerEvents.recipes(event => {
    //shaped
    event.shaped('homespun:crushing_tub', [
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
    event.shaped('minecraft:raw_iron', [
            'III',
            'III',
            'III'
        ], {
        I: 'homespun:tiny_iron_dust'
    })
    //
    //
    //
    event.shaped('reactive:scroll', [
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
    event.shaped('pedestals:upgrade_pedestal_cobblegen', [
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
    event.shaped('kubejs:blank', [
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
    event.shaped('integrateddynamics:squeezer', [
            'IMI',
            'IRI',
            'ITI'
        ], {
        I: 'kubejs:pre_compressed',
        M: 'kubejs:casing',
        T: 'homespun:crushing_tub',
        R: 'homespun:redstone_acid'
    })
    //
    //
    //
    event.shaped('integrateddynamics:drying_basin', [
            'INI',
            'IRI',
            'ITI'
        ], {
        N: 'kubejs:machine',
        I: 'kubejs:pre_compressed',
        T: 'homespun:evaporating_basin',
        R: 'homespun:redstone_acid'
    })
    //
    //
    //
    event.shaped('ironchest:copper_chest', [
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
    event.shaped('ironchest:iron_chest', [
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
    event.shaped('ironchest:gold_chest', [
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
    event.shaped('ironchest:diamond_chest', [
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
    event.shaped('integrateddynamics:mechanical_squeezer', [
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
    event.shaped('integrateddynamics:mechanical_drying_basin', [
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
    event.shaped('minecraft:furnace', [
            'CCC',
            'CBC',
            'CCC'
        ], {
        C: '#minecraft:stone_tool_materials',
        B: 'bluepower:blulectric_furnace'
    })
    //
    //
    //
    event.shaped('ironchest:copper_to_iron_chest_upgrade', [
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
    event.shaped('ironchest:iron_to_gold_chest_upgrade', [
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
    event.shaped('ironchest:gold_to_diamond_chest_upgrade', [
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
    event.shaped('minecraft:composter', [
            'I I',
            'I I',
            'III'
        ], {
        I: '#minecraft:wooden_slabs'
    })
    //
    //
    //
    event.shaped('thermal:fluid_cell_frame', [
            'CGC',
            'G G',
            'CGC'
        ], {
        G: '#forge:nuggets/iron',
        C: '#forge:ingots/copper'
    })
    //
    //
    //
    event.shaped('thermal:energy_cell_frame', [
            'CGC',
            'G G',
            'CGC'
        ], {
        G: '#forge:ingots/electrum',
        C: '#forge:ingots/lead'
    })
    //
    //
    //
    event.shaped('minecraft:chest', [
            'PPP',
            'P P',
            'PPP'
        ], {
        P: '#minecraft:planks'
    })
    //
    //
    //
    event.shaped('4x minecraft:chest', [
            'PPP',
            'P P',
            'PPP'
        ], {
        P: '#minecraft:logs'
    })
    //
    //
    //
    event.shaped('cyclic:hopper', [
            'W W',
            'WCW',
            ' W '
        ], {
        W: '#minecraft:planks',
        C: '#forge:chests'
    })
    //
    //
    //
    event.shaped('tombstone:fishing_rod_of_misadventure', [
            '  F',
            ' BS',
            'B D'
        ], {
        F: 'minecraft:fishing_rod',
        B: 'minecraft:stick',
        S: 'tombstone:dust_of_vanishing',
        D: 'tombstone:dust_of_frost'
    })
    //
    //
    //
    event.shaped('bluepower:lampinverted_rgb', [
            'GSG',
            'GSG',
            'GRG'
        ], {
        G: 'minecraft:glass_pane',
        R: 'minecraft:redstone_torch',
        S: 'reactive:stardust'
    })
    //
    //
    //
    event.shaped('bluepower:lamp_rgb', [
            'GSG',
            'GSG',
            'GRG'
        ], {
        G: 'minecraft:glass_pane',
        R: 'minecraft:redstone',
        S: 'reactive:stardust'
    })
    //
    //
    //
    event.shaped('bluepower:cagelamp_rgb', [
            'BSB',
            'GSG',
            'LRL'
        ], {
        G: 'minecraft:glass_pane',
        R: 'minecraft:redstone',
        S: 'reactive:stardust',
        L: 'minecraft:stone_slab',
        B: 'minecraft:iron_bars'
    })
    //
    //
    //
    event.shaped('bluepower:cagelampinverted_rgb', [
            'BSB',
            'GSG',
            'LRL'
        ], {
        G: 'minecraft:glass_pane',
        R: 'minecraft:redstone_torch',
        S: 'reactive:stardust',
        L: 'minecraft:stone_slab',
        B: 'minecraft:iron_bars'
    })
    //
    //
    //
    event.shaped('bluepower:fixtureinverted_rgb', [
            'GSG',
            'GSG',
            'LRL'
        ], {
        G: 'minecraft:glass_pane',
        L: 'minecraft:stone_slab',
        R: 'minecraft:redstone_torch',
        S: 'reactive:stardust'
    })
    //
    //
    //
    event.shaped('bluepower:fixture_rgb', [
            'GSG',
            'GSG',
            'LRL'
        ], {
        G: 'minecraft:glass_pane',
        R: 'minecraft:redstone',
        L: 'minecraft:stone_slab',
        S: 'reactive:stardust'
    })
    //
    //
    //
    event.shaped('ae2:entropy_manipulator', [
            ' RG',
            ' SR',
            'T  '
        ], {
        G: 'tombstone:impregnated_diamond',
        R: 'kubejs:rose',
        S: 'kubejs:iron_rod',
        T: 'tombstone:bone_needle'
    })
    //
    //
    //
    event.shaped('sophisticatedstorage:controller', [
            'THT',
            'HFH',
            'THT'
        ], {
        T: 'supplementaries:timber_frame',
        H: 'sophisticatedstorage:advanced_hopper_upgrade',
        F: 'sophisticatedstorage:upgrade_base'
    })
    //
    //
    //
    event.shaped('kubejs:illuminati', [
            'SES',
            'EPE',
            'STS'
        ], {
        T: 'minecraft:dead_bush',
        S: 'tombstone:soul_receptacle',
        E: 'supplementaries:soap',
        P: 'exoticbirds:phoenix_egg'
    })
    //
    //
    //
    event.shaped('kubejs:grave_spawn', [
            'SES',
            'EPE',
            'STS'
        ], {
        T: 'reactive:stardust',
        S: 'tombstone:soul_receptacle',
        E: 'kubejs:scroll_safety',
        P: 'exoticbirds:phoenix_egg'
    })
    //
    //
    //
    event.shaped('alchemygadgetry:potion_slingshot', [
            ' ST',
            ' SS',
            'S  '
        ], {
        T: 'minecraft:glass_bottle',
        S: 'minecraft:stick'
    })
    //
    //
    //
    event.shaped('ars_nouveau:orange_sbed', [
            'SSS',
            'SWS',
            'SSS'
        ], {
        W: '#minecraft:wool',
        S: 'minecraft:string'
    })
    //
    //
    //
    event.shaped('exoticbirds:hummingbird_feeder', [
            'RCR',
            'PFP',
            'RSR'
        ], {
        R: 'minecraft:redstone',
        C: 'essentials:animal_feed',
        S: 'minecraft:sugar',
        F: 'quark:feeding_trough',
        P: 'minecraft:red_dye'
    })
    //
    //
    //
    event.shaped('tombstone:christmas_hat', [
            'SMS',
            'VRF',
            'SGS'
        ], {
        S: 'reactive:stardust',
        M: 'tombstone:merchant_stone',
        V: 'tombstone:dust_of_vanishing',
        G: 'tombstone:grave_dust',
        R: 'tombstone:impregnated_diamond',
        F: 'tombstone:dust_of_frost'
    })
    //
    //
    //
    event.shaped('cyclic:crusher', [
            'SHS',
            'CFC',
            'SHS'
        ], {
        S: 'minecraft:stone',
        H: 'minecraft:hopper',
        C: 'minecraft:stonecutter',
        F: 'thermal:fluid_cell_frame'
    })
    //
    //
    //
    event.shaped('kubejs:processor', [
            'OVO',
            'VPV',
            'OVO'
        ], {
        P: 'integrateddynamics:portable_logic_programmer',
        V: 'integrateddynamics:variable',
        O: 'integrateddynamics:enhancement_offset'
    })
    //
    //
    //
    event.shaped('cyclic:battery', [
            'VBB',
            'BCB',
            'BBV'
        ], {
        B: 'integrateddynamics:energy_battery',
        V: 'integrateddynamics:variable',
        C: 'integrateddynamics:cable'
    })
    //
    //
    //

    event.shaped('minecraft:barrel', [
            'PSP',
            'P P',
            'PSP'
        ], {
        S: '#minecraft:wooden_slabs',
        P: '#minecraft:planks'
    })
    //
    //
    //

    event.shaped('integrateddynamics:menril_wood', [
            'CVC',
            'SLP',
            'ROR'
        ], {
        C: 'thermal:compost',
        V: 'thermal:device_collector',
        S: 'engineersdecor:small_tree_cutter',
        L: 'integrateddynamics:menril_wood_stripped',
        P: 'engineersdecor:factory_placer',
        O: 'kubejs:ore_bone_meal',
        R: 'kubejs:rich_bone_meal'
    })
    //
    //
    //
    event.shaped('twilightforest:uncrafting_table', [
            'CCC',
            'WEW',
            'WWW'
        ], {
        C: 'dyenamics:maroon_wool',
        E: 'kubejs:grave_spawn',
		W: 'homespun:stripped_ironwood_wood'
    })
    //
    //
    //
	    event.shaped('minecraft:hopper', [
            'I I',
            'ICI',
            ' I '
        ], {
        C: '#forge:chests/wooden',
		I: 'minecraft:iron_ingot'
    })
	
		    event.shaped('kubejs:quantity_base', [
            'EEE',
            'ESE',
            'EEE'
        ], {
        E: 'minecraft:echo_shard',
		S: 'minecraft:sculk'
    })
	
		    event.shaped('kubejs:speed_base', [
            'EEE',
            'EBE',
            'EEE'
        ], {
        E: 'minecraft:echo_shard',
		B: 'minecraft:sculk_catalyst'
    })
	
	
	
	
	
	
	
	
		function shaplus(item_input,slot_input,output){
		let recipe = [[],[],[]]
		for(let i =0 ;i<slot_input.length;i++){			
			for(let j=0;j<slot_input[i].length;j++){
			//set on recipe index of array[[],[],[]] of array[] item_input of index i
			recipe[Math.floor(slot_input[i][j]/3)][slot_input[i][j] - (3*Math.floor(slot_input[i][j]/3))] = item_input[i]
			}
		}
		let id = ''
		for(let i=0;i<item_input.length;i++){
			id = id+item_input[i]+'_'+slot_input[i].length
		}
		event.shaped(output,recipe).id(RegX(id+output))
	}
	
	/*
	012
	345
	678
	*/
	
	//shaplus(['ars_nouveau:archwood_planks','ars_nouveau:archwood_slab'],[[0,2,3,5],[1,4]],'ars_nouveau:repository')
	shaplus(['minecraft:glass_bottle','#forge:glass'],[[4],[3,5,6,7,8]],'supplementaries:jar')
	
})
