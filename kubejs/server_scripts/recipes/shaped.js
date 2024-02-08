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

    event.shaped('ars_nouveau:imbuement_chamber', [
            'ECE',
            'EBE',
            'ECE'
        ], {
        E: 'ars_nouveau:archwood_planks',
        B: 'ars_nouveau:source_gem',
        C: 'minecraft:gold_ingot'
    })

    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"gateways:battle_gate_large"}'), [
            'AWS',
            'BDB',
            'SWA'
        ], {
        S: 'kubejs:scroll_discontinuity',
        A: 'kubejs:scroll_safety',
        B: 'tombstone:dark_marble',
        W: 'tombstone:white_marble',
        D: 'tombstone:voodoo_poppet'
    })

    event.shaped(Item.of('hostilenetworks:data_model', '{data_model:{data:1,id:"hostilenetworks:grave_guardian"}}'), [
            'ABC',
            'DEF',
            'GHI'
        ], {
        I: 'twilightforest:magic_map_focus',
        A: 'kubejs:processor',
        C: 'twilightforest:maze_map_focus',
        D: 'kubejs:ritual_tablet',
        B: 'exoticbirds:phoenix_egg',
        H: 'thermaloot:variable_capacitor',
        G: 'tombstone:soul_receptacle',
        F: 'quark:blank_rune',
        E: Item.of('gateways:gate_pearl', '{gateway:"gateways:battle_gate_large"}').strongNBT()

    })
	
event.shaped(Item.of('gateways:gate_pearl', '{gateway:"gateways:battle_gate_large"}'), [
            'PGP',
            'GSG',
            'PGP'
        ], {
        S: 'tombstone:soul_receptacle',
        P: 'pneumaticcraft:plastic',
        G: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:grave_guardian"}}').strongNBT()
    })
	
	
	
	

    /* 	event.shaped('thoriumreactors:white_industrial_block_brick', [
    'EEE',
    'EBE',
    'EEE'
    ], {
    E: 'minecraft:iron_nugget',
    B: 'minecraft:bricks'
    }) */

    function shapex(items, result) {
        event.shaped(result, ['ABC', 'DEF', 'GHI'], {
            A: items[0],
            B: items[1],
            C: items[2],
            D: items[3],
            E: items[4],
            F: items[5],
            G: items[6],
            H: items[7],
            I: items[8]
        })
    }

    function shaplus(item_input, slot_input, output) {
        let recipe = [[], [], []]
        for (let i = 0; i < slot_input.length; i++) {
            for (let j = 0; j < slot_input[i].length; j++) {
                //set on recipe index of array[[],[],[]] of array[] item_input of index i
                recipe[Math.floor(slot_input[i][j] / 3)][slot_input[i][j] - (3 * Math.floor(slot_input[i][j] / 3))] = item_input[i]
            }
        }
        let id = ''
            for (let i = 0; i < item_input.length; i++) {
                id = id + item_input[i] + '_' + slot_input[i].length
            }
            event.shaped(output, recipe).id(RegX(id + output))
    }

    /*
    012
    345
    678
     */

    //shaplus(['ars_nouveau:archwood_planks','ars_nouveau:archwood_slab'],[[0,2,3,5],[1,4]],'ars_nouveau:repository')
    shaplus(['minecraft:glass_bottle', '#forge:glass'], [[4], [3, 5, 6, 7, 8]], 'supplementaries:jar')
    shapex(['kubejs:miniboss_trophy', 'ars_nouveau:mob_jar', 'kubejs:miniboss_trophy', 'kubejs:aquamarine', 'kubejs:machine_frame', 'kubejs:jade', 'kubejs:miniboss_trophy', 'thermaloot:variable_capacitor', 'kubejs:miniboss_trophy'], 'hostilenetworks:sim_chamber')
    shapex(['twilightforest:ironwood_ingot', 'kubejs:processor', 'twilightforest:knightmetal_ingot', 'kubejs:topaz', 'kubejs:machine', 'kubejs:iolite', 'twilightforest:knightmetal_ingot', 'twilightforest:steeleaf_ingot', 'twilightforest:ironwood_ingot'], 'kubejs:machine_frame')
	shapex(
	['kubejs:boss_trophy', 'ars_nouveau:mob_jar', 'kubejs:boss_trophy', 'twilightforest:fiery_ingot', 'kubejs:machine_frame', 'twilightforest:carminite', 'kubejs:boss_trophy', 'quark:blank_rune', 'kubejs:boss_trophy'],
	'hostilenetworks:loot_fabricator')
	
	shapex(['thermal:device_water_gen', 'minecraft:bucket', 'thermal:device_water_gen', 'minecraft:bucket', 'cyclic:tank', 'minecraft:bucket', 'thermal:device_water_gen', 'minecraft:bucket', 'thermal:device_water_gen'],'thoriumreactors:water_source_block')
	shapex(['pneumaticcraft:ingot_iron_compressed','cyclic:tank','pneumaticcraft:ingot_iron_compressed'],'2x pneumaticcraft:small_tank')
	shapex(['kubejs:pre_compressed', 'kubejs:pre_compressed', 'kubejs:pre_compressed', 'kubejs:pre_compressed', 'kubejs:blank', 'kubejs:pre_compressed', 'kubejs:pre_compressed', 'kubejs:pre_compressed', 'kubejs:pre_compressed'],'64x pneumaticcraft:pressure_chamber_wall')

	shapex(['minecraft:hopper', 'pneumaticcraft:pressure_chamber_wall', 'uppers:upper'],'2x pneumaticcraft:pressure_chamber_interface')

	shapex(['integrateddynamics:cable', 'thermal:basalz_rod', 'integrateddynamics:cable', 'thermal:blitz_rod', 'kubejs:processor', 'twilightforest:arctic_fur', 'integrateddynamics:cable', 'thermal:blizz_rod', 'integrateddynamics:cable'],'16x pneumaticcraft:reinforced_pressure_tube')

	shapex(['pneumaticcraft:pressure_chamber_wall', 'pneumaticcraft:reinforced_pressure_tube'],Item.of('pneumaticcraft:pressure_chamber_valve', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	shapex(['pneumaticcraft:pressure_chamber_valve'],Item.of('pneumaticcraft:pressure_chamber_valve', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	shapex(['pneumaticcraft:liquid_compressor'],Item.of('pneumaticcraft:liquid_compressor', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	shapex(['pneumaticcraft:thermopneumatic_processing_plant'],Item.of('pneumaticcraft:thermopneumatic_processing_plant', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	shapex(['pneumaticcraft:fluid_mixer'],Item.of('pneumaticcraft:fluid_mixer', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	shapex(['minecraft:air','supplementaries:crank','minecraft:air','minecraft:air', 'pneumaticcraft:reinforced_pressure_tube','minecraft:air','minecraft:air', 'kubejs:pre_compressed','minecraft:air'],'pneumaticcraft:manual_compressor')
	shapex(['pneumaticcraft:reinforced_pressure_tube', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:reinforced_pressure_tube', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:small_tank', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:reinforced_pressure_tube', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:reinforced_pressure_tube'],Item.of('pneumaticcraft:liquid_compressor', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	shapex(['pneumaticcraft:reinforced_pressure_tube', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:reinforced_pressure_tube', 'pneumaticcraft:small_tank', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:small_tank', 'pneumaticcraft:reinforced_pressure_tube', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:reinforced_pressure_tube'],Item.of('pneumaticcraft:thermopneumatic_processing_plant', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	shapex(['pneumaticcraft:reinforced_pressure_tube', 'pneumaticcraft:small_tank', 'pneumaticcraft:reinforced_pressure_tube', 'pneumaticcraft:small_tank', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:small_tank', 'pneumaticcraft:reinforced_pressure_tube', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:reinforced_pressure_tube'],Item.of('pneumaticcraft:fluid_mixer', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	shapex(['pneumaticcraft:uv_light_box'],Item.of('pneumaticcraft:uv_light_box', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	shapex(['pneumaticcraft:ingot_iron_compressed', 'bluepower:cagelamp_rgb', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:reinforced_pressure_tube', 'kubejs:blank', 'pneumaticcraft:reinforced_pressure_tube', 'pneumaticcraft:ingot_iron_compressed', 'bluepower:cagelamp_rgb', 'pneumaticcraft:ingot_iron_compressed'],Item.of('pneumaticcraft:uv_light_box', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	shapex(['pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:small_tank', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed', 'kubejs:blank', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed'],'pneumaticcraft:etching_tank')
	shapex(['minecraft:observer', 'bluepower:blue_doped_wafer', 'minecraft:observer'],'minecraft:daylight_detector')
	shapex(['pneumaticcraft:assembly_controller'],Item.of('pneumaticcraft:assembly_controller', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	
	
	shapex(['minecraft:air','pneumaticcraft:pressure_gauge','minecraft:air', 'pneumaticcraft:plastic', 'pneumaticcraft:module_expansion_card', 'pneumaticcraft:plastic', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:reinforced_pressure_tube', 'pneumaticcraft:ingot_iron_compressed'],Item.of('pneumaticcraft:assembly_controller', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	shapex(['pneumaticcraft:plastic','minecraft:air', 'pneumaticcraft:plastic', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed'],'pneumaticcraft:assembly_platform')
	shapex(['minecraft:air','pneumaticcraft:module_expansion_card', 'pneumaticcraft:transistor', 'pneumaticcraft:plastic', 'pneumaticcraft:module_expansion_card', 'pneumaticcraft:plastic', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed'],'pneumaticcraft:assembly_laser')
	shapex(['minecraft:air','pneumaticcraft:module_expansion_card', 'pneumaticcraft:capacitor', 'pneumaticcraft:plastic', 'pneumaticcraft:module_expansion_card', 'pneumaticcraft:plastic', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed'],'pneumaticcraft:assembly_drill')
	shapex(['minecraft:air','minecraft:hopper','minecraft:air', 'pneumaticcraft:plastic', 'pneumaticcraft:module_expansion_card', 'pneumaticcraft:plastic', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed'],'pneumaticcraft:assembly_io_unit_import')
	shapex(['minecraft:air','uppers:upper','minecraft:air', 'pneumaticcraft:plastic', 'pneumaticcraft:module_expansion_card', 'pneumaticcraft:plastic', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:ingot_iron_compressed'],'pneumaticcraft:assembly_io_unit_export')

	shapex(['minecraft:air','pneumaticcraft:reinforced_pressure_tube','minecraft:air','minecraft:air','minecraft:smooth_stone_slab','minecraft:air'],Item.of('pneumaticcraft:charging_station', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	shapex(['pneumaticcraft:charging_station'],Item.of('pneumaticcraft:charging_station', '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'))
	
	shapex(['sophisticatedstorage:advanced_hopper_upgrade', 'sophisticatedstorage:advanced_compacting_upgrade', 'sophisticatedstorage:compression_upgrade', 'sophisticatedstorage:compacting_upgrade', 'craftingstation:crafting_station', 'sophisticatedstorage:compacting_upgrade', 'sophisticatedstorage:compression_upgrade', 'sophisticatedstorage:advanced_compacting_upgrade', 'sophisticatedstorage:advanced_hopper_upgrade'],'cyclic:packager')
	shapex(['sophisticatedstorage:crafting_upgrade', 'pneumaticcraft:ingot_iron_compressed', 'sophisticatedstorage:crafting_upgrade', 'pneumaticcraft:ingot_iron_compressed', 'cyclic:packager', 'pneumaticcraft:ingot_iron_compressed', 'sophisticatedstorage:crafting_upgrade', 'pneumaticcraft:ingot_iron_compressed', 'sophisticatedstorage:crafting_upgrade'],'cyclic:crafter')
	
	shapex(['pneumaticcraft:ingot_iron_compressed', 'integrateddynamics:cable', 'pneumaticcraft:ingot_iron_compressed'],'16x pneumaticcraft:reinforced_pressure_tube')
	
	
	shapex(['bluepower:reinforced_sapphire_glass', 'cyclic:gem_obsidian', 'bluepower:reinforced_sapphire_glass', 'bluepower:sapphire_glass', 'pneumaticcraft:medium_tank', 'bluepower:sapphire_glass', 'bluepower:sapphire_glass', 'minecraft:lapis_block', 'bluepower:sapphire_glass'],'cyclic:solidifier')
	shapex(['bluepower:reinforced_sapphire_glass', 'cyclic:gem_obsidian', 'bluepower:reinforced_sapphire_glass', 'bluepower:sapphire_glass', 'pneumaticcraft:medium_tank', 'bluepower:sapphire_glass', 'bluepower:sapphire_glass', 'minecraft:redstone_block', 'bluepower:sapphire_glass'],'cyclic:melter')
	

	shapex(['minecraft:air','minecraft:gold_ingot', 'homespun:copper_nugget', 'bluepower:brass_ingot', 'minecraft:golden_boots', 'minecraft:gold_ingot', 'homespun:copper_nugget', 'bluepower:brass_ingot'],'thermal:diving_boots')
	shapex(['minecraft:string', 'minecraft:saddle', 'minecraft:string', 'minecraft:phantom_membrane','minecraft:air', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane','minecraft:air', 'minecraft:phantom_membrane'],'minecraft:elytra')

	
	    event.shaped(Item.of('kubejs:crook', '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:blank_rune"}}').enchant('minecraft:fortune', 10), [
            'SS ',
            ' S ',
            ' S '
        ], {
        S: 'minecraft:stick'
    })
    //
    //
    //
	
	shapex(['nuclearcraft:plate_basic', 'nuclearcraft:empty_sink', 'nuclearcraft:plate_basic', 'nuclearcraft:empty_sink', 'nuclearcraft:steel_frame', 'nuclearcraft:empty_sink', 'nuclearcraft:plate_basic', 'nuclearcraft:plate_basic', 'nuclearcraft:plate_basic'],'nuclearcraft:alloy_smelter')
	shapex(['nuclearcraft:empty_sink', 'nuclearcraft:empty_sink', 'nuclearcraft:empty_sink', 'nuclearcraft:empty_sink', 'nuclearcraft:empty_sink', 'nuclearcraft:empty_sink', 'nuclearcraft:plate_basic', 'nuclearcraft:steel_frame', 'nuclearcraft:plate_basic'],'nuclearcraft:assembler')
	
	
	
	
	
})
